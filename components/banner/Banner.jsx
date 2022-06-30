import Overlapped from "@/components/UI/containers/OverLappedImageRight";
import Image from "next/image";
import styles from "./Banner.module.scss";

export default function Banner({ content, image }) {
  return (
    <section className="px-4">
      <Overlapped
        content={<Content content={content} />}
        image={
          <Image
            src={image?.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="bg"
          />
        }
      />
    </section>
  );
}

const Content = ({ content }) => {
  return (
    <div className="md:grid grid-cols-10 gap-4 py-12">
      <div className="col-span-5">
        <div className="border-y-50 border-blue-500 py-8 overflow-hidden">
          <div className={styles.Heading}>
            {/*TODO: replace with Markdown or RichText compontent when adding Contentful Data */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </div>
  );
};
