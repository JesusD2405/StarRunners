    	/* Declaracion de variables */

    	// Pantallas
    	var display2 = false;
	    var display3 = false;

	    // Simulacion
	    var runnerPos = 0;
	    var runnerDisplay = 1;
	    var posX = true;
	    var runnerStart= false;

	    // Jquery

	    $(document).ready(function()
	    {
	    	// Inicializacion de la ventana modal
	    	$('.modal').modal();

		    /* Acción Iniciar */

			$("#iniciar").click(function(){

				runnerStart = true;

				if (posX===true)
				{
					$(".runnersR1").hide();
				}
				
				if(runnerPos>-44 && posX===false) 
				{
					$(".runnersR2").hide();
				}

				$(".runners").css("display", "initial");

				// Replicamos la acción
				chatSocket.send(JSON.stringify({
		            'message': 'Play'
		        }));
			});


			/* Acción Detener */

			$("#detener").click(function(){

				runnerStart = false;

				if (posX===true)
				{
					$(".runnersR1").show();
				}

				if(runnerPos>-44 && posX===false) 
				{
					$(".runnersR2").show();
				}

				$(".runners").css("display", "none");

				// Replicamos la acción
				chatSocket.send(JSON.stringify({
		            'message': 'Stop'
		        }));

			});
		});
	  
	    /* Funciones que se ejecutan segun un tiempo determinado */

	    setInterval(function(){runners()},15);
	    setInterval(function(){verificarConexion()},2000);
	    setInterval(function(){verificarConectividad()},3000);


	    /* Funciones de la simulacion */

	    function runners()
	    {
	    	//console.log('Accion: '+ runnerStart);

	    	// Verificamos si la acción de la simulación está activada

			if (runnerStart===true) 
			{
				/* Movimiento Eje X (->)  ida */

		    	if (runnerPos<388 && posX===true)
		    	{
		    		$(".runners").css("margin-left", runnerPos);
		    		$(".runnersR1").css("margin-left", runnerPos);
		    		//$("#track1").hide();

		    		runnerPos+= 1;

		    		console.log('otto man');
		    	}

		    	/* Movimiento Eje X (<-)  vuelta */

		    	if (runnerPos==387 && posX===false)
		    	{
		    		$(".runnerR2").hide();
		    		$(".runners2").css("display", "initial");
		    		$(".runners2").css("transform", "rotate(-180deg)");
		    		$(".runners2").css("-ms-transform", "rotate(-180deg)");
		    		$(".runners2").css("-webkit-transform", "rotate(-180deg)");
		    	}


		    	if (runnerPos>-44 && posX===false)
		    	{
		    		runnerPos-= 1;

		    		$(".runners2").css("margin-left", runnerPos);
		    		$(".runnerR2").css("margin-left", runnerPos);

		    		if (runnerPos==-44)
		    		{
		    			chatSocket.send(JSON.stringify({
				            'message': 'runner1 display3',
				        }));
		    			$(".runners2").hide();
		    		}
		    	}


		    	if (runnerDisplay == 1 && runnerPos == 387)
		    	{
		    		runnerDisplay = 2;

		    		chatSocket.send(JSON.stringify({
			            'message': 'runner1 display2',
			        }));

			        $(".runnersR1").remove();
			        $(".runners").remove();
		    	}
			}

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

	        	default:

	        			if (message == 'runner1 display1')
	        			{
	        				//$("#runner1").hide();
	        				posX= false;
	        				//runners();
	        			}

	        			//document.querySelector('#chat-log').value += (message);

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

	    		console.log($('#display').html());

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
		