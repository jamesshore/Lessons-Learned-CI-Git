// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

/*global desc, task, jake, fail, complete */
(function() {
	"use strict";

	desc("Lint everything");
	task("default", [], function() {
		var lint = require("./build/lint/lint_runner.js");

		var files = new jake.FileList();
		files.include("**/*.js");
		files.exclude("node_modules");
		var options = nodeLintOptions();
		var passed = lint.validateFileList(files.toArray(), options, {});
		if (!passed) fail("Lint failed");
	});

	function nodeLintOptions() {
		return {
			bitwise:true,
			curly:false,
			eqeqeq:true,
			forin:true,
			immed:true,
			latedef:true,
			newcap:true,
			noarg:true,
			noempty:true,
			nonew:true,
			regexp:true,
			undef:true,
			strict:true,
			trailing:true,
			node:true
		};
	}
}());