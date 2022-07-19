import classNames from "classnames";
import Link from "next/link";
import React from "react";

export default function Button({
  href = "/",
  variant,
  size,
  startIcon,
  endIcon,
  children,
}) {
  let variantClass;
  let sizeClass;
  switch (variant) {
    case "primary":
      variantClass = "btn--primary";
      break;
    case "secondary":
      variantClass = "btn--secondary";
      break;
    case "tertiary":
      variantClass = "btn--tertiary";
      break;
    case "outline":
      variantClass = "btn--outline";
      break;
    case "text":
      variantClass = "btn--text";
      break;
    default:
      variantClass = "btn--primary";
  }

  switch (size) {
    case "xs":
      sizeClass = "btn--xs";
      break;
    case "sm":
      sizeClass = "btn--sm";
      break;
    case "md":
      sizeClass = "btn--md";
      break;
    case "lg":
      sizeClass = "btn--lg";
      break;
    case "xl":
      sizeClass = "btn--xl";
      break;
    default:
      sizeClass = "btn--md";
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={classNames("btn", variantClass, sizeClass)}>
        {startIcon && <span className="start-icon">{startIcon}</span>}
        <span className="btn-text">{children}</span>
        {endIcon && <span className="end-icon">{endIcon}</span>}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classNames("btn", variantClass, sizeClass)}>
        {startIcon && <span className="start-icon">{startIcon}</span>}
        <span className="btn-text">{children}</span>
        {endIcon && <span className="end-icon">{endIcon}</span>}
      </a>
    </Link>
  );
}
