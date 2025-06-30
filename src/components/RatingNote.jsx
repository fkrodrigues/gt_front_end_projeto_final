
import { Rating, RatingStar } from "flowbite-react";

const RatingNote = ({stars, score,qntAvaliation}) => {
  return (
    <Rating >
      {stars.map((item, index) => (
      <RatingStar key={index} filled={item.stars}/>
      ))}
      <p className="
          flex items-center justify-center
          gap-1 ml-2 text-sm 
          font-extrabold text-white
          dark:text-gray-400
          bg-[#F6AA1C] rounded-[4px]
          p-1 w-[63px] h-[23px] mr-2
          ">
           {score} 
      <RatingStar className="
            text-white
            "/>
      </p>

       <p className="text-[#8F8F8F] text-[14px]">  
         ({qntAvaliation})
       </p>
    </Rating>
  );
}
export default RatingNote;
