import SmoothScrolling from "./components/animation/SmoothScroll"
import AllRoutes from "./routes/AllRoutes"
import './App.css'

const App = () => {
  return (
    <SmoothScrolling>
      <AllRoutes />
    </SmoothScrolling>
  )
}

export default App