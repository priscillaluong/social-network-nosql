# social-network-nosql

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I have used Express.js for routing, a MongoDB database, and the Mongoose ODM.

[See below](#link-to-walkthrough-video) for a walkthrough video link.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Required Packages:

* [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages are used to connect Express.js API (for Controllers) to a MySQL database (for Models). 
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) to use Handlebars.js for the Views. 
* [dotenv](https://www.npmjs.com/package/dotenv) package enables environment variables to store sensitive data. 
* [bcrypt](https://www.npmjs.com/package/bcrypt) to hash passwords. 
* [moment](https://www.npmjs.com/package/connect-session-sequelize) to format timestamps.

# Screenshots of Application Interaction:

Users are required to sign up and log in to get access to the dashboard, create new posts, comment on/update/delete existing posts. 

* Log in page:

![Deployed Application - Log in page](./assets/images/login.png)

* Once logged in, user is redirected to dashboard where they can view previously created posts, or create a new post:

![Deployed Application - Dashboard](./assets/images/create-btn.png)

* Create a new post:

![Deployed Application - Create New Post](./assets/images/create-new-post.png)

![Deployed Application - Created Post](./assets/images/post-created.png)

* Adding comments to existing posts:

![Deployed Application - Add New Comment](./assets/images/add-comment.png)

![Deployed Application - Comment Added](./assets/images/comment-added.png)

* Editing comments (n.b. users can only edit their own comments and posts):

![Deployed Application - Add New Comment](./assets/images/view-other-comments.png)

![Deployed Application - Comment Added](./assets/images/edit-comment.png)

![Deployed Application - Comment Added](./assets/images/edited-comment.png)

# Link to Walkthrough Video:

[Click here](https://salty-savannah-57008.herokuapp.com/)

### Final note:

_Any feedback to improve code or implement best practice would be appreciated_ 😊
