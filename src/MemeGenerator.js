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
        this.changeHandler = this.changeHandler.bind(this)
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

    changeHandler(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form className="meme-form">

                    <button>Generate Meme</button>
                    <br />
                    <br />
                    <input 
                    name="topText"
                    value={this.state.topText}
                    placeholder="Enter top line text"
                    onChange={this.changeHandler}
                    />
                    <br />
                    <br />
                    <input 
                    name="bottomText"
                    value={this.state.bottomText}
                    placeholder="Enter bottom line text"
                    onChange={this.changeHandler}
                    />


                    {/* <img src={this.state.randomImg}></img> */}
                </form>

                <h1>topText: {this.state.topText}</h1>
                <h1>bottomText: {this.state.bottomText}</h1>
            </div>
        )
    }
}

export default MemeGenerator