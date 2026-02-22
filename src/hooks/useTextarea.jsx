import React, { useState } from 'react'

export default function useTextarea() {

        const [value3, setValue3] = useState('')
    
        function onChange1(e){
            setValue3(e.target.value)
        }
        function reset3(){
            setValue3(0)
        }
    
      return {value3, onChange1, setValue3, reset3}
}
