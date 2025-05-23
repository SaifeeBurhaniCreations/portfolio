import { Outlet } from "react-router-dom"
import OrbitSocialHub from "../components/ui/OrbitSocialHub/OrbitSocialHub"
import { useState } from "react";


const RootModule = () => {

  const [open, setOpen] = useState<boolean>(false);


  return (
    <>
      <OrbitSocialHub open={open} setOpen={setOpen} />
      <div onClick={()=>setOpen(false)}>
        <Outlet /> 
      </div>
    </>
  )
}

export default RootModule