let masterSS=[
    "https://images-static.nykaa.com/uploads/2eed0299-57d5-4515-9b54-76a78e77457d.jpg",
    "https://images-static.nykaa.com/uploads/39ebe574-ecc8-4391-a184-98bcd6c1e099.jpg",
    "https://images-static.nykaa.com/uploads/eae45487-002f-4e66-89fe-446be62657cc.gif",
    "https://images-static.nykaa.com/uploads/f735df42-248c-4aa1-bbef-01374bc94694.gif",
    "https://images-static.nykaa.com/uploads/a66d0951-f18b-4def-8a7c-e8e49fa17129.jpg",
    "https://images-static.nykaa.com/uploads/30c93433-49ad-4e1e-8d1f-da461dc18731.jpg",
    "https://images-static.nykaa.com/uploads/d39e7c0c-852b-4c88-b275-abdeedcfdb3b.gif"
];

let futureFav=[
    "https://images-static.nykaa.com/uploads/49421d5c-4110-441c-8dba-d47ee2d04012.jpg",
    "https://images-static.nykaa.com/uploads/239e5b61-e5fd-4ed0-b03a-0f4014d9f8cc.jpg",
    "https://images-static.nykaa.com/uploads/187b9a4d-371e-4604-93cf-c1c6e9becce6.jpg",
    "https://images-static.nykaa.com/uploads/b6f2220c-b100-4ed1-bbb6-ad42a2a0c48f.jpg",
    "https://images-static.nykaa.com/uploads/b74ecc67-7679-46b5-8a99-93791d213f36.jpg",
    "https://images-static.nykaa.com/uploads/470b740a-37a1-4039-8aa7-6c6616ee8111.jpg",
    "https://images-static.nykaa.com/uploads/65bc3a78-1b69-4105-b830-ea9848244562.gif"
]

let onlyLuxe=[
    "https://images-static.nykaa.com/uploads/d4f5355c-ee62-4f30-b262-bbdb27bbc297.jpg",
    "https://images-static.nykaa.com/uploads/ade729ff-ee1b-4015-8cf3-88dddc0cfe32.jpg",
    "https://images-static.nykaa.com/uploads/1612690c-5c9c-4dde-8c1a-5fba93678498.jpg",
    "https://images-static.nykaa.com/uploads/092febf9-55c9-4dad-93a0-879bd1aa45b2.jpg",
    "https://images-static.nykaa.com/uploads/aa8d7ae4-24ad-443e-979d-227b05918d0b.jpg",
    "https://images-static.nykaa.com/uploads/bb3aa3a2-2c17-4c5d-9561-a8ee799776a5.jpg",
    "https://images-static.nykaa.com/uploads/362f2806-0151-4320-a255-f0154873abaa.jpg",
    "https://images-static.nykaa.com/uploads/0dfce0b3-e587-4263-9087-7422fb51fd0a.jpg",
    "https://images-static.nykaa.com/uploads/9e179262-1292-4955-b096-31023e030c46.jpg",
    "https://images-static.nykaa.com/uploads/7525207b-da12-4b9a-8877-eccb299b451d.jpg",
    "https://images-static.nykaa.com/uploads/4bbcac86-26d2-4ea7-ba7b-d82e7510b800.jpg",
    "https://images-static.nykaa.com/uploads/31453344-8e42-4756-a1a6-fd2ea20fd830.jpg"
]

let skincareSos=[
    "https://images-static.nykaa.com/uploads/a5521cb8-ff92-4500-a5ea-fa2c56426b9b.jpg",
    "https://images-static.nykaa.com/uploads/5342875c-0f50-4ece-a7ee-db606967559e.jpg",
    "https://images-static.nykaa.com/uploads/29ec203a-be99-4476-b0ea-fd8cfa3a52e9.jpg",
    "https://images-static.nykaa.com/uploads/399a5d6d-3fe6-431c-a9c6-b36358e7ca83.jpg",
    "https://images-static.nykaa.com/uploads/2db137b6-0f31-45e0-87e7-9324e5c5b8a9.jpg",
    "https://images-static.nykaa.com/uploads/0ae7a493-efc2-4a51-98f2-8bef95751717.jpg"
]
let l;
offerFlash();
autoSS();
slideImg(futureFav,725,10,"slide1","#imgCont","#next","#prev");
slideImg(onlyLuxe,350,20,"slide2","#imgCont2","#next2","#prev2");
slideImg(skincareSos,280,20,"slide3","#imgCont3","#next3","#prev3");

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


function slideImg(arr,x,y,idname,imgcont,bn,bp){
    for(let i=0; i<=arr.length-1; i++){
        let a=document.createElement("img");
        a.setAttribute("id",idname);
        a.setAttribute("src",arr[i]);
        a.setAttribute("width",`${x}px`);
        a.setAttribute("margin-right",`${y}px`);
        document.querySelector(imgcont).append(a);
    }
    let a=document.querySelector(imgcont);
    let z=x+y;  
    l=0;
    a.style.left=`${l}px`;
    document.querySelector(bn).addEventListener("click",function(){
        l=l-(z);
        if(l<((-z)*(arr.length-1))){
             l=0;
         }
        console.log(l);
        a.style.left=`${l}px`;
    })
    document.querySelector(bp).addEventListener("click",function(){
        l=l+z;
        if(l>0){
            l=(-z*(arr.length-1));
        }
        console.log(l);
        a.style.left=`${l}px`;
    })
}

