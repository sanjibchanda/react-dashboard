import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SidebarProvider } from "./contexts/SidebarContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import RootLayout from "./layout/RootLayout";
import ComponentLayout from "./layout/ComponentLayout";
import ProjectLayout from "./layout/ProjectLayout";
import Info from "./components/Info";
import Form from "./components/Form";
import ProjectDetails, {
  projectDetailsLoader,
} from "./components/ProjectDetails";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects, { ProjectsLoader } from "./pages/Projects";
import Documentation from "./pages/Documentation";
import ButtonLayout from "./layout/ButtonLayout";
import DynamicContent from "./components/DynamicContent";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: "dashboard", Component: Dashboard },
        {
          path: "projects",
          Component: ProjectLayout,
          errorElement: <Error />,
          children: [
            { index: true, loader: ProjectsLoader, Component: Projects },
            {
              path: ":id",
              loader: projectDetailsLoader,
              Component: ProjectDetails,
            },
          ],
        },
        {
          path: "component",
          Component: ComponentLayout,
          children: [
            { index: true, Component: Info },
            { path: "button", Component: ButtonLayout },
            { path: "form", Component: Form },
            { path: "dynamic", Component: DynamicContent },
          ],
        },
        { path: "documentation", Component: Documentation },
        { path: "*", Component: NotFound },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
