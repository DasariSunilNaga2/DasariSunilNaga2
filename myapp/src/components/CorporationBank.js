import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render() {
        return (
            <div>
                <h1>CarporationBank is located @{this.props.location}</h1>
            </div>
        )
    }
}
