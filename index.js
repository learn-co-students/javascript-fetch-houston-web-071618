const app = "I don't do much.";

const token = '77715c69ebb8ceb7a919d11b7916844352e3339a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
