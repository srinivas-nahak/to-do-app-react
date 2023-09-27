import { useSelector } from "react-redux";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import ToDo from "./screens/ToDo/ToDo";
import { RootState } from "./store";
import CustomNotification from "./components/CustomNotification/CustomNotification";

const App = () => {
  const errorObj = useSelector(
    (state: RootState) => state.errorReducer.errorObj
  );

  const notificationObj = useSelector(
    (state: RootState) => state.notificationReducer
  );

  return (
    <>
      {errorObj.showModal && <ErrorModal errorMessage={errorObj.message} />}
      {notificationObj.showNotification && (
        <CustomNotification notification={notificationObj} />
      )}
      <ToDo isNotificationVisible={notificationObj.showNotification} />
    </>
  );
};

export default App;
