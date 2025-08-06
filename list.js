const birthdays = [
  {
    name: "Bertie Yates",
    age: 29,
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Hester Hogan",
    age: 32,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Larry Little",
    age: 36,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sean Walsh",
    age: 34,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Lola Gardner",
    age: 29,
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const listContainer = document.getElementById("list");
const title = document.getElementById("title");
const clearBtn = document.getElementById("clearBtn");

function showBirthdays() {
  listContainer.innerHTML = "";
  birthdays.forEach((person) => {
    const div = document.createElement("div");
    div.classList.add("person");

    div.innerHTML = `
      <img src="${person.img} />
      <div class="info">
        <h4>${person.name}</h4>
        <p class="years">${person.age} years</p>
      </div>
    `;
    listContainer.appendChild(div);

    clearBtn.addEventListener("click", function () {
      birthdays.length = 0;
      showBirthdays();
    });
  });
}
