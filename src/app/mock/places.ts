export interface IPlace {
    img:string,
    address:string,
    phone:  number,
    weather: {
       title:string,
       icon:string,
       water:number,
       temperature: number
    },
    social_info:{ 
       title: string,
       img:string,
       followers:number,
       following:number
    }, 
    type: string
 }

 export const places: IPlace[] = [
    {
        img: 'assets/img/city-01.jpg',
        address: 'Москва',
        phone:  34534567, 
        weather: {
           title: 'тайтл погоды',
           icon: 'assets/img/city-01.jpg',
           water: 23,
           temperature: 32
        },
        social_info:{ 
           title: 'тайтл соцсети',
           img: 'assets/img/city-01.jpg',
           followers: 22,
           following: 33
        }, 
        type: 'Отели'
    },    
    {
        img: 'assets/img/city-02.jpg',
        address: 'Воронеж',
        phone:  48264986, 
        weather: {
           title: 'тайтл погоды 2',
           icon: 'assets/img/city-02.jpg',
           water: 13,
           temperature: 12
        },
        social_info:{ 
           title: 'тайтл соцсети 2',
           img: 'assets/img/city-02.jpg',
           followers: 202,
           following: 133
        }, 
        type: 'Туры'
    },
    {
        img: 'assets/img/city-03.jpg',
        address: 'Волга',
        phone:  375606783, 
        weather: {
           title: 'тайтл погоды 3',
           icon: 'assets/img/city-03.jpg',
           water: 13,
           temperature: 12
        },
        social_info:{ 
           title: 'тайтл соцсети 3',
           img: 'assets/img/city-03.jpg',
           followers: 202,
           following: 133
        }, 
        type: 'Рыбалка'
    },
    {
      img: 'assets/img/city-01.jpg',
      address: 'Москва',
      phone:  264985673, 
      weather: {
         title: 'тайтл погоды',
         icon: 'assets/img/city-01.jpg',
         water: 23,
         temperature: 32
      },
      social_info:{ 
         title: 'тайтл соцсети',
         img: 'assets/img/city-01.jpg',
         followers: 22,
         following: 33
      }, 
      type: 'Отели'
   },
   {
       img: 'assets/img/city-03.jpg',
       address: 'Волга',
       phone:  217485667, 
       weather: {
          title: 'тайтл погоды 3',
          icon: 'assets/img/city-03.jpg',
          water: 13,
          temperature: 12
       },
       social_info:{ 
          title: 'тайтл соцсети 3',
          img: 'assets/img/city-03.jpg',
          followers: 202,
          following: 133
       }, 
       type: 'Рыбалка'
   },
   {
     img: 'assets/img/city-01.jpg',
     address: 'Москва',
     phone:  48562, 
     weather: {
        title: 'тайтл погоды',
        icon: 'assets/img/city-01.jpg',
        water: 23,
        temperature: 32
     },
     social_info:{ 
        title: 'тайтл соцсети',
        img: 'assets/img/city-01.jpg',
        followers: 22,
        following: 33
     }, 
     type: 'Отели'
  }
 ];
 