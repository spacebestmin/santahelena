import React, { Component } from 'react'
import axios from 'axios'
const baseUrl = process.env.baseURL || "http://localhost:5000";

const Santa = props => (
    <tr>
        <td>{props.santa.santaname}</td>
        <td>
            <a href="#" onClick={() => {
                props.deleteSanta(props.santa._id)
                window.location = baseUrl+'/manage';

            }
                }>delete</a>
        </td>
    </tr>
)

export default class ManageSanta extends Component{
    constructor(props){
        super(props);

        this.state = {santas : []};
    }

    componentDidMount(){
        axios.get(baseUrl+'/santas/')
        .then(response => {
            this.setState({santas: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteSanta(id){
        axios.delete(baseUrl+'/santas/' + id)
        .then(res => console.log("the santa is deleted"));
    }

    santaList(){
        return this.state.santas.map(currentsanta => {
            return <Santa santa = {currentsanta}
                        deleteSanta={this.deleteSanta}
                        key={currentsanta._id}/>
        })
    }

    render(){
        return (
            <div>
                <h3>Manage Santas</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                      <th>SantaName</th>
                       <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.santaList()}
                    </tbody>
                    

                </table>
            </div>

        )

    }
}