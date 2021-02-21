const ulGuestList = document.querySelector('.js-guest-list')
const inputAddGuest = document.querySelector('.js-input')
const btnSubmit = document.querySelector('.js-btn-submit')

{/* <li class="guest-list__item js-guest">
<span class="js-guest-name">Aiz Lima</span>
<a href="#" class="btn-delete btn js-btn-delete">Delete</a>
</li> */}

let guests = [
    { id: 1, name: "Aiz Lima" },
    { id: 2, name: "Lucas Araujo" },
    { id: 3, name: "Rany Marques" },
]

function createItemsGuestList(guestName) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const a = document.createElement("a")

    li.classList.add("guest-list__item")
    a.classList.add("btn-delete", "btn", "js-btn-delete")

    a.innerHTML = "Delete"
    span.innerHTML = guestName

    li.appendChild(span)
    li.appendChild(a)
    ulGuestList.appendChild(li)
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
        const newId = guests[guests.length - 1].id + 1
        const newGuest = { id: newId, name: inputValue }
        guests.push(newGuest)
        cleanGuestsRender()
        renderGuestList(guests)
    }
}

btnSubmit.onclick = addGuest

renderGuestList(guests)