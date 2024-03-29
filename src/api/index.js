async function getMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=pt-BR&sort_by=popularity.desc',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzc5ZDQzOGMzYmE5YTY2Y2RmMDhlMjc5NmE3NzM3ZiIsInN1YiI6IjY2MDVmNTliZTFmYWVkMDE3ZGY5N2RhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBMIZmUC3gv42EKEl1CkxWycep6XQ24fqE4oxpu4fFk'
      }
    }
  )
  return await response.json()
}
async function getMovieDetails(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  })
  return await response.json()
}
async function getAnimeList() {
  const response = await fetch('https://api.jikan.moe/v4/top/anime', {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  })
  return await response.json()
}

export { getMovies, getMovieDetails, getAnimeList }
