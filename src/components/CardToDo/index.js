import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const CardTodo = ({
  id,
  label,
  completeTodo,
  className,
  removeTodo,
  setEdit,
}) => {
  return (
    <div className={className}>
      <div onClick={() => completeTodo(id)}>{label}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(id)}
          className="delete-icon"
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id, value: label })}
        />
      </div>
    </div>
  );
};

export default CardTodo;
