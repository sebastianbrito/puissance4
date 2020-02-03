jQuery.fn.puissance4 = function (puissance4) {

    function JSalertCoulor() {
        swal("Le deux Joueur il y a le meme couleur!!! :-(", "", "error");
    }
    function JSalertMatchnull() {
        swal("Match Null!!! :-(", "", "error");
    }
    function JSalertGagnant(j) {
        swal(j, "Vous aves gagne, Good job!!! :D", "success");
    }
    if (puissance4.color_j1 === puissance4.color_j2) {
        JSalertCoulor()
    } else {
        function genererTableau(col, row) {
            var jeu = new Array();
            for (a = 0; a < col; a++) {
                jeu[a] = new Array();
                for (b = 0; b < row; b++) {
                    jeu[a][b] = 0;
                }
            }
            return jeu;
        }

        joueur1 = 1;
        joueur2 = 1;

        function dernierPosVide(col, jeu) {
            indexVide = null;
            for (index = 0; index < puissance4.row; index++) {
                if (jeu[col][index] == 0) {
                    indexVide = index;
                }
            }
            return indexVide;
        }

        function remplir(col, jeu, position, jeur) {
            jeu[col][position] = jeur;
        }
        function annuler(col, jeu, position, jeur) {
            jeu[col][position] = jeur;
        }

        function verifVertical(col, position, jeur, jeu) {
            count = 0;

            for (let index = position; index < jeu[0].length; index++) {
                if (jeu[col][index] == jeur && count < 5) {
                    count++;
                    if (count == 4) {
                        return true;
                    }
                } else {
                    count = 0;
                    return false;
                }
            }
        }

        function checkColorUpGauche(col, row, jeu, jeur) {
            // Une fonction qui compte le nombre de couleur equivalente vers la droite
            let count = 0;
            for (index = 0; index < 4; index++) {
                pos_col = col + index;
                pos_row = row - index;
                if (pos_row < 0 || pos_col > jeu[0].length)
                    break;
                if (jeu[pos_col][pos_row] == jeur)
                    count++;
            }
            return count;
        }
        function diagoGaucheDown(col, row, jeur, jeu) {
            let count = 0;
            let pos_col = 0;
            let pos_row = 0;
            let win = false;
            for (let index1 = 0; index1 < 4; index1++) {
                pos_col = parseInt(col) - parseInt(index1);
                pos_row = parseInt(row) + parseInt(index1);

                if (pos_col < 0 || pos_row >= jeu.length) {
                    break;
                }
                if (checkColorUpGauche(pos_col, pos_row, jeu, jeur) == 4) {
                    win = true;
                    break;
                }
                if (jeu[pos_col][pos_row] == jeur) {
                    count++;
                }
                if (count == 4) {
                    win = true;
                    break;
                }
            }
            return win;
        }

        function checkColorUpDroite(col, row, jeu, jeur) {
            // Une fonction qui compte le nombre de couleur equivalente vers la droite
            let count = 0;

            for (index = 0; index < 4; index++) {
                pos_col = col - index;
                pos_row = row - index;
                if (pos_row < 0 || pos_col < 0)
                    break;

                if (jeu[pos_col][pos_row] == jeur)
                    count++;
            }
            return count;
        }

        function diagoDroiteDown(col, row, jeur, jeu) {
            let count = 0;
            let pos_col = 0;
            let pos_row = 0;
            let win = false;
            for (let index1 = 0; index1 < 4; index1++) {
                pos_col = parseInt(col) + parseInt(index1);
                pos_row = parseInt(row) + parseInt(index1);

                if (pos_col >= jeu.length || pos_row > jeu.length) {
                    break;
                }
                if (checkColorUpDroite(pos_col, pos_row, jeu, jeur) == 4) {
                    win = true;
                    break;
                }
                if (jeu[pos_col][pos_row] == jeur) {
                    count++;
                }
                if (count == 4) {
                    win = true;
                    break;
                }
            }
            return win;
        }

        function verifDiagonal(col, row, jeur, jeu) {
            if (diagoGaucheDown(col, row, jeur, jeu) === true) {
                return true;
            } else if (diagoDroiteDown(col, row, jeur, jeu) === true) {
                return true;
            }
            return false;
        }

        function checkColor(pos_col, row, jeu, jeur) {
            // Une fonction qui compte le nombre de couleur equivalente vers la droite
            let count = 0;
            for (index = 0; index < 4; index++) {
                col = pos_col + index;
                if (col >= jeu.length)
                    break;
                if (jeu[col][row] == jeur)
                    count++;
            }
            return count;
        }

        function horizontal(col, row, jeur, jeu) {
            pos_col = 0;
            gauche = col;
            corte = parseInt(jeu.length) - parseInt(col);
            while (gauche >= 0) {
                for (index = 0; index < 4; index++) {
                    pos_col = parseInt(gauche) - parseInt(index);
                    if (pos_col < 0)
                        break;
                    if (checkColor(pos_col, row, jeu, jeur) == 4) {
                        return true;
                    }
                }
                gauche--;
            }
            return false;
        }

        function checkArrayPleine(jeu) {
            trouve = 0;
            for (let index1 = 0; index1 < puissance4.col; index1++) {
                for (let index2 = 0; index2 < puissance4.row; index2++) {
                    if (jeu[index1][index2] == 0) {
                        trouve = 1;
                    }
                }
            }
            if (trouve == 1) {
                return false
            } else {
                return true;
            }
        }

        function jeurCourant(j, color) {
            newDivJoueurCourant.textContent = j;
            newDivJoueurCourant.setAttribute("style", 'background-color: ' + color + '; border-radius: 5px; padding: 10px; color: white; font-weight: bold; text-align: center;');
            div_jouer_courant.setAttribute("style", 'visibility: visible; z-index: -1; background-color: ' + color + '!important; border-radius: 100%;');
            par++;
        }

        function tableauRestart() {
            $('#tableau').find(".slot").each(function () {
                $(this).css("visibility", "hidden")
            })
        }

        function bouttonAnnulerMouve(j) {
            button_back.textContent = "Annuler mouve " + j;

        }
        par = 1;
        annuler_mov = 0;
        j1 = "Joueur 1";
        j2 = "Joueur 2";
        jeu = genererTableau(puissance4.col, puissance4.row);
        annuler_mouve = false;

        function mostrarJeton(j, par) {
            nomdudiv = j + a + position;
            x = document.getElementById(nomdudiv);
            x.style.visibility = "visible";
            remplir(a, jeu, position, j);
            par++;
        }

        function verifGagnante(j) {
            if (verifVertical(a, position, j, jeu)) {
                return true;
            }
            if (horizontal(a, position, j, jeu)) {
                return true;
            }
            if (verifDiagonal(a, position, j, jeu)) {
                return true;
            }
            return false;
        }
        function clickHere(nomdudiv) {
            var coordonnees = nomdudiv.toString();
            a = 0;
            b = 0;
            if (coordonnees.length == 1) {
                a = "0";
            } else {
                a = coordonnees.substring(1, 2);
                b = coordonnees.substring(2, 3);
            }
            lastA = a
            if (dernierPosVide(a, jeu) != null) {
                lastPar = par;
            }
            win = false;
            if (dernierPosVide(a, jeu) != null) {
                position = dernierPosVide(a, jeu);
                lastPosition = position;
            }

            if ((par % 2) != 0) {

                mostrarJeton(j1);
                if (verifGagnante(j1)) {
                    newDivj1.textContent = j1 + ' : ' + joueur1++;
                    JSalertGagnant(j1);
                    win = true;
                }
                button_back.style.backgroundColor = puissance4.color_j1;
                jeurCourant(j2, puissance4.color_j2);
                annuler_mouve = true;
                bouttonAnnulerMouve(j1);
                if (win) {
                    jeu = genererTableau(puissance4.col, puissance4.row);
                    button_back.style.backgroundColor = 'green';
                    button_back.textContent = "Annuler mouve";
                    tableauRestart();
                }
            } else {
                mostrarJeton(j2);
                if (verifGagnante(j2)) {
                    newDivj2.textContent = j2 + ' : ' + joueur2++;
                    JSalertGagnant(j2);
                    win = true;
                }
                button_back.style.backgroundColor = puissance4.color_j2;
                jeurCourant(j1, puissance4.color_j1);
                annuler_mouve = true;
                bouttonAnnulerMouve(j2);
                if (win) {
                    jeu = genererTableau(puissance4.col, puissance4.row);
                    button_back.style.backgroundColor = 'green';
                    button_back.textContent = "Annuler mouve";
                    tableauRestart();
                }
            }
        }

        if (checkArrayPleine(jeu)) {
            JSalertMatchnull();
            jeu = genererTableau(puissance4.col, puissance4.row);
            button_back.style.backgroundColor = 'green';
            tableauRestart();
        }
    }

    for (a = 0; a < puissance4.col; a++) {
        let coloneShtroumfDiv = document.createElement("div")
        coloneShtroumfDiv.className = "col";
        for (b = 0; b < puissance4.row; b++) {

            nomdudiv = a.toString() + b.toString();

            let div = document.createElement("div");
            div.id = "v" + nomdudiv;
            div.className = "cell";
            div.addEventListener("click", function () {
                clickHere(div.id, puissance4.col, puissance4.row);
            });

            coloneShtroumfDiv.appendChild(div);

            let div2 = document.createElement("div");
            div2.setAttribute("style", 'position:absolute; visibility: hidden; z-index: -1; background-color: ' + puissance4.color_j1 + '; border-radius: 100%;');

            div.appendChild(div2);
            div2.draggable = false;
            div2.className = "slot";
            div2.setAttribute("id", j1 + nomdudiv);

            let div3 = document.createElement("div");
            div3.setAttribute("style", 'position:absolute; visibility: hidden; z-index: -1; background-color: ' + puissance4.color_j2 + '; border-radius: 100%;');
            div.appendChild(div3);
            div3.draggable = false;
            div3.className = "slot";
            div3.setAttribute("id", j2 + nomdudiv);

        }
        document.querySelector("#tableau > div").appendChild(coloneShtroumfDiv);
    }

    let button = document.createElement("button");

    button.addEventListener('click', function () {
        redemarrer();
        jeu = genererTableau(puissance4.col, puissance4.row);
        button_back.style.backgroundColor = 'green';
        button_back.textContent = "Annuler mouve";
        $('#tableau').find(".slot").each(function () {
            $(this).css("visibility", "hidden")
        })
    });

    function redemarrer() {
        button.textContent = "Redemarrer";

    }
    redemarrer();

    let button_back = document.createElement("button");
    button_back.textContent = "Annuler mouve";

    button_back.addEventListener('click', function () {
        if (annuler_mouve && !win) {
            if (par > lastPar) {
                par--;
            }
            if ((par % 2) != 0) {
                jeurCourant(j1, puissance4.color_j1);
                par--;
            } else {
                jeurCourant(j2, puissance4.color_j2);
                par--;
            }
            x.style.visibility = "hidden";
            annuler(lastA, jeu, lastPosition, "0");
            annuler_mouve = false;
        }
    })

    document.querySelector("#tableau > div + div").innerHTML = `
            <div class="donnes"><h3>Score :</h3></div>
            <div id='player1' style= "background-color: ${puissance4.color_j1}"></div>
            <div id='player2' style= "background-color: ${puissance4.color_j2}"></div>
            <div class="donnes"><h3>Jouer Courant :</h3></div>
            <div id='Joueur_courant' style= ""></div>
            <div id='jeton_courant' style=''></div>
            <div id='annuler' style=''></div>
            <div id='redemarrer' style=''></div>`;
    document.querySelector("#annuler").appendChild(button_back);
    document.querySelector("#redemarrer").appendChild(button);
    button_back.style.backgroundColor = 'green';

    var newDivj1 = document.createElement("div");
    newDivj1.textContent = j1 + ' : 0';

    var newDivJoueurCourant = document.createElement("div");
    newDivJoueurCourant.textContent = j1;
    newDivJoueurCourant.setAttribute("style", 'background-color: ' + puissance4.color_j1 + '; border-radius: 5px; padding: 10px; color: white; font-weight: bold; text-align: center;');

    var currentDivJCourant = document.getElementById('Joueur_courant');
    currentDivJCourant.appendChild(newDivJoueurCourant);

    var newDivJetonCourant = document.createElement("div");
    var currentDivJetonCourant = document.getElementById('jeton_courant');
    currentDivJetonCourant.appendChild(newDivJetonCourant);

    div_jouer_courant = document.createElement("div");
    div_jouer_courant.className = "Joueur_1";
    div_jouer_courant.setAttribute("style", 'visibility: visible; z-index: -1; background-color: ' + puissance4.color_j1 + '; border-radius: 100%;');
    div_jouer_courant.className = "courant";
    newDivJetonCourant.appendChild(div_jouer_courant);

    var currentDiv = document.getElementById('player1');
    currentDiv.appendChild(newDivj1);

    var newDivj2 = document.createElement("div");
    newDivj2.textContent = j2 + ' : 0';

    var currentDiv = document.getElementById('player2');
    currentDiv.appendChild(newDivj2);
    document.write("</div>");
}

$('#tableau').puissance4({ col: 7, row: 6, color_j1: "purple", color_j2: "turquoise" });
// $('#tableau').puissance4({ col: 4, row: 2 });