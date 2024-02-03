import Image from "next/image";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="bg-creme h-full min-h-[100vh]">
      <main className="text-ash bg-creme mx-2 py-2 border-x-poppy border-y-transparent border-[0.5px] h-full min-h-[100vh]">
        <Header />
      </main>
    </div>
  );
}
