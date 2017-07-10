import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <section className="home">
                Find a cat for your cat!
                <Link to="/cat-alogue">Start Here!</Link>
            </section>
        )
    }
}

export default Home;