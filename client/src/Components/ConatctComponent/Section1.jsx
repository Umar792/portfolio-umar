import React, { useState } from "react";
import { toast } from "react-toastify";

const Section1 = () => {
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [Name, setName] = useState("");

  const datasend = () => {
    if (!email) {
      return toast.error("Plaese Enter Your Email Adress");
    }
    if (!Name) {
      return toast.error("Plaese Enter Your Name");
    }
    if (!message) {
      return toast.error("Plaese Enter Your Message");
    }
    toast.success(
      `Hi, ${Name} your message send successfuly, we contact you ASAP.`
    );
  };

  return (
    <div className="conatct_section1">
      <h2 className="h2 my-6">Get in touch.📱</h2>
      {/* ==============================================  */}
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300 opacity-[.5]">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435616.16675841535!2d73.87166700551191!3d31.462272544898788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691834943778!5m2!1sen!2s"
            className="filter: grayscale(1) contrast(1.2) opacity(0.4)"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Form
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              After you send the message our team contact with you ASSA,Thank
              you.
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={datasend}
              class="text-black bg-[#AB64F7] border-0 py-2 px-6 focus:outline-none hover:bg-[#AB64F7] rounded text-lg"
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
