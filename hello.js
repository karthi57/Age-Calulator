function calculate(){
    setInterval(()=>{
        //Input birth date
        let birthdate = new Date(document.getElementById('birthdate').value);

        //getTime : returns the number of miliseconds since january 1,1970
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageIns = ageInMs/1000; //to seconds

        let ageInMins = ageIns/60; // to minutes

        let ageInHrs = ageInMins / 60; // to hours

        let ageInDays = ageInHrs/24;// to days

        let ageInMonths = ageInDays / 30.4375 // to months

        let ageInYrs = ageInMonths /12; //to years

        document.querySelector('#year').innerHTML = Math.floor(ageInYrs);
        document.querySelector('#month').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#day').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hour').innerHTML = Math.floor(ageInHrs % 24);
       
    }, 1000);
}

function reset(){
    window.location.reload();
}
