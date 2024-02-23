import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './state/store'
import AppRouter from './routes/index';

const App = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ReduxProvider>
)

export default App
