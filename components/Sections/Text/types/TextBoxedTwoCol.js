import Content from "../../../../demo/content";

export default function TextBoxedTwoCol(props) {
  return (
    <section className="py-8">
      <div className="container mx-auto border-blue border-20 p-4 sm:px-12 sm:py-14 bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="col">
            <Content />
          </div>
          <div className="col">
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}
