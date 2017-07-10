/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import activeLikeButton from '../../img/favorite.svg'
import likeButton from '../../img/favorite-outline.svg'

class DetailView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            like: false
        };

        this.handleLike = this.handleLike.bind(this)
    }

    handleLike() {
        this.setState({
            "like": !this.state.like,
        })
    }

    render() {
        return (
            <section className="detail">
                <div className="detail__image">
                    <img src={this.props.data.image} />
                </div>
                <section className="detail__right">
                    <section className="detail__text">
                        <div className="detail__title">
                            {this.props.data.title}
                        </div>
                        <div className="detail__body">
                            {this.props.data.body}
                        </div>
                    </section>
                    <section className="detail__actions">
                        <div className="likes">
                            {
                                this.state.like ?
                                    <img src={activeLikeButton} onClick={this.handleLike}/>
                                    :
                                    <img src={likeButton} onClick={this.handleLike}/>
                            }
                            <div className="likes__counter"> {this.props.data.likes} Likes</div>
                        </div>
                        <Link to="/cat-alogue" className="back">
                            Back to cat-alogue
                        </Link>
                    </section>
                </section>
            </section>
        )
    }
}

export default DetailView;