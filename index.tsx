import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [stats, setStats] = useState({ STR: 10, DEX: 10, INT: 10 });

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center">DnD Character + AI Prompting Portfolio</h1>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Character Stats</h2>
            {Object.keys(stats).map((stat) => (
              <div key={stat}>
                <label className="block text-sm font-medium">{stat}: {stats[stat]}</label>
                <Slider
                  defaultValue={[stats[stat]]}
                  max={20}
                  min={1}
                  step={1}
                  onValueChange={([val]) => setStats((prev) => ({ ...prev, [stat]: val }))}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              I'm a prompt engineer who helps people create better, more effective prompts for AI tools like ChatGPT.
              I also run DnD campaigns and love mixing tech with storytelling.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p>Email: yourname@protonmail.com</p>
            <p>Or find me on Discord: yourdiscordtag</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
