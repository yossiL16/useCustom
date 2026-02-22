import React, { useState } from 'react'

export default function useThrottleValue() {

    const [value10, setValue] = useState('')

        let schduledid;

        function throttled(e){
            if(schduledid) return
            schduledid = setTimeout(() => {
                console.log("hiiiii");
                setValue(e.target.value)
                clearTimeout(schduledid)
            }, 1000)
        }
  return {throttled, value10}
}
