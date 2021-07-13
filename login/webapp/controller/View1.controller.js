sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageBox,MessageToast) {
		"use strict";

		return Controller.extend("ux.login.controller.View1", {
			onInit: function () { 
				// main function in UI5.
				console.log("Init method");

			},

			onAfterRendering:function(){
				console.log("onAfter");
			},

			onBeforeRendering:function(){
				console.log("onBefore");
			},
			onExit:function(){ // sap built in functions

				console.log("onExit method");
			},

			onLogin:function(oEvent){ // userdefined functions

				var oEmail= this.getView().byId("mail").getValue();

				var oPwd =this.getView().byId("idpwd").getValue();

				if(oEmail !=="" && oEmail===oPwd){
					MessageBox.success("Your are logged in.");
				}else{
					MessageBox.error("Please verfiy. Username Password combination is incorrect.");
					}
			
			},

			onSignUp:function(oEvent){
				MessageToast.show("Thanks for Signing up.");

			}



		});
	});
