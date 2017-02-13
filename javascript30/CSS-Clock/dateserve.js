const secondHand= document.querySelector('.second-hand');
function setDate()
{	const secondHand= document.querySelector('.second-hand');
	const minsHand= document.querySelector('.minutes-hand');
	const hoursHand= document.querySelector('.hours-hand');


	const time = new Date();
	const getSeconds= time.getSeconds();
	const secondsDegrees= ((getSeconds/60)*360)+90;
	secondHand.style.transform= `rotate(${secondsDegrees}deg)`;
	//console.log(secondsDegrees);	
	//getMinutes() --> <-- 
	const getMinutes=time.getMinutes();
	const minutesDegrees= ((getMinutes/60)*360)+90;
	minsHand.style.transform=`rotate(${minutesDegrees}deg)`;

	const getHours= time.getHours();
	const hoursDegrees= ((getHours/60)*360)+90;
	hoursHand.style.transform=`rotate(${hoursDegrees}deg)`;


}

setInterval(setDate,1000);