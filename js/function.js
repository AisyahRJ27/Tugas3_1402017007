function btnSilinder() {
    window.location.href = "silinder.html";
}

function btnKerucut() {
    window.location.href = "kerucut.html";
}

function btnBola() {
    window.location.href = "bola.html";
}

function hitungSilinder() {
    var r = document.getElementById('r').value;
    var t = document.getElementById('t').value;
    var lpSilinder = 2 * Math.PI * r * (r + t);
    var vSilinder = Math.PI * r * r * t;

    if (r != 0 && t != 0){
        document.getElementById('luas').innerHTML = "Luas Permukaan Silinder = " + lpSilinder.toFixed(2);
        document.getElementById('volume').innerHTML = "Volume Silinder = " + vSilinder.toFixed(2);
    } else {
        window.alert("Pastikan sudah terisi dengan benar!");
    }
}

function hitungKerucut() {
    var r = document.getElementById('r').value;
    var s = document.getElementById('s').value;
    var t = document.getElementById('t').value;
    var lpKerucut = Math.PI * r * (r + s);
    var vKerucut = 1/3 * Math.PI * r * r * t;

    if (r != 0 && s != 0 && t != 0){
        document.getElementById('luas').innerHTML = "Luas Permukaan Kerucut = " + lpKerucut.toFixed(2);
        document.getElementById('volume').innerHTML = "Volume Kerucut = " + vKerucut.toFixed(2);
    } else {
        window.alert("Pastikan sudah terisi dengan benar!");
    }
}

function hitungBola() {
    var r = document.getElementById('r').value;
    var lpBola = 4 * Math.PI * r * r;
    var vBola = 4/3 * Math.PI * r * r * r;

    if (r != 0){
        document.getElementById('luas').innerHTML = "Luas Permukaan Bola = " + lpBola.toFixed(2);
        document.getElementById('volume').innerHTML = "Volume Bola = " + vBola.toFixed(2);
    } else {
        window.alert("Pastikan sudah terisi dengan benar!");
    }
}