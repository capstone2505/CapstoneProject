// array of object for all the product 

const products = [
    {
      id: 1,
      name: 'Charger',
      image: '../assets/images2/charger.webp',
    },
    {
      id: 2,
      name: 'Paws',
      image: '../assets/images2/p.jpeg',
    },
    {
      id: 3,
      name: 'Honu',
      image: '../assets/images2/honu.webp',
    },
    {
        id: 4,
        name: 'Exit55',
        image: '../assets/images2/exit 55.jpeg',
    },
    {
        id: 5,
        name: 'Aurora',
        image: '../assets/images2/charger.webp',
    },
    {
        id: 6,
        name: 'Does',
        image: '../assets/images2/dose.png',
    },
    {
        id: 7,
        name: 'cheat burger',
        image: '../assets/images2/cheat_burger.webp',
        
        package:
        [
          {
          id:1,
          name:'15 person',
          price: 3450 ,
          details:'15 Burger ,15 Pasta  , 15 Appetizer  , 15 Juice , 8 Steak ',
       },
       {
        id:2,
        name:'20 person',
        price: 4460 ,
        details:'20 Burger ,20 Pasta  , 20 Appetizer  , 20 Juice , 10 Steak ',
       },
       {
        id:3,
        name:'30 person',
        price: 6440 ,
        details:'30 Burger ,30 Pasta  , 30 Appetizer  , 30 Juice , 15 Steak ',
       },
       {
        id:4,
        name:'40 person',
        price: 8420 ,
        details:'40 Burger ,40 Pasta  , 40 Appetizer  , 40 Juice , 20 Steak ',
       },]
      },
    {
        id: 8,
        name: 'Volume cafe',
        image: '../assets/images2/volume.webp',
    },
  ];
  
  // 01 array of oject for paws packaging

  const paws =[
  {
    id:1,
    name:'15 person',
    price: 1850 ,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 {
    id:2,
    name:'25 person',
    price: 2250 ,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 {
    id:3,
    name:'35 person',
    price: 2800 ,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 {
    id:4,
    name:'45 person',
    price: 3750,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 ];

// 02 array of object fro charger packaging 

const charger =[
  {
    id:1,
    name:'25 person',
    cup: 50,
    price: 2300 ,
    details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
 },
 {
  id:2,
  name:'50 person',
  cup: 100,
  price: 3500 ,
  details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
 },
 {
  id:3,
  name:'75 person',
  cup: 150,
  price: 4500 ,
  details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
 },
 {
  id:4,
  name:'100 person',
  cup: 200,
  price: 6000 ,
  details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
 },
 ];

// 03 array of object for honu packaging 
const honu =[
  {
    id:1,
    name:'25 person',
    cup: 30,
    price: 1200 ,
    details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 {
  id:2,
  name:'50 person',
  cup: 80,
  price: 2300 ,
  details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 {
  id:3,
  name:'75 person',
  cup: 100,
  price: 3000 ,
  details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 {
  id:4,
  name:'100 person',
  cup: 150,
  price: 3800 ,
  details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 ];

 // 04 array of object for origin packaging 
const origin =[
  {
    id:1,
    name:'25 person',
    cup: 30,
    price: 1200 ,
    details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 {
  id:2,
  name:'50 person',
  cup: 75,
  price: 1800 ,
  details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 {
  id:3,
  name:'75 person',
  cup: 100,
  price: 2200 ,
  details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 {
  id:4,
  name:'100 person',
  cup: 150,
  price: 3000 ,
  details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 ];

 // 05 array of object for cheat Burger packaging 
const cheat_burger =[
  {
    id:1,
    name:'15 person',
    price: 3450 ,
    details:'15 Burger ,15 Pasta  , 15 Appetizer  , 15 Juice , 8 Steak ',
 },
 {
  id:2,
  name:'20 person',
  price: 4460 ,
  details:'20 Burger ,20 Pasta  , 20 Appetizer  , 20 Juice , 10 Steak ',
 },
 {
  id:3,
  name:'30 person',
  price: 6440 ,
  details:'30 Burger ,30 Pasta  , 30 Appetizer  , 30 Juice , 15 Steak ',
 },
 {
  id:4,
  name:'40 person',
  price: 8420 ,
  details:'40 Burger ,40 Pasta  , 40 Appetizer  , 40 Juice , 20 Steak ',
 },
 ];

 // 06 array of object for Lamazine packaging 
const Lamazine =[
  {
    id:1,
    name:'15 person',
    price: 1140 ,
    details:'40 Mutton Kabeb Skewers ,20 Chicken Kebab Skewers , 20 Kofta Mutton Skewers , 10 Mutton chops , 10 Chicken drumsticks & wings ,10 Hummus , 10 Cucmber Yougut Pomegranate salad ',
 },
 {
  id:2,
  name:'20 person',
  price: 1580 ,
  details:'65 Mutton Kabeb Skewers ,30 Chicken Kebab Skewers , 30 Kofta Mutton Skewers , 15 Mutton chops , 10 Chicken drumsticks & wings ,10 Hummus , 15 Cucmber Yougut Pomegranate salad ',
 },
 {
  id:3,
  name:'30 person',
  price: 2270 ,
  details:'100 Mutton Kabeb Skewers ,40 Chicken Kebab Skewers , 40 Kofta Mutton Skewers , 20 Mutton chops , 20 Chicken drumsticks & wings ,15 Hummus , 15 Cucmber Yougut Pomegranate salad ',
 },
 {
  id:4,
  name:'40 person',
  price: 3180 ,
  details:'120 Mutton Kabeb Skewers ,70 Chicken Kebab Skewers , 50 Kofta Mutton Skewers , 30 Mutton chops , 20 Chicken drumsticks & wings ,20 Hummus , 20 Cucmber Yougut Pomegranate salad ',
 },
 ];

