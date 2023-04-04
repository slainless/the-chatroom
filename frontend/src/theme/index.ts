import initialTokenMap, { CSSTokenMap } from '@atlaskit/tokens/token-names'

import {
  GetAllTokenPath,
  getTokenMapPath,
  makeTokenMap,
  mergeTokenMap,
} from '#Functions/theme'

import radius from '#/theme/radius'

const customTokenMap = {
  radius: makeTokenMap('border.radius', 'radius', radius),
} as const

const extendedTokenMap = mergeTokenMap(
  initialTokenMap,
  ...Object.values(customTokenMap).map((m) => getTokenMapPath(m))
)

type AllTokenPath = keyof typeof extendedTokenMap
export function token<T extends AllTokenPath>(path: T, fallback?: string) {
  return `var(${extendedTokenMap[path]}${
    fallback != null && fallback != '' ? `, ${fallback}` : ''
  })`
}
