import Checkbox from "./Checkbox";

const FiltrarCategoria = ({inputType, title}) => {
    return ( 
        <>
          <div className="mt-5 ml-5" >
            <h4 className="mb-2">{title}</h4>
            {inputType.map((item, index) => (
                <Checkbox key={index} checked={item.checked} radio={item.radio} text={item.text} onChange={item.onChange}/>
            ))}
          </div>
        </>
     );
}
 
export default FiltrarCategoria;