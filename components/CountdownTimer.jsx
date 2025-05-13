import Countdown from "react-countdown";

export default function CountdownTimer({ deadline }) {
  return (
    <Countdown
      date={new Date(deadline)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span className="text-red-600 font-semibold">Expired</span>;
        }

        return (
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <TimeGroup label="Days" value={days} />
              <Colon />
              <TimeGroup label="Hours" value={hours} />
              <Colon />
              <TimeGroup label="Minute" value={minutes} />
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
    <div className="flex flex-col items-center">
      <div className="flex gap-[2px] sm:gap-1">
        {digits.map((digit, index) => (
          <div
            key={index}
            className="w-5 h-6 sm:w-6 sm:h-8 border border-green-500 rounded-md flex items-center justify-center text-[#F5AB0D] text-sm sm:text-lg font-semibold">
            {digit}
          </div>
        ))}
      </div>
      <span className="text-[9px] sm:text-[10px] font-pop text-[#837E7E] mt-1">
        {label}
      </span>
    </div>
  );
};

const Colon = () => (
  <div className="text-[#F5AB0D] font-semibold text-lg sm:text-xl px-1">:</div>
);
