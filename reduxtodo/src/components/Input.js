import {useDispatch} from "react-redux";

const Input = ({inputEvent, value}) => {
  const dispatch = useDispatch();
  return (
    <input
      placeholder="テキストを入力..."
      onChange={(e) => dispatch(inputEvent(e.target.value))}
      value={value}
    />
  );
};

export default Input;
