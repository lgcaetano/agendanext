import { formatDate, formatedMinutes, withinWeek, withinYear } from "../utils";

const classes = {
    backgrounds: {
        expired: "bg-red-500",
        close: "bg-yellow-500"
    },
    textColors: {
        expired: "text-red-500",
        close: "text-yellow-500"
    },
    textContents: {
        expired: "Expired",
        close: "Date is arriving"
    }
}

export default function ReminderMarker({ date }){
    const hasPassed = date < new Date()

    const isWithinWeek = withinWeek(date)

    const type = hasPassed
      ? "expired"
      : isWithinWeek
      ? "close"
      : "";

    return (
      <div className="flex items-center gap-2 ml-auto mr-4">
        <div
          className={`h-3 w-3 rounded-full ${
            type ? classes.backgrounds[type] : ""
          }`}
        />
        <div className={`font-medium ${
            type ? classes.textColors[type] : ""
          }`}>
            {`${type ? classes.textContents[type] : ""}`}      
        </div>
      </div>
    );
}