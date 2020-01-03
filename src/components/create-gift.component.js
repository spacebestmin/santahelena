import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateGift extends Component{
    constructor(props){
        super(props);


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
                        <select> 

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Gift Name</label>
                        <input></input>
                    </div>
                    <div className="form-group">
                        <label>Task</label>
                        <input></input>
                    </div>
                    <div className="form-group">
                        <label>deadline</label>
                        <div>
                            <DatePicker
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Link</label>
                    </div>

                </form>
            </div>
        )
    }
}