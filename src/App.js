import "./App.css";
import {Routes , Route} from 'react-router-dom'
import VideoPlayer from './Video'
import Home from './Langingpage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/parttwo" element={<VideoPlayer/>}/>
    </Routes>
    </>
  );
}

export default App;
