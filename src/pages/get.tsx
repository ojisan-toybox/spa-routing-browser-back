import * as React from "react";

export default function GetData() {
  const [data, setId] = React.useState<string | null>(null);

  return (
    <div>
      Get {data}{" "}
      <button
        onClick={() => {
          fetch(`http://localhost:3000/api/gen?data=${Math.random()}`).then(
            res =>
              res.json().then(d => {
                setId(d.data);
              })
          );
        }}
      >
        getId
      </button>
    </div>
  );
}
