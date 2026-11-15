"use client";

import { Pause, Play } from "lucide-react";
import { useState, type PointerEvent } from "react";

export function Avatar() {
  const [paused, setPaused] = useState(false);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    event.currentTarget.style.setProperty("--turn-x", `${-y * 13}deg`);
    event.currentTarget.style.setProperty("--turn-y", `${x * 16}deg`);
  }

  function reset(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.removeProperty("--turn-x");
    event.currentTarget.style.removeProperty("--turn-y");
  }

  return (
    <div className="avatar-stage" data-paused={paused} onPointerMove={move} onPointerLeave={reset}>
      <svg className="avatar-orbits" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle className="orbit-scale" cx="300" cy="300" r="271" strokeDasharray="2 7" />
        <circle className="orbit-track" cx="300" cy="300" r="244" />
        <g className="orbit-sweep"><circle cx="300" cy="300" r="271" strokeDasharray="138 1565" /><circle className="orbit-beacon" cx="300" cy="29" r="5" /></g>
        <g className="orbit-sweep orbit-sweep-reverse"><circle cx="300" cy="300" r="244" strokeDasharray="100 1433" /><circle className="orbit-beacon" cx="300" cy="56" r="3.5" /></g>
      </svg>
      <div className="avatar-float">
        <img className="avatar" src="/media/avatar.webp" alt="Avatar de vinil do Vitor, com boné, óculos e fones" width="1254" height="1254" fetchPriority="high" />
      </div>
      <button className="avatar-motion-toggle" type="button" aria-label={paused ? "Retomar animações" : "Pausar animações"} onClick={() => setPaused(!paused)}>
        {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
      </button>
    </div>
  );
}
