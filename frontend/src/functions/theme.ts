const TOKEN_PATH_PREFIX = '--ds-'

export type TokenMap<
  Raw extends Record<string, string>,
  ApiPath extends string,
  TokenPath extends string
> = {
  [K in Extract<keyof Raw, string> as `${ApiPath}.${K}`]: {
    token: `${typeof TOKEN_PATH_PREFIX}-${TokenPath}-${K}`
    value: Raw[K]
  }
}

export type GetAllTokenPath<T extends TokenMap<any, any, any>> = {
  [K in Extract<keyof T, string>]: T[K] extends { token: any }
    ? T[K]['token']
    : never
}

export function makeTokenMap<
  Raw extends Record<string, string>,
  ApiPath extends string,
  TokenPath extends string
>(apiPath: ApiPath, tokenPath: TokenPath, records: Raw) {
  const tokens: TokenMap<Raw, ApiPath, TokenPath> = Object.create(null)
  for (const key in records) {
    const api = `${apiPath}.${key}` as const
    const token = `${TOKEN_PATH_PREFIX}-${tokenPath}-${key}` as const
    // @ts-ignore
    tokens[api] = {
      token: token,
      value: records[key],
    }
  }

  return tokens
}

export function getTokenMapPath<M extends TokenMap<any, any, any>>(
  map: M
): GetAllTokenPath<M> {
  const tokenPath = Object.create(null)
  for (const apiPath in map) {
    // @ts-ignore
    tokenPath[apiPath] = map[apiPath]['value']
  }
  return tokenPath
}

export function mergeTokenMap<M extends Record<string, string>[]>(
  ...tokenMap: M
): {
  [K in M[keyof M] extends infer U
    ? U extends Record<string, string>
      ? keyof U
      : never
    : never]: M[keyof M] extends infer U
    ? U extends Record<K, string>
      ? U[K]
      : never
    : never
} {
  const merged = Object.create(null)
  for (const map of tokenMap) {
    Object.assign(merged, map)
  }
  return merged
}
