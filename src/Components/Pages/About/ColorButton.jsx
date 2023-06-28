import { FaGlobe } from "react-icons/fa6";

const ColorButton = () => {

  

  return (
    <div>
    <a
      className="btn h-24 w-24 md:w-32 md:h-32 rounded-full bg-slate-500"  
    >
      <span className="text-3xl md:text-md"> <FaGlobe/> </span>
    </a>
  </div>
  )
}

export default ColorButton