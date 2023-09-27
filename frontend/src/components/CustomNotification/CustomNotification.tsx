import styles from "./CustomNotification.module.css";
import { NotificationType } from "../../store/notificationSlice";

const Notification: React.FC<{ notification: NotificationType }> = ({
  notification,
}) => {
  return (
    <div
      className={styles["notification-bar"]}
      style={
        notification.isError
          ? { backgroundColor: "#d76d4c" }
          : { backgroundColor: "#7fd1ae" }
      }
    >
      {notification.message}
    </div>
  );
};

export default Notification;
