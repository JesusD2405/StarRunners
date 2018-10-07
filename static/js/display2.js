    	/* Declaracion de variables */

    	// Pantallas
    	var display1 = false;
    	var display2 = false;
	    var display3 = false;

	    // Movimiento de la simulacion
	    var runnerStart  = false;
	    var runnerStatus = false;
	    var runnerPosX = 0;
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

	    // Jquery

	    $(document).ready(function()
	    {
	    	// Inicializacion de la ventana modal
	    	$('.modal').modal();
		});

    	setInterval(function(){runners()},15);
	   	setInterval(function(){verificarConexion()},2000);
	   	setInterval(function(){verificarConectividad()},3000);

	   	/* Funciones de la simulacion */

	    function runners()
	    {
	    	// Mostrar corredores en movimiento
	    	if (runnerStart===true && runnerStatus===true)
	    	{
	    		$(".runnersR").hide();
	    		$(".runners").css("display", "initial");
	    	

	    		// Movimiento Eje X
		    	if (runnerPosX<runnerMaxPosX1 && (pos1X===true || pos2X===true || pos3X===true))
		    	{
		    		//$(".runners").css("margin-left", runnerPosX);
		    		//$("#track1").hide();
		    		if (pos1X===true) $("#runner1").css("margin-left", runnerPosX);
		    		if (pos2X===true) $("#runner2").css("margin-left", runnerPosX);
		    		if (pos3X===true) $("#runner3").css("margin-left", runnerPosX);

		    		runnerPosX+= 1;

		    		// Finalizar movimiento Eje X
			    	if ((runnerPosX == (runnerMaxPosX1-100)) && pos1X===true)
			    	{
			    		$("#runner1").css("margin-top", -500);
			    		pos1X= false;
			    	}

			    	if ((runnerPosX == runnerMaxPosX1-50) && pos2X===true)
			    	{
			    		$("#runner2").css("margin-top", -500);
			    		pos2X= false;
			    	}

			    	if ((runnerPosX == runnerMaxPosX1) && pos3X===true)
			    	{
			    		$("#runner3").css("margin-top", -500);
			    		pos3X= false;
			    	}
		    	}

		    	// Movimiento Eje X. Rotacion 1 - Esquina inferior
		    	// Rotacion Eje X - corredor 1
	    		if(runnerPosX==runner1RotX && pos1X===true)
	    		{
	    			$("#runner1").css("transform", "rotate("+runner1Rot1+"deg)");
	    			$("#runner1").css("-ms-transform", "rotate("+runner1Rot1+"deg)");
	    			$("#runner1").css("-webkit-transform", "rotate("+runner1Rot1+"deg)");

	    			runner1RotX += 10;
	    			runner1Rot1 += -15;
	    		}

	    		// Rotacion Eje X - corredor 2
	    		if(runnerPosX==runner2RotX && pos2X===true)
	    		{
	    			$("#runner2").css("transform", "rotate("+runner2Rot1+"deg)");
	    			$("#runner2").css("-ms-transform", "rotate("+runner2Rot1+"deg)");
	    			$("#runner2").css("-webkit-transform", "rotate("+runner2Rot1+"deg)");

	    			runner2RotX += 10;
	    			runner2Rot1 += -15;
	    		}

	    		// Rotacion Eje X - corredor 3
	    		if(runnerPosX==runner3RotX && pos3X===true)
	    		{
	    			$("#runner3").css("transform", "rotate("+runner3Rot1+"deg)");
	    			$("#runner3").css("-ms-transform", "rotate("+runner3Rot1+"deg)");
	    			$("#runner3").css("-webkit-transform", "rotate("+runner3Rot1+"deg)");

	    			runner3RotX += 10;
	    			runner3Rot1 += -15;
	    		}

		    	// Movimiento Eje Y
		    	if ((runnerPosY<runnerMaxPosY && runnerPosX==runnerMaxPosX1) && (pos1Y===true || pos2Y===true || pos3Y===true))
		    	{
		    		//$(".runners").css("margin-bottom", runnerPosY);
		    		//$("#track1").hide();
		    		if (pos1Y===true) $("#runner1").css("margin-bottom", runnerPosY);
		    		if (pos2Y===true) $("#runner2").css("margin-bottom", runnerPosY);
		    		if (pos3Y===true) $("#runner3").css("margin-bottom", runnerPosY);

		    		runnerPosY+= 1;

		    		if (runnerPosY == (runnerMaxPosY-100)) pos1Y= false;
		    		if (runnerPosY == (runnerMaxPosY-50)) pos2Y= false;
		    		if (runnerPosY == runnerMaxPosY) pos3Y= false;
		    	}

		    	// Movimiento Eje X. Rotacion 2 - Esquina superior
		    	// Rotacion Eje Y - corredor 1
		    	if(runnerPosY==runner1RotY && pos1Y===true)
	    		{
	    			$("#runner1").css("transform", "rotate("+runner1Rot2+"deg)");
	    			$("#runner1").css("-ms-transform", "rotate("+runner1Rot2+"deg)");
	    			$("#runner1").css("-webkit-transform", "rotate("+runner1Rot2+"deg)");

	    			runner1RotY += 10;
	    			runner1Rot2 += -15;
	    		}

	    		// Rotacion Eje Y - corredor 2
	    		if(runnerPosY==runner2RotY && pos2Y===true)
	    		{
	    			$("#runner2").css("transform", "rotate("+runner2Rot2+"deg)");
	    			$("#runner2").css("-ms-transform", "rotate("+runner2Rot2+"deg)");
	    			$("#runner2").css("-webkit-transform", "rotate("+runner2Rot2+"deg)");

	    			runner2RotY += 10;
	    			runner2Rot2 += -15;
	    		}

	    		// Rotacion Eje Y - corredor 3
	    		if(runnerPosY==runner3RotY && pos3Y===true)
	    		{
	    			$("#runner3").css("transform", "rotate("+runner3Rot2+"deg)");
	    			$("#runner3").css("-ms-transform", "rotate("+runner3Rot2+"deg)");
	    			$("#runner3").css("-webkit-transform", "rotate("+runner3Rot2+"deg)");

	    			runner3RotY += 10;
	    			runner3Rot2 += -15;
	    		}

		    	// Movimiento Eje X
		    	if ((runnerPosX>runnerMaxPosX2 && runnerPosY==runnerMaxPosY) && (pos1X===false || pos2X===false || pos3X===false))
		    	{
		    		runnerPosX -= 1;

		    		$("#runner1").css("margin-left", runnerPosX);
		    		$("#runner2").css("margin-left", runnerPosX);
		    		$("#runner3").css("margin-left", runnerPosX);

		    		if (runnerPosX==runnerMaxPosX2)
		    		{
		    			chatSocket.send(JSON.stringify({
			            	'message': 'runner1 display1',
				        }));

		    			$(".runners").remove();
		    			$(".runnersR").remove();
		    		}
		    	}

	    	}
	    }

	    /* Funciones de WebSocket */

	    function verificarConexion(){

	    	//document.querySelector('#chat-log').value += ('Soy la pantalla 2.. \n');

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

	        	case '2':
	        			// Todo en orden
	        			$('#chat-log').val('');
	        			$('chat-log').empty();
	        		break;

	        	case '3':
	        			display3 = true;
	        		break;

	        	default:
	        			
	        			if (message == 'runner1 display2')
	        			{
	        				//$("#runner1").hide();
	        				runnerStart= true;
	        				runnerStatus= true;
	        				//runners();
	        			}

	        			// Verificamos si la acción recibida es detener la simulación y si en dicha pantalla se encuentra la animación

	        			if (message== 'Stop' && runnerStart===true)
	        			{
	        				runnerStatus= false;

	        				$(".runnersR").show();
							$(".runners").css("display", "none");
	        			}

	        			// Verificamos si la acción recibida es reanudar la simulación y si en dicha pantalla se encuentra la animación

	        			if (message== 'Play' && runnerStart===true)
	        			{
	        				runnerStatus= true;

	        				$(".runners").hide();
							$(".runners").css("display", "initial");
	        			}
	        			
	        			//document.querySelector('#chat-log').value += (message);

	        		break;
	        }



	        //document.querySelector('#chat-log').value += (message);
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