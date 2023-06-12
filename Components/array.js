// array of object for all the product 

const products = [
    {
        id: 01,
        name: 'Charger',
        image: 'charger.webp',
        imgDetails: 'charDet.jpeg',
        package:[{
            id:0,
            name:'25 person',
            cup: 50,
            price: 2300 ,
            details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
        },
        {
        id:1,
        name:'50 person',
        cup: 100,
        price: 3500 ,
        details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
        },
        {
        id:2,
        name:'75 person',
        cup: 150,
        price: 4500 ,
        details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
        },
        {
        id:3,
        name:'100 person',
        cup: 200,
        price: 6000 ,
        details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
        },],
        extraPack:[{
        id:0, 
        price: 500 ,
        extra:'Hazel 10 litters , Wardi 10 litters' ,
        } ,
        {
        id:1, 
        price: 15 ,
        extra:'Caramelna' ,
        },
        {
        id:2, 
        price: 20 ,
        extra:'Honey Cake' ,
        },],
    },
    {
        id: 02,
        name: 'Paws',
        image: 'p.jpeg',
        imgDetails: 'pawsDet.jpeg',
        package:[{
            id:0,
            name:'15 person',
            price: 1850 ,
            details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
        },
        {
            id:1,
            name:'25 person',
            price: 2250 ,
            details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
        },
        {
            id:2,
            name:'35 person',
            price: 2800 ,
            details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
        },
        {
            id:3,
            name:'45 person',
            price: 3750,
            details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
        },],
        extraPack:[{
        id:0, 
        price: 500 ,
        extra:'Crep' ,
        } ,
        {
        id:1, 
        price: 500 ,
        extra:'Slush' ,
        },
        {
        id:2, 
        price: 500 ,
        extra:'Hot Chocolate' ,
        },],
    },
    {
        id: 03,
        name: 'Honu',
        image: 'honu.webp',
        imgDetails:  'honuDet.jpeg',
        package:[{
        id:0,
        name:'25 person',
        cup: 30,
        price: 1200 ,
        details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
     },
     {
      id:1,
      name:'50 person',
      cup: 80,
      price: 2300 ,
      details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
     },
     {
      id:2,
      name:'75 person',
      cup: 100,
      price: 3000 ,
      details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
     },
     {
      id:3,
      name:'100 person',
      cup: 150,
      price: 3800 ,
      details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
        },],
    },
    {
        id: 04,
        name: 'Exit55',
        image: 'exit 55.jpeg',
        imgDetails:  'exitDEt.jpeg',
        package:[{
            id:0,
            name:'20 person',
            price: 2000 ,
            details:'20 Burger Meals ,10 Appetizer',
         },
         {
          id:1,
          name:'30 person',
          price: 3000 ,
          details:'30 Burger Meals ,10 Appetizer',
         },
         {
          id:2,
          name:'40 person',
          price: 4000 ,
          details:'40 Burger Meals ,15 Appetizer',
         },
         {
          id:3,
          name:'50 person',
          price: 5000 ,
          details:'50 Burger Meals ,15 Appetizer',
        },],    
        extraPack:[{
        id:0,
        price: 50,
        extra: 'Kids',
      },
      {
        id:1,
        price: 60,
        extra: 'Adult',
        },],
    },
    {
        id: 05,
        name: 'SALT',
        image: 'salt.webp',
        imgDetails:  'saltDe.jpeg',
        package:[{
            id:0,
            name:'10 person',
            price: 1950 ,
            details:'20 Chicken/Beef sliders , 10 Fries , 10 Drinks (Mojitos , Softdrinks & watar)',
         },
         {
          id:1,
          name:'20 person',
          price: 2950 ,
          details:'40 Chicken/Beef sliders , 20 Fries , 20 Drinks (Mojitos , Softdrinks & watar)',
         },
         {
          id:2,
          name:'30 person',
          price: 3500 ,
          details:'60 Chicken/Beef sliders , 30 Fries , 30 Drinks (Mojitos , Softdrinks & watar)',
         },
         {
          id:3,
          name:'50 person',
          price: 5500 ,
          details:'100 Chicken/Beef sliders , 50 Fries , 50 Drinks (Mojitos , Softdrinks & watar)',
        },],
        extraPack:[{
        id:0,
        price: 100,
        extra: 'Addtional Person',
      },
      {
        id:1,
        price: 1000,
        extra: 'Chicken Strips ,Chicken Fingers',
        },],
    },
    {
        id: 06,
        name: 'Origin',
        image: 'org.webp',
        imgDetails: 'org.webp',
        package:[ {
            id:0,
            name:'25 person',
            cup: 30,
            price: 1200 ,
            details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
         },
         {
          id:1,
          name:'50 person',
          cup: 75,
          price: 1800 ,
          details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
         },
         {
          id:2,
          name:'75 person',
          cup: 100,
          price: 2200 ,
          details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
         },
         {
          id:3,
          name:'100 person',
          cup: 150,
          price: 3000 ,
          details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
        },],
    },
    {
        id: 07,
        name: 'Cheat burger',
        image: 'cheat_burger.webp',
        imgDetails:  'cheatDEt.jpeg',
        package:[{
          id:0,
          name:'15 person',
          price: 3450 ,
          details:'15 Burger ,15 Pasta  , 15 Appetizer  , 15 Juice , 8 Steak ',
       },
       {
        id:1,
        name:'20 person',
        price: 4460 ,
        details:'20 Burger ,20 Pasta  , 20 Appetizer  , 20 Juice , 10 Steak ',
       },
       {
        id:2,
        name:'30 person',
        price: 6440 ,
        details:'30 Burger ,30 Pasta  , 30 Appetizer  , 30 Juice , 15 Steak ',
       },
       {
        id:3,
        name:'40 person',
        price: 8420 ,
        details:'40 Burger ,40 Pasta  , 40 Appetizer  , 40 Juice , 20 Steak ',
        },],
      },
    {
        id: 08,
        name: 'Rosemary cafe',
        image: 'rose.png',
        imgDetails:  'RoseCa.jpeg',
        package:[{
            id:0,
            name:'20 person',
            price: 2700 ,
            details:'Speciality Coffee (HOT and COLD)  Sweets and Cakes ',
         },
         {
            id:1,
            name:'30 person',
            price: 3500 ,
            details:'Speciality Coffee (HOT and COLD)  Sweets and Cakes ',
         },
         {
            id:2,
            name:'50 person',
            price: 5000 ,
            details:'Speciality Coffee (HOT and COLD)  Sweets and Cakes ',
        },],
    },
  ];
  

