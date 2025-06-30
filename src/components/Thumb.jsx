const Thumb = ({ src, alt }) => {
  return (
    <div
      className=" w-[7em] 
        h-[5.7em] overflow-hidden 
        rounded-[6px] hover:border-[#c92071]
        hover:border-3 hover:cursor-pointer
        max-sm:w-[3.5em]
        max-sm:h-[3.7em]
        "
       >
      <img src={src} alt={alt} />
    </div>
  );
};

export default Thumb;
