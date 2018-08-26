/* Index.html js */

const SECONDS_IN_A_DAY = 24 * 60 * 60;
const X_BUTTON_MODAL = '<button onclick="closeModal()" class="modal-x">✕</button>';
const MODAL_HTML = {
    'discord': `
    <h1>Discord</h1>
    Find me on Discord! My user is Bowserinator#2734.

    <br><br>
    <a href="https://discordapp.com/channels/@me"
       class="brighten-hover pointer"
       style="
           background-color: #7289da;
           text-decoration: none;
           padding: 10px;
           color: white;
       ">Open Discord Now</a>
    `,
    'irc': `
    <h1>IRC</h1>
    Find me on IRC! I'm usually on ##lazy-valoran@irc.freenode.net

    <br><br>
    <a href="https://webchat.freenode.net?channels=%23%23lazy-valoran&uio=d4"
       class="brighten-hover pointer"
       style="
           background-color: #6b7d93;
           text-decoration: none;
           padding: 10px;
           color: white;
       ">Open Webchat Now</a>
    `,
    'incomplete': `
    <h1>Incomplete!</h1>
    This section of the website is under construction, please
    come back later.
    `
};

// Copyright
document.getElementById('year').innerHTML = (new Date()).getFullYear();

// Website up time
let startDate = new Date("8/26/2018");
let seconds = ((new Date()).getTime() - startDate.getTime()) / 1000;

document.getElementById('time1').innerHTML = Math.floor(seconds / SECONDS_IN_A_DAY) + ' days';


// First website up time
startDate = new Date("1/31/2016");
seconds = ((new Date()).getTime() - startDate.getTime()) / 1000;

document.getElementById('time2').innerHTML = Math.floor(seconds / SECONDS_IN_A_DAY) + ' days';


// Modal displays
function changeModal(value) {
    let modal = document.getElementById('modal');
    modal.innerHTML = X_BUTTON_MODAL + MODAL_HTML[value];
    modal.style.display = 'inline';
}

function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}
