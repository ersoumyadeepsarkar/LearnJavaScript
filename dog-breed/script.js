let loadBtn = document.getElementById('loadBreeds');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let errorMsg = document.getElementById('error-message');
let container = document.getElementById('breeds-container');

let nextUrl = null;
let prevUrl = null;

loadBtn.addEventListener('click', () => loadPage('https://dogapi.dog/api/v2/breeds'));

prevBtn.addEventListener('click', () => {
  if (prevUrl) loadPage(prevUrl);
});

nextBtn.addEventListener('click', () => {
  if (nextUrl) loadPage(nextUrl);
});

async function loadPage(url) {
  errorMsg.classList.add('hidden');
  container.innerHTML = '<p>Loading breeds…</p>';

  try {
    let res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let json = await res.json();

    nextUrl = json.links.next || null;
    prevUrl = json.links.prev || null;

    nextBtn.disabled = !nextUrl;
    prevBtn.disabled = !prevUrl;

    let breeds = json.data;
    if (!breeds || breeds.length === 0) {
      container.innerHTML = '<p>No breeds found.</p>';
      return;
    }

    displayBreeds(breeds);
  } catch (err) {
    container.innerHTML = '';
    errorMsg.textContent = 'Failed to load breeds. Please try again later.';
    errorMsg.classList.remove('hidden');
    console.error(err);
  }
}

function displayBreeds(breeds) {
  container.innerHTML = '';

  breeds.forEach(item => {
    let a = item.attributes;
    let imageUrl = item.relationships.image ?
      `https://cdn2.thedogapi.com/images/${item.relationships.image.data.id}.jpg` :
      '';
    console.log("URL", item.relationships.image);

    let life = a.life ? `${a.life.min}–${a.life.max} yrs` : 'N/A';
    let maleW = a.male_weight ? `${a.male_weight.min}–${a.male_weight.max} kg` : 'N/A';
    let femaleW = a.female_weight ? `${a.female_weight.min}–${a.female_weight.max} kg` : 'N/A';

    let card = document.createElement('div');
    card.className = 'breed-card';
    card.innerHTML = `
      ${imageUrl ? `<img src="${imageUrl}" alt="${a.name}">` : ''}
      <h2>${a.name}</h2>
      <p>${a.description}</p>
      <p><strong>Lifespan:</strong> ${life}</p>
      <p><strong>Male weight:</strong> ${maleW}</p>
      <p><strong>Female weight:</strong> ${femaleW}</p>
      <p><strong>Hypoallergenic:</strong> ${a.hypoallergenic ? 'Yes' : 'No'}</p>
    `;
    container.appendChild(card);
  });
}
