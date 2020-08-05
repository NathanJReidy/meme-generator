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
                    <br />
                    <br />
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Enter top line text"
                        onChange={this.changeHandler}
                    />
                    <br />
                    <br />
                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Enter bottom line text"
                        onChange={this.changeHandler}
                    />

                <button>Generate</button>

                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt=""></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator