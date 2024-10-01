import React from "react";
import Button from "../Actions/Button/Button";

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl px-8 mx-auto text-center md:px-0">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
            PRICING
          </h2>
        </div>

        <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3 items-center">
          <div className="overflow-hidden bg-futr-black rounded-2xl text-futr-white">
            <div className="p-6 lg:px-10 lg:py-8">
              <h3 className="text-lg font-bold tracking-widest">Basic</h3>
              <p className="mt-3 text-5xl font-bold">FREE</p>
              <p className="mt-5 text-base font-normal leading-7 mb-6">
                The essential plan for athletes, clubs, and brands.
              </p>

              <p className="mt-8 text-base font-semibold tracking-wide">
                What's included:
              </p>
              <ul className="mt-4 space-y-3 text-base font-normal">
                <li>Personal profile & Connections</li>
                <li>Basic messaging</li>
                <li>Chat Support</li>
                <li>Limited visibility for athletes</li>
                <li>Basic search for clubs and brands</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-futr-red rounded-2xl text-white py-12">
              <div className="p-6 lg:px-10 lg:py-8">
                <h3 className="text-lg font-bold tracking-wide">Premium</h3>
                <p className="mt-3 text-5xl font-bold ">$159</p>
                <p className="mt-5 text-base font-normal leading-7 mb-6">
                  Everything from the basic plan and more.
                </p>

                <p className="mt-8 text-base font-bold tracking-wide">
                  What's included:
                </p>
                <ul className="mt-4 space-y-3 text-base font-medium">
                  <li>Enhanced visibility</li>
                  <li>Access to exclusive opportunities</li>
                  <li>Advanced tools for branding</li>
                  <li>Contract builder</li>
                  <li>Performance analytics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-futr-black rounded-2xl text-futr-white">
            <div className="p-6 lg:px-10 lg:py-8">
              <h3 className="text-lg font-bold tracking-wide">Elite</h3>
              <p className="mt-3 text-5xl font-bold">$450</p>
              <p className="mt-5 text-base font-normal leading-7 mb-6">
                Everything from the pro and basic plan plus more.
              </p>

              <p className="mt-8 text-base font-semibold tracking-wide">
                What's included:
              </p>
              <ul className="mt-4 space-y-3 text-base font-normal">
                <li>Full access to all platform features</li>
                <li>Legal and contract assistance</li>
                <li>Branding and sponsorship</li>
                <li>Priority support</li>
                <li>Custom dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          <Button href="/register">Join for free now!</Button>
        </div>
      </div>
    </section>
  );
}
