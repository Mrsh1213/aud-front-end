import { SUB_SYSTEM_CONTEXT } from "./config/constants";
import SubSystemPageLayout from "./pages/SubSystemPageLayout";
import BasicPageLayout from "./pages/basic";
import ProcessPageLayout from "./pages/process";
import ManagementTrainingManagementCourses from "./pages/basic/ManagementTrainingManagementCourses";
import AuditorFinding from "./pages/process/AudAuditing/AuditorFinding_HT";
import Abc_HT from "./pages/process/AudAuditing/Abc_HT";
import FormBasicTest from "./pages/basic/FormBasicTest";
import AudAuditingLayout from "./pages/process/AudAuditing";
import ErrorBoundary from "./config/ErrorBoundary";
const processRoutes = [
  {
    path: "audAuditing",
    Component: AudAuditingLayout,
    children: [
      {
        path: "auditorFinding_HT/:flowId?/:taskId?/:accessToken?/:taskState?/:taskTitle?/:userToken?/:processVersion?",
        Component: AuditorFinding,
      },
      {
        path: "abc_HT/:flowId?/:taskId?/:accessToken?/:taskState?/:taskTitle?/:userToken?/:processVersion?",
        Component: Abc_HT,
      }
    ]
  }
];
const basicRoutes = [
  {
    path: "managementTrainingManagementCourses/:accessToken?/:userToken?",
    Component: ManagementTrainingManagementCourses,
  },
  {
    path: "formBasicTest/:accessToken?/:userToken?",
    Component: FormBasicTest,
  },
];
const routes = [
  {
    path: "/",
    element: <div>home</div>,
    ErrorBoundary: ErrorBoundary,

  },
  {
    path: "/login",
    element: <div>login</div>,
    ErrorBoundary: ErrorBoundary,

  },
  {
    path: SUB_SYSTEM_CONTEXT,
    Component: SubSystemPageLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "pages",
        Component: ProcessPageLayout,
        children: processRoutes,

      },
      {
        path: "basic",
        Component: BasicPageLayout,
        children: basicRoutes
      },
    ]
  }];
export default routes;