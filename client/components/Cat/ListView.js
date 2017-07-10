/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'

class ListView extends React.Component {
    // Basic list view that shows whatever children are passed to it

    render() {
        return (
            <section className="list">
                {this.props.children}
            </section>
        )
    }
}

export default ListView;