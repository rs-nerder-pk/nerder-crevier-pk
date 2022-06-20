import Content from "../../../demo/content";
import BoxedContent from "../../UI/containers/BoxedContent";

export default function TextBoxedTwoCol(props) {
  return (
    <section className="py-8">
      <BoxedContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="col">
            <Content />
          </div>
          <div className="col">
            <Content />
          </div>
        </div>
      </BoxedContent>
    </section>
  );
}
