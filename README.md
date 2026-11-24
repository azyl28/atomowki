# VENOL ATOMOWKI LODZ - strona internetowa

Kompletna, statyczna strona klubu kobiecej druzyny rugby **Venol Atomowki Lodz**.

## Uruchomienie

1. Skopiuj caly folder `Atomowki-Lodz/` na dysk.
2. Otworz plik `index.html` w dowolnej nowoczesnej przegladarce (Chrome, Firefox, Edge, Safari).
3. Nie wymaga Node.js, serwera ani frameworkow.

> Uwaga: w niektorych przegladarkach pliki lokalne (`file://`) moga blokowac czesc funkcji.
> Jesli chcesz miec pelna pewnosc, uruchom prosty serwer statyczny, np.:
> `python -m http.server 8000` - i wejdz na `http://localhost:8000`.

## Struktura

- `index.html` - strona glowna
- `pages/` - podstrony: o klubie, druzyna, akademia, rozgrywki, sukcesy, aktualnosci, galeria, kontakt
- `css/` - `style.css`, `animations.css`, `responsive.css`
- `js/` - `data.js` (dane), `main.js` (logika wspolna), `players.js`, `gallery.js`
- `assets/` - miejsce na zdjecia, logotypy, ikony

## Edycja tresci

Wszystkie dane klubowe znajduja sie w pliku **`js/data.js`** w obiekcie `ATOMOWKI_DATA`:

- `players` - zawodniczki (kategorie: `senior`, `u16`, `u13`)
- `news` - aktualnosci
- `successes` - sukcesy
- `matches` - mecze i wyniki
- `league` - tabela rozgrywek
- `gallery` - zdjecia
- `academy` - treningi i FAQ

## Brakujace materialy (do uzupelnienia przez klub)

- Oryginalne zdjecia druzyny, zawodniczek, meczow, treningow
- Logotypy: Venol, BBRC Lodz, sponsorzy i partnerzy
- Imiona i nazwiska zawodniczek, numery, pozycje
- Terminy i miejsca treningow
- Terminy meczow, wyniki, tabele
- Potwierdzone dane kontaktowe (adres, telefon, e-mail, Facebook, strona klubu)
- Pelna polityka prywatnosci
- Konfiguracja wysylki formularza (backend / Formspree)
- Mapa lokalizacji (osadzenie Google Maps / OpenStreetMap)

## Formularz kontaktowy

Formularz waliduje pola, ale **nie wysyla wiadomosci** - nie ma backendu.
Aby wysylac wiadomosci, podlacz zewnetrzna usluge (np. Formspree) lub wlasny endpoint.

## Licencja

Kod przygotowany na potrzeby klubu Venol Atomowki Lodz.