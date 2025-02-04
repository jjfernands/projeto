function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de mayke brito usando óculos e jaqueta preta, sem barba e fundo azul rosa"
    )
  } else {
    // se nao tiver light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de mayke brito usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
