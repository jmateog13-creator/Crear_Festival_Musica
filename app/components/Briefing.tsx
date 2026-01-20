'use client';

import { motion } from 'framer-motion';
import { PenTool, Mic2, Calendar, Hash } from 'lucide-react';

const CARDS = [
    {
        icon: PenTool,
        title: "1. EL CONCEPTE",
        subtitle: "El Naming",
        desc: "Inventa un nom únic i un logotip. No val 'Festival de Música'. Ha de tenir personalitat.",
        color: "text-neon-pink",
        border: "group-hover:border-neon-pink",
        bg: "group-hover:bg-neon-pink/5"
    },
    {
        icon: Mic2,
        title: "2. EL LINE-UP",
        subtitle: "Els Artistes",
        desc: "Escull 1 cap de cartell i 3 artistes secundaris. L'ordre importa!",
        color: "text-neon-green",
        border: "group-hover:border-neon-green",
        bg: "group-hover:bg-neon-green/5"
    },
    {
        icon: Calendar,
        title: "3. LA INFO",
        subtitle: "Dades Bàsiques",
        desc: "Dia, Lloc (Ciutat/Recinte) i Preu de les entrades. Informació real inventada.",
        color: "text-electric-blue",
        border: "group-hover:border-electric-blue",
        bg: "group-hover:bg-electric-blue/5"
    },
    {
        icon: Hash,
        title: "4. BRANDING",
        subtitle: "Marques i Xarxes",
        desc: "Afegeix els logos de Sponsors (inventats o reals) i l'usuari d'Instagram.",
        color: "text-purple-400",
        border: "group-hover:border-purple-400",
        bg: "group-hover:bg-purple-400/5"
    }
];

export default function Briefing() {
    return (
        <section id="briefing" className="py-20 px-4 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
                        EL BRIEFING
                    </h2>
                    <p className="text-slate-400 text-lg">Què ha de tenir el teu cartell?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group p-6 rounded-2xl bg-slate-900 border border-slate-800 ${card.border} transition-all duration-300 ${card.bg}`}
                        >
                            <div className={`p-3 rounded-lg bg-slate-800 w-fit mb-4 ${card.color}`}>
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-mono text-slate-500 mb-1">{card.title}</h3>
                            <h4 className={`text-xl font-bold text-white mb-3 ${card.color}`}>{card.subtitle}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
