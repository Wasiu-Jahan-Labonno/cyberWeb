const countToDate = new Date().setHours(new Date().getHours() + 240);
let previous;

setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    if (timeBetweenDates !== previous) {
        flipAllCards(timeBetweenDates);
    }
    previous = timeBetweenDates;
}, 250);

function flipAllCards(time) {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time / 3600) % 24);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);

    const daysCard = document.querySelector('.days > .flip-card');
    const hoursCard = document.querySelector('.hours > .flip-card');
    const minutesCard = document.querySelector('.minutes > .flip-card');
    const secondsCard = document.querySelector('.seconds > .flip-card');

    flipCard(daysCard, days);
    flipCard(hoursCard, hours);
    flipCard(minutesCard, minutes);
    flipCard(secondsCard, seconds);

}

function flipCard(flipCard, time) {
    time = String(time).padStart(2, '0');
    const currentValue = flipCard.querySelector('.top').innerText;

    if (time == currentValue) return;

    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.innerText = currentValue;

    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.innerText = time;

    const topHalf = flipCard.querySelector('.top');
    const bottomHalf = flipCard.querySelector('.bottom');

    topFlip.addEventListener('animationstart', () => {
        topHalf.innerText = time;
    })

    topFlip.addEventListener('animationend', () => {
        topFlip.remove()
    });

    bottomFlip.addEventListener('animationend', () => {
        bottomHalf.innerText = time;
        bottomFlip.remove()
    });

    flipCard.appendChild(topFlip);
    flipCard.appendChild(bottomFlip);
}


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 1000);
})();