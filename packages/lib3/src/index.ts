import { helperFromLib1 } from "@nikosdouvlis/lib1";

export const helperFromLib3 = (name: string = "lib3") => {
  helperFromLib1();
  console.log("hello from " + name);
};
