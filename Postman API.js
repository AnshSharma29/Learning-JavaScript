const myHeaders = new Headers();
myHeaders.append("api-key", "postmanrulz");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://library-api.postmanlabs.com/books", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
