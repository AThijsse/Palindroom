
function isPalindroom () {
    const invoer = document.getElementById('invoer').value.toLowerCase();
    const message = document.getElementById('message');
    const reverseInvoer = invoer.split('').reverse().join('');
    const node = document.createElement("LI");

    if (invoer === reverseInvoer) {
        message.innerText = 'Palindroom'
        const guess = document.createTextNode(String(invoer)+ ' = Palindroom');
        node.appendChild(guess);
        document.getElementById('list').appendChild(node);
    } else {
        message.innerText = 'Not Palindroom'
        const guess = document.createTextNode(String(invoer)+' = Not Palindroom');
        node.appendChild(guess);
        document.getElementById('list').appendChild(node);
    }     
}

const button = document.getElementById('check-button');
button.onclick = isPalindroom;
