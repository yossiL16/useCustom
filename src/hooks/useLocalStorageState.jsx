import React, { useState } from 'react'

export default function useLocalStorageState(key, defaultValue) {

    const [value6, setValue6] = useState(defaultValue)

    function setVal(e){
        setValue6(e.target.value)
        localStorage.setItem(key, e.target.value);
    }

    function remove6(){
        setValue6(defaultValue)
        localStorage.setItem(key, defaultValue);
    }

  return {value6, setVal, remove6}
}
