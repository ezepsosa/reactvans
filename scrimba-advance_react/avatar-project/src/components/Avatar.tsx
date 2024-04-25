import classNames from "classnames";
import { ReactNode } from "react";

export function Avatar({
  src,
  children,
}: {
  src: string;
  children?: ReactNode;
}) {
  const classAvatarIcon = children ? "avatar-letters" : "avatar-icon";
  const classes = classNames("avatar", classAvatarIcon);
  return (
    <div className={src != "" ? "avatar" : classes}>
      {src ? <img src={src} alt="" /> : children}
    </div>
  );
}
