# Google Books Search

An application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books.

## View the deployed application at: https://googlebook-reactapp.herokuapp.com/

## Technologies Used
React JS
MongoDB
Mongoose
Express JS
Node
Axios

## How it works
Users are first directed to the Home page where they can search for any book. Book information is retrived via the publicly available Google Books API.

Upon searching for a book, users will see a list of relevant results. They can click save to save the book to the Saved page. In the back end, the book is saved to the Mongo database.

Users can save as many books as they want. If they then go to the Saved page, they'll not only see books that have been saved by them, but also previous visitor's saved books (it's basically a shared space of saved books).

In either the Home or Saved pages, a user can click on the View Book button. This will redirect them to the Google Books store page where they can either purchase or read a preview of the book.

If a user wants to remove a saved book from the list, they may click the Delete button to remove the book from the page. In the back end, this deletes the document from the Mongo database.

## Installation and Setup Instructions
If you'd like to view the app locally, you may clone down this repository. You will need node, npm, and MongoDB installed globally on your machine.

Installation:

npm install

To Start Server:

npm start

To Visit App:

localhost:3000
