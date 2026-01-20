'use client';

import { motion } from 'framer-motion';
import { Eye, Layers, Palette } from 'lucide-react';

export default function ProTips() {
    return (
        <section className="py-20 px-4 bg-[#020617] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    <span className="text-electric-blue">PRO</span> TIPS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-slate-900/80 p-6 rounded-xl border-l-4 border-electric-blue"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Layers className="w-6 h-6 text-electric-blue" />
                            <h3 className="text-xl font-bold text-white">Jerarquia Visual</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            El més important ha de ser el més gran.
                            <br /><br />
                            1. Nom del Festival (Gegant)<br />
                            2. Cap de Cartell (Gran)<br />
                            3. Teloners (Petit)
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-slate-900/80 p-6 rounded-xl border-l-4 border-neon-pink"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-6 h-6 text-neon-pink" />
                            <h3 className="text-xl font-bold text-white">Llegibilitat</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Si no es llegeix, no existeix.
                            Utilitza colors amb molt contrast.
                            <br /><br />
                            ✅ Lletra clara sobre fons fosc.<br />
                            ❌ Lletra fosca sobre fons fosc.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-slate-900/80 p-6 rounded-xl border-l-4 border-neon-green"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Palette className="w-6 h-6 text-neon-green" />
                            <h3 className="text-xl font-bold text-white">Coherència</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            El disseny ha de sonar com la música.
                            <br /><br />
                            🎵 Heavy Metal → Tipografia trencada, colors vermells/negres.<br />
                            🎵 Pop Estiu → Tipografia rodona, colors brillants.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
