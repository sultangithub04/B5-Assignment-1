function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLocaleLowerCase();
    } else {
        return input.toUpperCase()
    }
}
formatString("Hello", false);



const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const result= items.filter(item=>item.rating>=4)
    return result; 
}
filterByRating(books)



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([]as T[]).concat(...arrays);
  }

concatenateArrays([1, 2], [3, 4], [5]); 



class Vehicle {
    make: string;
    year: number;
    constructor(make: string,
        year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(){
        console.log(`Make:${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    model: string

    constructor(make: string, year:number, model:string) {
        super(make, year)
        this.model = model
    }
    getModel(){
        console.log(`Model: ${this.model}`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();  
myCar.getModel(); 


function processValue(value: string | number): number{
if(typeof value==="string"){
   return value.length
}else {
    return value*2
}

}
processValue(50); 




interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) return null;
    return products.reduce((maxprice, currentprice)=>currentprice.price>maxprice.price?currentprice:maxprice)
  }

  const products = [
    { name: "Pen", price: 100 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
getMostExpensiveProduct(products)



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}

getDayType(Day.Sunday)



async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
       throw Error("Negative number not allowed");
    }
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
 squareAsync(4).then(console.log);
 squareAsync(-3).catch(console.error); 