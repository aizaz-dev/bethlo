"use client";

import { useState } from "react";

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let week = new Array(7).fill("");

  for (let i = firstDay; i < 7 && i - firstDay < daysInMonth; i++) {
    week[i] = i - firstDay + 1;
  }
  weeks.push(week);

  let day = 7 - firstDay + 1;
  while (day <= daysInMonth) {
    week = new Array(7).fill("");
    for (let i = 0; i < 7 && day <= daysInMonth; i++) week[i] = day++;
    weeks.push(week);
  }

  while (weeks.length < 6) weeks.push(new Array(7).fill(""));
  return weeks;
}

export default function CalendarPage() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(10);

  const events = {
    "2025-11-02": { title: "Daylight Saving Time ends", type: "Observance", description: "Clocks are set back one hour." },
    "2025-11-04": { title: "Election Day", type: "Observance", description: "General elections across the United States." },
    "2025-11-11": { title: "Veterans Day", type: "Federal holiday", description: "Honors military veterans." },
    "2025-11-27": { title: "Thanksgiving Day", type: "Federal holiday", description: "Family gatherings and gratitude." },
    "2025-11-28": { title: "Black Friday", type: "Observance", description: "Retail sales following Thanksgiving." },
  };

  const calendar = generateCalendar(year, month);

  const handleMonthChange = (e) => {
    const [m, y] = e.target.value.split("-");
    setMonth(parseInt(m));
    setYear(parseInt(y));
  };

  const monthOptions = [];
  for (let y = 2024; y <= 2026; y++) {
    for (let m = 0; m < 12; m++) {
      monthOptions.push({ label: `${monthNames[m]} ${y}`, value: `${m}-${y}` });
    }
  }

  return (
    <main className="max-w-7xl pt-16 md:pt-55 mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 text-calendar-main-text">
      <h1 className="text-2xl sm:text-3xl font-light mb-6 md:mb-8 text-text-primary">
        Calendar
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-lg sm:text-xl font-medium text-text-primary">
          {monthNames[month]} {year}
        </h2>

        <select
          className="border border-select-border rounded px-3 py-2 text-sm bg-select-bg w-full sm:w-auto"
          value={`${month}-${year}`}
          onChange={handleMonthChange}
        >
          {monthOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto bg-bg-card border border-calendar-border rounded-md">
        <table className="w-full table-fixed text-xs sm:text-[13px] border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-calendar-header text-text-primary">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <th 
                  key={day} 
                  className="py-2 px-1 sm:px-3 text-center border border-calendar-border text-[11px] sm:text-[12px] font-semibold uppercase"
                  style={{ width: `${100 / 7}%` }}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {calendar.map((week, i) => (
              <tr key={i}>
                {week.map((day, j) => {
                  const dateKey = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
                  const event = events[dateKey];
                  const isHighlight = dateKey === "2025-11-14";

                  if (!day) {
                    return (
                      <td
                        key={j}
                        className="h-16 sm:h-20 md:h-24 align-top border border-calendar-border p-0 bg-calendar-bg"
                      />
                    );
                  }

                  return (
                    <td
                      key={j}
                      className="h-16 sm:h-20 md:h-24 align-top border border-calendar-border p-0 bg-bg-card"
                      style={{ width: `${100 / 7}%` }}
                    >
                      <div className="h-full flex flex-col">
                        <div className="p-2">
                          <span className="text-xs sm:text-sm font-semibold text-date-text">
                            {day}
                          </span>
                        </div>

                        {event && (
                          <div className="flex-1 p-1 sm:p-2">
                            <div className="relative group text-xs leading-tight">
                              <p className="font-bold text-event-text">ALL DAY</p>
                              <p className="text-date-text truncate">{event.title}</p>

                              <div className="absolute left-2 top-6 z-20 w-64 sm:w-72 bg-bg-card border border-calendar-border rounded-md shadow-card-light dark:shadow-card-dark p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <p className="text-text-primary font-semibold text-sm">{event.title}</p>
                                <p className="text-text-secondary text-xs mt-1">{event.type || "Event"}</p>
                                {event.description && (
                                  <p className="text-text-muted text-xs mt-1">{event.description}</p>
                                )}
                                <p className="text-text-muted text-[11px] mt-2">All day</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
