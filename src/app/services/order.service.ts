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
    foodDetails:"oreo ice cream",
    foodPrice:213,
    foodImg:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
    id:2,
    foodName:"veggie supreme",
    foodDetails:"oreo ice cream",
    foodPrice:213,
    foodImg:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
    id:3,
    foodName:"Paneer Burger",
    foodDetails:"oreo ice cream",
    foodPrice:213,
    foodImg:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
    id:4,
    foodName:"Oreo cheesecake Ice cream",
    foodDetails:"oreo ice cream",
    foodPrice:213,
    foodImg:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
    id:5,
    foodName:"veg masala roll in naan",
    foodDetails:"oreo ice cream",
    foodPrice:213,
    foodImg:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }
    
    ]
}
