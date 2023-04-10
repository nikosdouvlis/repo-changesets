#!/usr/bin/env npx zx

import 'zx/globals'
$.verbose = false

let table =
`| Package | Version |
| ------- | ------- |`

const files = await glob(['packages/*/package.json'])
for (const file of files) {
    const json = JSON.parse(await $`cat ${file}`)
    const line = `\n| ${json.name} | ${json.version} |`
    table += line
}

echo(table)