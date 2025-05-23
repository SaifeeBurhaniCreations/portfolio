import Home from "../../pages/Home"
import Projects from "../../pages/Projects"

const rootRoutes = [
    {
        path : '',
        element : <Home />
    },
    {
        path : 'projects',
        element : <Projects />
    }
]

export default rootRoutes