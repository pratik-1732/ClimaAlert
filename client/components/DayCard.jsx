import React from "react";

// const DayCard = ({ data, isLast }) => {
//   const {
//     date,
//     day: {
//       condition: { icon, text },
//       maxtemp_c,
//       mintemp_c,
//       daily_chance_of_rain,
//     },
//   } = data;

//   return (
//     <div
//       className={`mb-2 px-4 bg-transparent py-2 ${
//         !isLast ? "border-b-1 border-blue-300" : ""
//       } flex justify-between text-sm font-bold text-white`}
//     >
//       <div className="grid grid-cols-[150px_auto_auto] gap-6">
//         <h3>{date}</h3>
//         <img
//           className="h-10 w-10 border-1 border-blue-300 p-1 rounded-[50%]   "
//           src={icon}
//         ></img>
//         <h3>{text}</h3>
//       </div>
//       <div className="grid grid-cols-[40px_auto] gap-6">
//         <h4>{daily_chance_of_rain}%</h4>
//         <h3>
//           {mintemp_c}°c/{maxtemp_c}°c
//         </h3>
//       </div>
//     </div>
//   );
// };

const DayCard = ({ data, isLast }) => {
  const cardData = data;

  const {
    date,
    day: {
      condition: { icon, text },
      maxtemp_c,
      mintemp_c,
      daily_chance_of_rain,
    },
  } = cardData;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div className="group relative">
      <div
        className={`relative px-4 sm:px-6 py-4 sm:py-5 mb-2 sm:mb-3 rounded-2xl sm:rounded-3xl backdrop-blur-md bg-gradient-to-r from-white/15 via-white/10 to-white/5 border border-white/20 shadow-lg hover:shadow-2xl hover:from-white/20 hover:via-white/15 hover:to-white/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1 overflow-hidden ${
          !isLast ? "border-b border-white/30" : ""
        }`}
      >
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          {/* Left sec */}
          <div className="flex items-center gap-4 sm:gap-6 flex-1">
            {/* Date */}
            <div className="min-w-[100px] sm:min-w-[120px]">
              <h3 className="text-sm sm:text-base font-bold text-white/95 group-hover:text-white transition-colors duration-300">
                {formatDate(date)}
              </h3>
            </div>

            {/* Weather Icon */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-lg scale-150 group-hover:scale-175 transition-transform duration-500"></div>
              <img
                className="relative z-10 h-12 w-12 sm:h-14 sm:w-14 p-1 rounded-full border-2 border-white/30 group-hover:border-white/50 backdrop-blur-sm bg-white/10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 filter brightness-110"
                src={icon}
                alt={text}
              />
            </div>

            {/* Weather Condition */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white/90 group-hover:text-white truncate transition-colors duration-300">
                {text}
              </h3>
            </div>
          </div>

          {/* Right sec*/}
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            {/* Rain Chance */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <h4 className="text-xs sm:text-sm font-bold text-blue-100 group-hover:text-white transition-colors duration-300">
                {daily_chance_of_rain}%
              </h4>
            </div>

            {/* Temperature Range */}
            <div className="relative">
              <h3 className="text-sm sm:text-base font-bold text-white/95 group-hover:text-white transition-colors duration-300 px-4 py-2 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 backdrop-blur-sm group-hover:from-orange-500/30 group-hover:to-red-500/30">
                <span className="text-blue-200">{mintemp_c}°</span>
                <span className="text-white/60 mx-1">/</span>
                <span className="text-orange-200">{maxtemp_c}°</span>
              </h3>
            </div>
          </div>
        </div>

        {!isLast && (
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        )}
      </div>
    </div>
  );
};

export default DayCard;
