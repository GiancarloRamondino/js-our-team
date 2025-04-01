const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//creare una  card per ogni membro del team
const teamContainer = document.querySelector(".team-container");

if (teamContainer) {
  teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.classList.add("d-flex");
    card.classList.add("bg-dark");
    card.classList.add("col-4");
    card.classList.add("text-start");
    card.classList.add("m-1");
    
    
    card.innerHTML = `
      <div class="card-image" style="max-width: 125px; max-height: 125px;">
        <img src="${member.img}" class="img-fluid" alt="${member.name}">
      </div>
      <div class="card-text">
        <h4>${member.name}</h4>
        <p class=".fs-6 text">${member.role}</p>
        <p class=".fs-6 text">${member.email}</p>
      </div>
    `;

    teamContainer.appendChild(card);
  });
} else {
  console.error("Element with class 'team-container' not found in the DOM.");
}
console.log(teamMembers);

// Funzione per aggiungere un nuovo membro del team

function addTeamMember() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const img = document.getElementById("img").value;

  if (name && role && email && img) {
    const newMember = {
      name: name,
      role: role,
      email: email,
      img: img
    };

    teamMembers.push(newMember);
    console.log(teamMembers);

    // Aggiungi il nuovo membro alla visualizzazione
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.classList.add("d-flex");
    card.classList.add("bg-dark");
    card.classList.add("col-4");
    card.classList.add("text-start");
    card.classList.add("m-2");

    card.innerHTML = `
      <div class="card-image" style="max-width: 125px; max-height: 125px;">
        <img src="${newMember.img}" class="img-fluid" alt="${newMember.name}">
      </div>
      <div class="card-text">
        <h3>${newMember.name}</h3>
        <p>${newMember.role}</p>
        <p>${newMember.email}</p>
      </div>
    `;
    teamContainer.appendChild(card);
  } else {
    alert("Per favore riempi ogni campo del modulo!");
  }

  // Reset dei campi del modulo
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("email").value = "";
  document.getElementById("img").value = "";
  // Chiudi il modulo
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
  // Reset del modulo
  const form = document.getElementById("team-form");
  form.reset();
}

