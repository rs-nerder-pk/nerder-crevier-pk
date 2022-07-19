import React, { useContext, useRef } from "react";
import OutlinedWhite from "../UI/containers/OutlinedWhite";
import { ArrowRightIcon } from "@heroicons/react/solid";
import RichTextWrapper from "@/components/UI/RichText/RichTextWrapper";
import Gauge from "../UI/icons/Gauge";
import { useRouter } from "next/router";
import { LocationContext } from "context/locationContext";

export default function StationsCta({ content }) {
  const router = useRouter();
  return (
    <section className="relative container mx-auto bg-white px-5">
      <OutlinedWhite>
        <div className="border-y-20 border-blue-500 py-12 px-9">
          <div className="grid gap-4 md:grid-cols-10">
            <div className=" md:col-span-3">
              <div className="w-2/4 md:w-10/12 lg:mx-auto text-red-500">
                <Gauge classnames="w-full" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid lg:grid-cols-7">
                <div className="col-span-4 content content--small content--blue">
                  <RichTextWrapper richTexts={content} />
                </div>
                <div className="col-span-7 mt-5 lg:mt-0 lg:col-span-3 self-end">
                  <div className="lg:w-10/12 mx-auto">
                    <FindASationForm
                      label={
                        router.locale === "en-US"
                          ? "Find a gas station"
                          : "Trouver une station-service"
                      }
                      placeholder={
                        router.locale === "en-US"
                          ? "Your postal code"
                          : "Votre code postal"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OutlinedWhite>
    </section>
  );
}

const FindASationForm = ({ label, placeholder }) => {
  const locationInput = useRef(null);
  const [_, setLocation] = useContext(LocationContext);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(locationInput.current.value);
    const href = "/stations";
    router.push(href);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location" className="text-red-500 font-bold text-lg ">
        {label && label}
      </label>
      <div className="flex mt-4">
        <input
          className="w-4/5 border-red-500 border-2 p-2 text-sm text-red-500"
          type="text"
          id="location"
          placeholder={placeholder}
          ref={locationInput}
        />
        <button
          type="submit"
          className="bg-red-500 text-white w-1/5 inline-flex justify-center items-center"
        >
          <span className="sr-only">Submit</span>
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};
