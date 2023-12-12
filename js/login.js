function go(){

    if (document.form.password.value=='admin' && document.form.login.value=='admin'){ 
        sessionStorage.setItem("pelis", "si" );
        location.href= "pelis.html";
            
        } 
        else  if(document.form.password.value=='user' && document.form.login.value=='user'){ 

            sessionStorage.setItem("user", "si" );
            location.href= "pelisuser.html";
           
        }else{
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 

        } 

    } 
    

     