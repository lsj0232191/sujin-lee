import Navbar from "@/components/Narvar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden mx-auto sm:px10 px-5">
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
