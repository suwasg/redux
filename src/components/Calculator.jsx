import React from 'react'
import { add, div, mul, sub } from '../redux/calculator/calculatorActions'
import { useDispatch, useSelector } from 'react-redux'


const Calculator = () => {
    const num = useSelector((state)=>state.calculator.num)
    const dispatch = useDispatch()


  return (
    <>
    <div>
      <h2>Number: {num}</h2>
      <button onClick={() => dispatch(add())}>+</button>
      <button onClick={() => dispatch(sub())}>-</button>
      <button onClick={() => dispatch(mul())}>mul by 2</button>
      <button onClick={() => dispatch(div())}>div by 2</button>
    </div>

        
    </>
  )
}

export default Calculator