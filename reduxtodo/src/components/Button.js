import {useDispatch} from "react-redux";

const Button = ({buttonAction, icon, i}) => {
  console.log("Button", buttonAction);
  console.log(icon, i);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(buttonAction(i))}>{icon}</button>;
};

export default Button;
