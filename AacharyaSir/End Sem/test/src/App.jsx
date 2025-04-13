// import Counter from "./Components/Counter"
import Counter from "./Components/Counter"
import HelloWorld from "./Components/HelloWorld"
import Input from "./Components/Input"
import personalInfo from "./Components/personalInfo"
import About from "./Components/Routes/About"
import Home from "./Components/Routes/Home"
import Toggle from "./Components/Toggle"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      {/* <personalInfo name="hello" age={19} /> */}
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      <Input/>
      {/* <Toggle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
