import Content from "../../../demo/Content";

export default function TextWithTwoCols(props) {
  return (
    <section className="px-4 py-8 md:py-14 lg:py-20">
      <div className="grid md:grid-cols-10 container mx-auto">
        <div className="md:col-start-4 md:col-span-7 grid gap-4 md:gap-8">
          <Content />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Content />
            </div>
            <div>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
