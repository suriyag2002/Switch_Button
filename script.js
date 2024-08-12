function toggleLight() {
    var body = document.getElementById('body');
    var toggleSwitch = document.getElementById('toggles');

    if (toggleSwitch.checked) {
        body.style.backgroundColor = 'white';  // Light is on
    } else {
        body.style.backgroundColor = 'black';  // Light is off
    }
}
