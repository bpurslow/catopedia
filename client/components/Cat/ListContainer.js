/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'
import PropTypes from 'prop-types';

import Loader from '../Loader'

import {fetchCatList} from '../../services/Cat'
import ListView from "./ListView";
import CardView from "./CardView";
import LikedFilter from "../Generic/LikedFilter"
import {Route} from "react-router-dom";
import DetailContainer from "./DetailContainer";
import PageTitle from "../Generic/PageTitle";

class ListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            list: null,
            isLikedOnly: false,
        };

        this.handleLikedFilter = this.handleLikedFilter.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    handleLikedFilter() {
        // Set filter state for cat list
        this.setState({
            isLikedOnly: !this.state.isLikedOnly
        })
    }

    handleLike(id) {
        // TODO: This is not recommended. If you ever update the component, all state changes will be lost
        // Only use here is to skip using redux/flux for prototype purposes
        // If I have time I'll add redux/flux later and remove this abomination

        const list = this.state.list;
        console.log(list)
        const userHasLiked = !list[id-1].userHasLiked;
        list[id-1].userHasLiked = userHasLiked;
        list[id-1].likes = userHasLiked ?  list[id-1].likes += 1 : list[id-1].likes -= 1;
        this.setState({
            list
        })
    }

    componentDidMount() {
        // Fetch List of Cats from fakeApi
        fetchCatList().then((data) => {
            this.setState({
                loading: false,
                list: data
            })
        });
    }

    __renderCats(catList) {
        // Iterate over cats and generate the card components for each

        if (this.state.isLikedOnly) {
            // If filter is applied, only show liked cats
            catList = catList.filter(function(cat) {
                return cat.userHasLiked === true;
            })
        }
        return catList.length > 0 ?
            catList.map((cat,index) => (
                    <CardView
                        key={index}
                        obj={cat}
                        id={cat.id}
                        onLiked={this.handleLike}
                        {...this.props}
                    />
            ))
            :
            <div className="list--empty">
                No Cats :(
            </div>
    }

    render() {
        return this.state.loading ?
            <Loader/>
            :
            <section>
                <Route path={`${this.props.match.url}/:name`} component={DetailContainer}/>
                <Route exact path={this.props.match.url} render={() => (
                    <section className="listContainer">
                        <PageTitle pageTitle="Cat-alogue"/>
                        <ListView>
                            {this.__renderCats(this.state.list)}
                        </ListView>
                        <LikedFilter  onLikedFilter={this.handleLikedFilter}/>
                    </section>
                )}/>
            </section>
    }
}

export default ListContainer