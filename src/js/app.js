const pointer = document.querySelector('.pointer');
const display = document.querySelector('.display');

document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    pointer.style.left = `${event.pageX}px`
    pointer.style.top = `${event.pageY}px`
}

display.addEventListener('mouseenter', (event) => {
    const pointer = document.querySelector('.pointer');
    const height = display.clientHeight;
    const width = display.clientWidth;
    const x = Math.floor(event.offsetX / width * 100);
    const y = Math.floor(event.offsetY / height * 100);

    pointer.style.animation = 'jumpy .75s ease-out infinite forwards';

    if( x>= 50 && y <= 50) {
        pointer.style.transform = 'translateX(-50%) rotate(225deg)';
        console.log('case 3')
    } else if (x <= 50 && y <= 50) {
        pointer.style.transform = 'translateX(-50%) rotate(135deg)';
        console.log('case 1')
    } else if (x <= 50 && y >= 50) {
        pointer.style.transform = 'translateX(-50%) rotate(45deg)';
        console.log('case 2')
    } else {
        pointer.style.transform = 'translateX(-50%) rotate(-45deg)';
        console.log('case 4')
    }
});
display.addEventListener('mouseleave', () => {
    const pointer = document.querySelector('.pointer');
    setTimeout( () => {
        pointer.style.transform = 'translateX(-50%) rotate(45deg)';
        pointer.style.animation = 'none';
    }, 500)
})


