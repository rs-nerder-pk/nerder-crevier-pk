export default function Logo() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center flex-col text-center text-red-500 font-black uppercase text-xl">
        <hr className="border-t-[.5em] border-blue-500  w-[4.75ch]" />
        <div className="py-0.5 flex items-center flex-col">
          <span className="-mb-1">Crevier</span>
          <small className="text-[0.65rem] font-bold tracking-[.15em] leading-3">
            Fuels
          </small>
        </div>
        <hr className="border-t-[.5em] border-blue-500  w-[4.75ch]" />
      </div>
    </div>
  );
}
