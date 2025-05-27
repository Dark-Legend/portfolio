import { Intro } from "./components/intro/Intro";

export default function Home() {
  return (
    <section className="flex justify-start items-center flex-col gap-5 p-2 md:p-5">
      <section className="w-11/12 sm:w-9/12 flex justify-start items-start flex-col gap-5">
        <Intro />
      </section>
    </section>
  );
}
