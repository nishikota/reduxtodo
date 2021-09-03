import {FaRegTrashAlt, FaPlus} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {
  inputEvent,
  addValue,
  selectInput,
  storageInside,
  removeValue,
} from "./storageSlice";

const TodoList = () => {
  const inputValue = useSelector(selectInput);
  const values = useSelector(storageInside);
  const dispatch = useDispatch();
  return (
    <>
      <div className="inputArea">
        <input
          placeholder="テキストを入力..."
          onChange={(e) => dispatch(inputEvent(e.target.value))}
          value={inputValue}
        />
        <button onClick={() => dispatch(addValue())}>
          <FaPlus />
        </button>
      </div>
      {values.map((value, i) => (
        <div className="value" key={String(i)}>
          <p>{value}</p>
          <button onClick={() => dispatch(removeValue(String(i)))}>
            <FaRegTrashAlt />
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
