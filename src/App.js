import Layout from './components/Layout'
// import Home from './components/pages/Home'
import Signup from './components/pages/Signup';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </div>
  );
}

export default App;
