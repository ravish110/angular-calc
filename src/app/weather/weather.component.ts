import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component ({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})

export class AppWeather{
   constructor ( private http : Http){}

   cityName = ''; 
   searchCity(){
     this.http.get('https://samples.openweathermap.org/data/2.5/weather?q=' + this.cityName)
     .subscribe(
       (res: Response) =>{
         const weatherCity = res.json();
         console.log(weatherCity);
       }
     )
   }
   
}