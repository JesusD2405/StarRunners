    	/* Declaracion de variables */

    	// Pantallas
    	var display1 = false;
    	var display2 = false;
	    var display3 = false;

	    // Movimiento de la simulacion
	    var runnerStart  = false;
	    var runnerStatus = false;
	    var runnerPosX = 0;
	    //Posición de los corredores en el eje X
	    var posX_R1 = 0;
		var posX_R2 = 0;
		var posX_R3 = 0;
		//Posición de los corredores en el eje Y
	    var posY_R1 = 0;
		var posY_R2 = 0;
		var posY_R3 = 0;

	    var runnerPosY = 0;
	    var runnerMaxPosX1 = 350;
	    var runnerMaxPosY = 300;
	    var runnerMaxPosX2 = -19;
	    var pos1X = true;
	    var pos2X = true;
	    var pos3X = true;
	    var pos1Y = true;
	    var pos2Y = true;
	    var pos3Y = true;
	    var runnerDisplay = 1;
	    
	    // Rotacion de la simulacion
	    var runner1RotX = 209;
	    var runner2RotX = 259;
	    var runner3RotX = 309;
	    var runner1Rot1 = -30;
	    var runner2Rot1 = -30;
	    var runner3Rot1 = -30;
	    var runner1RotY = 150;
	    var runner2RotY = 200;
	    var runner3RotY = 250;
	    var runner1Rot2 = -120;
	    var runner2Rot2 = -120;
	    var runner3Rot2 = -120;
	    var rotR1 = false;

	    // Jquery

	    $(document).ready(function()
	    {
	    	// Inicializacion de la ventana modal
	    	$('.modal').modal();
		});

    	setInterval(function(){runners()},50);
	   	setInterval(function(){verificarConexion()},1500);
	   	setInterval(function(){verificarConectividad()},2000);

	   	/* Funciones de la simulacion */

	    function runners()
	    {
	    	// Mostrar corredores en movimiento
	    	if (runnerStart===true && runnerStatus===true)
	    	{
	    		$("#runnerR1").hide();
	    		$("#runnerR2").hide();
	    		$("#runnerR3").hide();
	    		$("#runner1").css("display", "initial");
	    		$("#runner2").css("display", "initial");
	    		$("#runner3").css("display", "initial");
	    	
	    				/* Movimiento Eje X (->) ida */

	    		// Corredor 1
	    		if (posX_R1>0 && pos1X===true)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
					posX_R1+= getRandomInt(1,5);
		    		
		    		$("#runner1").css("margin-left", posX_R1);
		    		$("#runnerR1").css("margin-left", posX_R1+8);

		    		// Finalizar movimiento Eje X
			    	if (posX_R1 >= (runnerMaxPosX1-100))
			    	{
			    		$("#runner1").css("margin-top", -500);
			    		pos1X= false;
			    	}
		    	}

		    	// Corredor 2
	    		if (posX_R2>0 && pos2X===true)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
					posX_R2+= getRandomInt(1,5);
		    		
		    		$("#runner2").css("margin-left", posX_R2);
		    		$("#runnerR2").css("margin-left", posX_R2+8);

		    		// Finalizar movimiento Eje X
			    	if (posX_R2 >= (runnerMaxPosX1-50))
			    	{
			    		$("#runner2").css("margin-top", -500);
			    		pos2X= false;
			    	}
		    	}

		    	// Corredor 3
	    		if (posX_R3>0 && pos3X===true)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
					posX_R3+= getRandomInt(1,5);
		    		
		    		$("#runner3").css("margin-left", posX_R3);
		    		$("#runnerR3").css("margin-left", posX_R3+8);

		    		// Finalizar movimiento Eje X
			    	if (posX_R3 >= runnerMaxPosX1)
			    	{
			    		$("#runner3").css("margin-top", -500);
			    		pos3X= false;
			    	}
		    	}


		    			/* Movimiento Eje X. Rotacion 1 - Esquina inferior */

		    	// Corredor 1
	    		if(posX_R1>=runner1RotX && pos1X===true)
	    		{
	    			$("#runner1").css("transform", "rotate("+runner1Rot1+"deg)");
	    			$("#runner1").css("-ms-transform", "rotate("+runner1Rot1+"deg)");
	    			$("#runner1").css("-webkit-transform", "rotate("+runner1Rot1+"deg)");

	    			runner1RotX += 10;
	    			runner1Rot1 += -15;
	    		}

	    		// Corredor 2
	    		if(posX_R2>=runner2RotX && pos2X===true)
	    		{
	    			$("#runner2").css("transform", "rotate("+runner2Rot1+"deg)");
	    			$("#runner2").css("-ms-transform", "rotate("+runner2Rot1+"deg)");
	    			$("#runner2").css("-webkit-transform", "rotate("+runner2Rot1+"deg)");

	    			runner2RotX += 10;
	    			runner2Rot1 += -15;
	    		}

	    		// Corredor 3
	    		if(posX_R3>=runner3RotX && pos3X===true)
	    		{
	    			$("#runner3").css("transform", "rotate("+runner3Rot1+"deg)");
	    			$("#runner3").css("-ms-transform", "rotate("+runner3Rot1+"deg)");
	    			$("#runner3").css("-webkit-transform", "rotate("+runner3Rot1+"deg)");

	    			runner3RotX += 10;
	    			runner3Rot1 += -15;
	    		}

		    			/* Movimiento Eje Y */

		    	// Corredor 1
		    	if (posY_R1<=(runnerMaxPosY-100) && pos1X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R1 += getRandomInt(1,5);

		    		$("#runner1").css("margin-bottom", posY_R1);
		    		$("#runnerR1").css("margin-bottom", posY_R1);
		    	}

		    	// Corredor 2
		    	if (posY_R2<=(runnerMaxPosY-50) && pos2X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R2 += getRandomInt(1,5);

		    		$("#runner2").css("margin-bottom", posY_R2);
		    		$("#runnerR2").css("margin-bottom", posY_R2);
		    	}

		    	// Corredor 3
		    	if (posY_R3<=runnerMaxPosY && pos3X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R3 += getRandomInt(1,5);

		    		$("#runner3").css("margin-bottom", posY_R3);
		    		$("#runnerR3").css("margin-bottom", posY_R3);
		    	}


		    			/* Movimiento Eje Y. Rotacion 2 - Esquina superior */
		    	
		    	// Corredor 1		    	
		    	if(posY_R1>=runner1RotY && posY_R1<=(runnerMaxPosY-100))
	    		{
	    			$("#runner1").css("transform", "rotate("+runner1Rot2+"deg)");
	    			$("#runner1").css("-ms-transform", "rotate("+runner1Rot2+"deg)");
	    			$("#runner1").css("-webkit-transform", "rotate("+runner1Rot2+"deg)");

	    			runner1RotY += 10;
	    			runner1Rot2 += -15;
	    		}

	    		// Corredor 2
	    		if(posY_R2>=runner2RotY && posY_R2>=(runnerMaxPosY-50))
	    		{
	    			$("#runner2").css("transform", "rotate("+runner2Rot2+"deg)");
	    			$("#runner2").css("-ms-transform", "rotate("+runner2Rot2+"deg)");
	    			$("#runner2").css("-webkit-transform", "rotate("+runner2Rot2+"deg)");

	    			runner2RotY += 10;
	    			runner2Rot2 += -15;
	    		}

	    		// Corredor 3
	    		if(posY_R3>=runner3RotY && posY_R3>=runnerMaxPosY)
	    		{
	    			$("#runner3").css("transform", "rotate("+runner3Rot2+"deg)");
	    			$("#runner3").css("-ms-transform", "rotate("+runner3Rot2+"deg)");
	    			$("#runner3").css("-webkit-transform", "rotate("+runner3Rot2+"deg)");

	    			runner3RotY += 10;
	    			runner3Rot2 += -15;
	    		}


	    				/* Movimiento Eje X (<-) vuelta */

	    		// Corredor 1 

	    		if ((posX_R1>=runnerMaxPosX2  && posY_R1>=(runnerMaxPosY-100)) && $('#runner1').length>0)
		    	{
		    		console.log('Corriendo en X');

		    		posX_R1 -= getRandomInt(1,5);

		    		$("#runner1").css("margin-left", posX_R1);
		    		//$("#runnerR1").css("margin-left", posX_R1);

		    		if (posX_R1<=runnerMaxPosX2)
		    		{
		    			console.log('Llegó el corredor 1');

		    			chatSocket.send(JSON.stringify({
			            	'message': 'runner1 display1',
				        }));

		    			$("#runner1").remove();
		    			$("#runnerR1").remove();
		    		}
		    	}

		    	// Corredor 2 

	    		if ((posX_R2>=runnerMaxPosX2 && posY_R2>=(runnerMaxPosY-50)) && $('#runner2').length>0)
		    	{
		    		posX_R2 -= getRandomInt(1,5);

		    		$("#runner2").css("margin-left", posX_R2);
		    		$("#runnerR2").css("margin-left", posY_R2);

		    		if (posX_R2<=runnerMaxPosX2)
		    		{
		    			console.log('Llegó el corredor 2');

		    			chatSocket.send(JSON.stringify({
			            	'message': 'runner2 display1',
				        }));

		    			$("#runner2").remove();
		    			$("#runnerR2").remove();
		    		}
		    	}

		    	// Corredor 3 

	    		if (posX_R3>=runnerMaxPosX2 && posY_R3>=runnerMaxPosY && $('#runner3').length>0)
		    	{
		    		posX_R3 -= getRandomInt(1,5);

		    		$("#runner3").css("margin-left", posX_R3);
		    		$("#runnerR3").css("margin-left", posY_R3);

		    		if (posX_R3<=runnerMaxPosX2)
		    		{
		    			console.log('Llegó el corredor 3');

		    			chatSocket.send(JSON.stringify({
			            	'message': 'runner3 display1',
				        }));

		    			$("#runner3").remove();
		    			$("#runnerR3").remove();
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

	    /* Funciones de WebSocket */

	    function verificarConexion()
	    {
	    	chatSocket.send(JSON.stringify({
	            'message': '2'
	        }));
	    }

	    var chatSocket = new WebSocket(
	        'ws://' + window.location.host +
	        '/ws/simulation/start/display/');

	    chatSocket.onmessage = function(e) {
	        var data = JSON.parse(e.data);
	        var message = data['message'];

	        switch(message)
	        {
	        	case '1':
	        			display1 = true;
	        		break;

	        	case '3':
	        			display3 = true;
	        		break;

	        	case 'Play':

						/* La acción recibida es reanudar la simulación */

						// Verificamos si en dicha pantalla se encuentra la animación

	        			if (runnerStart===true)
	        			{
	        				runnerStatus= true;

	        				$("#runnerR1").hide();
				    		$("#runnerR2").hide();
				    		$("#runnerR3").hide();

				    		$("#runner1").css("display", "initial");
				    		$("#runner2").css("display", "initial");
				    		$("#runner3").css("display", "initial");
	        			}        				

	        		break;

	        	case 'Stop':
	        	
        				/* La acción recibida es detener la simulación */

        				// Verificamos si en dicha pantalla se encuentra la animación

	        			if (runnerStart===true)
	        			{
	        				runnerStatus= false;

	        				$("#runnerR1").show();
				    		$("#runnerR2").show();
				    		$("#runnerR3").show();

							$("#runner1").css("display", "none");
							$("#runner2").css("display", "none");
							$("#runner3").css("display", "none");
	        			}

	        		break;

	        	case 'runner1 display2':

	        			// Empezamos el relevo del corredor 1

	        			runnerStart= true;
        				runnerStatus= true;
        				posX_R1= 1;

	        		break;

	        	case 'runner2 display2':

	        			// Empezamos el relevo del corredor 2

	        			runnerStart= true;
        				runnerStatus= true;
        				posX_R2= 1;

	        		break;

	        	case 'runner3 display2':

	        			// Empezamos el relevo del corredor 3

	        			runnerStart= true;
        				runnerStatus= true;
        				posX_R3= 1;

	        		break;
	        }
	    };

	    function verificarConectividad()
	    {
	    	if (display1==true && display3==true)
	    	{
	    		$('#DisplayDisconnect').modal('close');
	    	}

	    	if (display1==false)
	    	{
	    		$('#DisplayDisconnect').modal('open');

	    		if ($('#display').text()!=1)
	    		{
	    			$('#display').append('1');
	    		}

	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/1");
	    		
	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 1 no conectada!'
		        }));
		        
	    	}

	    	if (display3==false)
	    	{
	    		$('#DisplayDisconnect').modal('open');

	    		if ($('#display').text()!=3)
	    		{
	    			$('#display').append('3');
	    		}

	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/3");

	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 3 no conectada!'
		        }));
	    	}

	    	display1 = false;
		    display3 = false;
	    }

	    chatSocket.onclose = function(e) {
	        console.error('Chat socket closed unexpectedly');
	    };

	    /*

	    document.querySelector('#chat-message-input').focus();
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