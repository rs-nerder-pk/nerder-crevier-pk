import Image from 'next/image';
import CallWithIcon from '../CallOuts/CallOutItem/CallWithIcon';

export default function Banner() {
  return (
    <div className="px-5">
      <div className="grid md:grid-cols-10 container mx-auto">
        <div
          className="relative hidden md:block md:col-start-4 row-start-1 w-screen h-full"
          style={{
            backgroundImage: 'url(/images/banner-home.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative h-full"></div>
        </div>
        <div className="relative row-start-1 col-start-1 col-span-10 py-12">
          <div className="grid grid-cols-10 container mx-auto">
            <div className="col-span-8 col-start-2 md:col-start-1  md:col-span-6 lg:col-span-4   relative md:-left-12 bg-white py-8 md:p-12">
              <CallWithIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
