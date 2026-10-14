// const h1 = document.getElementById("text")
// const h2 = document.querySelector("#h2")
// const ul = document.querySelector("#list")
// const button = document.querySelectorAll("button")
// // const button1 = document.querySelector("#button1")
// const body = document.querySelector("body")

// h1.textContent = "helo"
// h1.style.color = "red"

// console.log(h2);


// const li = document.createElement("li")
// li.textContent = "apple"

// ul.append(li)

// button[0].onclick = () =>{
//     body.style.backgroundColor = "green"
// }
// button1.onclick = () => {
//     body.style.backgroundColor ="red"
// }

// let red = prompt("hello")

// if(red === "black") {
//     body.style.backgroundColor  = red
//     body.style.color = "white"
// } else {
//         body.style.backgroundColor  = red
//     body.style.color = "black"
// }


// for (let index = 0; index <= button.length; index++) {
//     button[index].onclick = () => {
//     if (button[index].textContent === "black"){
//         body.style.backgroundColor = button[index].textContent
//         body.style.color = "white"
//     }else{
//                 body.style.backgroundColor = button[index].textContent
//         body.style.color = "black"
//     }
// }    
// }


// const color = document.getElementById("color")
// const btn = document.getElementById("text")
// const h1 = document.getElementById("info")
// const input = document.getElementById("input")
// const body = document.querySelector("body")

// console.log(btn);


// btn.onclick = () =>{
//     // h1.textContent = input.value
//     // body.style.backgroundColor = color.value
//     console.log("hello");

// } 

const div = document.getElementById("users")
const input = document.getElementById("search")


const users = [
    {
        id: 1,
        name: "Mirbek",
        age: 10,
        email: "mirbek@gmail.com"
    },
    {
        id: 2,
        name: "ALi",
        age: 20,
        email: "ali@gmail.com"
    },
    {
        id: 3,
        name: "Isa",
        age: 15,
        email: "isa@gmail.com"
    },
    {
        id: 4,
        name: "Bayastan",
        age: 19,
        email: "bayastan@gmail.com"
    }
]

// users.push("hello")
// users.pop()
// users.shift()
// users.unshift("Bayastan")

const renderUsers = (filteredUsers) => {

    if (filteredUsers.length === 0) {
        div.innerHTML = `<p class="no-results">Пользователи не найдены</p>`;
        return;
    }

    div.innerHTML = filteredUsers.map(item => `
        <div class="card">
            <h2>${item.name}</h2>
            <h3>${item.email}</h3>
        </div>
    `).join('');
};

input.oninput = () => {
    const query = input.value.toLowerCase().trim();

    if (query === "") {
        div.innerHTML = users.map(item => `
        <div class="card">
            <h2>${item.name}</h2>
            <h3>${item.email}</h3>
        </div>
    `)
        return;
    }

    const matchedUsers = users.filter((item) => {
        return item.name.toLowerCase().includes(query);
    });

    console.log();
    renderUsers(matchedUsers);
};




