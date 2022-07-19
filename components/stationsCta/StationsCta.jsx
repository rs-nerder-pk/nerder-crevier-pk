import React from "react";
import OutlinedWhite from "../UI/containers/OutlinedWhite";
import { ArrowRightIcon } from "@heroicons/react/solid";

import Gauge from "../UI/icons/Gauge";
import Router, { useRouter } from "next/router";

export default function StationsCta() {
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
                  <h2>SERVICE STATIONS</h2>
                  <p>
                    With our extensive network of 170 gas stations, Crevier
                    offers great amenities, including car wash facilities,
                    convenience stores and restaurants. Check our gas station
                    finder for all the amenities available near you.
                  </p>
                </div>
                <div className="col-span-7 mt-5 lg:mt-0 lg:col-span-3 self-end">
                  <div className="lg:w-10/12 mx-auto">
                    <FindAStationForm label="Find a gas station" />
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

const FindAStationForm = ({ label, placeholder }) => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add logic for submitting the form
    // for should get users location and then pass it to /stations endpoint
    // for now, just redirect to /stations
    router.push("/stations");
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
          placeholder={placeholder ?? "Enter your location"}
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
