export default function CallOut() {
  return (
    <div className="grid gap-4">
      <h2 className="text-red text-2xl md:text-3xl lg:text-5xl font-black uppercase">
        Title
      </h2>
      <div className="flex items-end">
        <span className="text-base md:text-xl leading-none mr-4">Crevier</span>
        <hr className="border-red border-t-4 w-full relative -top-1" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit
        soluta eaque fugit vel veniam, rerum earum minus consequatur deserunt
        sunt illum amet iusto quam aspernatur placeat harum laudantium tempore.
      </p>
    </div>
  );
}
