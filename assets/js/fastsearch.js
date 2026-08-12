import * as params from "@params";
import { initializeSearch } from "./extended/search.js";

initializeSearch({
    indexUrl: "/index.json",
    options: params.fuseOpts,
});
