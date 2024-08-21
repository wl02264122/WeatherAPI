// https://www.youtube.com/watch?v=vXbfgRlQDfU
const tempApp = {
    name: document.querySelector("#weather-name"),
    feelsLike: document.querySelector("#feels_like"),
    temp: document.querySelector("#temp"),
    tempMax: document.querySelector("#temp_max"),
    tempMin: document.querySelector("#temp_min"),
    choceLocation: document.querySelector("#choceLocation"),
    img: document.querySelector("#weather-img"),
    icon: "https://openweathermap.org/img/wn/",
    rander(json) {
        this.feelsLike.textContent = json.main.feels_like;
        this.temp.textContent = json.main.temp;
        this.tempMax.textContent = json.main.temp_max;
        this.tempMin.textContent = json.main.temp_min;
        this.name.textContent = this.choceLocation.options[this.choceLocation.selectedIndex].text;
        this.img.setAttribute("src", this.icon + json.weather[0].icon + "@2x.png");
    },
    startGet() {
        let link = `https://api.openweathermap.org/data/2.5/weather?q=${this.choceLocation.value},TW&units=metric&lang=zh_tw&appid=55f7aebf78050a7d959e9ef1ce2076c2`;
        fetch(link)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.rander(json);  // 調用rander並將json對象傳入
            })
    },
    init() {
        this.startGet();
        this.choceLocation.addEventListener("change", () => {
            this.startGet();
        })
    }
};
tempApp.init();