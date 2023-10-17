const adjectivals = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Argentine",
  "Armenian",
  "Aromanian",
  "Aruban",
  "Australian",
  "Austrian",
  "Bahamian",
  "Bahraini",
  "Bangladeshi",
  "Barbadian",
  "Basque",
  "Belarusian",
  "Belgian",
  "Belizean",
  "Bermudian",
  "Boer",
  "Bosniak",
  "Brazilian",
  "Breton",
  "British",
  "British Virgin Islander",
  "Bulgarian",
  "Macedonian Bulgarian",
  "Burkinabè",
  "Burundian",
  "Cambodian",
  "Cameroonian",
  "Canadian",
  "Catalan",
  "Cape Verdean",
  "Chadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Comorian",
  "Congolese",
  "Croatian",
  "Cuban",
  "Czechoslovak",
  "Turkish Cypriot",
  "Czech",
  "Danish",
  "Dominican (Republic)",
  "Dominican (Commonwealth)",
  "Dutch",
  "East German",
  "East Timorese",
  "Ecuadorian",
  "Egyptian",
  "Emirati",
  "English",
  "Eritrean",
  "Estonian",
  "Ethiopian",
  "Faroese",
  "Finnish",
  "Finnish Swedish",
  "Fijian",
  "Filipino",
  "French",
  "Georgian",
  "German",
  "Baltic German",
  "Ghanaian",
  "Gibraltarian",
  "Greek",
  "Greek Macedonian",
  "Grenadian",
  "Guatemalan",
  "French Guianese",
  "Guinean",
  "Guinea-Bissauan",
  "Guyanese",
  "Haitian",
  "Honduran",
  "Hong Kong",
  "Hungarian",
  "Icelandic",
  "Indian",
  "Indonesian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Ivoirian",
  "Jamaican",
  "Japanese",
  "Jordanian",
  "Kazakh",
  "Kenyan",
  "Kosovan",
  "Kosovo Albanian",
  "Kurdish",
  "Kuwaiti",
  "Lao",
  "Latvian",
  "Lebanese",
  "Liberian",
  "Libyan",
  "Liechtensteiner",
  "Lithuanian",
  "Luxembourgish",
  "Macedonian",
  "Malagasy",
  "Malaysian",
  "Malawian",
  "Maldivian",
  "Malian",
  "Maltese",
  "Manx",
  "Mauritian",
  "Mexican",
  "Moldovan",
  "Moroccan",
  "Mongolian",
  "Montenegrin",
  "Namibian",
  "Nepalese",
  "New Zealander",
  "Nicaraguan",
  "Nigerien",
  "Nigerian",
  "North Korean",
  "Norwegian",
  "Occitan",
  "Pakistani",
  "Palauan",
  "Palestinian",
  "Panamanian",
  "Papua New Guinean",
  "Paraguayan",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Post-Soviet",
  "Puerto Rican",
  "Québécois",
  "Réunionnais",
  "Romanian",
  "Romansh",
  "Russian",
  "Baltic Russian",
  "Rwandan",
  "Salvadoran",
  "São Tomé and Príncipese",
  "Saudi",
  "Scottish",
  "Senegalese",
  "Serbian",
  "Sierra Leonean",
  "Singaporean",
  "Sindhian",
  "Slovak",
  "Slovene",
  "Somalian",
  "South African",
  "South Korean",
  "South Sudanese",
  "Soviet",
  "Spanish",
  "Sri Lankan",
  "St Lucian",
  "Sudanese",
  "Surinamese",
  "Swedish",
  "Swiss",
  "Swiss German",
  "Swiss French",
  "Swiss Italian",
  "Syrian",
  "Taiwanese",
  "Tanzanian",
  "Thai",
  "Tibetan",
  "Tobagonian",
  "Trinidadian",
  "Tunisian",
  "Turkish",
  "Tuvaluan",
  "Ugandan",
  "Ukrainian",
  "Uruguayan",
  "Uzbek",
  "Vanuatuan",
  "Venezuelan",
  "Vietnamese",
  "Welsh",
  "Yemeni",
  "Yugoslav",
  "Zambian",
  "Zimbabwean",
];
const genres = [
  "Ambient",
  "Blues",
  "Classical",
  "Country",
  "Dance Music",
  "Disco",
  "Drum and Bass",
  "Dub",
  "Electronic",
  "Electronica",
  "Folk",
  "Folktronica",
  "Funk",
  "Gospel",
  "Industrial",
  "Hip-Hop",
  "House",
  "Jazz",
  "Latin",
  "Non Music",
  "Pop",
  "Punk",
  "Rap",
  "Reggae",
  "R&amp;B",
  "Rock",
  "Rocksteady",
  "Ska",
  "Soul",
  "Spoken Word",
  "Sprechgesang",
  "Techno",
  "Trance",
  "World",
];
const yearQualifiers = [
  "00s",
  "10s",
  "20s",
  "30s",
  "40s",
  "50s",
  "60s",
  "70s",
  "80s",
  "90s",
];
const genreModifiers = [
  "Acid",
  "Afro",
  "Baroque",
  "Chamber",
  "DIY",
  "Hyper",
  "Indie",
  "Medieval",
  "New Age",
  "Post",
  "Psychedelic",
  "Trap",
  "Underground",
];
window.sessionStorage.setItem("articleNumber", 1);

function romanize(num) {
  if (isNaN(num)) {
    return NaN;
  }
  const digits = String(+num).split("");
  const key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  let roman = "";
  let i = 3;
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  }
  return Array(+digits.join("") + 1).join("M") + roman;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  const shuffledArray = Array.from(array);
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function generateTitle() {
  const articleNumber = parseInt(
    window.sessionStorage.getItem("articleNumber"),
  );

  let title = "";

  if (Math.random() > 0.7) {
    const year =
      yearQualifiers[Math.floor(Math.random() * yearQualifiers.length)];
    title += `${year} `;
  }

  const country = adjectivals[Math.floor(Math.random() * adjectivals.length)];
  title += `${country} `;

  const modifierCount = getRandomInt(1, 3);
  const modifiers = shuffleArray(genreModifiers).slice(0, modifierCount).join(
    "–",
  );
  title += `${modifiers} `;

  const genreCount = getRandomInt(1, 2);
  const titleGenres = shuffleArray(genres).slice(0, genreCount).join(" ");
  title += `${titleGenres}`;

  if (Math.random() > 0.5) {
    title += " Revival";
  }

  const element = document.getElementById("quietus_article_name");
  element.innerHTML = `Organic Intelligence ${
    romanize(articleNumber)
  }: ${title}`;

  window.sessionStorage.setItem("articleNumber", articleNumber + 1);
}

generateTitle();
