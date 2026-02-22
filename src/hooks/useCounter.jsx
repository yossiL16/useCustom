import React, { useState } from 'react'

export default function useCounter(num) {

    const [count, setCount] = useState(num);

    function inc(){
        setCount(count + 1)
    }
    function dec(){
    setCount(count - 1)
    }
    function reset(){
        setCount(num)
    }
 
  return {count, inc, dec, reset}
}
