import { SkyRouter } from "skyrouter";
import Landing from "./view/Landing";

import App from "./view/App/Home";

(async () => {

    SkyRouter.route("", Landing);
    SkyRouter.route("/app", App);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();