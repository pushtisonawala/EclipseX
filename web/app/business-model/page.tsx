
"use client";
import { Shield, Award, Usb, FileCheck, Lock, Recycle, Users, Globe, BookOpen, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Value Proposition",
    icon: Shield,
    items: [
      "NIST 800-88 compliant wiping",
      "Tamper-proof digital certificates",
      "Bootable ISO + Desktop App",
      "Windows, Linux, Android support",
    ],
    color: "from-teal-500/20 to-cyan-500/10",
  },
  {
    title: "Customer Segments",
    icon: Users,
    items: [
      "Government & Defense",
      "Banks & Hospitals",
      "E-waste Recyclers",
      "Journalists & NGOs",
    ],
    color: "from-cyan-500/20 to-teal-500/10",
  },
  {
    title: "Revenue Streams",
    icon: Award,
    items: [
      "Freemium: Free tool + Paid portal",
      "Enterprise: ₹500/device/year",
      "Certificate: ₹99/verification",
      "White-label for OEMs",
    ],
    color: "from-teal-500/10 to-cyan-500/10",
  },
  {
    title: "Channels",
    icon: Globe,
    items: [
      "GitHub Open Source",
      "GeM Portal",
      "OEM Pre-install",
      "MeitY Partnerships",
    ],
    color: "from-cyan-500/10 to-teal-500/10",
  },
  {
    title: "Key Impact",
    icon: Recycle,
    items: [
      "₹50 Cr+ market opportunity",
      "10M+ devices recycled safely",
      "Zero data breach risk",
      "Promotes Circular Economy",
    ],
    color: "from-teal-500/20 to-cyan-500/10",
  },
  {
    title: "Growth Potential",
    icon: Usb,
    items: [
      "Expanding to global markets",
      "Partnerships with top OEMs",
      "Scalable cloud certificate portal",
      "Continuous innovation in secure wiping",
    ],
    color: "from-cyan-500/20 to-teal-500/20",
  },
];

export default function BusinessModelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-32 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 container mx-auto px-4 md:px-12 py-24">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center drop-shadow-lg">Business Model</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, idx) => (
            <Card
              key={section.title}
              className={`p-8 bg-gradient-to-br ${section.color} border-teal-500/30 backdrop-blur-sm shadow-lg hover:shadow-teal-500/20 transition-all`}
            >
              <section.icon className="w-12 h-12 text-teal-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <ul className="list-disc ml-6 text-lg text-slate-300 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      <p className="text-slate-300 text-lg text-center max-w-xl mx-auto mt-12">
        SecureWipe unlocks a ₹50 Cr+ market, enables safe recycling for 10M+ devices, and guarantees zero data breach risk. Our NIST-compliant, certificate-backed solution powers the circular economy for governments, enterprises, and recyclers.
      </p>
      </main>
    </div>
  );
}
