const UserModel = require('../model/userModel');
const userModel = new UserModel();

exports.login = (req, res) => {
    res.render("login", { layout: false });
  };

  exports.userlogin = async (req, res) => {
    const { username, password } = req.body;
    console.log(" reqBody", req.body)
    
    try {
        const oldUser = await userModel.getUserByUserName(username);
       // console.log("oldUser",oldUser[0].password);
        if (oldUser && oldUser[0].password === password) {
            req.session.authenticated = true;
            req.session.userId = oldUser[0].userId;
            req.session.username = username;
            res.redirect("/main");
          
        } else {
            req.session.authenticated = false;
            res.write("<h1>Wrong Authentication!</h1> <iframe src=\"https://giphy.com/embed/OPU6wzx8JrHna\" width=\"480\" height=\"398\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/spongebob-squarepants-sad-OPU6wzx8JrHna\"></a></p><a href=\"/\">Go back</a>")
        }
        console.log(req.session);
    } catch (error) {
        console.error("Error in userlogin:", error);
        res.redirect("/login?error=true");
       
        
    }
}

exports.logout=(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
          console.error('Error destroying session:', err);
        } else {
          console.log('Session destroyed successfully');
          res.redirect('/');
        }
      });
}