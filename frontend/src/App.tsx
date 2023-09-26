import { useSelector } from "react-redux";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import ToDo from "./screens/ToDo/ToDo";
import { RootState } from "./store";

const App = () => {
  // const errorObj = useSelector(
  //   (state: RootState) => state.errorReducer.errorObj
  // );

  return (
    <>
      {/* {errorObj.showModal && <ErrorModal errorMessage={errorObj.message} />} */}
      <ToDo />
    </>
  );
};

export default App;
