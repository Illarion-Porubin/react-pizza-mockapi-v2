import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId="145384074994-t5f0j9jqhhsoia1jdhh4e883kk3i3nn7.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </HashRouter>
);
