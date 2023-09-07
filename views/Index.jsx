const React = require("react");

function Index({ logs }) {
  return (
  <div>
    <a href="/logs/new">Create New Log</a>
  <h1>Index Page</h1>
  {logs.map((log) => {
    return (
        <ul>
        {log.title}
        </ul>
    )
  })}
  </div>
)}

module.exports = Index;
