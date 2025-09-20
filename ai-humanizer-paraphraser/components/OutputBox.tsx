'use client'
import React from 'react'

export default function OutputBox({ text, loading }:{ text: string, loading: boolean }){
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Output</label>
      <div className="min-h-[140px] p-3 border rounded bg-white">
        {loading ? <div>Processing...</div> : <pre className="whitespace-pre-wrap">{text}</pre>}
      </div>
      <div className="mt-2 flex gap-2">
        <button onClick={() => navigator.clipboard.writeText(text)} className="px-3 py-1 border rounded">Copy</button>
        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(text)}`} download="result.txt" className="px-3 py-1 border rounded">Download</a>
      </div>
    </div>
  )
}