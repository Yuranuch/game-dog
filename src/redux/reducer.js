import photo from "../images/dog.jpg"

export const IMAGE_CLICK = "IMAGE_CLICK"
export const RANDOM_IMAGE = "RANDOM_IMAGE"

// функция, которую если вызвать, вернёт нам случайное число от 0 до 8
function getRandomImageIndex() {
    return Math.floor(Math.random() * 9);

}

const initialState = {
    currentPhotoId: 1,
    counter: 1,
    firstPhoto: photo
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case IMAGE_CLICK:

            return {
                ...state,
                counter: state.counter +1
            }
        case RANDOM_IMAGE:
            return {
                ...state,
                currentPhotoId: getRandomImageIndex(),
            }

    }
    return state
}


export const imageClick = () => ({type: IMAGE_CLICK})
export const randomImage = () => ({type: RANDOM_IMAGE})

