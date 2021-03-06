//NAMESPACE:
//uses the variable 'pLoc'

var pLoc = function(){

	//will contain our replacements returned from initList()
	var list = [];
	
	
	//pLoc just needs this
	return {

		//single method to return a pseudo-loc'd string based on the 'original' string parameter
		toPseudo: function( original ){

			var modified = original;

			//lazy initialize
			if ( list.length == 0 ){
				initList();
			}


			
			list.forEach(function(item){
				console.log("CHECKING  " + item.key + "  " + item.list)
				
				//check this key
				var key = item.key, 
						  index, 
						  character;

				if ( key.length > 1 ){
				
					console.log("ERROR: currently only supports single character replacements");
				
				}else{

					//see if there are any matches for this key
					index = modified.indexOf(key);

					//do for all matches
					while( index != -1 ){

						//replace with one (taken randomly) from the list of replacements
						character = item.list[Math.floor(Math.random()*item.list.length)];
						//splice it
						modified = modified.substr(0, index) + character + modified.substr(index+character.length);
						
					    console.log("replace " + key + " with x" + item.list + "x" )

						//find next item
						index = modified.indexOf(key, index+1);
					}
				}

			});

			//return localized text
			return modified;
		}


	};






	function initList(){

		/*
		//add objects to list using form:

				{ key: 'REPLACE_THIS_CHAR',
				  list: ['replacementAlt1', 'replacementAlt2']}


		*/

		list = [ 
				 { key:'a',
				 list: ['á','à','ª','å','æ','ã','â','ä'] },
				 { key:'b',
				 list: ['þ'] },
				 { key:'c',
				 list: ['ç','¢','©'] },
				 { key:'d',
				 list: ['ð'] },
				 { key:'e',
				 list: ['é','è','ê','ë'] },
				 { key:'i',
				 list: ['í','ì','î','ï'] },
				 { key:'n',
				 list: ['ñ'] },
				 { key:'o',
				 list: ['ó','ò','õ','ö','ô','ø','¤'] },
				 { key:'r',
				 list: ['®'] },
				 { key:'u',
				 list: ['ú','ù','µ','ü','û'] },
				 { key:'y',
				 list: ['ý','ÿ'] },
				 { key:'A',
				 list: ['Á','À','Â','Ã','Ä','Æ','Å'] },
				 { key:'B',
				 list: ['ß'] },
				 { key:'C',
				 list: ['Ç'] },
				 { key:'D',
				 list: ['Ð'] },
				 { key:'E',
				 list: ['É','È','Ê','Ë'] },
				 { key:'I',
				 list: ['Í','Ì','Î','Ï'] },
				 { key:'L',
				 list: ['£'] },
				 { key:'N',
				 list: ['Ñ'] },
				 { key:'O',
				 list: ['Ó','Ò','Ô','Õ','Ø','Ö'] },
				 { key:'P',
				 list: ['¶'] },
				 { key:'S',
				 list: ['§','$'] },
				 { key:'U',
				 list: ['Ú','Ù','Û','Ü'] },
				 { key:'Y',
				 list: ['Ý','¥'] }

			];

	}


}();
