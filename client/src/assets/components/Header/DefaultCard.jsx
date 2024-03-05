import * as Dialog from "@radix-ui/react-dialog";
import PropTypes from "prop-types";

export const DefaultCard = ({ children }) => {
  DefaultCard.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="inset-0 fixed bg-slate-900 opacity-40" />
      <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-950 rounded-3xl flex flex-col outline-none">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};
