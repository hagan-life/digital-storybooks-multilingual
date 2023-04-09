import {HashRouter, Route, Routes} from 'react-router-dom'
/*import Layout from './components/Layout'*/
import Landing from './components/Landing'
import Login from './components/Login'
import Library from './components/Library'
import Max from './components/Max'
import TestBookTemplate from './components/TestBookTemplate'
import FourOFour from './components/FourOFour'

function App() {

  return (
    <div className='app'>
      <main>
        <HashRouter>
          <Routes>
            {/*<Route element={ <Layout />}>*/}
            <Route path="/" element={ <Landing /> } /> 
            <Route path="/login" element={ <Login /> } />
            {/* Protected paths will follow, currently auth not Enabled */}
            <Route path="/library" element={ <Library /> } />
            <Route path="/max" element={ <Max /> } />
            <Route path="/testbooktemplate" element={ <TestBookTemplate /> } />

            <Route path="*" element={<FourOFour />} />

          </Routes>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
