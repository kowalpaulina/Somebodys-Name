var wys=0;
$(document).ready(function(){
	waypoint_aboutme();
	waypoint_photo();
	waypoint_job();
	waypoint_maks();
	fancybox();
	education_description();
	experience_description();
	move();
	wys_nav=$('.main-nav').height();
	mark();
	scroll();
	map();
	hamburger();
});


function waypoint_aboutme(){
$('.wp1').waypoint(function(direction) {
		$('.wp1').addClass('animated fadeInUp');
		
	}, {
		offset: '90%'
		
	});}

function waypoint_photo(){
	$('#gallery').waypoint(function(direction) {
		
		$('#gallery').addClass('animated fadeInUp');
		
	}, {
		offset: '90%'
		
	});}


function waypoint_job(){
	$('.job').waypoint(function(direction) {
		
		$('.job').addClass('animated fadeInUp');
		
	}, {
		offset: '90%'
		
	});}

function waypoint_maks(){
	$('.wobble').waypoint(function(direction) {
		
		$('.wobble').addClass('animated fadeIn');
		
	}, {
		offset: '70%'
		
	});}



function fancybox(){
	$(".fancybox").fancybox({
		
		openEffect : 'elastic',
		closeEffect : 'elastic',
		maxWidth : 800,
		maxHeight : 600,
	
	});
	
}

function education_description(){
	$('.education-headline').on('click', function(){
		$('.education-description').toggle('slow');		   								   
	});
}

function experience_description(){
	$('.experience-headline').on('click', function(){
		$('.experience-description').toggle('slow');	   								   								   
	});
}



function move(){
	$('.name').waypoint(function(direction){
		if(direction == "down"){
		$('nav').addClass('move');
	}else{
			$('nav').removeClass('move')
			}}, {
		offset: '60px'		
	 });
}


function mark(){		
		$(window).scroll(function(){
			wys_nav=$('.main-nav').height();	
			console.log('wys_nav '+wys_nav)
			wys_top=$(window).scrollTop()+wys_nav+1;
			console.log(wys_top);
		
		
		  
		$('section').each(function(){
			nav=$('nav');
			if(nav.hasClass('move'))
			if(wys_top>=$(this).offset().top){
				$('.btn .move').removeClass('active');
				$('.btn').removeClass('active');
				$('#'+$(this).data('type')).addClass('active');
			}
		});
		});
			}


function scroll(){
	
	$('.btn').on('click', function(){
		
		button=$(this).attr('id'); //pobieram id z klikniętego buttona
		miejsce=$('.'+button).offset().top;  //przypisuję id do odpowiadającej mu sekcji poprzez stworzenie klasy; sprawdzam wysokość od topu dla danej sekcji;
		console.log('miejsce '+miejsce);
		miejsce-=wys_nav;
		$('body, html').animate({
			scrollTop: miejsce+'px'
		},2000);
		return false; //likwiduje efekt migającej strony;
		
	});
}


	
function map(){	

	var map = new GMaps({
        scrollwheel: false,
	  div: '.map',
	  lat: 50.0807477,
	  lng: 20.0470967,
		zoom: 12
	});
}

/*hamburger*/

function hamburger(){
$('.mobile-circle-menu').click(function(){
	navigation = $('.main-nav');
	icon = $('.mobile-circle-menu i');
	
	navigation.slideToggle(200);
	
	if(icon.hasClass('ion-navicon')){
		icon.addClass('ion-android-close');
		icon.removeClass('ion-navicon');
		
	}else{
		icon.removeClass('ion-android-close');
		icon.addClass('ion-navicon');
	}
});
}
