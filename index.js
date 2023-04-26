const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthday")
const resultE1 = document.getElementById("result")

function calculateAge() {
    const birthdayValue = birthdayE1.value;

    if (birthdayValue === "") {
        alert("please enter your birthday");
    }
    else {
        let age = getAge(birthdayValue);
        console.log(age);
        resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;


    }
    function getAge(birthdayValue) {
        const currentDate = new Date()
        const birthdayDate = new Date(birthdayValue)

        const month = currentDate.getMonth() - birthdayDate.getMonth();

        const Age = currentDate.getFullYear() - birthdayDate.getFullYear() - ((currentDate.getMonth() < birthdayDate.getMonth() || (currentDate.getMonth() == birthdayDate.getMonth() && currentDate.getDate() < birthdayDate.getDate())) ? 1 : 0);

        return Age;


        console.log(Age);

    }
}



btnE1.addEventListener("click", calculateAge)

