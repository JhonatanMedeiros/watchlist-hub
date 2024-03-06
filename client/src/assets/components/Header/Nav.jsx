import * as Dialog from "@radix-ui/react-dialog";

export const Nav = () => {
  return (
    <Dialog.Root>
      <nav className="flex justify-around items-center position-fixed w-full text-slate-500 text-lg font-mono pt-2">
        <a href="#">
          <img src="" alt="Logo" />
        </a>
        <a className="hover:text-slate-400" href="#">
          Home
        </a>
        <a className="hover:text-slate-400" href="#">
          Lançamentos
        </a>
        <a className="hover:text-slate-400" href="#">
          Populares
        </a>
        <a className="hover:text-slate-400" href="#">
          Listas
        </a>
        <a className="hover:text-slate-400" href="#">
          Guia
        </a>
        <input
          className="w-3/6 h-10 b bg-slate-800 rounded-sm placeholder:px-3"
          placeholder="Pesquisar"
          type="search"
          id=""
        />
        <Dialog.Trigger>
          <button className="bg-slate-800 rounded-sm h-10 px-3 hover:bg-slate-700 text-white">
            Entrar
          </button>
        </Dialog.Trigger>
      </nav>
    </Dialog.Root>
  );
};
