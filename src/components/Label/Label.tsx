import { FC } from "react";
import styles from "./Label.module.scss";

interface LabelProps {
  children: string;
}

const Label: FC<LabelProps> = ({ children }) => {
  return <div className={styles.label}>{children}</div>;
};

export default Label;
