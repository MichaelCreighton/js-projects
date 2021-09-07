const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// using async/await
async function generateJoke() {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            "Accept": "application/json"
        }
    })
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}



// same using .then()
// function generateJoke() {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             "Accept": "application/json"
//         }
//     }).then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })

// }