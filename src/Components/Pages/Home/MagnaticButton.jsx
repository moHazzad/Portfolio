

const MagnaticButton = ({buttonName}) => {
    
  return (
    <div className="">
      {/* <h1>Magnetic Buttons On Mousemove</h1> */}
      
        <a color="#F8F8F8" className="btn h-24 w-24 md:w-32 md:h-32 rounded-full bg-slate-500 ">
          <span className="text-xs md:text-md">{buttonName}</span>
        </a>
    
      
    </div>
  );
};

export default MagnaticButton;
