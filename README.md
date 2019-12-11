### `React-Exam-Store`

React-Exam-Store is simulating the E-commerce store created for the Softuni Reactjs exam.

There are two levels of access: registered user and guest.

The guest user can see all stored products for sale.
Also, he can see the details of every product and buy it. After buying the product he is redirected to the home(main) page where the info(sales) for the product is already updated.
The guest has an option to choose a category of the product he wants from the navigation bar at the top.


Registered user - after successfully registering the user is redirected to the login page. After a successful login, the user is redirected to the page of his products (which are created from him). The registered user has all possibilities aswell the quest user, but he can also create a product, update (only created products by himself), delete (only created products by himself).

The application is built entirely on the latest JavaScript technologies: React.js (client-side) and node.js -express (server-side).

### `Resolve Dependencies`

When the project is cloned or downloaded, type in the terminal the following in both Server and Client directory:

npm install

### `Run the webserver` 

The app uses nodemon. To run the webserver type in terminal the following:

   nodemon start

### `Run the React app`

The app uses React on the client-side. To run the React app type in the second terminal the following:

    cd client
    npm start

By default, the app is running on:

   localhost:3000