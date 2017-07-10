/**
 * Created by benpurslow on 08/07/2017.
 */
import React from 'react';

class PageTitle extends React.Component {
    // Generic Page Title component

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="pageTitle">
                {this.props.pageTitle}
            </section>
        )
    }
}

export default PageTitle;