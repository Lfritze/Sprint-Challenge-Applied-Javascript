// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// add it to the DOM with querySelector
const topicsClass = document.querySelector('.topics')

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response.data.topics);
    const topics = response.data.topics;

    topics.forEach(element => {
        topicsClass.appendChild(NewTabComponent(element));
        console.log(element);
    })
})
    .catch (error => {
        console.log("Error...failure to return request", error);
    })

    function NewTabComponent(element) {
        //DEFINE - createElement()
        const tab = document.createElement('div');
        
        //CLASS .classList.add()
        tab.classList.add('tab');

        // CONTENT textContent = ''
        tab.textContent = element;

        return tab;
    }