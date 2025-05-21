import './App.css'
import arrow_img from './assets/images/png/arrow-img.png' 
import Typography from './components/typography/Typography'
import CustomImage from './components/ui/CustomImage'
import { getColor } from './constants/colors'
import { VStack } from './components/layout/VStack'
import ProjectCard from './components/ui/ProjectCard'
import AutoLayout from './components/layout/AutoLayout'
import card_img_1 from './assets/images/png/card-1.png'
import TechStackSvg from './components/svgComponents/TechStackSvg'
import WorkDetailCard from './components/ui/WorkDetailCard'
import project_img from "./assets/images/project-img.jpg"
import { HStack } from './components/layout/HStack'
import MainWrapper from './components/layout/MainWrapper'
import Gradient from './components/ui/Gradient'
import TypewriterText from './components/typography/TypewriterText'
import BannerSvg from './components/svgComponents/BannerSvg'
import SBLogo from './components/svgComponents/SBLogo'
import logo from './assets/images/svg/sbc.svg'
import TeamSection from './components/ui/TeamSection'
import Input from './components/ui/Inputs/Input'
import { useState } from 'react'
import TextArea from './components/ui/Inputs/TextArea'
import Button from './components/ui/Buttons/Button'
import Send from './components/icons/Send'
import QuestionMark from './components/svgComponents/QuestionMark'
import Accordion from './components/ui/Accordian/Accordion'
import Footer from './components/ui/Footer'



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
  {
    projectName : "Example Project", 
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.", 
    banner: project_img
  },
]

const contactInputs = [
  {
    field: 'input',
    label: 'Name',
    placeholder: 'Your name',
    color: 'purple',
    textColor: 'light',
  },
  {
    field: 'input',
    label: 'Email',
    placeholder: 'your.email@example.com',
    color: 'purple',
    textColor: 'light',
  },
  {
    field: 'input',
    label: 'Service Type',
    placeholder: 'Type of Service',
    color: 'purple',
    textColor: 'light',
  },
  {
    field: 'input',
    label: 'Subject',
    placeholder: `What's this about?`,
    color: 'purple',
    textColor: 'light',
  },
  {
    field: 'textarea',
    label: 'Message',
    placeholder: `Tell us about your project...`,
    color: 'purple',
    textColor: 'light',
  }
]

const services = [
  {
    id: '1',
    number: '01',
    title: 'What makes your agency different from competitors?',
    content: 'Animal endoscopy is a minimally invasive procedure that allows veterinarians to examine internal organs without surgery. Using a flexible tube with a camera, they can diagnose conditions, collect biopsies, and remove foreign objects, improving pet care with less discomfort.'
  },
  {
    id: '2',
    number: '02',
    title: 'What happens after a project is completed? Do you offer ongoing support?',
    content: 'Animal diagnostics involve tests and procedures that help veterinarians detect diseases early. By analyzing blood, tissue, or other samples, they can identify health issues before symptoms appear, improving treatment success and animal well-being.'
  },
  {
    id: '3',
    number: '03',
    title: 'What information do you need from a client to get started?',
    content: 'Animal diagnostics involve tests and procedures that help veterinarians detect diseases early. By analyzing blood, tissue, or other samples, they can identify health issues before symptoms appear, improving treatment success and animal well-being.'
  },
  {
    id: '4',
    number: '04',
    title: 'What industries do you specialize in, if any?',
    content: 'Animal diagnostics involve tests and procedures that help veterinarians detect diseases early. By analyzing blood, tissue, or other samples, they can identify health issues before symptoms appear, improving treatment success and animal well-being.'
  },
  {
    id: '5',
    number: '05',
    title: 'How do you typically structure your pricing? (e.g., project-based, retainer, hourly)',
    content: 'Animal diagnostics involve tests and procedures that help veterinarians detect diseases early. By analyzing blood, tissue, or other samples, they can identify health issues before symptoms appear, improving treatment success and animal well-being.'
  },
  // Add more items as needed
];

