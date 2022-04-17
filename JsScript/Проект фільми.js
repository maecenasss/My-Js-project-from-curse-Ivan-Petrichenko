const numberOfFilms = +prompt("Сколько фильмов Ви уже посмотрели", " ");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотрених фільмов?", " "),
      b = prompt ("На сколько оцените его?", " "),
      c = prompt("Один из последних просмотрених фільмов?", " "),
      d = prompt("На сколько оцените его?", " ");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
