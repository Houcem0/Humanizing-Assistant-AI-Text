import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { text, variant } = await request.json()
    if (!text) return NextResponse.json({ error: 'No text provided' }, { status: 400 })

    const prompt = `You are an expert editor. Turn the following text into a natural, human-sounding version while preserving meaning. Remove repetitive AI-sounding phrasing and inject idiomatic, natural flow. Keep the length similar unless "concise" variant is requested.\n\nText:\n${text}`

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