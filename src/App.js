import Layout from './components/Layout'
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Home from './components/pages/Home'
import Signup from './components/pages/Signup';
import Result from './components/pages/Result'
import './styles/App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {AuthProvider} from './context/authContext'

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
       <Layout>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/quiz' component={Quiz} />
        <Route exact path='/result' component={Result} />
        </Switch>
       </Layout>
       </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
