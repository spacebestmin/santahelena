import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateGift extends Component{
    constructor(props){
        super(props);



    this.state = {
        santaname: '',
        gift:'',
        task:'',
        deadline: new Date(),
        link:'',
        santas: []
    }
    }

    render(){
        return (
            // santaname:{type:String, required: true},
            // gift:{type: String, required: true},
            // task:{type: String, required: true},
            // deadline:{type: Date, required:true},
            // link:{type:String, required: true},
            <div>
                <h3>Create New Lovely Adorable Gift</h3>
                <form>
                    <div className="form-group">
                        <label>Santa Name</label>
                        <select ref={this.state.santas}
                        required
                        className="form-control"
                        value={this.state.santaname}
                        >
                            {
                                this.state.santas.map(function(santa){
                                    return <option key={santa} value={santa}>
                                        {santa}

                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Gift Name</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.gift}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.task}
                        />
                    </div>
                    <div className="form-group">
                        <label>deadline</label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Link</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.link}
                        />
                        
                    </div>

                </form>
            </div>
        )
    }
}