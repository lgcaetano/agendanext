import { useContext, useMemo } from "react"
import { UserContext } from "../contexts/UserContext"
import ReminderCard from "./ReminderCard"

export default function Board({ showExpired }){

    const { reminders } = useContext(UserContext)

    const expiredReminders = useMemo(() => {
      const currentTime = new Date();
      const selectedReminders = reminders?.filter(({ date }) => {
        const parsedDate = new Date(date);
        return parsedDate < currentTime;
      });
      selectedReminders?.sort((a, b) => a.date - b.date);
      return selectedReminders?.map((reminder) => {
        return (
          <ReminderCard
            date={reminder.date}
            label={reminder.label}
            id={reminder._id}
            key={reminder._id}
          />
        );
      });
    }, [reminders]);

    const scheduledReminders = useMemo(() => {
      const currentTime = new Date();
      const selectedReminders = reminders?.filter(({ date }) => {
        const parsedDate = new Date(date);
        return parsedDate >= currentTime;
      });
      selectedReminders?.sort((a, b) => a.date - b.date);
      return selectedReminders?.map((reminder) => {
        return (
          <ReminderCard
            date={reminder.date}
            label={reminder.label}
            id={reminder._id}
            key={reminder._id}
          />
        );
      });
    }, [reminders]);

    return (
        <div className="flex flex-col bg-blue-200 w-full m-4 rounded-3xl min-h-fit
        shadow-2xl border-4 border-blue-900 gap-1 overflow-overlay">
            {
                showExpired 
                ?
                expiredReminders
                :
                scheduledReminders 
            }
        </div>
    )
}