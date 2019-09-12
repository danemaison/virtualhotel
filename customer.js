class Customer{
  constructor(roomNumber, checkoutOfHotel){
    this.roomNumber = roomNumber;

    this.checkoutOfHotel = checkoutOfHotel;
    this.leaveRoom = null;
  }
  leave(){
    if(!this.leaveRoom){
      console.log("You aint in a room");
      return false;
    }
    this.leaveRoom();
  }
  checkout(){
    this.checkoutOfHotel();
  }
}
