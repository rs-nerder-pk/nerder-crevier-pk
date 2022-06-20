import BoxedContent from "@/components/UI/containers/BoxedContent";
import { list } from "postcss";
import Content from "../../../demo/content";

import styles from "./Text.module.scss";

export default function TextBoxedTwoColWithList(props) {
  const list = [null, null];
  return (
    <section className="py-8">
      <BoxedContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Content />
          </div>
          <div className={`grid sm:grid-cols-2 gap-4 ${styles.BoxedList}`}>
            {list.map((_, i) => {
              return (
                <ul key={i}>
                  <li>item_1</li>
                  <li>item_2</li>
                  <li>item_3</li>
                  <li>item_4</li>
                  <li>item_5</li>
                </ul>
              );
            })}
          </div>
        </div>
      </BoxedContent>
    </section>
  );
}
