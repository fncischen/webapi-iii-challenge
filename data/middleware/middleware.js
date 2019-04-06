function middleware(req, res, next) {
    if (req.body.name.charAt(0) == req.body.name.charAt(0).toUpperCase()) {
      next();
    } else {
      console.log("The first letter of the name must be capitalized! I am capitalizing now.");
      req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1, req.body.name.length);
      next();
     }
  }

module.exports = middleware; 