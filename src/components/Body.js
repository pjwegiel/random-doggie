import React, { Component } from 'react';
import Axios from 'axios';

class Body extends Component {

    state = {
        img: ''
    }

    componentDidMount() {
        Axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({img: response.data.message});
            });
    }
    
    render() { 
        const clickHandler = () => {
            Axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({img: response.data.message});
            });
        }
        return (
            <div style={{textAlign: 'center'}}>
                <img className="photo" src={this.state.img} style={{width: "100%", position: 'absolute', left:'0'}} alt="A dog"></img>
                <br></br>
                <button onClick={clickHandler} className="btn btn-primary" style={{position: 'fixed', bottom:'10%'}}>Random</button>
            </div>
        );
    }
}

export default Body;