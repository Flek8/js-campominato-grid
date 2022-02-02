let bottone = document.getElementById('play');

bottone.addEventListener('click', play)

function play() {

    numeroBombe = 16;

    let grid = document.getElementById('grid');

    grid.innerHTML = '';
    document.getElementById('target').innerHTML = '';
    let difficolta = document.getElementById('difficolta').value;

    let numeroCelle
    if (difficolta == 'easy') {
        numeroCelle = 100;
    } else if (difficolta == 'hard') {
        numeroCelle = 81
    } else if (difficolta == 'crazy') {
        numeroCelle = 49
    } else {
        alert('ERRORE!')
    }

    creaCampo(numeroCelle);


    function gestioneClick() {
        this.classList.add('clicked');
        this.removeEventListener('click', gestioneClick)
    }


    function creaCampo(numeroCelle) {

        let cellePerRiga = Math.sqrt(numeroCelle);

        for (let i = 1; i <= numeroCelle; i++) {
            
            let node = document.createElement('div');
            
            node.classList.add('square');
            
            let dimensione = `calc(100% / ${cellePerRiga})`;
            node.style.height = dimensione;
            node.style.width = dimensione;

            node.innerText = i;

            node.addEventListener('click', gestioneClick)
            
            grid.appendChild(node);
        }    
    }
}