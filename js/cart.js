let cart=document.querySelectorAll('.add-cart')
/*let products=[
    {
        name:Margherita,
        tag:margherita,
        price:450,
        inCart:0,
    },
    {
        name:Farm_House,
        tag:farmHouse,
        price:450,
        inCart:0,
    },
    {
        name:Deluxe_Veggie,
        tag:margherita,
        price:450,
        inCart:0,
    },
    {
        name:Margherita,
        tag:margherita,
        price:450,
        inCart:0,
    },
    {
        name:Margherita,
        tag:margherita,
        price:450,
        inCart:0,
    },
    {
        name:Margherita,
        tag:margherita,
        price:450,
        inCart:0,
    },
    {
        name:Margherita,
        tag:margherita,
        price:450,
        inCart:0,
    },
    {
        name:Margherita,
        tag:margherita,
        price:450,
        inCart:0,
    },
]*/

for(let i=0;i<cart.length;i++)
{
    
    cart[i]=addEventListener('click',()=>{
        cartNumber();
    })
}

function cartNumber(){
    let productNumber=localStorage.getItem('cartNumber')
    
    productNumber=parseInt(productNumber)
    if(productNumber){
        localStorage.setItem('cartNumber',productNumber+1);
        document.querySelector('.cart span').textContent= productNumber + 1;
    }
    else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent=1;
    }
}