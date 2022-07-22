console.log("This is javaScript");

// Book Function: Represents a book
// Constructor
function book(name, author, publication, price) {
    this.name = name;
    this.author = author;
    this.publication = publication;
    this.price = price;
}

// UI Class: Handle UI Tasks
function display() {
    display.prototype.validate = function(Book){
        if(Book.name.length<2 || Book.author.length<2){
            return false;
        }
        else{
            return true;
        }
    }
    
    display.prototype.add = function (Book) {
        console.log('Adding to UI');
        let book_list = document.getElementById('book_list');
        let uiString = `<tr>
        <td>${Book.name}</td> 
        <td>${Book.author}</td> 
        <td>${Book.publication}</td> 
        <td>${Book.price}</td>
        <td><input type="checkbox" name="read" id="read"></td> 
        <td class="remove" onclick="rem()"> x </td>
        </tr>`;
        book_list.innerHTML += uiString;
    }
    
    display.prototype.clear = function () {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    
    
    display.prototype.show = function(type,  msg){
        let message = document.getElementById('msg');
        message.style.visibility = "visible";
        message.style.height = "40px";
        message.innerHTML = `<h4><strong>Message:</strong> ${type} - ${msg} </h4>`;
        setTimeout(function() {
            message.innerHTML = ``;
            message.style.height = "0px";
            message.style.visibility = "hidden";
        }, 2000);
    }
}

// Event: Remove a book
function rem(){
    document.querySelector('.remove').parentElement.remove();
}


// Event listner: Library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let publication = document.getElementById('publication').value;
    let price = document.getElementById('price').value;
    
    let Book = new book(name, author, publication, price);
    console.log(Book);
    
    let Display = new display();
    
    if(Display.validate(Book)){
        Display.add(Book);
        Display.clear();
        Display.show('Success', 'Your book has been successful added');
    }
    else{
        Display.show('Error', 'You can not add this book');
    }
        e.preventDefault();
}
