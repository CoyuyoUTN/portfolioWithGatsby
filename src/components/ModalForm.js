import React, { useState } from "react";
import { Modal, Button } from "antd";
import FormEmail from "./FormEmail";

const ModalForm = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
    console.log(loading);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="modal-container">
      <button class="cssbuttons-io-button" onClick={showModal}>
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          data-icon="paper-plane"
          width="20px"
          aria-hidden="true"
        >
          <path
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Contact me</span>
      </button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <FormEmail />
      </Modal>
    </div>
  );
};
export default ModalForm;
