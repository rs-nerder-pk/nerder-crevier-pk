import Overlapped from "@/components/UI/containers/OverLappedImageRight";
import Image from "next/image";
import styles from "./Banner.module.scss";
import RichTextWrapper from "../UI/RichText/RichTextWrapper";

export default function Banner({ content, image }) {
  return (
    <section className="px-4">
      <Overlapped
        content={<Content content={content} />}
        image={
          <Image
            src={
              image.file.url.indexOf("//") === 0
                ? "https:" + image.file.url
                : image.file.url
            }
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt={image.description}
          />
        }
      />
    </section>
  );
}

const Content = ({ content }) => {
  return (
    <div className="md:grid grid-cols-10 gap-4 py-12">
      <div className="col-span-5 md:w-[110%]">
        <div className="border-y-50 border-blue-500 py-8 overflow-hidden">
          <div className={styles.Heading}>
            <RichTextWrapper richTexts={content} />
          </div>
        </div>
      </div>
    </div>
  );
};
