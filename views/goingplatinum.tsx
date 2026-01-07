import React from 'react';

const GoingPlatinum: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-red-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&family=Inter:wght@400;700;900&display=swap');
        
        .title-font { font-family: 'Archivo Black', sans-serif; }
        .mono-font { font-family: 'Space Mono', monospace; }
        .body-font { font-family: 'Inter', sans-serif; }

        .platinum-card {
            border-top: 4px solid #d61f1f;
            background: #fafafa;
            padding: 2rem;
            height: 100%;
        }

        .highlight-bar {
            background: linear-gradient(90deg, #d61f1f 0%, transparent 100%);
            height: 4px;
            width: 100px;
            margin: 1.5rem auto;
        }

        .table-row:nth-child(even) { background-color: #f8f8f8; }
      `}</style>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 py-20 body-font text-center">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="mono-font text-red-600 text-sm font-bold tracking-widest uppercase mb-4">
            Legacy Scale // Case Study 001
          </div>
          <h1 className="title-font text-6xl md:text-8xl leading-none uppercase mb-6">
            Going <br /><span className="text-red-600">Platinum</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Defining the "Legacy-Scale" dream through the lens of Creative Sovereignty. 
            How reaching one million fans changes everything when the middleman is removed.
          </p>
        </header>

        {/* The Math / Legacy Goals Section */}
        <section className="flex flex-col items-center gap-8 mb-20">
          <div className="platinum-card w-full md:w-3/4 lg:w-1/2">
            <h3 className="mono-font text-xs uppercase text-slate-500 mb-2">The Legacy Goal</h3>
            <div className="title-font text-5xl">1,000,000</div>
            <p className="mono-font text-red-600 font-bold mt-2">ALBUM UNITS SOLD</p>
            <div className="highlight-bar"></div>
            <p className="text-sm text-slate-600">
              The historic benchmark for cultural impact. In the old industry, this required 
              massive debt. On Latitude, it is pure growth.
            </p>
          </div>

          <div className="platinum-card w-full md:w-3/4 lg:w-1/2">
            <h3 className="mono-font text-xs uppercase text-slate-500 mb-2">Creator Net Revenue</h3>
            <div className="title-font text-5xl text-red-600">$9.5M</div>
            <p className="mono-font text-slate-900 font-bold mt-2">USD EQUIVALENT</p>
            <div className="highlight-bar"></div>
            <p className="text-sm text-slate-600">
              Your 95% share. No recoupment, no marketing deductions, and no hidden fees. 
              Paid out instantly across the SOL and XRP bridges.
            </p>
          </div>
        </section>

        {/* Long Form Content / Paragraphs */}
        <section className="prose prose-slate max-w-none mb-20 text-left">
          <h2 className="title-font text-3xl uppercase mb-6 text-center">The Industry vs. The Individual</h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              In the early 2000s, the "Record Deal" was the only path to the masses. 
              However, these contracts were designed to be predatory. Artists were 
              forced to trade their Masters for a small advance—essentially a high-interest 
              loan that most could never pay back. 
            </p>
            <p>
              When an artist "went platinum" in the old world, the label often kept $8.50 
              of every $10 sale. After "recouping" expenses like manufacturing and 
              marketing, the artist was frequently left with $0, despite having a million fans.
            </p>
            <p className="font-bold text-slate-900">
              Latitude was built to kill this cycle. We believe that if you create the value, 
              you should keep the value.
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="mb-20">
          <h2 className="title-font text-2xl uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs">!</span>
            The Reality of the Numbers
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white mono-font text-xs uppercase tracking-widest">
                  <th className="p-4">Platform</th>
                  <th className="p-4 text-right">Unit Value</th>
                  <th className="p-4 text-right">Net to Artist</th>
                </tr>
              </thead>
              <tbody className="body-font text-sm">
                <tr className="table-row">
                  <td className="p-4 font-bold">Traditional Deal</td>
                  <td className="p-4 text-right">$10.00</td>
                  <td className="p-4 text-slate-500 text-right">~$1.50 (After Debt)</td>
                </tr>
                <tr className="table-row">
                  <td className="p-4 font-bold">Major Streaming</td>
                  <td className="p-4 text-right">$0.003</td>
                  <td className="p-4 text-slate-500 text-right">$3,000 (Per 1M Plays)</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-4 font-black text-red-600">LATITUDE</td>
                  <td className="p-4 font-bold text-right">$10.00</td>
                  <td className="p-4 font-black text-red-600 text-right">$9.50 (Instant)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </section>

        {/* Call to Action Footer */}
        <footer className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="title-font text-2xl uppercase">Sovereignty awaits.</div>
            <p className="mono-font text-xs text-slate-400 mt-2">Latitude v.2.0.6 // No Concessions.</p>
          </div>
          <button className="bg-red-600 hover:bg-slate-900 text-white px-10 py-4 title-font uppercase tracking-widest transition-all shadow-xl hover:shadow-red-200">
            Build Your Fleet
          </button>
        </footer>
      </main>
    </div>
  );
};

export default GoingPlatinum;