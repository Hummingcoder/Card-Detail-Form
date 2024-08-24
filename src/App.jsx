import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import ImgSection from "./components/ImgSection";
import End from "./components/End";

const App = () => {
  const [errText, setErrText] = useState(["can't be blank", "invalid input"]);
  const [errorStatus, setErrorStatus] = useState(true);
  const [submited, setSubmited] = useState(false);

  const [data, setData] = useState({
    name: "JANE APPLESEED",
    number: "0000 0000 0000 0000",
    mm: "01",
    yy: "00",
    cvc: "123",
  });
  const [errors, setErrors] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [refData, setRefData] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const handleErrors = (name, value) => {
    setErrors((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "number") {
      if (isNaN(value) && value.length > 0) {
        handleErrors("number", errText[1]);
      } else if (value.length < 1) {
        handleErrors("number", errText[0]);
      } else {
        handleErrors("number", "");
      }
    } else if (name === "cvc") {
      if (isNaN(value) && value.length > 0) {
        handleErrors("cvc", errText[1]);
      } else if (value.length < 1) {
        handleErrors("cvc", errText[0]);
      } else {
        handleErrors("cvc", "");
      }
    } else if (name === "mm") {
      if (
        (isNaN(value) && value.length > 0) ||
        value === "0" ||
        value === "00" ||
        value > 12
      ) {
        handleErrors("mm", errText[1]);
      } else if (value.length < 1) {
        handleErrors("mm", errText[0]);
      } else {
        handleErrors("mm", "");
      }
    } else if (name === "yy") {
      if (isNaN(value) && value.length > 0) {
        handleErrors("yy", errText[1]);
      } else if (value.length < 1) {
        handleErrors("yy", errText[0]);
      } else {
        handleErrors("yy", "");
      }
    } else if (name === "name") {
      if (value.trim().length < 1) {
        handleErrors("name", errText[0]);
      } else {
        handleErrors("name", "");
      }
    }
    setData((prev) => {
      let val = e.target.value;
      if (name === "number") {
        val = val
          .replace(/\s/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim()
          .slice(0, 19);
      }
      if (name == "mm") {
        if (val.length === 1) {
          val = "0" + val;
        }
      }
      if (name == "yy") {
        if (val.length === 1) {
          val = "0" + val;
        }
      }
      if (name === "name") {
        val = val.toUpperCase();
      }

      return { ...prev, [name]: val };
    });
    setRefData((prev) => {
      let val = e.target.value;
      if (name === "number") {
        val = val
          .replace(/\s/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim()
          .slice(0, 19);
      }
      if (name == "mm") {
        if (val.length === 1) {
          val = "0" + val;
        }
      }
      if (name == "yy") {
        if (val.length === 1) {
          val = "0" + val;
        }
      }
      if (name === "name") {
        val = val.toUpperCase();
      }

      return { ...prev, [name]: val };
    });
  };

  useEffect(() => {
    for (let i in errors) {
      if (errors[i] !== "") {
        setErrorStatus(true);
        break;
      }
      {
        setErrorStatus(false);
      }
    }
    outofnames();
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yeah");
    if (outofnames()) {
      setSubmited(true);
    }
  };
  function outofnames() {
    let val;
    for (let i in refData) {
      for (let i in errors) {
        if (refData[i] === "" || errors[i] !== "") {
          val = true;
          break;
        }
        {
          val = false;
        }
      }
    }
    if (refData.number.length !== 19) val = true;
    if (refData.cvc.length < 3) val = true;

    console.log(val, refData.number.length, refData.cvc.length);

    return val;
  }

  return (
    <main className="w-full min-h-screen font-spaceGrotesk flex lg:flex-row flex-col tracking-[1px] justify-start  max-w-[1440px]">
      <ImgSection data={data} errors={errors} />
      {submited ? (
        <End />
      ) : (
        <Form
          handleChange={handleChange}
          data={data}
          errors={errors}
          outofnames={outofnames}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default App;
