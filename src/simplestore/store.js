
import {seedData} from '../seeds';
export const store = {
 state: {
     seedData
 },
 getActiveday(){
     console.log(this.state.seedData);
     return this.state.seedData.find(day => day.active);
 },
 setActiveDay(dayId){
return this.state.seedData.map((dayobj) => dayobj.id == dayId ?  dayobj.active = true :  dayobj.active = false);
 },
 submitEvent(eventDetails){
     const activeDay = this.getActiveday();
     activeDay.events.push({details: eventDetails, edit:false});
 }

//     state: {
//         numbers:[10,20,30],
  
// },
// countNumber(number){
//     return this.state.numbers.push(Number(number));
// }
}