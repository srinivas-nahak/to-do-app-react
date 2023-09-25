import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store/counterSlice";
import { RootState } from "./store";
import ToDo from "./screens/ToDo/ToDo";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);

  return (
    <>
      <ToDo />
    </>
  );
};

export default App;
