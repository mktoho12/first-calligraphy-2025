import * as holiday_jp from "@holiday-jp/holiday_jp"
import clsx from "clsx"
import { getDay, lastDayOfMonth } from "date-fns"

export default function Calendar({
  year,
  month,
}: Readonly<{ year: number; month: number }>) {
  const firstDay = new Date(year, month, 1)
  const lastDay = lastDayOfMonth(firstDay)
  const days = Array.from(
    { length: lastDay.getDate() },
    (_, i) => new Date(year, month, i + 1)
  )
  const space = getDay(firstDay)
  const isSunday = (date: Date) => getDay(date) === 0
  const isSaturday = (date: Date) => getDay(date) === 6

  return (
    <div>
      <h2 className="font-bold text-center">{month + 1}月</h2>
      <div className="grid grid-cols-7 gap-1 font-[family-name:var(--font-geist-mono)] p-4">
        {Array.from({ length: space }).map((_, i) => (
          <div key={i}></div>
        ))}
        {days.map((day) => (
          <div
            key={day.getDate()}
            className={clsx("text-right", {
              "text-red-500": isSunday(day) || holiday_jp.isHoliday(day),
              "text-blue-500": isSaturday(day),
            })}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  )
}
