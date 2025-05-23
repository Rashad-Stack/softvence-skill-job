"use client"
import Countdown from "react-countdown";

export default function CountdownTimer({ deadline }) {
  return (
    <Countdown
      date={new Date(deadline)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <span
              className="text-red-600 font-semibold text-2xl "
              role="status"
              aria-live="polite"
            >
              Expired
            </span>
          );
        }

        return (
          <div
            className="flex flex-col items-center space-y-1 sm:space-y-2"
            role="timer"
            aria-label="Countdown to deadline"
          >
            <div className="flex items-center">
              <TimeGroup label="days" value={days} />
              <Colon />
              <TimeGroup label="hr" value={hours} />
              <Colon />
              <TimeGroup label="min" value={minutes} />
              <Colon />
              <TimeGroup label="s" value={seconds} />
            </div>
          </div>
        );
      }}
    />
  );
}

const TimeGroup = ({ label, value }) => {
  const digits = value.toString().padStart(2, "0").split("");

  return (
    <div className="flex items-center gap-1 justify-center" aria-label={`${value} ${label}`}>
      <div className="flex items-center gap-[2px] sm:gap-1">
        {digits.map((digit, index) => (
          <time
            key={index}
            dateTime={value.toString()}
            className="w-1 sm:w-1 h-[33px] rounded-md flex items-center justify-center text-[#F5AB0D] text-sm sm:text-xs font-semibold"
            aria-hidden="true"
          >
            {digit}
          </time>
        ))}
      </div>
      <span className="text-[9px] sm:text-[10px] font-pop text-[#837E7E] mt-1">
        {label}
      </span>
    </div>
  );
};

const Colon = () => (
  <span
    className="text-[#F5AB0D] font-semibold text-sm sm:text-base px-1"
    aria-hidden="true"
  >
    :
  </span>
);
