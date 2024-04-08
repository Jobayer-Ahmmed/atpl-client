import designer from "../../assets/designer.png"
import hire from "../../assets/search.png"
import inspiration from "../../assets/inspiration.png"
import { useState } from "react"
import {FaCheckCircle, FaRegCircle} from "react-icons/fa"

const Bring = () => {
    const [isDesigner, setIsDesigner] = useState(false)
    const [isInspiration, setIsInspiration] = useState(false)
    const [isHire, setIsHire] = useState(false)
    
  
    const handleDesigner=()=>{
      setIsDesigner(!isDesigner)
    }
    const handleHire=()=>{
      setIsHire(!isHire)
    }
    const handleInspiration=()=>{
      setIsInspiration(!isInspiration)
    }
  return (
    <div className="">
      <h1 className="text-mediumFont md:text-largeFont font-bold text-center">What brins you to dribbble</h1>
      <p className="text-xl mt-2 text-center">Select the options that best describe you. Dont&apos;t wory, can expolre other options later.</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 mt-32">
        <div className=" bg-white w-[320px] h-[320px] border-2 shadow-xl p-8 flex flex-col items-center">
            <img className="w-44 h-40" src={designer} alt="designer" />
            <h2 className="mt-3 text-xl font-semibold text-center" >I&apos;m a designer looking to share my work</h2>
            <div className="flex justify-center items-center mt-2" onClick={handleDesigner}>
              {isDesigner ? <FaCheckCircle className="text-2xl text-pink-700" /> : null}
              {!isDesigner ? <FaRegCircle className="text-2xl" /> : null}
            </div>
        </div>
        <div className=" bg-white w-[320px] h-[320px] border-2 shadow-xl p-8 flex flex-col items-center">
            <img className="w-44 h-40" src={hire} alt="designer" />
            <h2 className="mt-3 text-xl font-semibold text-center" >I&apos;m looking to hire a designer</h2>
            <div className="flex justify-center items-center mt-2" onClick={handleHire}>
              {isHire ? <FaCheckCircle className="text-2xl text-pink-700" /> : null}
              {!isHire ? <FaRegCircle className="text-2xl" /> : null}
            </div>
        </div>
        <div className="bg-white w-[320px] h-[320px] border-2 shadow-xl p-8 flex flex-col items-center">
            <img className="w-44 h-40" src={inspiration} alt="Inspiration" />
            <h2 className="mt-3 text-xl font-semibold text-center" >I&apos;m designer looking for design inspiration</h2>
            <div className="flex justify-center items-center mt-2" onClick={handleInspiration}>
              {isInspiration ? <FaCheckCircle className="text-2xl text-pink-700" /> : null}
              {!isInspiration ? <FaRegCircle className="text-2xl" /> : null}
            </div>
        </div>

      </div>
      <div className="flex justify-center">
        <button 
          disabled={!isDesigner && !isHire && !isInspiration}
          onClick={()=>console.log("clicked")}
          className={`${isDesigner || isHire || isInspiration ? ' bg-pink-700 cursor-pointer': ' cursor-default bg-pink-300'} mt-20 cursor-pointer h-[40px] rounded-lg  px-24 font-semibold tracking-wider text-white text-lg`}>
          Finish
        </button>
      </div>
    </div>
  )
}

export default Bring
