import * as React from "react";
import Router, { useRouter } from "next/router";

export default function GetData() {
  const router = useRouter();
  const [data, setId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof router.query.data !== "string") return;
    setId(router.query.data);
    return () => window.onpopstate;
  });

  React.useEffect(() => {
    alert(`new URL => ${data}`);
  }, [data]);

  return (
    <div>
      Get {data}
      <button
        onClick={() => {
          const data = Math.random();
          router.push({
            pathname: "/get",
            query: { data }
          });
          fetch(`http://localhost:3000/api/gen?data=${data}`).then(res =>
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
