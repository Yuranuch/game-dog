import React, {Component} from "react"
import "./App.css"

import voice from "./images/dog.mp3"
import {connect} from "react-redux"
import {
    imageClick,
    randomImage,
    startAnimation,
    startEvents,
    stopAnimation,
    stopEvents
} from "./redux/reducer";

class App extends Component {
    componentDidMount() {
        this.audioRef = React.createRef()
    }

    onImageClick = () => {
        this.audioRef.current.currentTime = 0
        this.audioRef.current.play()
        this.props.imageClick()
    }

    onStartEvents = () => {
        this.props.startEvents()
        this.props.startAnimation()
        setInterval(() => {
            if (this.props.animation) {
                this.props.randomImage()
                this.deadDogs()
            }

        }, 1000)

    }
    onStopEvents = () => {
        this.props.stopAnimation()
        this.props.stopEvents()
    }

    render() {
        const photos = [
            {id: 0},
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6},
            {id: 7},
            {id: 8},
        ]

        const elements = photos.map(d => <div className="item">
            <img src={this.props.firstPhoto}
                 onClick={this.onImageClick}
                 className={this.props.currentPhotoId === d.id ? "photo show" : "photo"}/>
        </div>)

        return (
            <div className="App">
                <audio ref={this.audioRef} src={voice}></audio>
                <div className="navigation">
                    <button onClick={this.onStartEvents}>Start</button>
                    <button onClick={this.onStopEvents}>Stop</button>
                </div>
                <div className={this.props.disableState === true ? "disable" : "wrapper"}>
                    {elements}
                </div>
                <div className="counter">
                    {this.props.counter}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPhotoId: state.currentPhotoId,
        counter: state.counter,
        firstPhoto: state.firstPhoto,
        disableState: state.disableState,
        animation: state.animation,
        timeOut: state.timeOut
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        imageClick: () => {
            dispatch(imageClick())
        },
        randomImage: () => {
            dispatch(randomImage())
        },
        startEvents: () => {
            dispatch(startEvents())
        },
        startAnimation: () => {
            dispatch(startAnimation())
        },
        stopAnimation: () => {
            dispatch(stopAnimation())
        },
        stopEvents: () => {
            dispatch(stopEvents())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
