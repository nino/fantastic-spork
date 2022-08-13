import type { NextPage } from "next";
import classNames from "classnames";

const Home: NextPage = () => {
  return (
    <main className="container px-4 mx-auto">
      <h1 className="text-center font-bold text-2xl m-4">Hello</h1>
      <p className="py-2">This is some text.</p>
      <p
        className={classNames("py-2", {
          "text-red-600": process.env.NEXT_PUBLIC_RED,
        })}
      >
        Here is some more text.
      </p>
    </main>
  );
};

export default Home;
