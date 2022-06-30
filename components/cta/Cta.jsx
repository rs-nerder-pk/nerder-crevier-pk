import CtaBg from "./types/CtaBg";

export default function Cta(props) {
  switch (props.type) {
    case "bg-offset-top":
      return <CtaBg {...props} />;
    case "bg-offset-top":
      return <CtaBg offset="top" {...props} />;
    default:
      return JSON.stringify(props, null, 2);
  }
}
