require('dotenv').config()

const express = require('express')   // Importing the express

const app = express()

const port = 3000

const my_github_data = {
  "login": "Techlead-ANKAN",
  "id": 97699244,
  "node_id": "U_kgDOBdLFrA",
  "avatar_url": "https://avatars.githubusercontent.com/u/97699244?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Techlead-ANKAN",
  "html_url": "https://github.com/Techlead-ANKAN",
  "followers_url": "https://api.github.com/users/Techlead-ANKAN/followers",
  "following_url": "https://api.github.com/users/Techlead-ANKAN/following{/other_user}",
  "gists_url": "https://api.github.com/users/Techlead-ANKAN/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Techlead-ANKAN/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Techlead-ANKAN/subscriptions",
  "organizations_url": "https://api.github.com/users/Techlead-ANKAN/orgs",
  "repos_url": "https://api.github.com/users/Techlead-ANKAN/repos",
  "events_url": "https://api.github.com/users/Techlead-ANKAN/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Techlead-ANKAN/received_events",
  "type": "User",
  "site_admin": false,
  "name": "ANKAN MAITY",
  "company": null,
  "blog": "",
  "location": "14/1, Verner Lane, Belgharia, Kolkata - 700056, India. ",
  "email": null,
  "hireable": null,
  "bio": "Python | Tkinter | Pursued Diploma in CST at Techno Main Polytechnic Salt Lake(TMPSL) | Pursuing B.Tech in CSE at Heritage Institute of Technology ( HIT )",
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2022-01-13T19:17:36Z",
  "updated_at": "2024-08-17T13:53:26Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("ankan_twitter.com");
})

app.get('/login', (req, res) => {
    res.send("<h1>This is the login page.</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Youtube Page.</h2>")
})

app.get('/github', (req, res) => {
    res.json(my_github_data);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})