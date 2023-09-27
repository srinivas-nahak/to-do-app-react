import styles from "./CustomNotification.module.css";
import {
  NotificationType,
  notificationAction,
} from "../../store/notificationSlice";
import { Dispatch } from "@reduxjs/toolkit";

const Notification: React.FC<{ notification: NotificationType }> = ({
  notification,
}) => {
  let color = notification.isError
    ? { backgroundColor: "#d76d4c" }
    : { backgroundColor: "#7fd1ae" };

  //TaskCompleted Color
  if (notification.taskCompleted) {
    color = { backgroundColor: "#6c8ade" };
  }

  return (
    <div className={styles["notification-bar"]} style={color}>
      {notification.message}
    </div>
  );
};

export default Notification;

export const notificationHandler = (notification: NotificationType) => {
  return (dispatch: Dispatch) => {
    dispatch(notificationAction.showNotification(notification));

    //Hiding the notification after 1.5seconds
    setTimeout(() => {
      dispatch(
        notificationAction.showNotification({
          showNotification: false,
          isError: false,
          message: "",
        })
      );
    }, 700);
  };
};
