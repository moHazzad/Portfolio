import '../Buttons/Button.css'

const MagnaticButton = ({buttonName}) => {
    
  return (
    <div className="">
      {/* <h1>Magnetic Buttons On Mousemove</h1> */}
      
        <a color="#F8F8F8" className="btcn btn4    ">
          <span className="text-xs md:text-md">{buttonName}</span>
        </a>
    
      
    </div>
  );
};

export default MagnaticButton;
