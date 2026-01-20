'use client';

import { useState } from 'react';
import { Check, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface ChecklistItem {
    id: string;
    text: string;
    category: 'visual' | 'audio';
}

const ITEMS: ChecklistItem[] = [
    { id: '1', text: "He triat 4 artistes pel cartell", category: 'visual' },
    { id: '2', text: "El nom del festival és original i té logo", category: 'visual' },
    { id: '3', text: "Hi ha jerarquia visual (Caps de cartell més grans)", category: 'visual' },
    { id: '4', text: "La data i el lloc són clars", category: 'visual' },
    { id: '5', text: "He inclòs xarxes socials i sponsors", category: 'visual' },
    { id: '6', text: "Tinc la Playlist de Spotify creada", category: 'audio' },
    { id: '7', text: "He posat 5 cançons per artista", category: 'audio' },
    { id: '8', text: "El codi QR funciona correctament", category: 'audio' },
    { id: '9', text: "No hi ha faltes d'ortografia", category: 'visual' },
];

export default function Checklist() {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        const next = new Set(checkedItems);
        if (next.has(id)) {
            next.delete(id);
        } else {
            next.add(id);
        }
        setCheckedItems(next);
    };

    const progress = (checkedItems.size / ITEMS.length) * 100;
    const isComplete = progress === 100;

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8 bg-slate-800 rounded-full h-4 overflow-hidden border border-slate-700">
                <motion.div
                    className="h-full bg-gradient-to-r from-neon-green to-electric-blue"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                />
            </div>

            <div className="space-y-4">
                {ITEMS.map((item) => {
                    const isChecked = checkedItems.has(item.id);
                    return (
                        <motion.div
                            key={item.id}
                            initial={false}
                            animate={isChecked ? { scale: [1, 1.02, 1] } : {}}
                            className={clsx(
                                "group cursor-pointer flex items-center p-4 rounded-xl border transition-all duration-300",
                                isChecked
                                    ? "bg-neon-green/10 border-neon-green/50 shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                                    : "bg-slate-900 border-slate-800 hover:border-slate-600"
                            )}
                            onClick={() => toggleItem(item.id)}
                        >
                            <div className="mr-4 flex-shrink-0">
                                <div className={clsx(
                                    "w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors",
                                    isChecked ? "bg-neon-green border-neon-green" : "border-slate-500 group-hover:border-slate-300"
                                )}>
                                    {isChecked && <Check className="w-4 h-4 text-black font-bold" />}
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className={clsx(
                                    "text-lg transition-colors",
                                    isChecked ? "text-neon-green line-through opacity-70" : "text-slate-200"
                                )}>
                                    {item.text}
                                </span>
                                <span className="ml-3 text-xs uppercase tracking-wider font-bold py-0.5 px-2 rounded bg-slate-800 text-slate-500">
                                    {item.category === 'visual' ? 'Disseny' : 'Audio'}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {isComplete && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-8 p-6 bg-neon-green/20 border border-neon-green rounded-2xl text-center"
                    >
                        <h3 className="text-2xl font-bold text-neon-green mb-2">🎉 MISSIÓ COMPLETA!</h3>
                        <p className="text-white text-lg">Ja pots pujar el teu PDF i l'enllaç al Classroom.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
