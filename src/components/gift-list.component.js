import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gift = props => (
    <tr>
        <td>{props.gift.santaname}</td>
        <td>{props.gift.gift}</td>
        <td>{props.gift.task}</td>
        <td>{props.gift.deadline}</td>
        <td>{props.gift.link}</td>
        <td>
            <Link to={"/edit/"+props.gift._id}>edit</Link> | 
            <a href="#" onClick={() => { props.deleteGift(props.gift._id)}}> delete</a>
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
        axios.get('http://localhost:5000/gifts/')
        .then(response => {
            this.setState({gifts: response.data}) 
        })
            // the url gets the response
            //which is the whole data of the gift table = gifts
            .catch((error) => {
                console.log(error);
            })
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
                        <th>SantaName</th>
                        <th>SantaGift</th>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th>link</th>
                        <th>Actions</th>
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
