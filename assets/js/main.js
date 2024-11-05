// Esta función recibe decimales y los devuelve como string,
// en formato de moneda $xx,xxx.xx
function parse_money(amount) {
	splited = amount.toString().split(".");
	if (splited.length == 2) {
		decimal = "." + splited[1]
	} else {
		decimal = ".00"
	}
	integer = ""
	for (var i = splited[0].length - 1, j = 1; i >= 0; i--, j++) {

		integer = splited[0][i] + integer

		if (j % 3 === 0 && i !== 0) {
			integer = "," + integer
		}
	}
	parsed_amount = integer+decimal
	return parsed_amount;
}


concepto_input = document.getElementById('concepto')
monto_input = document.getElementById('monto')

nombre_input = document.getElementById('nombre')
monto_ingreso_input = document.getElementById('monto_ingreso')

tabla_gastos = document.getElementById('tabla-gastos')
tabla_ingresos = document.getElementById('tabla-ingresos')

ingresos = []
ingreso_total = 0
gastos = 0
cantidad_de_gastos = 0

document.getElementById("form-gasto").addEventListener("submit", function(e){
	e.preventDefault()
	if (concepto_input.value != "" && monto_input.value != '') {
		
		tabla_gastos.innerHTML += `
			<tr class="fila">
				<td class="concepto">${concepto_input.value}</td>
				<td class="monto">$${parse_money(monto_input.value)}</td>
			</tr>
		`;

		gastos += parseFloat(monto_input.value)
		concepto_input.value = ""
		monto_input.value = ""
		prorratear()
		concepto_input.focus()
		
		cantidad_de_gastos++
		if (cantidad_de_gastos > 3) {
			document.getElementById('tabla-gastos-container').classList.add("tabla-extendida")
		}


	}
});

document.getElementById("form-ingresos").addEventListener("click", function(e){
	e.preventDefault()
	if (nombre_input.value != "" && monto_ingreso_input.value != '') {
		
		tabla_ingresos.innerHTML += `
			<tr class="fila">
				<td class="concepto">${nombre_input.value}</td>
				<td class="monto">$${parse_money(monto_ingreso_input.value)}</td>
			</tr>
		`;

		ingreso_total += parseFloat(monto_ingreso_input.value)
		ingresos.push([nombre_input.value, parseFloat(monto_ingreso_input.value)])
		nombre_input.value = ""
		monto_ingreso_input.value = ""
		prorratear()
		nombre_input.focus()

		if (ingresos.length > 3) {
			document.getElementById('tabla-ingresos-container').classList.add("tabla-extendida")
		}
	}
});

function prorratear () {
	document.getElementById("ingreso-total-texto").innerText = "Ingreso total: $" + parse_money(ingreso_total)
	document.getElementById("gasto-total-texto").innerText = "Gasto total: $" + parse_money(gastos)

	if (ingresos.length > 0 && gastos > 0) {

		gradient = "conic-gradient(";
		porcentaje_anterior = 0;
		i = 0;
		colores = ["#cddc39", "#ff6347", "#6C63FF", "#4caf50", "#2196f3", "#ec407a", "#ffeb3b"]
		document.getElementById("tabla-aportes").innerHTML = ``;
		ingresos.forEach((ingreso => {
			porcentaje = ingreso[1] * 100 / ingreso_total
			porcentaje = Math.round(porcentaje * 100) / 100;

			gradient += `${colores[i]} ${porcentaje_anterior}% ${porcentaje_anterior + porcentaje}%,`;
			porcentaje_anterior = porcentaje_anterior + porcentaje
			console.log(`Persona: ${ingreso[0]} - Ingreso: ${ingreso[1]} - Porcentaje: ${porcentaje}% - Aporte: ${parse_money(gastos * porcentaje/100)}`)
			document.getElementById("tabla-aportes").innerHTML +=`
			<tr class="fila" style="color: ${colores[i]}">
				<td class="concepto">${ingreso[0]}</td>
				<td class="monto">$${parse_money(Math.round(gastos * porcentaje/100))} (${porcentaje}%)</td>
			</tr>`;

			i++;
		}))

		if (ingresos.length > 4) {
			document.getElementById("tabla-aportes-container").classList.add("tabla-extendida")
		}

		document.getElementById("grafico").style.background = gradient.substr(0, gradient.length -1) + ")";
		console.log(gradient)
	}
}
