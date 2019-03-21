function middleware(req, res) {
    if (req.body.name.charAt(0) == req.body.name.charAt(0).toUpperCase()) {
      res.json(req);
    } else {
      console.log("The first letter of the name must be capitalized! I am capitalizing now.");
      req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1, req.body.name.length);
      res.json(req.body);
     }
  }

module.exports = middleware; 