const React = require("react");

function Show({ log }) {
  console.log(log.title);
  return (
    <div>
      <a href="/logs">Back to List of Comments</a>
      <div>{log.title}</div>
      <div>{log.entry}</div>
      <div>{log.shipIsBroken ? "Ship is broken" : ""}</div>
      <div>{new Date(log.createdAt).toLocaleDateString()}</div>
    </div>
  );
}

module.exports = Show;
