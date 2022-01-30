import { SkyRouter } from "skyrouter";
import Landing from "./view/Landing";

import AppLayout from "./view/App/AppLayout";
import Dashboard from "./view/App/Dashboard";
import Buyback from "./view/App/Buyback";
import Mining from "./view/App/Mining";
import Hourglass from "./view/App/Hourglass";

(async () => {

    SkyRouter.route("", Landing);

    SkyRouter.route(["app", "app/*"], AppLayout);
    SkyRouter.route("app", Dashboard);
    SkyRouter.route("app/mining", Mining);
    SkyRouter.route("app/buyback", Buyback);
    SkyRouter.route("app/hourglass", Hourglass);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();