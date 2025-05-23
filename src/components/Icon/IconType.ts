import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  icon: IconProp | string;
  color?: string;
  size?: number | string;
  rotate?: number;
  [key: string]: any;
}
