const ulGuestList = document.querySelector('.js-guest-list')
const inputAddGuest = document.querySelector('.js-input')
const btnSubmit = document.querySelector('.js-btn-submit')

let guests = JSON.parse(localStorage.getItem("guests")) || []

function createItemsGuestList(guestName) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const a = document.createElement("a")

    a.setAttribute("href", "#")

    li.classList.add("guest-list__item")
    a.classList.add("btn-delete", "btn", "js-btn-delete")

    a.innerHTML = "Delete"
    span.innerHTML = guestName

    li.appendChild(span)
    li.appendChild(a)
    ulGuestList.appendChild(li)

    a.onclick = () => {
        const htmlGuest = a.previousElementSibling.innerText
        guests = guests.filter((guest) => {
            return guest.name != htmlGuest
        })
        saveGuests()
        a.parentElement.remove()
    }
}


function renderGuestList(guests) {
    guests.forEach(guest => {
        createItemsGuestList(guest.name)
    });
}

function cleanGuestsRender() {
    const guests = document.getElementsByClassName('guest-list__item')
    const guestsArray = Array.from(guests)
    if (guestsArray.length > 0) {
        guestsArray.forEach((guest) => {
            guest.remove()
        })
    }
}

const addGuest = (e) => {
    e.preventDefault()
    const inputValue = inputAddGuest.value
    if (!!inputValue) {
        console.log(guests.length)
        let newId = 0
        if (guests.length == 0) {
            newId = 1
        } else {
            newId = guests[guests.length - 1].id + 1
        }
        const newGuest = { id: newId, name: inputValue }
        guests.push(newGuest)
        cleanGuestsRender()
        saveGuests()
        renderGuestList(guests)
    }
}

function saveGuests() {
    localStorage.setItem("guests", JSON.stringify(guests))
}

btnSubmit.onclick = addGuest
renderGuestList(guests)