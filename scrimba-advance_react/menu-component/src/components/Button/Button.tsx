import classNames from "classnames";
import { ReactNode } from "react";
export default function Button({
  children,
  className,
  size,
  variant,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  size?: string;
  variant?: string;
  onClick?: () => void;
}) {
  const sizeClass = size && `button-${size}`;
  const variantClass = variant && `button-${variant}`;
  const allClasses = classNames(sizeClass, variantClass, className);

  return (
    <button className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
}
