import { useNavigate } from "react-router-dom";
export default function MovieCard({ id, title, releaseDate, poster }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movies/${id}`); 
  };
  return (
    
      <div 
       onClick={handleClick}
      className="bg-[#FFDEDE] rounded-xl shadow-md max-w-xs  overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <div id="details" className="flex flex-col gap-1">
          <h1 className="text-sm font-dmsans font-semibold text-gray-700">
            {title}
          </h1>
          <p className="text-base font-dmsans font-bold text-gray-600">
            {releaseDate}
          </p>
          <img
            src={poster}
            alt={title}
            className="w-24 h-auto rounded-md"
          />
        </div>
      </div>
    
  );
}
