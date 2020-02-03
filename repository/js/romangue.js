let tableau = document.querySelector("#tableau")
let cells = tableau.querySelectorAll(".cell")

// diagonal vers la gauche en commencant par le bas
function diagonalVersLaGaucheParLeBasRed() {
	cells[41].click()  // ici red
	cells[31].click()	// yellow
	cells[31].click()	//ici //red
	cells[26].click() // yellow	
	cells[26].click()	 // red
	cells[0].click() // yellow
	cells[26].click()	// ici red
	cells[21].click() // yellow
	cells[18].click() // red
	cells[19].click() //  yellow
	cells[20].click() // red
	cells[0].click() // yellow
	cells[21].click()	// ici
}

// diagonal vers la gauche en commencant par le bas
function diagonalVersLaGaucheParLeHautRed() {
	cells[21].click()	// red
	cells[21].click()	// yellow
	cells[21].click()	// red
	cells[0].click()	// yellow
	cells[21].click()	// ici red
	cells[26].click()	// yellow
	cells[26].click()	// red
	cells[0].click()	// yellow
	cells[26].click()	// ici red
	cells[31].click()	// yellow
	cells[31].click()	// ici red
	cells[0].click()	// yellow
	cells[41].click()  // ici red
}


// diagonal vers la gauche en commencant par le bas
function diagonalVersLaDroiteParLeBasRed() {
	cells[5].click()  // ici red
	cells[10].click()	// yellow
	cells[10].click()  // ici red
	cells[15].click()  // yellow
	cells[15].click()  // red
	cells[0].click()  // yellow
	cells[15].click()  // ici red
	cells[20].click()  // yellow
	cells[20].click()  // red
	cells[20].click()  // yellow
	cells[20].click()  // red
}

// diagonal vers la gauche en commencant par le bas
function diagonalVersLaDroiteParLeHautRed() {
	cells[20].click()  // red
	cells[20].click()  // yellow
	cells[20].click()  // red
	cells[41].click()  // yellow
	cells[20].click()  // red
	cells[15].click()  // yellow
	cells[15].click()  // red
	cells[41].click()  // yellow
	cells[15].click()  // ici red
	cells[10].click()	// yellow
	cells[10].click()  // ici red
	cells[41].click()  // yellow
	cells[0].click()  // ici red
}


let button1 = document.createElement("button")
button1.textContent = "diagonalVersLaGaucheParLeBasRed"
button1.addEventListener("click", diagonalVersLaGaucheParLeBasRed)
document.body.appendChild(button1)

let button2 = document.createElement("button")
button2.textContent = "diagonalVersLaGaucheParLeHautRed"
button2.addEventListener("click", diagonalVersLaGaucheParLeHautRed)
document.body.appendChild(button2)

let button3 = document.createElement("button")
button3.textContent = "diagonalVersLaDroiteParLeBasRed"
button3.addEventListener("click", diagonalVersLaDroiteParLeBasRed)
document.body.appendChild(button3)

let button4 = document.createElement("button")
button4.textContent = "diagonalVersLaDroiteParLeHautRed"
button4.addEventListener("click", diagonalVersLaDroiteParLeHautRed)
document.body.appendChild(button4)