<<<<<<< HEAD
// 01 array of object fro charger packaging 
=======
// 01 array of object fro charger packaging ....
>>>>>>> ca9581713dc955c641f1b5b904ca825a1da194c8
const charger =[
    {
      id:0,
      name:'25 person',
      cup: 50,
      price: 2300 ,
      details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
   },
   {
    id:1,
    name:'50 person',
    cup: 100,
    price: 3500 ,
    details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
   },
   {
    id:2,
    name:'75 person',
    cup: 150,
    price: 4500 ,
    details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
   },
   {
    id:3,
    name:'100 person',
    cup: 200,
    price: 6000 ,
    details:'Cold selections ,Hot specials , Ottoman coffee , Hot sahlab, Triple Q',
   },
];

// 02 array of oject for paws packaging
const paws =[
  {
    id:0,
    name:'15 person',
    price: 1850 ,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 {
    id:1,
    name:'25 person',
    price: 2250 ,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 {
    id:2,
    name:'35 person',
    price: 2800 ,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 {
    id:3,
    name:'45 person',
    price: 3750,
    details:'Mini Pancake ,Browine Cookies , Orignail ice-creame (cerelac)',
 },
 ];

// 03 array of object for honu packaging 
const honu =[
  {
    id:0,
    name:'25 person',
    cup: 30,
    price: 1200 ,
    details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 {
  id:1,
  name:'50 person',
  cup: 80,
  price: 2300 ,
  details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 {
  id:2,
  name:'75 person',
  cup: 100,
  price: 3000 ,
  details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 {
  id:3,
  name:'100 person',
  cup: 150,
  price: 3800 ,
  details:'Cold Drinks ,Hot Drinks , Cookies , Cupcake , Mini cake',
 },
 ];

// 04 array of object for honu packaging 
const Exit55 =[
    {
      id:0,
      name:'20 person',
      price: 2000 ,
      details:'20 Burger Meals ,10 Appetizer',
   },
   {
    id:1,
    name:'30 person',
    price: 3000 ,
    details:'30 Burger Meals ,10 Appetizer',
   },
   {
    id:2,
    name:'40 person',
    price: 4000 ,
    details:'40 Burger Meals ,15 Appetizer',
   },
   {
    id:3,
    name:'50 person',
    price: 5000 ,
    details:'50 Burger Meals ,15 Appetizer',
   },
   ];

// 05 array of object for salt packaging 
const salt =[
    {
      id:0,
      name:'10 person',
      price: 1950 ,
      details:'20 Chicken/Beef sliders , 10 Fries , 10 Drinks (Mojitos , Softdrinks & watar)',
    },
    {
      id:1,
      name:'20 person',
      price: 2950 ,
      details:'40 Chicken/Beef sliders , 20 Fries , 20 Drinks (Mojitos , Softdrinks & watar)',
    },
    {
      id:2,
      name:'30 person',
      price: 3500 ,
      details:'60 Chicken/Beef sliders , 30 Fries , 30 Drinks (Mojitos , Softdrinks & watar)',
    },
    {
      id:3,
      name:'50 person',
      price: 5500 ,
      details:'100 Chicken/Beef sliders , 50 Fries , 50 Drinks (Mojitos , Softdrinks & watar)',
    },
    ];

 // 06 array of object for origin packaging 
const origin =[
  {
    id:0,
    name:'25 person',
    cup: 30,
    price: 1200 ,
    details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 {
  id:1,
  name:'50 person',
  cup: 75,
  price: 1800 ,
  details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 {
  id:2,
  name:'75 person',
  cup: 100,
  price: 2200 ,
  details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 {
  id:3,
  name:'100 person',
  cup: 150,
  price: 3000 ,
  details:'Espresso , Cortado , Americano HOT/COLD , Flat white HOT/COLD ,Cappuccino HOT/COLD ,Latte  HOT/COLD ,Spanish  HOT/COLD , Signuture Latte  HOT/COLD , selection of teas , Hot Chocolate , Cold Brew ',
 },
 ];

 // 07 array of object for cheat Burger packaging 
const cheat_burger =[
  {
    id:0,
    name:'15 person',
    price: 3450 ,
    details:'15 Burger ,15 Pasta  , 15 Appetizer  , 15 Juice , 8 Steak ',
 },
 {
  id:1,
  name:'20 person',
  price: 4460 ,
  details:'20 Burger ,20 Pasta  , 20 Appetizer  , 20 Juice , 10 Steak ',
 },
 {
  id:2,
  name:'30 person',
  price: 6440 ,
  details:'30 Burger ,30 Pasta  , 30 Appetizer  , 30 Juice , 15 Steak ',
 },
 {
  id:3,
  name:'40 person',
  price: 8420 ,
  details:'40 Burger ,40 Pasta  , 40 Appetizer  , 40 Juice , 20 Steak ',
 },
 ];

 // 08 array of oject for rosmary cafe packaging
const rosemary =[
    {
      id:0,
      name:'20 person',
      price: 2700 ,
      details:'Speciality Coffee (HOT and COLD)  Sweets and Cakes ',
   },
   {
      id:1,
      name:'30 person',
      price: 3500 ,
      details:'Speciality Coffee (HOT and COLD)  Sweets and Cakes ',
   },
   {
      id:2,
      name:'50 person',
      price: 5000 ,
      details:'Speciality Coffee (HOT and COLD)  Sweets and Cakes ',
   },
   ];

// 09 array of object for Lamazine packaging 
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


//  array of object for extra packaging

// 01 charger 
  const charExtra =[
  {
    id:0, 
    price: 500 ,
    extra:'Hazel 10 litters , Wardi 10 litters' ,
    } ,
    {
    id:1, 
    price: 15 ,
    extra:'Caramelna' ,
    },
  {
    id:2, 
    price: 20 ,
    extra:'Honey Cake' ,
    },
  ];

// 02 paws
   const pawsExtra =[
  {
    id:0, 
    price: 500 ,
    extra:'Crep' ,
    } ,
    {
    id:1, 
    price: 500 ,
    extra:'Slush' ,
    },
  {
    id:2, 
    price: 500 ,
    extra:'Hot Chocolate' ,
    },
  ];

// 03 exit
   const exitExtra =[
    {
      id:0,
      price: 50,
      extra: 'Kids',
    },
    {
      id:1,
      price: 60,
      extra: 'Adult',
    },
  ]

// 04 salt 
  const saltExtra =[
    {
      id:0,
      price: 100,
      extra: 'Addtional Person',
    },
    {
      id:1,
      price: 1000,
      extra: 'Chicken Strips ,Chicken Fingers',
    },
  ]