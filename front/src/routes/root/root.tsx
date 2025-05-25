import AboutUs from "../../pages/AboutUs"
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
    },
    {
        path : 'about',
        element : <AboutUs />
    }
]

export default rootRoutes