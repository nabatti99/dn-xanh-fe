import { createBrowserRouter } from "react-router-dom";
import { Root } from "@global/Root";
import { ROOT } from "@global/constants";
import { ErrorPage } from "@pages/error";
import { homeRoute } from "@pages/home";
import { analysisRoute } from "@pages/analysis";
import { newsRoute } from "@pages/news";
import { reportRoute } from "@pages/reports";
import { infoRoute } from "@pages/info";
import { loginRoute } from "@pages/login";
import { pointRoute } from "@pages/points";
import { activityRoute } from "@pages/activities";
import { membersRoute } from "@pages/members";
import { claimRewardRoute } from "@pages/claim-reward";

export const router = createBrowserRouter([
    {
        path: ROOT,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [homeRoute, analysisRoute, newsRoute, reportRoute, infoRoute, loginRoute, pointRoute, activityRoute, membersRoute, claimRewardRoute],
    },
]);
