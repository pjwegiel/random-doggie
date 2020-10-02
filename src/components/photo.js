import React, {Component} from 'react';
import Axios from 'axios';
import './photo.css';

class Photo extends Component {

    state = {
        img: ''
    }

    componentDidMount() {
        Axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({img: response.data.message});
            });

        console.log(this.state.img);
    }


    render() { 
        return (
            <div>
                <img className="photo" src={this.state.img} alt="A dog"></img>
            </div>
        );
    }

}

export default Photo;
