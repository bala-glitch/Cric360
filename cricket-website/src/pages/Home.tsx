import React, { useEffect, useState } from "react";

type Match = {
  id: string;
  teams: string;
  score: string;
  status: string;
};

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMatches([
        {
          id: "1",
          teams: "India vs Australia",
          score: "250/3 (45.2)",
          status: "India needs 50 runs from 28 balls"
        },
        {
          id: "2",
          teams: "England vs Pakistan",
          score: "300/8 (50)",
          status: "Match Ended: England won by 10 runs"
        }
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Live Scores</h2>
      {matches.map((match) => (
        <div key={match.id} className="card">
          <h3>{match.teams}</h3>
          <p>{match.score}</p>
          <small>{match.status}</small>
        </div>
      ))}
    </div>
  );
}
