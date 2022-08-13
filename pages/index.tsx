import type { NextPage } from "next";
import classNames from "classnames";
import { useFlags } from "@happykit/flags/client";

const Home: NextPage = () => {
  const { flags } = useFlags();

  return (
    <main className="container px-4 mx-auto">
      <h1 className="text-center font-bold text-2xl m-4">Hello</h1>
      <p className="py-2">This is some text.</p>
      <p
        className={classNames("py-2", {
          "text-red-600": flags?.red_text,
        })}
      >
        Here is some more text.
      </p>
    </main>
  );
};

export default Home;
