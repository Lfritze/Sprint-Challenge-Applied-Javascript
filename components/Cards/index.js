
// from index.html
// <!-- CARDS CONTAINER, PLACE ARTICLE CARDS HERE -->
//   <div class="cards-container">
//   </div>
// query select this

const cardsContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        const articleData = response.data.articles
        for(programmaticIndex in articleData) {
            console.log(programmaticIndex);
            console.log(articleData[programmaticIndex]);

            articleData[programmaticIndex].forEach((element) => {
                console.log(element);
                cardsContainer.appendChild(CreateCardFunction(element))
            })
        }
    })
    .catch (error => {
        console.log("Error - no data returned", error);
    })

function CreateCardFunction(item) {
    //DEFINE  .createElement()
    // indented to display parent/child flow
    const cardDiv = document.createElement('div');
        const headline = document.createElement('div');
            const author = document.createElement('div');
                const imgContainer = document.createElement('div');
                    const img = document.createElement('img');
            const span = document.createElement('span');            
    //CLASS .classList.add()
    cardDiv.classList.add('card');
        headline.classList.add('headline');
            author.classList.add('author');
                imgContainer.classList.add('img-container');

    //CONTENT .textContent =, .src =
    headline.textContent = item.headline // headline from console log
    img.src = item.authorPhoto // authorPhoto from console log
    span.textContent = item.authorName // authorName from console log

    //STRUCTURE .appendChild() // we are getting this from DEFINE (see above)
    cardDiv.appendChild(headline);
        cardDiv.appendChild(author);
            author.appendChild(imgContainer);
                imgContainer.appendChild(img);
            author.appendChild(span);

    return cardDiv;
}

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

 // cardDiv
        //headline
            //author
                //img-container
                    // img
                //span