export function getGenreMovies(allMovies, genre) {
  if (genre === "All Genres") return allMovies;
  return allMovies.filter((movies) => movies.genre.name === genre);
}
