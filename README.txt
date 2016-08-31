this is a simple NodeJS web server/client application that displays a list of music albums.

1. `<host>:3000/api/albums` acts as your API endpoint and returns a JSON encoded list of music albums
2. `<host>:3000/` renders the album list in the client browser
3. Each item in the list include:
    - a small preview of the album's cover (`imageURLSmall`)
    - the title of the album
    - artist
    - year of the album
4. Clicking an album item displays the full cover image (`imageURLLarge`)
5. `<host>:3000/albums` has content similar to `<host>:3000/` but with multiple views of the album list (e.g. "list view", "grid view", "carousel view", etc)

Run the application

1. set up the server
2. open the url "http://localhost:3000" or "http://localhost:3000/albums" in the broswer.
