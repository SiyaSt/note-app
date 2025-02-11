import { Button } from "react-bootstrap";

export const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Button variant="danger" className="delete-button">
        Delete Note
      </Button>
      <Button variant="success" className="edit-button">
        Save Note
      </Button>
    </div>
  );
};
