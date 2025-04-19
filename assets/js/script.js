document.addEventListener('DOMContentLoaded', () => {
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

        if (daysCard) flipCard(daysCard, days);
        if (hoursCard) flipCard(hoursCard, hours);
        if (minutesCard) flipCard(minutesCard, minutes);
        if (secondsCard) flipCard(secondsCard, seconds);
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
        });

        topFlip.addEventListener('animationend', () => {
            topFlip.remove();
        });

        bottomFlip.addEventListener('animationend', () => {
            bottomHalf.innerText = time;
            bottomFlip.remove();
        });

        flipCard.appendChild(topFlip);
        flipCard.appendChild(bottomFlip);
    }

    // Second countdown script for May 3rd
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const today = new Date();
    let targetYear = today.getFullYear();

    const may3 = new Date(`${targetYear}-05-03T00:00:00`);
    if (today > may3) {
        targetYear += 1;
    }

    const countDown = new Date(`${targetYear}-05-03T00:00:00`).getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        if (distance < 0) {
            document.getElementById("headline").innerText = "Time's up!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
    }, 1000);
});

/*START MARQUEE JS*/
let lastTime = (new Date()).getTime(),
    currentTime = 0,
    counter = 0;

const myScroller1 = new SuperMarquee(
    document.getElementById("supermarquee1"),
    {
        "content": `
        *CTF partner * &nbsp;&nbsp;
      <img src="assets/img/partner/1.png" alt="Icon1" style="height:50px; vertical-align:middle;"> &nbsp;
       *Hosting partner* &nbsp;&nbsp;
      <img src="assets/img/partner/Gotmyhost Logo Raw.png" style="height:50px; vertical-align:middle;"> &nbsp;
     *Outreach Partner*
      <img src="assets/img/partner/2.png" style="height:50px; vertical-align:middle;"> &nbsp;
        *Knowledge Partner*
       <img src="assets/img/partner/main_large.png" style="height:50px; vertical-align:middle;"> &nbsp;
    
      *Club Partners* &nbsp;&nbsp;
      <img src="assets/img/partner/p1.png" style="height:70px; vertical-align:middle;"> &nbsp;
       *Club Partners* &nbsp;&nbsp;
      <img src="assets/img/partner/p2.png" style="height:70px; vertical-align:middle;"> &nbsp;
       *Club Partners* &nbsp;&nbsp;
      <img src="assets/img/partner/p3.png" style="height:70px; vertical-align:middle;"> &nbsp;
       *Club Partners* &nbsp;&nbsp;
      <img src="assets/img/partner/p4.jpg" style="height:70px; vertical-align:middle;"> &nbsp;
       *Club Partners* &nbsp;&nbsp;
      <img src="assets/img/partner/p5.png" style="height:70px; vertical-align:middle;"> &nbsp;
       *Club Partners* &nbsp;&nbsp;
      <img src="assets/img/partner/p6.png" style="height:70px; vertical-align:middle;"> &nbsp;
       *Media Partner:* &nbsp;&nbsp;
      <img src="assets/img/partner/p7.png" style="height:70px; vertical-align:middle;"> &nbsp;
     
       *Skill Builder Partner:* &nbsp;&nbsp;
      <img src="assets/img/partner/p9.png" style="height:70px; vertical-align:middle;"> &nbsp;


    `
    }
);

function loop() {
    window.requestAnimationFrame(loop);
    currentTime = (new Date()).getTime();
    let delta = (currentTime - lastTime) / 9000;
    myScroller1.setPerspective("{ \"rotateY\" : " + 30 * Math.sin(delta) + " }");
}

loop();
/* END MARQUEE JS */
/*END MARQUEE JS*/
