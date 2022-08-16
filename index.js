// // Add your code here
// const practiceObj = {
//     name: "Jeremey",
//     email: "jeremeyhansen@yahoo.com"
// };

// const submitData = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(practiceObj),
// }

// fetch("http://localhost:3000/users", submitData)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => alert("uh oh"), console.log(error))
    // this.name = name;
    // this.email = email;






function submitData(name, email) {
    const ourRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name: `${name}`, email: `${email}`}),
    }
    return fetch("http://localhost:3000/users", ourRequest)
    .then(res => res.json())
    .then(object => document.body.innerHTML = object["id"]) 
    .catch(err => document.body.innerHTML = err["message"]);
}
