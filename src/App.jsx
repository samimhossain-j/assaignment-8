import { Outlet } from "react-router"


function App() {


  return (
    <>
<div className="flex flex-col gap-3">
        <h1 className="text-3xl text-gray-500 font-bold underline">
    Navbar
  </h1>
  
  <Outlet></Outlet>
  
  <footer   className="text-3xl text-green-200 font-bold underline">Footer</footer>
  
</div>
    </>
  )
}

export default App
