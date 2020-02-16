import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditGift extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSantaname = this.onChangeSantaname.bind(this);
        this.onChangeGift = this.onChangeGift.bind(this);
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            santaname:'',
            gift:'',
            task:'',
            deadline:new Date(),
            link:'',
            santas:[],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/gifts/'+this.props.match.params.id)
        .then(response=> {
            this.setState({
                santaname: response.data.santaname,
                gift: response.data.gift,
                task: response.data.task,
                deadline:new Date(response.data.deadline),
                link: response.data.link,
            })
        })
        .catch(function (error){
            console.log(error);
        })

        axios.get('http://localhost:5000/santas/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    santas: response.data.map(santa => santa.santaname),
                })
            }
        })
        
    }

    onSubmit(e){
        e.preventDefault();

        const gift = {
            santaname: this.state.santaname,
            gift:this.state.gift,
            task:this.state.task,
            deadline:this.state.deadline,
            link:this.state.link
        }

        axios.post('http://localhost:5000/gifts/update/'+this.props.match.params.id, gift)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    onChangeSantaname(e){
        this.setState({
            santaname:e.target.value
        })

    }

    onChangeGift(e){
        this.setState({
            gift:e.target.value
        })
    }

    onChangeTask(e){
        this.setState({
            task:e.target.value
        })
    }

    onChangeDeadline(Date){
        this.setState({
            deadline: Date
        })
    }

    onChangeLink(e){
        this.setState({
            link:e.target.value
        })
    }
    render(){
        return(
            <div>
                <h3>Edit Precious Dearest Gifts</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
          <label>Santaname: </label>
          <select 
              required
              className="form-control"
              value={this.state.santaname}
              onChange={this.onChangeSantaname}>
              {
                this.state.santas.map(function(santa) {
                  return <option 
                    key={santa}
                    value={santa}>
                    {santa}
                    </option>;
                })
              }
          </select>
        </div>
                    
                    <div className="form-group">
                        <label>Gift Name:</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.gift || ""}
                        onChange={this.onChangeGift}
                        //setting on change to be
                        //onChange={this.state.onChangeGift}
                        //prevents editing from user
                        />
                    </div>

                    <div className="form-group">
                        <label>Task</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.task}
                        onChange={this.onChangeTask}/>
                    </div>

                    <div className="form-group">
                        <label>Deadline</label>
                        <div>
                            <DatePicker
                                selected={this.state.deadline}
                                onChange={this.onChangeDeadline}
                                />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Link</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.link}
                        onChange={this.onChangeLink}
                        >
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Save Changes"
                        className="btn btn=primary"></input>

                    </div>
                </form>
            </div>
        )
    }
}
