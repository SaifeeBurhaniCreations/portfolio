import './App.css'
import arrow_img from './assets/images/png/arrow-img.png' 
import Typography from './components/typography/Typography'
import CustomImage from './components/ui/CustomImage'
import { getColor } from './constants/colors'
import { VStack } from './components/layout/VStack'
import ProjectCard from './components/ui/ProjectCard'
import AutoLayout from './components/layout/AutoLayout'
import card_img_1 from './assets/images/png/card-1.png'
import card_img_2 from './assets/images/png/card-2.png'
import card_img_3 from './assets/images/png/card-3.png'
import card_img_4 from './assets/images/png/card-4.png'
import TechStackSvg from './components/svgComponents/TechStackSvg'
import WorkDetailCard from './components/ui/WorkDetailCard'
import project_img from "./assets/images/project-img.jpg"
import work_img_1 from "./assets/images/png/work-2.png"
import { HStack } from './components/layout/HStack'
import MainWrapper from './components/layout/MainWrapper'
import Gradient from './components/ui/Gradient'
import TypewriterText from './components/typography/TypewriterText'
import BannerSvg from './components/svgComponents/BannerSvg'
import SBLogo from './components/icons/SBLogo'
import logo from './assets/images/svg/full-logo.svg'

const tools = [
  {
    banner: card_img_1,
    heading: "SBC-Deploy",
    description: "Seamless in-house app deployment platform. Automate delivery with ease. Get 1 month free for real client deployment.",
  },
  {
    banner: card_img_2,
    heading: "SBC-UtilX",
    description: "Smart utility monitoring and analytics. Optimize usage, reduce costs, and gain insights instantly. Get started with a 1-month free trial for real-time data tracking.",
  },
  {
    banner: card_img_3,
    heading: "SBC-ERP",
    description: "All-in-one ERP solution for growing businesses. Manage operations, finance, and inventory with ease. Start with a 1-month free trial and streamline your workflow today.",
  },
  {
    banner: card_img_4,
    heading: "SBC-Toolset",
    description: "A complete dev kit with hooks, design & icon libraries, and prebuilt frameworks. Build faster with our optimized starter kits. Try it free for 1 month.",
  }
]

const projects = [
  {
    projectName : "OddiVille", 
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.", 
    banner: work_img_1
  },
  {
    projectName : "Example Project", 
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.", 
    banner: project_img
  },
  {
    projectName : "Example Project", 
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.", 
    banner: project_img
  },
]

const App = () => {

  return (
    <>
      <header className='header' style={{backgroundColor: getColor("purple", 800)}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="logo">
                <CustomImage borderRadius={0} src={logo} style={{ justifyContent: 'start' }} imgStyle={{ objectFit: 'contain', width: '34%' }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="navlinks">
                <ul>
                  <li><Typography variant='b4' color={getColor('light')}>Home</Typography></li>
                  <li><Typography variant='b4' color={getColor('light')}>About</Typography></li>
                  <li><Typography variant='b4' color={getColor('light')}>Lab</Typography></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MainWrapper>
        <HStack align='end' justify='start' gap={50} style={{position: "relative"}}>
          <div className="width-100">
            <Gradient width={500} position={{ left: '12%', top: '55%', transform: `translate(-50%, -50%)` }} />
            <BannerSvg />
            <CustomImage style={{position: 'absolute', top: '-40%', left: '16%'}} width={180} borderRadius={0} src={arrow_img} />
            <Typography 
              style={{ position: 'absolute', top: '-28%', left: '28%' }} 
              variant='b2' 
              family='p' 
              color={getColor('light')}
            >
              Hi, from{' '}
              <TypewriterText
                color={getColor('purple')}
                words={['Saifee Burhani Creations Team']}
                typingSpeed={100}
                erasingSpeed={50}
                delayBetweenWords={2000}
              />
            </Typography>
          </div>
          <VStack align='start' justify='center' gap={5}>
            <Typography variant='b3' family='p' color={getColor('light')}>
              We’re a creative
            </Typography>
            <Typography variant='h1' family='p' style={{ fontWeight: 400 }} color={getColor('light')}>
              Tech agency that <br /> <span style={{ color: getColor('purple') }}>builds</span> ideas into impact
            </Typography>
            <Typography variant='b5' family='p' color={getColor('light')}>
              through bold design and bulletproof code
            </Typography>
          </VStack>

        </HStack>
      </MainWrapper>

      <MainWrapper>
        <VStack justify='between' align='start' gap={50}>
          <VStack justify='center' align='start' gap={10}>
            <Typography variant='h2' family='p' style={{ fontWeight: 400 }} color={getColor('light')}>We design and develop digital experiences that feel as good as they look|</Typography>
            <Typography variant='b2' family='p' style={{ fontWeight: 400 }} color={getColor('light')}>
              Aliasger & Jafar us Sadiq lead a creative tech studio turning bold concepts into <span style={{ color: getColor('purple') }}>striking interfaces</span>, blending pixel-perfect design with robust, scalable code.
            </Typography>

          </VStack>

          <Typography variant='b2' family='p' style={{ fontWeight: 400 }} color={getColor('light')}>We partner with ambitious brands to transform complex ideas into beautifully designed, high-performance digital experiences.
            From strategy and design to scalable development, we build solutions that are not only functional and intuitive—but also ready to grow with your business.</Typography>
        </VStack>
      </MainWrapper>

      <MainWrapper>
        <VStack align='start' justify='center' gap={30}>
          <Typography variant='h2' family='p' style={{fontWeight: 400}} color={getColor('light')}>SBC Tools & Systems</Typography>
          <AutoLayout className='position-rel' columns={2} align='center' gap={30}>
          <Gradient width={650} position={{ left: '50%', top: '38%', transform: `translate(-50%, -50%)` }} />

            {
              tools?.map((value, index) => (
                <ProjectCard banner={value.banner} heading={value.heading} description={value.description} index={index} />
              ))
            }
          </AutoLayout>
        </VStack>
      </MainWrapper>

      <MainWrapper>
        <VStack justify='center' align='center' style={{position: 'relative'}} gap={30}>
          <VStack justify='center' align='center' gap={10}>
            <Typography variant='h3' family='p' style={{fontWeight: 400}} color={getColor('light')}>I'm currently looking to join a <span style={{color: getColor("purple")}}>cross-functional</span> team</Typography>
            <Typography variant='h6' family='p' style={{fontWeight: 400}} color={getColor('light')}>that values improving people's lives through accessible design </Typography>
          </VStack>
          <TechStackSvg />
          <SBLogo isAnimate={true} position={{ transform: 'translate(-50%, -50%)', top: '69%', left: '49.4%', position: 'absolute' }} />
        </VStack>
      </MainWrapper>

      <MainWrapper>
        <VStack align='center' justify='center' gap={180} >
          {
            projects?.map((value, index) => (
              <WorkDetailCard  
                projectName={value.projectName}
                banner={value.banner}
                description={value.description}
                key={index}
                index={index}
              />
            ))
          }
        </VStack>
      </MainWrapper>
    </>
  )
}

export default App