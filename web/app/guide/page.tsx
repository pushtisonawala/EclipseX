"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, BookOpen, Usb, Shield, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12">
      <div className="container mx-auto px-6">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-teal-400" />
            <h1 className="text-2xl font-bold text-white">SecureWipe — User Guide</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-teal-400">
                Back Home
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </header>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card className="p-8 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm mb-8">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-teal-400" />
              Quick Start Guide
            </h2>
            <ol className="list-decimal list-inside text-slate-300 space-y-3">
              <li>
                Download the latest ISO from the home page and verify the checksum.
              </li>
              <li>
                Flash the ISO to a USB drive using your preferred tool (Rufus, balenaEtcher, dd).
              </li>
              <li>
                Boot the target machine from the USB (UEFI/BIOS) and choose SecureWipe from the boot menu.
              </li>
              <li>
                Select devices or partitions to wipe, choose the desired NIST-compliant algorithm, and start the process.
              </li>
              <li>
                After completion, download or print the tamper-proof certificate for your records.
              </li>
            </ol>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Usb className="w-10 h-10 text-teal-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Preparing the USB</h3>
                  <p className="text-slate-300 mt-2">
                    Use a reliable flasher tool and verify ISO integrity. For secure environments, flash from an isolated machine.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <FileCheck className="w-10 h-10 text-teal-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Certificates & Audits</h3>
                  <p className="text-slate-300 mt-2">
                    SecureWipe generates a verifiable certificate after each wipe containing device identifiers and algorithm details for audits.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-6 bg-linear-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30">
            <h4 className="text-lg font-semibold text-white mb-2">Safety Notes</h4>
            <ul className="text-slate-300 list-disc list-inside space-y-2">
              <li>Wiping is irreversible. Ensure backups are taken before proceeding.</li>
              <li>Double-check selected drives/partitions — labels may differ across systems.</li>
              <li>For hardware-level secure erase (e.g., ATA Secure Erase), follow device vendor guidance.</li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}