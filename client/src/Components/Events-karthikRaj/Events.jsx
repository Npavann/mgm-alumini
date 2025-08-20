import { Routes, Route } from "react-router-dom";
import EventCalendar from "./EventCalendar";
import EventDetail from "./EventDetail";

export default function Events() {
  return (
    <Routes>
      <Route index element={<EventCalendar />} />
      <Route path=":slug" element={<EventDetail />} />
    </Routes>
  );
}
