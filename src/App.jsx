import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cgpaTenScale, setCgpaTenScale] = useState(0)
  const [cgpaFourScale, setCgpaFourScale] = useState(0)

  const convertCGPA = () => {
    const cgpaFour = (cgpaTenScale / 2.5).toFixed(2)
    setCgpaFourScale(cgpaFour)
  }

  return (
    <>
      
      <h1>Convert CGPA</h1>
      <div className='card'>
        <label>
          Enter CGPA (10-point scale):
          <input 
            type="number"
            value={cgpaTenScale}
            onChange={(e) => setCgpaTenScale(parseFloat(e.target.value))}
            step="0.01"
          />
        </label>
        <button onClick={convertCGPA}>Convert</button>
        <p>
          CGPA on 4-point scale (USA/Canada): {cgpaFourScale}
        </p>
        <p>
          CGPA on 20-point scale(France): 
        </p>
      </div>
    </>
  )
}

export default App
