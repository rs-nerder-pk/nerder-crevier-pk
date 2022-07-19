import classNames from "classnames";

export default function OffSetImageLeft({
  imageUrl,
  bgColor,
  textColor,
  children,
}) {
  return (
    <div className="px-4">
      <div className="md:grid split-columns">
        <div className="col-start-1 row-start-1"></div>
        <div
          className="col-start-1 col-span-2 row-start-1  bg-gray-300 md:-ml-4 bg-cover bg-top"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div
          className={classNames(
            "col-start-3 col-span-1 row-start-1 relative  p-24 md:pr-0",
            bgColor,
            textColor
          )}
        >
          {children && children}
        </div>
        <div className={classNames("md:-mr-4 row-start-1", bgColor)}></div>
      </div>
    </div>
  );
}
