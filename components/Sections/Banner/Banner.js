import Overlapped from "@/components/UI/OverLapped/Overlapped";
import Image from "next/image";
import CallWithIcon from "../CallOuts/CallOutItem/CallWithIcon";

export default function Banner() {
  return (
    <Overlapped
      col1={<CallWithIcon />}
      col2={
        <Image
          src="/images/banner-home.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="bg"
        />
      }
    />
  );
}
