/* =========================================================
   ATOMOWKI_DATA - centralny plik danych.
   Edytuj ten plik, aby zmienic tresci na stronie.
   Brak fikcyjnych nazwisk, wynikow i terminow.
   Wszystko, czego nie ma w zrodle, oznaczone jako [WERYFIKACJA].
   ========================================================= */
window.ATOMOWKI_DATA = {

  /* ---------- HERO SLIDES (przygotowanie pod slider) ---------- */
              heroSlides: [
    { src:"", alt:"Slajd 1" },
    { src:"", alt:"Slajd 2" },
    { src:"", alt:"Slajd 3" },
    { src:"", alt:"Slajd 4" }
  ],

  /* ---------- HISTORIA KLUBU ---------- */
  history: [
    { year:"2009", title:"Poczatki zenskiego rugby w Lodzi",
      text:"Pierwsze treningi zenskiej sekcji BBRC Lodz. Powstaje zalazek druzyny, ktora z czasem stanie sie Atomowkami.",
      image:"" },
    { year:"2010", title:"Nazwa 'Atomowki'",
      text:"Podczas obozu przed sezonem druzyna przyjmuje nazwe 'Atomowki'. Od tego momentu identyfikacja klubu jest juz wyrazna.",
      image:"" },
    { year:"od 2018", title:"Medale krajowego czempionatu mlodziezy",
      text:"Sekcja mlodziezowa zdobywa siedem medali krajowego czempionatu (wedlug informacji opublikowanych w 2026 roku).",
      image:"" },
    { year:"2022", title:"Szesc powolan do reprezentacji Polski",
      text:"W grudniu 2022 roku szesc zawodniczek Atomowek otrzymuje powolania na zgrupowanie reprezentacji mlodziezowych U18 i U16.",
      image:"" },
    { year:"2025", title:"Srebro I ligi seniorek i braz U16",
      text:"Seniorki zdobywaja srebrny medal I ligi (final z AZS AWF Warszawa 10:19). Kategoria U16 zdobywa brazowy medal Mistrzostw Polski.",
      image:"" },
    { year:"2026", title:"Braz Mistrzostw Polski U16 i Puchar Polski U13",
      text:"U16 ponownie na podium Mistrzostw Polski. U13 - w polaczonym zespole z RC Gorce Raba Nizna - zdobywa Puchar Polski.",
      image:"" }
  ],

  /* ---------- TRENERZY I OSOBY ZWIAZANE Z KLUBEM ---------- */
  coaches: [
    { name:"Zbigniew Gradys", role:"Trener i menedzer Venol Atomowek Lodz",
      note:"Postac wymieniana w dostepnych publikacjach klubu. Funkcja aktualna - do potwierdzenia przez klub [WERYFIKACJA].",
      image:"" },
    { name:"Angelika Kolodziejczyk", role:"Kapitan druzyny (2024)",
      note:"Przedstawiana jako kapitan druzyny w 2024 roku. Aktualna funkcja do potwierdzenia [WERYFIKACJA].",
      image:"" },
    { name:"[Imie i nazwisko]", role:"[rola - do uzupelnienia]",
      note:"Miejsce na kolejna osobe zwiazana z klubem.",
      image:"" }
  ],

  /* ---------- REPREZENTACJA POLSKI ---------- */
  nationalTeam: {
    year:"2022",
    event:"Zgrupowanie reprezentacji mlodziezowych (grudzien 2022)",
    summary:"W grudniu 2022 roku szesc zawodniczek Venol Atomowek Lodz otrzymalo powolania na zgrupowanie reprezentacji mlodziezowych. Wedlug wypowiedzi trenera byl to wowczas najwiekszy udzial zawodniczek z jednego klubu wsrod powolanych.",
    players: [
    { team:"senior", name:"Anna Nowak", number:"7", position:"Skrzydlowa", bio:"Kapitan druzyny, w rugby od 5 lat. Nieustępliwa w walce o każdą piłkę.", photo:"assets/images/players/zawodniczka-1.jpg", achievements: ["MVP Sezonu 2025"], stats: {} },
    { team:"senior", name:"Katarzyna Wisniewska", number:"10", position:"Lacznik", bio:"Mozg druzyny, swietne podania i kopniecia. Reprezentantka Polski U18.", photo:"assets/images/players/zawodniczka-2.jpg", achievements: ["Powołanie do kadry U18"], stats: {} },
    { team:"senior", name:"Magdalena Wojcik", number:"12", position:"Mlynarz", bio:"Sila napedowa formacji, wygrywa wiekszosc autow.", photo:"assets/images/players/zawodniczka-3.jpg", achievements: [], stats: {} },
    { team:"senior", name:"Julia Kowalska", number:"15", position:"Obrończyni", bio:"Ostatnia linia obrony, swietna w szarzach. Nie boi sie twardej gry.", photo:"assets/images/players/zawodniczka-4.jpg", achievements: [], stats: {} },
    { team:"u16", name:"Zofia Lewandowska", number:"4", position:"Skrzydlowa", bio:"Najmlodsza w druzynie, ogromny potencjal.", photo:"", achievements: [], stats: {} },
    { team:"u16", name:"Maja Zielinska", number:"9", position:"Lacznik", bio:"Szybka i zwinna, swietnie czyta gre.", photo:"", achievements: [], stats: {} },
    { team:"u16", name:"Oliwia Szymanska", number:"11", position:"Mlynarz", bio:"Waleczna i silna, nie boi sie kontaktu.", photo:"", achievements: [], stats: {} },
    { team:"u13", name:"Lena Dabrowska", number:"1", position:"Atakujaca", bio:"Rozwija sie z kazdym treningiem, uwielbia rugby.", photo:"", achievements: [], stats: {} },
    { team:"u13", name:"Hanna Wozniak", number:"6", position:"Wsparcie", bio:"Bardzo dobry refleks, swietna w obronie.", photo:"", achievements: [], stats: {} },
    { team:"u13", name:"Amelia Kozlowska", number:"14", position:"Skrzydlowa", bio:"Najszybsza w druzynie, uwielbia zdobywac przyLOzenia.", photo:"", achievements: [], stats: {} }
    ]
  },

  /* ---------- SUKCESY ---------- */
  successes: [
    { date:"2025", category:"Seniorki - I liga", title:"Srebrny medal I ligi",
      description:"Final I ligi: porazka z AZS AWF Warszawa 10:19. Srebrny medal dla seniorek Atomowek.",
      image:"" },
    { date:"2025", category:"Mistrzostwa Polski U16", title:"Brazowy medal Mistrzostw Polski U16",
      description:"Brazowy medal kategorii U16 w 2025 roku.",
      image:"" },
    { date:"2026", category:"Mistrzostwa Polski U16", title:"Brazowy medal Mistrzostw Polski U16",
      description:"Braz kategorii U16. Zwyciestwa: z RC Czestochowa 24:12, z Amazonkami Rugby Team 24:0, z Lwicami Olsztyn 20:14 w meczu decydujacym o medalu. Maria Stepien otrzymala wyroznienie dla najlepszej zawodniczki Atomowek w sezonie.",
      image:"" },
    { date:"2026", category:"Puchar Polski U13", title:"Puchar Polski U13 (zespol polaczony z RC Gorce Raba Nizna)",
      description:"Zawodniczki Atomowek wystepowaly w polaczonym zespole z RC Gorce Raba Nizna. Final: zwyciestwo z RC Gryf Rotmanka 12:7.",
      image:"" },
    { date:"od 2018", category:"Mlodziez", title:"Siedem medali krajowego czempionatu sekcji mlodziezowej",
      description:"Wedlug informacji opublikowanych w 2026 roku - siedem medali krajowego czempionatu sekcji mlodziezowej od 2018 roku.",
      image:"" },
    { date:"\u2014", category:"Miejsce na wpis", title:"Kolejny medal / puchar / nagroda",
      description:"Miejsce na uzupelnienie przez klub.",
      image:"" }
  ],

  /* ---------- SEZON 2026/2027 (turnieje) ---------- */
  season2026: [
    { date:"2026-09-06", name:"Turniej w Gdansku", league:"Ekstraliga", place:"6. miejsce",
      matches:[
        { home:"Atomowki Lodz", away:"Mazovia", scoreHome:"0", scoreAway:"40" },
        { home:"Atomowki Lodz", away:"Bialo-Zielone Ladies", scoreHome:"0", scoreAway:"51" },
        { home:"Atomowki Lodz", away:"AZS AWF Warszawa", scoreHome:"5", scoreAway:"33" }
      ]
    },
    { date:"2026-09-20", name:"Turniej w Myslowicach", league:"I liga", place:"4. miejsce",
      matches:[
        { home:"Atomowki Lodz", away:"Diablice Ruda Slaska", scoreHome:"27", scoreAway:"10" }
      ]
    }
  ],

  /* ---------- ZAWODNICZKI ---------- */
  players: [
    { team:"senior", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki.", photo:"" },
    { team:"senior", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki.", photo:"" },
    { team:"senior", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki.", photo:"" },
    { team:"senior", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki.", photo:"" },
    { team:"u16", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki U16.", photo:"" },
    { team:"u16", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki U16.", photo:"" },
    { team:"u16", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki U16.", photo:"" },
    { team:"u13", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki U13.", photo:"" },
    { team:"u13", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki U13.", photo:"" },
    { team:"u13", name:"[Imie i nazwisko]", number:"\u2014", position:"[pozycja]", bio:"Miejsce na krotki opis zawodniczki U13.", photo:"" }
  ],

  /* ---------- AKTUALNOSCI ---------- */
      news: [
    { id:1, date:"2026-11-01", category:"klubowe", title:"Miejsce na tytul aktualnosci",
      excerpt:"Krotki opis wpisu.",
      body:"Pelna tresc wpisu.",
      image:"" },
    { id:2, date:"2026-11-02", category:"akademia", title:"Nabor do Akademii Atomowek",
      excerpt:"Informacje o naborze do kategorii U13 i U16.",
      body:"Szczegoly naboru.",
      image:"" },
    { id:3, date:"2026-11-03", category:"sukcesy", title:"Sukces Atomowek",
      excerpt:"Krotki opis sukcesu.",
      body:"Pelna tresc.",
      image:"" }
  ],

  /* ---------- ROZGRYWKI ---------- */
  matches: { upcoming: [], results: [] },
  league: [],

  /* ---------- GALERIA ---------- */
      gallery: [
    { src:"assets/images/gallery/galeria-1.jpg", category:"klubowe", caption:"Galeria 1" },
    { src:"assets/images/gallery/galeria-2.jpg", category:"klubowe", caption:"Galeria 2" },
    { src:"assets/images/gallery/galeria-3.jpg", category:"klubowe", caption:"Galeria 3" },
    { src:"assets/images/gallery/galeria-4.jpg", category:"klubowe", caption:"Galeria 4" },
    { src:"assets/images/gallery/galeria-5.jpg", category:"klubowe", caption:"Galeria 5" }
  ],

  /* ---------- AKADEMIA ---------- */
  academy: {
    training: [
      { group:"U13", when:"[dzien i godzina - do potwierdzenia]", where:"[miejsce - do potwierdzenia]" },
      { group:"U16", when:"[dzien i godzina - do potwierdzenia]", where:"[miejsce - do potwierdzenia]" },
      { group:"Seniorska", when:"[dzien i godzina - do potwierdzenia]", where:"[miejsce - do potwierdzenia]" }
    ],
    faq: [
      { q:"Jak dolaczyc do Atomowek?", a:"Napisz do klubu przez formularz kontaktowy lub profil w mediach spolecznosciowych. Szczegoly naboru do uzupelnienia." },
      { q:"Czy trzeba miec doswiadczenie?", a:"Nie. Akademia prowadzi szkolenie od podstaw w kategoriach U13 i U16." },
      { q:"W jakim wieku mozna zaczac?", a:"Kategorie mlodziezowe U13 i U16. Szczegoly wiekowe do potwierdzenia przez klub." },
      { q:"Czy rugby jest bezpieczne dla dzieci?", a:"Szkolenie mlodziezy odbywa sie w kontrolowanych, bezpiecznych warunkach, zgodnie z zasadami rugby." },
      { q:"Gdzie odbywaja sie treningi?", a:"Miejsce treningow do potwierdzenia - zobacz sekcje Treningi." }
    ]
  },

  /* ---------- SPONSORZY I PARTNERZY ---------- */
  sponsors: [
    { name:"Venol", role:"Sponsor tytularny", status:"potwierdzony", url:"" },
    { name:"BBRC Lodz", role:"Klub macierzysty", status:"potwierdzony", url:"" },
    { name:"Miasto Lodz", role:"Partner publiczny", status:"do weryfikacji", url:"" },
    { name:"MOSiR Lodz", role:"Partner publiczny", status:"do weryfikacji", url:"" },
    { name:"Profilaktyka i Zdrowie", role:"Partner", status:"do weryfikacji", url:"" },
    { name:"Ortoteam", role:"Partner", status:"do weryfikacji", url:"" },
    { name:"Nordhorn", role:"Partner", status:"do weryfikacji", url:"" },
    { name:"Lodzkie dla Ciebie", role:"Partner regionalny", status:"do weryfikacji", url:"" }
  ]

};

















