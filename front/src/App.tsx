import SmoothScrolling from "./components/animation/SmoothScroll"
import AllRoutes from "./routes/AllRoutes"
import './App.css'
import useDesktopBotpress from "./hooks/useDesktopBotpress"

const App = () => {

  useDesktopBotpress()

  return (
    <SmoothScrolling>
      <AllRoutes />
    </SmoothScrolling>
  )
}

export default App