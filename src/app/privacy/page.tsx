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
            <span className="text-lg font-bold tracking-tighter">Marks</span>
          </Link>
        </div>
      </nav>

      <section className="relative pt-48 pb-32 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-5xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-zinc-400 font-medium leading-relaxed">
          <p>
            Abstract: We do not store your academic data whatsoever - requests are
            made directly to Infinite Campus. We store minimal encrypted session
            data locally on your device, with everything cleared when you log out
            or uninstall.
          </p>
          <p>
            This Privacy Policy applies to the marks app ("Application") developed
            by Devin Liu ("Service Provider"). The Application is provided "AS
            IS".
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Information Collection and Use
          </h2>
          <p>
            The Application does not collect and store any information from your
            account. Requests are made directly to Infinite Campus.
          </p>

          <h3 className="text-xl font-bold text-white mt-10 mb-4">
            Data You Provide
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>User identifiers (if applicable)</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-10 mb-4">
            Automatically Collected Data
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information (e.g. device type, operating system)</li>
            <li>Basic usage data (e.g. app usage, pages visited)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            How Data Is Used
          </h2>
          <p>Your data is used solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Authenticate your session with your school&apos;s Infinite Campus
              system
            </li>
            <li>
              Retrieve and display your academic information (grades, schedule,
              assignments)
            </li>
            <li>Maintain app functionality and reliability</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Data Storage
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Authentication data (e.g. session tokens) are encrypted and stored
              locally on your device
            </li>
            <li>
              The Service Provider does <strong>not</strong> maintain a central
              database of your personal academic data
            </li>
            <li>
              The Service Provider <strong>does</strong> store your Infinite
              Campus unique identifier (UUID). On its own, this cannot be used to
              access your personal information via Infinite Campus.
            </li>
            <li>
              Data is fetched directly from your school&apos;s Infinite Campus
              system
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Third-Party Services
          </h2>
          <p>The Application interacts with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Your school&apos;s Infinite Campus system (to retrieve academic
              data)
            </li>
          </ul>
          <p>The Application does <strong>not</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sell your data</li>
            <li>Share your personal data with third parties for marketing</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tracking</h2>
          <p>
            The Application does <strong>not</strong> track you across apps or
            websites owned by other companies.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Data Linking
          </h2>
          <p>Any data accessed is:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Used only within the app</li>
            <li>Not linked to third-party data sources</li>
            <li>Not used for profiling or advertising</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Data Retention
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data stored locally remains until you log out or uninstall the app</li>
            <li>
              The Service Provider does not retain your personal academic data on
              external servers
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            The Application is not intended for children under 13. The Service
            Provider does not knowingly collect personal data from children under
            13.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Security</h2>
          <p>Reasonable safeguards are used to protect your data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure handling of authentication sessions</li>
            <li>Local storage protections where applicable</li>
          </ul>
          <p>
            However, no method of transmission or storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Changes to This Policy
          </h2>
          <p>
            This Privacy Policy may be updated periodically. Continued use of the
            Application constitutes acceptance of any changes.
          </p>
          <p>Effective date: 2026-04-08</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Contact</h2>
          <p>If you have questions about this Privacy Policy, contact:</p>
          <p>
            <a
              href="mailto:devin78988@gmail.com"
              className="text-white underline underline-offset-4"
            >
              devin78988@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
