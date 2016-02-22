(function(g){
	g.Game = function(){
		var jose = {
			x: 350,
			y: 250,
			width: 100,
			height: 100,
			color: "#F38F1D"
		};

		var world = {
			color:"#F4F4F4"
		};

		var canvas = document.getElementById('world');
		var ctx =  canvas.getContext('2d');

		startStory();

		function startStory(){
			setupInput();
			var fps = 1000/60;
			setInterval(draw, fps);
		}

		function draw(){
			drawWorld();
			drawJose();
		}

		function setupInput(){
			g.Input.init(jose);
		}

		function drawWorld(){
			ctx.fillStyle = world.color;
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		}

		function drawJose(){
			ctx.fillStyle = jose.color;
			ctx.fillRect(jose.x, jose.y, jose.width, jose.height);
		}
	}();
})(window.g = window.g || {});