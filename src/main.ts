import { SkyRouter } from "skyrouter";
import Landing from "./view/Landing";

(async () => {

    SkyRouter.route("", Landing);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();