import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { text, variant } = await request.json()
    if (!text) return NextResponse.json({ error: 'No text provided' }, { status: 400 })

    const prompt = `Paraphrase the following text. Make it ${variant === 'concise' ? 'concise' : variant === 'creative' ? 'creative and lively' : variant === 'fluency' ? 'very fluent' : 'natural and human-like'}:\n\n${text}`

    const openaiKey = process.env.OPENAI_API_KEY
    if (!openaiKey) return NextResponse.json({ error: 'OpenAI key not configured' }, { status: 500 })

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${openaiKey}` },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], max_tokens: 1200 })
    })

    const data = await resp.json()
    const result = data?.choices?.[0]?.message?.content ?? ''
    return NextResponse.json({ result })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? String(err) }, { status: 500 })
  }
}