const App = () => {

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);


  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="layout" style={{backgroundColor: getColor('overlay'), backgroundBlendMode: 'overlay, normal', backdropFilter: 'blur(40px)', border: `1px solid ${getColor('purple', 100, 0.2)}`}}>
              <div className="navlinks">
                <ul>
                  <li><Typography variant='b2' color={getColor('light')}>Home</Typography></li>
                  <li><Typography variant='b2' color={getColor('light')}>About</Typography></li>
                </ul>
              </div>
              <div className="logo">
                <CustomImage borderRadius={0} onZoom={true} src={logo} style={{ justifyContent: 'center', display: 'flex', cursor: 'pointer' }} imgStyle={{ objectFit: 'contain', width: '64%' }} />
              </div>
              <div className="navlinks">
                <ul>
                  <li><Typography variant='b2' color={getColor('light')}>Projects</Typography></li>
                  <li><Typography variant='b2' color={getColor('light')}>Blogs</Typography></li>
                </ul>
              </div>

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
            <Typography variant='b3' family='p' color={getColor('light')}>We’re a creative </Typography>
            <Typography variant='h1' family='p' style={{fontWeight: 400}} color={getColor('light')}> Tech agency that <br />  <span style={{color: getColor("purple")}}>believes</span>...</Typography>
            <Typography variant='b5' family='p' color={getColor('light')}>in today’s digital world, design is credibility</Typography>
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
        <VStack justify='center' align='center' style={{position: 'relative'}} gap={30}>
          <VStack justify='center' align='center' gap={10}>
            <Typography variant='h3' family='p' style={{fontWeight: 400}} color={getColor('light')}>I'm currently looking to join a <span style={{color: getColor("purple")}}>cross-functional</span> team</Typography>
            <Typography variant='h6' family='p' style={{fontWeight: 400}} color={getColor('light')}>that values improving people's lives through accessible design </Typography>
          </VStack>
          <TechStackSvg />
          <SBLogo isAnimate={true} position={{ transform: 'translate(-50%, -50%)', top: '71%', left: '49.4%', position: 'absolute' }} />
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

      <MainWrapper>
        <VStack justify='center' align='center' gap={48} style={{backgroundColor: getColor('purple', 800), borderRadius: '16px', padding: 32}}>
          <AutoLayout custom='2-1' align='start' gap={24} className='w-100' >
            <VStack justify='center' align='center' gap={24} 
              style={{ 
                borderRadius: '16px',
                background: getColor('overlay'),
                backgroundBlendMode: 'overlay, normal',
                backdropFilter: 'blur(40px)',
                padding: 32
              }}
            >
              <VStack justify='center' w={`100%`} align='start' gap={64}>

                <VStack justify='center' align='start' gap={4}>
                  <Typography variant='h2' family='p' color={getColor('light')}>
                    Let's Connect
                  </Typography>
                  <Typography variant='b2' family='jk' color={getColor('light')}>
                    Reach out to us for your next digital project
                  </Typography>
                </VStack>

                <VStack justify='center' align='center' gap={24} style={{width: '100%'}}>
                  <AutoLayout columns={2}  className='w-100' align='center' gap={24}>
                  {
                    contactInputs?.map((value, index) => {
                      const commonProps = {
                        key: index,
                        label: value.label,
                        placeholder: value.placeholder,
                        isFocused: focusedIndex === index,
                        onFocusChange: (focused: boolean) => setFocusedIndex(focused ? index : -1),
                      };

                      switch (value.field) {
                        case 'input':
                          return <Input {...commonProps} />;
                        default:
                          return null;
                      }
                    })
                  }
                  </AutoLayout>
                  
                  <AutoLayout columns={1}  className='w-100' align='center' gap={24}>
                  {
                    contactInputs?.map((value, index) => {
                      const commonProps = {
                        key: index,
                        label: value.label,
                        placeholder: value.placeholder,
                        isFocused: focusedIndex === index,
                        onFocusChange: (focused: boolean) => setFocusedIndex(focused ? index : -1),
                      };

                      switch (value.field) {
                        case 'textarea':
                          return <TextArea {...commonProps} rows={4} />;
                        default:
                          return null;
                      }
                    })
                  }
                  </AutoLayout>
                </VStack>     

                <VStack align='end' justify='center' style={{width: '100%'}}>
                  <Button>Send Message &nbsp; <Send /></Button>
                </VStack>

              </VStack>
            </VStack>
            <VStack align='center' justify='center' gap={32}>
              <QuestionMark />
              <Accordion items={services} />
            </VStack>
          </AutoLayout>
          <Typography variant='b3' family='jk' color={getColor('purple', 300)}>
            SBCreations - Building Digital Experiences That Matter.
          </Typography>
        </VStack>
      </MainWrapper>

      <MainWrapper>
        <TeamSection />
      </MainWrapper>

      <Footer />
    </>
  )
}

export default App