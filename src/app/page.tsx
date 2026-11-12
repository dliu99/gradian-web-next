import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/30">

      <nav className="fixed w-full z-50 glass-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tighter">marks</span>
          </div>
          {/*<div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/trymarksapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>*/}
        </div>
      </nav>

      {/* Hero Section - High Contrast Brutalist */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-40 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.95] mb-8">
          Marks helps you take control of your grades
        </h1>

        <div className="mt-12 flex flex-col items-start gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/marks-for-infinite-campus/id6761805541"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/appstorebadge.svg"
                alt="Download on the App Store"
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </a>
            <a
              href="https://groups.google.com/g/marks-beta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/googleplaybadge.svg"
                alt="Get it on Google Play"
                width={239}
                height={71}
                className="h-16 w-auto"
              />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dliu99/marks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold tracking-tight underline underline-offset-4 text-zinc-300 hover:text-white transition-colors"
            >
              [open github]
            </a>
            <a
              href="https://archive.is/LrdOa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold tracking-tight underline underline-offset-4 text-zinc-300 hover:text-white transition-colors"
            >
              [archive]
            </a>
          </div>
        </div>
      </section>

      <section
        id="learn-more"
        className="py-24 border-t border-white/10 relative overflow-hidden bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              About us
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-2xl">
              Marks is the best way to use Infinite Campus. View grades,
              assignments, and other important information in a faster, cleaner
              interface designed for students.
            </p>

          </div>

          <div className="flex-1 w-full max-w-md flex justify-center">
            <Image
              src="/simulator-screenshot.png"
              alt="Marks App Mockup"
              width={400}
              height={800}
              className="rounded-[3rem] shadow-2xl border border-white/20 object-contain max-h-[650px] w-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section id="credits" className="border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Team</h2>
          <p className="text-zinc-400 text-lg font-medium">
            Made with ❤️ by {" "}
            <a
              href="https://devinliu.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline tracking-tighter hover:text-zinc-300 transition-colors"
            >
              Devin Liu
            </a>
          </p>
          <p className="mt-4 text-zinc-400 text-lg font-medium">
            Bugs, social media: Vachan Bhogi, {" "}
            <a
              href="https://niharm.me"
              target="_blank"
              rel="noopener noreferrer"
              className="underline tracking-tighter hover:text-zinc-300 transition-colors"
            >
              Nihar Manchikalapudi
            </a>
          </p>
          <p className="mt-4 text-zinc-400 text-lg font-medium">
            Marks web: {" "}
            <a
              href="https://shlok.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline tracking-tighter hover:text-zinc-300 transition-colors"
            >
              Shlok Madhekar
            </a>
          </p>
          <p className="mt-4 text-zinc-400 text-lg font-medium">
            Thanks to {" "}
            <a
              href="https://www.bessy.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline tracking-tighter hover:text-zinc-300 transition-colors"
            >
              Bessy
            </a>
            , the original Infinite Campus app. It was shut down in early 2026, which prompted me to build Marks.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-tighter">marks</span>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500 font-medium tracking-tight">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:devin78988@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-zinc-600 font-bold">
            &copy; {new Date().getFullYear()} Marks App.
          </div>
        </div>
      </footer>
    </main>
  );
}
