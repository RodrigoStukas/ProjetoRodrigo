function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")
// pegar a imagem //
const img = document.querySelector("#profile img")
// substituição da imagem //
if(html.classList.contains('light')) {
  // se tiver light mode, adicionar a imagem light mode//
   img.setAttribute("src", "./Assets/avatar-light.png")
   img.setAttribute("alt",
     "Foto de Rodrigo Stukas, rosto neutro, com óculos e fundo com cor em um veículo")
  } else {
  // se tiver sem light mode, manter imagem normal//
  img.setAttribute("src", "./Assets/avatar-night.png")
  img.setAttribute("alt",
    "Foto de Rodrigo Stukas, rosto neutro, com óculos e fundo sem cor somente preto e branco em um veículo")
  }
  
}