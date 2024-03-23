import './App.css'
import {Route, Routes} from "react-router-dom";
import {Articles, HomePage, ShowRoom, StrangerPage} from "src/Pages";
import {Footer, NavBar} from "src/components";

function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/show-room" element={<ShowRoom/>}/>
              <Route path="/articles" element={<Articles/>}/>
              <Route path="/test" element={<StrangerPage/>}/>
          </Routes>
          <Footer />
      </>
  )
}

export default App