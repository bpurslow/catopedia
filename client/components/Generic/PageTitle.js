/**
 * Created by benpurslow on 08/07/2017.
 */
import React from 'react';
import {Link} from "react-router-dom";

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            defaultPath: {
                url:"/",
                text:"Home"
            }
        })
    }

    __renderBreadcrumbs() {
        return this.props.breadcrumbs.map((link, i) => {
            console.log(this.props.link)
            return <Link key={i} to={link.url}>{link.text}</Link>
        }) || [];
    }

    render() {


        return (
            <section className="breadcrumbs">
                <Link key={0} to={this.state.defaultPath.url}>{this.state.defaultPath.text}</Link>
                {this.__renderBreadcrumbs()}
                <div>You are now at {location.pathname}</div>
            </section>
        )
    }
}

export default Breadcrumbs;