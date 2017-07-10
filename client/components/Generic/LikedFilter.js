/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'

import filterButton from '../../img/favorite-outline.svg'
import activeFilterButton from '../../img/favorite.svg'

class LikedFilter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            active: false
        };
        this.handleLikedChange = this.handleLikedChange.bind(this)
    }

    handleLikedChange() {
        // Passes filter state up to parent for cat list filtering
        this.props.onLikedFilter();
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <section className="filter">
                <div className="filter__button" onClick={this.handleLikedChange} style={{background: filterButton}}>
                    <img src={this.state.active ? activeFilterButton : filterButton}/>
                </div>
            </section>
        )
    }
}

export default LikedFilter;