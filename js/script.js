document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".btn-menu")
  const nav = document.querySelector(".nav-wrapper")
  const menu = document.getElementById("menu")

  // Função para fechar o menu
  function closeMenu() {
    nav.classList.remove("active")
    const icon = btnMenu.querySelector("i")
    icon.classList.remove("ri-close-line")
    icon.classList.add("ri-menu-line")
    btnMenu.setAttribute("aria-expanded", "false")
    document.documentElement.removeEventListener("click", handleClickOutside)
    document.documentElement.removeEventListener(
      "touchstart",
      handleClickOutside
    )
    document.body.style.overflow = "" // Permite a rolagem
  }

  // Função para detectar cliques fora do menu
  function handleClickOutside(event) {
    if (!nav.contains(event.target) && !btnMenu.contains(event.target)) {
      closeMenu()
    }
  }

  // Função para abrir/fechar o menu
  function toggleMenu(event) {
    event.stopPropagation() // Evita que o clique propague para o HTML e feche imediatamente o menu

    nav.classList.toggle("active")

    // Alternar ícone (menu aberto/fechado)
    const icon = btnMenu.querySelector("i")
    if (nav.classList.contains("active")) {
      icon.classList.remove("ri-menu-line")
      icon.classList.add("ri-close-line")
      btnMenu.setAttribute("aria-expanded", "true")

      // Ativar a detecção de cliques fora do menu para fechá-lo
      document.documentElement.addEventListener("click", handleClickOutside)
      document.documentElement.addEventListener(
        "touchstart",
        handleClickOutside
      )
      document.body.style.overflow = "hidden" // Previne a rolagem
    } else {
      icon.classList.remove("ri-close-line")
      icon.classList.add("ri-menu-line")
      btnMenu.setAttribute("aria-expanded", "false")

      // Remover a detecção de cliques fora do menu
      document.documentElement.removeEventListener("click", handleClickOutside)
      document.documentElement.removeEventListener(
        "touchstart",
        handleClickOutside
      )
      document.body.style.overflow = "" // Permite a rolagem
    }
  }

  // Adicionar event listeners para abrir/fechar o menu
  btnMenu.addEventListener("click", toggleMenu)
  btnMenu.addEventListener("touchstart", toggleMenu)

  // Fechar o menu ao clicar em um link do menu
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu()
    })
  })
})
