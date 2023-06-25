function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

   if(html.classList.contains("light")) {

    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem atribuida ao modo light")
    
   } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil aplicada pelo usuário")
   }

  /* Para treino, o código em etapas
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
*/

}