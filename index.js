const greeting = document.getElementById("greeting")

greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"

const username = window.prompt("What's your name?", "Louisa May")
greeting.innerHTML = "Welcome to my website, " + username + "!"
