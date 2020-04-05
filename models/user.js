/**
 * For now leave this class as it is
 * we'll modify it as we proceed
 */
class User {
    /** See Schema.js */

    /**
     * creats a new user object
     * @param {user.shcema} args
     * @returns user onject
     */
    createUser(args){
        this.id = args.id || undefined;
        this.firstName = args.firstName || undefined;
        this.lastName = args.lastName || undefined;
        this.userName = args.userName || undefined;
        this.email = args.email || undefined;
        this.phoneNumber = args.phoneNumber || undefined;
        this.Address = args.Address || undefined;
        this.ownedVehicals = args.ownedVehicals || undefined;
        return this;
    }

    // maps() {
    //     console.log("function for maps");
    // }

    // slotBooking() {
    //     console.log("function for slot booking");
    // }

    // rangeAnxiety() {
    //     console.log("function for range anxiety solution");
    // }

    // tripPlanner() {
    //     console.log("function for trip planner");
    // }
}

module.exports = new User(); 