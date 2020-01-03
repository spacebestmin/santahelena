import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';
import { throwStatement } from '@babel/types';

const Gift = props => (
    <tr>
        <td>{props.gift.santaname}</td>
        <td>{props.gift.gift}</td>
        <td>{props.gift.task}</td>
        <td>{props.gift.deadline}</td>
        <td>{props.gift.link}</td>
        <td>
            <Link> to={"/edit/"+props.gift._id}edit</Link> | 
            <a href="#" onClick={() => { props.deleteGift(props.gift._id)}}/>
        </td>
    </tr>
)

export default class GiftList extends Component {
    constructor(props){
        super(props);

        //what is this for??
        this.state = {gifts: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/gifts')
        then(response => {
            this.setState({gifts: response.data})
        })
        .catch((error))
    }

    deleteGift(id) {
        axios.delete('http://localhost:5000/gifts/' + id)
        .then(res => console.log("the gift is deleted"));
    }

    giftList(){
        return this.state.gifts.map(currentgift => {
            return <Gift gift = {currentgift}
                    deleteGift={this.deleteGift}
                    key={currentgift._id}/>
        })
    }

    render(){
        return (
            <div>
                <h3>Upcoming Gifts</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <tr>SantaName</tr>
                        <tr>SantaGift</tr>
                        <tr>Task</tr>
                        <tr>Deadline</tr>
                        <tr>link</tr>
                    </tr>
                    </thead>
                    <tbody>
                        { this.giftList() }
                    </tbody>
                </table>
            </div>   
        )
    }
}
