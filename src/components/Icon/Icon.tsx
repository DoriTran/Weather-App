import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, FC } from "react";
import { IconProps } from "./IconType";

const Icon: FC<IconProps> = ({ icon, color, size, ...restProps }) => {
  const style: CSSProperties = {
    ...(size && { fontSize: size, height: size, width: size }),
    cursor: restProps.onClick ? "pointer" : "unset",
    ...restProps.style,
  };

  if (typeof icon === "string")
    return (
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`${icon} icon`}
        style={style}
      />
    );
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      fixedWidth
      {...restProps}
      style={{
        ...(size && { fontSize: size }),
        cursor: restProps.onClick ? "pointer" : "unset",
        ...restProps.style,
      }}
    />
  );
};

export default Icon;
