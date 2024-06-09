const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0NTg0OTM3MzYxNTc0NzdjNjMwYjdjYzg2OGZmNCIsInN1YiI6IjY2NjVmODNhODU3ZWVlZjRkN2E2N2FjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aq8KtKRthJTmm1JXzgkadPyyrj3TLfQAgBttB5k7PrQ'
    }
  };

const apiKey = '1e0458493736157477c630b7cc868ff4';

function getNowPlayingMovies() {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&', options)
        .then(response => response.json())
        .then(data => {
          const movies = data.page;
          console.log("Now Playing Movies: " + movies)
        })
        .catch(error => console.error(error));
}

function getUpcomingMovies() {
    return fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&', options)
        .then(response => response.json())
        .then(data => {
        const movies = data.page;
        console.log("Upcoming Movies: " + movies)
        })
        .catch(error => console.error(error));
}

function getPopularMovies() {
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&', options)
        .then(response => response.json())
        .then(data => {
        const movies = data.page;
        console.log("Popular Movies: " + movies)
        })
        .catch(error => console.error(error));
}


async function getTopRatedMovies() {
    let page = 1;
    while(true) {
        response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options);
        data = await response.json();
        if(data.total_pages === page) {
            break;
        };
        page++;
        console.log(page);
    };
    console.log(page);
}


getTopRatedMovies();



//https://api.themoviedb.org/3/genre/movie/list?language=en - get list of genres
