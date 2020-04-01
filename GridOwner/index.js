class GridOwner{
    Demand_on_grid(){
       console.log("function for demand on grid");

   }
    SlotBooking_backside(){
       console.log("function for slot booking in backend");

   }
    Charging_station(){
       console.log("function for Charging_station");
   
   }
}

owner= new GridOwner();
owner.Demand_on_grid();
owner.SlotBooking_backside();
owner.Charging_station();

module.exports.GridOwner = GridOwner; 