//Members: Types
// class Person {
//     fname: string;
//     constructor(fane:string){
//         this.fname=fane;
//     }
//   }

//   const person = new Person("manthan");

//   console.log(person);

//Members: Visibility
// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
// class Person {
//     private name: string;

//     public constructor(name: string) {
//       this.name = name;
//     }

//     public getName(): string {
//       return this.name;
//     }
//   }

//   const person = new Person("manthan");
//   console.log(person.getName());

//Parameter Properties
//   class Person {
//     // name is a private member variable
//     public constructor(private name: string) {}

//     public getName(): string {
//       return this.name;
//     }
//   }

//   const person = new Person("Manthan");
//   console.log(person.getName());

//Readonly
// class Person {
//     private readonly name: string;

//     public constructor(name: string) {
//       // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
//       this.name = name;
//     }

//     public getName(): string {
//       return this.name;
//     }
//   }

//   const person = new Person("Manthan");
//   console.log(person.getName());

//Inheritance: Implements
// interface Shape {
//    getarea:()=>number;
// }
// class Circle implements Shape{
//  radius : number;
//   constructor(radius:number){
//     this.radius=radius;
//   }
//    getarea():number {
//     return 3.14 * this.radius * this.radius;
//   }
// };
// const circle = new Circle(5);
// console.log(circle.getarea());

//Inheritance: Extends
// interface Shape {
//   getarea():number;
// }
// class Rectanlge implements Shape{
//   length : number;
//   width : number;
//   constructor(length:number, width:number){
//     this.length=length;
//     this.width=width;
//     }
//   getarea(): number {
//     return this.length*this.width;
//   }
// }
// class Circle extends Rectanlge implements Shape{
//   radius : number;
//   constructor(radius:number){
//       super(0,0);
//        this.radius=radius;
//     }
//     getarea():number {
//       return 3.14 * this.radius * this.radius;
//     }
// }
// const ractangle = new Rectanlge(10,20);
// console.log(ractangle.getarea());
// const circle = new Circle(5);
// console.log(circle.getarea());

//override
// interface Shape {
//   getarea(): number;
// }
// class Rectanlge implements Shape {
//   length: number;
//   width: number;
//   constructor(length: number, width: number) {
//     this.length = length;
//     this.width = width;
//   }
//   getarea(): number {
//     return this.length * this.width;
//   }
//   public toString(): string {
//     return `Rectangle[width=${this.width}, height=${this.length}]`;
//   }
// }
// class Circle extends Rectanlge implements Shape {
//   radius: number;
//   constructor(radius: number) {
//     super(0, 0);
//     this.radius = radius;
//   }
//   getarea(): number {
//     return 3.14 * this.radius * this.radius;
//   }
//   public override toString(): string {
//     return `Square[width=${this.width}]`;
// }
// }
// const ractangle = new Rectanlge(10, 20);
// // console.log(ractangle.getarea());
// const circle = new Circle(5);
// // console.log(circle.getarea());
// console.log(ractangle.toString());
// console.log(circle.toString());
// abstract method
// abstract class Polygon {
//   public abstract getArea(): number;
//   public toString(): string {
//     return `Polygon[area=${this.getArea()}]`;
//   }
// }
// class Rectangle extends Polygon {
//   public length: number;
//   public width: number;
//   public constructor( width: number,length: number) {
//     super();
//     this.width=width;
//     this.length=length;
//   }
//   public getArea(): number {
//     return this.width * this.length;
//   }
// }
// const myRect = new Rectangle(10,20);
// console.log(myRect.getArea());


yuiopuio;uiouio