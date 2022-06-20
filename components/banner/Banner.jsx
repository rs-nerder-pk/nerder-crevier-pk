import Overlapped from "@/components/UI/containers/OverLappedImageRight";
import Image from "next/image";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className="px-4">
      <Overlapped
        content={<Content />}
        image={
          <Image
            src="/images/banner-home.jpeg"
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

const Content = () => {
  return (
    <div className="md:grid grid-cols-12 gap-4 py-12">
      <div className="col-span-6">
        <div className="border-y-50 border-blue-500 py-8 overflow-hidden ga-4">
          <h1>
            <b className={styles.line}>Quality</b> fuels for your journey
          </h1>
        </div>
      </div>
    </div>
  );
};
