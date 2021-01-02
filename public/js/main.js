

const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide=document.querySelector('.middle-layer')
const getInfo = async (e) => {
    e.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
        city_name.innerText = `Please Enter City Name`;
        
         datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=2abf7eb9dea1ab5d7989b1d527e07569`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(city_name);
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            // console.log(city_name);
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            // console.log(temp.innerText);
            // console.log("1");
            const tempMood =arrData[0].weather[0].main;
            if(tempMood==="clear"){
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`
            }
            if(tempMood==="clouds"){
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6"></i>`
            }
            if(tempMood==="rain"){
                temp_status.innerHTML =`<i class="fas fa-rain" style="color: #a4b0be"></i>`
            }
            else{
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`
            }
            datahide.classList.remove('data_hide');

        } catch {
            // console.log("2");
            city_name.innerText = "Please Enter City Name Properly";
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);

// *****************************************Today**********************************************
// const day=document.getElementById('day');


// *******************************************--------------*************************************