const toggleBtn = document.getElementById("toggleBtn");
const speedSlider = document.getElementById("speedSlider");

const orbits = document.querySelectorAll(".orbit");
const planets = document.querySelectorAll(".planet");

const planetName = document.getElementById("planetName");
const planetInfo = document.getElementById("planetInfo");

let isPaused = false;

/* Pause / Resume Button */
toggleBtn.addEventListener("click", () => {
    if (!isPaused) {
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = "paused";
        });

        toggleBtn.textContent = "Start Animation";
        isPaused = true;
    } else {
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = "running";
        });

        toggleBtn.textContent = "Pause Animation";
        isPaused = false;
    }
});

/* Speed Control */
speedSlider.addEventListener("input", () => {
    const speed = speedSlider.value;

    orbits.forEach(orbit => {
        const currentDuration =
            parseFloat(window.getComputedStyle(orbit).animationDuration);

        orbit.style.animationDuration =
            (currentDuration * (5 / speed)) + "s";
    });
});

/* Planet Information Card */
planets.forEach(planet => {
    planet.addEventListener("click", () => {
        const name = planet.dataset.name;
        const info = planet.dataset.info;

        planetName.textContent = name;
        planetInfo.textContent = info;
    });
});
