import React from "react";

const End = () => {
  return (
    <section className="mt-[100px] flex flex-col items-center justify-center text-center mb-6 lg:m-0 lg:ml-[100px] w-full max-h-[800px] gap-6 ">
      <img
        src="./images/icon-complete.svg"
        alt="icon-complete"
        className="mx-auto w-[60px]"
      />
      <p className="text-2xl text-veryDarkViolet">THANK YOU!</p>
      <p className="text-darkGrayishViolet">We've added your card details</p>
      <button className="text-white rounded-lg p-3 bg-veryDarkViolet border-2 border-veryDarkViolet hover:bg-white hover:text-veryDarkViolet duration-200 w-[90%] max-w-[360px]">
        Continue
      </button>
    </section>
  );
};

export default End;
