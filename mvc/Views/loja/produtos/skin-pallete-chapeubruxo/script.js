document.addEventListener("DOMContentLoaded", () => {

    const svgObject = document.getElementById("svgObject")  

    // Cadastrar skins
    const config = [
        {
           id: "cor-1",
           event: "input", 
           default: "",
           query: ".detalhe"
        },
        {
            id: "cor-2",
            event: "input",
            default: "",
            query: ".sombra"
        },
        
        {
            id: "btnWhite",
            event: "click",
            default: "#ffb6b6",
            query: ".skin"
        },
        {
            id: "btnBlack",
            event: "click",
            default: "#570000",
            query: ".skin"
        }
    ]


    svgObject.addEventListener("load", () => {
        let svgDoc = svgObject.contentDocument;

        config.forEach(option => {
            document.getElementById(option.id).addEventListener(option.event, (e) => {
                let input = option.default == "" ? e.target.value : option.default
                let elemento = svgDoc.querySelectorAll(option.query)
            
                elemento.forEach(el => el.setAttribute("fill",input));
            })
        })
    })
})

