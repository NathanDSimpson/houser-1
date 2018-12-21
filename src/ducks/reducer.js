let initialState = {
    name: '',
    address: '',
    city: '',
    st: '',
    zip: 0,
    img: '',
    mortgage: 0.00,
    rent: 0.00
}

// CONSTANTS
const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE'
const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO'
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE'
const FORGET_VALUES = 'FORGET_VALUES'


function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_STEP_ONE:
            // const {name, address, city, state, zip} = action.payload
            return Object.assign({}, state, { name: action.payload.name, address: action.payload.address, city: action.payload.city, st: action.payload.st, zip: action.payload.zip })
        case UPDATE_STEP_TWO:
            return Object.assign({}, state, { img: action.payload })
        case UPDATE_STEP_THREE:
            return Object.assign({}, state, { mortgage: action.payload.mortgage, rent: action.payload.rent })
        case FORGET_VALUES:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}

// ACTION BUILDERS
export function updateStepOne(name, address, city, st, zip) {
    return {
        type: UPDATE_STEP_ONE,
        payload: { name, address, city, st, zip }
    }
}
export function updateStepTwo(img) {
    return {
        type: UPDATE_STEP_TWO,
        payload: img
    }
}
export function updateStepThree(mortgage, rent) {
    return {
        type: UPDATE_STEP_THREE,
        payload: { mortgage, rent }
    }
}
export function forgetValues() {
    return {
        type: FORGET_VALUES,
        payload: initialState
    }
}

export default reducer