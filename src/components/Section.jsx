const Section = ({title, titleAlign, ShowMore, children}) => {

  return (
    <div className=" 
      flex flex-col 
      w-[100%] 
    ">

      <div className="
       flex justify-center
       mt-6
       max-sm:ml-4
       max-sm:w-[20rem]
      ">
          <div className={` 
           w-[1320px] ml-[2px] mb-3 
           relative
           ${titleAlign === "center" ? "text-center" : ""}
           max-sm:text-left
           `}
          >
           <h3 className="
           text-[#474747]
           ">{title}</h3>

          {ShowMore && (
           <div className="
              w-[100px] right-0 top-0
              absolute 
              text-[#C92071] text-[1rem]
              hover:text-[#fb3997de]
              max-sm:hidden
            ">
                <a href={ShowMore.href}>
                  {ShowMore.text}
                </a>
            </div>
          )}
          
          </div>
        </div>

        <div 
          className="
          w-[100%] flex flex-col
          items-center 
          ">
            <div className="
            mb-12
            ">{children}</div>
        </div>
   </div>
  );
};

export default Section;
