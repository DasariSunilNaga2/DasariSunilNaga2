import React, { Component } from 'react'

export default class AndhraBank extends Component {
    render(props) {
        return (
            <div>
                <h1>AndhraBank is located @ {this.props.location}</h1>
            </div>
        )
    }
}
