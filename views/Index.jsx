const React = require("react");

function Index({ logs }) {
  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <a href="/logs/new" className="text-blue-500 hover:underline mb-4 block">
        Create New Log
      </a>
      <h1 className="text-2xl font-semibold mb-4">All Logs</h1>
      {logs.map((log) => {
        return (
            <div className="flex flex-col">
          <li key={log._id} className="mb-4 border rounded-lg p-4">
            <a
              href={`/logs/${log._id}`}
              className="text-blue-500 hover:underline text-lg mb-10"
            >
              {log.title}
            </a>
            <br />
            <a
              href={`/logs/${log._id}/edit`}
              className="text-white p-2 hover:text-blue-500 hover:underline my-4 bg-blue-500 rounded-md border-none cursor-pointer"
            >
              Edit Log
            </a>
            {""}
            <br/>
            <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
              <input
                type="submit"
                value="Delete"
                className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 cursor-pointer"
              ></input>
            </form>
          </li>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Index;
