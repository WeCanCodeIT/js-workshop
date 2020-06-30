const car = {
    "speed": 0
}

const accelerate = () => {
    car.speed += 10;
}

const brake = () => {
    car.speed -= 10;
}

const checkEngine = () => {
    const checkEngineLight = document.querySelector('.dashboard__check-engine-light');
    checkEngineLight.classList.toggle("dashboard__check-engine-light--on", true)
}

const updateSpeedometer = () => {
    const speedometer = document.querySelector(".dashboard__speedometer");
    speedometer.innerText = car.speed;
    if (car.speed >= 60) {
        checkEngine();
    }
}

const gasPedal = document.querySelector(".floorboard__gas-pedal");

gasPedal.addEventListener("click", () => {
    event.preventDefault();
    accelerate();
    updateSpeedometer();
})

const brakePedal = document.querySelector(".floorboard__brake-pedal");

brakePedal.addEventListener("click", () => {
    event.preventDefault();
    brake();
    updateSpeedometer();
})