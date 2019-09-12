class Customer{
  constructor(roomNumber, leaveRoom){
    this.roomNumber = roomNumber;
    this.leave = leaveRoom;
  }
  orderRoomService(){
    //
  }
  leaveRoom(checkout){
    if(checkout){
      console.log("Customer wants to checkout ");
      this.leave(true);
    }
    else{
      console.log("Customer leaving room  ", this.roomNumber)
      this.leave();
    }
  }
}
