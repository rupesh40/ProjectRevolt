class GridOwner {

    GridOwner(args) {
        this.id = args.id; // id is passed while initializing, can fetch details from db
    }

    getOwnerDetails() {
        // fetch from db based on "this.id" and return
        return null;
    }

    getOwnedStations() {
        return [];// we'll return array of gridStationObjects
    }


    // Info: this method should be in a totally different file => gridService.js
    // let it here untill we make that file
    demand_on_grid(args) {
        // TODO: Fetch demand based on grid args.id
        console.log("function for demand on grid");
    }

    // info: this should also be in gridService.js
    slotBooking_backside() {
        console.log("function for slot booking in backend");

    }

    // Do we need this method? what it is supposed to do?
    charging_station() {
        console.log("function for Charging_station");

    }
}

module.exports.GridOwner = GridOwner; 