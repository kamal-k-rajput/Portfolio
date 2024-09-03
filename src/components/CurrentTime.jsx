import React, { useState, useEffect } from "react";
import "./CurrentTime.css";
export const CurrentTime = () => {
  const classNames = ["time-r", "time-g", "time-y"];
  const [clss, setClss] = useState(true);
  const [time, setTime] = useState("00:00");
  const [SS, setSS] = useState("00");
  const [date, setDate] = useState(() => {
    return "00/00/0000";
  });
  function dateChangeHandler(date) {
    const localDate = date.toLocaleDateString();
    setDate(localDate);
  }
  function timeChangeHandler(date) {
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();

    if (HH?.toString()?.length === 1) {
      HH = `0${HH}`;
    }
    if (MM?.toString()?.length === 1) {
      MM = `0${MM}`;
    }
    const hhmm = `${HH}:${MM}:`;
    if (hhmm !== time) {
      setClss((value) => !value);
    }
    if (SS?.toString()?.length === 1) {
      SS = `0${SS}`;
    }
    setSS(SS);
    setTime(hhmm);
  }

  useEffect(() => {
    const id = setInterval(() => {
      dateChangeHandler(new Date());
      timeChangeHandler(new Date());
    }, 900);
    return () => clearInterval(id);
  }, []);
  return (
    <span>
      <b id="time-date" className={classNames[2]}>
        {date}
      </b>
      <b id="time-minute" className={classNames[clss ? 0 : 1]}>
        {`${" "}${time}`}
        <span id="time-seconds" className={classNames[clss ? 1 : 0]}>
          {SS}
        </span>
      </b>
    </span>
  );
};
