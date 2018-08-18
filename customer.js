

class Customer{
	constructor( customerName ){
		this.name = customerName;
		this.room = null; //room we are currently
		this.isHungry = false;
        var hungerCheck = setInterval(checkIfHungry, 10000);
	}
	orderRoomService( food ){
		this.room.getRoomService( food );
	}
	eat( food ){
		
	}
    checkIfHungry(){
        var chanceOfHunger = Math.random();
        if (chanceOfHunger < 0.05 && !this.isHungry){
            this.isHungry = true;
            this.orderRoomService( 'peanut butter, banana, and bacon sandwich' );
        }
    }
}