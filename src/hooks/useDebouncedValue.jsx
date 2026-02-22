import React, { useState } from 'react'

export default function useDebouncedValue() {

    const [data, setData] = useState("");
    
    let timer;
    function throttledValue(e) {
        clearTimeout(timer);
        timer = setTimeout(() => { setData(e.target.value)}, 3000)
    }

  return {throttledValue, data}
}
