import { ApolloProvider } from "@apollo/client";
import Home from "./src/screens/Home/index";
import React from "react";
import AppTheme from "./AppTheme";
import { client } from "./src/config/graphql.config";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppTheme>
        <Home />
      </AppTheme>
    </ApolloProvider>
  );
};

export default App;
