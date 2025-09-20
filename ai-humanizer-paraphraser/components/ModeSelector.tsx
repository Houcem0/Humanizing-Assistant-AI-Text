'use client'
import React from 'react'

export default function ModeSelector({ mode, setMode, variant, setVariant }:
  { mode: string, setMode: (m: any) => void, variant: string, setVariant: (v: string) => void }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <button className={`px-3 py-1 rounded ${mode==='paraphrase' ? 'bg-indigo-600 text-white' : 'border'}`} onClick={() => setMode('paraphrase')}>Paraphrase</button>
        <button className={`px-3 py-1 rounded ${mode==='humanize' ? 'bg-indigo-600 text-white' : 'border'}`} onClick={() => setMode('humanize')}>Humanize</button>
      </div>

      <div className="ml-4">
        <label className="text-sm mr-2">Variant</label>
        <select value={variant} onChange={e => setVariant(e.target.value)} className="border rounded px-2 py-1">
          <option value="standard">Standard</option>
          <option value="creative">Creative</option>
          <option value="concise">Concise</option>
          <option value="fluency">Fluency</option>
        </select>
      </div>
    </div>
  )
}