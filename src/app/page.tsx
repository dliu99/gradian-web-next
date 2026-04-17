import {
  Loader,
  RefreshCw,
  Target,
  CalendarClock,
  BarChart3,
  Download,
  Bell,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/30">
      {/* Navigation - Ultra Minimal Glass */}
      <nav className="fixed w-full z-50 glass-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Loader className="w-4 h-4 text-black animate-spin-slow" />
            </div>
            <span className="text-lg font-bold tracking-tighter">Gradian</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How it Works
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/gradian.tech/"
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
            <button
              disabled
              className="px-5 py-2 rounded-full bg-white/10 text-white/50 text-sm font-bold cursor-not-allowed"
            >
              Coming soon
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - High Contrast Brutalist */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-40 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.95] mb-8">
          Bessy's broken.
          <br />
          We fixed it.
        </h1>

        <div className="mt-12">
          <a
            href="#learn-more"
            className="text-4xl md:text-5xl font-bold tracking-tighter underline decoration-white/30 hover:decoration-white underline-offset-8 transition-all"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* App Mockup Section - Monochrome Glass */}
      <section
        id="learn-more"
        className="py-24 border-t border-white/10 relative overflow-hidden bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              A Native iOS <br />
              Experience.
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-md">
              No web wrappers. Pure SwiftUI. Sync your Infinite Campus grades
              instantly with zero lag.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md flex justify-center">
            <Image
              src="/simulator-screenshot.png"
              alt="Gradian App Mockup"
              width={400}
              height={800}
              className="rounded-[3rem] shadow-2xl border border-white/20 object-contain max-h-[650px] w-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Bento Grid - Monochrome Glass */}
      <section
        id="features"
        className="py-32 relative border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            <div className="md:col-span-2 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8">
                  <RefreshCw className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-4xl font-bold mb-4 tracking-tighter">
                  Native Sync
                </h3>
                <p className="text-zinc-400 text-lg font-medium max-w-md">
                  Securely connects to Infinite Campus. Background refreshes
                  keep your dashboard completely up to date.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-10 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tighter">
                  Calculator
                </h3>
                <p className="text-zinc-400 font-medium">
                  Know exactly what score you need on your finals.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-10 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8">
                  <CalendarClock className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tighter">
                  Schedule
                </h3>
                <p className="text-zinc-400 font-medium">
                  Responsive timeline tracking your periods and bells.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8">
                  <ShieldCheck className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-4xl font-bold mb-4 tracking-tighter">
                  100% On-Device
                </h3>
                <p className="text-zinc-400 text-lg font-medium max-w-md">
                  Your credentials and data never leave your phone. Everything
                  is processed natively on-device for maximum privacy and speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 border-t border-white/10 bg-zinc-950 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
            Get Gradian.
          </h2>
          <button
            disabled
            className="inline-flex px-12 py-6 rounded-full bg-white/10 text-white/50 font-bold cursor-not-allowed items-center justify-center text-xl"
          >
            Coming soon
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Loader className="w-3 h-3 text-black" />
            </div>
            <span className="font-bold tracking-tighter">Gradian</span>
          </div>
          <div className="text-sm text-zinc-600 font-bold">
            &copy; {new Date().getFullYear()} Gradian App.
          </div>
        </div>
      </footer>
    </main>
  );
}
