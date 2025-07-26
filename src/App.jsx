
import Home from './components/Home';
import GlobalContextsProvider from './components/plasmic/simple_light_landing_page/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Home /></GlobalContextsProvider>);
}

export default App;
  