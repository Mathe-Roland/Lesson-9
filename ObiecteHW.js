/*Scrie o functie care creaza un obiect */

function obiect(titlu, porții, ingrediente) {
    let reteta = {
       titlu: titlu,
       porții: porții,
       ingrediente: ingrediente
    };
 
    console.log(`Menu: ${reteta.titlu}`);
    console.log(`Portii: ${reteta.porții}`);
    console.log(`Ingrediente: ${reteta.ingrediente}`);
 
 }
 
 let newObiect = obiect("Pizza", 2, ["sunca", "cas", "ketchup"]);
//exercitiu 2
 //stergem o proprietate
 
function obiectFaraProprietate(){
    let obiect={
        a:1,
        b:2,

    }

    return obiect
}

let obiectFProprietate=obiectFaraProprietate()

delete obiectFProprietate.b

console.log(obiectFProprietate)

        
let esteCitit = true;


let carti=[
    {
        titlu:"Mândrie și Prejudecată",
        autor:"Jane Austen",
        an: 1813,
        esteCitit:false,
        
    },
    {
        titlu:"1984",
        autor:"George Orwell",
        an:1949,
        esteCitit:true   
     },
    {
        titlu:"Crimă și pedeapsă",
        autor:"Fyodor Dostoevsky",
        an:1866,
        esteCitit:false

    },
    {
        titlu:"Hobbit",
        autor:"J.R.R. Tolkien",
        an:1937,
        esteCitit:false
    }


]
    


function carti2() {
    for (let i = 0; i < carti.length; i++) {
        console.log(`Carte ${carti[i].titlu} de ${carti[i].autor}`);
        if (carti[i].esteCitit === true) {
            console.log(`Ai citit deja "${carti[i].titlu}" de ${carti[i].autor}`);
        } else {
            console.log(`Trebuie să citești "${carti[i].titlu}" de ${carti[i].autor}`);
        }
    }
}


carti2()