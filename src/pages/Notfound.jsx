import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
          <h1 className="text-6xl font-bold text-[#C92071] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200"
            to={"/"}
          >
            Voltar
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Notfound;
