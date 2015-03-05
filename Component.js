jQuery.sap.declare("tcs.calculator.Component");

sap.ui.core.UIComponent.extend("tcs.calculator.Component", {
   
   createContent : function() {
       var app = new sap.m.App("app");
       var view = new sap.ui.core.mvc.XMLView( {id:"calculator", viewName:"tcs.calculator.view.calculator"} );
       app.addPage(view);
       return app;
   }
   
});
   