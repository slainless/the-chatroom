import { identicon, thumbs } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import hash from 'object-hash'

import { token } from '@atlaskit/tokens'

// export function generateColor(string: string) {
//   const hashed = hash.MD5(string) // Convert user ID to hash value
//   const num = parseInt(hashed.slice(0, 6), 16) / parseInt('ffffff', 16) // Convert first 6 characters of hash to a number between 0 and 1

//   const brightness = 1 // Bias towards brighter colors (0 = dark, 1 = bright)
//   const hue = num * 360 // Convert number to a hue value between 0 and 360
//   const saturation = 0.6 // Set saturation to a fixed value

//   const lightness = brightness * (0.5 - Math.abs(num - 0.5)) * 2 // Adjust lightness based on bias and distance from 0.5
//   const color = `hsl(${hue}, ${saturation * 100}%, ${
//     lightness * 100
//   }%)` as const // Convert HSL values to an RGB color value
//   return color
// }

const charts = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'magenta',
] as const

const colors = charts
  .map((color) => [
    token(`color.chart.${color}.bold`),
    // token(`color.chart.${color}.bolder`),
    // token(`color.chart.${color}.boldest`),
  ])
  .flat()

const inputCache: Record<string, any> = {}
export function generateColor(string: string) {
  if (string in inputCache) return colors[inputCache[string]]

  let hash = 0
  for (let i = 0; i < string.length; i++)
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  let index = Math.abs(hash) % colors.length
  inputCache[string] = index
  return colors[index]
}

export function generateAvatar(string: string) {
  return createAvatar(thumbs, {
    seed: string,
  }).toDataUriSync()
}
