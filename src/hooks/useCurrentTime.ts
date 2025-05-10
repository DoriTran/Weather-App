import { useEffect, useState } from "react";
import moment from "moment";

export default function useCurrentTime(): string {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const now = moment().format("MMMM D, YYYY");
    setCurrentTime(now);
  }, []);

  return currentTime;
}
