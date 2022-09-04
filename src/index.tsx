import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import App from "./App/index";

import "bootstrap/dist/css/bootstrap.css";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
