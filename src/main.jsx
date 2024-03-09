import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { HashRouter } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <App />
      <Toaster position="top-right" richColors />
    </HashRouter>
  </Provider>
);
