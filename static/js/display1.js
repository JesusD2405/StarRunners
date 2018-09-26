    	/* Declaracion de variables */

    	// Pantallas
    	var display2 = false;
	    var display3 = false;

	    // Simulacion
	    var runnerPos = 0;
	    var runnerDisplay = 1;
	    var posX = true;

	    // 

	    // Corredores
	  
	    /* Funciones que se ejecutan segun un tiempo determinado */

	    setInterval(function(){runners()},15);
	    setInterval(function(){verificarConexion()},2000);
	    setInterval(function(){verificarConectividad()},3000);

	    /* Funciones de la simulacion */

	    function runners()
	    {

	    	if (runnerPos == 0)
	    	{
	    		//inicio();
	    	}

	    	/* Movimiento Eje X (->)  ida */

	    	if (runnerPos<388 && posX===true)
	    	{
	    		$("#runner1").css("margin-left", runnerPos);
	    		//$("#track1").hide();

	    		runnerPos+= 1;
	    	}

	    	/* Movimiento Eje X (<-)  vuelta */

	    	if (runnerPos>-44 && posX===false)
	    	{
	    		runnerPos-= 1;

	    		$("#runner1_1").css("margin-left", runnerPos);
	    		$("#runner1_1").css("display", "initial");
	    		$("#runner1_1").css("transform", "rotate(-180deg)");
	    		$("#runner1_1").css("-ms-transform", "rotate(-180deg)");
	    		$("#runner1_1").css("-webkit-transform", "rotate(-180deg)");
	    		

	    		if (runnerPos==-44)
	    		{
	    			chatSocket.send(JSON.stringify({
			            'message': 'runner1 display3',
			        }));
	    			$("#runner1_1").hide();
	    		}

	    	}

	    	if (runnerDisplay == 1 && runnerPos == 387)
	    	{
	    		runnerDisplay = 2;

	    		chatSocket.send(JSON.stringify({
		            'message': 'runner1 display2',
		        }));

		        $("#runner1").hide();
		        //$("#track1").show();
	    	}

	    }

	    /* Funciones WebSocket */

	    function verificarConexion(){

	    	//document.querySelector('#chat-log').value += ('Soy la pantalla 1. \n');

	    	chatSocket.send(JSON.stringify({
	            'message': '1'
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

	        	default:

	        			if (message == 'runner1 display1')
	        			{
	        				//$("#runner1").hide();
	        				posX= false;
	        				//runners();
	        			}

	        			document.querySelector('#chat-log').value += (message);
	        		break;
	        }

	        //document.querySelector('#chat-log').value += (message);
	    };

	    function verificarConectividad()
	    {

	    	if (display2==false)
	    	{
	    		$.get("http://127.0.0.1:8000/simulation/disconnect/display/2");

	    		chatSocket.send(JSON.stringify({
		            'message': 'Pantalla 2 no conectada!'
		        }));
	    	}

	    	if (display3==false)
	    	{
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
		*/
		