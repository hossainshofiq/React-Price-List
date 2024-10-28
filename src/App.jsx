
import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <div className='container mx-auto my-5'>

      <div className='mx-2'>
        <NavBar></NavBar>
      </div>

      {/* <DaisyNav></DaisyNav> */}

      {/* <h1 className='text-7xl bg-rose-500 mt-10 rounded-lg pl-5 py-4'>Vite + React</h1> */}

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>

      <Phones></Phones>

    </div>
  )
}

export default App
