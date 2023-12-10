let ifr = document.createElement('iframe');
ifr.style.display = none;
ifr.src = 'about:blank';
document.body.appendChild(ifr);
let _log = ifr.contentWindow.window.console.log;
_log('\n\n\t\tgame provided by annotate\n\t\thttps://annotate.lol\n\n');
ifr.remove();