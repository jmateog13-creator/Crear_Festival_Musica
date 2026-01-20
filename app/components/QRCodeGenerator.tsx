'use client';

import QRCode from 'react-qr-code';
import { useState, useRef } from 'react';
import { Download, Link as LinkIcon, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QRCodeGenerator() {
    const [url, setUrl] = useState('');
    const qrRef = useRef<HTMLDivElement>(null);

    const downloadQR = () => {
        const svg = qrRef.current?.querySelector("svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            if (ctx) {
                ctx.fillStyle = "white"; // Add white background just in case
                ctx.fillRect(0, 0, canvas.width, canvas.height); // actually QR usually has transparent or white.
                // Better: just draw image.
                ctx.drawImage(img, 0, 0);
                const pngFile = canvas.toDataURL("image/png");
                const downloadLink = document.createElement("a");
                downloadLink.download = "festival-playlist-qr.png";
                downloadLink.href = pngFile;
                downloadLink.click();
            }
        };

        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Music className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Generador de QR</h3>
                    <p className="text-slate-400 text-sm">Crea el codi per al teu cartell</p>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Enllaç de la Playlist (Spotify/YouTube)</label>
                    <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="https://open.spotify.com/playlist/..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                        />
                    </div>
                </div>

                {url && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10"
                    >
                        <div ref={qrRef} className="bg-white p-4 rounded-lg">
                            <QRCode value={url} size={180} />
                        </div>

                        <button
                            onClick={downloadQR}
                            className="flex items-center gap-2 py-2 px-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors w-full justify-center"
                        >
                            <Download className="w-4 h-4" />
                            Descarrega PNG
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
