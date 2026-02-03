// Constructor
// function BanKholder(name, age, acctnum){
//     this.name=name
//     this.age=age
//     this.acctnum=acctnum
// }
// const acc1=new BanKholder("Shreyansh", 21, 12305847)

// const acc2=new BanKholder("Yash", 27, 12305888)
// console.log(acc1);
// console.log(acc2);

// //Class
// class Car{
//     constructor(company, type, fueltype){
//         this.company=company
//         this.type=type
//         this.fueltype=fueltype
//     }

// }
// const car2= new Car("Volvo","SUV","Petrol")
// const car1=new Car("BMW", "Sedan", "Petrol")
// console.log(car1);
// console.log(car2);

// class price extends Car{
//     constructor(company,type,fueltype,price){
//         super(company,type,fueltype)
//         this.price=price
//     }
//     Display(){
//         console.log(`The Company name is ${this.company}, the type of fuel used ${this.fueltype}, the car is a ${this.type},the price of the car is ₹${this .price} `);
//     }
// }
// // const car3= new price("Mahindra","SUV","Petrol",200000)
// // console.log(car3);
// // car3.Display()
// // const car4= new price("Tata","Hatchback","Petrol",100000)
// // console.log(car4);
// // car4.Display()
// class carname extends price{
//     constructor(company,type,fueltype,price,carname){
//         super(company,type,fueltype,price)
//         this.carname=carname
//     }
//     Display(){
//         console.log(`The Company name is ${this.company}, the type of fuel used ${this.fueltype}, the car is a ${this.type}, the name od the car is "${this.carname}" the price of the car is ₹${this .price} `);
//     }
// }
// const car5=new carname("Mahindra","SUV","Petrol",200000,"Scorpio")

// car5.Display()
// console.log(car5);
// const car6= new carname("Tata","Hatchback","Petrol",100000,"Altaroz")
// car6.Display()
// console.log(car6);


class BankAccount{
    #balance =1000
    
    constructor(name,acctnum){
        this.name=name
        this.acctnum=acctnum

    }
    deposit(amt){
        this.#balance+=amt
        console.log(`My balance is ${this.#balance}`);
    }
    widraw(amt){
        this.#balance-=amt
        console.log(`My balance is ${this.#balance}`);
    }
}
const user1=new BankAccount("Shreyansh",155500)
console.log(user1);
user1.deposit(500)
user1.widraw(288)

class runCar{
    #runEng(){
        console.log("Engine is running");
    }

    start(){
        this.#runEng()
        console.log("Started");
        
    }
}

const car=new runCar
car.start()