import React from 'react';
import Header from './Header';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.ytimg.com/vi/O1hCLBTD5RM/maxresdefault.jpg"
        }
    }

    handleDidMount() {
        // .fetch("")
        // .then()
    }

    render() {
        return (
            <div>
                <h1>MEME GENERATOR SECTION</h1>
                <p>I hope you enjoy these Jerome Powell Memes: {this.state.topText}</p>
                <img src={this.state.randomImg}></img>
                <p>Buy Gold! {this.state.topText}</p>
            </div>
        )
    }
}

export default MemeGenerator