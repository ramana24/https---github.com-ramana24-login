sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/json/JSONModel",
    'ux/fioriuxdashboard/js/Formatter'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,ODataModel,JSONModel,Formatter) {
		"use strict";

		return Controller.extend("ux.fioriuxdashboard.controller.View1", {
			Formatter:Formatter, // loading outside formatter into our file
			onInit: function () {

this.chartFunction();

				// 0
				var oView= this.getView();

				// ECC Block tile
                var vServiceUrl="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
				var oECCModel= new sap.ui.model.odata.v2.ODataModel(vServiceUrl); // server side

				oECCModel.setUseBatch(false); 

				oView.byId("ECCContainer").setModel(oECCModel);

				oView.byId("ECCContainer").bindElement("/Products('AR-FB-1001')");


				
                  // CRM block tile
				var vServiceUrlCRM ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1000')";
				var oCRMModel = new JSONModel(vServiceUrlCRM); // client side
                    oView.byId("crmcontainer").setModel(oCRMModel,"CRM"); // CRM Named model

				//	oView.byId("crmcontainer").bindElement("/Products('AR-FB-1000')");
 

				    // CRM block tile
					var vServiceUrlPLM ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1009')";
					var oPLMModel = new JSONModel(vServiceUrlPLM); // client side
						oView.byId("PLMContainer").setModel(oPLMModel,"PLM"); // CRM Named model
			},

			onAfterRendering: function(){

				//3
				var oView= this.getView();
				var vServiceUrl="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
				var oSRMModel= new sap.ui.model.odata.v2.ODataModel(vServiceUrl); // server side

				oSRMModel.setUseBatch(false); 

				oView.byId("idSRMContainer").setModel(oSRMModel);

				oView.byId("idSRMContainer").bindElement("/Products('AR-FB-1003')");
			},

			onBeforeRendering:function(){
//2
				     // SF block tile
					 var oView= this.getView();
					 var vServiceUrlSF ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1007')";
					 var oSFModel = new JSONModel(vServiceUrlSF); // client side
						 oView.byId("SFContainer").setModel(oSFModel,"SF"); // SF Named model


						 
				     // concur block tile
					 var oView= this.getView();
					 var vServiceUrlConcur ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1010')";
					 var oCModel = new JSONModel(vServiceUrlConcur); // client side
						 oView.byId("concurContainer").setModel(oCModel,"Concur"); // concur Named model



						 		 
				     // fieldglass block tile
					 var oView= this.getView();
					 var fieldglass ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1011')";
					 var oFGModel = new JSONModel(fieldglass); // client side
						 oView.byId("idFGContainer").setModel(oFGModel,"FG"); // FG Named model

						 		 
				     // BW block tile
					 var oView= this.getView();
					 var vServiceUrlBW ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1012')";
					 var oBWModel = new JSONModel(vServiceUrlBW); // client side
						 oView.byId("idBWContainer").setModel(oBWModel,"BW"); // BW Named model

						 		 
				     // ariba block tile
					 var oView= this.getView();
					 var vServiceUrlariba ="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1013')";
					 var oAModel = new JSONModel(vServiceUrlariba); // client side
						 oView.byId("idAribaContainer").setModel(oAModel,"Ariba"); // Ariba Named model

					
			},

			onOpenSystemErrors:function(oEvent){

			
					
				// @ts-ignore
				var oView = this.getView();
				var oDialog = oView.byId("idSysError");
			  //  oDialog.setModel(oModelFetch, "tableModel");
				// create dialog lazily
				if (!oDialog) {
					// create dialog via fragment factory
					// @ts-ignore
					oDialog = sap.ui.xmlfragment(oView.getId(), "ux.fioriuxdashboard.view.SysError", this);
					oView.addDependent(oDialog);
				}
			   
				oDialog.open();

		 	var oModel = new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Suppliers?$format=json");
		  this.getView().byId("idSysError").setModel(oModel,"SError");


			},
			onClose:function(){
				var oView = this.getView();
				var oDialog = oView.byId("idSysError");

				oDialog.close();
			},

			onOpenAppDialog: function(oEvent){
				// @ts-ignore
				// @ts-ignore
				var   IvSystem ;
		
					
				   // @ts-ignore
				   var oView = this.getView();
				   var oDialog = oView.byId("ADialog");
				 //  oDialog.setModel(oModelFetch, "tableModel");
				   // create dialog lazily
				   if (!oDialog) {
					   // create dialog via fragment factory
			           // @ts-ignore
			           oDialog = sap.ui.xmlfragment(oView.getId(), "ux.fioriuxdashboard.view.AppDialog", this);
			           oView.addDependent(oDialog);
				   }
				  
                   oDialog.open();

				   var oModel = new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Suppliers?$format=json");
				this.getView().byId("ADialog").setModel(oModel,"oModel");


			

               },

			   chartFunction :function(){

// column chart

 /*Total -Summary*/
 var oVizFrame = this.getView().byId("idVizColumn");
 var oModel = new sap.ui.model.json.JSONModel();
var data = {
	   'Count' : [
		   {"Status": "Total","Value": "1234"},
		   {"Status": "Inbound","Value": "9127"},
		  
			{"Status": "Outbound","Value": "15957"},
			{"Status": "Profit","Value": "20000"},
			
		  ]};
oModel.setData(data);

var oDataset = new sap.viz.ui5.data.FlattenedDataset({
   dimensions : [{
	   name : 'Status',
	   value : "{Status}"}],
				  
   measures : [{
	   name : 'Count',
	   value : '{Value}'} ],
				
   data : {
	   path : "/Count"
   }
});		
oVizFrame.setDataset(oDataset);
oVizFrame.setModel(oModel);	
oVizFrame.setVizType('line');


oVizFrame.setVizProperties({

   plotArea: {
  	colorPalette : d3.scale.category20().range,
   dataLabel: {
				   visible: "true"
			   }
			
	   }});

var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
	 'uid': "valueAxis",
	 'type': "Measure",
	 'values': ["Count"],
	 'label':"true"
   }), 
   feedDataAxis =   new sap.viz.ui5.controls.common.feeds.FeedItem({
	'uid': "DataAxis",
	'type': "Measure",
	'values': ["Count"],
	'label':"true"
  }), 
   feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
	 'uid': "categoryAxis",
	 'type': "Dimension",
	 'values': ["Status"]
   });
oVizFrame.addFeed(feedValueAxis);
oVizFrame.addFeed(feedCategoryAxis);
oVizFrame.addFeed(feedDataAxis);




			   }
		});
	});
