import * as Dialog from "@radix-ui/react-dialog";
import { DefaultCard } from "./DefaultCard";

export const Nav = () => {
  return (
    <Dialog.Root>
      <nav className="flex justify-around items-center position-fixed w-full text-slate-500 text-lg font-mono pt-2 px-24">
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
        <DefaultCard className="h-screen ">
          <div className="grid grid-cols-2 text-white">
            <h1 className="col-span-2">Conta WatchList Hub</h1>
            <div className="col-span-2">
              <h1>Login</h1>
            </div>
            <div className="col-span-2 flex flex-row">
              <div>
                <h1>Cria sua conta</h1>
                <span></span>
                <span></span>
              </div>
              <span>Junte-se ao WatchList Hub</span>
            </div>
            <div>
              <span></span>
            </div>
            <div>4</div>
            <div className="col-span-2">5</div>
          </div>
        </DefaultCard>
      </nav>
    </Dialog.Root>
  );
};
