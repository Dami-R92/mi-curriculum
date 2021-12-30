let redes = document.getElementById("redes")


const REDES = [{
        name: "Twitter",
        img: "OMG",
    },
    {
        name: "Facebook",
        img: "OMG",
    },
    {
        name: "Silvo",
        img: "OMG",
    }
];

let mostrarRedes = () => {
    REDES.map(i => {
        redes.innerHTML += (`
        <div id="${i.name}" >
        <h1>${i.name}</h1>
        <p>${i.img}</p>
        </div>

        `);
        let  (i.name) = document.getElementById(`"${i.name}"`);
        console.log(i.name);
    }
    
    )
    console.log("Ya quedo puerco");
}

