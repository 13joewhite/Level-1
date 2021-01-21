const mainHeader = document.getElementById('header')
mainHeader.innerHTML = '<h2>JavaScript Made This!!</h2> <p> <span class="name">Joseph </span>wrote the JavaScript</p>'

const conversation = document.querySelector('div').innerHTML = '<div id="main"><button id="clear-button">clear</button><div class="messages"><div class="message left">Hello? Is anyone there?</div><div class="message right">Yes. Of course.</div><div class="message left">I need help. I am locked in a dark room and I dont know how to get out</div><div class="message right">We cannot help you. We are the ones that put you there.</div></div><form name="message"><input id="input" value="Thanks! Goodbye"/><button>Send</button></form></div>'


document.getElementById('clear-button').addEventListener('click', () => {
    document.querySelector('div').innerHTML = '<div id="main"><button id="clear-button">clear</button><div class="messages"><div class="message left"></div><div class="message right"></div><div class="message left"></div><div class="message right"></div></div><form name="message"><input id="input" value="Thanks! Goodbye"/><button>Send</button></form></div>'
})

document.getElementById('theme-drop-down').addEventListener('click', () => {
    document.getElementById('theme-drop-down')
})
