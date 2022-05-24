function tabelleGenerieren(){
    let table = document.getElementById("table");
    let html = '<table class="table text-center"><thead><tr><th scope="col">#</th><th scope="col">Bin</th><th scope="col">Dez</th><th scope="col">Hex</th></tr></thead><tbody>';

    for(let i = 1; i < 15; i++){
        let zahl = Math.round(Math.random()*255);
        let binaer = (zahl >>> 0).toString(2);
        let hex = zahl.toString(16);
        html += '<tr><td>';
        html += i;
        html += '</td><td>';
        html += binaer;
        html += '</td><td>';
        html += zahl;
        html += '</td><td>';
        html += hex;
        html += '</td></tr>';
    }
    html += '</tbody></table>';
    table.innerHTML += html;
}