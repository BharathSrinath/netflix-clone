import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore, { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
      {/* Here loading={null} is the default value. I have just included that so that you know there exists a property called laoding and you can use it for showing other things while loading */}
      <Body />
      </PersistGate>
    </Provider>
  );
}

export default App;
