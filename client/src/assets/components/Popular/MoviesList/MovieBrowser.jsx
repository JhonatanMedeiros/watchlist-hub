export const MovieBrowser = () => {
  return (
    <div className="flex gap-3 text-lg py-4 col-span-8">
      <a href="#" className="group hover:text-white focus:text-white text-gray-400 transition duration-75">
        Todos
        <span className="block max-w-0 group-focus:max-w-full transition-all duration-500 h-0.5 bg-green-700"></span>
      </a>
      <a href="#" className="group hover:text-white focus:text-white text-gray-400 transition duration-75">
        Filmes
        <span className="block max-w-0 group-focus:max-w-full transition-all duration-500 h-0.5 bg-green-700"></span>
      </a>
      <a href="#" className="group hover:text-white focus:text-white text-gray-400 transition duration-75">
        Séries
        <span className="block max-w-0 group-focus:max-w-full transition-all duration-500 h-0.5 bg-green-700"></span>
      </a>
      <a href="#" className="group hover:text-white focus:text-white text-gray-400 transition duration-75">
        Animes
        <span className="block max-w-0 group-focus:max-w-full transition-all duration-500 h-0.5 bg-green-700"></span>
      </a>
    </div>
  );
};
