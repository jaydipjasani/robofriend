import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue text" 
                type="search" placeholder="Search Robot"
                onChange={this.props.searchItem}/>
            </div>
        )
    }
}
