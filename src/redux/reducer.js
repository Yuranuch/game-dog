import photo from "../images/dog.jpg"
import photo_2 from "../images/dog_2.png"

export const IMAGE_CLICK = "IMAGE_CLICK"
export const RANDOM_IMAGE = "RANDOM_IMAGE"
export const START_EVENTS = "START_EVENTS"
export const START_ANIMATION = "START_ANIMATION"
export const STOP_ANIMATION = "STOP_ANIMATION"
export const STOP_EVENTS = "STOP_EVENTS"


// функция, которую если вызвать, вернёт нам случайное число от 0 до 8
function getRandomImageIndex() {
    return Math.floor(Math.random() * 9);

}

const initialState = {
    currentPhotoId: 1,
    counter: 1,
    firstPhoto: photo,
    disableState: true,
    animation: false,
    timeOut: 5,
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case IMAGE_CLICK:
            return {
                ...state,
                counter: state.counter +1,
            }
        case RANDOM_IMAGE:
            return {
                ...state,
                currentPhotoId: getRandomImageIndex(),

            }
            case START_EVENTS:
                return {
                ...state,
                    disableState: false
                }
        case START_ANIMATION:
            return {
                ...state,
                animation: true
            }
        case STOP_ANIMATION:
            return {
                ...state,
                animation: false
            }
        case STOP_EVENTS:
            return {
                ...state,
                disableState: true
            }

    }
    return state
}

export const imageClick = () => ({type: IMAGE_CLICK})
export const randomImage = () => ({type: RANDOM_IMAGE})
export const startEvents = () => ({type: START_EVENTS})
export const startAnimation = () => ({type: START_ANIMATION})
export const stopAnimation = () => ({type: STOP_ANIMATION})
export const stopEvents = () => ({type: STOP_EVENTS})



