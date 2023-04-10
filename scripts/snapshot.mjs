#!/usr/bin/env zx

import 'zx/globals'
import {constants} from "./common.mjs";

const prefix = argv.name || argv._[0] || 'snap';

await $`npx json -I -f ${constants.ChangesetConfigFile} -e "this.changelog = false"`;
await $`npx changeset version --snapshot ${prefix}`;
await $`git checkout HEAD -- ${constants.ChangesetConfigFile}`;
