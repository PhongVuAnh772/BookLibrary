import { useEffect } from "react";
import './index.css'
export default function Cart(props) {
  const { showModal, setShowModal, content } = props;

  return (
    <div
      className={showModal ? "modal-dialog-1 show" : "modal-dialog-1"}
      role="document"
    >
        
      <div className="modal-content"style={{height: '100%',
	width: '100%',border:0}}>
      
        <div className="">
          
          <button type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close" onClick={() => {
              setShowModal(false);
            }}></button>
            
          
        </div>


        
      </div>
    </div>
  );
}
