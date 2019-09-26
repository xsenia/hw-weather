export interface IHotel {
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

 export const hotels: IHotel[] = [
    {
        img: 'assets/img/city-01.jpg',
        address: 'Москва',
        phone:  343-22-33, 
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
        type: 'Hotel'
    },
    {
        img: 'assets/img/city-02.jpg',
        address: 'Воронеж',
        phone:  22-11-30, 
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
        type: 'Tour'
    }
 ];
 