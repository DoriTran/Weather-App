import { FC } from "react";
import clsx from "clsx";
import Paper from "@mui/material/Paper";
import styles from "./Paper.module.scss";

interface PaperProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const CustomizePaper: FC<PaperProps> = ({ className, children, ...restProps }) => {
  return (
    <Paper elevation={3} className={clsx(styles.container, className)} {...restProps}>
      {children}
    </Paper>
  );
};

export default CustomizePaper;
