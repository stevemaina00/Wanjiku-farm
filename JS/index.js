document.querySelector('#logo').addEventListener('mouseover', (e)=>{
    let logo=document.getElementById('logo');
    logo.style.color="green"
    
})
document.querySelector('#logo').addEventListener('mouseover', (e)=>{
    e.preventDefault()
    alert('Welcome to our website!')
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

