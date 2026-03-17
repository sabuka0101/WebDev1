const movies = [
  { title: "Batman", year: 2022, description: "this is movie about bats" },
  { title: "Avatar", year: 2009, description: "this is movie about blue guys" },
  { title: "Inception", year: 2010, description: "this is deep movie" },
];

const container = document.getElementById("container");

for (i = 0; i < movies.length; i++) {
  container.innerHTML += `<div id='card'><h3>${movies[i].title}</h3>
  <p>Release Date:${movies[i].year}</p>
  <p>${movies[i].description}</p
  </div>`;
}
