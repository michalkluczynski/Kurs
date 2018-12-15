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

  var dziesietny = 11; //liczba w systemie dziesiętnym
  var oktalny = 010; //liczba w systebie oktalnym
  var szesnastkowy = 0x10 //liczba w systemie szesnastkowym

  var liczba1 = prompt("Podaj liczbę: ");
  console.log(liczba1);

  // var liczba2 = prompt("Podaj drugą liczbę: ");
  // console.log(liczba2);

  //zamiana zmiennych na typ liczbowy
  liczba1 = parseFloat(liczba1);
  // liczba2 = parseFloat(liczba2);
  //koniec zamiany

  // var suma = liczba1 + liczba2;
  // console.log("Suma wynosi: " + liczba1 + "+" + liczba2 + "=" + suma);

  var potega = liczba1 * liczba1;
  console.log("Potęga wybranej liczby wynosi: " + potega);

  // Zadanie domowe - napisz program który obliczy pole prostokąta dane podaje użytkownik z klawiatury

  // wynik wyświetlany: Bok a = ...... Bok b = ..... Pole = ...... cm^2 w indeksie górnym
  
  // zad 2 - podobnie trójkąt i koło
