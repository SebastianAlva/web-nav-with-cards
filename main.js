
let counter = 0;
async function showComments(){
    await(fetch('https://dummyjson.com/products'))
    .then(res => res.json())
    .then(json => {
        /* createCards(json) */
        try{
            const cards_container = document.querySelector(".cards_container");
            const products = json.products;
            console.log(products[0].description)
            const card = document.createElement("card");
            const descInfo= document.createElement ("p");
            
            descInfo.textContent = `${products[counter].description}`;
            card.appendChild(descInfo);
            cards_container.appendChild(card)
        }catch(e){
            console.log("ERROR :ella es fanatica de lo sensual")
        }
    })
}         
/**
 * @description: is used to create each target in the webpage
 * @param {*} obj 
 */
/* function createCards(obj){
    const cards_container = document.querySelector(".cards_container");
    const products = obj.products;
    for(product of products){
        const card = document.createElement("card");
        const descInfo= document.createElement ("p");
        descInfo.textContent = `${product.description}`
        card.appendChild(descInfo);
        cards_container.appendChild(card)
    }
}

function displayOneCard(obj){
    
    
} */
showComments();