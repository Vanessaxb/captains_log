const React = require('react');

function New() {
    return (
        <div>
            <h1>New Log</h1>
            <form action="/logs" method="POST">
                <input type="text" name ="title" required />
                <input type="textarea" name="entry" required />
                <input type="checkbox" name="shipIsBroken" value="false"/>
                <input type="submit" value="Post" />
            </form>
        </div>
    )

}
module.exports = New