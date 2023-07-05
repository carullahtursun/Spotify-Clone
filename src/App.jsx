
import './App.css'
import BottomBar from './Components/BottomBar'
import Contect from './Components/Contect'
import Sidebar from './Components/Sidebar'

function App() {


  return (
    <>

      <div className='wrepper'>
        <Sidebar />
        <Contect />
      </div>
      <BottomBar/>
    </>
  )
}

export default App
