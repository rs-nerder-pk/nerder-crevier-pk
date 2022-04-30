import Content from "../../../../demo/content";

import styles from "./Text.module.scss";

export default function TextBoxedTwoColWithList(props) {
  return (
    <section className="py-8">
      <div className="container mx-auto border-blue border-20 p-4 sm:px-12 sm:py-14 bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Content />
          </div>
          <div className={`grid sm:grid-cols-2 gap-4 ${styles.BoxedList}`}>
            <div>
              <ul>
                <li>item_1</li>
                <li>item_2</li>
                <li>item_3</li>
                <li>item_4</li>
                <li>item_5</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>item_1</li>
                <li>item_2</li>
                <li>item_3</li>
                <li>item_4</li>
                <li>item_5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
