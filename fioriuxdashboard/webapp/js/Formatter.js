sap.ui.define(function() {
	"use strict";

	var Formatter = {



		formatJSONDate:function(Input){
			if(Input){
			var dateString = Input.substring(6,19);
			var currentTime = new Date(parseInt(dateString ));
			var month = currentTime.getMonth() + 1;
			var day = currentTime.getDate();
			var year = currentTime.getFullYear();
			var hour = currentTime.getHours();
			var minutes = currentTime.getMinutes();
			var seconds = currentTime.getSeconds();
			var date = day + "-" + month + "-" + year +"  "+ hour +":" + minutes +":"+ seconds;	
		//	var date = "" + hour +":" + minutes +":"+ seconds;
		//	var date = "" + hour +":" + minutes;

		var date2=  year + "/" + month + "/" + day;
								return date2;
			}
			else
				{
				return Input;
				}
		},

		weightState :  function (fMeasure, sUnit) {

			// Boarder values for different status of weight
			var fMaxWeightSuccess = 1;
			var fMaxWeightWarning = 5;
			var fAdjustedMeasure = parseFloat(fMeasure);

			// if the value of fMeasure is not a number, no status will be set
			if (isNaN(fAdjustedMeasure)) {
				return "None";
			} else {

				if (sUnit === "G") {
					fAdjustedMeasure = fMeasure / 1000;
				}

				if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "Success";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "Warning";
				} else {
					return "Error";
				}
			}
        },
        formatDate : function(inpt) {
         		   if(inpt)
         		   {
         			   var value = inpt.toString();
         			   
         			   if (value.startsWith("/")) 
         			   {
         				   var sJsonDate = value;
         				   
         				   var sNumber = sJsonDate.replace(/[^0-9]+/g,'');
         				   var iNumber = sNumber * 1; 
         				   var oDate = new Date(iNumber);
         				   
         				   return oDate;
         		       }
         			   else
         			   {
         				   return inpt; 
         			   }
         		   }
         		   else
         		   {
         			   return inpt;
         		   }
                },
               
						
						SystemStatus:function(oValue, oThreshold)
						{
							var Value=parseInt(oValue);
							var Threshold = parseInt(oThreshold);
							
							if(Value < Threshold){
								return "Success"	
							}
							else if(Value >= Threshold)
								{
								return "Error"
								}
							else
								{
								return "None"
								}
							
						},
						
						QueueDepthStatus:function(oQDepth, oQThreshold,oQueueAge,oThreadAge)
						{
							var QueueAge = oQueueAge;
							var ThreadAge = oThreadAge;
							
							if(QueueAge == "X" || ThreadAge == "X"){
								return "Error"
							}
							else {
							var QDepth = parseInt(oQDepth);
							var QThreshold= parseInt(oQThreshold);
							
							if(QDepth < QThreshold){
								return "Good"
								
							}else if(QDepth >= QThreshold)
								{
								return "Error"
								}
							else
								{
								return "Neutral"
								}
							}
						},
						
	};

	return Formatter;

}, /* bExport= */ true);
