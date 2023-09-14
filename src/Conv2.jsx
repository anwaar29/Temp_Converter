import React, { useState, useEffect } from "react";

const Conv2 = () => {
    const [value, setValue] = useState("");
  const [dummy, setDummy] = useState("");
  const [dummy2, setDummy2] = useState("");
  const [convalue, setConvalue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleDrop = (e) => {
    const selTemp = e.target.value;
    setDummy(selTemp);
  };

  const handleInput2 = (e) => {};

  const handleDrop2 = (e) => {
    const selTemp2 = e.target.value;
    setDummy2(selTemp2);
  };

  useEffect(() => {
    if (dummy !== "" && dummy2 !== "" && value !== "") {
      if (dummy === "1" && dummy2 === "22") {
        const q = (value * 1.8 + 32).toFixed(2);
        setConvalue(q);
      } else if (dummy === "1" && dummy2 === "33") {
        const r = (parseInt(value) + 273.15).toFixed(2);
        setConvalue(r);
      } else if (dummy === "2" && dummy2 === "11") {
        const r = (((parseInt(value) - 32) * 5) / 9).toFixed(2);
        setConvalue(r);
      } else if (dummy === "2" && dummy2 === "33") {
        const r = (((value - 32) * 5) / 9 + 273.15).toFixed(2);
        setConvalue(r);
      } else if (dummy === "3" && dummy2 === "11") {
        const r = (parseInt(value) - 273.15).toFixed(2);
        setConvalue(r);
      } else if (dummy === "3" && dummy2 === "22") {
        const r = (((parseInt(value) - 273.15) * 9) / 5 + 32).toFixed(2);
        setConvalue(r);
      }
      else if (dummy === "1" && dummy2 === "11") {
        const r = (value);
        setConvalue(r);
      }
      else if (dummy === "2" && dummy2 === "22") {
        const r = (value);
        setConvalue(r);
      }
      else if (dummy === "3" && dummy2 === "33") {
        const r = (value);
        setConvalue(r);
      }
    } else {
      setConvalue(value);
    }
  }, [dummy, dummy2, value]);

  return (
   <>
    <div>
        <input type="number" value={value} onChange={handleInput} />
        <select name="" id="" onChange={handleDrop}>
          <option value="">Select </option>
          <option value="1">Celcius</option>
          <option value="2">Forenhite</option>
          <option value="3">Kelvin</option>
        </select>
        <div className="eq">=</div>
        <br />
        <div className="right">
          <input
            type="number"
            value={convalue}
            disabled
            onChange={handleInput2}
          />
          <select name="" id="" onChange={handleDrop2}>
            <option value="">Select </option>
            <option value="11">Celcius</option>
            <option value="22">Forenhite</option>
            <option value="33">Kelvin</option>
          </select>
        </div>
        <h1>Your Converted Value is = {convalue}🔥</h1>
       
      </div>
   </>
  )
}

export default Conv2