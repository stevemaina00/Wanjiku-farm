

function displayOutput() {
    axios.get("https://api.openbrewerydb.org/breweries").then(function (response) {
        console.log(response.data)
    let country=response.data[16].name;
    document.getElementById('ap').innerHTML=country + ".";
    let city=response.data[16].city;
    document.getElementById('p').innerHTML=city + "."
    let county_province=response.data[16].county_province;
    let phone=response.data[16].phone;
    document.getElementById('pp').innerHTML=`The customer comes from ${country} and ${county_province} province
    for more details call ${phone}.`
})
}
document.querySelector('#logo').addEventListener('mouseover', (e)=>{
    let logo=document.getElementById('logo');
    logo.style.color="black"
    
})
document.querySelector('#db').addEventListener('mouseover', (e)=>{
    e.preventDefault()
    alert('Call us on 072200000 - "John Doe" or 0701010101 - "Isabella Wanjiku"')
}, 2000)
document.getElementById("bt").addEventListener('click', (e)=>{
    e.preventDefault();
    let A=document.getElementById("shedA").value
    let B=document.getElementById("shedB").value
    let total=parseInt(A) + parseInt(B);
    document.getElementById("day").innerHTML=`Your total litres for today is ${total} L.`
    let sp = 50;
    let totalPrice=total * sp;
    document.getElementById("totalPrice").innerHTML=`Congratulations you have earned 
    ${totalPrice}kes. Check your gmail for more information.`})
    document.getElementById("bt2").addEventListener('click', (e)=>{
    let x=document.getElementById("nestA").value
    let y=document.getElementById("nestB").value
    let eggtotal=parseInt(x) + parseInt(y);
    document.getElementById("eggday").innerHTML=`Your total trays for today is ${eggtotal}. `
    let sp2 = 400;
    let totalPrice2=eggtotal * sp2;
    document.getElementById("eggtotalPrice").innerHTML=`Congratulations you have earned 
    ${totalPrice2}kes. Check your gmail for more information.`});
    const btn3 = document.getElementById('bt3')
    btn3.addEventListener('click', ()=>{
        let SA=document.getElementById('shedA').value 
        let SB=document.getElementById('shedB').value 
        let S=parseInt(SA) + parseInt(SB);
        let sp1=50;
        let tt=sp1 * S;
        let NA=document.getElementById('nestA').value 
        let NB=document.getElementById('nestB').value 
        let N=parseInt(NA) +parseInt(NB);
        let sp2=400
        let ta=sp2 * N
        let totalEarnings=tt + ta;
        const d = new Date();
        document.getElementById('tots').innerHTML=`Your total earnings as of ${d} is kes ${totalEarnings}.`
        
    })

function changeColor(){
    let changeCol=document.getElementById('a')
    changeCol.style.color="white"
}
function changeColor1(){
    let changeCol=document.getElementById('a1')
    changeCol.style.color="white"
}
function changeColor2(){
    let changeCol=document.getElementById('a2')
    changeCol.style.color="white"
}
function changeColor3(){
    let changeCol=document.getElementById('a3')
    changeCol.style.color="white"
}
