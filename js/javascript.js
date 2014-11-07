function beername() {
	var beername = [];
	beername[0] = "Soul Man's Rock";
	beername[1] = "Liquid Bread";
	beername[2] = "Dougie Howser Hefeweissen";
	beername[3] = "Let My People Go Kosher Lager";
	beername[4] = "Red Thursday Rauchbier";
	beername[5] = "Loch Ness Monster-Robot Bavarian Dunkelweizen";
	beername[6] = "Boulder Hobo";
	beername[7] = "Hoptimus Prime Pale Ale";
	beername[8] = "Charles Barley";
	beername[9] = "Cheap Bastard Scottish Ale";
	beername[10] = "Colorado Yellow Snow Bitter";
	beername[11] = "Jack's Tavern";
	beername[12] = "Mumford And Suds";
	beername[13] = "India Not So Pale Ale";
	beername[14] = "Wintergreen Delight";
	beername[15] = "Stay Classy San Diego Stout";
	beername[16] = "Cold One";
	beername[17] = "Beard Of Zeus";
	beername[19] = "Ironically mustachioed limbic";
	beername[20] = "Bootylicious milk stout";
	beername[21] = "Beyoncé is my fiancé IPA";
	beername[22] = "So dark it's like the sun died Chocolate stout";
	beername[23] = "Han shot first pilsner";
	beername[24] = "Adamantium Ale	";
	beername[25] = "Burning Man Marzipan Pilsner";
	beername[26] = "Amish Bearded Flemish red";
	beername[27] = "Screaming yellow Zonker dunkleweisse";
	beername[28] = "Naughty Abbot Lager";
	beername[29] = "Warby Parker Boston Lager";
	beername[30] = "Lumpy oatmeal Stout";
	beername[31] = "This porridge is too cold oatmeal Stout";
	beername[32] = "Tragically hip Triple Bok";
	beername[33] = "Scope creep barley wine";
	beername[34] = "Left at the altar extra special bitter";
	beername[35] = "Puppy breath Belgian brown ale";
	beername[36] = "Sigmund the seasick Sea monster IPA";
	beername[37] = "Wonderrama raspberry lambic";
	beername[38] = "Ridiculously well red beer";
	beername[39] = "Morning wood smoked winter warmer";
	beername[40] = "Over the real pale ale";
	beername[41] = "Go Broncos";
	beername[42] = "Avowedly atheist Belgian lager";
	beername[43] = "Hauntingly sincere Czech pilsener";
	beername[44] = "Aesthetically challenged Pilsner";
	beername[45] = "REM Kuhlhause Marionberry lambic";
	beername[46] = "Unicorn friendly dunkleweisse";
	beername[47] = "Sassy Fedora dopplebock";
	beername[48] = "Metrosexual fig and Brie cream ale";
	beername[49] = "Mid century modern Maibach";
	beername[50] = "Socially responsible Scotch ale";
	beername[51] = "Agile scrum Pilsner";
	beername[52] = "Confucius say IPA";
	beername[53] = "Kiss me I'm Irish dry stout";
	beername[54] = "Dirty hippie czech pilsner";
	beername[55] = "The hobbit is one book not three movies ale";
	beername[56] = "Fundamentally different Pilsner";
	beername[57] = "Media maven Maibach";
	beername[58] = "Content is king IPA";
	beername[59] = "Blow Your Kilt Up Scottish stout";
	beername[60] = "Snotty Bastard French Ale";
	beername[61] = "Socially Unacceptable Extra Special Bitter";
	beername[62] = "HeBrew Holy Hefeweissen";
	beername[63] = "Quest for the Holy Ale";
	beername[64] = "Warm Dog Piss Pilsner";
	beername[65] = "Stranger Danger Farmhouse Ale";
	beername[66] = "Scruffy Nerf Herder Hefeweissen";
	beername[67] = "Back In Black Ale";
	beername[68] = "Snowball Has Two Mommies Maibach";
	beername[69] = "Terminal Velocity Winter Warmer";
	beername[70] = "For Those About to Bock";
	beername[71] = "Sherlock's Back Bock";
	beername[72] = "Heisenberg's Hefeweissen";
	beername[73] = "Harry Porter and the Goblet of Fire";
	beername[74] = "Heisenberg's Hefeweissen";
	beername[75] = "Downton Abbey Belgian Ale";
	beername[76] = "Simon and GarfDunkle";
	beername[77] = "Do not pass go, go directly to ale";
	beername[78] = "Pheasant plucker porter";
	beername[79] = "South of the Border porter";
	beername[80] = "Window Fogger Honey Lager";
	beername[81] = "JohnLock Double Bock";
	beername[82] = "White Belt Weiss Bier";
	beername[83] = "Because Dragons Flemish Red";
	beername[84] = "Custard and fish finger ale";
	beername[85] = "Twist and Stout";
	beername[86] = "Abbey Normal Belgian Ale";
	beername[87] = "Freudian Sip";
	beername[88] = "Malt Disney";
	beername[89] = "Watler Weiss Beir";
	beername[90] = "Sirius Black Lager";
	beername[91] = "My Milkshakes Cream Ale";
	beername[92] = "Leggy Blond";
	beername[93] = "Malter White";
	beername[94] = "Freudian Sip";

	var randomBeer = Math.floor(Math.random()*(beername.length));
	document.getElementById('demo').innerHTML = beername[randomBeer];
} 

$(document).ready(function() {
 		$('header img:nth-of-type(2)').mouseenter(function() {
			$(this).attr("src","images/arrow-hover.png");
		});
		$('header img:nth-of-type(2)').mouseleave(function() {
			$(this).attr("src","images/arrow.png");
		});

    	$('header img:nth-of-type(2)').click(function(){
        	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
        	return false;
    	});
	});

	function popitup(url) {
			newwindow=window.open(url,'name','height=440,width=540');
			if (window.focus) {newwindow.focus()}
			return false;
		}