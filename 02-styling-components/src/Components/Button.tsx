import { ReactNode } from "react";
import styles from "./styles/Button.module.css";

interface ButtonProp {
  // color?: string;
  //! This is Called Union Operator
  // color?: "primary" | "secondary" | "danger" | "warning" | "success";
  children: ReactNode;
  //onClick?: () => void;
}

const Button = ({ children }: ButtonProp) => {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default Button;
