import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  foodDetails=[
    {
    id:1,
    foodName:"panner Grilled sandwich",
    foodDetails:"Grilled paneer sandwiches are a good source of protein, biotin, selenium, and calcium.",
    foodPrice:250,
    foodImg:"https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2018/10/Paneer-Tikka-Sandwich-Insta-02.jpg?resize=1537%2C1024",
    },
    {
    id:2,
    foodName:"veggie supreme",
    foodDetails:"This detroit style pizza is so incredibly delicious and flavorfull! It's a veggie supreme",
    foodPrice:200,
    foodImg:"https://images.slurrp.com/prod/recipe_images/better-butter/domino-s-style-veg-supreme-skillet-pizza_XX8AZSYREV4REO4WPAIC.webp",
    },
    {
    id:3,
    foodName:"Paneer Burger",
    foodDetails:" Shallow fried paneer tikkis make this a low-fat, healthy version of the fat-laden burger.",
    foodPrice:213,
    foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRAqLEbq0GyijixgLD4G5n8UIJ76D8gHV6w&usqp=CAU",
    },
    {
    id:4,
    foodName:"Oreo cheesecake Ice cream",
    foodDetails:"Oreo cookies, heavy cream, and sweetened condensed milk.",
    foodPrice:150,
    foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAsFa13BHci4ffcgzTgZA0VUQss5Obv5qow&usqp=CAU",
    },
    {
    id:5,
    foodName:"veg masala roll in naan",
    foodDetails:"A uniquely Northern Irish delicacy, seasoned vegetables such as leeks and onions.",
    foodPrice:213,
    foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0muyvn70TLdr9CSY2dYu3HcbRuyce8IphA&usqp=CAU",
    },
    {
      id:6,
      foodName:"frankie",
      foodDetails:"frankie is one of Mumbai's most beloved snack. It is essentially a roll, made with chapati.",
      foodPrice:210,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8V7gmayxz7Ty-xVM80gOimwM-HBMN_qeiQ&usqp=CAU",
      },
      {
      id:7,
      foodName:"veggie supreme",
      foodDetails:"This detroit style pizza is so incredibly delicious and flavorfull! It's a veggie supreme",
      foodPrice:200,
      foodImg:"https://images.slurrp.com/prod/recipe_images/better-butter/domino-s-style-veg-supreme-skillet-pizza_XX8AZSYREV4REO4WPAIC.webp",
      },
      {
      id:8,
      foodName:"Paneer Burger",
      foodDetails:" Shallow fried paneer tikkis make this a low-fat, healthy version of the fat-laden burger.",
      foodPrice:213,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRAqLEbq0GyijixgLD4G5n8UIJ76D8gHV6w&usqp=CAU",
      },
      {
      id:9,
      foodName:"Oreo cheesecake Ice cream",
      foodDetails:"Oreo cookies, heavy cream, and sweetened condensed milk.",
      foodPrice:150,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAsFa13BHci4ffcgzTgZA0VUQss5Obv5qow&usqp=CAU",
      },
      {
      id:10,
      foodName:"veg masala roll in naan",
      foodDetails:"A uniquely Northern Irish delicacy, seasoned vegetables such as leeks and onions.",
      foodPrice:213,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0muyvn70TLdr9CSY2dYu3HcbRuyce8IphA&usqp=CAU",
      },
      {
        id:11,
        foodName:"frankie",
        foodDetails:"frankie is one of Mumbai's most beloved snack. It is essentially a roll, made with chapati.",
        foodPrice:210,
        foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8V7gmayxz7Ty-xVM80gOimwM-HBMN_qeiQ&usqp=CAU",
        }

    
    ]
}
