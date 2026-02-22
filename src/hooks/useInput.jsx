import React, { useState } from 'react'

export default function useInput() {

    const [value2, setValue] = useState('')

    function onChange(e){
        setValue(e.target.value)
    }
    function reset2(){
        setValue(0)
    }

  return {value2, onChange, setValue, reset2}
}
