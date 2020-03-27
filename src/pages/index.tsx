import * as React from "react";
import Link from "next/link";
import Router from "next/router";

export default function Index() {
  const [isLoading, setLoader] = React.useState(false);
  Router.events.on("routeChangeStart", url => {
    setLoader(true);
  });
  return (
    <div>
      go to <Link href="get">page</Link>...{isLoading ? "loading" : "loaded"}
    </div>
  );
}
