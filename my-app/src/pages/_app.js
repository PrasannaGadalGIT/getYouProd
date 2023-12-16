import "@/styles/global.css";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { persistor, store } from "../Redux/store";
export default function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
