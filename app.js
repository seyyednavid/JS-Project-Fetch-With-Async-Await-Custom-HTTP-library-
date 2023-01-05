const http = new EasyHTTP();

//  Get users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//  User Data
const data = {
  name: "navid hejazi",
  username: "navidhejazi",
  email: "navidhejazi@yahoo.com",
};

// Create user
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// update user
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// delete user
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/*
The console may not show the results in order. it is because of 
working with external API.
*/
