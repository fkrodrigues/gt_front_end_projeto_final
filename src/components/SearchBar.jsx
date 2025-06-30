import { FiSearch } from "react-icons/fi";

const SearchBar = () => {

  return (
    <>
     
     <div className="
          relative
        ">
          <input
            className="
            bg-gray-100
              h-14
              p-4 
              w-[21rem]
              rounded-lg
              mb-5 
           "
            type="search"
            placeholder="Pesquisar produto..."
          />
          <a href="#">
            <FiSearch
              className="
                w-[22px]
                h-[25px]
                absolute
                bottom-9 right-5
                text-gray-400 
                hover:text-gray-300"
            />
          </a>
     </div>

    </>
  );
};

export default SearchBar;