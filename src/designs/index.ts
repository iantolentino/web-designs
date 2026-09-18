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
import { printDesigns } from './print'
import { elementalDesigns } from './elemental'
import { futuristicDesigns } from './futuristic'
import { homestyleDesigns } from './homestyle'
import { urbanDesigns } from './urban'
import { historicalDesigns } from './historical'
import { craftDesigns } from './craft'
import { wave4Designs } from './wave4'

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
  ...printDesigns,
  ...elementalDesigns,
  ...futuristicDesigns,
  ...homestyleDesigns,
  ...urbanDesigns,
  ...historicalDesigns,
  ...craftDesigns,
  ...wave4Designs,
]

export function getDesign(id: string): DesignSystem | undefined {
  return DESIGN_SYSTEMS.find((d) => d.id === id)
}
