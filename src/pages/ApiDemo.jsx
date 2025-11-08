import { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ApiDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchUsers = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${pageNum}&_limit=3`
      );
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(prev => pageNum === 1 ? data : [...prev, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          API Demo - Users
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error: {error}
          </div>
        )}
      </Card>

      {loading && page === 1 && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {filteredUsers.map(user => (
          <Card key={user.id} className="hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              {user.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{user.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {user.company.name}
            </p>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && !loading && (
        <Card>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            No users found
          </p>
        </Card>
      )}

      <div className="text-center">
        <Button
          onClick={() => setPage(prev => prev + 1)}
          disabled={loading}
          className="min-w-32"
        >
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      </div>
    </div>
  );
};

export default ApiDemo;
