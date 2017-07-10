/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'

import catLoader from '../img/cat.svg'

class Loader extends React.Component {

    render() {
        return (
            <section className="loader">
                <img src={catLoader}/>
            </section>
        )
    }
}

export default Loader