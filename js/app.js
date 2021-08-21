// For User Image

let thumb = document.getElementById('letter');
let userName = document.getElementById('userName');

thumb.innerHTML = userName.outerText[0];

userName.addEventListener('keypress', function() {
    thumb.innerHTML = userName.outerText[0];
});

// For Sending Messages

let messages = document.getElementById('messages');
let text = document.getElementById('text');
let sendBtn = document.getElementById('sendButton');

sendBtn.addEventListener('click', function() {
    if (text.value != '') {
        let el = document.createElement('div');
        el.className = 'box right-box';
        messages.appendChild(el);

        let txt = document.createElement('p');
        txt.classList.add('right');
        el.appendChild(txt);
        txt.innerHTML = text.value;

        text.value = '';
    }
});

// For Receiveing Messages

let receiveBtn = document.getElementById('receiveButton');

receiveBtn.addEventListener('click', function() {
    if (text.value != '') {
        let el = document.createElement('div');
        el.className = 'box';
        messages.appendChild(el);

        let txt = document.createElement('p');
        txt.classList.add('left');
        el.appendChild(txt);
        txt.innerHTML = text.value;

        text.value = '';
    }
});