import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="img bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc" >
            <img alt="Robot Photo" src={`https://robohash.org/${this.props.id}`}></img>
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.email}</h3>
            </div>
            </div>
        )
    }
}

