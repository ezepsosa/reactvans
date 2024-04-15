import { ReactNode } from "react";
import classNames from "classname";
export function Button({
  children,
  showMessageFunction,
  size,
  variant,
}: {
  children: ReactNode;
  showMessageFunction: () => void;
  size: string;
  variant: string;
}) {
  const sizeClass = size ? `button-${size}` : "";
  const variantClass = variant ? `${variant}-variant-button` : "";
  const classes = classNames(sizeClass, variantClass);
  return (
    <main>
      <button className={classes} onClick={showMessageFunction}>
        {children}
      </button>
    </main>
  );
}
