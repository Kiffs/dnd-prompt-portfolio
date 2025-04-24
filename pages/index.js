import { useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({ STR: 10, DEX: 10, INT: 10 });
  const [diceResult, setDiceResult] = useState(null);

  function rollDice(sides, count = 1) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * sides) + 1;
    }
    setDiceResult(`${count}d${sides} → ${total}`);
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1
  style={{
    fontSize: '6rem',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: '2rem',
    letterSpacing: '0.05em',
    background: 'url("/cyber-victorian-bg.png") center/cover',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: "'Orbitron', sans-serif",
    textShadow: `
      0 0 2px #0ff,
      0 0 4px #0ff,
      0 0 8px #0ff
    `
  }}
>
  The Prompt Guild
</h1>

        <section style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Character Stats</h2>
          {Object.keys(stats).map((stat) => (
            <div key={stat} style={{ marginBottom: '1rem' }}>
              <label>{stat}: {stats[stat]}</label><br />
              <input
                type="range"
                min="1"
                max="20"
                value={stats[stat]}
                onChange={(e) => setStats((prev) => ({ ...prev, [stat]: parseInt(e.target.value) }))}
              />
            </div>
          ))}
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
