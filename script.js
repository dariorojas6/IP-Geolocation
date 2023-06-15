const url = 'https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11?format=json';
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8056cd04a0mshc22395deb14d21fp1ea70bjsn44cd09c6d062',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};
const fetchInfo = (ip) => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json`,OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const form = document.querySelector("#form")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const results = document.querySelector("#results")

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = input;
    if(!value) return

    submit.setAttribute('disabled', '')
    submit.setAttribute('aria-busy','true')

    const ipInfo =  await fetchInfo(value)

    if(ipInfo){
    results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

     submit.removeAttribute('disabled')
    submit.removeAttribute('aria-busy')

    
})