'use client'

import { useState } from 'react'
import TextInput from '../components/TextInput'
import ModeSelector from '../components/ModeSelector'
import OutputBox from '../components/OutputBox'

export default function Home() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'paraphrase'|'humanize'>('paraphrase')
  const [variant, setVariant] = useState('standard')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleRun() {
    if (!input.trim()) return
    setLoading(true)
    setOutput('')
    try {
      const res = await fetch(`/api/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input, variant }),
      })
      const data = await res.json()
      setOutput(data.result ?? 'No result')
    } catch (e) {
      setOutput('Error: ' + (e as Error).message)
    } finally { setLoading(false) }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">AI Humanizer & Paraphraser — MVP</h2>
      <div className="grid grid-cols-1 gap-4">
        <TextInput value={input} onChange={setInput} />
        <ModeSelector mode={mode} setMode={setMode} variant={variant} setVariant={setVariant} />
        <div className="flex gap-2">
          <button onClick={handleRun} className="px-4 py-2 bg-indigo-600 text-white rounded">Run</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 border rounded">Clear</button>
        </div>
        <OutputBox text={output} loading={loading} />
      </div>
    </div>
  )
}