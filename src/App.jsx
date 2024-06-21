import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { pb } from "./state";
import { useEffect, useState } from "react";
import { Login } from "./pages/Login";
import { Tickets } from "./pages/Tickets";
import { Ticket } from "./pages/Ticket";

const queryClient = new QueryClient();

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Tickets} />
      <Route path="/ticket/:id" component={Ticket} />
    </Switch>
  );
};

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid);
  useEffect(() => {
    pb.collection("users").authRefresh();
    pb.authStore.onChange(() => setLoggedIn(pb.authStore.isValid));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ModalsProvider>
          {loggedIn ? <Router /> : <Login />}
          <Notifications />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};
