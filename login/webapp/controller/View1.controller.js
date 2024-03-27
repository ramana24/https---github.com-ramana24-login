sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/odata/v2/ODataModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageBox, MessageToast, ODataModel) {
    "use strict";

    return Controller.extend("ux.login.controller.View1", {
      onInit: function () {
        var that = this; // initial control
        // main function in UI5.
        console.log("Init method");

        var oModel = new ODataModel(
          "/sap/opu/odata/IWBEP/TEA_TEST_APPLICATION/"
        ); // Real (live )time - odata model
        //	var oJSONModel = new oJSONModel(); // client side data - Dropdowns,chart
        this.getView().setModel(oModel);
      },

      onAfterRendering: function () {
        console.log("onAfter");
      },

      onBeforeRendering: function () {
        console.log("onBefore");
      },
      onExit: function () {
        // sap built in functions

        console.log("onExit method");
      },

      onLogin: function (oEvent) {
        // userdefined functions

        var oEmail = this.getView().byId("mail").getValue();

        var oPwd = this.getView().byId("idpwd").getValue();

        if (oEmail !== "" && oEmail === oPwd) {
          MessageBox.success("Your are logged in.");
        } else {
          MessageBox.error(
            "Please verfiy. Username Password combination is incorrect."
          );
        }
      },

      onSignUp: function (oEvent) {
        MessageToast.show("Thanks for Signing up.");
      },

      onupdate:function(){



      },

      onDisplay:function(){

        var oTable= this.getView().byId("idTable");
var BtnSelected = true;
        if(BtnSelected) {
        oTable.setVisible(true);
        }
     //   BtnSelected = false;

      },
      onClear:function(){
        
        var today = new Date();
        var oTruckId = this.getView().byId("idTruckId").setValue("");
        var oPlantSrc = this.getView().byId("idPlantSrc").setValue("");
        var oPlantDst = this.getView().byId("idPlantDst").setValue("");
        var oDate = this.getView().byId("idToday").setDateValue(today);


       var oSelectInTime = this.getView().byId("idInTime").setSelectedKey("1");
        var oSelectOutTime = this.getView().byId("idOutTime").setSelectedKey("1");
      },

      onDelete:function(){
        
        var today = new Date();
        var oTruckId = this.getView().byId("idTruckId").setValue("");
        var oPlantSrc = this.getView().byId("idPlantSrc").setValue("");
        var oPlantDst = this.getView().byId("idPlantDst").setValue("");
        var oDate = this.getView().byId("idToday").setDateValue(today);


       var oSelectInTime = this.getView().byId("idInTime").setSelectedKey("1");
        var oSelectOutTime = this.getView().byId("idOutTime").setSelectedKey("1");
      },


      onSave: function (oEvent) {

        // Step 4 - Declare a Model /Container to hold data
        var oModel = this.getView().getModel();
        //   var oTruckModel = this.getView().getModel();


        // Reading UI entered data - step 2
        var oTruckId = this.getView().byId("idTruckId").getValue();
        var oPlantSrc = this.getView().byId("idPlantSrc").getValue();
        var oPlantDst = this.getView().byId("idPlantDst").getValue();
        var oDate = this.getView().byId("idToday").getDateValue();
        var oSelectInTime = this.getView().byId("idInTime").getSelectedItem();
        var oSelectOutTime = this.getView().byId("idOutTime").getSelectedItem();
        //	var oTruckId = this.getView().byId("idTruckId").getValue();


        // Step 3 -  Create the Structure  
        var oPayload = {
          Id: oTruckId,
          price: oPlantSrc,
          currency: oPlantDst,
          amount: oSelectInTime,
          unit: oSelectOutTime,
          test_currency: "ZZZ",
          test_unit: oDate,
          test_id: "xyz",
        };

        console.log(oPayload);

        // oModel.create("table,"data","sucess/failure"); Create operation Model Syntax.

        // Step 5 -  CRUD - crete - Drafts table/entity , sucess/error
        oModel.create(
       "/Drafts", //1
        oPayload, // 2
         {
        success: function (oEvent) {
                              MessageToast.show("Data Created");
                             },
        error: function () {
                              MessageToast.show("Data insert Failed");
                           },
        });

        // Step 1-  identify save - "input data structure" - Gw _client
        // Test Payload

        // {
        // 	"Id" : "12",
        // 	"price" : "-170.10",
        // 	"currency" : "XXX",
        // 	"amount" : "1.9870",
        // 	"unit" : "YY",
        // 	"test_currency" : "ZZZ",
        // 	"test_unit" : "ZZ",
        // 	"test_id" : "xyz"
        // }
      },
    });
  }
);
