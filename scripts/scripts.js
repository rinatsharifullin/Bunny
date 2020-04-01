console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');


  
  $('#leftEarButton').on('click',function(){opa('#leftEar');})
  $('#rightEarButton').on('click',function(){opa('#rightEar');})
  $('#rightArmButton').on('click',function(){opa('#rightArm');})
  $('#leftArmButton').on('click',function(){opa('#leftArm');})
  $('#rightLegButton').on('click',function(){opa('#rightLeg');})
  $('#leftLegButton').on('click',function(){opa('#leftLeg');})
  $('#bodyButton').on('click',function(){opa('#body');})
  $('#faceButton').on('click',function(){opa('#face');})

  
  
});


function opa(id){
	$(id).animate({'opacity': 'toggle'});
};



