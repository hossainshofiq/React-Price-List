import { LineChart } from 'recharts'
import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
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


    </div>
  )
}

export default App
