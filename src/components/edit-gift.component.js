import React, { Componen } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { render } from '@testing-library/react';

export default class EditGift extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSantaname = this.onChangeSantaname.bind(this);


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
                    santas: response.data.map(santa.santaname),
                })
            }
        })
    }

    onSubmit(e){
        e.preventDefault();
    }

    onChangeSantaname(e){
        this.setState({
            santaname:e.target.value
        })

    }

    render(){
        return(
            <div>
                <h3>Edit Precious Dearest Gifts</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Santaname: </label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.santaname}
                    onChange={this.onChangeSantaname}>
                    {
                        this.state.santas.map(function(santa){
                            return <option key={santa} value={santa}>
                            {santa}
                            </option>
                        })
                    }
                    
                    </select>
                    
                </div>


                </form>
            </div>
        )
    }
}
