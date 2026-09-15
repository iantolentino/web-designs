import type { DesignSystem } from './types'

/**
 * Builds the full, copyable design-system prompt for a design.
 * Deterministic and pure — no side effects.
 */
export function buildDesignPrompt(d: DesignSystem): string {
  return `You are a senior product designer and front-end engineer. Build a web page using the following design system, applying it consistently across typography, color, components, spacing, motion, responsive behavior, and accessibility. Commit fully to this aesthetic — do not blend it with generic defaults, and do not use Inter, Roboto, Arial, or any system font stack.

=== DESIGN SYSTEM: ${d.name} — ${d.category} ===

DESIGNED FOR
Website types: ${d.useCases.join(', ')}
Recommended page layout: ${d.layout}

DESIGN PHILOSOPHY
${d.designPhilosophy}

DETAILS
${d.designDetails}

TYPOGRAPHY
- Display font: ${d.typography.displayFont}
- Body font: ${d.typography.bodyFont}
- Type scale: ${d.typography.scale}
- Line-heights: ${d.typography.lineHeights}
- Letter-spacing: ${d.typography.letterSpacing}

COLOR PALETTE (use exactly these)
- primary: ${d.colors.primary}
- secondary: ${d.colors.secondary}
- accent: ${d.colors.accent}
- neutral: ${d.colors.neutral}
- background: ${d.colors.background}
- text: ${d.colors.text}

COMPONENT SPECIFICATIONS
- Buttons: primary — ${d.components.primary}; secondary — ${d.components.secondary}; tertiary — ${d.components.tertiary}; radius ${d.components.radius}; hover — ${d.components.hover}
- Cards: ${d.components.cards}
- Forms: ${d.components.forms}
- Navigation: ${d.components.navigation}
- Modals: ${d.components.modals}

SPACING & LAYOUT RHYTHM
- Base unit: ${d.spacing.baseUnit}
- Margin scale: ${d.spacing.marginScale}
- Padding scale: ${d.spacing.paddingScale}
- Grid: ${d.spacing.grid}

MOTION & INTERACTIONS
- Page load: ${d.motion.pageLoad}
- Hover states: ${d.motion.hoverStates}
- Transitions: ${d.motion.transitions}
- Scroll: ${d.motion.scroll ?? 'None specified'}

RESPONSIVE RULES
${d.responsive}

ACCESSIBILITY
${d.accessibility}

USAGE EXAMPLE
${d.codeExample}

LAYOUT GUIDANCE
Structure the page as a "${d.layout}" layout: hero-cards = centered hero + 3 feature cards + stats band; split-hero = 50/50 text/visual hero + pricing tiers; magazine = masthead + article grid + cover story; dashboard = sidebar nav + KPI row + chart + data table; centered = single centered column with steps and final CTA; editorial = article head + long-form body with pull quotes; asymmetric = 70/30 offset hero with stat cards right and split proof section; full-bleed = edge-to-edge gradient hero + full-width stat band; spotlight = centered stage-lit object + 3 explanation cards; manifesto = large display-type statement block + numbered proof words.

Deliver a complete, production-ready page that a designer would recognize instantly as "${d.name}".`
}
