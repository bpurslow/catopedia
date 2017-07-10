/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import cat from '../../img/cat8.png'
import likeButton from '../../img/favorite-outline.svg'
import activeLikeButton from '../../img/favorite.svg'
import arrowButton from '../../img/arrow-forward.svg'

class CardView extends React.Component {
    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(id) {
    // Pass id up to parent for action
        this.props.onLiked(id);
    }

    render() {
        return (
            <section className="cardWrapper">
                <section className="card">
                    <div className="card__image">
                        <Link to={`/${this.props.obj.slug}`} replace>
                            <img src={this.props.obj.image}/>
                        </Link>
                    </div>
                    <section className="card__actions">
                        <div className="likes">
                            {
                                this.props.obj.userHasLiked ?
                                    <img src={activeLikeButton} onClick={() => this.handleLike(this.props.id)}/>
                                    :
                                    <img src={likeButton} onClick={() => this.handleLike(this.props.id)}/>
                            }
                            {this.props.obj.userHasLiked}
                            <div className="likes__counter"> {this.props.obj.likes} Likes</div>
                        </div>
                        <div className="card__detail">
                            <Link to={`/cat-alogue/${this.props.obj.slug}`} replace>
                                <img src={arrowButton}/>
                            </Link>
                        </div>
                    </section>

                </section>
            </section>
        )
    }
}

export default CardView;