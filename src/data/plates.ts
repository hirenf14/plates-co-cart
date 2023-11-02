export interface IPlate {
  code: string;
  title: string;
  image: string;
  price: number;
}

export default [
  {
    code: "R01",
    title: "Red Plate",
    image: "/images/red-plate.jpg",
    price: 32.95,
  },
  {
    code: "G01",
    title: "Green Plate",
    image: "/images/green-plate.jpg",
    price: 24.95,
  },
  {
    code: "B01",
    title: "Blue Plate",
    image: "/images/blue-plate.jpg",
    price: 7.95,
  },
] as IPlate[];
