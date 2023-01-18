import './App.css'
import AdminSideBar from "../src/Components/Admin/AdminSideBar"
import SidebarContent from './Components/Admin/SidebarContent'
import Ipad from './Components/iPad/Ipad'

function App() {

  return (
    <div className="App">
    {/* {Comment the h2 tag and add your desired components while development} */}
      {/* <h2>Add your page/componets in App.jsx during the development and revert back to it's previous stage before pushing daily to avoid conflicts</h2> */}
      {/* <AdminSideBar/> */}
      {/* <SidebarContent/> */}
      <Ipad/>
    </div>
  )
}

export default App
