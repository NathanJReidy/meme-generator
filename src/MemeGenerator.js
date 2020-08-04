import React from 'react';
import Header from './Header';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.ytimg.com/vi/O1hCLBTD5RM/maxresdefault.jpg",
            allMemeImgs: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({allMemeImgs: memes})
            })
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