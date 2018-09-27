    	/* Declaracion de variables */

    	// Pantallas
    	var display1 = false;
    	var display2 = false;
	    var display3 = false;

	    // Movimiento de la simulacion
	    var runnerStart1 = false;
	    var runnerPosX = 0;
	    var runnerPosY = 0;
	    var posX = true;
	    var posY = true;
	    var runnerDisplay = 1;
	    
	    // Rotacion de la simulacion
	    var runnerRotX = 259;
	    var runnerRot1 = -30;
	    var runnerRotY = 210;
	    var runnerRot2 = -120;

    	setInterval(function(){runners()},15);
	   	setInterval(function(){verificarConexion()},2000);
	   	setInterval(function(){verificarConectividad()},3000);

	   	/* Funciones de la simulacion */

	    function runners()
	    {
	    	// Movimiento Eje X
	    	if ((runnerPosX==0 && runnerStart1===true) && posX===true)
	    	{
	    		$(".runnersR").hide();
	    		$(".runners").css("display", "initial");
	    	}

	    	if ((runnerPosX<300 && runnerStart1===true) && posX===true)
	    	{
	    		$(".runners").css("margin-left", runnerPosX);
	    		//$("#track1").hide();

	    		runnerPosX+= 1;

	    		// Movimiento Eje Y
		    	if (runnerPosX == 300)
		    	{
		    		$(".runners").css("margin-top", -500);
		    		posX= false;
		    	}
	    	}

	    	// Movimiento Eje Y. Rotacion 1 - Esquina inferior
	    	if ((runnerPosY<250 && runnerPosX==runnerRotX) && posY===true)
	    	{
	    		$(".runners").css("transform", "rotate("+runnerRot1+"deg)");
	    		$(".runners").css("-ms-transform", "rotate("+runnerRot1+"deg)");
	    		$(".runners").css("-webkit-transform", "rotate("+runnerRot1+"deg)");

	    		runnerRotX += 10;
	    		runnerRot1 += -15;
	    	}

	    	// Movimiento Eje Y
	    	if ((runnerPosY<250 && runnerPosX==300) && posY===true)
	    	{
	    		$(".runners").css("margin-bottom", runnerPosY);
	    		//$("#track1").hide();

	    		runnerPosY+= 1;

	    		if (runnerPosY == 250)
		    	{
		    		posY= false;
		    	}
	    	}

	    	// Movimiento Eje X. Rotacion 2 - Esquina superior
	    	if ((runnerPosX>-19 && runnerPosY==runnerRotY) && posX===false)
	    	{
	    		$(".runners").css("transform", "rotate("+runnerRot2+"deg)");
	    		$(".runners").css("-ms-transform", "rotate("+runnerRot2+"deg)");
	    		$(".runners").css("-webkit-transform", "rotate("+runnerRot2+"deg)");

	    		runnerRotY += 10;
	    		runnerRot2 += -15;
	    	}

	    	// Movimiento Eje X
	    	if ((runnerPosX>-19 && runnerPosY==250) && posX===false)
	    	{
	    		runnerPosX -= 1;

	    		$(".runners").css("margin-left", runnerPosX);

	    		if (runnerPosX==-18)
	    		{
	    			chatSocket.send(JSON.stringify({
		            	'message': 'runner1 display1',
			        }));

	    			$(".runners").hide();	
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
	        				runnerStart1= true;
	        				//runners();
	        			}
	        			
	        			document.querySelector('#chat-log').value += (message);

	        		break;
	        }



	        //document.querySelector('#chat-log').value += (message);
	    };

	    function verificarConectividad()
	    {
	    	if (display1==false)
	    	{
	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/1");
	    		
	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 1 no conectada!'
		        }));
		        
	    	}

	    	if (display3==false)
	    	{
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