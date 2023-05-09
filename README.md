#### jschlosser-project
# Instajam - The Playlist Playground
## The best place to post and share YOUR favorite playlist, in a unique and simple way. Instajam, the playlist playground.

Have you ever wanted to listen to new music but you don't know where to start looking? Instajam is the web app for you!

Instajam is the best way to find new music, by browsing playlists in a fun and simplistic way! First, users create playlists on Spotify, and then hop over to the Playlist Playground to share their creation with the community. This includes adding a fun name and description of the playlist, as well as a link to their Spotify playlist.

Instajam, is meant to be a fun, free, and functional environment where users can let their creative juices flow. Want to share a unique vibe or express a certain feeling with 10 or more songs? Join the Instajam community!  

The perfect music sharing platform for you and all of your friends:
* Easy to find new music annd post the tunes you love <3
* Posts are saved to a database so they are here to stay
* The best platform to turn your love for music into something more

## Installation  

### Dependencies:
 1. Postgres 
 2. Node.js

## Database setup
You can run the web app with the following commands: 
1. psql -U postgres
2. *use your postgres password*
3. CREATE DATABASE instajam
4. \c instajam postgres
5. CREATE TABLE post (title VARCHAR(255), body TEXT, link VARCHAR(255));
* Use "select * from post;" to see all posts saved to the table
* Use "delete from post;" to delet all posts in the table

### Quick start setup
1. After installing and configuring Node.js and Postgres clone this git repo
> git clone https://github.com/MaristGormanly/jschlosser-project
> cd instajam
2. Make a copy of the .env.example file called .env in the project home directory 
3. In the .env file: 
    * Edit Postgres settings to connect to your database server
    * Save your .env file
4. Navigate into postServices.js file server -> services -> postService
    * Edit "YOUR_PG_PASS" to your Postgres password
5. Install dependencies 
> npm i
6. Start the service
> npm start

## Output ##

- [user] initialized
- [userController] initialized
- [userRoute] initialized
- [post] initialized
- [postService] initialized
- [postController] initialized
- [postRoute] initialized
- Marist Chatter listening on port 1337!

Navigate your web browser to http://localhost:PORT/home (port is 1337) if you are running on your local machine.

### Current Features
1. Styled pages including Home, About Us, Contact Us, Careers and Feed
2. Styled signup and login forms that use JavaScript functions like password hide and same password check
3. Working feed to post title, description and link to spotify
4. Functional database to save posts

### Future Updates
1. Add users and save login information
2. Make posts look like example post
3. Add images to post
4. Client-side JavaScript for field check on post submission, to prevent null posts
5. Fix small bugs like tab and Instjam logo on feed page
6. Make posts come up on refresh of page