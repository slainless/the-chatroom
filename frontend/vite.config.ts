import react from '@vitejs/plugin-react-swc'
import { parse } from 'hjson'
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { defineConfig } from 'vite'

type Aliases = Record<string, string[]>

async function readTypesriptConfig() {
  const raw = await readFile(join(__dirname, 'tsconfig.json'), {
    encoding: 'utf-8',
  })
  const json = parse(raw)
  return json
}

function readAliases(config: any): Aliases {
  return config?.compilerOptions?.paths ?? {}
}

function aliasTsToRollup(aliases: Aliases) {
  const rollupAliases: any[] = []
  for (const key in aliases) {
    for (const alias of aliases[key]) {
      const regex = /\/\*$/
      rollupAliases.push({
        find: key.replace(regex, ''),
        replacement: resolve(__dirname, alias.replace(regex, '')),
      })
    }
  }

  return rollupAliases
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const tsconfig = await readTypesriptConfig()
  const aliases = readAliases(tsconfig)

  const rollupAliases = aliasTsToRollup(aliases)
  return {
    plugins: [react()],
    resolve: {
      alias: rollupAliases,
    },
  }
})
