import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const outDir = resolve('public/assets/t-minus-14');
mkdirSync(outDir, { recursive: true });

export const PRESETS = [
  {
    id: 'holiday',
    optionNumber: 1,
    name: 'Option 1: The Holiday Countdown',
    subtitle: 'Thanksgiving / Cyber Week / Winter Break Sprint',
    angle: 'Seasonal, highly relatable, festive yet clean and practical.',
    styleName: 'Warm Modern Holiday Minimalist',
    aiImage: '/assets/t-minus-14/ai-option-1-holiday.png',
    svgImage: '/assets/t-minus-14/render-option-1-holiday.svg',
    palette: {
      bgTop: '#07130F',
      bgMid: '#0B1D17',
      bgBottom: '#080D0B',
      glow: 'rgba(212, 168, 83, 0.14)',
      cardBg: 'rgba(14, 33, 26, 0.82)',
      cardActiveBg: 'rgba(212, 168, 83, 0.13)',
      border: 'rgba(212, 168, 83, 0.28)',
      borderActive: '#E5B85B',
      textPrimary: '#F6F4EE',
      textSecondary: '#A8B8B0',
      accent: '#E5B85B',
      accentSecondary: '#F59E0B',
      doneColor: '#34D399',
      queuedColor: '#7C9087',
      targetColor: '#FBBF24'
    },
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    monoFamily: "'JetBrains Mono', 'Fira Code', monospace",
    headerLine1: 'MISSION: HOLIDAY SHUTDOWN & WRAP-UP',
    headerLine2: 'COUNTDOWN: T-MINUS 14 DAYS • TARGET: NOV 23',
    milestones: [
      { date: 'NOV 10', task: 'Final Deliverables & Project Lock', badge: '✓ DONE', state: 'done' },
      { date: 'NOV 14', task: 'Travel & Logistics Finalized', badge: '▶ CURRENT', state: 'active' },
      { date: 'NOV 18', task: 'Gift & Holiday Prep Closed', badge: '○ QUEUED', state: 'queued' },
      { date: 'NOV 23', task: 'Hard Shutdown & Family Departure', badge: '★ TARGET', state: 'target' }
    ],
    directive: 'FINISH STRONG BEFORE THE TURKEY GETS COLD',
    prompt: `Create an ultra-high-resolution 9:16 vertical smartphone lock screen wallpaper that serves as a functional milestone countdown tracker for the upcoming holiday season deadline.

[LAYOUT & PHYSICAL CONSTRAINTS]
- Aspect Ratio: 9:16 vertical mobile canvas.
- Top Safe Zone (0% to 32% vertical height): Completely clean, unobstructed, dark-toned negative space with very subtle soft atmospheric glow, specifically reserved so the native mobile digital clock, date, and battery UI remain 100% legible.
- Bottom Safe Zone (85% to 100% vertical height): Free of text, borders, or critical icons to prevent collision with lock screen shortcuts (flashlight/camera).
- Information Block (33% to 84% vertical height): Centered, immaculate structural layout.

[CONTENT & TYPOGRAPHY]
- Header (34% - 44%):
  "MISSION: HOLIDAY SHUTDOWN & WRAP-UP"
  "COUNTDOWN: T-MINUS 14 DAYS • TARGET: NOV 23"
- Milestone Pipeline (46% - 76%): Exactly 4 sequential, cleanly aligned milestone cards:
  1. NOV 10 | Final Deliverables & Project Lock [✓ DONE]
  2. NOV 14 | Travel & Logistics Finalized [▶ CURRENT]
  3. NOV 18 | Gift & Holiday Prep Closed [○ QUEUED]
  4. NOV 23 | Hard Shutdown & Family Departure [★ TARGET]
- Bottom Micro-Directive (78% - 82%): "FINISH STRONG BEFORE THE TURKEY GETS COLD"

[AESTHETIC & POLISH]
- Style: Warm Modern Holiday Minimalist. Deep pine green and charcoal slate backdrop, refined gold and warm amber line accents, subtle geometric evergreen motifs.
- Typography: Razor-sharp modern typography, ultra-clean line weights, crisp tabular data alignment, zero distorted text artifacts, pristine product design finish.`
  },
  {
    id: 'music',
    optionNumber: 2,
    name: 'Option 2: Music / Guitarist Album Release & Gig Sprint',
    subtitle: 'EP Drop & Live Showcase Launch',
    angle: 'Musician/creative grind, visually punchy, authentic studio aesthetic.',
    styleName: 'Vintage Analog Studio meets Dark Modern HUD',
    aiImage: '/assets/t-minus-14/ai-option-2-music.png',
    svgImage: '/assets/t-minus-14/render-option-2-music.svg',
    palette: {
      bgTop: '#0A0908',
      bgMid: '#14110F',
      bgBottom: '#080706',
      glow: 'rgba(249, 115, 22, 0.14)',
      cardBg: 'rgba(26, 21, 18, 0.86)',
      cardActiveBg: 'rgba(249, 115, 22, 0.14)',
      border: 'rgba(245, 158, 11, 0.26)',
      borderActive: '#F97316',
      textPrimary: '#FAF5EE',
      textSecondary: '#A89F91',
      accent: '#F97316',
      accentSecondary: '#FBBF24',
      doneColor: '#10B981',
      queuedColor: '#78716C',
      targetColor: '#F59E0B'
    },
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    monoFamily: "'JetBrains Mono', monospace",
    headerLine1: 'PROJECT: EP DROP & SHOWCASE LAUNCH',
    headerLine2: 'COUNTDOWN: T-MINUS 14 DAYS • SHOWTIME: NOV 23',
    milestones: [
      { date: 'NOV 10', task: 'Final Guitar Stems & Mix Sign-Off', badge: '✓ LOCKED', state: 'done' },
      { date: 'NOV 14', task: 'Master Delivery & Artwork Export', badge: '▶ ACTIVE', state: 'active' },
      { date: 'NOV 19', task: 'Full Band Dress Rehearsal', badge: '○ QUEUED', state: 'queued' },
      { date: 'NOV 23', task: 'Stage Lights Up & Global Release', badge: '★ LIVE', state: 'target' }
    ],
    directive: 'LESS TALK, MORE CHORDS • NAIL THE SOLO',
    prompt: `Create an ultra-high-resolution 9:16 vertical smartphone lock screen wallpaper designed as a high-performance studio countdown tracker for a musician's upcoming release and live showcase.

[LAYOUT & PHYSICAL CONSTRAINTS]
- Aspect Ratio: 9:16 vertical mobile canvas.
- Top Safe Zone (0% to 32% vertical height): Pure low-contrast, deep obsidian negative space leaving total clarity for system clock, date, and notification widgets.
- Bottom Safe Zone (85% to 100% vertical height): Completely clean of graphics and text to avoid lock screen touch targets.
- Functional HUD (33% to 84% vertical height): Organized vertical sequence.

[CONTENT & TYPOGRAPHY]
- Header (34% - 44%):
  "PROJECT: EP DROP & SHOWCASE LAUNCH"
  "COUNTDOWN: T-MINUS 14 DAYS • SHOWTIME: NOV 23"
- Milestone Pipeline (46% - 76%): 4 sequential studio tracking checkpoints:
  1. NOV 10 | Final Guitar Stems & Mix Sign-Off [✓ LOCKED]
  2. NOV 14 | Master Delivery & Artwork Export [▶ ACTIVE]
  3. NOV 19 | Full Band Dress Rehearsal [○ QUEUED]
  4. NOV 23 | Stage Lights Up & Global Release [★ LIVE]
- Bottom Micro-Directive (78% - 82%): "LESS TALK, MORE CHORDS • NAIL THE SOLO"

[AESTHETIC & POLISH]
- Style: Vintage Analog Studio meets Dark Modern HUD. Matte dark-grain charcoal finish, subtle audio waveform and guitar headstock wireframe motifs, electric vintage amber and tube-amp orange accents.
- Typography: Industrial sans-serif, perfectly kerned tabular alignment, immaculate visual hierarchy, razor-sharp vector line dividers.`
  },
  {
    id: 'swiss',
    optionNumber: 3,
    name: 'Option 3: Swiss Minimalist Academic / Capstone Defense',
    subtitle: 'International Typographic Milestone Planner',
    angle: 'High academic rigor, maximum readability, sophisticated portfolio piece.',
    styleName: 'Authentic Swiss Modernism (#121214 + Klein Blue / Safety Amber)',
    aiImage: '/assets/t-minus-14/ai-option-3-swiss.png',
    svgImage: '/assets/t-minus-14/render-option-3-swiss.svg',
    palette: {
      bgTop: '#121214',
      bgMid: '#121214',
      bgBottom: '#0E0E10',
      glow: 'rgba(0, 71, 171, 0.12)',
      cardBg: 'rgba(24, 24, 28, 0.92)',
      cardActiveBg: 'rgba(0, 82, 204, 0.16)',
      border: 'rgba(244, 244, 240, 0.18)',
      borderActive: '#3B82F6',
      textPrimary: '#F4F4F0',
      textSecondary: '#9CA3AF',
      accent: '#3B82F6',
      accentSecondary: '#F59E0B',
      doneColor: '#A1A1AA',
      queuedColor: '#71717A',
      targetColor: '#F59E0B'
    },
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    monoFamily: "'JetBrains Mono', monospace",
    headerLine1: 'PHASE 04: FINAL CAPSTONE THESIS DEFENSE',
    headerLine2: 'STATUS: ACTIVE • T-MINUS 14 DAYS • DUE: NOV 23',
    milestones: [
      { date: '11.10', task: 'Literature & Methodology Frozen', badge: 'COMPLETE', state: 'done' },
      { date: '11.15', task: 'Empirical Model & Results Finalized', badge: 'IN PROGRESS', state: 'active' },
      { date: '11.19', task: 'Defense Slide Deck v2 Dry Run', badge: 'PENDING', state: 'queued' },
      { date: '11.23', task: 'Formal Committee Defense & Upload', badge: 'GOAL', state: 'target' }
    ],
    directive: 'PRECISION IN EXECUTION, RIGOR IN DATA',
    prompt: `Create an ultra-high-resolution 9:16 vertical smartphone lock screen wallpaper styled as an International Typographic (Swiss Design) milestone sprint planner.

[LAYOUT & PHYSICAL CONSTRAINTS]
- Aspect Ratio: 9:16 vertical mobile canvas.
- Top Safe Zone (0% to 32% vertical height): Completely open, dark graphite monochromatic space ensuring the system clock and lock screen date widgets stay clearly visible.
- Bottom Safe Zone (85% to 100% vertical height): Clear empty footer.
- Core Matrix (33% to 84% vertical height): Disciplined grid layout.

[CONTENT & TYPOGRAPHY]
- Header (34% - 44%):
  "PHASE 04: FINAL CAPSTONE THESIS DEFENSE"
  "STATUS: ACTIVE • T-MINUS 14 DAYS • DUE: NOV 23"
- Milestone Pipeline (46% - 76%): 4 clean chronological progress rows with divider lines:
  1. 11.10 | Literature & Methodology Frozen [COMPLETE]
  2. 11.15 | Empirical Model & Results Finalized [IN PROGRESS]
  3. 11.19 | Defense Slide Deck v2 Dry Run [PENDING]
  4. 11.23 | Formal Committee Defense & Upload [GOAL]
- Bottom Micro-Directive (78% - 82%): "PRECISION IN EXECUTION, RIGOR IN DATA"

[AESTHETIC & POLISH]
- Style: Authentic Swiss Modernism. Dark charcoal slate background (#121214) with stark bone-white typography and subtle International Klein Blue or Safety Amber accent badges.
- Typography: Ultra-legible neo-grotesque sans-serif, strict tabular baseline grid, fine 1px hairline rules, zero visual clutter, immaculate editorial polish.`
  },
  {
    id: 'aerospace',
    optionNumber: 4,
    name: 'Option 4: Aerospace Mission Control / Tech Launch',
    subtitle: 'NASA / Telemetry Flight Card HUD',
    angle: 'High-stakes technical command, ultra-functional telemetry feel.',
    styleName: 'Aerospace HUD / Ground Station Telemetry',
    aiImage: '/assets/t-minus-14/ai-option-4-aerospace.png',
    svgImage: '/assets/t-minus-14/render-option-4-aerospace.svg',
    palette: {
      bgTop: '#05070A',
      bgMid: '#090D14',
      bgBottom: '#040608',
      glow: 'rgba(6, 182, 212, 0.14)',
      cardBg: 'rgba(11, 19, 30, 0.88)',
      cardActiveBg: 'rgba(6, 182, 212, 0.15)',
      border: 'rgba(6, 182, 212, 0.28)',
      borderActive: '#06B6D4',
      textPrimary: '#ECFEFF',
      textSecondary: '#94A3B8',
      accent: '#06B6D4',
      accentSecondary: '#FACC15',
      doneColor: '#22D3EE',
      queuedColor: '#64748B',
      targetColor: '#FACC15'
    },
    fontFamily: "'JetBrains Mono', 'Space Grotesk', monospace",
    monoFamily: "'JetBrains Mono', monospace",
    headerLine1: 'MISSION FLIGHT CARD: CODEBASE DEPLOY',
    headerLine2: 'WINDOW: NOV 23 • T-MINUS 14 DAYS TO T-ZERO',
    milestones: [
      { date: 'T-14', task: 'Architecture Freeze & DB Migrations', badge: 'SYS NOMINAL', state: 'done' },
      { date: 'T-09', task: 'End-to-End Stress Test & Security Scan', badge: 'TRANSMITTING', state: 'active' },
      { date: 'T-04', task: 'User Acceptance & Release Candidate', badge: 'ARMED', state: 'queued' },
      { date: 'T-00', task: 'Global Mainnet Production Push', badge: 'IGNITION', state: 'target' }
    ],
    directive: 'FAILURE IS NOT AN OPTION • CLEAR FOR LAUNCH',
    prompt: `Create an ultra-high-resolution 9:16 vertical smartphone lock screen wallpaper that looks like a NASA / Aerospace telemetry flight card for a critical launch deadline.

[LAYOUT & PHYSICAL CONSTRAINTS]
- Aspect Ratio: 9:16 vertical mobile canvas.
- Top Safe Zone (0% to 32% vertical height): Flat matte space-black backdrop with no bright elements, reserving space for the native phone clock and widget stack.
- Bottom Safe Zone (85% to 100% vertical height): Clear buffer zone above bottom buttons.
- Flight Card Matrix (33% to 84% vertical height): Tactical layout.

[CONTENT & TYPOGRAPHY]
- Header (34% - 44%):
  "MISSION FLIGHT CARD: CODEBASE DEPLOY"
  "WINDOW: NOV 23 • T-MINUS 14 DAYS TO T-ZERO"
- Milestone Pipeline (46% - 76%): 4 telemetry checkpoints:
  1. T-14 | Architecture Freeze & DB Migrations [SYS NOMINAL]
  2. T-09 | End-to-End Stress Test & Security Scan [TRANSMITTING]
  3. T-04 | User Acceptance & Release Candidate [ARMED]
  4. T-00 | Global Mainnet Production Push [IGNITION]
- Bottom Micro-Directive (78% - 82%): "FAILURE IS NOT AN OPTION • CLEAR FOR LAUNCH"

[AESTHETIC & POLISH]
- Style: Aerospace HUD / Ground Station Telemetry. Deep matte carbon background with subtle technical crosshairs, signal cyan and hazard yellow status indicators.
- Typography: Crisp monospaced and technical sans fonts, perfectly aligned coordinates, zero AI gibberish or artifacting, high-contrast readability at arm’s length.`
  }
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildSvgForPreset(p) {
  const W = 1080;
  const H = 1920;
  // Physical constraints:
  // 0% - 32% (0 to 614.4): Top Safe Zone
  // 34% - 44% (652.8 to 844.8): Header
  // 46% - 76% (883.2 to 1459.2): 4 Milestone Cards
  // 78% - 82% (1497.6 to 1574.4): Bottom Micro-Directive
  // 85% - 100% (1632 to 1920): Bottom Safe Zone

  let motifSvg = '';
  if (p.id === 'holiday') {
    motifSvg = `
      <!-- Subtle Geometric Evergreen & Gold Frost Motifs within 33% - 84% -->
      <g opacity="0.16" stroke="${p.palette.accent}" stroke-width="1.5" fill="none">
        <polygon points="540,636 558,666 522,666" />
        <polygon points="540,648 566,684 514,684" />
        <line x1="90" y1="648" x2="480" y2="648" stroke-dasharray="4 6" />
        <line x1="600" y1="648" x2="990" y2="648" stroke-dasharray="4 6" />
      </g>
    `;
  } else if (p.id === 'music') {
    // Subtle studio waveform bars in the HUD header transition
    let bars = '';
    for (let i = 0; i < 45; i++) {
      const x = 96 + i * 20;
      const amp = Math.round(6 + 18 * Math.abs(Math.sin(i * 0.42) * Math.cos(i * 0.19)));
      bars += `<line x1="${x}" y1="${648 - amp}" x2="${x}" y2="${648 + amp}" stroke="${p.palette.accent}" stroke-width="2" opacity="0.22" stroke-linecap="round"/>`;
    }
    motifSvg = `<g>${bars}</g>`;
  } else if (p.id === 'swiss') {
    motifSvg = `
      <!-- Authentic Swiss 1px Structural Grid Hairlines (strictly inside 33% - 84%) -->
      <g stroke="${p.palette.textPrimary}" stroke-width="1" opacity="0.18">
        <line x1="84" y1="640" x2="996" y2="640" />
        <line x1="84" y1="860" x2="996" y2="860" />
        <line x1="84" y1="1475" x2="996" y2="1475" />
        <line x1="84" y1="1588" x2="996" y2="1588" />
      </g>
    `;
  } else if (p.id === 'aerospace') {
    motifSvg = `
      <!-- Telemetry Reticles & Corner Brackets strictly inside 33% - 84% -->
      <g stroke="${p.palette.accent}" stroke-width="2" fill="none" opacity="0.45">
        <path d="M 84 662 L 84 638 L 112 638" />
        <path d="M 996 662 L 996 638 L 968 638" />
        <path d="M 84 1566 L 84 1590 L 112 1590" />
        <path d="M 996 1566 L 996 1590 L 968 1590" />
      </g>
    `;
  }

  const cardsSvg = p.milestones
    .map((m, idx) => {
      const y = 884 + idx * 144;
      const h = 124;
      const isActive = m.state === 'active';
      const isTarget = m.state === 'target';
      const isDone = m.state === 'done';

      const strokeColor = isActive
        ? p.palette.borderActive
        : isTarget
        ? p.palette.accentSecondary
        : p.palette.border;
      const strokeWidth = isActive ? 2.5 : 1.5;
      const fillBg = isActive ? p.palette.cardActiveBg : p.palette.cardBg;

      const badgeColor = isActive
        ? p.palette.accent
        : isTarget
        ? p.palette.targetColor
        : isDone
        ? p.palette.doneColor
        : p.palette.queuedColor;

      const leftBar = isActive
        ? `<rect x="84" y="${y}" width="8" height="${h}" rx="4" fill="${p.palette.accent}" />`
        : isTarget
        ? `<rect x="84" y="${y}" width="6" height="${h}" rx="3" fill="${p.palette.targetColor}" />`
        : '';

      return `
        <g>
          <rect x="84" y="${y}" width="912" height="${h}" rx="${p.id === 'swiss' ? 2 : 14}" fill="${fillBg}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
          ${leftBar}
          <!-- Date Pill -->
          <rect x="114" y="${y + 34}" width="136" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="${strokeColor}" stroke-width="1" />
          <text x="182" y="${y + 70}" text-anchor="middle" fill="${isActive || isTarget ? p.palette.accent : p.palette.textSecondary}" font-family="${p.monoFamily}" font-size="25" font-weight="700" letter-spacing="1.5">${escapeXml(m.date)}</text>
          
          <!-- Divider -->
          <line x1="272" y1="${y + 28}" x2="272" y2="${y + h - 28}" stroke="${p.palette.border}" stroke-width="1.5" />

          <!-- Task Title -->
          <text x="296" y="${y + 71}" fill="${isDone ? p.palette.textSecondary : p.palette.textPrimary}" font-family="${p.fontFamily}" font-size="27" font-weight="${isActive || isTarget ? '700' : '600'}">${escapeXml(m.task)}</text>

          <!-- Status Badge -->
          <rect x="772" y="${y + 36}" width="198" height="52" rx="${p.id === 'swiss' ? 2 : 8}" fill="rgba(0,0,0,0.38)" stroke="${badgeColor}" stroke-width="1.5" />
          <text x="871" y="${y + 69}" text-anchor="middle" fill="${badgeColor}" font-family="${p.monoFamily}" font-size="21" font-weight="700" letter-spacing="1.5">${escapeXml(m.badge)}</text>
        </g>
      `;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.palette.bgTop}" />
      <stop offset="55%" stop-color="${p.palette.bgMid}" />
      <stop offset="100%" stop-color="${p.palette.bgBottom}" />
    </linearGradient>
    <radialGradient id="hudGlow" cx="50%" cy="56%" r="44%">
      <stop offset="0%" stop-color="${p.palette.glow}" />
      <stop offset="100%" stop-color="rgba(0,0,0,0)" />
    </radialGradient>
  </defs>

  <!-- 9:16 Vertical Canvas Background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)" />
  <rect width="${W}" height="${H}" fill="url(#hudGlow)" />

  <!-- Top Safe Zone (0% - 32% / 0 - 614px): Intentionally pure low-contrast negative space for Mobile OS Clock & Widgets -->

  ${motifSvg}

  <!-- HEADER BLOCK (34% - 44% / 653px - 845px) -->
  <g>
    <rect x="84" y="668" width="912" height="172" rx="${p.id === 'swiss' ? 2 : 16}" fill="${p.palette.cardBg}" stroke="${p.palette.borderActive}" stroke-width="1.8" />
    <text x="540" y="732" text-anchor="middle" fill="${p.palette.textPrimary}" font-family="${p.fontFamily}" font-size="33" font-weight="800" letter-spacing="2.2">${escapeXml(p.headerLine1)}</text>
    <line x1="160" y1="756" x2="920" y2="756" stroke="${p.palette.border}" stroke-width="1" />
    <text x="540" y="802" text-anchor="middle" fill="${p.palette.accent}" font-family="${p.monoFamily}" font-size="25" font-weight="700" letter-spacing="2.5">${escapeXml(p.headerLine2)}</text>
  </g>

  <!-- MILESTONE PIPELINE (46% - 76% / 883px - 1459px) -->
  ${cardsSvg}

  <!-- BOTTOM MICRO-DIRECTIVE (78% - 82% / 1498px - 1574px) -->
  <g>
    <rect x="84" y="1498" width="912" height="76" rx="${p.id === 'swiss' ? 2 : 12}" fill="rgba(255,255,255,0.03)" stroke="${p.palette.border}" stroke-width="1.2" />
    <text x="540" y="1545" text-anchor="middle" fill="${p.palette.accentSecondary}" font-family="${p.monoFamily}" font-size="23" font-weight="700" letter-spacing="3">${escapeXml(p.directive)}</text>
  </g>

  <!-- Bottom Safe Zone (85% - 100% / 1632px - 1920px): Intentionally unobstructed for Flashlight & Camera Touch Targets -->
</svg>`;
}

for (const preset of PRESETS) {
  const svg = buildSvgForPreset(preset);
  const filename = preset.svgImage.split('/').pop();
  writeFileSync(resolve(outDir, filename), svg, 'utf8');
  console.log('Generated SVG:', filename);
}
