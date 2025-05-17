// Member data (move this to the top)
const membersData = [
  {
    "name": "TechNova Ltd",
    "address": "Plot 45, Kampala Road, Uganda",
    "phone": "+256 701 123456",
    "website": "https://www.technova.ug",
    "image": "technova.png",
    "membership": 3,
    "info": "Leading software company specializing in fintech solutions."
  },
  {
    "name": "Green Harvest",
    "address": "Mbale, Eastern Uganda",
    "phone": "+256 712 334455",
    "website": "https://greenharvest.ug",
    "image": "greenharvest.png",
    "membership": 2,
    "info": "Organic farming and agricultural consultancy."
  },
  {
    "name": "Safari Wheels",
    "address": "Entebbe Highway, Uganda",
    "phone": "+256 755 987654",
    "website": "https://safariwheels.ug",
    "image": "safariwheels.png",
    "membership": 1,
    "info": "Tour company offering guided safaris."
  },
  {
    "name": "EduSmart",
    "address": "Kira Road, Kampala",
    "phone": "+256 770 554433",
    "website": "https://edusmart.ug",
    "image": "edusmart.png",
    "membership": 3,
    "info": "E-learning solutions for schools and universities."
  },
  {
    "name": "ByteFix",
    "address": "Industrial Area, Kampala",
    "phone": "+256 786 112233",
    "website": "https://bytefix.ug",
    "image": "bytefix.png",
    "membership": 1,
    "info": "Computer repair and IT maintenance services."
  },
  {
    "name": "Urban Foods",
    "address": "Gulu City, Uganda",
    "phone": "+256 758 667788",
    "website": "https://urbanfoods.ug",
    "image": "urbanfoods.png",
    "membership": 2,
    "info": "Fast food restaurant with local cuisine focus."
  },
  {
    "name": "SolarBright",
    "address": "Jinja Road, Uganda",
    "phone": "+256 701 998877",
    "website": "https://solarbright.ug",
    "image": "solarbright.png",
    "membership": 3,
    "info": "Renewable energy company specializing in solar panels."
  }
];

const membersContainer = document.getElementById("members");

function getMembershipLevel(level) {
  return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

function displayMembers(members) {
  membersContainer.innerHTML = ""; // clear existing
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
      <p><strong>Info:</strong> ${member.info}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
    `;
    membersContainer.appendChild(card);
  });
}

function setView(view) {
  membersContainer.className = view; // 'grid' or 'list'
}

// Initial display
displayMembers(membersData);

// Filter members by search input
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('directorySearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const filtered = membersData.filter(member =>
        member.name.toLowerCase().includes(query) ||
        member.address.toLowerCase().includes(query) ||
        member.phone.toLowerCase().includes(query) ||
        member.info.toLowerCase().includes(query) ||
        getMembershipLevel(member.membership).toLowerCase().includes(query)
      );
      displayMembers(filtered);
    });
  }
});
