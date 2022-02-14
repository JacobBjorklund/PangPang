const products = document.querySelectorAll('img')
let score = 0
let tal = document.getElementById('tal')
products.forEach(product => {
    product.addEventListener('click', () => {
        score++
        console.log(score);
        tal.innerHTML = score
        alert('föremålet lagdes i shoppingbaggen')
    })
})

let navbar = document.getElementById('navbar')
if (navbar.style.width > "0px") {
    console.log('joo');
}


