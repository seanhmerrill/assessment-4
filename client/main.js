//ADD THE ABILITY TO DELETE A FORTUNE

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
// const deleteBtn = document.getElementById("deleteButton")

const form = document.getElementById("contact")
const firstName = document.getElementById("name_first")
const lastName = document.getElementById("name_last")
const email = document.getElementById("email")
const message = document.getElementById("message")

const eraseForm = document.getElementById("receipt")
const deletedFortune = document.getElementById("deletedFortune")

const contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
}

const erase = {
    deletedFortune: deletedFortune.value,
}

// let fortunes = [
// "An acquaintance of the past will affect you in the near future" ,
// "An agreeable romance might begin to take on the appearance" ,
// "An important person will offer you support" ,
// "An inch of time is an inch of gold" ,
// "Any day above ground is a good day",
// ]

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/getfortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
function deleteFortune () {
    console.log("hello world")
    axios.delete("http://localhost:4000/api/receipt/", erase).then(res => {
        alert(res.data);
    }).catch(err => console.log(err))
};
function submitBtn (e) {
    e.preventDefault();

    axios.post("http://localhost:4000/api/contact/", contact).then(res => {
        alert(res.data)
    }).catch(err => console.log(err))
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
eraseForm.addEventListener('submit', deleteFortune)
form.addEventListener('submit', submitBtn)

//ADD THE ABILITY TO DELETE ONE OF THE FORTUNES/COMPLIMENTS AND REPLACE IT WITH YOUR OWN