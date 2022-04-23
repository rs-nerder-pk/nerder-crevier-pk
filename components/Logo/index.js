export default function Logo() {
  return (
    <div className="flex justify-start origin-top-left">
      <div className="flex items-center flex-col text-center text-red-500 font-black uppercase sm:text-2xl lg:text-4xl">
        <hr className="border-t-[.5em] border-blue-500  w-[4.75ch]" />
        <div className="py-[0.125em] flex items-center flex-col">
          <span className="-mb-[.125em]">Crevier</span>
          <small className="text-[0.35em] font-bold tracking-[.15em] leading-[1em]">
            Fuels
          </small>
        </div>
        <hr className="border-t-[.5em] border-blue-500  w-[4.75ch]" />
      </div>
    </div>
  );
}
