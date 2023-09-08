const React = require("react");

function Edit({ log }) {
  return (
    <div className="p-4">
      <script src="https://cdn.tailwindcss.com"></script>
      <h2 className="text-2xl font-semi-bold mb-4">Edit Log</h2>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        Tittle:{" "}
        <input
          type="text"
          name="title"
          defaultValue={log.title}
          required
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        Comment:
        <textarea
          name="entry"
          defaultValue={log.body}
          required
          className="border border-gray-300 rounded-md p-2 w-full"
        ></textarea>
        Is Ship Broken? {""} {""}
        <input
          type="checkbox"
          name="shipIsBroken"
          defaultChecked={log.shipIsBroken}
          className="border border-gray-300 rounded-md p-2"
        />
        <br/>
        <button
          type="submit"
          value="Update"
          className="bg-blue-500 text-whote rounded-md px-4 py-2 hover:bg-blue-600"
        > Update </button>
      </form>
    </div>
  );
}

module.exports = Edit;
