"use client";

import { useState } from "react";

// Helper: Generate dynamic weeks for any month/year
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
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      week[i] = day++;
    }
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
  const [month, setMonth] = useState(10); // November (0-indexed)

  const events = {
    "2025-10-02": "Daylight Saving Time ends",
    "2025-10-04": "Election Day",
    "2025-10-11": "Veterans Day",
    "2025-10-27": "Thanksgiving Day",
    "2025-10-28": "Black Friday",
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
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-50 text-text-primary">
      {/* Top Heading */}
      <h1 className="text-3xl font-semibold text-primary mb-4 shadow-text-light">
        Calendar
      </h1>

      {/* Month + Year Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-text-primary">
          {monthNames[month]} {year}
        </h2>

        <select
          className="border border-border-light rounded text-sm px-3 py-2 bg-bg-card text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
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

      {/* Calendar Table */}
      <div className="overflow-x-auto border border-border-light rounded-md shadow-card-light bg-bg-card">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr className="bg-bg-light text-text-secondary">
              {[
                "SUNDAY",
                "MONDAY",
                "TUESDAY",
                "WEDNESDAY",
                "THURSDAY",
                "FRIDAY",
                "SATURDAY",
              ].map((day) => (
                <th
                  key={day}
                  className="text-left py-2 px-3 border border-border-light font-semibold uppercase"
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
                  const dateKey = `${year}-${month}-${day < 10 ? "0" + day : day}`;
                  const event = events[dateKey];
                  const isToday = year === 2025 && month === 10 && day === 12;

                  return (
                    <td
                      key={j}
                      className={`align-top h-28 w-[14.28%] border border-border-light p-2 transition ${
                        isToday
                          ? "bg-primary text-white"
                          : "bg-bg-light hover:bg-bg-hover"
                      }`}
                    >
                      {day && (
                        <>
                          <div
                            className={`text-sm font-semibold mb-1 ${
                              isToday ? "text-white" : "text-text-primary"
                            }`}
                          >
                            {day}
                          </div>
                          {event && (
                            <div className="text-xs leading-tight">
                              <p
                                className={`font-bold ${
                                  isToday ? "text-white" : "text-text-secondary"
                                }`}
                              >
                                ALL DAY
                              </p>
                              <p
                                className={`${
                                  isToday ? "text-white" : "text-text-primary"
                                }`}
                              >
                                {event}
                              </p>
                            </div>
                          )}
                        </>
                      )}
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
