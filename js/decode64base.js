
function decodeBase64(a) {
    setBase64Str(a);
    var b = "";
    var c = new Array(4);
    var d = false;
    while (!d && (c[0] = readReverseBase64()) != END_OF_INPUT && (c[1] = readReverseBase64()) != END_OF_INPUT) {
        c[2] = readReverseBase64();
        c[3] = readReverseBase64();
        b += ntos(c[0] << 2 & 255 | c[1] >> 4);
        if (c[2] != END_OF_INPUT) {
            b += ntos(c[1] << 4 & 255 | c[2] >> 2);
            if (c[3] != END_OF_INPUT) {
                b += ntos(c[2] << 6 & 255 | c[3])
            } else {
                d = true
            }
        } else {
            d = true
        }
    }
    return b
}

function ntos(a) {
    a = a.toString(16);
    if (a.length == 1) a = "0" + a;
    a = "%" + a;
    return unescape(a)
}

function readReverseBase64() {
    if (!base64Str) return END_OF_INPUT;
    while (true) {
        if (base64Count >= base64Str.length) return END_OF_INPUT;
        var a = base64Str.charAt(base64Count);
        base64Count++;
        if (reverseBase64Chars[a]) {
            return reverseBase64Chars[a]
        }
        if (a == "A") return 0
    }
    return END_OF_INPUT
}

function encodeBase64(a) {
    setBase64Str(a);
    var b = "";
    var c = new Array(3);
    var d = 0;
    var e = false;
    while (!e && (c[0] = readBase64()) != END_OF_INPUT) {
        c[1] = readBase64();
        c[2] = readBase64();
        b += base64Chars[c[0] >> 2];
        if (c[1] != END_OF_INPUT) {
            b += base64Chars[c[0] << 4 & 48 | c[1] >> 4];
            if (c[2] != END_OF_INPUT) {
                b += base64Chars[c[1] << 2 & 60 | c[2] >> 6];
                b += base64Chars[c[2] & 63]
            } else {
                b += base64Chars[c[1] << 2 & 60];
                b += "=";
                e = true
            }
        } else {
            b += base64Chars[c[0] << 4 & 48];
            b += "=";
            b += "=";
            e = true
        }
        d += 4;
        if (d >= 76) {
            b += "\n";
            d = 0
        }
    }
    return b
}

function readBase64() {
    if (!base64Str) return END_OF_INPUT;
    if (base64Count >= base64Str.length) return END_OF_INPUT;
    var a = base64Str.charCodeAt(base64Count) & 255;
    base64Count++;
    return a
}

function setBase64Str(a) {
    base64Str = a;
    base64Count = 0
}

var END_OF_INPUT = -1;
var base64Chars = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/");
var reverseBase64Chars = new Array;
for (var i = 0; i < base64Chars.length; i++) {
    reverseBase64Chars[base64Chars[i]] = i
}

var base64Str;
var base64Count;

