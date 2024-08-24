import React from "react";

const ImgSection = ({ errors, data }) => {
  return (
    <section className="w-full h-[200px] lg:w-[40vw] lg:min-w-[300px] lg:max-w-[500px] relative">
      <img
        className="absolute w-full h-[200px] left-0 top-0 z-10 lg:hidden"
        src="./images/bg-main-mobile.png"
        alt="bg-main-mobile"
      />
      <img
        className="absolute w-[40vw] hidden lg:block h-screen left-0 top-0 z-10  max-w-[360px]"
        src="./images/bg-main-mobile.png"
        alt="bg-main-desktop"
      />

      <article className="p-4 absolute z-[999] w-full max-w-[340px] h-[200px] top-0 left-[50%] translate-x-[-50%] lg:top-[200px] lg:left-[100%] ">
        <div className="absolute w-[80%] top-[30px] right-[5px] lg:top-[80%] lg:w-[360px] rounded-lg shadow-custom-shadow ">
          <img src="./images/bg-card-back.png" alt="bg-card-back" />
          <p className="absolute top-[41.2%] right-[14%] lg:top-[43%] font-semibold text-white ">
            {data.cvc}
          </p>
        </div>
        <div className="absolute w-[80%] top-[116px] right-[60px] lg:top-[-40%] lg:w-[360px] shadow-custom-shadow">
          <img src="./images/bg-card-front.png" alt="" />

          <div className="absolute z-50 top-0 left-0 w-full p-4 h-full flex flex-col items-start justify-between">
            <img
              className="w-[60px] lg:w-[80px]"
              src="./images/card-logo.svg"
              alt=""
            />
            <div className="flex flex-col gap-1 w-full text-white ">
              <p className="text-clamp font-semibold lg:text-[1.7rem]">
                {data.number}
              </p>
              <div className="flex w-full justify-between items-center text-xs">
                <p>{data.name}</p>
                <p>
                  {data.mm}/{data.yy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ImgSection;
