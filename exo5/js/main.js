let table= Array();
	function ajouter_nom(){
		table.push(prompt("Ajoutez un nom"));
	}
    function tirage(){
    	if(table.length>0){
    
        let rand = Math.floor(Math.random()*table.length);
        alert("Le nom gagnant est "+table[rand]);
    	}
    }