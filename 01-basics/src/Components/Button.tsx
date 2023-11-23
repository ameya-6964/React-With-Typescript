import { ReactNode } from "react";

interface ButtonProp {
  // color?: string;
  //! This is Called Union Operator
  color?: "primary" | "secondary" | "danger" | "warning" | "success";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProp) => {
  return (
    <div>
      <button className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
