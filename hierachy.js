//Create a class hierarchy for a simple application, such as an e-commerce system.

class Product {
    constructor(details){
        this.productName = details.productName
        this.price = details.price
        this.discount = details.discount
        this.totalAmt = this.price - (this.price*(this.discount/100))
        this.OverallReviewRating = details.OverallReviewRating
        this.imageUrl = details.url
    }
    display1(warrenty){
        if(!warrenty)
            {
        return `This is a the image of product you have choosen ${this.imageUrl}\n price :${this.totalAmt} offered with discount of ${this.discount}\n this product has overall rating of ${this.OverallReviewRating}`
            }
            else 
            return `This is a the image of product you have choosen ${this.imageUrl}\n price :${this.totalAmt} offered with discount of ${this.discount}\n this product has overall rating of ${this.OverallReviewRating} has warrenty of ${warrenty}`

    }
}

class Laptops extends Product {
    constructor(details){
        super(details)
    }
    display(){
        console.log(super.display1(""))
        console.log("shipping date on 5th june")
    }
}


const laptops = {
    productName :"Lenova laptop",
    price : 450000,
    discount :35,
    OverallReviewRating : 4,
    url :"https://cdn.image.aws.in"
}

const lp = new Laptops(laptops)
lp.display()
