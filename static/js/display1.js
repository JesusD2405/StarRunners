    	/* Declaracion de variables */

    	// Pantallas
    	var display2 = false;
	    var display3 = false;

	    // Simulacion
	    var runnerPos = 0;
	    var runnerDisplay = 1;
	    var posX1 = true;
	    var posX2 = true;
	    var posX3 = true;
	    var runnerStart= false;
	    //Posición de los corredores
	    var posX_R1 = 0;
		var posX_R2 = 0;
		var posX_R3 = 0;

	    // Jquery

	    $(document).ready(function()
	    {
	    	// Inicializacion de la ventana modal
	    	$('.modal').modal();

		    /* Acción Iniciar */

			$("#iniciar").click(function(){

				runnerStart = true;

				

				if (posX1===true)
				{
					$("#runnerR1").hide();
					$("#runnerR2").hide();
					$("#runnerR3").hide();
				}
				
				if(runnerPos>-44 && posX1===false) 
				{
					$("#runnerR2").hide();
				}

				$("#runner1").css("display", "initial");
				$("#runner2").css("display", "initial");
				$("#runner3").css("display", "initial");

				// Replicamos la acción
				chatSocket.send(JSON.stringify({
		            'message': 'Play'
		        }));

		    
			});


			/* Acción Detener */

			$("#detener").click(function(){

				runnerStart = false;

				if (posX1===true)
				{
					$("#runnerR1").show();
					$("#runnerR2").show();
					$("#runnerR3").show();
				}

				if(runnerPos>-44 && posX1===false) 
				{
					$(".runnersR2").show();
				}

				$("#runner1").css("display", "none");
				$("#runner2").css("display", "none");
				$("#runner3").css("display", "none");

				// Replicamos la acción
				chatSocket.send(JSON.stringify({
		            'message': 'Stop'
		        }));

			});
		});
	  
	    /* Funciones que se ejecutan segun un tiempo determinado */

	    setInterval(function(){runners()},25);
	    setInterval(function(){verificarConexion()},1500);
	    setInterval(function(){verificarConectividad()},2000);


	    /* Funciones de la simulacion */

	    function runners()
	    {
	    	//console.log('Accion: '+ runnerStart);

	    	//console.log('Número aleatorio: '+ getRandomInt(1,5)); 

	    	// Verificamos si la acción de la simulación está activada

			if (runnerStart===true) 
			{
						/* Movimiento Eje X (->) ida */

				// Corredor 1

				if ((posX_R1<388 && posX1===true) && $('#runner1').length>0)
				{
					// Posición.. Determinada por la velocidad ramdon en px 
					posX_R1+= getRandomInt(1,5);

					// Movimiento del corredor (En movimiento / En reposo)
					$("#runner1").css("margin-left", posX_R1);
					$("#runnerR1").css("margin-left", posX_R1+8);

					// Verificamos si el corredor 1 llegó al final de la pantalla
					if (posX_R1>387)
					{
						console.log('LLegó el corredor: 1');
						// Iniciamos el relevo con el corredor 1 de la pantalla 2
						
						chatSocket.send(JSON.stringify({
				            'message': 'runner1 display2',
				        }));
						
				        // Eliminamos la animación del corredor 1 en la pantalla

				        $("#runnerR1").remove();
				        $("#runner1").remove();
					}
				}

				// Corredor 2

				if ((posX_R2<388 && posX2===true) && $('#runner2').length>0)
				{
					// Posición.. Determinada por la velocidad ramdon en px 
					posX_R2+= getRandomInt(1,5);
					
					// Movimiento del corredor (En movimiento / En reposo)
					$("#runner2").css("margin-left", posX_R2);
					$("#runnerR2").css("margin-left", posX_R2+8);

					// Verificamos si el corredor 2 llegó al final de la pantalla
					if (posX_R2>387)
					{
						console.log('LLegó el corredor: 2');
						// Iniciamos el relevo con el corredor 2 de la pantalla 2
						chatSocket.send(JSON.stringify({
				            'message': 'runner2 display2',
				        }));

				        // Eliminamos la animación del corredor 2 en la pantalla
				        $("#runnerR2").remove();
				        $("#runner2").remove();
					}
				}

				// Corredor 3

				if ((posX_R3<388 && posX3===true) && $('#runner3').length>0)
				{
					// Posición.. Determinada por la velocidad ramdon en px 
					posX_R3+= getRandomInt(1,5);

					// Movimiento del corredor (En movimiento / En reposo)
					$("#runner3").css("margin-left", posX_R3);
					$("#runnerR3").css("margin-left", posX_R3+8);

					// Verificamos si el corredor 3 llegó al final de la pantalla
					if (posX_R3>387)
					{
						console.log('LLegó el corredor: 3');
						// Iniciamos el relevo con el corredor 3 de la pantalla 2
						chatSocket.send(JSON.stringify({
				            'message': 'runner3 display2',
				        }));

				        // Eliminamos la animación del corredor 3 en la pantalla
				        $("#runnerR3").remove();
				        $("#runner3").remove();
					}
				}


		    			/* Movimiento Eje X (<-) vuelta */

		    	// Corredor 1

		    	if ((posX_R1>=387 && posX1===false) && $('#runner_1').length>0)
		    	{
		    		$("#runner_R1").hide();
		    		$("#runner_1").css("display", "initial");
		    		// Depurar
		    		$("#runner_1").css("transform", "rotate(-180deg)");
		    		$("#runner_1").css("-ms-transform", "rotate(-180deg)");
		    		$("#runner_1").css("-webkit-transform", "rotate(-180deg)");
		    	}


		    	if (posX_R1>-44 && posX1===false)
		    	{
		    		posX_R1-= getRandomInt(1,5);

		    		$("#runner_1").css("margin-left", posX_R1);
		    		$("#runner_R1").css("margin-left", posX_R1);

		    		if (posX_R1<=-44)
		    		{
		    			console.log('Llegó el corredor 1');

		    			chatSocket.send(JSON.stringify({
				            'message': 'runner1 display3',
				        }));

		    			$("#runner_1").remove();
		    		}

		    	}

		    	// Corredor 2

		    	if ((posX_R2>=387 && posX2===false) && $('#runner_2').length>0)
		    	{
		    		$("#runner_R2").hide();
		    		$("#runner_2").css("display", "initial");
		    		$("#runner_2").css("transform", "rotate(-180deg)");
		    		$("#runner_2").css("-ms-transform", "rotate(-180deg)");
		    		$("#runner_2").css("-webkit-transform", "rotate(-180deg)");
		    	}


		    	if (posX_R2>-44 && posX2===false)
		    	{
		    		posX_R2-= getRandomInt(1,5);

		    		$("#runner_2").css("margin-left", posX_R2);
		    		$("#runner_R2").css("margin-left", posX_R2);

		    		if (posX_R2<=-44)
		    		{
		    			console.log('Llegó el corredor 2 ');

		    			chatSocket.send(JSON.stringify({
				            'message': 'runner2 display3',
				        }));

		    			$("#runner_2").remove();
		    		}
		    	}

		    	// Corredor 3

		    	if ((posX_R3>=387 && posX3===false) && $('#runner_3').length>0)
		    	{
		    		$("#runner_R3").hide();
		    		$("#runner_3").css("display", "initial");
		    		$("#runner_3").css("transform", "rotate(-180deg)");
		    		$("#runner_3").css("-ms-transform", "rotate(-180deg)");
		    		$("#runner_3").css("-webkit-transform", "rotate(-180deg)");
		    	}


		    	if (posX_R3>-44 && posX3===false)
		    	{
		    		posX_R3-= getRandomInt(1,5);

		    		$("#runner_3").css("margin-left", posX_R3);
		    		$("#runner_R3").css("margin-left", posX_R3);

		    		if (posX_R3<=-44)
		    		{
		    			console.log('Llegó el corredor 3 ');

		    			chatSocket.send(JSON.stringify({
				            'message': 'runner3 display3',
				        }));

		    			$("#runner_3").remove();
		    		}
		    	}

			}

	    }

	    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
		// ¡Usando Math.round() te dará una distribución no-uniforme!
		function getRandomInt(min, max) 
		{
			return Math.floor(Math.random() * (max - min)) + min;
		}

	    /* Funciones WebSocket */

	    function verificarConexion()
	    {
	    	//document.querySelector('#chat-log').value += ('Soy la pantalla 1. \n');

	    	chatSocket.send(JSON.stringify({
	            'message': '1'
	        }));
	    }

	    var chatSocket = new WebSocket(
	        'ws://' + window.location.host +
	        '/ws/simulation/start/display/');

	    

	    chatSocket.onmessage = function(e)
	    {
	        var data = JSON.parse(e.data);
	        var message = data['message'];

	        switch(message)
	        {
	        	case '1':
	        			// Todo en orden
	        			$('#chat-log').val('');
	        			$('chat-log').empty();

	        		break;

	        	case '2':
	        			display2 = true;
	        		break;

	        	case '3':
	        			display3 = true;
	        		break;

	        	case 'runner1 display1':

	        			// Empezamos el relevo del corredor 1

	        			posX1= false;
	        			posX_R1= 387;

	        		break;

	        	case 'runner2 display1':

	        			// Empezamos el relevo del corredor 2

	        			posX2= false;
	        			posX_R2= 387;

	        		break;

	        	case 'runner3 display1':

	        			// Empezamos el relevo del corredor 3

	        			posX3= false;
	        			posX_R3= 387;

	        		break;
	        }

	        //document.querySelector('#chat-log').value += (message);
	    };

	    function verificarConectividad()
	    {
	    	if (display2==true && display3==true)
	    	{
	    		$('#DisplayDisconnect').modal('close');
	    	}


	    	if (display2===false)
	    	{
	    		$('#DisplayDisconnect').modal('open');
	    		runnerStart = false;

	    		//console.log($('#display').html());

	    		if ($('#display').text()!=2)
	    		{
	    			$('#display').append('2');
	    		}

	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/2");

	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 2 no conectada!'
		        }));
	    	}

	    	if (display3===false)
	    	{
	    		$('#DisplayDisconnect').modal('open');
	    		runnerStart = false;

	    		if ($('#display').text()!=3)
	    		{
	    			$('#display').append('3');
	    		}

	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/3");

	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 3 no conectada!'
		        }));
	    	}

		    display2 = false;
		    display3 = false;
	    }

	    chatSocket.onclose = function(e) {
	        console.error('Chat socket closed unexpectedly');
	        chatSocket.send(JSON.stringify({
	            'message': 'disconect 1',
	        }));
	    };

	    //document.querySelector('#chat-message-input').focus();
	    /*
	    document.querySelector('#chat-message-input').onkeyup = function(e) {
	        if (e.keyCode === 13) {  // enter, return
	            document.querySelector('#chat-message-submit').click();
	        }
	    };

	    document.querySelector('#pause').onclick = function(e) {
	        var messageInputDom = document.querySelector('#chat-message-input');
	        var message = messageInputDom.value;
	        chatSocket.send(JSON.stringify({
	            'message': message
	        }));

	        messageInputDom.value = '';
	    };

	    document.querySelector('#resume').onclick = function(e) {
	        var messageInputDom = document.querySelector('#chat-message-input');
	        var message = messageInputDom.value;
	        chatSocket.send(JSON.stringify({
	            'message': message
	        }));

	        messageInputDom.value = '';
	    };
	    */

	    /* Tiempo 

	    var centesimas = 0;
		var segundos = 0;
		var minutos = 0;
		var horas = 0;
		function inicio () {
			control = setInterval(cronometro,10);
			document.getElementById("inicio").disabled = true;
			document.getElementById("parar").disabled = false;
			document.getElementById("continuar").disabled = true;
			document.getElementById("reinicio").disabled = false;
		}
		function parar () {
			clearInterval(control);
			document.getElementById("parar").disabled = true;
			document.getElementById("continuar").disabled = false;
		}
		function reinicio () {
			clearInterval(control);
			centesimas = 0;
			segundos = 0;
			minutos = 0;
			horas = 0;
			Centesimas.innerHTML = ":00";
			Segundos.innerHTML = ":00";
			Minutos.innerHTML = ":00";
			Horas.innerHTML = "00";
			document.getElementById("inicio").disabled = false;
			document.getElementById("parar").disabled = true;
			document.getElementById("continuar").disabled = true;
			document.getElementById("reinicio").disabled = true;
		}
		
		function cronometro () {
			if (centesimas < 99) {
				centesimas++;
				if (centesimas < 10) { centesimas = "0"+centesimas }
				//Centesimas.innerHTML = ":"+centesimas;
			}
			if (centesimas == 99) {
				centesimas = -1;
			}
			if (centesimas == 0) {
				segundos ++;
				if (segundos < 10) { segundos = "0"+segundos }
				Segundos.innerHTML = ":"+segundos;
			}
			if (segundos == 59) {
				segundos = -1;
			}
			if ( (centesimas == 0)&&(segundos == 0) ) {
				minutos++;
				if (minutos < 10) { minutos = "0"+minutos }
				Minutos.innerHTML = ":"+minutos;
			}
			if (minutos == 59) {
				minutos = -1;
			}
			if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
				horas ++;
				if (horas < 10) { horas = "0"+horas }
				//Horas.innerHTML = horas;
			}
		}
		*/
		