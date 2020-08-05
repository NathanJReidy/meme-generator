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
        //this.changeHandler = this.changeHandler.bind(this)
        this.chooseMeme = this.chooseMeme.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
                console.log(this.state.allMemeImgs)
            })
    }

    // NB: If we use an arrow function, we don't have to bind the function to the state in the constructor 
    changeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }


    chooseMeme(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState({randomImg: this.state.allMemeImgs[randomNum].url})
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.chooseMeme}>
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