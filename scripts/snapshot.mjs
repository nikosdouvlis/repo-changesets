#!/usr/bin/env zx

import "zx/globals";
import { constants } from "./common.mjs";

const prefix = argv.name || argv._[0] || "snap";

await $`npx json -I -f ${constants.ChangesetConfigFile} -e "this.changelog = false"`;

const res = await $`npx changeset version --snapshot ${prefix}`;
const noChanges = res.stderr.includes("No unreleased changesets found");

await $`git checkout HEAD -- ${constants.ChangesetConfigFile}`;

if (noChanges) {
  await $`exit 1`;
}
