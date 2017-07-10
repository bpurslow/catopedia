/**
 * Created by benpurslow on 07/07/2017.
 */
import React from "react";
import DetailView from "./DetailView";
import Loader from "../Loader";

import {fetchCatData, fetchCatAlternatives} from "../../services/Cat";
import Carousel from "../Generic/Carousel";
import CardView from "./CardView";
import PageTitle from "../Generic/PageTitle";

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailLoading: true,
            alternativesLoading: true,
            data: null,
            alternatives: null,
        };
    }

    __renderAlternatives(alternatives) {
        // Iterate over the list of alternative cats and generate card components for each
        return alternatives.length > 0 ?
            alternatives.map((cat,index) => (
                    <CardView
                        key={index}
                        obj={cat}
                        id={index}
                        onLiked={this.handleLike}
                        {...this.props}
                    />
            ))
            :
            <div className="list--empty">
                No Cats Found
            </div>
    }

    componentDidMount() {
        // Fetch Cat Details for cat with name x
        fetchCatData(this.props.match.params.name).then((data) => {
            if (data.success === true){
                this.setState({
                    detailLoading: false,
                    data: data,
                    pageTitle: data.name,
                });
            } else {
                this.props.history.replace('/404')
            }
        });
        // Fetch Cat Alternatives for cat with name x
        fetchCatAlternatives(this.props.match.params.name).then((alternatives) => {
            this.setState({
                alternativesLoading: false,
                alternatives: alternatives
            })
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps === undefined) {
            return false
        }

        if (prevProps.match.params.name !== this.props.match.params.name) {
            // Only load new page if old name is different to new one

            // Reset Loader for detail page
            this.setState({
                 detailLoading: true,
                 alternativesLoading: true
            });
            // Fetch new cat data
            fetchCatData(this.props.match.params.name).then((data) => {
                this.setState({
                    detailLoading: false,
                    data: data,
                    pageTitle: data.name,
                });
            });
            // Fetch new cat alternatives
            fetchCatAlternatives(this.props.match.params.id).then((alternatives) => {
                this.setState({
                    alternativesLoading: false,
                    alternatives: alternatives
                })
            });
            window.scrollTo(0, 0)
        }
    }

    render() {

        if(this.state.detailLoading) {
            return <Loader/>
        } else {
            return (
                <section>
                    <PageTitle pageTitle={this.state.pageTitle}/>
                    <DetailView data={this.state.data} onLike={this.handleLike}/>

                    <section className="detail__other">
                        <div className="detail__other__title">
                            Other kitties related to {this.state.pageTitle}
                        </div>
                        {
                            this.state.alternativesLoading ?
                                <Loader/>
                                    :
                                <Carousel itemWidth={320}>
                                    {this.__renderAlternatives(this.state.alternatives)}
                                </Carousel>
                        }
                    </section>
                </section>
            )
        }
    }
}

export default DetailContainer