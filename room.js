class Room {
	constructor(hotelReference) {
		this.occupant = null; //a customer
		this.hotel = hotelReference;
	}
	addOccupant( customer ) {
		this.occupant = customer;
	}
	checkIfOccupied() {

	}
	removeOccupant() {

	}
	getRoomService(food) {
		this.hotel.getKitchenService();
	}
}