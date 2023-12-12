import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage, ShowRoom, StrangerPage} from "src/Pages";
import {NavBar} from "src/components";
function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/show-room" element={<ShowRoom/>}/>
              <Route path="/test" element={<StrangerPage/>}/>
          </Routes>
      </>
  )
}

export default App