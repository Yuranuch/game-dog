import React, {Component} from 'react';
import './App.css';
import photo from "./images/dog.jpg"
import {connect} from "react-redux";
import {imageClick, randomImage} from "./redux/reducer";

class App extends Component {
    componentDidMount() {
        setInterval (()=>{
            this.props.randomImage()
        },1000)
    }

    onImageClick = () => {
        this.props.imageClick()
    }
    getRandomImageIndex = ()=> {
        return Math.floor(Math.random() * 9);
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

        const elements = photos.map(d => <div className="item"><img src={photo} onClick={this.onImageClick}
            className={this.props.currentPhotoId === d.id? "photo show": "photo"}/></div>)


        return (
            <div>
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
        counter: state.counter

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
