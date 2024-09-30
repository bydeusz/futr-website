import React from "react";

const HowToData = [
  {
    title: "1. Register your account",
    description:
      "Follow the steps on the website to create your account. It’s easy to setup. We promise.",
  },
  {
    title: "2. Setup your profile",
    description:
      "Connect your social media channels like Instagram, YouTube, and TikTok. Our AI-powered agent will create a personalized profile that will be shared with potential brand partners.",
  },
  {
    title: "3. Start to chat with CLUBS",
    description:
      "Your profile is automatically shared with clubs, allowing them to reach out to you directly—no effort required on your part.",
  },
  {
    title: "4. Make the deal!",
    description:
      "You can directly connect with brands to set up deals. You'll create the content, and the brand will pay you seamlessly through FUTR—no hassle involved.",
  },
];

export default function HowTo() {
  return (
    <section>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 gap-12 mt-12 lg:max-w-none lg:grid-cols-4 sm:mt-16 lg:mt-20">
          {HowToData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-start lg:flex-col hover:cursor-pointer group transition-all duration-200">
              <span
                className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-800 lg:top-1.5 lg:left-7 transition-all duration-200"
                aria-hidden="true"></span>

              <div className="w-3 h-3 bg-gray-800 rounded-full shrink-0 group-hover:bg-futr-red transition-all duration-200"></div>
              <div className="ml-6 lg:ml-0 lg:mt-10 transition-all duration-200">
                <h3 className="text-2xl font-semibold text-white transition-all duration-200">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-normal text-gray-600 group-hover:text-white transition-all duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
