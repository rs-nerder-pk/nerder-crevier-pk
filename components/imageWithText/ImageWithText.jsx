import OffSetImageLeft from "@/components/UI/containers/OffSetImageLeft";
import Content from "demo/Content";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Button from "../UI/Button";
import BoxedContent from "../UI/containers/BoxedContent";

export default function ImageWithText({ type }) {
  switch (type) {
    case "offsetImageLeftOnBlue":
      return (
        <OffSetImageLeft
          imageUrl="/images/home-jobs.jpeg"
          bgColor="bg-blue-500"
          textColor="text-white"
        >
          <div className="content content--white">
            <h2>Proudly serving Eastern Canada</h2>
            <p>
              Crevier Petroleum has been providing Canadians with quality fuels
              for over 75 years. You’ll find Crevier service stations on major
              routes throughout Quebec and northeastern Ontario. Wherever you go
              across the region, Crevier is there to fuel your journey.
            </p>
          </div>
        </OffSetImageLeft>
      );
    case "boxedContentImageRight":
      return (
        <div className="relative my-12">
          <BoxedContent>
            <div className="grid grid-cols-10 gap-4 items-center">
              <div className="col-span-6">
                <Content />
                <div className="buttons flex gap-4 flex-wrap mt-8">
                  <Button
                    href="/"
                    variant="secondary"
                    size="md"
                    endIcon={<ArrowRightIcon />}
                  >
                    Learn More
                  </Button>
                  <Button
                    href="/"
                    variant="text"
                    size="md"
                    endIcon={<ArrowRightIcon />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="col-span-4">
                <div className="aspect-[16/9] bg-slate-300"></div>
              </div>
            </div>
          </BoxedContent>
        </div>
      );
    default:
      return <div>Text With Image</div>;
  }
}
