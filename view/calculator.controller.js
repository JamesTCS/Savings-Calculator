sap.ui.controller("tcs.calculator.view.calculator", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf calculator.calculator
*/
	onInit: function() {
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf calculator.calculator
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf calculator.calculator
*/
	onAfterRendering: function() {
		//Set input boxes to slider default values
		this.byId("originalBox").setValue(20);
		this.byId("newBox").setValue(10);
		this.byId("usersBox").setValue(8);
		this.byId("usesBox").setValue(5);
		this.update();
		/*
		this.byId("originalBox2").setValue(20);
		this.byId("newBox2").setValue(10);
		this.byId("usersBox2").setValue(8);
		this.byId("usesBox2").setValue(5);
		this.update2();*/
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf calculator.calculator
*/
//	onExit: function() {
//
//	}
	
	// Left Calculator -- Personas **************************************************************************************
	
	update: function(event) {
		// get inputs
		var originalTime = this.byId("originalBox").getValue();
		var newTime = this.byId("newBox").getValue();
		var users = this.byId("usersBox").getValue();
		var uses = this.byId("usesBox").getValue();
		var worth = this.byId("worth").getValue();
		
		//calculate time
		var beforeTime = originalTime * users * uses;
		var afterTime = newTime * users * uses;
		var saveTime = beforeTime - afterTime;
		var timePerc = ( (saveTime / beforeTime) * 100 ).toPrecision(4);
		
		//calculate money
		var beforeMoney = beforeTime * worth;
		var afterMoney = afterTime * worth;
		var saveMoney = beforeMoney - afterMoney;
		var moneyPerc = ( (saveMoney / beforeMoney) * 100 ).toPrecision(4);
		 
		//update screen
		this.byId("beforeTime").setText(beforeTime);
		this.byId("afterTime").setText(afterTime);
		this.byId("saveTime").setText(saveTime);
		this.byId("beforeMoney").setText("$"+beforeMoney);
		this.byId("afterMoney").setText("$"+afterMoney);
		this.byId("saveMoney").setText("$"+saveMoney);
		this.byId("timePerc").setText(timePerc + "%");
		this.byId("moneyPerc").setText(moneyPerc + "%");
		
		//expressions
		this.byId("expression").setText(""+ originalTime +"   *   "+ users +"   *   "+ uses +"   *   "+ worth);
	},
	
	sliderChanged: function(event) {
		var sliderBox = this.byId(event.getSource().getId() ); // get the slider box changed
		var value = sliderBox.getValue(); // current value of the changed slider
		var sliderId = sliderBox.getId(); // id of the changed slider
		if(sliderId == "calculator--original")
			this.byId("originalBox").setValue(value);
		else if(sliderId == "calculator--new")
			this.byId("newBox").setValue(value);
		else if(sliderId == "calculator--users")
			this.byId("usersBox").setValue(value);
		else if(sliderId == "calculator--uses")
			this.byId("usesBox").setValue(value);
		this.update();
	},
	
	boxChanged: function(event) {
		var inputBox = this.byId(event.getSource().getId() );  // get the input box changed
		var value = parseInt(inputBox.getValue() ); //current value of the changed input box
		var inputBoxId = inputBox.getId();  // id of the changed input box
		if(value >= 1 && value <= 100 ) {
			if(inputBoxId == "calculator--originalBox")
				this.byId("original").setValue(value);
			else if(inputBoxId == "calculator--newBox")
				this.byId("new").setValue(value);
			else if(inputBoxId == "calculator--usersBox")
				this.byId("users").setValue(value);
			else if(inputBoxId == "calculator--usesBox")
				this.byId("uses").setValue(value);
		}
		this.update();
	},
	
	// Right Calculator Fiori ********************************************************************************************
	/*
	update2: function(event) {
		// get inputs
		var originalTime = this.byId("originalBox2").getValue();
		var newTime = this.byId("newBox2").getValue();
		var users = this.byId("usersBox2").getValue();
		var uses = this.byId("usesBox2").getValue();
		var worth = this.byId("worth2").getValue();
		
		//calculate time
		var beforeTime = originalTime * users * uses;
		var afterTime = newTime * users * uses;
		var saveTime = beforeTime - afterTime;
		var timePerc = ( (saveTime / beforeTime) * 100 ).toPrecision(4);
		
		//calculate money
		var beforeMoney = beforeTime * worth;
		var afterMoney = afterTime * worth;
		var saveMoney = beforeMoney - afterMoney;
		var moneyPerc = ( (saveMoney / beforeMoney) * 100 ).toPrecision(4);
		
		//update screen
		this.byId("beforeTime2").setText(beforeTime);
		this.byId("afterTime2").setText(afterTime);
		this.byId("saveTime2").setText(saveTime);
		this.byId("beforeMoney2").setText("$"+beforeMoney);
		this.byId("afterMoney2").setText("$"+afterMoney);
		this.byId("saveMoney2").setText("$"+saveMoney);
		this.byId("timePerc2").setText(timePerc + "%");
		this.byId("moneyPerc2").setText(moneyPerc + "%");
		
		//expressions
		this.byId("expression2").setText(""+ originalTime +"   *   "+ users +"   *   "+ uses +"   *   "+ worth);
	},
	
	sliderChanged2: function(event) {
		var sliderBox = this.byId(event.getSource().getId() ); // get the slider box changed
		var value = sliderBox.getValue(); // current value of the changed slider
		var sliderId = sliderBox.getId(); // id of the changed slider
		if(sliderId == "calculator--original2")
			this.byId("originalBox2").setValue(value);
		else if(sliderId == "calculator--new2")
			this.byId("newBox2").setValue(value);
		else if(sliderId == "calculator--users2")
			this.byId("usersBox2").setValue(value);
		else if(sliderId == "calculator--uses2")
			this.byId("usesBox2").setValue(value);
		this.update2();
	},
	
	boxChanged2: function(event) {
		var inputBox = this.byId(event.getSource().getId() );  // get the input box changed
		var value = parseInt(inputBox.getValue() ); //current value of the changed input box
		var inputBoxId = inputBox.getId();  // id of the changed input box
		if(value >= 1 && value <= 100 ) {
			if(inputBoxId == "calculator--originalBox2")
				this.byId("original2").setValue(value);
			else if(inputBoxId == "calculator--newBox2")
				this.byId("new2").setValue(value);
			else if(inputBoxId == "calculator--usersBox2")
				this.byId("users2").setValue(value);
			else if(inputBoxId == "calculator--usesBox2")
				this.byId("uses2").setValue(value);
		}
		this.update2();
	},
	
	preset: function(event) {
		//Screen Personas
		this.byId("original").setValue(20);
		this.byId("originalBox").setValue(20);
		this.byId("new").setValue(12);
		this.byId("newBox").setValue(12);
		this.byId("users").setValue(25);
		this.byId("usersBox").setValue(25);
		this.byId("uses").setValue(30);
		this.byId("usesBox").setValue(30);
		this.byId("worth").setValue(.40);
		
		//Fiori
		this.byId("original2").setValue(20);
		this.byId("originalBox2").setValue(20);
		this.byId("new2").setValue(3);
		this.byId("newBox2").setValue(3);
		this.byId("users2").setValue(5);
		this.byId("usersBox2").setValue(5);
		this.byId("uses2").setValue(8);
		this.byId("usesBox2").setValue(8);
		this.byId("worth2").setValue(.75);
		
		this.update();
		this.update2();
	},
	
	exportCSV: function(event) {
		//get all values
		var beforeTime = this.byId("beforeTime").getText();
		var afterTime = this.byId("afterTime").getText();
		var saveTime = this.byId("saveTime").getText();
		var beforeMoney = this.byId("beforeMoney").getText();
		var afterMoney = this.byId("afterMoney").getText();
		var saveMoney = this.byId("saveMoney").getText();
		var timePerc = this.byId("timePerc").getText();
		var moneyPerc = this.byId("moneyPerc").getText(); 
		
		var originalTime = this.byId("originalBox").getValue();
		var newTime = this.byId("newBox").getValue();
		var users = this.byId("usersBox").getValue();
		var uses = this.byId("usesBox").getValue();
		var worth = this.byId("worth").getValue();
		
		//fiori calculator
		var beforeTime2 = this.byId("beforeTime2").getText();
		var afterTime2 = this.byId("afterTime2").getText();
		var saveTime2 = this.byId("saveTime2").getText();
		var beforeMoney2 = this.byId("beforeMoney2").getText();
		var afterMoney2 = this.byId("afterMoney2").getText();
		var saveMoney2 = this.byId("saveMoney2").getText();
		var timePerc2 = this.byId("timePerc2").getText();
		var moneyPerc2 = this.byId("moneyPerc2").getText();
		
		var originalTime2 = this.byId("originalBox2").getValue();
		var newTime2 = this.byId("newBox2").getValue();
		var users2 = this.byId("usersBox2").getValue();
		var uses2 = this.byId("usesBox2").getValue();
		var worth2 = this.byId("worth2").getValue();
		
		//create document
		var document = "Screen Personas,,,,Fiori,,\n";
		document += ",Time,Money,,,Time,Money\n";
		document += "before,"+beforeTime+","+beforeMoney+",,before,"+beforeTime2+","+beforeMoney2+"\n";
		document += "after,"+afterTime+","+afterMoney+",,after,"+afterTime2+","+afterMoney2+"\n";
		document += "savings,"+saveTime+","+saveMoney+",,savings,"+saveTime2+","+saveMoney2+"\n";
		document += "percentage,"+timePerc+","+moneyPerc+",,percentage,"+timePerc2+","+moneyPerc2+"\n";
		document += ",,,,,,\n,,,,,,\n";
		document += "Time to complete:,,"+originalTime+",,Time to Complete:,,"+originalTime2+"\n";
		document += "New time:,,"+newTime+",,New Time,,"+newTime2+"\n";
		document += "Number of users:,,"+users+",,Number of users:,,"+users2+"\n";
		document += "Daily Transactions:,,"+uses+",,Daily Transactions:,,"+uses2+"\n";
		document += "Minutes Worth:,,"+worth+",,Minutes Worth:,,"+worth2+"\n";
		
		alert(document);
		sap.ui.core.util.File.save(document, "Savings Calculator Export", ".csv", "text/csv", "utf-8");
	},*/
	
	print: function() {
		window.print();
	}

});