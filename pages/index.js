import NavPanel from "@/components/nav-panel/NavPanel";
import { Inter } from "next/font/google";
import MainPage from "@/components/content/MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        width: "1920p",
        justifyContent: "space-between",
      }}
    >
      <NavPanel />
      <MainPage />
    </div>
  );
}
