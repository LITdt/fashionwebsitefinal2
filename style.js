const searchinput = document.getElementById('searchinput');
const Searchbutton = document.getElementById('Searchbutton');
const searchresults = document.getElementById('searchresults');

//data to search through

const items=[
    "apron", "Eva", "Rosy", "Jess", "Jessica", "Chloe", "Freja", "belt", "laptop", "laptop case", "pencilcase", "pencil case", "pink", "bag", "pink apron"
];

const searchMap = {
    "apron" : "Brunt.html",
    "belt" : "jess.html",
    "laptop" : "Freja.html",
    "laptop case" : "Freja.html",
    "pencilcase" : "Freja.html",
    "pencil case" : "Freja.html",
    "pink" : "Rosy.html",
    "pink apron" : "Rosy.html",
    "Eva" : "Brunt.html",
    "Jess" : "jess.html",
    "Jessica" : "jess.html",
    "Chloe" : "chloe.html",
    "Freja" : "Freja.html",
    "bag" : "chloe.html"


}

function performSearch() {
    const searchTerm = searchinput.value.toLowerCase();
    searchresults.innerHTML = ""; //This clears previous search results.

    if (searchTerm.trim() === "") {
        return; //If the input is empty, don't show results. 
    }
    const filteredItems = items.filter(item=> 
        item.toLowerCase().includes(searchTerm));

    if(filteredItems.length > 0){
        filteredItems.forEach(item => {
            const li = document.createElement('li');
        li.textContent = item;
        searchresults.appendChild(li);

        });
    
    } else {
        const li = document.createElement('li');
        li.textContent = "No results found.";
        searchresults.appendChild(li);}
    }

    Searchbutton.addEventListener('click', performSearch);
