import { Button } from "react-bootstrap";
import { FC } from "react";
import "./ButtonGroup.scss";

interface ButtonGroupProps {
  textButtonFirst: string;
  textButtonSecond: string;
  onClickFirst: () => void;
  onClickSecond: () => void;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  textButtonFirst,
  textButtonSecond,
  onClickSecond,
  onClickFirst,
}) => {
  return (
    <div className="button-group">
      <Button variant="danger" className="delete-button" onClick={onClickFirst}>
        {textButtonFirst}
      </Button>
      <Button variant="success" className="edit-button" onClick={onClickSecond}>
        {textButtonSecond}
      </Button>
    </div>
  );
};
