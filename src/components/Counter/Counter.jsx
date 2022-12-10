import React, { useState } from 'react'
import './Counter.scss'
const Counter = () => {
    let [count, setCount] = useState(0)

    const onClickPlus = () => {
        setCount(count+1)
        return count
    }
    const onClickMinus = () => {
        setCount(count-1)
        return count
    }
  return (
      <div className='counter'>
          <h1 className='counter-title'>Счётчик: </h1>
          <h2 className='counter-number'>{count}</h2>
          <div className='counter__buttons'>
              <button onClick={onClickMinus} className='button counter__buttons-button minus'>- Минус</button>
              <button onClick={onClickPlus} className='button counter__buttons-button plus'>Плюс +</button>
          </div>
      </div>
  )
}

export default Counter