
// Recupera il punteggio da localStorage o inizializzalo se non esiste
let punteggio = JSON.parse(localStorage.getItem('punteggio')) || {
    vittorie: 0,
    sconfitte: 0,
    pareggi: 0
};

function pietra() {
    const numeroRandom = Math.random();
    let computer = '';
    let risultato = '';
    
    if (numeroRandom >= 0 && numeroRandom < 1/3) {
        computer = 'pietra';
    } else if (numeroRandom >= 1/3 && numeroRandom < 2/3) {
        computer = 'carta';
    } else {
        computer = 'forbici';
    }

    if (computer === 'pietra') {
        risultato = 'pareggio';
    } else if (computer === 'carta') {
        risultato = 'hai perso';
    } else if (computer === 'forbici') {
        risultato = 'hai vinto';
    }

    // Aggiorna il punteggio in base al risultato
    if (risultato === 'hai vinto') {
        punteggio.vittorie += 1;
    } else if (risultato === 'hai perso') {
        punteggio.sconfitte += 1;
    } else if (risultato === 'pareggio') {
        punteggio.pareggi += 1;
    }

    // Salva il punteggio aggiornato in localStorage
    localStorage.setItem('punteggio', JSON.stringify(punteggio));

    updateScore()
    move('pietra', computer);
    result(risultato);

}


function carta(){
    const numeroRandom = Math.random();
    let computer = ''
    let risultato = ''
    
    if(numeroRandom >=0 && numeroRandom < 1/3){
    
         computer = 'pietra'
    }else if(numeroRandom >=1/3 && numeroRandom < 2/3){

         computer = 'carta' 
    }else if(numeroRandom >=2/3 && numeroRandom < 1){

          computer = 'forbici'
         }
    
         if(computer === 'carta'){
        risultato = 'pareggio'
    }else if ( computer ==='forbici'){
        risultato ='hai perso'
    }else if (computer === 'pietra'){
        risultato = 'hai vinto'
    }
    if(risultato === 'hai vinto'){
        punteggio.vittorie += 1
    }else if (risultato === 'hai perso'){
        punteggio.sconfitte += 1
    }else if (risultato === 'pareggio'){
        punteggio.pareggi += 1
    }
    localStorage.setItem('punteggio', JSON.stringify(punteggio));
    updateScore()
    move('carta', computer);
    result(risultato);

   
}

function forbici(){
    const numeroRandom = Math.random();
    let computer = ''
    let risultato = ''
    
    if(numeroRandom >=0 && numeroRandom < 1/3){
    
         computer = 'pietra'
    }else if(numeroRandom >=1/3 && numeroRandom < 2/3){

         computer = 'carta' 
    }else if(numeroRandom >=2/3 && numeroRandom < 1){

          computer = 'forbici'
         }
    
         if(computer === 'forbici'){
        risultato = 'pareggio'
    }else if ( computer ==='pietra'){
        risultato ='hai perso'
    }else if (computer === 'carta'){
        risultato = 'hai vinto'
    }
    if(risultato === 'hai vinto'){
        punteggio.vittorie += 1
    }else if (risultato === 'hai perso'){
        punteggio.sconfitte += 1
    }else if (risultato === 'pareggio'){
        punteggio.pareggi += 1
    }
    localStorage.setItem('punteggio', JSON.stringify(punteggio));

    updateScore()
    move('forbici', computer);
    result(risultato);
    

}

function resetta(){
    punteggio.vittorie = 0
    punteggio.sconfitte = 0
    punteggio.pareggi = 0
    localStorage.removeItem('punteggio')
   updateScore()
}



        function updateScore(){
            document.querySelector('.score').innerHTML= ` vittorie: ${punteggio.vittorie}
        sconfitte: ${punteggio.sconfitte}
        pareggi : ${punteggio.pareggi}`
        }

        function move(mossaGiocatore, mossaComputer) {
            const immagini = {
                pietra: 'https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1faa8.png',
                carta: 'https://attic.sh/654vsivfebz3lu6ibgedzfttwnnc',
                forbici: 'https://attic.sh/o6o6ijtdy3zyuhlav8nwg2recoof'
            };
        
            document.querySelector('.moves').innerHTML = `
                <p> 
                    TU: <img src="${immagini[mossaGiocatore]}" alt="${mossaGiocatore}" class="player-move">
                    COMPUTER: <img src="${immagini[mossaComputer]}" alt="${mossaComputer}" class="computer-move">
                </p>
            `;
        }
        
        
        // function result(risultato) {
        //     document.querySelector('.result').innerHTML = `
        //          ${risultato}
        //     `;
        // }

        function result(risultato) {
            const resultElement = document.querySelector('.result');
            
            // Rimuovi le classi precedenti
            resultElement.classList.remove('vittoria', 'sconfitta', 'pareggio');
            
            // Aggiungi la classe in base al risultato
            if (risultato === 'hai vinto') {
                resultElement.classList.add('vittoria');
            } else if (risultato === 'hai perso') {
                resultElement.classList.add('sconfitta');
            } else if (risultato === 'pareggio') {
                resultElement.classList.add('pareggio');
            }
        
            // Aggiorna il testo del risultato
            resultElement.innerHTML = `${risultato}`;
        }

        // let messaggi = [
        //     "ti amo pulcina",
        //     "sei una patatina",
        //     "voglio abbracciarti",
        //     "e abbracciarmi a te",
        //     "ancora amo?",
        //     "dai basta",
        //     "e va bene!",
        //     "ti amooooooooooo",
        // ];
        
        // let clickCounter = 0;
        
        // function amo() {
        //     // Calcola l'indice del messaggio corrente usando il modulo per farlo ciclare
        //     let indiceMessaggio = clickCounter % messaggi.length;
        //     let messaggio = messaggi[indiceMessaggio];
        
        //     const nuovoParagrafo = document.createElement('p');
        //     nuovoParagrafo.innerText = messaggio;
        
        //     // Aggiunge uno stile personalizzato al testo
        //     nuovoParagrafo.style.color = "white";
        //     nuovoParagrafo.style.fontSize = "20px";
        //     nuovoParagrafo.style.marginTop = "20px";
        
        //     document.body.appendChild(nuovoParagrafo);
        
        //     // Incrementa il contatore per il prossimo click
        //     clickCounter++;
        // }
        