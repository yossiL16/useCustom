import './App.css'
import useToggle from './hooks/useToggle'
import useCounter from './hooks/useCounter'
import useCounterWithStep from './hooks/useCounterWithStep'
import useInput from './hooks/useInput'
import useTextarea from './hooks/useTextarea'
import useLocalStorageState from './hooks/useLocalStorageState'
import sessionStorage1 from './hooks/sessionStorage'
import usePrevious from './hooks/usePrevious'
import useDebouncedValue from './hooks/useDebouncedValue'


function App() {

  const { value, setFalse, setTrue, toggle } = useToggle()
  const {count, inc, dec, reset} = useCounter(0)
  const {count1, inc1, dec1, reset1} = useCounterWithStep(0, 4)
  const { value2, onChange, setValue, reset2 } = useInput()
  const { value3, onChange1, setValue3, reset3 } = useTextarea()
  const {value6, setVal, remove6} = useLocalStorageState(4, 10)
  const {value7, setVal7, remove7} = sessionStorage1("yossi", 1)
  const { value8, previous8, previousValue,currentValue } = usePrevious()
  const {throttledValue, data} = useDebouncedValue()
   

  return (
    <>
    <>
      <h1>{JSON.stringify(value)}</h1>
      <h1>{value}</h1>
      <button onClick={setTrue}>true</button>
      <button onClick={setFalse}>false</button>
      <button onClick={toggle}>toggle</button>
    </>
    <>
    <h1>{count}</h1>
    <button onClick={inc}>add</button>
    <button onClick={dec}>minus</button>
    <button onClick={reset}>reset</button>
    </>
    <>
      <h1>{count1}</h1>
    <button onClick={inc1}>add</button>
    <button onClick={dec1}>minus</button>
    <button onClick={reset1}>reset</button>
    </>
    <>
    <h1>{value2}</h1>
    <input type="text" value={value2} onChange={onChange}/>
    <button onClick={reset2}>reset</button>
    </>
    <>
    <h1>{value3}</h1>
    <input type="text" value={value3} onChange={onChange1}/>
    <button onClick={reset3}>reset</button>
    </>
    <>
    <h1>{value6}</h1>
    <input type="text" onChange={setVal} value={value6}/>
    <button onClick={remove6}>reset</button>
    </>
    <>
    <h1>{value7}</h1>
    <input type="text" onChange={setVal7} value={value7}/>
    <button onClick={remove7}>reset</button>
    </>
    <>
    <p>current value: {value8}</p>
    <p>previous value: {previous8}</p>
    <input type="text" onChange={currentValue} value={value8}/>
    <button onClick={previousValue}>save</button>
    </>
    <>
    <p>Debounced:</p>
    <h1>Debounced: {data}</h1>
    <input type="text" onChange={throttledValue} />
    </>
    <>
    
    </>
    </>
  )
}

export default App
