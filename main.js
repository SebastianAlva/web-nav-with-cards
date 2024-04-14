let counter = 0;
const cards_container = document.querySelector(".cards_container");
const card = document.createElement("card");
const descInfo = document.createElement("p");
descInfo.className = "description";
const backward = document.createElement("button");
const forward = document.createElement("button");
/**
 * @description:  creates the first slide of the target
 * @returns json file
 */
async function showComments() {
    await (fetch('https://dummyjson.com/products'))
        .then(res => res.json())
        .then(json => {
            try {
                //create the first card
                const products = json.products;
                descInfo.textContent = `${products[counter].description}`;
                backward.textContent = "<";
                forward.textContent = ">";
                card.appendChild(descInfo);
                cards_container.appendChild(card)
                cards_container.appendChild(backward);
                cards_container.appendChild(forward);
                forward.addEventListener("click", () => {
                    if (counter != products.length - 1) {
                        counter++;
                        descInfo.textContent = `${products[counter].description}`

                    } else {
                        counter = 0;

                    }
                }
                );
                backward.addEventListener("click", () => {
                    if (counter != 0) {
                        counter--;
                        descInfo.textContent = `${products[counter].description}`

                    } else {
                        counter = products.length - 1;
                        descInfo.textContent = `${products[counter].description}`
                    }
                });
                return json;
            } catch (e) {
                console.log("ERROR :ella es fanatica de lo sensual")
            }
        })
}
const jsonFile = showComments();