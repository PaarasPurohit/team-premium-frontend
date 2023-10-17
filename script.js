const planetInfo = {
    mercury: {
        name: "Mercury",
        description: "Mercury is the smallest planet in the solar system."
    },
    venus: {
        name: "Venus",
        description: "Venus is often called Earth's sister planet due to their similar size and composition."
    },
    // Add information for other planets here
};

const planetElements = document.querySelectorAll('.planet');
const planetNameElement = document.getElementById('planet-name');
const planetDescriptionElement = document.getElementById('planet-description');
const planetInfoElement = document.querySelector('.planet-info');

planetElements.forEach((planet) => {
    planet.addEventListener('click', () => {
        const planetId = planet.id;
        const info = planetInfo[planetId];
        
        planetNameElement.textContent = info.name;
        planetDescriptionElement.textContent = info.description;
        planetInfoElement.style.display = 'block';
    });
});
