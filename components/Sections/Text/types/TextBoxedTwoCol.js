export default function TextBoxedTwoCol(props) {
  return (
    <section className="py-8">
      <div className="container mx-auto border-blue border-20 p-4 sm:px-12 sm:py-14">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="col">
            <h1>sample text</h1>
            <h2>sample text</h2>
            <h3>sample text</h3>
            <h4>sample text</h4>
            <h5>sample text</h5>
            <h6>sample text</h6>
            <p>sample text</p>
          </div>
          <div className="col">test</div>
        </div>
      </div>
    </section>
  );
}
