import type { DesignSystem } from '../types'
import { minimalismDesigns } from './minimalism'
import { maximalismDesigns } from './maximalism'
import { brutalismDesigns } from './brutalism'
import { luxuryDesigns } from './luxury'
import { playfulDesigns } from './playful'
import { retroDesigns } from './retro'
import { organicDesigns } from './organic'
import { professionalDesigns } from './professional'
import { creativeDesigns } from './creative'

export const DESIGN_SYSTEMS: DesignSystem[] = [
  ...minimalismDesigns,
  ...maximalismDesigns,
  ...brutalismDesigns,
  ...luxuryDesigns,
  ...playfulDesigns,
  ...retroDesigns,
  ...organicDesigns,
  ...professionalDesigns,
  ...creativeDesigns,
]

export function getDesign(id: string): DesignSystem | undefined {
  return DESIGN_SYSTEMS.find((d) => d.id === id)
}
