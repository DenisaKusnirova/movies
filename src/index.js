import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import App from "./components/App";
import rootSaga from "./sagas/sagas";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(0,0,0,0.87)",
    },
    secondary: {
      main: "rgb(169,171,177)",
    },
  },
  colors: {
    blue: "rgb(78,154,255)",
    lightblue: "rgb(245,247,252)",
  },
});

const MovieApp = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>{MovieApp}</Provider>,
  document.querySelector("#root")
);
