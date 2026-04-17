import React from "react";
import Link from "next/link";
import { Loader } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/30">
      <nav className="fixed w-full z-50 glass-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Loader className="w-4 h-4 text-black" />
            </div>
            <span className="text-lg font-bold tracking-tighter">Gradian</span>
          </Link>
        </div>
      </nav>

      <section className="relative pt-48 pb-32 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-5xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-zinc-400 font-medium leading-relaxed">
          <p>
            Welcome to Gradian App. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information Collection</h2>
          <p>
            Gradian App securely connects to Infinite Campus portal as a third-party client. Your login credentials and academic data are processed <strong>100% on-device</strong> and are never transmitted to our servers or stored externally.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Data Usage</h2>
          <p>
            All data fetched from the Infinite Campus portal is used strictly to display your grades, schedule, and assignments within the app. We do not track, collect, or monetize any user-specific data.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:shlokmadhekar88@gmail.com" className="text-white underline underline-offset-4">shlokmadhekar88@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
