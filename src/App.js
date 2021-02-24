import React, { Component } from 'react'
import CardList from './components/CardList';
import { RobotData } from "./RobotData";
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            RobotData: [],
            searchItem: "",
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ RobotData: users }));

        // this.setState({RobotData:RobotData})
    }

    searchItem = (event) => {
        this.setState({ searchItem: event.target.value })
    }
    
    render() {
        const filteredRobots = this.state.RobotData.filter(items => {
            return items.name.toLowerCase().includes(this.state.searchItem.toLowerCase())
        });

        return (
            <div className="tc">
                <h1 className="bg">RoboFriends</h1>
                <SearchBar searchItem={this.searchItem} />
                <Scroll>
                    <CardList RobotData={filteredRobots}></CardList>
                </Scroll>
            </div>
        )
    }
}

