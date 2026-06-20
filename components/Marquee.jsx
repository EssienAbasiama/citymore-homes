"use client";

export default function Marquee({ items, className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className="flex shrink-0 animate-marquee items-center">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl md:text-3xl">{item}</span>
            <span className="text-lg opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
