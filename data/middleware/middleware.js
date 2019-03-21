function middleware(req, res) {
    if (req.name[0] == req.name[0].toUpperCase()) {
      res.json(req);
    } else {
      console.log("The first letter of the name must be capitalized! I am capitalizing now.");
      req.name[0] = req.name[0].toUpperCase();
      res.json(req);
     }
  }

export default middleware; 