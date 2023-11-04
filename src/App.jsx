import './App.css'
import { useReducer } from 'react'
import { reducer, initialState } from './reducer'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </>
  )
}
