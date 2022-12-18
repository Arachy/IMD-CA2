let navtoggle = false;
function toggleNavBar() {
    if (!navtoggle) {
        document.getElementById('div-expand').style.display = 'block';
    } else {
        document.getElementById('div-expand').style.display = 'none';
    }
    navtoggle = !navtoggle;
}