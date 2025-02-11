import { Button, Modal } from "react-bootstrap";
import { FC } from "react";

interface CustomModalProps {
  title: string;
  description: string;
  show: boolean;
  onCancel: () => void;
  onConfirm?: () => void;
}

export const CustomModal: FC<CustomModalProps> = ({
  show,
  title,
  description,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal show={show} onHide={onCancel} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onConfirm}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
