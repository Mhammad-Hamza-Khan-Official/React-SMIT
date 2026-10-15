import { useState } from "react"
import VideoPage from "@/component/VideoPage";

function App() {
  const [users, setUsers] = useState([])

  return(<>
  <VideoPage/>
  </>)
}

export default App
