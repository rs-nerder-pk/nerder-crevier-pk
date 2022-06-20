export default function BoxedContent(props) {
  return (
    <div className="container mx-auto border-blue border-20 p-4 sm:px-12 sm:py-14 bg-white">
      {props.children}
    </div>
  );
}
