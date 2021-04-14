import ReactDOM from "react-dom";

function PortalModal({ isShowing, children }) {
  if (!isShowing) {
    return null;
  }
  return ReactDOM.createPortal(children, document.getElementById("modal-root"));
}

export default PortalModal;
