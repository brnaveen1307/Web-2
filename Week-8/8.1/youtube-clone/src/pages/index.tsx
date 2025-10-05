import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <VideoCard 
        image={"photo.jpg"}
        thumbImage={"thumb.jpg"}
        title={"Idli Kottu | Official Trailer (Telugu) "} 
        author={"Dhanush"}
        views = {"46M views"} 
        timestamp = {"2 weeks ago"}>
      </VideoCard>
    </div> 
  );
}
