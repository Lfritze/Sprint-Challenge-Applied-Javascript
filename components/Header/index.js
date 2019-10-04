// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//initial commit for Emily
// test
function Header() {}

const headerContainer = document.querySelector('.header-container')
    headerContainer.appendChild(Header());

// Here I am going in a specific order for waterfall purposes...
//Define, class, content, structure
function Header () {
    // DEFINE --- .createElement()
    const header = document.createElement('div'); // parent
        const date = document.createElement('span'); //kid
        const title = document.createElement('h1'); // kid
        const temp = document.createElement('span'); // kid
     
    //Add Class classList.add()
    // header, date, temp
    header.classList.add('header'); // parent
        date.classList.add('date'); // kid
        temp.classList.add('temp'); // kid

    //Set content .textContent =
    title.textContent = 'Lambda Times';
    date.textContent = 'Smarch 28, 2019';
    temp.textContent = '98°';

    // structure .appendChild()  // append children to const header
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}