sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,ODataModel,JSONModel) {
		"use strict";

		return Controller.extend("ux.fioriuxdashboard.controller.View1", {
			onInit: function () {
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
 
			},

			onAfterRendering: function(){

				var oView= this.getView();
				var vServiceUrl="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
				var oSRMModel= new sap.ui.model.odata.v2.ODataModel(vServiceUrl); // server side

				oSRMModel.setUseBatch(false); 

				oView.byId("idSRMContainer").setModel(oSRMModel);

				oView.byId("idSRMContainer").bindElement("/Products('AR-FB-1003')");
			}
		});
	});
