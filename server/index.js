require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");
const Sequelize = require("sequelize");
const epilogue = require("epilogue"),
  ForbiddenError = epilogue.Errors.ForbiddenError;
const app = express();
const port = 3001;

// session support is required to use ExpressOIDC
app.use(
  session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
  })
);

const oidc = new ExpressOIDC({
  issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
  client_id: process.env.OKTA_CLIENT_ID,
  client_secret: process.env.OKTA_CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URL,
  scope: "openid profile",
  routes: {
    callback: {
      path: "/authorization-code/callback",
      defaultRedirect: "/admin"
    }
  }
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);
app.use(cors());
app.use(bodyParser.json());

app.get("/home", (req, res) => {
  res.send('<h1>Welcome!!</div><a href="/login">Login</a>');
});

app.get("/admin", oidc.ensureAuthenticated(), (req, res) => {
  res.send("Admin page");
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/home");
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

// sets up a connection with the SQLite database and tells the database to store the data in ./db.sqlite
const database = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  operatorsAliases: false
});

//  defines the model which represents a table in the database.
const Post = database.define("posts", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

// initializes Epilogue with Express.js app
epilogue.initialize({ app, sequelize: database });

// created the REST resource, now have the create, list, read, update, and delete controllers with corresponding endpoints for post.
const PostResource = epilogue.resource({
  model: Post,
  endpoints: ["/posts", "/posts/:id"]
});

// added an authentication check to all CRUD routes
PostResource.all.auth(function(req, res, context) {
  return new Promise(function(resolve, reject) {
    if (!req.isAuthenticated()) {
      res.status(401).send({ message: "Unauthorized" });
      resolve(context.stop);
    } else {
      resolve(context.continue);
    }
  });
});

database.sync().then(() => {
  oidc.on("ready", () => {
    app.listen(port, () => console.log(`TTJJ Server listening on port ${port}!`));
  });
});

oidc.on("error", err => {
  // An error occurred while setting up OIDC
  console.log("oidc error: ", err);
});

app.listen(port, () => console.log(`TTJJ Server listening on port ${port}!`));
