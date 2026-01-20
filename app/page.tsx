import Hero from './components/Hero';
import Briefing from './components/Briefing';
import ProTips from './components/ProTips';
import Checklist from './components/Checklist';
import QRCodeGenerator from './components/QRCodeGenerator';

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen text-slate-200 selection:bg-neon-pink selection:text-white">

      <Hero />
      <Briefing />
      <ProTips />

      {/* Spotify & QR Section */}
      <section className="py-20 px-4 bg-slate-950/50 border-y border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            LA BANDA SONORA
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Un festival no és res sense música. Crea una llista pública a Spotify,
            afegeix 5 temes de cada artista i genera el teu codi QR per posar-lo al cartell.
          </p>

          <QRCodeGenerator />
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 px-4 bg-[#020617]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FASE FINAL: VERIFICACIÓ
            </h2>
            <p className="text-slate-400">
              Abans d'entregar, assegura't que tens tot això llest.
            </p>
          </div>

          <Checklist />
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>Projecte Educatiu - 3r ESO - Arts Musicals</p>
      </footer>
    </main>
  );
}
