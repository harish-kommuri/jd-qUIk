import { store } from "@qUIk-UI/store";
import "@qUIk-UI/styles/globals.css";

import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
