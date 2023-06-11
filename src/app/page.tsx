import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import { Ephesis } from "next/font/google";

const inter = Ephesis({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <>
      <video
        src="/george.mp4"
        autoPlay
        muted
        loop
        className="brightness-50 h-1/2 w-full object-cover"
      />
      <span
        className={[
          inter.className,
          "text-6xl absolute w-full top-0 h-1/2 justify-center items-center align-middle flex text-gray-900 dark:text-white",
        ].join(" ")}
      >
        The Himalayan Spirit
      </span>
      <NavBar />
      <main className="w-full h-screen">
        <Intro /> 
      </main>
      <Footer />
    </>
  );
}
