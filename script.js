let demoUser={
    name:'Siddharth Goyal',
    email:"goyal@gmail.com",
    password:'goyal123'
}
function login(){
    document.getElementById('myLoginform').addEventListener('submit',(e)=>{
        e.preventDefault()
    let email=document.getElementById("email1").value;
    let password=document.getElementById("password1").value;

    if (email == demoUser.email && password == demoUser.password){
        window.location.href="home.html"
    }
    else{
        alert("Please Enter Correct email and password")
    }
    }
    )

}
