import { useState } from "react";

export default function Home() {
  const [diceResult, setDiceResult] = useState(null);
  const [minStat, setMinStat] = useState(1);
  const [maxStat, setMaxStat] = useState(20);
  const [stats, setStats] = useState({ STR: null, DEX: null, INT: null });

  function rollDice(sides, count = 1) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * sides) + 1;
    }
    setDiceResult(`${count}d${sides} → ${total}`);
  }

  function rollStats() {
    const range = maxStat - minStat + 1;
    setStats({
      STR: Math.floor(Math.random() * range) + minStat,
      DEX: Math.floor(Math.random() * range) + minStat,
      INT: Math.floor(Math.random() * range) + minStat
    });
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 className="header-neon">The Prompt Guild</h1>

        <section style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Character Stats</h2>

          <div style={{ marginBottom: '1rem' }}>
            <label>Min Stat: </label>
            <input
              type="number"
              value={minStat}
              onChange={(e) => setMinStat(Number(e.target.value))}
              style={{ marginRight: '1rem', padding: '0.25rem' }}
            />
            <label>Max Stat: </label>
            <input
              type="number"
              value={maxStat}
              onChange={(e) => setMaxStat(Number(e.target.value))}
              style={{ padding: '0.25rem' }}
            />
          </div>

          <button onClick={rollStats} style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>Roll Stats</button>

          <div>
            <p>STR: {stats.STR !== null ? stats.STR : '-'}</p>
            <p>DEX: {stats.DEX !== null ? stats.DEX : '-'}</p>
            <p>INT: {stats.INT !== null ? stats.INT : '-'}</p>
          </div>
        </section>

        <section style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dice Roller</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <button onClick={() => rollDice(20)} style={{ padding: '0.5rem 1rem' }}>Roll d20</button>
            <button onClick={() => rollDice(6, 2)} style={{ padding: '0.5rem 1rem' }}>Roll 2d6</button>
            <button onClick={() => rollDice(4)} style={{ padding: '0.5rem 1rem' }}>Roll d4</button>
            <button onClick={() => rollDice(10)} style={{ padding: '0.5rem 1rem' }}>Roll d10</button>
            <button onClick={() => rollDice(8)} style={{ padding: '0.5rem 1rem' }}>Roll d8</button>
          </div>
          {diceResult && <p>Result: <strong>{diceResult}</strong></p>}
        </section>

        <section style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>About Me</h2>
          <p>
            I'm a prompt engineer who helps people create better, more effective prompts for AI tools like ChatGPT.
            I also run DnD campaigns and love mixing tech with storytelling.
          </p>
        </section>

        <section style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Me</h2>
          <p>Email: yourname@protonmail.com</p>
          <p>Discord: yourdiscordtag</p>
        </section>
      </div>
    </main>
  );
}
