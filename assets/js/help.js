const help_boton = document.getElementById('help-boton')
const help_close = document.getElementById('help-close')
const help_card = document.getElementById('help-card')
const help_title = document.getElementById('help-title')

function closeHelp() {
	help_card.style.display = "none";
	help_card.setAttribute("aria-hidden", "true");
	help_boton.focus()
}

function openHelp() {
	help_card.style.display = "flex";
	help_card.setAttribute("aria-hidden", "false");
	help_title.focus()
}

help_boton.addEventListener("click", openHelp)
help_close.addEventListener("click", closeHelp)