const React = require("react");

function Index({ logs }) {
  return (
    <div>
      <a href="/logs/new">Create New Log</a>
      <h1>Index Page</h1>
      {logs.map((log) => {
        return(

            <li key={log._id}>
            <a href={`/logs/${log._id}`}> 
            {log.title}
            </a>
        </li>
     )
     })}
    </div>
  );
}

module.exports = Index;
