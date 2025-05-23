import { Outlet } from "react-router-dom"
import OrbitSocialHub from "../components/ui/OrbitSocialHub/OrbitSocialHub"
import { useState } from "react";
import Footer from "../components/ui/Footer";
import StickyFooter from "../components/ui/StickyFooter";
import Header from "../components/ui/Header";
import useResize from "../hooks/useResize";


const RootModule = () => {

  const [open, setOpen] = useState<boolean>(false);
  const isMobile = useResize()


  return (
    <>
      <OrbitSocialHub open={open} setOpen={setOpen} />
      <div onClick={()=>setOpen(false)}>
        <Header />
        <Outlet /> 
        <Footer />
        {!isMobile && <StickyFooter />}
      </div>
    </>
  )
}

export default RootModule