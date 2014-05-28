var xtra = {
	loadInfo: function(obj){
		console.log("HELLO", obj.find("a").text() );
		// load to ajaxtarget
		// /patternlab-node/public/patterns/04-pages-03-titlepage/04-pages-03-titlepage.html

		$.get( "/patternlab-node/public/patterns/04-pages-03-titlepage/04-pages-03-titlepage.html", function( data ) {
			$( "#ajaxtarget" ).html( data );
			alert( "Load was performed." );
		});
	}
}