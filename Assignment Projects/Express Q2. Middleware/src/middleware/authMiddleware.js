// Middleware
const authenticate = (req, res, next) => {
  const isAuthentic = true; // We have to replace this line with out authentication checking logic in the actual project

  if (isAuthentic) {
    // If user is authenticated then we have to proceed to next middleware
    next();
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
};

export default authenticate;
