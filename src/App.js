import React, {Component} from 'react';
import './App.css';
import photo from "./images/dog.jpg"
import photo_2 from "./images/dog_2.png"

import voice from "./images/dog.mp3"
import {connect} from "react-redux";
import {imageClick, randomImage} from "./redux/reducer";

class App extends Component {
    componentDidMount() {
        this.audioRef=React.createRef()
        setInterval (()=>{
            this.props.randomImage()

        },1000)
    }

    onImageClick = () => {
        this.audioRef.current.currentTime=0
        this.audioRef.current.play()
        this.props.imageClick()
    }

    render() {
    const photos = [
        {id:0},
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
    ]

        const elements = photos.map(d => <div className="item"><img src={this.props.firstPhoto} onClick={this.onImageClick}
            className={this.props.currentPhotoId === d.id? "photo show": "photo"}/></div>)

        return (
            <div>
                <audio ref={this.audioRef} src={voice}></audio>
                <div className="wrapper">
                    {elements}
                </div>
                <div className="counter">
                    {this.props.counter}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentPhotoId: state.currentPhotoId,
        counter: state.counter,
        firstPhoto: state.firstPhoto
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        imageClick: () => {
            dispatch(imageClick())
        },
        randomImage: () => {
            dispatch(randomImage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
