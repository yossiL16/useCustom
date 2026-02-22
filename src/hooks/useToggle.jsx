import { useState } from "react"



export default function useToggle() {
    
    const [value, setValue] = useState(true)

    function setTrue(){
        setValue(true)
    }
    function setFalse(){
        setValue(false)
    }
    function toggle(){
        setValue(!value)
    }
  
    return {value, setFalse, setTrue, toggle}
}
