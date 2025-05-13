import './App.css'
import banner_img from './assets/images/png/banner-img.png' 
import arrow_img from './assets/images/png/arrow-img.png' 
import Typography from './components/typography/Typography'
import CustomImage from './components/ui/CustomImage'
import { getColor } from './constants/colors'
import { VStack } from './components/layout/VStack'
import ProjectCard from './components/ui/ProjectCard'
import AutoLayout from './components/layout/AutoLayout'
import card_img_1 from './assets/images/png/card-1.png'
import TechStackSvg from './components/TechStackSvg'
import WorkDetailCard from './components/ui/WorkDetailCard'
import project_img from "./assets/images/project-img.jpg"
import { HStack } from './components/layout/HStack'
import MainWrapper from './components/layout/MainWrapper'
import Gradient from './components/ui/Gradient'
import TypewriterText from './components/typography/TypewriterText'



const array = [
  {
    banner: card_img_1,
    heading: "CIB on the Mobile",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    banner: card_img_1,
    heading: "CIB on the Mobile",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    banner: card_img_1,
    heading: "CIB on the Mobile",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    banner: card_img_1,
    heading: "CIB on the Mobile",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  }
]

const projects = [
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
          <div className="row">
            <div className="col-md-6">
              <div className="logo">

              </div>
            </div>
            <div className="col-md-6">
              <div className="navlinks">
                <ul>
                  <li><Typography variant='b2' color={getColor('light')}>Home</Typography></li>
                  <li><Typography variant='b2' color={getColor('light')}>About</Typography></li>
                  <li><Typography variant='b2' color={getColor('light')}>Lab</Typography></li>
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
            <CustomImage borderRadius={0} src={banner_img} />
            <CustomImage style={{position: 'absolute', top: '-40%', left: '16%'}} width={180} borderRadius={0} src={arrow_img} />
            <Typography 
              style={{ position: 'absolute', top: '-28%', left: '28%' }} 
              variant='b2' 
              family='p' 
              color={getColor('light')}
            >
              Hello! I Am{' '}
              <TypewriterText
                color={getColor('purple')}
                words={['Jafar us sadiq', 'Ali asger']}
                typingSpeed={100}
                erasingSpeed={50}
                delayBetweenWords={2000}
              />
            </Typography>
          </div>
          <VStack align='start' justify='center' gap={5}>
            <Typography variant='b3' family='p' color={getColor('light')}>A Designer who</Typography>
            <Typography variant='h1' family='p' style={{fontWeight: 400}} color={getColor('light')}>Judges a book <br /> by its <span style={{color: getColor("purple")}}>cover</span>...</Typography>
            <Typography variant='b5' family='p' color={getColor('light')}>Because if the cover does not impress you what else can?</Typography>
          </VStack>
        </HStack>
      </MainWrapper>

      <MainWrapper>
        <VStack justify='between' align='start' gap={50}>
          <VStack justify='center' align='start' gap={10}>
            <Typography variant='h1' family='p' style={{fontWeight: 400}} color={getColor('light')}>I'm a Software Engineer.|</Typography>
            <Typography variant='b2' family='p' style={{fontWeight: 400}} color={getColor('light')}>Currently, I'm a Software Engineer at <span style={{color: getColor("purple")}}>Facebook</span>,</Typography>
          </VStack>

          <Typography variant='b2' family='p' style={{fontWeight: 400}} color={getColor('light')}>A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.</Typography>
        </VStack>
      </MainWrapper>

      <MainWrapper>
        <VStack align='start' justify='center' gap={30}>
          <Typography variant='h2' family='p' style={{fontWeight: 400}} color={getColor('light')}>Work Experience</Typography>
          <AutoLayout className='position-rel' columns={2} align='center' gap={30}>
          <Gradient width={650} position={{ left: '50%', top: '38%', transform: `translate(-50%, -50%)` }} />

            {
              array?.map((value, index) => (
                <ProjectCard banner={value.banner} heading={value.heading} description={value.description} index={index} />
              ))
            }
          </AutoLayout>
        </VStack>
      </MainWrapper>

      <MainWrapper>
        <VStack justify='center' align='center' gap={30}>
          <VStack justify='center' align='center' gap={10}>
            <Typography variant='h3' family='p' style={{fontWeight: 400}} color={getColor('light')}>I'm currently looking to join a <span style={{color: getColor("purple")}}>cross-functional</span> team</Typography>
            <Typography variant='h6' family='p' style={{fontWeight: 400}} color={getColor('light')}>that values improving people's lives through accessible design </Typography>
          </VStack>
          <TechStackSvg />
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