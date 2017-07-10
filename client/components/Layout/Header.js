/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'

import catLogo from '../../img/cat.svg'
import menuButton from '../../img/Group 2.png'
import {Link} from "react-router-dom";


class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeHamburger: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Handle hamburger click, pass up to parent for action
        this.setState({
            activeHamburger: !this.state.activeHamburger
        });
        this.props.menuClick()
    }

    render() {
        return (
            <header className={`header ${this.state.activeHamburger ? " header--active" : ""}`}>
                <Link to={"/"} className={"header__link"}>
                    <div className="header__logo">
                        <img src={catLogo}/>
                    </div>
                    <div className="header__title">
                        Catopedia
                        <div className="subtitle">
                            Buy cats for cats!
                        </div>
                    </div>
                </Link>

                {/* Recreation of asset, allows for more manipulation */}
                <div className={`hamburger${this.state.activeHamburger ? " hamburger--active" : ""}`} onClick={this.handleClick}>
                    <div className="hamburger__bar"/>
                    <div className="hamburger__bar"/>
                    <div className="hamburger__bar"/>
                </div>
            </header>
        )
    }
}

export default Header