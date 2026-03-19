import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Assets — AI or Die',
  description: 'Official AI or Die logos, wordmarks, and brand assets.',
  robots: 'noindex',
}

const wordmarks = [
  {
    name: 'Wordmark — Charcoal (Primary)',
    file: '/brand/wordmark-charcoal.svg',
    bg: 'bg-[#FAFAF8]',
    border: 'border-[#E5E0D8]',
  },
  {
    name: 'Wordmark — Dark',
    file: '/brand/wordmark-dark.svg',
    bg: 'bg-[#1C1C1E]',
    border: 'border-[#333]',
  },
]

const circleMarks = [
  { name: 'Orange (Primary)', file: '/brand/circle-mark-orange.svg', bg: 'bg-[#1C1C1E]', border: 'border-[#333]' },
  { name: 'Dark', file: '/brand/circle-mark-dark.svg', bg: 'bg-[#FAFAF8]', border: 'border-[#E5E0D8]' },
  { name: 'Light', file: '/brand/circle-mark-light.svg', bg: 'bg-[#1C1C1E]', border: 'border-[#333]' },
  { name: 'Accent', file: '/brand/circle-mark-accent.svg', bg: 'bg-[#1C1C1E]', border: 'border-[#333]' },
]

const colors = [
  { name: 'Electric Orange', hex: '#FF4C00', swatch: 'bg-[#FF4C00]', label: '' },
  { name: 'Charcoal', hex: '#1C1C1E', swatch: 'bg-[#1C1C1E]', label: '' },
  { name: 'Off-White', hex: '#FAFAF8', swatch: 'bg-[#FAFAF8] border border-[#E5E0D8]', label: '' },
  { name: 'Warm Sand', hex: '#F0EDE8', swatch: 'bg-[#F0EDE8]', label: '' },
]

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Brand Kit</p>
          <h1 className="font-space-grotesk mb-4 text-4xl font-bold tracking-tight md:text-6xl">AI or Die Brand Assets</h1>
          <p className="max-w-2xl text-[var(--text-secondary)]">Official logos, wordmarks, and color palette. Use when referencing AI or Die in press, partnerships, or integrations.</p>
        </div>

        <section className="mb-16">
          <h2 className="font-space-grotesk mb-6 text-2xl font-bold">Wordmark</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {wordmarks.map((wm) => (
              <div key={wm.name} className={`rounded-2xl border p-10 ${wm.bg} ${wm.border}`}>
                <img src={wm.file} alt={wm.name} className="h-12 w-auto" />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--text-muted)]">{wm.name}</span>
                  <a href={wm.file} download className="text-xs font-semibold text-[var(--accent)] hover:underline">Download SVG →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk mb-6 text-2xl font-bold">Circle Mark</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {circleMarks.map((mark) => (
              <div key={mark.name} className={`rounded-2xl border p-8 flex flex-col items-center gap-4 ${mark.bg} ${mark.border}`}>
                <img src={mark.file} alt={mark.name} className="h-16 w-16" />
                <div className="text-center">
                  <p className="text-xs font-semibold text-[var(--text-muted)]">{mark.name}</p>
                  <a href={mark.file} download className="mt-1 block text-xs font-semibold text-[var(--accent)] hover:underline">Download →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk mb-6 text-2xl font-bold">Brand Colors</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {colors.map((color) => (
              <div key={color.hex} className="rounded-2xl border border-[var(--border)] overflow-hidden">
                <div className={`h-20 w-full ${color.swatch}`} />
                <div className="bg-[var(--bg-card)] p-4">
                  <p className="font-space-grotesk font-bold text-[var(--text-primary)]">{color.name}</p>
                  <p className="font-mono text-xs text-[var(--accent)] mt-1">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk mb-6 text-2xl font-bold">Typography</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-2">Logo &amp; Headings</p>
              <p className="font-space-grotesk text-4xl font-bold">Space Grotesk</p>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Weight 700–800 · Letter spacing −0.02em</p>
            </div>
            <div className="border-t border-[var(--border)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-2">Body</p>
              <p className="text-2xl font-medium">Inter</p>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Weight 400–600</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-space-grotesk mb-4 text-2xl font-bold">Usage Guidelines</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8">
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li>✅ Use the orange circle mark on dark backgrounds as the primary icon</li>
              <li>✅ Use the light or dark circle mark based on background contrast</li>
              <li>✅ Maintain clear space equal to the height of the &quot;AI&quot; text around all marks</li>
              <li>❌ Do not recolor, distort, or add effects to any logo</li>
              <li>❌ Do not place the charcoal wordmark on dark backgrounds</li>
              <li>❌ Do not use any font other than Space Grotesk for wordmark reproductions</li>
            </ul>
            <p className="mt-6 text-sm text-[var(--text-muted)]">Questions? <a href="mailto:aiordie@agentmail.to" className="text-[var(--accent)] hover:underline">aiordie@agentmail.to</a></p>
          </div>
        </section>
      </div>
    </main>
  )
}
