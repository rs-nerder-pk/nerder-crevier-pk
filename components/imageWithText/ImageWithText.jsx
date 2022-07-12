import OffSetImageLeft from "@/components/UI/containers/OffSetImageLeft";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Button from "../UI/Button";
import BoxedContent from "../UI/containers/BoxedContent";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function ImageWithText({
  type,
  content = [],
  buttons = [],
  image = {
    file: { url: "/images/home-jobs.jpeg" },
    description: "jobs image",
    details: { image: { width: 315, height: 175 } },
  },
}) {
  console.log(image);
  switch (type) {
    case "offsetImageLeftOnBlue":
      return (
        <OffSetImageLeft
          imageUrl={image.file.url}
          bgColor="bg-blue-500"
          textColor="text-white"
        >
          <div className="content content--white">
            <ReactMarkdown className="markdown">{content}</ReactMarkdown>
          </div>
        </OffSetImageLeft>
      );
    case "boxedContentImageRight":
      return (
        <div className="relative my-12">
          <BoxedContent>
            <div className="grid grid-cols-10 gap-4 items-center">
              <div className="col-span-10 sm:col-span-6 order-2 md:order-1">
                <ReactMarkdown className="markdown">{content}</ReactMarkdown>
                <div className="buttons flex gap-4 flex-wrap mt-8">
                  {buttons.map((button, i) => {
                    return (
                      <Button
                        href={button.fields.path}
                        variant={button.fields.type}
                        size="md"
                        endIcon={<ArrowRightIcon />}
                        key={"button" + i}
                      >
                        {button.fields.text}
                      </Button>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-10 mb-7 md:mb-0 md:col-span-4 order-1 md:order-2">
                <Image
                  src={
                    image.file.url.indexOf("//") === 0
                      ? "https:" + image.file.url
                      : image.file.url
                  }
                  layout="responsive"
                  width={image.file.details.image.width}
                  height={image.file.details.image.height}
                  alt={image.description}
                />
              </div>
            </div>
          </BoxedContent>
        </div>
      );
    default:
      return <></>;
  }
}
