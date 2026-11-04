// Exercise 6: Modify Query Parameters
// - Change the query parameter sort to 'desc'
// - Add a new parameter page=3
// - Remove query
// - Print the final URL:
//   https://app.com/search?sort=desc&page=3
// Hint: .searchParams.set(), .searchParams.append(), .searchParams.delete()
//
// Run: node ex6.js

const { URL } = require("url");

const urlStr = 'https://app.com/search?query=node&sort=asc';
const url=new URL(urlStr)
url.searchParams.set("sort","desc")
url.searchParams.delete("query")
url.searchParams.set("page",3)
console.log(url.href);

// write your code here
