

function displayOutput() {
    axios.get("https://api.openbrewerydb.org/breweries").then(function (response) {
        console.log(response.data)
    let country=response.data[16].name;
    document.getElementById('ap').innerHTML=country;
    let city=response.data[16].city;
    document.getElementById('p').innerHTML=city
    let county_province=response.data[16].county_province;
    let phone=response.data[16].phone;
    document.getElementById('pp').innerHTML=`The customer comes from ${country} and ${county_province} province
    for more details call ${phone}`
})
}
document.querySelector('#logo').addEventListener('mouseover', (e)=>{
    let logo=document.getElementById('logo');
    logo.style.color="green"
    
})
document.querySelector('#db').addEventListener('mouseover', (e)=>{
    e.preventDefault()
    alert('Call us on 072200000-"John Doe"')
}, 2000)
document.getElementById("bt").addEventListener('click', (e)=>{
    e.preventDefault();
    let A=document.getElementById("shedA").value
    let B=document.getElementById("shedB").value
    let total=parseInt(A) + parseInt(B);
    document.getElementById("day").innerHTML=`Your total litres for today is ${total} L`
    let sp = 50;
    let totalPrice=total * sp;
    document.getElementById("totalPrice").innerHTML=`Congratulations you have earned 
    ${totalPrice}kes. Check your gmail for more information`})
    document.getElementById("bt2").addEventListener('click', (e)=>{
    let x=document.getElementById("nestA").value
    let y=document.getElementById("nestB").value
    let eggtotal=parseInt(x) + parseInt(y);
    document.getElementById("eggday").innerHTML=`Your total trays for today is ${eggtotal} `
    let sp2 = 400;
    let totalPrice2=eggtotal * sp2;
    document.getElementById("eggtotalPrice").innerHTML=`Congratulations you have earned 
    ${totalPrice2}kes. Check your gmail for more information`});
    const btn3 = document.getElementById('bt3')
    btn3.addEventListener('click', ()=>{
        let SA=document.getElementById('shedA').value 
        let SB=document.getElementById('shedB').value 
        let S=SA + SB;
        let ps=S*50;
        let NA=document.getElementById('nestA').value 
        let NB=document.getElementById('nestB').value 
        let N=NA + NB;
        let ns=N * 400
        let totalEarnings=ps + ns;
        const d = new Date().toLocaleDate();
        document.getElementById('tots').innerHTML=`Your total earnings as of ${d} is kes ${totalEarnings}`
        
    })

