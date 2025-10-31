"use client";

import { Download } from "lucide-react";

export default function DownloadPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
			<div className="flex flex-col items-center gap-6">
				<Download className="w-16 h-16 text-teal-400 mb-4" />
				<h1 className="text-4xl font-bold mb-2">Download SecureWipe ISO</h1>
				<p className="text-lg text-slate-300 mb-6 max-w-xl text-center">Get the latest NIST-compliant SecureWipe ISO for safe, certified data erasure. Click below to start your download.</p>
				<a
					href="https://speed.hetzner.de/500MB.bin"
					download
					className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all"
				>
					Download ISO (500MB)
				</a>
			</div>
		</div>
	);
}
