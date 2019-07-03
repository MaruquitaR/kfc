/* http://loseasi.blogspot.com
http://loseasi.blogspot.com/2011/09/texto-arco-iris.html
By: Vku. */
function CrearArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++)
        this[i] = i - 1;
    this[11] = "A";
    this[12] = "B";
    this[13] = "C";
    this[14] = "D";
    this[15] = "E";
    this[16] = "F";
    return this;
}
hx = new CrearArray(16);
function Hexadecimal(x) {
    if (x < 17) x = 16;
    var alto = x / 16;
    var s = alto+"";
    s = s.substring(0, 2);
    alto = parseInt(s, 10);
    var left = hx[alto + 1];
    var low = x - alto * 16;
    if (low < 1) low = 1;
    s = low + "";
    s = s.substring(0, 2);
    low = parseInt(s, 10);
    var derecha = hx[low + 1];
    var cadena = left + "" + derecha;
    return cadena;
}
function ArcoIris(texto) {
    texto = texto.substring(0, texto.length);
    color_d1 = 255;
    mul = color_d1 / texto.length;
    for(var i = 0; i < texto.length; i++) {
        color_d1 = 255*Math.sin(i / (texto.length / 3));
        color_h1 = Hexadecimal(color_d1);
        color_d2 = mul * i;
        color_h2 = Hexadecimal(color_d2);
        k = texto.length;
        j = k - i;
        if (j < 0) j = 0;
        color_d3 = mul * j;
        color_h3 = Hexadecimal(color_d3);
        document.write("<FONT size=7 color=\"#" + color_h3 + color_h1 + color_h2 + "\">" + texto.substring(i, i + 1) + "</FONT>");
    } }
//ArcoIris("Cualli soft");