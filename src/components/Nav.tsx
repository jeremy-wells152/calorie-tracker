import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md mb-6">
      <Link to="/" className="text-blue-600 hover:underline font-medium">
        Log
      </Link>
      <Link to="/food-list" className="text-blue-600 hover:underline font-medium">
        Foods
      </Link>
      <Link to="/config" className="text-red-600 hover:underline font-medium">
        Config
      </Link>
    </nav>
  );
}

export default Nav;
