import CtaBgOffsetTop from "./types/CtaBgOffsetTop";

export default function Cta(props) {
  switch (props.type) {
    case "bg-offset-top":
      return <CtaBgOffsetTop {...props} />;
    default:
      return JSON.stringify(props, null, 2);
  }
}
