import Button from "@/components/UI/Button";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function CtaBgOffsetTop({
  backgroundImage = "/images/home-jobs.jpeg",
}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-no-repeat bg-contain md:bg-cover md:bg-center px-4  py-24"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-10 gap-4">
          <div className="col-span-8 lg:col-span-5 py-8 px-4 md:p-8 lg:p-12 bg-white text-blue-900 ">
            <div className="grid gap-4 border-y-50 border-blue py-12 ">
              <Content />
              <div className="flex justify-start">
                <div>
                  <Button
                    href="https://www.parkland.ca/en/careers/power-your-journey-at-parkland"
                    variant="outline"
                    size="sm"
                    endIcon={<ArrowRightIcon />}
                  >
                    Join Us!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Content = () => {
  return (
    <div>
      <h1 className="text-red text-3xl font-black  uppercase">
        Join
        <br />
        our team
      </h1>
      <p>
        Crevier Group is always looking for competent and motivated people to
        join its team. In warehouses or distribution, in one of our sales teams
        or in our administrative activities, you will find a stimulating work
        environment that favours your success.
      </p>
    </div>
  );
};
