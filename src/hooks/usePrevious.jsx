import { useState } from "react"


export default function usePrevious() {

    const [value8, setValue8] = useState("")
    const [previous8, setPrevious8] = useState(value8)

    function currentValue(e){
        setValue8(e.target.value)
    }

    function previousValue(){
        setPrevious8(value8)
        setValue8("")
    }

  return {value8, previous8, previousValue,currentValue}
}
