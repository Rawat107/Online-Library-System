import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[var(--color-primary-light)] text-[var(--color-primary-text)] p-6">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md w-full">
        <AlertTriangle className="w-16 h-16 text-[var(--color-active)] mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-6 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-[var(--color-primary-hover)] hover:bg-[var(--color-hover-state)] text-white px-6 py-3 rounded transition font-semibold"
        >
          Return To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
