import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import Tables from "./views/Tables";
import Todo from "./views/Todo";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/todo",
    layout: DefaultLayout,
    component: Todo
  },
  {
    path: "/meetings",
    layout: DefaultLayout,
    component: Tables
  },
];
