function imgName(image) {
	if(jQuery(image).next().text() == "/"){
		if(jQuery(image).text().indexOf("aug") != -1){
			return jQuery(image).text();
		}
		
		return jQuery(image).text() + "/" + jQuery(image).next().next().text();
	}
	else if(jQuery(image).prev().text() == "/"){
		if(jQuery(image).prev().prev().text().indexOf("aug") != -1){
			return jQuery(image).prev().prev().text();
		}
		
		return jQuery(image).prev().prev().text() + "/" + jQuery(image).text();
	}
	
	return jQuery(image).text();
}

function changeGuitarChordVariation(){
	jQuery("#spanVariation").html(jtab.Variation);
	jQuery(".jtab").html(jtab.Chord + ":" + jtab.Variation);
	jtab.render(jQuery(".jtab"));
}

function openChordTooltip(){
	if(jQuery("#ddlChord").val() == "Piano"){
		if(piano.IsValidChord == true)
			piano.render(piano.Chord.replace(/#/g,"s"));
	}
	else{		
		if(jtab.IsValidChord == true){
			jtab.render(jQuery(".jtab"));
			
			jQuery("#btnNext").click(function(){
				if(jtab.Chord.indexOf("/") == -1){
					if(jtab.Variation != 10){
						jtab.Variation++;
						changeGuitarChordVariation();
					}
				}
			});
			
			jQuery("#btnPrevious").click(function(){
				if(jtab.Variation != 1){
					jtab.Variation--;
					changeGuitarChordVariation();
				}
			});
		}
	}
}

jQuery("pre").transpose();

jQuery(".c").attr("title","").tooltip({
	position: {
		my: "center bottom", 
		at: "center top", 
	},
	show: {
		duration: 0
	},
	content: function(){
		if(jQuery("#ddlChord").val() == "Piano"){
			if(piano.Chords[(imgName(this)).replace(/#/g,"s")] == undefined){
				piano.IsValidChord = false;
				
				return jQuery("<div>No data</div>");
			}
			else{
				piano.IsValidChord = true;
				piano.Chord = imgName(this);
				return jQuery("<div><center><div id='divVariation'><b>" + piano.Chord + "</b></div></center></div>" + piano.generatePiano());
			}
		}
		else{
			if(jtab.Chords[imgName(this)] == undefined){
				jtab.IsValidChord= false;
				
				return jQuery("<div>Tidak Ada Chord</div>");
			}
			else{
				jtab.IsValidChord= true;
				jtab.Variation = 1;
				jtab.Chord = imgName(this);
				return jQuery("<div><center><b>Variasi <span id='spanVariation'>" + jtab.Variation + "</span></h3></center></div><div class='jtab chordonly'>" + jtab.Chord + ":" + jtab.Variation + "</div><div><button id='btnNext'>Berikutnya</button></div><div id='divPrevious'><button id='btnPrevious'>Sebelumnya</button></div>");
			}
		}
	},
	open: function(event, ui)
    	{
       		if (typeof(event.originalEvent) === 'undefined')
        	{
            		return false;
        	}

        	var $id = jQuery(ui.tooltip).attr('id');

        	jQuery('div.ui-tooltip').not('#' + $id).remove();
		
		openChordTooltip();
    	},
    	close: function(event, ui)
    	{
       		ui.tooltip.hover(function()
        	{
            		jQuery(this).stop(true).fadeTo(100, 1); 
        	},
        	function()
        	{
            		jQuery(this).fadeOut('100', function()
            		{
               			jQuery(this).remove();
            		});
        	});
    	},
});

jQuery(".on").attr("title","").tooltip({
	position: {
	    my: "center bottom", 
	    at: "center top", 
	},
	content: function(){
		var Chord = jQuery(this).prev().text() + "/" + jQuery(this).next().text();
		/* var Chord = piano.Chords[jQuery(this).prev().text()]; */
		
		if(jQuery("#ddlChord").val() == "Piano"){
			if(piano.Chords[(Chord).replace(/#/g,"s")] == undefined){
				piano.IsValidChord = false;
				
				return jQuery("<div>Tidak Ada Data</div>");
			}
			else{
				piano.IsValidChord = true
				piano.Chord = Chord;
				return jQuery("<div><center><div id='divVariation'><b>" + piano.Chord + "</b></div></center></div>" + piano.generatePiano());
			}
		}
		else{
			if(jtab.Chords[(jQuery(this).prev().text().indexOf("aug") != -1 ? jQuery(this).prev().text() : jQuery(this).prev().text() + "/" + jQuery(this).next().text())] == undefined){
				jtab.IsValidChord= false;
				
				return jQuery("<div>No data</div>");
			}
			else{
				jtab.IsValidChord= true;
				jtab.Variation = 1;
				jtab.Chord = (jQuery(this).prev().text().indexOf("aug") != -1 ? jQuery(this).prev().text() : jQuery(this).prev().text() + "/" + jQuery(this).next().text());
				return jQuery("<div><center><h3>Variation <span id='spanVariation'>" + jtab.Variation + "</span></h3></center></div><div class='jtab chordonly'>" + jtab.Chord + ":" + jtab.Variation + "</div><div><button id='btnNext'>Next</button></div><div id='divPrevious'><button id='btnPrevious'>Previous</button></div>");
			}
		}
		
	},
	open: function(event, ui)
    	{
       		if (typeof(event.originalEvent) === 'undefined')
        	{
            		return false;
        	}

        	var $id = jQuery(ui.tooltip).attr('id');

        	jQuery('div.ui-tooltip').not('#' + $id).remove();
		
		openChordTooltip();
    	},
    	close: function(event, ui)
    	{
       		ui.tooltip.hover(function()
        	{
            		jQuery(this).stop(true).fadeTo(100, 1); 
        	},
        	function()
        	{
            		jQuery(this).fadeOut('100', function()
            		{
               			jQuery(this).remove();
            		});
        	});
    	},
});

jQuery("#btnChordVisibility").click(function(){
	if(jQuery("#btnChordVisibility").text() == "Sembunyikan Chord"){
		jQuery("#btnChordVisibility").text("Tampilkan Chord");
		jQuery(".c,.on").css("opacity","0");
	}
	else{
		jQuery("#btnChordVisibility").text("Sembunyikan Chord");
		jQuery(".c,.on").css("opacity","1");
	}
});

jQuery("#btnPDF").click(function(){
	var form = document.createElement("form");
	var textarea = document.createElement("textarea");
	var input = document.createElement("input");
	var html = jQuery("pre").clone();
	
	jQuery("span", html).first().text(jQuery("span", html).first().text().replace("Chord ",""));
	jQuery("span", html).first().after("Key : " + jQuery(".selected").text());
	jQuery("span", html).first().wrap("<h1></h1>");
	
	form.method = "POST";
	form.action = "https://www.chord.jackyrusly.web.id/pdf/pdf.php";
	
	textarea.name = "HTML";
	textarea.value = "<pre>" + html.html() + "</pre>";
	
	input.name = "Title";
	input.value = jQuery(".entry-title").text();
	
	form.appendChild(textarea);
	form.appendChild(input);
	
	document.body.appendChild(form);

    	form.submit();
	form.remove();	
});

jQuery("#btnPrint").click(function(){
	var html = jQuery("pre").clone();
	jQuery("span", html).first().after("<br><span>Key : " + jQuery(".selected").text() + "</span>");
	
	jQuery("span", html).first().text(jQuery("span", html).first().text().replace("Chord ","")).css({
		"font-size":"2em",
		"font-weight":"bold"
	});
	
	var w = window.open();
	w.document.write("<style>.c,.on{ color: #007acc; }</style>");
	w.document.write("<link rel='icon' href='https://www.chord.jackyrusly.web.id/wp-content/uploads/Favicon.png' type='image/x-icon'/>");
	w.document.write("<label style='font-size:2em; font-weight:bold'>JRChord</label>" + "<pre>" + html.html() + "</pre>");
	w.document.title = "Cetak - JRChord";
	w.document.close();
	
	w.focus();
	
	w.print();
	w.close();
});

jQuery("#instrument-info").tooltip();

jQuery("#btnChordVisibility,#btnPDF,#btnPrint").attr("disabled", false);

jQuery("pre span:first").css('font-weight', 'bold');
jQuery("pre span").filter(function() { return jQuery(this).text().indexOf("[Chorus]") >= 0 }).css('font-weight', 'bold');
