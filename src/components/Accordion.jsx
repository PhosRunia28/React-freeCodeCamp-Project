import { useState } from "react";
import { accordions } from "../js/accordion";
export default function Accordion() {
  const [selectedAccordion, setAccordion] = useState(null);
  return (
    <main className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
      <div className="w-full max-w-md">
        <h2 className="font-openSans mb-5 text-2xl">Single Accordion</h2>
        <section className="flex  flex-col">
          {accordions.map((accordion) => {
            return (
              <div
                className="relative mb-4 w-full max-w-md border"
                key={accordion.id}
              >
                <div
                  className="flex h-12 w-full cursor-pointer items-center bg-blue-500 pl-3 pr-16"
                  onClick={() =>
                    setAccordion(
                      selectedAccordion === accordion.id ? null : accordion.id,
                    )
                  }
                >
                  <h2 className="text-lg font-semibold text-white">
                    {accordion.title}
                  </h2>
                </div>
                <div className="absolute right-3 top-3 rotate-0 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                {selectedAccordion == accordion.id && (
                  <div className="p-4">
                    <p>{accordion.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>
      <div className="mb-8 w-full max-w-md">
        <h2 className="font-openSans mb-5 text-2xl">Multi Accordion</h2>
        <section className="relative flex flex-col justify-center overflow-hidden ">
          {accordions.map((accordion) => {
            return (
              <div className="relative border" key={accordion.id}>
                <input
                  type="checkbox"
                  className="peer absolute inset-x-0 top-0 h-12 w-full cursor-pointer opacity-0"
                />
                {/* title */}
                <div className="flex h-12 w-full items-center bg-blue-500 pl-3 pr-16">
                  <h2 className="text-lg font-semibold text-white">
                    {accordion.title}
                  </h2>
                </div>
                {/* icon */}
                <div className="absolute right-3 top-3 rotate-0 text-white transition-transform duration-500 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                {/* content */}
                <div className="transtition-all max-h-0 overflow-hidden bg-white duration-500 peer-checked:max-h-40">
                  <div className="p-4">
                    <p>{accordion.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
