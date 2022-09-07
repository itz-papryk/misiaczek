import React, { useState, useEffect, Dispatch } from "react";
import "./Countdown.scss";

interface PropsInterface {
  setYear: Dispatch<any>;
}

const Countdown = (props: PropsInterface) => {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(`07/29/2022`);

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        lat: Math.floor(difference / (1000 * 60 * 60 * 24 * 356)),
        miesiecy: Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12),
        dni: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        godzin: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minut: Math.floor((difference / 1000 / 60) % 60),
        sekund: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;
    console.log(interval);

    if (interval === "lat" && timeLeft[interval] === 1) {
      props.setYear(timeLeft[interval]);
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]}&nbsp;
        {timeLeft[interval] === 1
          ? interval === "miesiecy"
            ? "miesiąc"
            : interval === "sekund"
            ? "sekunde"
            : interval === "minut"
            ? "minute"
            : interval === "lat"
            ? "rok"
            : interval
          : interval}
      </span>
    );
  });

  return (
    <>
      {timerComponents.length ? (
        <div className='zakretka'>
          {timerComponents.map((e: any, i: any) => e)}
        </div>
      ) : (
        "Time's up!"
      )}
    </>
  );
};

export default Countdown;
