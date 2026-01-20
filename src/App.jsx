// App.jsx
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App