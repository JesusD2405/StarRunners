	   /* Declaracion de variables */

    	// Pantallas
    	var display1 = false;
    	var display2 = false;
	    var display3 = false;

	    // Movimiento de la simulacion
	    var runnerStart = false;
	    var runnerStatus = false;
	    //var runnerPosX = 110;
	    //var runnerPosY = -49;
	    //var posX = true;
	    //var posY = true;
	    var runnerDisplay = 1;
	    var pos1X = true;
	    var pos2X = true;
	    var pos3X = true;
	    var runnerMaxPosX1 = -185;
	    var runnerMaxPosY = -358;
	    var runnerMaxPosX2 = 115;
	    //Posición de los corredores en el eje X
	    var posX_R1 = 110;
		var posX_R2 = 110;
		var posX_R3 = 110;
		//Posición de los corredores en el eje Y
	    var posY_R1 = -49;
		var posY_R2 = -49;
		var posY_R3 = -49;

	    // Rotacion de la simulacion Eje X. Rotacion 1 - Esquina superior
	    var runner1RotX = -29;
	    var runner2RotX = -79;
	    var runner3RotX = -129;
	    var runner1Rot1 = -195;
	    var runner2Rot1 = -195;
	    var runner3Rot1 = -195;
	    //var runnerRot1 = -195;
	    // Rotacion de la simulacion. Eje Y. Rotacion 2 - Esquina inferior
	    var runner1RotY = -198;
	    var runner2RotY = -316;
	    var runner3RotY = -405;
	    var runner1Rot2 = -285;
	    var runner2Rot2 = -285;
	    var runner3Rot2 = -285;

	    // Jquery

	    $(document).ready(function()
	    {
	    	// Inicializacion de la ventana modal
	    	$('.modal').modal();
		});

    	setInterval(function(){runners()},25);
	   	setInterval(function(){verificarConexion()},1500);
	   	setInterval(function(){verificarConectividad()},2000);

	   	/* Funciones de la simulacion */

	    function runners()
	    {
	    	if (runnerStart===true && runnerStatus===true)
	    	{
	    		/* Movimiento Eje X <- ida */

	    		// Corredor 1
		    	if (posX_R1>(runnerMaxPosX1+100) && pos1X===true)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R1-= getRandomInt(1,5);

		    		$("#runner1").css("margin-left", posX_R1);
		    		$("#runnerR1").css("margin-left", posX_R1);

		    		// Movimiento Eje Y
			    	if (posX_R1 <= (runnerMaxPosX1+100))
			    	{
			    		$("#runner1").css("margin-top", -10);
			    		pos1X= false;
			    	}
		    	}

		    	// Corredor 2
		    	if (posX_R2>(runnerMaxPosX1+50) && pos2X===true)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R2-= getRandomInt(1,5);

		    		$("#runner2").css("margin-left", posX_R2);
		    		$("#runnerR2").css("margin-left", posX_R2);

		    		// Movimiento Eje Y
			    	if (posX_R2 <= (runnerMaxPosX1+50))
			    	{
			    		$("#runner2").css("margin-top", -10);
			    		pos2X= false;
			    	}
		    	}

		    	// Corredor 3
		    	if (posX_R3>runnerMaxPosX1 && pos3X===true)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R3-= getRandomInt(1,5);

		    		$("#runner3").css("margin-left", posX_R3);
		    		$("#runnerR3").css("margin-left", posX_R3);

		    		// Movimiento Eje Y
			    	if (posX_R3 <= runnerMaxPosX1)
			    	{
			    		$("#runner3").css("margin-top", -10);
			    		pos3X= false;
			    	}
		    	}

	    		/*

	    		// Movimiento Eje X
		    	if (runnerPosX>-150 && posX===true)
		    	{
		    		$(".runnerR").hide();
		    		if (runnerPosX == 110)
		    		{
			    		$("runners").css("transform", "rotate(-180deg)");
			    		$("runners").css("-ms-transform", "rotate(-180deg)");
			    		$("runners").css("-webkit-transform", "rotate(-180deg)");
		    		}
		    		$(".runners").css("margin-left", runnerPosX);
		    		$(".runners").css("display", "initial");
		    		runnerPosX-= 1;
		    		//$("#track1").hide();

		    		// Movimiento Eje Y
			    	if (runnerPosX == -150)
			    	{
			    		$(".runners").css("margin-top", -10);
			    		posX= false;
			    	}
		    	}

		    	*/

		    	/* Movimiento Eje X. Rotacion 1 - Esquina superior */

		    	// Corredor 1

		    	if (posX_R1<=runner1RotX && pos1X===true)
		    	{
		    		$("#runner1").css("transform", "rotate("+runner1Rot1+"deg)");
		    		$("#runner1").css("-ms-transform", "rotate("+runner1Rot1+"deg)");
		    		$("#runner1").css("-webkit-transform", "rotate("+runner1Rot1+"deg)");

		    		runner1RotX += -10;
		    		runner1Rot1 += -15;

		    		console.log('Rotando');
		    	}

		    	// Corredor 2

		    	if (posX_R2<=runner2RotX && pos2X===true)
		    	{
		    		$("#runner2").css("transform", "rotate("+runner2Rot1+"deg)");
		    		$("#runner2").css("-ms-transform", "rotate("+runner2Rot1+"deg)");
		    		$("#runner2").css("-webkit-transform", "rotate("+runner2Rot1+"deg)");

		    		runner2RotX += -10;
		    		runner2Rot1 += -15;
		    	}

		    	// Corredor 3

		    	if (posX_R3<=runner3RotX && pos3X===true)
		    	{
		    		$("#runner3").css("transform", "rotate("+runner3Rot1+"deg)");
		    		$("#runner3").css("-ms-transform", "rotate("+runner3Rot1+"deg)");
		    		$("#runner3").css("-webkit-transform", "rotate("+runner3Rot1+"deg)");

		    		runner3RotX += -10;
		    		runner3Rot1 += -15;
		    	}

		    	/*
		    	if ((runnerPosY>-350 && runnerPosX==runnerRotX) && posY===true)
		    	{
		    		$(".runners").css("transform", "rotate("+runnerRot1+"deg)");
		    		$(".runners").css("-ms-transform", "rotate("+runnerRot1+"deg)");
		    		$(".runners").css("-webkit-transform", "rotate("+runnerRot1+"deg)");

		    		runnerRotX += -10;
		    		runnerRot1 += -15;
		    	}

		    	*/

		    	/* Movimiento Eje Y */

		    	// Corredor 1
		    	if (posY_R1>(runnerMaxPosY+100) && pos1X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		console.log('movimiento en Y');
		    		posY_R1 -= getRandomInt(1,5);

		    		$("#runner1").css("margin-bottom", posY_R1);
		    	}

		    	// Corredor 2
		    	if (posY_R2>-356 && pos2X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R2 -= getRandomInt(1,5);

		    		$("#runner2").css("margin-bottom", posY_R2);
		    	}

		    	// Corredor 3
		    	if (posY_R3>-465 && pos3X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		console.log('corredor 3 movimiento en y');
		    		posY_R3 -= getRandomInt(1,5);

		    		$("#runner3").css("margin-bottom", posY_R3);
		    	}

		    	/*

		    	// Movimiento Eje Y
		    	if ((runnerPosY>-350 && runnerPosX<=-150) && posY===true)
		    	{
		    		$(".runners").css("margin-bottom", runnerPosY);
		    		//$("#track1").hide();
		    		
		    		runnerPosY-= 1;

		    		if (runnerPosY == -350)
			    	{
			    		posY= false;
			    	}
		    	}

		    	*/

		    	/* Movimiento Eje Y. Rotacion 2 - Esquina inferior */


		    	// Corredor 1
		    	if (posY_R1<=runner1RotY && posY_R1>=(runnerMaxPosY+100))
		    	{
		    		$("#runner1").css("transform", "rotate("+runner1Rot2+"deg)");
		    		$("#runner1").css("-ms-transform", "rotate("+runner1Rot2+"deg)");
		    		$("#runner1").css("-webkit-transform", "rotate("+runner1Rot2+"deg)");

		    		runner1RotY += -10;
		    		runner1Rot2 += -15;
		    	}

		    	// Corredor 2

		    	if (posY_R2<=runner2RotY && posY_R2>=-356)
		    	{
		    		$("#runner2").css("transform", "rotate("+runner2Rot2+"deg)");
		    		$("#runner2").css("-ms-transform", "rotate("+runner2Rot2+"deg)");
		    		$("#runner2").css("-webkit-transform", "rotate("+runner2Rot2+"deg)");

		    		runner2RotY += -10;
		    		runner2Rot2 += -15;
		    	}

		    	// Corredor 3

		    	if (posY_R3<=runner3RotY && posY_R3>=-465)
		    	{
		    		$("#runner3").css("transform", "rotate("+runner3Rot2+"deg)");
		    		$("#runner3").css("-ms-transform", "rotate("+runner3Rot2+"deg)");
		    		$("#runner3").css("-webkit-transform", "rotate("+runner3Rot2+"deg)");

		    		runner3RotY += -10;
		    		runner3Rot2 += -15;
		    	}

		    	/*
		    	if ((runnerPosX<143 && runnerPosY==runnerRotY) && posX===false)
		    	{
		    		$(".runners").css("transform", "rotate("+runnerRot2+"deg)");
		    		$(".runners").css("-ms-transform", "rotate("+runnerRot2+"deg)");
		    		$(".runners").css("-webkit-transform", "rotate("+runnerRot2+"deg)");

		    		runnerRotY += -10;
		    		runnerRot2 += -15;
		    	}
		    	*/

		    	/* Movimiento Eje X -> vuelta */ 

		    	// Corredor 1
		    	if ((posX_R1<runnerMaxPosX2 && posY_R1<=(runnerMaxPosY+100)) && pos1X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R1 += getRandomInt(1,5);

		    		$("#runner1").css("margin-left", posX_R1);

		    		if (posX_R1>=runnerMaxPosX2)
		    		{
		    			console.log('Corredor 1 Termino');

		    			$("#runner1").hide();	
		    		}
		    	}

		    	// Corredor 2
		    	if ((posX_R2<runnerMaxPosX2 && posY_R2<=-356) && pos2X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R2 += getRandomInt(1,5);

		    		$("#runner2").css("margin-left", posX_R2);

		    		if (posX_R2>=runnerMaxPosX2)
		    		{
		    			console.log('Corredor 2 Termino');

		    			$("#runner2").hide();	
		    		}
		    	}

		    	// Corredor 3
		    	if ((posX_R3<runnerMaxPosX2 && posY_R3<=-465) && pos3X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R3 += getRandomInt(1,5);

		    		$("#runner3").css("margin-left", posX_R3);

		    		if (posX_R3>=runnerMaxPosX2)
		    		{
		    			console.log('Corredor 3 Termino');

		    			$("#runner3").hide();	
		    		}
		    	}

		    	/*
		    	if ((runnerPosX<143 && runnerPosY==-350) && posX===false)
		    	{
		    		runnerPosX += 1;

		    		$(".runners").css("margin-left", runnerPosX);

		    		if (runnerPosX==142)
		    		{
		    			chatSocket.send(JSON.stringify({
			            	'message': 'runner1 display1',
				        }));

		    			$(".runners").hide();	
		    		}
		    	}
		    	*/
	    	}

	    }

	    /* Funciones de WebSocket */

	    function verificarConexion()
	    {
	    	chatSocket.send(JSON.stringify({
	            'message': '3'
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

	        	case '2':
	        			display2 = true;
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

	        	case 'runner1 display3':

	        			console.log('Mensaje recibido. Corredor 1 empieza a correr');
	        			runnerStart= true;
	        			runnerStatus= true;
	        			$("#runnerR1").hide();
			    		  $("#runner1").css("transform", "rotate(-180deg)");
			    		  $("#runner1").css("-ms-transform", "rotate(-180deg)");
			    		  $("#runner1").css("-webkit-transform", "rotate(-180deg)");
			    		  $("#runner1").css("display", "initial");
	        			//posX_R1= 110;

	        		break;

	        	case 'runner2 display3':

	        			runnerStart= true;
	        			runnerStatus= true;
	        			$("#runnerR2").hide();
				    		$("#runner2").css("transform", "rotate(-180deg)");
				    		$("#runner2").css("-ms-transform", "rotate(-180deg)");
				    		$("#runner2").css("-webkit-transform", "rotate(-180deg)");
				    		$("#runner2").css("display", "initial");
	        			//posX_R2= 110;

	        		break;

	        	case 'runner3 display3':

	        			runnerStart= true;
	        			runnerStatus= true;
	        			$("#runnerR3").hide();
				    		$("#runner3").css("transform", "rotate(-180deg)");
				    		$("#runner3").css("-ms-transform", "rotate(-180deg)");
				    		$("#runner3").css("-webkit-transform", "rotate(-180deg)");
				    		$("#runner3").css("display", "initial");
	        			//posX_R3= 110;

	        		break;
	        }

	    };

	    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
		// ¡Usando Math.round() te dará una distribución no-uniforme!
		function getRandomInt(min, max) 
		{
			return Math.floor(Math.random() * (max - min)) + min;
		}

	    function verificarConectividad()
	    {
	    	if (display1==true && display2==true)
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

	    	if (display2==false)
	    	{
	    		$('#DisplayDisconnect').modal('open');

	    		if ($('#display').text()!=2)
	    		{
	    			$('#display').append('2');
	    		}

	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/2")

	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 2 no conectada!'
		        }));
	    	}

	    	display1 = false;
		    display2 = false;
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
	    }

	    */