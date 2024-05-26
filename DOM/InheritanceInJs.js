class VehicleParts{
  Material1="tyre";
  Material2="Handle"
  getParts(){
    return [this.Material1,this.Material2];
  }
  m1(){
    console.log('m1 child class');
  }
}

class Vehicle extends VehicleParts{

  m1(){
    console.log('m1 child class');
  }
  vehicleName="Maruti";
}

let vehicle=new Vehicle();
console.log('Material1 Name:'+vehicle.Material1);
console.log(vehicle.getParts());
let mat=vehicle.getParts();
console.log(mat[1]);
vehicle.m1();

