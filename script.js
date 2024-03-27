


const btn=document.getElementById("btn");

 //fetch part

async function fetchdata(Url) {
    try{
    const response = await fetch(Url);
    const data = await response.json();
    console.log(data);
    if(!response.ok){
        throw new Error("could not fetch data");

    }
   //img part

    const imaObj=data.sprites.front_default;
    const img=document.getElementById("pokeImg");
    img.src=imaObj;
   
    const stats = data.stats;

    img.style.opacity = 0; 
        img.style.display = "block";
        setTimeout(() => { img.style.opacity = 1; }, 100);


    //stats numbers and line 

    stats.forEach(stat => {
        const statName = stat.stat.name;
        const baseStat = stat.base_stat;

        
        if (statName === "hp") {
            const hp = document.getElementById("hp");
            const hpL=document.getElementById("hpL")
            hp.textContent = `Hp: ${baseStat}`;
            hpL.style.width=baseStat+'px'
        } else if (statName === "attack") {
            const attack = document.getElementById("power");
            const poL=document.getElementById("poL")
            poL.style.width=baseStat+'px'
            attack.textContent = `Power: ${baseStat}`;

        } else if (statName === "defense") {

            const defense = document.getElementById("defence");
            const defL=document.getElementById("defL")
            defL.style.width=baseStat+'px'
            defense.textContent = `Defense: ${baseStat}`;
        }

    });




}
    catch(error){
        console.error(error);
    }

}

//button click
btn.addEventListener("click", async ()=>{
    const continerstats=document.getElementById("stats-continer");
    continerstats.style.display="block"
    const input=document.getElementById("pokemonName").value.toLowerCase();
const Url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    fetchdata(Url);


})

//input enter key click
const inputField = document.getElementById("pokemonName");
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click(); 
    }
});










