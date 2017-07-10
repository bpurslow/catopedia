/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'
import {Link} from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.linkClick()
    }

    render() {
        return (
            <section className={`menu${this.props.showMenu ?' menu--active' : ''}`}>
                {this.props.showMenu ?
                    <ul className="nav">
                        <Link onClick={this.handleClick} to="/"><li className="nav__link">Home</li></Link>
                        <Link onClick={this.handleClick} to="/cat-alogue"><li className="nav__link">Cat-alogue</li></Link>
                        <Link onClick={this.handleClick} to="/careers"><li className="nav__link">Careers</li></Link>
                        <Link onClick={this.handleClick} to="/contact"><li className="nav__link">Contact</li></Link>
                    </ul>
                :
                    null
                }
            </section>
        )
    }
}

export default Menu;