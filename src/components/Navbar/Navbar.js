import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="teal.500">
      <nav className="nav">
        <Link to="/" className="nav-link">Lengths</Link>
        <Link to="/pixels" className="nav-link">Pixels</Link>
      </nav>
    </Box>
  );
}
