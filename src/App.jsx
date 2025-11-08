import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';
import ApiDemo from './pages/ApiDemo';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api-demo" element={<ApiDemo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
