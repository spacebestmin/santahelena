import React, { Component } from 'react';
import axios from 'axios'

export default class CreateSanta extends Component{
    constructor(props){
        super(props);

        this.onChangeSantaname = this.onChangeSantaname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            santaname: ''
        }
        
    }

    onChangeSantaname(e){
        this.setState({
            santaname:e.target.value
        })

    }

    onSubmit(e){
        e.preventDefault();

        const santa = {
            santaname:this.state.santaname,
        }

        console.log(santa);
        
        axios.post('http://localhost:5000/santas/add', santa)
        .then(res => console.log(res.data));
    }
    render(){
        return(
            <div>
                <h3>Create New Wonderful Gorgeouse Another Santa</h3>
                {/* waiting for update signal from WDS happens
                when i did not attach onSubmit for the form */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>SantaName:</label>
                        <input type="text"
                                required
                                className="form-control"
                                value={this.state.santaname}
                                onChange={this.onChangeSantaname}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btb=primary"/>
                    </div>
                </form>
            </div>
        )
    }


}