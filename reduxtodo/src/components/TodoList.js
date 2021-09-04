import {FaRegTrashAlt, FaPlus} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {
  inputEvent,
  addValue,
  selectInput,
  storageInside,
  removeValue,
} from "./storageSlice";
import Button from "./Button";
import Input from "./Input";

const TodoList = () => {
  const inputValue = useSelector(selectInput);
  const values = useSelector(storageInside);

  return (
    <>
      <div className="inputArea">
        <Input inputEvent={inputEvent} value={inputValue} />
        <Button buttonAction={addValue} icon={<FaPlus />} />
      </div>
      {values.map((value, i) => (
        <div className="value" key={String(i)}>
          <p>{value}</p>
          <Button
            i={String(i)}
            icon={<FaRegTrashAlt />}
            buttonAction={removeValue}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
