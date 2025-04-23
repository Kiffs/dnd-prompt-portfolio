import { useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({ STR: 10, DEX: 10, INT: 10 });

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
          DnD Character + AI Prompting Portfolio
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
