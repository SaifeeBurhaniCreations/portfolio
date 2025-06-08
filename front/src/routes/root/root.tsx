import AboutUs from "../../pages/AboutUs"
import Home from "../../pages/Home"
import Projects from "../../pages/Projects"
import Service from "../../pages/Service"

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
    },
    {
        path : 'service/:name',
        element : <Service />
    }
]

export default rootRoutes