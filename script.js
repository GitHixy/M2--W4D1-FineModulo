const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

const jobFinder = function (title, location) {
  const foundJobs = []; //Array dove inserire i lavori trovati                                                        //let counter = 0  //setto counter = 0 - ogni volta che pushero' un lavoro trovato, fara' counter++. (uso let perche il valore cambia in base alla ricerca).
  if (title.trim() === "" && location.trim() === "") {
    //utilizzo trim eliminare spazi bianchi quindi non dare come risultato tutto l'array jobs, ritornando foundJobs risultera' vuoto non avendo ancora pushato nulla.
    return { result: foundJobs }; 
  }
  //Ciclo dentro l'array jobs per iterare tutti i title e location, pushandoli in foundJobs nei casi in cui job.title AND job.location soddisfino i criteri di ricerca definiti dai parametri.
  //Uso toLowerCase per rendere la ricerca case insensitive.

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    if (
      job.title.toLowerCase().includes(title.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    ) {
      foundJobs.push(job);
    }
  }
  return { result: foundJobs, count: foundJobs.length };
};

const searchButton = document.querySelector("#search-button"); //Seleziono il bottone Search.
const titleIn = document.querySelector("#title-input"); //Seleziono title che mi servira' nella funzione ma anche per avviare la ricerca con Invio.
const locationIn = document.querySelector("#location-input"); //Stesso discorso per location.

//creo funzione selezionando i valori degli input utente applicandoli come parametri della mia funzione jobFinder.

const searchIt = function () {
  const title = titleIn.value;
  const location = locationIn.value;
  const finalJob = jobFinder(title, location);
  const resultsList = document.querySelector(".results-list"); //Seleziono il div dove inseriro' le card dei lavori trovati.
  const resultsCounter = document.querySelector("#counter-h3"); //Seleziono h3 dove inseriro' il counter.

  if (finalJob.result.length > 0) {
    let divHTML = ""; //Dichiaro una stringa vuota.

    for (let i = 0; i < finalJob.result.length; i++) {
      const singleJob = finalJob.result[i];
      divHTML += `<div class="card-job">
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tcwXtmwLez8Ld4OOJo_K67PzEc2Q-jLbT1KGdoROv-d53OuZjaXtQE5XY3BuYcdXP9k&usqp=CAU" alt="Job Found"></div>
    <div><h4>${singleJob.title}</h4>
    <h5>${singleJob.location}</h5></p></div>
    </div>`;
    }
    resultsList.innerHTML = divHTML;
    resultsCounter.innerText = `Number of Jobs Found: ${finalJob.count}`;
    console.log("Jobs Found:", finalJob.result);
    console.log("Number of Jobs Found:", finalJob.count); //Risultato in Console.
  } else {
    resultsCounter.innerHTML = `<h3>Your search did not yield any results.</h3>`;
    resultsList.innerHTML = null; //Svuoto la variabile per evitare che rimanga salvata in caso di ricerca senza input dopo una ricerca con almeno un input.
    console.log("Your search did not yield any results");
  }
};

//Creo funzione per cercare premendo Invio.

const searchOnEnter = function (ev) {
  if (ev.key === "Enter") {
    ev.preventDefault(); //Utilizzato per evitare il modulo predefinito collegato alla pressione di Invio.
    searchIt();
  }
}

//Applico searchOnEnter a keydown sui due input title e location.

titleIn.addEventListener("keydown", searchOnEnter);
locationIn.addEventListener("keydown", searchOnEnter);

//Aggiungiamo un event listener per far si che quando clicchiamo su Search, parta la funzione searchIt.
searchButton.addEventListener("click", searchIt);
