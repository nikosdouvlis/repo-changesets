#!/usr/bin/env npx zx

import 'zx/globals'
const files = await glob(['packages/*/package.json']);
const descriptors = files.map(async file => {
    const json = JSON.parse(await $`cat ${file}`)
    return { name: json.name, version: json.version };
});
let res = JSON.stringify(await Promise.all(descriptors));
res = `"NIKOS=${res}"`
$`echo ${res} > $GITHUB_OUTPUT`