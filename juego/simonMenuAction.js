

document.getElementById("menuActionExit").onclick= function menuActionExit(){


	let flag=true;
	swal({
  	title: "Are you sure?",
 	 text: "Do you want exit Now?",
 	 icon: "warning",
  	buttons: true,
  	dangerMode: true,
		})
	.then((willDelete) => {
  		if (willDelete) {
    		swal("Bye bye  See you later!!", {
      		icon: "success",

    					})

  		location.href="../index.html"} else {
   			 swal("Ok we're back!");
  				flag=false;
  			}
		});


               }



 document.getElementById("menuActionRestart").onclick= function menuActionRestart(){


	let flag=true;
	swal({
  	title: "Are you sure?",
 	 text: "Do you want restart it?",
 	 icon: "warning",
  	buttons: true,
  	dangerMode: true,
		})
	.then((willDelete) => {
  		if (willDelete) {
    		swal("Game restarted", {
      		icon: "success",

    					})

  		location.href="simon.html"} else {
   			 swal("Ok we're back!");
  				flag=false;
  			}
		});


               }



