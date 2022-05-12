import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
    const modalWindowClasses = [classes.Modal];

    if (visible) {
        modalWindowClasses.push(classes.active);
    }

    return (
        <div
            className={modalWindowClasses.join(" ")}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.modal_content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
