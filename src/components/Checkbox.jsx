
const Checkbox = ({checked, radio, text, onChange}) => {

  return (
    <div>
         <label className=" h-[26px] flex 
           gap-2 text-[#474747] 
         ">
        <input 
          type={radio ? "radio" : "checkbox"} 
          checked={checked} 
          onChange={onChange}
          className="
          accent-[#C92071] h-[22px] w-[22px]
          
          
          "/>
        {text}
      </label>
        
    </div>
  );
}
 
export default Checkbox ;
