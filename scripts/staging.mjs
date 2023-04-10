#!/usr/bin/env zx

import 'zx/globals'
import {constants} from "./common.mjs";

await $`npx json -I -f ${constants.ChangesetConfigFile} -e "this.changelog = false"`;
await $`npx changeset version --snapshot staging`;
await $`git checkout HEAD -- ${constants.ChangesetConfigFile}`;
