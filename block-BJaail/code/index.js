class Booklist{
    constructor(root,list =[]){
        this.books = list;
        this.root = root;
    }

    add(title,author,id){
        let book = new Book(title,author,id);
        this.books.push(book);
        this.createLibraryUI();
        return this.books.length;
    }

    handleDelete(id){
        console.log("hi");
        let index = this.books.findIndex((book) => book.id === id);
        this.books.splice(index,1);
        this.createLibraryUI();
        return this.books.length;
    }

    createLibraryUI(){
        this.root.innerHTML = "";
        this.books.forEach((book)=>{

            let ui = book.createUI();
            console.log(ui);
            let spanD = ui.querySelector("span");
            console.log(spanD);
            spanD.addEventListener("click",(()=> console.log("hey")));
            this.root.append(book.createUI());
        })
    }
}

class Book{
    constructor(title,author,id){
        this.title = title;
        this.author =author;
        this.id = id;
        this.isRead = false;
    }

    handleCheck(){
        this.isRead = !this.isRead;
        this.createUI();
    }

    createUI(){
        let li = document.createElement("li");

       

        let h3 = document.createElement("h3")
        h3.innerText =this.title;

        let p =document.createElement("p");
        p.innerText = this.author;

        let h5 = document.createElement("h5");
        h5.innerText = this.id;
        let input = document.createElement("input");
        input.type = "checkbox"
        input.checked = this.isRead;
        input.classList.add("toggle");
        if(this.isRead == true){
            input.classList.add("inactive");
        }

        input.addEventListener("click",this.handleCheck.bind(this))

        let span = document.createElement("span");
        span.innerText = "X";
        span.classList.add("delete");

        li.append(h3,p,h5,input,span);

        return li;

    }
}


let form = document.querySelector("form");
let Booklist1 = new Booklist(document.querySelector("ul"));

// Booklist1.add("Champak","Jethalal",123456);
// Booklist1.add("Champak2","Jethalal2",123458);
let elm = form.elements;

function handleEvent(event){
    event.preventDefault();
    Booklist1.add(elm.title.value,elm.author.value,elm.serial.value);
    elm.title.value ="";
    elm.author.value ="";
    elm.serial.value ="";

    console.log(elm.title.value,elm.author.value,elm.serial.value)
    
}

form.addEventListener("submit",handleEvent);