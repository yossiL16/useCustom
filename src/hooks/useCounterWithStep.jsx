import React, { useState } from 'react'

export default function useCounterWithStep(num1,num2 ) {

    const [count1, setCount1] = useState(num1)

    function inc1(){
        setCount1(count1 + num2)
    }
        function dec1(){
        setCount1(count1 - num2)
    }
        function reset1(){
        setCount1(num1)
    }
  return {count1, inc1, dec1, reset1}
}
