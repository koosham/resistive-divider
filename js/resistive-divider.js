function findResistors(ratio, series)
{
    return {r1:1.1, r2:2.2};
}

function show(dest, resistors)
{
    var results = document.getElementById(dest);
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(resistors.r1 + ', ' + resistors.r2));
    results.appendChild(item);
}

function calculate(vi, vo, series, dest)
{
    var ss = document.getElementById(series);
    var s = ss.options[ss.selectedIndex].text;
    var vi = document.getElementById(vi);
    var vo = document.getElementById(vo);
    var ratio = vo / (vi - vo);
    var resistor = findResistors(ratio, series);
    clearResults(dest);
    show(dest, resistor);
}

function clearResults(dest)
{
    var results = document.getElementById(dest);

    while(results.firstChild)
    {
        results.removeChild(results.firstChild);
    }
}