import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
//import axios from 'axios';
const production = 'santahelena/herokuapp.com'
const dev = 'http://localhost:5000'
const baseUrl =(process.env.NODE_ENV ? production : dev)

export default class CreateGift extends Component{
    constructor(props){
        super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSantaname = this.onChangeSantaname.bind(this);
    this.onChangeGift = this.onChangeGift.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);

    
    this.state = {
        santaname: '',
        gift:'',
        task:'',
        deadline: new Date(),
        link:'',
        santas: []
    }
    }

    //when the component is mounted, 
    //presetting work for expected proper action of the component
    componentDidMount(){
        axios.get(baseUrl+'/santas/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    santas: response.data.map(santa => santa.santaname),
                    santaname: response.data[0].santaname
                })
            }
        })

        axios.get(baseUrl+'/santas/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    santas: response.data.map(santa => santa.santaname),
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })
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
    //Be careful dealing with Date object PLZ
    onChangeDeadline(Date){
        this.setState({
            deadline:Date
        })
    }

    onChangeLink(e){
        this.setState({
            link:e.target.value
        })
    }

    //when submitting, prevent default action
    //and get the changed value from the form
    //make a JSON object with it
    //and post it to server using axios
    onSubmit(e) {
        e.preventDefault();

        const gift = {
            santaname: this.state.santaname,
            gift: this.state.gift,
            task: this.state.task,
            deadline: this.state.deadline,
            link: this.state.link,
        }

        console.log(gift);

        axios.post(baseUrl+'/gifts/add', gift)
        .then(res => console.log(res.data));

        //set the url where the user will see after submitting
        window.location = '/';
    }

    render(){
        return (
            <div>
                <h3>Create New Lovely Adorable Gift</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Santa Name</label>
                        <select
                        
                        onChange={this.onChangeSantaname}
                        required
                        className="form-control"
                        value={this.state.santaname}
                        >
                            {                                
                                this.state.santas.map(function(santa){
                                    return (<option 
                                    key={santa} 
                                    value={santa}>
                                        {santa}
                                    </option>)
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
                            onChange={this.onChangeGift}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.task}
                            onChange={this.onChangeTask}
                        />
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
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
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create fancy wish"
                        className="btn btn=primary"/>
                    </div>
                </form>
            </div>
        )
    }
}