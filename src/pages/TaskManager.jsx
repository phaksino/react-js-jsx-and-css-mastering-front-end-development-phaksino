import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const { isDark } = useTheme();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask.trim(), 
        completed: false 
      }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Task Manager
        </h1>
        
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <Button onClick={addTask}>Add Task</Button>
        </div>

        <div className="flex gap-2 mb-4">
          {['all', 'active', 'completed'].map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'primary' : 'secondary'}
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f}
            </Button>
          ))}
        </div>
      </Card>

      <div className="space-y-3">
        {filteredTasks.map(task => (
          <Card key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                {task.text}
              </span>
            </div>
            <Button
              variant="danger"
              onClick={() => deleteTask(task.id)}
              className="text-sm"
            >
              Delete
            </Button>
          </Card>
        ))}
        
        {filteredTasks.length === 0 && (
          <Card>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              No tasks found
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
