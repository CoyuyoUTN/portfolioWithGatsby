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
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="modal-container">
      <button className="button-64" onClick={showModal}>
        <span>Contact me</span>
      </button>
      <Modal
        open={open}
        title="Welcome!"
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
