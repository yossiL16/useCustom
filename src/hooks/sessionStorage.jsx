import React, { useState } from 'react'

export default function sessionStorage1(key, defaultValue) {

    const [value7, setValue7] = useState(defaultValue)

    function setVal7(e){
        setValue7(e.target.value)
        sessionStorage.setItem(key, e.target.value);
    }

    function remove7(){
        setValue7(defaultValue)
        sessionStorage.setItem(key, defaultValue);
    }

  return {value7, setVal7, remove7}
}
