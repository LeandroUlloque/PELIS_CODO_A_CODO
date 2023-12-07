var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(users => {


    cad=`
        
           <img class="izquierdapop" src="./img/usupremium.png" alt="usup"> <p> <strong>${users[0].name} </strong> <br>
	        Usuarios: ${users[0].username}. Email: ${users[0].email} </p><br>
            <p> <strong>${users[1].name}   </strong> <br>
			Usuarios: ${users[1].username}. Email: ${users[1].email} </p><br>
			<p> <strong> ${users[2].name}   </strong> <br>
			Usuarios: ${users[2].username}. Email: ${users[2].email} </p><br>
           
             
        `
        document.getElementById("userpremium").innerHTML=cad
    

});

