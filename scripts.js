// Filter business cards by search input
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('directorySearch');
  const businessCards = document.querySelectorAll('.business-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();

      businessCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});const membersContainer = document.getElementById("members");

async function fetchMembers() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Failed to fetch members:", error);
    membersContainer.innerHTML = "<p>Error loading members.</p>";
  }
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

function getMembershipLevel(level) {
  return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

function setView(view) {
  membersContainer.className = view; // 'grid' or 'list'
}

fetchMembers();