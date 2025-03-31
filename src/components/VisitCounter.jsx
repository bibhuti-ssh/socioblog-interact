import { useEffect, useState } from "react";
import { getCount, incrementCounter } from "../services/counter";

export default function VisitCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function updateVisitCount() {
      await incrementCounter(); // Ensure Firestore updates first
      const updatedCount = await getCount(); // Fetch updated count
      setCount(updatedCount);
    }

    updateVisitCount();
  }, []);

  return <div>Total Visits: {count.toLocaleString()}</div>;
}
