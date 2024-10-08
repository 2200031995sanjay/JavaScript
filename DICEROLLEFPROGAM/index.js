function rolldice(){

    const noofdice = document.getElementById("noofdice").value;
    const diceresults = document.getElementById("diceresults")
    const diceimaes = document.getElementById("diceimaes")

    const values = []
    const images = []

    for(let i = 0 ; i <noofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);


    }

    diceresults.textContent = `dice:${values.join(',')}`;
    diceimaes.innerHTML = images.join('');

}