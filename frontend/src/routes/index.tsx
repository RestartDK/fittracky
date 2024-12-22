import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch("http://localhost:50505/api");
        if (!response.ok) {
          throw new Error("Could not get this info");
        }

        const data = await response.json();
        console.log(data);

        setMessage(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, message);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <p>{message}</p>
    </div>
  );
}
