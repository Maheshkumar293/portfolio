import React from 'react';

export const SectionHeader = ({ index, title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
          {index}
        </span>
        <div className="h-px bg-slate-800 flex-1 max-w-[100px]" />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-100 font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-400 text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
