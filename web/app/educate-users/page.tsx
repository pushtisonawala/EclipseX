
"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Recycle, Award, Users, FileCheck, Globe, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EducateUsersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col items-center justify-center">
      <div className="w-full flex justify-start mb-6 px-6">
        <Link href="/" className="no-underline">
          <Button
            variant="outline"
            className="border-teal-500/40 text-teal-400 hover:bg-teal-500/10 px-6 py-3 text-base rounded-xl shadow backdrop-blur-sm flex items-center gap-2"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="w-full flex justify-start mb-6">
        <Link href="/">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600 transition-all">← Back to Home</button>
        </Link>
      </div>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <main className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-8 text-center text-teal-400 drop-shadow-lg">
          Why Secure Data Wiping Matters
        </motion.h1>
        {/* Icon Row */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex justify-center gap-8 mb-10">
          <Shield className="w-10 h-10 text-blue-400" />
          <Recycle className="w-10 h-10 text-green-400" />
          <Award className="w-10 h-10 text-yellow-400" />
          <Users className="w-10 h-10 text-cyan-400" />
        </motion.div>
        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 w-full max-w-5xl">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Lock className="text-teal-400" /> Security Risks</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Deleted files can still be recovered with simple tools.</li>
              <li>Data leaks can occur when recycling or selling old devices.</li>
              <li>It's crucial to wipe not just files, but the OS, logs, and hidden partitions.</li>
            </ul>
          </motion.section>
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-slate-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Recycle className="text-green-400" /> Circular Economy</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Safe IT asset recycling supports the environment.</li>
              <li>Reduces e-waste and landfill impact.</li>
              <li>Refurbished devices are secure and reusable.</li>
            </ul>
          </motion.section>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-12 w-full max-w-5xl">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-slate-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Shield className="text-blue-400" /> How the Tool Works</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Boots from a Live ISO, bypassing the installed OS.</li>
              <li>Direct access to all storage for full wiping.</li>
              <li>Works even if the system is corrupted or inaccessible.</li>
              <li>Generates a tamper-proof data wipe certificate for audit and trust.</li>
            </ul>
          </motion.section>
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-slate-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Users className="text-cyan-400" /> Ease of Use</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Plug-and-use with a friendly UI.</li>
              <li>Cross-platform: Windows, Linux, Android.</li>
              <li>Step-by-step guided wiping process with confirmations and safety checks.</li>
            </ul>
          </motion.section>
        </div>
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/80 rounded-2xl shadow-lg p-8 mb-12 w-full max-w-3xl flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Award className="text-yellow-400" /> Benefits</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Builds user trust via verified certificates.</li>
            <li>Supports circular economy and safe recycling.</li>
            <li>Environmental, economic, and social benefits.</li>
          </ul>
        </motion.section>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-12 w-full max-w-2xl">
          <div className="bg-gradient-to-r from-teal-700/80 to-cyan-700/80 rounded-xl p-6 flex items-center gap-4 shadow-lg">
            <BookOpen className="w-10 h-10 text-teal-400" />
            <div>
              <h3 className="text-xl font-bold mb-2">Did You Know?</h3>
              <p className="text-lg">Deleted files aren’t really gone until securely overwritten!</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex justify-center w-full">
          <Link href="/business-model">
            <Button className="bg-teal-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:bg-teal-600 transition-all">
              Learn how to protect your data →
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
