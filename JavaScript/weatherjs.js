const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64e92cb438msha9c191ee429123ep1127fejsn0799a3cf608a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

let city = 'pune'
fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));


const getdata = async (data) =>{
    // const response = await fetch `https://open-weather13.p.rapidapi.com/city/${city}`;
    const desc = await console.log(data.weather[0].main)

}