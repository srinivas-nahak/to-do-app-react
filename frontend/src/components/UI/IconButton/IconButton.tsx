import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./IconButton.module.css";

interface IconButtonType extends React.HTMLProps<HTMLButtonElement> {
  icon: IconProp;
}

const IconButton: React.FC<IconButtonType> = ({
  className,
  children,
  icon,
  type = "button",
  ...otherProps
}) => {
  const copyProps = {
    className: `${styles.Button} ${className}`,
    ...otherProps,
  };

  return (
    <button {...copyProps}>
      <FontAwesomeIcon icon={icon} className={styles.ButtonIcon} />
    </button>
  );
};

export default IconButton;
