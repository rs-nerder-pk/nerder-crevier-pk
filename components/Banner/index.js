import Image from 'next/image';

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
            <div className="col-span-8 col-start-2 md:col-start-1  md:col-span-6 lg:col-span-4 bg-white py-8 md:p-12 relative md:-left-12">
              <div className="border-blue border-y-20 text-red text-center py-4 font-black">
                <div className="w-2/6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 47.1">
                    <path
                      d="M83 41.5H72.9c0-.5 0-.9-.1-1.4-.3-6.4-2.4-12.2-6.2-17.4-4.3-5.7-10-9.6-16.9-11.5-3.5-1-7-1.3-10.6-1-3 .2-6 .9-8.8 2-.3.1-.4.1-.6-.2-1.7-2.6-3.4-5.3-5.2-7.9-.1-.1-.1-.2-.2-.3C28.1 2 32 .9 36.1.4 44.7-.7 53 .6 60.7 4.7 76.6 13 83.1 28.6 83 41.5zM19.3 19.3c-6 6.2-9 13.6-9.2 22.1H0C.2 29.2 4.8 19 13.6 10.6c1.9 3 3.8 5.9 5.7 8.7zm16.2 16c-1 0-1.7-.5-2.2-1.3-2-3.1-4.1-6.3-6.1-9.4-4-6.2-8-12.3-12-18.5-.7-1.1-.7-2.4.1-3.3 1.2-1.3 3.2-1.2 4.2.3 1.5 2.3 2.9 4.5 4.4 6.8C28.5 17 33.1 24 37.6 31.1c.7 1.1.7 2.2 0 3.2-.5.7-1.2 1-2.1 1zm6 11.8c-2.9 0-5.3-2.3-5.3-5.3 0-2.9 2.3-5.3 5.3-5.3 2.9 0 5.2 2.3 5.2 5.3.1 3-2.2 5.3-5.2 5.3z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#E4112B"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-blue grid gap-4 py-4">
                <h2 className="text-3xl uppercase text-blue font-black tracking-wide">
                  Service-Station
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  praesentium nihil quas? Voluptate quisquam minima
                  perspiciatis, laborum id voluptas voluptates dicta obcaecati,
                  animi illum repudiandae. Sequi ad error nostrum minima!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
