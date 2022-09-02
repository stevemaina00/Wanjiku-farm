// 
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '1a74d912femsh7301db6c354c22ap11b655jsn6659992dfba4',
		'X-RapidAPI-Host': 'oxebox-generate-a-new-oxebox-bill-receipt-v1.p.rapidapi.com'
	},
	body: '{"StoreDetails":{"Name":"Jamies Cafe","LogoUrl":"https://www.oxebox.com/assets/images/store_logo/store_5bfbb2b7b1863.png","TaxDetails":"","Phone":"+18008563275","ReceiptHeader":"Welcome to Jamies Cafe","ReceiptFooter":"Thanks for your visit !!!","Address":{"AddressLine1":"P.O. Box 649","AddressLine2":"6067 Vel Road 652374 ","City":"Fuenlabrada","Area":"Anguilla","Zipcode":"23456","Country":"SPAIN"}},"CustomerDetails":{"Name":"Zeph Foreman","Phone":"","CountryCode":"","Email":{"recepientEmail":"","subject":"Here is the receipt for your recent order from Jamies Cafe","fromEmail":"receipts@oxebox.com","fromName":"Jamies T-shirts","replyToEmail":""}},"BillingDetails":{"BillReceiptID":"Rec-1088686AABC","TransactionDate":"2018-11-30","TransactionTime":"22:10:01","AdditionalDetails":[{"Name":"Table No","Value":"1234"},{"Name":"Order No","Value":"06161"}],"PaymentDetails":[{"Amount":4000,"Type":"card","Cashier":"John Rock"},{"Amount":1646,"Type":"cash","Cashier":"John Rock"}],"ItemDetails":[{"ItemCode":"Pizza - 01","ItemName":"Exotica Supreme Pizza","ItemHeader":"12 medium, extra cheeze,olives","ItemQty":20,"ItemUnit":"pcs","ItemPrice":40,"ItemTotal":800,"SubItems":[{"ItemName":"Extra cheese","ItemQty":1,"ItemUnit":"pcs","ItemPrice":29,"ItemTotal":29},{"ItemName":"Extra Toppings","ItemQty":2,"ItemUnit":"pcs","ItemPrice":55,"ItemTotal":110}]},{"ItemCode":"Pizza-02","ItemName":"Triple chicken feast pizza","ItemHeader":"Crust: Pan, Medium, spicy","ItemQty":40,"ItemUnit":"pcs","ItemPrice":100,"ItemTotal":4000,"Discounts":[{"Name":"Store Promo","Total":99,"Percent":0},{"Name":"Additional discount","Total":18,"Percent":9}],"Taxes":[{"Name":"SGST 6","Total":240,"Percent":6},{"Name":"SGST 9","Total":240,"Percent":9}]}],"Discounts":[{"Name":"Store Promo","Total":99,"Percent":""},{"Name":"Bulk discount","Total":400,"Percent":""}],"Taxes":[{"Name":"SGST","Total":222.86,"Percent":6},{"Name":"CGST","Total":222.86,"Percent":9}],"SubTotal":5600,"GrandTotal":0,"RoundOff":0.29,"TotalBillAmount":5646,"AdditionalCharges":[{"Name":"Delivery Charges","Amount":4000,"Discounts":[{"Name":"Store Promo","Total":99,"Percent":""},{"Name":"Additional discount","Total":18,"Percent":9}],"Taxes":[{"Name":"CGST 9","Total":7.63,"Percent":9},{"Name":"SGST 9","Total":7.63,"Percent":9}]}],"BillingAddress":{"AddressLine1":"954 Dui. St.","AddressLine2":"Leganes ACT","Area":"BTM","City":"Hartford","State":"Mayotte","Zip":16205,"Country":"SPAIN","Name":"Isaiah Marquez","Phone":"+61423475219"},"ShippingAddress":{"AddressLine1":"954 Dui. St.","AddressLine2":"Leganes ACT","Area":"BTM","City":"Hartford","State":"Mayotte","Zip":16205,"Country":"SPAIN","Name":"Isaiah Marquez","Phone":"+61423475219"}},"StorePromotions":{"OfferImage":"https://www.oxebox.com/assets/images/store_promo/promo_5a66a9fae0c2d.png","facebook_link":"https://www.facebook.com/Munafa-Mart-2019937031565683/","twitter_link":"https://twitter.com/munafamart","instagram_link":"https://www.instagram.com/dominos/?hl=en","youtube_link":"https://www.youtube.com/watch?v=dKwDkzdUZvI"}}'
};

fetch('https://oxebox-generate-a-new-oxebox-bill-receipt-v1.p.rapidapi.com/generateNewBill', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
document.querySelector('#logo').addEventListener('mouseover', (e)=>{
    let logo=document.getElementById('logo');
    logo.style.color="green"
    
})
document.querySelector('#db').addEventListener('click', (e)=>{
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
        const d = new Date();
        document.getElementById('tots').innerHTML=`Your total earnings as of ${d} is kes ${totalEarnings}`
        
    })

