'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]">
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="z-10 text-center px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20 text-sm font-mono mb-6 tracking-wider shadow-[0_0_10px_rgba(255,0,255,0.2)]">
                        PROJECTE: FESTIVAL MANAGER
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-400 drop-shadow-sm">
                        DISSENYA EL <span className="text-neon-green drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">FESTIVAL</span><br />
                        DE L'ANY
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        La teva missió: Crear la identitat visual, el cartell i la banda sonora d'un esdeveniment musical únic.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('briefing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neon-green transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)]"
                    >
                        <span className="flex items-center gap-2">
                            INICIAR MISSIÓ
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative gradients */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#020617] to-transparent pointer-events-none" />
        </section>
    );
}
