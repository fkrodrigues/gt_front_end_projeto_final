import React, { useState } from "react";


  const ProductOptions = () => {


  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = [39, 40, 41, 42, 43];

  const handleSizeClick = (size) => {
    setSelectedSize(size); 
  };



  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [ '#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7' ];

  const handleColorClick = (color) => {
    setSelectedColor(color); 
  };


  return (
    <>

      <h5 className="text-[#8F8F8F] mb-1">Tamanho</h5>
      <div className="flex gap-2 
      w-[280px] h-[55px] mb-2
      ">
        {sizes.map((size) => (
          <button
            className="
                    w-[50px] h-[50px]
                   border-[#CCCCCC]
                   border-[1px]
                   rounded-[4px]
                   font-bold
                "
            key={size}
            onClick={() => handleSizeClick(size)}
            style={
              selectedSize === size
                ? {
                    color: "white",
                    backgroundColor: "#C92071",
                    cursor: "default",
                  }
                : {
                    color: "#474747",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }
            }
          >
            {size}
          </button>
        ))}
      </div>

      {/* ---------------------------- */}
      

      <h5 className="text-[#8F8F8F] mb-1">Cor</h5>
      <div className=" flex gap-2 h-10 mb-3">
        {colors.map((color,index) => (
          <button
            key={index}
            style={{
              outline: 
                selectedColor === color ? " 2px solid #C92071" : "" ,
              outlineOffset: '3px',
              backgroundColor: color,
              color: 'white',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '30px',
              height: '30px',
            }}
            onClick={() => handleColorClick(color)}
          >
          </button>
        ))}
      </div>

    </>
  );
};

export default ProductOptions;
