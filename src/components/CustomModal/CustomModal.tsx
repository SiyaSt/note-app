import { Button, Modal } from "react-bootstrap";
import { FC } from "react";

interface CustomModalProps {
  title: string;
  description: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

export const CustomModal: FC<CustomModalProps> = ({
  show,
  setShow,
  title,
  description,
}) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
