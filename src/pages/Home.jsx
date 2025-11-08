import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to <span className="text-blue-600">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A modern React application for managing your tasks efficiently
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" className="text-lg px-6 py-3">
              Get Started
            </Button>
          </Link>
          <Link to="/api-demo">
            <Button variant="secondary" className="text-lg px-6 py-3">
              API Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Task Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create, organize, and track your tasks with ease
          </p>
        </Card>

        <Card className="text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌙</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Switch between light and dark themes for comfortable viewing
          </p>
        </Card>

        <Card className="text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Works perfectly on desktop, tablet, and mobile devices
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
