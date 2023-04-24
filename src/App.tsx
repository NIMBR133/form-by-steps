import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import { FormWithSteps } from "@/pages/FormWithSteps";

import { persistor, store } from "./store";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <FormWithSteps />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
