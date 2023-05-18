import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "Clothes for men",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "Clothes for women",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Clothes for kids",
  },
];
