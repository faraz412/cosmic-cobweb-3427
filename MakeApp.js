let masterSS=[
    "https://images-static.nykaa.com/uploads/2eed0299-57d5-4515-9b54-76a78e77457d.jpg",
    "https://images-static.nykaa.com/uploads/39ebe574-ecc8-4391-a184-98bcd6c1e099.jpg",
    "https://images-static.nykaa.com/uploads/eae45487-002f-4e66-89fe-446be62657cc.gif",
    "https://images-static.nykaa.com/uploads/f735df42-248c-4aa1-bbef-01374bc94694.gif",
    "https://images-static.nykaa.com/uploads/a66d0951-f18b-4def-8a7c-e8e49fa17129.jpg",
    "https://images-static.nykaa.com/uploads/30c93433-49ad-4e1e-8d1f-da461dc18731.jpg",
    "https://images-static.nykaa.com/uploads/d39e7c0c-852b-4c88-b275-abdeedcfdb3b.gif"
];

offerFlash();
function offerFlash(){
    let i=0;
    setInterval(() => {
        if(i==0){
            document.querySelector("#leftDiv>h4").innerText="BEAUTY BONANZA Get Your Daily Dose of Amazing Deals";
        }
        if(i==1){
            document.querySelector("#leftDiv>h4").innerText="";
        }
        i++;
        if (i==2) {
            i=0;
        }
},1000)
};


autoSS();
function autoSS(){
    let banner1=document.querySelector("#ss");
    let bullets=document.querySelectorAll(".bullet");
    let i=0;
    setInterval(function(){
        if(i==0){
            bullets[masterSS.length-1].style.backgroundColor="rgb(212, 206, 206)";
        }
        banner1.src=masterSS[i];
        bullets[i].style.backgroundColor="red";
        if(i>0){
            bullets[i-1].style.backgroundColor="rgb(212, 206, 206)";  
        }
        i++;
        if(i==masterSS.length){
            i=0;
        }
    },3000)
};