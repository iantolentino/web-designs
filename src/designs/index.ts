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
import { wave5Designs } from './wave5'
import { wave6Designs } from './wave6'
import { wave8Designs } from './wave8'
import { wave9Designs } from './wave9'
import { wave10Designs } from './wave10'
import { wave11Designs } from './wave11'
import { wave12Designs } from './wave12'
import { wave13Designs } from './wave13'
import { wave14Designs } from './wave14'
import { wave15Designs } from './wave15'
import { wave16Designs } from './wave16'
import { wave17Designs } from './wave17'
import { wave18Designs } from './wave18'
import { wave19Designs } from './wave19'
import { wave20Designs } from './wave20'
import { wave21Designs } from './wave21'

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
  ...wave5Designs,
  ...wave6Designs,
  ...wave8Designs,
  ...wave9Designs,
  ...wave10Designs,
  ...wave11Designs,
  ...wave12Designs,
  ...wave13Designs,
  ...wave14Designs,
  ...wave15Designs,
  ...wave16Designs,
  ...wave17Designs,
  ...wave18Designs,
  ...wave19Designs,
  ...wave20Designs,
  ...wave21Designs,
]

export function getDesign(id: string): DesignSystem | undefined {
  return DESIGN_SYSTEMS.find((d) => d.id === id)
}
