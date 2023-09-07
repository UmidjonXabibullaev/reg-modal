const regBtn = document.querySelector("#reg-btn")
const form = document.querySelector("#form")
const ul = document.querySelector("#site-list")


regBtn.addEventListener("click" , ()=> {
    form.classList.remove("hidden")
    regBtn.classList.add("hidden")
})

document.addEventListener("keydown" , (event)=> {
    if(event.key == "Escape"){
        form.classList.add("hidden")
        regBtn.classList.remove("hidden")
    }
})

const users = []


form.addEventListener("submit" , (event)=> {
    event.preventDefault()
    const imgUrlValue = form.image.value;
    const nameValue = form.name.value;
    const phoneNumberValue = form.number.value;
    const ageValue = form.age.value;
    const genderValue = form.gender.value;
    
    users.push({
        img: imgUrlValue,
        name: nameValue,
        phone: phoneNumberValue,
        age: ageValue,
        gender: genderValue
    })

    updateUI(users);
    
})

function updateUI(users){
    const template = document.createDocumentFragment()
    ul.innerHTML = ""
    users.forEach(user => {
        const li = elementCreator("li" , "site-item");
        const userImg = elementCreator("img" , "item-img")
        const userName = elementCreator("h2" , "item-name")
        const userNumber = elementCreator("h3" , "item-number")
        const userAge = elementCreator("h3" , "item-age")
        const userGender = elementCreator("h3" , "item-gender")

        userImg.setAttribute("src" , user.img)
        userName.textContent = user.name;
        userNumber.textContent ="Tel: " + user.phone;
        userAge.textContent = "Age: " + user.age;
        userGender.textContent = "Gender: " + user.gender
        li.appendChild(userImg)
        li.appendChild(userName)
        li.appendChild(userNumber)
        li.appendChild(userAge)
        li.appendChild(userGender)
        template.appendChild(li)
    });
    ul.appendChild(template)
} 


function elementCreator(elementName , elClass){
    const el= document.createElement(elementName)
    el.classList.add(elClass)
    return el
}