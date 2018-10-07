	   /* Declaracion de variables */

    	// Pantallas
    	var display1 = false;
    	var display2 = false;
	    var display3 = false;

	    // Movimiento de la simulacion
	    var runnerStart = false;
	    var runnerStatus = false;
	    var runnerPosX = 110;
	    var runnerPosY = -49;
	    var posX = true;
	    var posY = true;
	    var runnerDisplay = 1;

	    // Rotacion de la simulacion
	    var runnerRotX = -99;
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
	   	setInterval(function(){verificarConexion()},2000);
	   	setInterval(function(){verificarConectividad()},3000);

	   	/* Funciones de la simulacion */

	    function runners()
	    {
	    	if (runnerStart===true && runnerStatus===true)
	    	{
	    		// Movimiento Eje X
		    	if (runnerPosX>-150 && posX===true)
		    	{
		    		//alert('Aja');
		    		$(".runnerR").hide();
		    		if (runnerPosX == 110)
		    		{
			    		$(".runners").css("transform", "rotate(-180deg)");
			    		$(".runners").css("-ms-transform", "rotate(-180deg)");
			    		$(".runners").css("-webkit-transform", "rotate(-180deg)");
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

		    	// Movimiento Eje Y. Rotacion 1 - Esquina superior
		    	if ((runnerPosY>-350 && runnerPosX==runnerRotX) && posY===true)
		    	{
		    		$(".runners").css("transform", "rotate("+runnerRot1+"deg)");
		    		$(".runners").css("-ms-transform", "rotate("+runnerRot1+"deg)");
		    		$(".runners").css("-webkit-transform", "rotate("+runnerRot1+"deg)");

		    		runnerRotX += -10;
		    		runnerRot1 += -15;
		    	}

		    	// Movimiento Eje Y
		    	if ((runnerPosY>-350 && runnerPosX==-150) && posY===true)
		    	{
		    		$(".runners").css("margin-bottom", runnerPosY);
		    		//$("#track1").hide();
		    		
		    		runnerPosY-= 1;

		    		if (runnerPosY == -350)
			    	{
			    		posY= false;
			    	}
		    	}

		    	// Movimiento Eje X. Rotacion 2 - Esquina inferior
		    	if ((runnerPosX<143 && runnerPosY==runnerRotY) && posX===false)
		    	{
		    		$(".runners").css("transform", "rotate("+runnerRot2+"deg)");
		    		$(".runners").css("-ms-transform", "rotate("+runnerRot2+"deg)");
		    		$(".runners").css("-webkit-transform", "rotate("+runnerRot2+"deg)");

		    		runnerRotY += -10;
		    		runnerRot2 += -15;
		    	}

		    	// Movimiento Eje X
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
	    	}

	    }

	    /* Funciones de WebSocket */

	    function verificarConexion(){

	    	//document.querySelector('#chat-log').value += ('Soy la pantalla 2.. \n');

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

	        	case '3':
        				//Todo en orden
        				$('#chat-log').val('');
        				$('chat-log').empty();
	        		break;

	        	default:

	        			if (message == 'runner1 display3')
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

	        				$(".runnersR").hide();
							$(".runners").css("display", "initial");
	        			}

	        			//document.querySelector('#chat-log').value += (message);
	        		break;
	        }

	        //document.querySelector('#chat-log').value += (message);
	    };

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