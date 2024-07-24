// // const jwt = require("jsonwebtoken");

// // const isAuthenticated = async (req, res, next) => {
// //   const token = req.cookies.token;
// //   console.log(token);
// //   if (!token) {
// //     return res.status(401).send("tzimga kirishngiz kk");
// //   }
// //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// //     if (err) {
// //       return res.status(403).send("xatolik auth api dan");
// //     }
// //     req.user = user;
// //     next();
// //   });
// // };

// // module.exports = { isAuthenticated };
// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");

// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies;
//     // console.log("is authenticaddan keldi bu token" + "         " + token);

//     jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(401).send({
//           success: false,
//           message: "login bilan kirishingiz kerak tzimga",
//         });
//       } else {
//         req.body.id = decode.id;
//         // req.user = await userModel.findById(decoded.id);
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "please provide auth token",
//       error,
//     });
//   }
// };
// module.exports = { isAuthenticated };

// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// // const ErrorResponse = require("../utils/errorResponse");

// // check if user is authenticated
// const isAuthenticated = async (req, res, next) => {
//   const { token } = req.cookies;

//   // make sure token exists
//   if (!token) {
//     return next("login bn kirishingiz", 401);
//   }

//   try {
//     //verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await userModel.findById(decoded.id);
//     next();
//   } catch (error) {
//     return next("login bn kirishingiz kk", 401);
//   }
// };
// module.exports = { isAuthenticated };

const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ message: "Not Authenticated! 0011" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    req.userId = payload.id;
    req.user = await userModel.findById(decoded.id);

    next();
  });
};

module.exports = { isAuthenticated };
