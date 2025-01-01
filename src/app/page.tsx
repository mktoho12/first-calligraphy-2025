import Image from "next/image"
import Calendar from "./calendar"

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-full ">
        <h1 className="text-2xl font-bold text-center mb-8">
          2025年カレンダー
        </h1>
        <main className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <Calendar key={i} year={2025} month={i} />
          ))}
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  )
}
