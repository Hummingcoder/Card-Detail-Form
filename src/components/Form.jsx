import React, { useEffect } from "react";

const Form = ({ handleChange, data, errors, outofnames, handleSubmit }) => {
  return (
    <section className="mt-[80px] grid place-content-center mb-6 lg:m-0 lg:ml-[100px] w-full max-h-[800px]">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[90%] mx-auto max-w-[500px] grid gap-6"
      >
        {/* ---------------------------------------- name input---------- */}
        <div className="flex flex-col gap-2 text-veryDarkViolet ">
          <label className="text-xs" htmlFor="name">
            CARDHOLDER NAME
          </label>
          <input
            className={`border-2 outline-none  p-2 rounded-lg placeholder:text-lightGrayishViolet ${
              data.name.length <= 0 || errors.name !== ""
                ? "border-red-500"
                : "border-lightGrayishViolet"
            }`}
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            name="name"
            onChange={handleChange}
          />
          <p className="text-[10px] ml-1 text-red-500">{errors.name}</p>
        </div>
        {/* ---------------------------------------- number input---------- */}
        <div className="flex flex-col gap-2 text-veryDarkViolet ">
          <label className="text-xs " htmlFor="name">
            CARD NUMBER
          </label>
          <input
            className={`border-2 outline-none p-2 rounded-lg placeholder:text-lightGrayishViolet ${
              errors.number !== ""
                ? "border-red-500"
                : "border-lightGrayishViolet"
            } `}
            type="text"
            id="number"
            placeholder="e.g. 1234 5678 9012 3456"
            maxLength={16}
            name="number"
            onChange={handleChange}
          />

          <p className="text-[10px] ml-1 text-red-500">{errors.number}</p>
        </div>
        {/* ---------------------------------------- exp date input---------- */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 text-veryDarkViolet ">
            <label className="text-xs " htmlFor="name">
              EXP. DATE (MM/YY)
            </label>
            <div className="flex items-center gap-2">
              <input
                className={`w-full border-2 outline-none  p-2 rounded-lg placeholder:text-lightGrayishViolet ${
                  errors.mm !== ""
                    ? "border-red-500"
                    : "border-lightGrayishViolet"
                }`}
                type="text"
                id="mm"
                placeholder="MM"
                maxLength={2}
                onChange={handleChange}
                name="mm"
              />
              <input
                className={`w-full border-2 outline-none border-lightGrayishViolet p-2 rounded-lg placeholder:text-lightGrayishViolet ${
                  errors.yy !== ""
                    ? "border-red-500"
                    : "border-lightGrayishViolet"
                }`}
                type="text"
                id="yy"
                placeholder="YY"
                maxLength={2}
                onChange={handleChange}
                name="yy"
              />
            </div>
            <p className="text-[10px] ml-1 text-red-500">
              {errors.mm || errors.yy}
            </p>
          </div>

          {/* ---------------------------------------- cvc input---------- */}

          <div className="flex flex-col gap-2 text-veryDarkViolet">
            <label className="text-xs" htmlFor="name">
              CVC
            </label>
            <input
              className={`border-2 outline-none ${
                errors.cvc !== ""
                  ? "border-red-500"
                  : "border-lightGrayishViolet"
              } p-2 rounded-lg placeholder:text-lightGrayishViolet`}
              type="text"
              id="cvc"
              placeholder="e.g. 123"
              maxLength={3}
              onChange={handleChange}
              name="cvc"
            />
            <p className="text-[10px] ml-1 text-red-500">{errors.cvc}</p>
          </div>
        </div>
        <button
          type="submit"
          className={`${
            outofnames()
              ? "opacity-10 cursor-not-allowed"
              : "cursor-pointer opacity-100 hover:bg-white hover:text-veryDarkViolet"
          } text-white rounded-lg p-3 bg-[#220532] border-2  border-veryDarkViolet  duration-200`}
        >
          Confirm
        </button>
      </form>
    </section>
  );
};

export default Form;
