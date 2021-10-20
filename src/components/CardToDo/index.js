import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const CardTodo = ({
  id,
  label,
  completeTodo,
  className,
  removeTodo,
  setEdit,
  isComplete,
}) => {
  return (
    <div className={className}>
      <div className="label" onClick={() => completeTodo(id)}>
        <p>{label}</p>
      </div>
      {!isComplete && (
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
      )}
    </div>
  );
};

export default CardTodo;
