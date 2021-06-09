

//  creating a heading for the section
let heading=document.createElement('h1')
heading.className="section_heading"
heading.textContent="Clothing for Men and Women"
document.body.appendChild(heading)

// creating a container of div where other sub sections will be there
let div=document.createElement('div')
div.className="container"
document.body.appendChild(div)


for(let i=1;i<=5;i++)
{
    let sub_div=document.createElement('div')
    sub_div.className="item"
    div.appendChild(sub_div)


    let image=document.createElement('img')
    image.className="image"
    image.src=productList[i-1]["preview"]
    sub_div.appendChild(image)

    let title=document.createElement('p')
    title.className="title"
    title.textContent=productList[i-1]["name"]
    sub_div.appendChild(title)

    let brand=document.createElement('p')
    brand.className="brand"
    brand.textContent=productList[i-1]["brand"]
    sub_div.appendChild(brand)

    let price=document.createElement('p')
    price.className="price"
    price.textContent="Rs "+ productList[i-1]["price"]
    sub_div.appendChild(price)
}

heading=document.createElement('h1')
heading.className="section_heading"
heading.textContent="Accessories for Men and Women"
document.body.appendChild(heading)

div=document.createElement('div')
div.className="container"
document.body.appendChild(div)

for(let i=6;i<=10;i++)
{
    let sub_div=document.createElement('div')
    sub_div.className="item"
    div.appendChild(sub_div)


    let image=document.createElement('img')
    image.className="image"
    image.src=productList[i-1]["preview"]
    sub_div.appendChild(image)

    let title=document.createElement('p')
    title.className="title"
    title.textContent=productList[i-1]["name"]
    sub_div.appendChild(title)

    let brand=document.createElement('p')
    brand.className="brand"
    brand.textContent=productList[i-1]["brand"]
    sub_div.appendChild(brand)

    let price=document.createElement('p')
    price.className="price"
    price.textContent="Rs "+ productList[i-1]["price"]
    sub_div.appendChild(price)
}