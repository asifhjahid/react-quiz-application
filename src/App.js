import Layout from './components/Layout'
// import Login from './components/pages/Login';
// import Quiz from './components/pages/Quiz';
// import Home from './components/pages/Home'
// import Signup from './components/pages/Signup';
import Result from './components/pages/Result'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home />
        <Signup />
        <Quiz />
        <Login /> */}
        <Result />
      </Layout>
    </div>
  );
}

export default App;
