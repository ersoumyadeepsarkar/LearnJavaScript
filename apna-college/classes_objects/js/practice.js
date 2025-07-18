  let userObject= {
    name:"Soumyadeep",
    email: "a@Car.com",
    viewData: function viewData(){
      console.log("View data by obj ",this);
      return true;
    }

  }


  class User{
  constructor(name="",email=""){
  this.name=name;
  this.email=email;
  }
  viewData(){
      console.log("View data by class ",this);
      return true;
    }



    
  }

  console.log("Print Object",userObject);
  console.log("Print viewData",userObject.viewData);
  console.log("call viewData--> ",userObject.viewData());


  let userCObject= new User()
  console.log("Print default const",userCObject);
  console.log("print viewData",userCObject.viewData);
  console.log("Call viewdata",userCObject.viewData());


  let userxObject= new User("gora","a@p.com")
  console.log("Print parameterizes const",userxObject)
  console.log("print viewData",userxObject.viewData);
  console.log("Call viewdata",userxObject.viewData());



class User1{
constructor(name,email){
  console.log("name--->"+name);
  console.log("email--->"+email)

}
 viewData(){
    console.log("View data by class ",this);
    return true;
  }


  
}

console.log("**************************************************************************")

userCObject= new User1();
console.log("Print default const----",userCObject);
console.log("print viewData----",userCObject.viewData);
console.log("Call viewdata---",userCObject.viewData());


userxObject= new User1("gora","a@p.com")
console.log("Print parameterizes const---",userxObject)
console.log("print viewData---",userxObject.viewData);
console.log("Call viewdata---",userxObject.viewData());



class Admin extends User{
  constructor(name,email){
    super(name,email)
  }

}

let admin =new Admin("happy","h@c.com");
admin.viewData();

