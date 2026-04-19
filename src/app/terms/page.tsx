import React from "react";
import Link from "next/link";


export default function TermsOfService() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/30">
      <nav className="fixed w-full z-50 glass-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            </div>
            <span className="text-lg font-bold tracking-tighter">marks</span>
          </Link>
        </div>
      </nav>

      <section className="relative pt-48 pb-32 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-5xl font-bold tracking-tighter mb-8">Terms of Service</h1>
        <div className="space-y-6 text-zinc-400 font-medium leading-relaxed">
          <p>
            By using the Marks app, you agree to these Terms of Service. Please
            read them carefully.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using our application, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Description of Service</h2>
          <p>
            Marks app provides a third-party interface for accessing your Infinite
            Campus academic data. Marks is an independent app and is not
            affiliated with, endorsed, or sponsored by Infinite Campus.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. User Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login
            credentials. Marks app processes data locally on your device and
            assumes no liability for unauthorized access to your device.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Contact Information</h2>
          <p>
            For any questions or concerns regarding these terms, please contact us at: <a href="mailto:devin78988@gmail.com" className="text-white underline underline-offset-4">shlokmadhekar88@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
