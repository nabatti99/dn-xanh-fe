import { createBrowserRouter } from "react-router-dom";
import { Root } from "@global/Root";
import { ROOT } from "@global/constants";
import { ErrorPage } from "@pages/error";
import { homeRoute } from "@pages/home";
import { chatDemoRoute } from "@pages/chat-demo";
import { analysisRoute } from "@pages/analysis";
import { newsRoute } from "@pages/news";
import { reportRoute } from "@pages/reports";
import { infoRoute } from "@pages/info";

export const router = createBrowserRouter([
    {
        path: ROOT,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [homeRoute, analysisRoute, newsRoute, reportRoute, infoRoute],
    },
]);
