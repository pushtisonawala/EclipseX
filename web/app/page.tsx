"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Usb,
  FileCheck,
  Lock,
  Recycle,
  Award,
  ChevronRight,
  Download,
  BookOpen,
  CheckCircle2,
  Zap,
  Globe,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/50 border-b border-teal-500/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Shield className="w-8 h-8 text-teal-400" />
            <span className="text-xl font-bold text-white">SecureWipe</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6"
          >
            <a href="#features" className="text-slate-300 hover:text-teal-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-teal-400 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-slate-300 hover:text-teal-400 transition-colors">
              About
            </a>
          </motion.div>
        </nav>
      </header>

      <section className="relative container mx-auto px-6 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 backdrop-blur-sm"
          >
            <span className="text-teal-400 text-sm font-medium">NIST SP 800-88 Compliant</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-balance">
            Wipe Data.
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Restore Trust.
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            A bootable USB tool for secure, NIST-compliant data erasure. Protect sensitive information with
            military-grade wiping technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/download" className="no-underline">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download ISO
              </Button>
            </Link>
            {/* New Buttons for Business-Model and Educate Users */}
            <Link href="/business-model" className="no-underline">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                <Award className="w-5 h-5 mr-2" />
                Business Model
              </Button>
            </Link>
            <Link href="/educate-users" className="no-underline">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Educate Users
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating USB Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/30 blur-3xl rounded-full" />
              <Usb className="w-32 h-32 text-teal-400 relative z-10" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center text-balance">
            Why Secure Data Wiping Matters
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed text-center mb-12 text-pretty">
            To protect sensitive information—especially for journalists, data-sensitive companies, and government
            agencies—it is vital to securely wipe all data, including the operating system and its logs, so nothing can
            be recovered.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Prevent Data Breaches", desc: "Stop unauthorized recovery of sensitive files" },
              { icon: Users, title: "Build Trust", desc: "Verifiable certificates for compliance" },
              { icon: Recycle, title: "Enable Recycling", desc: "Safe IT asset disposal and reuse" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/40 transition-all hover:shadow-lg hover:shadow-teal-500/10">
                  <item.icon className="w-12 h-12 text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About SecureWipe</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Professional-grade data destruction software designed for secure IT asset disposal and recycling.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8"
            >
              <Shield className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Ready</h3>
              <p className="text-slate-400 leading-relaxed">
                Built for organizations that require certified data destruction with comprehensive
                audit trails and compliance reporting for regulatory requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8"
            >
              <Lock className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Military-Grade Security</h3>
              <p className="text-slate-400 leading-relaxed">
                Implements advanced cryptographic algorithms and multiple overwrite patterns
                to ensure data is completely and irreversibly destroyed.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-linear-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Why Choose SecureWipe?</h3>
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
              SecureWipe provides a comprehensive solution for organizations looking to safely dispose
              of IT assets while maintaining the highest security standards. Our bootable USB approach
              ensures complete system independence, preventing any data recovery attempts and meeting
              international compliance standards including NIST SP 800-88.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center text-balance">How It Works</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: "01",
                icon: Usb,
                title: "Create Bootable USB",
                desc: "Download the ISO and flash it to a USB drive. No installation required—just plug and boot.",
              },
              {
                step: "02",
                icon: Zap,
                title: "Boot & Auto-Detect Storage",
                desc: "Boot from the USB instead of your OS. The tool bypasses the active system and detects all storage devices automatically.",
              },
              {
                step: "03",
                icon: Shield,
                title: "Securely Wipe Data",
                desc: "Choose full device or selective partition wipe. Uses NIST-compliant algorithms to ensure data is irrecoverable.",
              },
              {
                step: "04",
                icon: FileCheck,
                title: "Generate Certificate",
                desc: "Receive a tamper-proof certificate as proof of erasure for audits and compliance verification.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <Card className="p-8 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/40 transition-all hover:shadow-lg hover:shadow-teal-500/10 group">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full group-hover:bg-teal-500/30 transition-all" />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center">
                          <item.icon className="w-10 h-10 text-teal-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-teal-400/50 text-sm font-mono mb-2">STEP {item.step}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-pretty">{item.desc}</p>
                    </div>
                  </div>
                </Card>
                {i < 3 && (
                  <div className="hidden md:block absolute left-10 top-full w-0.5 h-8 bg-gradient-to-b from-teal-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center text-balance">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Auto Storage Detection",
                desc: "Automatically detects HDDs, SSDs, NVMe, and eMMC devices",
              },
              {
                icon: Shield,
                title: "Full & Selective Wipe",
                desc: "Choose between complete device or partition-only erasure",
              },
              {
                icon: Award,
                title: "NIST-Compliant",
                desc: "Follows NIST SP 800-88 standards for secure data destruction",
              },
              {
                icon: FileCheck,
                title: "Tamper-Proof Certificates",
                desc: "Generate verifiable proof of erasure for audits",
              },
              { icon: Globe, title: "Cross-Platform", desc: "Works on Windows, Linux, and any UEFI/BIOS system" },
              {
                icon: Lock,
                title: "Offline Operation",
                desc: "No internet required—complete control over the process",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/40 transition-all hover:shadow-lg hover:shadow-teal-500/10 h-full group">
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-pretty">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why It's Useful Section */}
      <section className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center text-balance">
            Impact & Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/30 backdrop-blur-sm">
              <Recycle className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Environmental Benefits</h3>
              <p className="text-slate-300 leading-relaxed text-pretty">
                Promotes a circular economy by ensuring replenished items remain safe and reliable for continued use.
                Reduces landfills and pollution caused by discarding devices.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-teal-500/30 backdrop-blur-sm">
              <Award className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Social Benefits</h3>
              <p className="text-slate-300 leading-relaxed text-pretty">
                Provides trust via certificates, ensuring confidence that data will be irrecoverable. Corporations and
                governments benefit from additional revenue sources.
              </p>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Card className="inline-block p-8 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <CheckCircle2 className="w-16 h-16 text-teal-400 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white mb-2">Trusted by Organizations Worldwide</h4>
                  <p className="text-slate-400 text-pretty">
                    Used by journalists, corporations, government agencies, and IT recyclers for secure data
                    destruction.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Animation Section */}
      <section className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />

            {/* Animated progress bar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Shield className="w-24 h-24 text-teal-400 mx-auto" />
                </motion.div>
                <div className="space-y-2">
                  <p className="text-white text-xl font-semibold">Secure Wiping in Progress</p>
                  <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto">
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </div>
                  <p className="text-slate-400 text-sm">NIST SP 800-88 Algorithm Active</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Footer */}
      <footer className="relative border-t border-teal-500/20 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-teal-400" />
              <span className="text-white font-semibold">SecureWipe</span>
            </div>

            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Support
              </a>
            </div>

            <p className="text-sm text-slate-500">© 2025 NULLBYTERS. All rights reserved.</p>
          </div>

          <div className="mt-8 pt-8 border-t border-teal-500/10 text-center">
            <p className="text-xs text-slate-500">NIST SP 800-88 Compliant | Bootable USB Solution | Open Source</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
