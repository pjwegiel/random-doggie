import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import './Photo.css';

class Photo extends Component {
    state = {
        img: ''
    }

    componentDidMount() {
        Axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({img: response.data.message});
            });
    }

    render () {
        const clickHandler = () => {
            Axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({img: response.data.message});
            });
        }
        return (
            <div className="container">
                <img className="photo" src={this.state.img} alt="A dog"></img>
                <br></br>
                <button onClick={clickHandler} className="btn btn-primary">Random</button>
            </div>
        )
    }
}

export default withRouter(Photo);