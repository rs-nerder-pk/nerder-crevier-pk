import Image from 'next/image';

export default function Banner() {
  return (
    <div className="px-4">
      <div className="grid md:grid-cols-10 container mx-auto">
        <div className=" col-span-4">
          <div className="border-blue border-y-20 text-red text-center py-4">
            icon
          </div>
          <div className="text-blue">
            <h2 className="text-xl font-black">Service Stations</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              praesentium nihil quas? Voluptate quisquam minima perspiciatis,
              laborum id voluptas voluptates dicta obcaecati, animi illum
              repudiandae. Sequi ad error nostrum minima!
            </p>
          </div>
          <div className="relative hidden">
            <Image
              src="/images/banner-home.jpeg"
              alt="banner image"
              width={1025}
              height={425}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
