export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ ok: false, error: 'Missing DISCORD_WEBHOOK_URL' });
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch {
    body = {};
  }

  const page = body.page || '/';
  const referrer = body.referrer || '';

  const contentLines = [
    '**Portfolio visit**',
    `- Page: ${page}`,
    `- Referrer: ${referrer || 'direct/unknown'}`,
    `- Time: ${new Date().toISOString()}`,
  ];

  try {
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: contentLines.join('\n') }),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      return res.status(502).json({ ok: false, error: 'Discord webhook failed', details: text });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'Request failed' });
  }
}
