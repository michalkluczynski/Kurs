  //var - zmienna globalna
  //Let - zmienna lokalna
  var imie = "Janusz"
  var nazwisko;
  nazwisko = "Nowak";
  document.write("twoje imie: ")

  var wiek = 21;
  document.write("<br>Twój wiek: " + wiek); // + konkatenacja - połączenie stringów (ciągu znaków)

  console.log(wiek);

  var x, y;
  x = 10;
  y = 7;
  var suma = x + y;
  // document.write(" <br> suma wynosi: " + (x + y));
  // alert(suma);

  document.write(" <br> suma wynosi: " + suma);
  x = 20;
  y = 2;

  var suma = x + y; //
  var roznica = x - y;
  var iloraz = x / y;
  var iloczyn = x * y;
  console.log(iloczyn);

  // modulo - reszta z dzielenia

  var modulo= x % y;

  console.log("suma: " + suma +", różnica: " + roznica +", iloraz: " + iloraz +", iloczyn: " + iloczyn);

  //typy danych
  var a = 10, b = "10a";

  var prawda = true;
  var nic = null;
  alert(a + b);
  console.log(typeof(a)); //number
  console.log(typeof(b)); //string
  console.log(typeof(prawda)); //boolean
  console.log(typeof(nic)); //object

  console.log(a +(a % 3) - 10);
