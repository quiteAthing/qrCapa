	/*		var responder=undefined;
			var responder2=undefined;		
			var qrSpec=undefined;
			var capacity=undefined;
			var volume_a=undefined;
			var volume_b=undefined;
			var version=undefined;
			var mode=undefined;
			var ecc=undefined;
		*/	
			window.addEventListener("load",setup);
			
			function setup(){
				console.log("asd");
				responder=document.getElementById("responder");
				responder2=document.getElementById("responder2");
				wordcount(document.getElementById("inputArea"));
				qrSpec=JSON.parse(document.getElementById("qrSpec").innerHTML);
				capacity=document.getElementById("capacity");
				volume_a=document.getElementById("volA");
				volume_b=document.getElementById("volB");
				version=document.getElementById("ver");
				mode=document.getElementById("mode");
				ecc=document.getElementById("ecc");
				updateCapacity();
				console.log(version);
			}
			
			
			function wordcount(elem){
				var content=elem.value;
				responder.innerHTML=count(content);
				responder2.innerHTML=count(content.replace(/\s/g,''));
				
				function count(content){
					var biSize=0;
					for(var i=0;i < content.length;i++){
					var code=content.charCodeAt(i);
					if(code<128 && code>=0){biSize+=1;}
					if(code<2048 && code>127){biSize+=2;}
					if(code<65535 && code>2048){biSize+=3;}
					if(code<2097151 && code>65535){biSize+=4;}
					if(code <67108863 &&code >2097151){biSize+=5;}
					if(code <2147483647 && code >67108863 ){biSize+=6;}
					}
					return biSize*8;
				}
				
			}
			
			function onEntry(elem){
				wordcount(elem)
				getVolume();
			}
			
			function getVolume(){
				volume_a.innerHTML=Math.round(responder.innerHTML/qrSpec[version.value][ecc.value][mode.value]*100);
				volume_b.innerHTML=Math.round(responder2.innerHTML/qrSpec[version.value][ecc.value][mode.value]*100);
			}
			function updateCapacity(){
				capacity.innerHTML=qrSpec[version.value][ecc.value][mode.value];
				getVolume();
			}
		