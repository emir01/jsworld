(function(g){
	var keys = {
		37:"left",
		39:"right",
		38:"up",
		40:"down"
	};

	g.Input = (function(){
		var player;

		function init(character){
			player = character;
			addKeyEventListenerToDocument();
		}

		function addKeyEventListenerToDocument(){
			document.addEventListener("keydown", processKeyDown, false);
		}

		function processKeyDown(e){
			console.log(e.keyCode);
			var playerSpeed = 5;

			switch(keys[e.keyCode]){
				case "left":
					player.x -= playerSpeed;
				break;
				case "right":
					player.x += playerSpeed;
				break;
				case "up":
					player.y -= playerSpeed;
				break;
				case "down":
					player.y += playerSpeed;
				break;
			}

			console.log(player);
		}

		return{
			init:init
		};
	})();
})(window.g = window.g || {});