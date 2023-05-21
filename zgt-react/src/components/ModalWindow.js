import React, { useEffect } from 'react';
import Btn from './Btn';
import "./ModalWindow.css";
import ReactDOM from 'react-dom';
export default function ModalWindow(props) {
    const { body, header, isModalVisible, handlerClose } = props;
    
    const closeBackdropClick = (e) => {
        if (e.target.classList.contains('xmodal-backdrop')){
            handlerClose();
        }
    }
    useEffect(() => {
        if(isModalVisible){
            document.body.style.overflow = 'hidden';
        } 
        return () => {
            document.body.style.overflow = 'unset';
        }
    })

    return (
        ReactDOM.createPortal(
            <div name="modal-fade" style={{display: isModalVisible ? 'flex' : 'none' }}>
            <div className="xmodal-backdrop" onClick={ closeBackdropClick }>
                <div className="xmodal container"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription">
                    <div className='column'>
                        <header
                            className="xmodal-header"
                            id="modalTitle">
                            { header }
                        </header>
                        <div
                            className="xmodal-body container-fluid justify-content-center"
                            id="modalDescription">
                            <div className='row justify-content-center'>
                                { body }
                            </div>
                        </div>
                        <footer className="xmodal-footer">
                            <Btn
                                action={ handlerClose }        
                                title="Закрыть">
                            </Btn>
                        </footer>
                    </div>
                </div>
            </div>
        </div>,
            document.body
          )
        
    );
}