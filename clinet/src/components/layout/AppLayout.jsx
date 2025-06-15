// client/src/components/layout/AppLayout.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import NavBar from "./NavBar"; // Import the NavBar component

/**
 * AppLayout component provides a consistent layout for most pages in the application.
 * It typically includes a navigation bar and wraps the main content of the page.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 */
const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main content area, takes remaining vertical space */}
      <main className="flex-1 p-4">{children}</main>

      {/* Optional: You can add a Footer component here if your app needs one */}
      {/* <footer>
        <div className="bg-gray-800 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} DatingApp. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
};

// PropTypes for validation
AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are provided
};

export default AppLayout;
