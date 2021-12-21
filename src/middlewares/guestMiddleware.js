 function guestMiddleware(req, res, next){
     if (req.session.userLogged){
        return res.redirect('/userdetail');
     }
     next();
 }

 module.exports = guestMiddleware;