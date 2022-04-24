export default function JobCta() {
  return (
    <div
      style={{ backgroundImage: 'url(/images/home-jobs.jpeg)' }}
      className="bg-no-repeat bg-contain md:bg-cover md:bg-center px-4 pb-24 pt-60 md:pt-48 -mt-12 md:-mt-24"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-10">
          <div className="col-span-8 lg:col-span-4 py-8 px-4 md:p-8 lg:p-12 bg-white text-blue-900 ">
            <div className="grid gap-4 border-y-50 border-blue py-12 ">
              <h2 className="text-red text-3xl font-black  uppercase">
                <a href="/en/careers">
                  Join
                  <br />
                  our team
                </a>
              </h2>
              <p>
                Crevier Group is always looking for competent and motivated
                people to join its team. In warehouses or distribution, in one
                of our sales teams or in our administrative activities, you will
                find a stimulating work environment that favours your success.
              </p>

              <div className="flex justify-start">
                <div>
                  <a href="/en/careers " className="text-red">
                    <span className="text-lg flex items-center">
                      Join us!{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
