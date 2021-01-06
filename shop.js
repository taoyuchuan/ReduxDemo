const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const ADD_CAKE = 'ADD_CAKE'
const ADD_ICECREAM = 'ADD_ICECREAM'

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Buy a cake from store'
  }
}

function addCake() {
  return {
    type: ADD_CAKE,
    info: 'Add a cake to store'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Buy an ice cream from store'
  }
}

function addIceCream() {
  return {
    type: ADD_ICECREAM,
    info: 'ADD an ice cream to store'
  }
}

// (previousState, action) => newState

const initialCakeState = {
  numberOfCakes: 10
}

const initialIceCreamState = {
  numberOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes - 1,
    }

    case ADD_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes + 1,
    }

    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numberOfIceCreams: state.numberOfIceCreams - 1,
    }

    case ADD_ICECREAM: return {
      ...state,
      numberOfIceCreams: state.numberOfIceCreams + 1
    }

    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(addCake())
store.dispatch(addCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(addIceCream())
unsubscribe()