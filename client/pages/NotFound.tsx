import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link
          to="/"
          className="text-brand-700 hover:underline font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
