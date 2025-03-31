import { useEffect, useState } from "react";
import { getCount, incrementCounter } from "../services/counter";

export default function VisitCounter() {
  const [count, setCount] = useState(null); 

  useEffect(() => {
    async function updateVisitCount() {
      await incrementCounter(); // Ensure Firestore updates first
      const updatedCount = await getCount(); // Fetch updated count
      setCount(updatedCount);
    }

    updateVisitCount();
  }, []);

  return <div>Total Visits: {count === null ? "Loading..." : count.toLocaleString()}</div>;
}
