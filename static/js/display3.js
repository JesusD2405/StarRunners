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
	    var runnerMaxPosX1 = -200;
	    var runnerMaxPosY = 300;
	    var runnerMaxPosX2 = -19;
	    //Posición de los corredores en el eje X
	    var posX_R1 = 110;
		var posX_R2 = -150;
		var posX_R3 = -150;
		//Posición de los corredores en el eje Y
	    var posY_R1 = -49;
		var posY_R2 = -49;
		var posY_R3 = -49;

	    // Rotacion de la simulacion
	    var runnerRotX = -149;
	    var runnerRot1 = -195;
	    var runnerRotY = -300;
	    var runnerRot2 = -285;

	    // Jquery

	    $(document).ready(function()
	    {
	    	// Inicializacion de la ventana modal
	    	$('.modal').modal();
		});

    	setInterval(function(){runners()},15);
	   	setInterval(function(){verificarConexion()},1500);
	   	setInterval(function(){verificarConectividad()},2000);

	   	/* Funciones de la simulacion */

	    function runners()
	    {
	    	if (runnerStart===true && runnerStatus===true)
	    	{
	    		/* Movimiento Eje X <- ida */

	    		// Corredor 1
		    	if (posX_R1>runnerMaxPosX1 && pos1X===true)
		    	{
		    		$("#runnerR1").hide();

		    		if (posX_R1 == 110 && pos1X===true)
		    		{
			    		$("#runner1").css("transform", "rotate(-180deg)");
			    		$("#runner1").css("-ms-transform", "rotate(-180deg)");
			    		$("#runner1").css("-webkit-transform", "rotate(-180deg)");
		    		}

		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R1-= getRandomInt(1,5);

		    		$("#runner1").css("margin-left", posX_R1);
		    		$("#runnerR1").css("margin-left", posX_R1);
		    		$("#runner1").css("display", "initial");

		    		// Movimiento Eje Y
			    	if (posX_R1 <= runnerMaxPosX1)
			    	{
			    		$("#runner1").css("margin-top", -10);
			    		pos1X= false;
			    	}
		    	}

		    	// Corredor 2
		    	if (posX_R2>-150)
		    	{
		    		$("#runnerR2").hide();

		    		if (posX_R2 == 110)
		    		{
			    		$("#runner2").css("transform", "rotate(-180deg)");
			    		$("#runner2").css("-ms-transform", "rotate(-180deg)");
			    		$("#runner2").css("-webkit-transform", "rotate(-180deg)");
		    		}

		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R2-= getRandomInt(1,5);

		    		$("#runner2").css("margin-left", posX_R2);
		    		$("#runnerR2").css("margin-left", posX_R2);
		    		$("#runner2").css("display", "initial");

		    		// Movimiento Eje Y
			    	if (posX_R2 == -150)
			    	{
			    		$("#runner2").css("margin-top", -10);
			    		posX= false;
			    	}
		    	}

		    	// Corredor 3
		    	if (posX_R3>-150)
		    	{
		    		$("#runnerR3").hide();

		    		if (posX_R3 == 110)
		    		{
			    		$("#runner3").css("transform", "rotate(-180deg)");
			    		$("#runner3").css("-ms-transform", "rotate(-180deg)");
			    		$("#runner3").css("-webkit-transform", "rotate(-180deg)");
		    		}

		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R3-= getRandomInt(1,5);

		    		$("#runner3").css("margin-left", posX_R3);
		    		$("#runnerR3").css("margin-left", posX_R3);
		    		$("#runner3").css("display", "initial");

		    		// Movimiento Eje Y
			    	if (posX_R3 == -150)
			    	{
			    		$("#runner3").css("margin-top", -10);
			    		posX= false;
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

		    	if (posX_R1>=runnerRotX && pos1X===true)
		    	{
		    		$("#runner1").css("transform", "rotate("+runnerRot1+"deg)");
		    		$("#runner1").css("-ms-transform", "rotate("+runnerRot1+"deg)");
		    		$("#runner1").css("-webkit-transform", "rotate("+runnerRot1+"deg)");

		    		runnerRotX += -10;
		    		runnerRot1 += -15;

		    		console.log('Rotando');
		    	}

		    	// Corredor 2

		    	if ((posY_R2>-350 && posX_R2<=runnerRotX) && posY===true)
		    	{
		    		$("#runner1").css("transform", "rotate("+runnerRot1+"deg)");
		    		$("#runner1").css("-ms-transform", "rotate("+runnerRot1+"deg)");
		    		$("#runner1").css("-webkit-transform", "rotate("+runnerRot1+"deg)");

		    		runnerRotX += -10;
		    		runnerRot1 += -15;
		    	}

		    	// Corredor 3

		    	if ((posY_R3>-350 && posX_R3<=runnerRotX) && posY===true)
		    	{
		    		$("#runner1").css("transform", "rotate("+runnerRot1+"deg)");
		    		$("#runner1").css("-ms-transform", "rotate("+runnerRot1+"deg)");
		    		$("#runner1").css("-webkit-transform", "rotate("+runnerRot1+"deg)");

		    		runnerRotX += -10;
		    		runnerRot1 += -15;
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
		    	if (posY_R1>-350 && posX_R1<=-150)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R1 -= getRandomInt(1,5);

		    		$("#runner1").css("margin-bottom", posY_R1);

		    		if (posY_R1 <= -350)
			    	{
			    		posY= false;
			    	}
		    	}

		    	// Corredor 2
		    	if (posY_R2>-350 && posX_R2<=-150)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R2 -= getRandomInt(1,5);

		    		$("#runner2").css("margin-bottom", posY_R2);

		    		if (posY_R2 <= -350)
			    	{
			    		posY= false;
			    	}
		    	}

		    	// Corredor 3
		    	if (posY_R3>-350 && posX_R3<=-150)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posY_R3 -= getRandomInt(1,5);

		    		$("#runner3").css("margin-bottom", posY_R3);

		    		if (posY_R3 <= -350)
			    	{
			    		posY= false;
			    	}
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

		    	/* Movimiento Eje X. Rotacion 2 - Esquina inferior */


		    	// Corredor 1

		    	/*

		    	if ((posX_R1<143 && posY_R1>=runnerRotY) && posX===false)
		    	{
		    		$("#runner1").css("transform", "rotate("+runnerRot2+"deg)");
		    		$("#runner1").css("-ms-transform", "rotate("+runnerRot2+"deg)");
		    		$("#runner1").css("-webkit-transform", "rotate("+runnerRot2+"deg)");

		    		runnerRotY += -10;
		    		runnerRot2 += -15;
		    	}

		    	// Corredor 2

		    	if ((posX_R2<143 && posY_R2>=runnerRotY) && posX===false)
		    	{
		    		$("#runner2").css("transform", "rotate("+runnerRot2+"deg)");
		    		$("#runner2").css("-ms-transform", "rotate("+runnerRot2+"deg)");
		    		$("#runner2").css("-webkit-transform", "rotate("+runnerRot2+"deg)");

		    		runnerRotY += -10;
		    		runnerRot2 += -15;
		    	}

		    	// Corredor 3

		    	if ((posX_R3<143 && posY_R3>=runnerRotY) && posX===false)
		    	{
		    		$("#runner3").css("transform", "rotate("+runnerRot2+"deg)");
		    		$("#runner3").css("-ms-transform", "rotate("+runnerRot2+"deg)");
		    		$("#runner3").css("-webkit-transform", "rotate("+runnerRot2+"deg)");

		    		runnerRotY += -10;
		    		runnerRot2 += -15;
		    	}

		    	*/

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
		    	if ((posX_R1<143 && posY_R1>=-350) && pos1X===false)
		    	{
		    		// Posición.. Determinada por la velocidad ramdon en px 
		    		posX_R1 += getRandomInt(1,5);

		    		$("#runner1").css("margin-left", posX_R1);

		    		if (posX_R1>=142)
		    		{
		    			chatSocket.send(JSON.stringify({
			            	'message': 'runner1 display1',
				        }));

		    			$("#runner1").hide();	
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

	        			runnerStart= true;
	        			runnerStatus= true;
	        			//posX_R1= 110;

	        		break;

	        	case 'runner2 display3':

	        			runnerStart= true;
	        			runnerStatus= true;
	        			//posX_R2= 110;

	        		break;

	        	case 'runner3 display3':

	        			runnerStart= true;
	        			runnerStatus= true;
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