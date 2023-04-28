import Head from "next/head";
import MemoryGame from "../components/MemoryGame";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Memory Game</title>
        <meta
          name="description"
          content="Memory game built with Next.js, React, Tailwind CSS, and Framer Motion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 p-6 rounded-md shadow-lg">
        <h1 className="text-3xl         font-semibold mb-8">Memory Game</h1>
        <MemoryGame images={images} />
      </main>
    </div>
  );
}
