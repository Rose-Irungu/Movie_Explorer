export default function MovieCard({
  cardTitle,
  year,
  Runtime,
  Poster,

}) {
  return (
    <div
      id="container"
      className="basis-full w-full md:basis-1/2 md:w-1/2 lg:basis-1/4 lg:w-1/4 p-2"
    >
      <div className="flex items-center justify-between h-full rounded-xl bg-white p-6 shadow-md">
        <div id="details" className="flex flex-col gap-1">
          <h1 className="text-sm font-dmsans font-semibold text-gray-700">{cardTitle}</h1>
          <h2 className="text-base font-dmsans font-bold text-gray-600">{year}</h2>
          <a
            href={Runtime}
            className="text-xs font-dmsans font-medium text-[#FFDEDE] underline"
          >
            {Poster}
          </a>
        </div>
       
      </div>
    </div>
  );
}
