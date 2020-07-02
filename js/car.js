class Car {

    constructor(speedometer, checkEngineLight) {
        this.checkEngineLight = checkEngineLight;
        this.speedometer = speedometer;
        this._speed = 0;
    }
    accelerate() {
        this._speed += 10;
    }
    brake() {
        this._speed -= 10;
        if (this._speed < 0) {
            this._speed = 0;
        }
    }
    _checkEngine() {
        this.checkEngineLight.classList.toggle("dashboard__check-engine-light--on", true);
    }
    updateSpeedometer() {

        this.speedometer.innerText = this._speed;
        if (this._speed >= 60) {
            this._checkEngine();
        }
    }
}
export {
    Car
}