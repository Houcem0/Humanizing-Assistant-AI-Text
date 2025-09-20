'use client'
import React from 'react'

export default function TextInput({ value, onChange }: { value: string, onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Input text</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} rows={8} className="w-full p-3 border rounded resize-vertical" placeholder="Paste AI text or your text here..."></textarea>
      <div className="text-xs text-gray-500 mt-1">{value.length} characters</div>
    </div>
  )
}