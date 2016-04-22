(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1231,
	height: 367,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"sounds/klikButtonwav.mp3", id:"klikButtonwav"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.mc_loadImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape.setTransform(34.5,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,64);


(lib.mc_cloth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape.setTransform(34.5,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,64);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EB9B6").s().p("AjQEcIAAlwQBwgFBHhiQAhgwANgwICJACQgGAXgDAdQgGA4APAcQAuBVAFCzQACBbgGBKg");
	this.shape.setTransform(21,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,57);


(lib.btn_topi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("AifBDQg7gcgOgpQgMgiAgggQAQgRATgJQgKAYgEAfQgDAQAAALIADALQAGAMAPALQAxAkB8AAQB/AAAvgoQAYgSgCgUIgShMIAfAXQAdAdgGAiQgHAqg6AeQhBAhhkABIgFABQhgAAg/geg");
	this.shape.setTransform(39.4,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1B19").s().p("AABAuQhpgBgvgaQgOgIgHgKIgEgGIAIgoIAkATQA0ASBMgBQBKgBA6gRQAdgJAOgIIAGAfQgBAOgXAPQgsAehoAAIgEAAg");
	this.shape_1.setTransform(39.4,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3735").s().p("AiBBaIgjgTQACgMADgRQAIgiAOgaQAthaBcAAQBfAAAsBaQAWAsAEAtQgJAJgYAJQgxAThRABIgDAAQhOAAgygTg");
	this.shape_2.setTransform(39.6,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D3D3").s().p("Al1FAIAAp+ILrAAIAAJ+g");
	this.shape_3.setTransform(37.5,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AifBDQg7gcgOgpQgMgiAgggQAQgRATgJQgKAYgEAfQgDAQAAALIADALQAGAMAPALQAxAkB8AAQB/AAAvgoQAYgSgCgUIgShMIAfAXQAdAdgGAiQgHAqg6AeQhBAhhkABIgFABQhgAAg/geg");
	this.shape_4.setTransform(40.1,38.3,1.127,1.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AABAuQhpgBgvgaQgOgIgHgKIgEgGIAIgoIAkATQA0ASBMgBQBKgBA6gRQAdgJAOgIIAGAfQgBAOgXAPQgsAehoAAIgEAAg");
	this.shape_5.setTransform(40.1,37.5,1.127,1.127);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AiBBaIgjgTQACgMADgRQAIgiAOgaQAthaBcAAQBfAAAsBaQAWAsAEAtQgJAJgYAJQgxAThRABIgDAAQhOAAgygTg");
	this.shape_6.setTransform(40.3,21.8,1.127,1.127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_sepatu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("AABB3QgGgBgNgEQgbgJgXgTQgCgCgJgCQgQgEggACIAAAnIh4AAIAAgnQgJgVgGgeQgLg6AVgoIBJADQBNABAXgHQAUgFgCgZQgCgUARACIAoAhQArAkAUAPQAeAWAKAFQATAJAlAIQA3ANAOAGQAcALAIAXQAMAhgFAMQgJAJgGAAQhgAGhJAAQgsAAgkgCg");
	this.shape.setTransform(39.8,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al1FAIAAp+ILrAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AABB3QgGgBgNgEQgbgJgXgTQgCgCgJgCQgQgEggACIAAAnIh4AAIAAgnQgJgVgGgeQgLg6AVgoIBJADQBNABAXgHQAUgFgCgZQgCgUARACIAoAhQArAkAUAPQAeAWAKAFQATAJAlAIQA3ANAOAGQAcALAIAXQAMAhgFAMQgJAJgGAAQhgAGhJAAQgsAAgkgCg");
	this.shape_2.setTransform(39.8,35,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_rambut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("Aj8CCQgWhCAQgkQAFgLAJgHIAHgFQgFgDgJABQgRABgSAUQAJgUARgYQAggzAkgZQgJgBgKgFQgWgJgJgQIAkgBQAngDARgFQgLgDgMgIQgZgQgJgaIAhACQAuAAA+gMQBVgRAqAHQA6AKA9A5QADgHAJgHQARgNAaAEIgQAPQgOARAJAJIAbAcQAcAfAHAUQALAiAAAPQgBAkgXBPQgLAngTAdQgKAOgHAHQgIgZgIgiQgQhCAAgoQgeAPg+AHQh6AQiiggIgGA8QgIBDgNAkQgJgLgYhHg");
	this.shape.setTransform(36.2,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILtAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Aj8CCQgWhCAQgkQAFgLAJgHIAHgFQgFgDgJABQgRABgSAUQAJgUARgYQAggzAkgZQgJgBgKgFQgWgJgJgQIAkgBQAngDARgFQgLgDgMgIQgZgQgJgaIAhACQAuAAA+gMQBVgRAqAHQA6AKA9A5QADgHAJgHQARgNAaAEIgQAPQgOARAJAJIAbAcQAcAfAHAUQALAiAAAPQgBAkgXBPQgLAngTAdQgKAOgHAHQgIgZgIgiQgQhCAAgoQgeAPg+AHQh6AQiiggIgGA8QgIBDgNAkQgJgLgYhHg");
	this.shape_2.setTransform(36,31.7,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_mulut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("AgvB9QgpgIgdgdQg8g8gWgRQgIgGgYgLIgWgMIAggHQAggJBAgxQA5gsAYABQAXACAOAXQAHAMAAAMQADgMAHgMQANgXAXgCQAYgBA5AsQA/AxAgAJQAMAEAUADIgWAMQgYALgIAGQgYASg5A7QgdAdgqAIQgOACgiAAQgiAAgNgCgAhggEQANAEAgANQAfAMAYAAQAaAAAcgMQAPgGAYgKIAngOIkIAAg");
	this.shape.setTransform(38.1,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al2FAIAAp+ILtAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgvB9QgpgIgdgdQg8g8gWgRQgIgGgYgLIgWgMIAggHQAggJBAgxQA5gsAYABQAXACAOAXQAHAMAAAMQADgMAHgMQANgXAXgCQAYgBA5AsQA/AxAgAJQAMAEAUADIgWAMQgYALgIAGQgYASg5A7QgdAdgqAIQgOACgiAAQgiAAgNgCgAhggEQANAEAgANQAfAMAYAAQAaAAAcgMQAPgGAYgKIAngOIkIAAg");
	this.shape_2.setTransform(38.1,32.9,1.157,1.157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_mata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("AiyBGQgcgWgYgaIgSgVQAbghAtgjQBbhFBaAAQBcAABVBFQArAjAYAhIgSAVQgWAagbAWQhWBEhegBQhcABhYhEgABigzQAOAYAAAbQAAAcgQAaQgPAYgaAOQAzgOAzgpIAoglQgOgOgYgUQgxgngxgQQAXAOAOAYgAg0BbQgagOgPgYQgPgZAAgcQAAgZANgYQAMgWAVgPQgvARgwAlQgXATgPANIApAlQAzAnAzAPIAAAAgAhJg8QgLALAAAPQAAAQALAKQALAJAPAAQAPAAALgJQALgKAAgQQAAgPgLgLQgLgLgPABQgPgBgLALg");
	this.shape.setTransform(37,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILtAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AiyBGQgcgWgYgaIgSgVQAbghAtgjQBbhFBaAAQBcAABVBFQArAjAYAhIgSAVQgWAagbAWQhWBEhegBQhcABhYhEgABigzQAOAYAAAbQAAAcgQAaQgPAYgaAOQAzgOAzgpIAoglQgOgOgYgUQgxgngxgQQAXAOAOAYgAg0BbQgagOgPgYQgPgZAAgcQAAgZANgYQAMgWAVgPQgvARgwAlQgXATgPANIApAlQAzAnAzAPIAAAAgAhJg8QgLALAAAPQAAAQALAKQALAJAPAAQAPAAALgJQALgKAAgQQAAgPgLgLQgLgLgPABQgPgBgLALg");
	this.shape_2.setTransform(38,29.4,1.271,1.269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_kacamata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("ABeBWQgegIgWgsIgXg2QgEgLgPAAQgOAAgFALQgTAxgDAFQgXAsgdAIQgkAJgjgEQgkgDgQgPQgPgNgKgjQgJgZgCgbQgFgPgMABIgBgkIAvgHQA1gHAaAAQAZABAqAIIAwAKIAdADIAdgDIAxgKQAqgIAZgBQAqgBBUAPIgCAkQgHgBgGAIIgEAHQgCAbgIAZQgKAjgPANQgQAPgkADIgUABQgaAAgZgGgABAhDQgWAJgEAZQgEAZAQAeQAPAhAXAOQAYAPAoAAQAjABATgPQAKgIAJgSQAJgRADgdQADgngRgRQgNgOgbgEQgNgDggAAIgFgBQgmAAgfANgAiJhPQggAAgNADQgbAEgNAOQgQARADAnQACAdAJARQAKATAJAHQATAPAjgBQAoAAAYgPQAXgOAQghQAPgegEgZQgEgZgWgJQgfgNglAAIgGABg");
	this.shape.setTransform(38.8,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al1E/IAAp+ILrAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ABeBWQgegIgWgsIgXg2QgEgLgPAAQgOAAgFALQgTAxgDAFQgXAsgdAIQgkAJgjgEQgkgDgQgPQgPgNgKgjQgJgZgCgbQgFgPgMABIgBgkIAvgHQA1gHAaAAQAZABAqAIIAwAKIAdADIAdgDIAxgKQAqgIAZgBQAqgBBUAPIgCAkQgHgBgGAIIgEAHQgCAbgIAZQgKAjgPANQgQAPgkADIgUABQgaAAgZgGgABAhDQgWAJgEAZQgEAZAQAeQAPAhAXAOQAYAPAoAAQAjABATgPQAKgIAJgSQAJgRADgdQADgngRgRQgNgOgbgEQgNgDggAAIgFgBQgmAAgfANgAiJhPQggAAgNADQgbAEgNAOQgQARADAnQACAdAJARQAKATAJAHQATAPAjgBQAoAAAYgPQAXgOAQghQAPgegEgZQgEgZgWgJQgfgNglAAIgGABg");
	this.shape_2.setTransform(38.8,31.8,1.257,1.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_hidung = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("Ag2CwQgsgagRAEQgGACgKAOIgJAPQgigEgGgJQgNgTAOgsQAOgsAVgNQAHgFAXAFIAVAGIgUgcQAMg4AUg8QAoh0ApgBQAmAAArB0QAVA6AOA5IgVAgIAUgHQAWgGAHAEQAWAMAOAuQAPAugOATQgGAJggADQgHgagHgEQgQgGgtAaQgxAcgOAAQgNAAgugcg");
	this.shape.setTransform(38.4,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7C/QgjgbgRAEQgGACgJASIgIASQg2gRgGgJQgPgVAPgyQAQgyAXgOQAIgEAVADIATAEIgagSQAKg8AVg/QArh8A6AAQA4AAAuB7QAXA/AMA7IgbAWIASgFQAUgGAIAFQAYAOAQAzQAQA0gQAVQgGAJg1AQQgDgggHgDQgRgHgjAZQgoAcgcAAQgbAAgmgbgAg2CzQAuAcANAAQAOAAAxgcQAtgaAQAGQAHAEAHAaQAggDAGgJQAOgTgPgvQgOgtgWgMQgHgEgWAGIgUAHIAVggQgOg5gVg6Qgrh0gmAAQgpABgoB0QgUA8gMA4IAUAcIgVgGQgXgFgHAFQgVANgOArQgOAtANATQAGAJAiAEIAJgPQAKgPAGgBIAFgBQASAAAmAXg");
	this.shape_1.setTransform(38.4,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3D3D3").s().p("Al2FAIAAp+ILtAAIAAJ+g");
	this.shape_2.setTransform(37.5,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ag2CwQgsgagRAEQgGACgKAOIgJAPQgigEgGgJQgNgTAOgsQAOgsAVgNQAHgFAXAFIAVAGIgUgcQAMg4AUg8QAoh0ApgBQAmAAArB0QAVA6AOA5IgVAgIAUgHQAWgGAHAEQAWAMAOAuQAPAugOATQgGAJggADQgHgagHgEQgQgGgtAaQgxAcgOAAQgNAAgugcg");
	this.shape_3.setTransform(37.9,29.7,1.092,1.092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:38.4,y:31.9}},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1.092,scaleY:1.092,x:37.9,y:29.4}},{t:this.shape_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_celana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("AiHBUQgEi0AGhEQADgnAGgfIAGgXIB2AEQAoAABPgEIAGAXQAGAfADAnQAGBEgEC0IgECtQgJABhlgDIgBimQgBgogDgqQgCgogDgJQgBgHgEglIgDgjIgHAAQgFBDgDAMQgDAJgCApIgEBRIgBCnIhuACg");
	this.shape.setTransform(39.7,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al1E/IAAp+ILrAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AiHBUQgEi0AGhEQADgnAGgfIAGgXIB2AEQAoAABPgEIAGAXQAGAfADAnQAGBEgEC0IgECtQgJABhlgDIgBimQgBgogDgqQgCgogDgJQgBgHgEglIgDgjIgHAAQgFBDgDAMQgDAJgCApIgEBRIgBCnIhuACg");
	this.shape_2.setTransform(39.7,33.2,1.115,1.115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_baju = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("AhnDSQgMAAgHgLQgHgKAAgOIAAiyIgyAdQgIAFgKgCQgKgDgFgKIg1hnQgFgJADgKQAEgKAIgGICIhWIAAgBIAxAAIgBAGQAAAcAUAUQAUAVAcAAQAaAAAUgVQAUgUAAgcIAAgGIBMAAIAAACIB5BVQAIAFABALQABAJgEAKIg6BnQgFAKgHADQgIACgIgFIgpgdIAACyQAAANgQALQgPALgOAAg");
	this.shape.setTransform(39,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("Al1E/IAAp+ILrAAIAAJ+g");
	this.shape_1.setTransform(37.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhnDSQgMAAgHgLQgHgKAAgOIAAiyIgyAdQgIAFgKgCQgKgDgFgKIg1hnQgFgJADgKQAEgKAIgGICIhWIAAgBIAxAAIgBAGQAAAcAUAUQAUAVAcAAQAaAAAUgVQAUgUAAgcIAAgGIBMAAIAAACIB5BVQAIAFABALQABAJgEAKIg6BnQgFAKgHADQgIACgIgFIgpgdIAACyQAAANgQALQgPALgOAAg");
	this.shape_2.setTransform(39,31,1.148,1.148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_alis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("klikButtonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3735").s().p("ABsANQgWgRgcgJQgxgQg0AcQgVAKgZAFQgTAFgEgCIgKgDQgFgDgCgJQgCgJAQgGQALgFBegQQA0gKAqAfQAWANAYAmQgIgNgOgMg");
	this.shape.setTransform(53.1,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3735").s().p("AhUgMQArgeAzAKQBcAQANAFQAQAHgCAJQgCAIgFAEIgKADQgFABgTgEQgZgGgUgLQg2gcgvARQgrAMgbAiQAcgjAQgMg");
	this.shape_1.setTransform(20.5,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILtAAIAAJ+g");
	this.shape_2.setTransform(37.5,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ABsANQgWgRgcgJQgxgQg0AcQgVAKgZAFQgTAFgEgCIgKgDQgFgDgCgJQgCgJAQgGQALgFBegQQA0gKAqAfQAWANAYAmQgIgNgOgMg");
	this.shape_3.setTransform(55.4,28.5,1.137,1.137);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhUgMQArgeAzAKQBcAQANAFQAQAHgCAJQgCAIgFAEIgKADQgFABgTgEQgZgGgUgLQg2gcgvARQgrAMgbAiQAcgjAQgMg");
	this.shape_4.setTransform(18.3,28.2,1.137,1.137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.btn_skin7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D9C7").s().p("AjfC+IAAl7IHAAAIAAF7g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.btn_skin6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1CAB9").s().p("AjfC9IAAl6IHAAAIAAF6g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.btn_skin5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2BCA5").s().p("AjfC9IAAl6IHAAAIAAF6g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.btn_skin4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0B38E").s().p("AjfC+IAAl6IHAAAIAAF6g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.btn_skin3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39574").s().p("AjgC9IAAl6IHBAAIAAF6g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.btn_skin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE8372").s().p("AjgC9IAAl6IHBAAIAAF6g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.btn_skin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C574D").s().p("AjgC9IAAl6IHBAAIAAF6g");
	this.shape.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.mc_panelTopi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.cl = [];
		var i;
		var posTopiX = 542;
		var	posTopiY = 1;
		var butman = []; 
		  
		namaTopi="";
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_cl1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("hat1"));
			imgMc1.x = posTopiX;
			imgMc1.y = posTopiY;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaTopi="hat01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("hat2"));
			imgMc2.x = posTopiX;
			imgMc2.y = posTopiY;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
			namaTopi="hat02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("hat3"));
			imgMc3.x = posTopiX;
			imgMc3.y = posTopiY;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaTopi="hat03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("hat4"));
			imgMc4.x = posTopiX;
			imgMc4.y = posTopiY;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaTopi="hat04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("hat5"));
			imgMc5.x = posTopiX;
			imgMc5.y = posTopiY;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaTopi="hat05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_cl6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("hat6"));
			imgMc6.x = posTopiX;
			imgMc6.y = posTopiY;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaTopi="hat06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("hat7"));
			imgMc7.x = posTopiX;
			imgMc7.y = posTopiY;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaTopi="hat07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("hat8"));
			imgMc8.x = posTopiX;
			imgMc8.y = posTopiY;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaTopi="hat08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("hat9"));
			imgMc9.x = posTopiX;
			imgMc9.y = posTopiY;
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaTopi="hat09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("hat10"));
			imgMc10.x = posTopiX;
			imgMc10.y = posTopiY;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaTopi="hat10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});  
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "hat" + i,
				src: "images/topi/hat" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.cl[i] = this["mc_cl" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("hat" + i));
				bp.x = 3;
				bp.y = -5;
				bp.scaleX = bp.scaleY = 0.2;
				_root.cl[i].addChild(bp);
				_root.cl[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mc_cl15 = new lib.mc_cloth();
	this.mc_cl15.setTransform(190.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl14 = new lib.mc_cloth();
	this.mc_cl14.setTransform(116.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl13 = new lib.mc_cloth();
	this.mc_cl13.setTransform(42.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl12 = new lib.mc_cloth();
	this.mc_cl12.setTransform(190.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl11 = new lib.mc_cloth();
	this.mc_cl11.setTransform(116.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl10 = new lib.mc_cloth();
	this.mc_cl10.setTransform(42.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl9 = new lib.mc_cloth();
	this.mc_cl9.setTransform(190.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl8 = new lib.mc_cloth();
	this.mc_cl8.setTransform(116.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl7 = new lib.mc_cloth();
	this.mc_cl7.setTransform(42.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl6 = new lib.mc_cloth();
	this.mc_cl6.setTransform(190.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl5 = new lib.mc_cloth();
	this.mc_cl5.setTransform(116.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl4 = new lib.mc_cloth();
	this.mc_cl4.setTransform(42.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl3 = new lib.mc_cloth();
	this.mc_cl3.setTransform(190.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl2 = new lib.mc_cloth();
	this.mc_cl2.setTransform(116.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl1 = new lib.mc_cloth();
	this.mc_cl1.setTransform(42.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_cl1},{t:this.mc_cl2},{t:this.mc_cl3},{t:this.mc_cl4},{t:this.mc_cl5},{t:this.mc_cl6},{t:this.mc_cl7},{t:this.mc_cl8},{t:this.mc_cl9},{t:this.mc_cl10},{t:this.mc_cl11},{t:this.mc_cl12},{t:this.mc_cl13},{t:this.mc_cl14},{t:this.mc_cl15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,217,344);


(lib.mc_panelSepatu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.cl = [];
		var i;
		var posSepX = 587;
		var	posSepY = 319;
		var butman = []; 
		namaSepatu="";
		
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_cl1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("sh1"));
			imgMc1.x = posSepX;
			imgMc1.y = posSepY;
			imgMc1.scaleX = imgMc1.scaleY = 0.24;
			imgCtx1.addChild(imgMc1);
			namaSepatu="sh01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("sh2"));
			imgMc2.x = posSepX;
			imgMc2.y = posSepY;
			imgMc2.scaleX = imgMc2.scaleY = 0.24;
			imgCtx2.addChild(imgMc2);
			namaSepatu="sh02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("sh3"));
			imgMc3.x = posSepX;
			imgMc3.y = posSepY;
			imgMc3.scaleX = imgMc3.scaleY = 0.24;
			imgCtx3.addChild(imgMc3);
			namaSepatu="sh03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("sh4"));
			imgMc4.x = posSepX;
			imgMc4.y = posSepY;
			imgMc4.scaleX = imgMc4.scaleY = 0.24;
			imgCtx4.addChild(imgMc4);
			namaSepatu="sh04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("sh5"));
			imgMc5.x = posSepX;
			imgMc5.y = posSepY;
			imgMc5.scaleX = imgMc5.scaleY = 0.24;
			imgCtx5.addChild(imgMc5);
			namaSepatu="sh05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_cl6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("sh6"));
			imgMc6.x = posSepX;
			imgMc6.y = posSepY;
			imgMc6.scaleX = imgMc6.scaleY = 0.24;
			imgCtx6.addChild(imgMc6);
			namaSepatu="sh06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("sh7"));
			imgMc7.x = posSepX;
			imgMc7.y = posSepY;
			imgMc7.scaleX = imgMc7.scaleY = 0.24;
			imgCtx7.addChild(imgMc7);
			namaSepatu="sh07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("sh8"));
			imgMc8.x = posSepX;
			imgMc8.y = posSepY;
			imgMc8.scaleX = imgMc8.scaleY = 0.24;
			imgCtx8.addChild(imgMc8);
			namaSepatu="sh08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("sh9"));
			imgMc9.x = posSepX;
			imgMc9.y = posSepY;
			imgMc9.scaleX = imgMc9.scaleY = 0.24;
			imgCtx9.addChild(imgMc9);
			namaSepatu="sh09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("sh10"));
			imgMc10.x = posSepX;
			imgMc10.y = posSepY;
			imgMc10.scaleX = imgMc10.scaleY = 0.24;
			imgCtx10.addChild(imgMc10);
			namaSepatu="sh10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "sh" + i,
				src: "images/sepatu/sh" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.cl[i] = this["mc_cl" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("sh" + i));
				bp.x = 0;
				bp.y = 64 / 3;
				bp.scaleX = bp.scaleY = 0.23;
				_root.cl[i].addChild(bp);
				_root.cl[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mc_cl15 = new lib.mc_cloth();
	this.mc_cl15.setTransform(190.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl14 = new lib.mc_cloth();
	this.mc_cl14.setTransform(116.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl13 = new lib.mc_cloth();
	this.mc_cl13.setTransform(42.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl12 = new lib.mc_cloth();
	this.mc_cl12.setTransform(190.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl11 = new lib.mc_cloth();
	this.mc_cl11.setTransform(116.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl10 = new lib.mc_cloth();
	this.mc_cl10.setTransform(42.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl9 = new lib.mc_cloth();
	this.mc_cl9.setTransform(190.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl8 = new lib.mc_cloth();
	this.mc_cl8.setTransform(116.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl7 = new lib.mc_cloth();
	this.mc_cl7.setTransform(42.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl6 = new lib.mc_cloth();
	this.mc_cl6.setTransform(190.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl5 = new lib.mc_cloth();
	this.mc_cl5.setTransform(116.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl4 = new lib.mc_cloth();
	this.mc_cl4.setTransform(42.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl3 = new lib.mc_cloth();
	this.mc_cl3.setTransform(190.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl2 = new lib.mc_cloth();
	this.mc_cl2.setTransform(116.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl1 = new lib.mc_cloth();
	this.mc_cl1.setTransform(42.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_cl1},{t:this.mc_cl2},{t:this.mc_cl3},{t:this.mc_cl4},{t:this.mc_cl5},{t:this.mc_cl6},{t:this.mc_cl7},{t:this.mc_cl8},{t:this.mc_cl9},{t:this.mc_cl10},{t:this.mc_cl11},{t:this.mc_cl12},{t:this.mc_cl13},{t:this.mc_cl14},{t:this.mc_cl15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,217,344);


(lib.mc_panelKacamata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.cl = [];
		var i;
		var posKacaX = 550;
		var posKacaY = 110;
		var butman = []; 
		
		namaKacamata="";
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_cl1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("eyg1"));
			imgMc1.x = posKacaX;
			imgMc1.y = posKacaY;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaKacamata="eyg01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("eyg2"));
			imgMc2.x = posKacaX;
			imgMc2.y = posKacaY;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
			namaKacamata="eyg02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("eyg3"));
			imgMc3.x = posKacaX;
			imgMc3.y = posKacaY;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaKacamata="eyg03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("eyg4"));
			imgMc4.x = posKacaX;
			imgMc4.y = posKacaY;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaKacamata="eyg04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("eyg5"));
			imgMc5.x = posKacaX;
			imgMc5.y = posKacaY;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaKacamata="eyg05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_cl6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("eyg6"));
			imgMc6.x = posKacaX;
			imgMc6.y = posKacaY;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaKacamata="eyg06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("eyg7"));
			imgMc7.x = posKacaX;
			imgMc7.y = posKacaY;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaKacamata="eyg07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("eyg8"));
			imgMc8.x = posKacaX;
			imgMc8.y = posKacaY;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaKacamata="eyg08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("eyg9"));
			imgMc9.x = posKacaX;
			imgMc9.y = posKacaY;
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaKacamata="eyg09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("eyg10"));
			imgMc10.x = posKacaX;
			imgMc10.y = posKacaY;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaKacamata="eyg10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});  
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "eyg" + i,
				src: "images/kacamata/eyg" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.cl[i] = this["mc_cl" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("eyg" + i));
				bp.x = 0;
				bp.y = 64 / 6;
				bp.scaleX = bp.scaleY = 0.23;
				_root.cl[i].addChild(bp);
				_root.cl[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mc_cl15 = new lib.mc_cloth();
	this.mc_cl15.setTransform(190.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl14 = new lib.mc_cloth();
	this.mc_cl14.setTransform(116.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl13 = new lib.mc_cloth();
	this.mc_cl13.setTransform(42.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl12 = new lib.mc_cloth();
	this.mc_cl12.setTransform(190.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl11 = new lib.mc_cloth();
	this.mc_cl11.setTransform(116.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl10 = new lib.mc_cloth();
	this.mc_cl10.setTransform(42.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl9 = new lib.mc_cloth();
	this.mc_cl9.setTransform(190.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl8 = new lib.mc_cloth();
	this.mc_cl8.setTransform(116.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl7 = new lib.mc_cloth();
	this.mc_cl7.setTransform(42.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl6 = new lib.mc_cloth();
	this.mc_cl6.setTransform(190.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl5 = new lib.mc_cloth();
	this.mc_cl5.setTransform(116.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl4 = new lib.mc_cloth();
	this.mc_cl4.setTransform(42.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl3 = new lib.mc_cloth();
	this.mc_cl3.setTransform(190.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl2 = new lib.mc_cloth();
	this.mc_cl2.setTransform(116.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl1 = new lib.mc_cloth();
	this.mc_cl1.setTransform(42.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_cl1},{t:this.mc_cl2},{t:this.mc_cl3},{t:this.mc_cl4},{t:this.mc_cl5},{t:this.mc_cl6},{t:this.mc_cl7},{t:this.mc_cl8},{t:this.mc_cl9},{t:this.mc_cl10},{t:this.mc_cl11},{t:this.mc_cl12},{t:this.mc_cl13},{t:this.mc_cl14},{t:this.mc_cl15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,217,344);


(lib.mc_panelCelana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.cl = [];
		var i;
		var posCelanaX = 588;
		var	posCelanaY = 283;
		var butman = []; 
		namaCelana="";
		
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_cl1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("pn1"));
			imgMc1.x = posCelanaX;
			imgMc1.y = posCelanaY;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaCelana="pn01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("pn2"));
			imgMc2.x = posCelanaX;
			imgMc2.y = posCelanaY;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
			namaCelana="pn02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("pn3"));
			imgMc3.x = posCelanaX;
			imgMc3.y = posCelanaY;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaCelana="pn03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("pn4"));
			imgMc4.x = posCelanaX;
			imgMc4.y = posCelanaY;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaCelana="pn04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("pn5"));
			imgMc5.x = posCelanaX;
			imgMc5.y = posCelanaY;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaCelana="pn05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_cl6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("pn6"));
			imgMc6.x = posCelanaX;
			imgMc6.y = posCelanaY;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaCelana="pn06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("pn7"));
			imgMc7.x = posCelanaX;
			imgMc7.y = posCelanaY;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaCelana="pn07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("pn8"));
			imgMc8.x = posCelanaX;
			imgMc8.y = posCelanaY;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaCelana="pn08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("pn9"));
			imgMc9.x = posCelanaX;
			imgMc9.y = posCelanaY
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaCelana="pn09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("pn10"));
			imgMc10.x = posCelanaX;
			imgMc10.y = posCelanaY;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaCelana="pn10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "pn" + i,
				src: "images/celana/pn" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.cl[i] = this["mc_cl" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("pn" + i));
				bp.x = 5;
				bp.y = 64 / 4;
				bp.scaleX = bp.scaleY = 0.4;
				_root.cl[i].addChild(bp);
				_root.cl[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mc_cl15 = new lib.mc_cloth();
	this.mc_cl15.setTransform(190.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl14 = new lib.mc_cloth();
	this.mc_cl14.setTransform(116.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl13 = new lib.mc_cloth();
	this.mc_cl13.setTransform(42.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl12 = new lib.mc_cloth();
	this.mc_cl12.setTransform(190.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl11 = new lib.mc_cloth();
	this.mc_cl11.setTransform(116.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl10 = new lib.mc_cloth();
	this.mc_cl10.setTransform(42.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl9 = new lib.mc_cloth();
	this.mc_cl9.setTransform(190.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl8 = new lib.mc_cloth();
	this.mc_cl8.setTransform(116.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl7 = new lib.mc_cloth();
	this.mc_cl7.setTransform(42.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl6 = new lib.mc_cloth();
	this.mc_cl6.setTransform(190.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl5 = new lib.mc_cloth();
	this.mc_cl5.setTransform(116.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl4 = new lib.mc_cloth();
	this.mc_cl4.setTransform(42.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl3 = new lib.mc_cloth();
	this.mc_cl3.setTransform(190.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl2 = new lib.mc_cloth();
	this.mc_cl2.setTransform(116.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl1 = new lib.mc_cloth();
	this.mc_cl1.setTransform(42.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_cl1},{t:this.mc_cl2},{t:this.mc_cl3},{t:this.mc_cl4},{t:this.mc_cl5},{t:this.mc_cl6},{t:this.mc_cl7},{t:this.mc_cl8},{t:this.mc_cl9},{t:this.mc_cl10},{t:this.mc_cl11},{t:this.mc_cl12},{t:this.mc_cl13},{t:this.mc_cl14},{t:this.mc_cl15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,217,344);


(lib.mc_panelBaju = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.cl = [];
		var i;
		var posBajuX= 560;
		var posBajuY= 226;
		var butman = []; 
		namaBaju="";
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_cl1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("cl1"));
			imgMc1.x = posBajuX;
			imgMc1.y = posBajuY;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaBaju="cl01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("cl2"));
			imgMc2.x = posBajuX;
			imgMc2.y = posBajuY;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
			namaBaju="cl02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("cl3"));
			imgMc3.x = posBajuX;
			imgMc3.y = posBajuY;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaBaju="cl03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("cl4"));
			imgMc4.x = posBajuX;
			imgMc4.y = posBajuY;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaBaju="cl04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("cl5"));
			imgMc5.x = posBajuX;
			imgMc5.y = posBajuY;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaBaju="cl05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_cl6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("cl6"));
			imgMc6.x = posBajuX;
			imgMc6.y = posBajuY;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaBaju="cl06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_cl7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("cl7"));
			imgMc7.x = posBajuX;
			imgMc7.y = posBajuY;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaBaju="cl07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("cl8"));
			imgMc8.x = posBajuX;
			imgMc8.y = posBajuY;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaBaju="cl08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("cl9"));
			imgMc9.x = posBajuX;
			imgMc9.y = posBajuY;
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaBaju="cl09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_cl10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("cl10"));
			imgMc10.x = posBajuX;
			imgMc10.y = posBajuY;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaBaju="cl10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "cl" + i,
				src: "images/baju/cl" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.cl[i] = this["mc_cl" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("cl" + i));
				bp.x = 0;
				bp.y = 64 / 3;
				bp.scaleX = bp.scaleY = 0.25;
				_root.cl[i].addChild(bp);
				_root.cl[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mc_cl15 = new lib.mc_cloth();
	this.mc_cl15.setTransform(190.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl14 = new lib.mc_cloth();
	this.mc_cl14.setTransform(116.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl13 = new lib.mc_cloth();
	this.mc_cl13.setTransform(42.5,316,1,1,0,0,0,34.5,32);

	this.mc_cl12 = new lib.mc_cloth();
	this.mc_cl12.setTransform(190.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl11 = new lib.mc_cloth();
	this.mc_cl11.setTransform(116.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl10 = new lib.mc_cloth();
	this.mc_cl10.setTransform(42.5,246,1,1,0,0,0,34.5,32);

	this.mc_cl9 = new lib.mc_cloth();
	this.mc_cl9.setTransform(190.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl8 = new lib.mc_cloth();
	this.mc_cl8.setTransform(116.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl7 = new lib.mc_cloth();
	this.mc_cl7.setTransform(42.5,176,1,1,0,0,0,34.5,32);

	this.mc_cl6 = new lib.mc_cloth();
	this.mc_cl6.setTransform(190.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl5 = new lib.mc_cloth();
	this.mc_cl5.setTransform(116.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl4 = new lib.mc_cloth();
	this.mc_cl4.setTransform(42.5,106,1,1,0,0,0,34.5,32);

	this.mc_cl3 = new lib.mc_cloth();
	this.mc_cl3.setTransform(190.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl2 = new lib.mc_cloth();
	this.mc_cl2.setTransform(116.5,36,1,1,0,0,0,34.5,32);

	this.mc_cl1 = new lib.mc_cloth();
	this.mc_cl1.setTransform(42.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_cl1},{t:this.mc_cl2},{t:this.mc_cl3},{t:this.mc_cl4},{t:this.mc_cl5},{t:this.mc_cl6},{t:this.mc_cl7},{t:this.mc_cl8},{t:this.mc_cl9},{t:this.mc_cl10},{t:this.mc_cl11},{t:this.mc_cl12},{t:this.mc_cl13},{t:this.mc_cl14},{t:this.mc_cl15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,217,344);


(lib.mc_panelRambut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.h = [];
		var i;
		var butman = [];
		namaRambut= "";
		var ClickCount = 0;
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_h1.on("click", function () {
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("h1"));
			imgMc1.x = 550,25;
			imgMc1.y = 108,85;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaRambut= "h01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h2.on("click", function () {
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("h2"));
			imgMc2.x = 550,25;
			imgMc2.y = 108,85;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
			namaRambut= "h02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("h3"));
			imgMc3.x = 550,25;
			imgMc3.y = 80;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaRambut= "h03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("h4"));
			imgMc4.x = 550,25;
			imgMc4.y = 108,85;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaRambut= "h04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("h5"));
			imgMc5.x = 550,25;
			imgMc5.y = 108,85;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaRambut= "h05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_h6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("h6"));
			imgMc6.x = 550,25;
			imgMc6.y = 108,85;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaRambut= "h06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("h7"));
			imgMc7.x = 550,25;
			imgMc7.y = 75;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaRambut= "h07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("h8"));
			imgMc8.x = 550,25;
			imgMc8.y = 108,85;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaRambut= "h08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("h9"));
			imgMc9.x = 550,25;
			imgMc9.y = 108,85;
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaRambut= "h09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("h10"));
			imgMc10.x = 550,25;
			imgMc10.y = 108,85;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaRambut= "h10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "h" + i,
				src: "images/rambut/h" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.h[i] = this["mc_h" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("h" + i));
				bp.x = 0;
				bp.y = 64 / 3;
				bp.scaleX = bp.scaleY = 0.23;
				_root.h[i].addChild(bp);
				_root.h[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hair
	this.mc_h10 = new lib.mc_loadImage();
	this.mc_h10.setTransform(114.5,316,1,1,0,0,0,34.5,32);

	this.mc_h9 = new lib.mc_loadImage();
	this.mc_h9.setTransform(40.5,316,1,1,0,0,0,34.5,32);

	this.mc_h8 = new lib.mc_loadImage();
	this.mc_h8.setTransform(114.5,245,1,1,0,0,0,34.5,32);

	this.mc_h7 = new lib.mc_loadImage();
	this.mc_h7.setTransform(40.5,245,1,1,0,0,0,34.5,32);

	this.mc_h6 = new lib.mc_loadImage();
	this.mc_h6.setTransform(114.5,176,1,1,0,0,0,34.5,32);

	this.mc_h5 = new lib.mc_loadImage();
	this.mc_h5.setTransform(40.5,176,1,1,0,0,0,34.5,32);

	this.mc_h4 = new lib.mc_loadImage();
	this.mc_h4.setTransform(114.5,106,1,1,0,0,0,34.5,32);

	this.mc_h3 = new lib.mc_loadImage();
	this.mc_h3.setTransform(40.5,106,1,1,0,0,0,34.5,32);

	this.mc_h2 = new lib.mc_loadImage();
	this.mc_h2.setTransform(114.5,36,1,1,0,0,0,34.5,32);

	this.mc_h1 = new lib.mc_loadImage();
	this.mc_h1.setTransform(40.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_h1},{t:this.mc_h2},{t:this.mc_h3},{t:this.mc_h4},{t:this.mc_h5},{t:this.mc_h6},{t:this.mc_h7},{t:this.mc_h8},{t:this.mc_h9},{t:this.mc_h10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,143,344);


(lib.mc_panelMulut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.h = [];
		var i;
		var posMulutX = 575;
		var posMulutY = 197;
		var butman = []; 
		namaMulut="";
		
		var ClickCount = 0;
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_h1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("m1"));
			imgMc1.x = posMulutX;
			imgMc1.y = posMulutY;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaMulut="m01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("m2"));
			imgMc2.x = posMulutX;
			imgMc2.y = posMulutY;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
		namaMulut="m02";	
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("m3"));
			imgMc3.x = posMulutX;
			imgMc3.y = posMulutY;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaMulut="m03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("m4"));
			imgMc4.x = posMulutX;
			imgMc4.y = posMulutY;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaMulut="m04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("m5"));
			imgMc5.x = posMulutX;
			imgMc5.y = posMulutY;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaMulut="m05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_h6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("m6"));
			imgMc6.x = posMulutX;
			imgMc6.y = posMulutY;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaMulut="m06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("m7"));
			imgMc7.x = posMulutX;
			imgMc7.y = posMulutY;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaMulut="m07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("m8"));
			imgMc8.x = posMulutX;
			imgMc8.y = posMulutY;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaMulut="m08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("m9"));
			imgMc9.x = posMulutX;
			imgMc9.y = posMulutY;
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaMulut="m09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("m10"));
			imgMc10.x = posMulutX;
			imgMc10.y = posMulutY;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaMulut="m10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "m" + i,
				src: "images/mulut/m" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.h[i] = this["mc_h" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("m" + i));
				bp.x = -30;
				bp.y = 64 / 3;
				bp.scaleX = bp.scaleY = 0.65;
				_root.h[i].addChild(bp);
				_root.h[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hair
	this.mc_h10 = new lib.mc_loadImage();
	this.mc_h10.setTransform(114.5,316,1,1,0,0,0,34.5,32);

	this.mc_h9 = new lib.mc_loadImage();
	this.mc_h9.setTransform(40.5,316,1,1,0,0,0,34.5,32);

	this.mc_h8 = new lib.mc_loadImage();
	this.mc_h8.setTransform(114.5,245,1,1,0,0,0,34.5,32);

	this.mc_h7 = new lib.mc_loadImage();
	this.mc_h7.setTransform(40.5,245,1,1,0,0,0,34.5,32);

	this.mc_h6 = new lib.mc_loadImage();
	this.mc_h6.setTransform(114.5,176,1,1,0,0,0,34.5,32);

	this.mc_h5 = new lib.mc_loadImage();
	this.mc_h5.setTransform(40.5,176,1,1,0,0,0,34.5,32);

	this.mc_h4 = new lib.mc_loadImage();
	this.mc_h4.setTransform(114.5,106,1,1,0,0,0,34.5,32);

	this.mc_h3 = new lib.mc_loadImage();
	this.mc_h3.setTransform(40.5,106,1,1,0,0,0,34.5,32);

	this.mc_h2 = new lib.mc_loadImage();
	this.mc_h2.setTransform(114.5,36,1,1,0,0,0,34.5,32);

	this.mc_h1 = new lib.mc_loadImage();
	this.mc_h1.setTransform(40.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_h1},{t:this.mc_h2},{t:this.mc_h3},{t:this.mc_h4},{t:this.mc_h5},{t:this.mc_h6},{t:this.mc_h7},{t:this.mc_h8},{t:this.mc_h9},{t:this.mc_h10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,143,344);


(lib.mc_panelMata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.h = [];
		var i;
		var posMataX = 560;
		var posMataY = 150;
		var butman = []; 
		namaMata="";
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_h1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("e1"));
			imgMc1.x = posMataX;
			imgMc1.y = posMataY;
			imgMc1.scaleX = imgMc1.scaleY = 0.48;
			imgCtx1.addChild(imgMc1);
			namaMata="e01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h2.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("e2"));
			imgMc2.x = posMataX;
			imgMc2.y = posMataY;
			imgMc2.scaleX = imgMc2.scaleY = 0.48;
			imgCtx2.addChild(imgMc2);
			namaMata="e02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("e3"));
			imgMc3.x = posMataX;
			imgMc3.y = posMataY;
			imgMc3.scaleX = imgMc3.scaleY = 0.48;
			imgCtx3.addChild(imgMc3);
			namaMata="e03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("e4"));
			imgMc4.x = posMataX;
			imgMc4.y = posMataY;
			imgMc4.scaleX = imgMc4.scaleY = 0.48;
			imgCtx4.addChild(imgMc4);
			namaMata="e04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("e5"));
			imgMc5.x = posMataX;
			imgMc5.y = posMataY;
			imgMc5.scaleX = imgMc5.scaleY = 0.48;
			imgCtx5.addChild(imgMc5);
			namaMata="e05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_h6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("e6"));
			imgMc6.x = posMataX;
			imgMc6.y = posMataY;
			imgMc6.scaleX = imgMc6.scaleY = 0.48;
			imgCtx6.addChild(imgMc6);
			namaMata="e06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("e7"));
			imgMc7.x = posMataX;
			imgMc7.y = posMataY;
			imgMc7.scaleX = imgMc7.scaleY = 0.48;
			imgCtx7.addChild(imgMc7);
			namaMata="e07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("e8"));
			imgMc8.x = posMataX;
			imgMc8.y = posMataY;
			imgMc8.scaleX = imgMc8.scaleY = 0.48;
			imgCtx8.addChild(imgMc8);
			namaMata="e08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("e9"));
			imgMc9.x = posMataX;
			imgMc9.y = posMataY;
			imgMc9.scaleX = imgMc9.scaleY = 0.48;
			imgCtx9.addChild(imgMc9);
			namaMata="e09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("e10"));
			imgMc10.x = posMataX;
			imgMc10.y = posMataY;
			imgMc10.scaleX = imgMc10.scaleY = 0.48;
			imgCtx10.addChild(imgMc10);
			namaMata="e10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "e" + i,
				src: "images/mata/e" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.h[i] = this["mc_h" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("e" + i));
				bp.x = 0;
				bp.y = 64 / 3;
				bp.scaleX = bp.scaleY = 0.26;
				_root.h[i].addChild(bp);
				_root.h[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hair
	this.mc_h10 = new lib.mc_loadImage();
	this.mc_h10.setTransform(114.5,316,1,1,0,0,0,34.5,32);

	this.mc_h9 = new lib.mc_loadImage();
	this.mc_h9.setTransform(40.5,316,1,1,0,0,0,34.5,32);

	this.mc_h8 = new lib.mc_loadImage();
	this.mc_h8.setTransform(114.5,245,1,1,0,0,0,34.5,32);

	this.mc_h7 = new lib.mc_loadImage();
	this.mc_h7.setTransform(40.5,245,1,1,0,0,0,34.5,32);

	this.mc_h6 = new lib.mc_loadImage();
	this.mc_h6.setTransform(114.5,176,1,1,0,0,0,34.5,32);

	this.mc_h5 = new lib.mc_loadImage();
	this.mc_h5.setTransform(40.5,176,1,1,0,0,0,34.5,32);

	this.mc_h4 = new lib.mc_loadImage();
	this.mc_h4.setTransform(114.5,106,1,1,0,0,0,34.5,32);

	this.mc_h3 = new lib.mc_loadImage();
	this.mc_h3.setTransform(40.5,106,1,1,0,0,0,34.5,32);

	this.mc_h2 = new lib.mc_loadImage();
	this.mc_h2.setTransform(114.5,36,1,1,0,0,0,34.5,32);

	this.mc_h1 = new lib.mc_loadImage();
	this.mc_h1.setTransform(40.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_h1},{t:this.mc_h2},{t:this.mc_h3},{t:this.mc_h4},{t:this.mc_h5},{t:this.mc_h6},{t:this.mc_h7},{t:this.mc_h8},{t:this.mc_h9},{t:this.mc_h10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,143,344);


(lib.mc_panelHidung = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.h = [];
		var i;
		var posHidungX = 609;
		var	posHidungY = 160;
		var butman = []; 
		namaHidung="";
		
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var ClickCount = 0;
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_h1.on("click", function () {
			++ClickCount;
			console.log ("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("n1"));
			imgMc1.x = posHidungX;
			imgMc1.y = posHidungY;
			imgMc1.scaleX = imgMc1.scaleY = 0.28;
			imgCtx1.addChild(imgMc1);
			namaHidung = "n01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h2.on("click", function () {
			console.log ("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("n2"));
			imgMc2.x = posHidungX;
			imgMc2.y = posHidungY;
			imgMc2.scaleX = imgMc2.scaleY = 0.28;
			imgCtx2.addChild(imgMc2);
			namaHidung = "n02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("n3"));
			imgMc3.x = posHidungX;
			imgMc3.y = posHidungY;
			imgMc3.scaleX = imgMc3.scaleY = 0.28;
			imgCtx3.addChild(imgMc3);
			namaHidung = "n03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h4.on("click", function(){
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("n4"));
			imgMc4.x = posHidungX;
			imgMc4.y = posHidungY;
			imgMc4.scaleX = imgMc4.scaleY = 0.28;
			imgCtx4.addChild(imgMc4);
			namaHidung = "n04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h5.on("click", function(){
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("n5"));
			imgMc5.x = posHidungX;
			imgMc5.y = posHidungY;
			imgMc5.scaleX = imgMc5.scaleY = 0.28;
			imgCtx5.addChild(imgMc5);
			namaHidung = "n05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_h6.on("click", function(){
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("n6"));
			imgMc6.x = posHidungX;
			imgMc6.y = posHidungY;
			imgMc6.scaleX = imgMc6.scaleY = 0.28;
			imgCtx6.addChild(imgMc6);
			namaHidung = "n06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
			});
		_root.mc_h7.on("click", function(){
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("n7"));
			imgMc7.x = posHidungX;
			imgMc7.y = posHidungY;
			imgMc7.scaleX = imgMc7.scaleY = 0.28;
			imgCtx7.addChild(imgMc7);
			namaHidung = "n07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h8.on("click", function(){
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("n8"));
			imgMc8.x = posHidungX;
			imgMc8.y = posHidungY;
			imgMc8.scaleX = imgMc8.scaleY = 0.28;
			imgCtx8.addChild(imgMc8);
			namaHidung = "n08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h9.on("click", function(){
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("n9"));
			imgMc9.x = posHidungX;
			imgMc9.y = posHidungY;
			imgMc9.scaleX = imgMc9.scaleY = 0.28;
			imgCtx9.addChild(imgMc9);
			namaHidung = "n09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h10.on("click", function(){
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("n10"));
			imgMc10.x = posHidungX;
			imgMc10.y = posHidungY;
			imgMc10.scaleX = imgMc10.scaleY = 0.28;
			imgCtx10.addChild(imgMc10);
			namaHidung = "n10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "n" + i,
				src: "images/hidung/n" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.h[i] = this["mc_h" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("n" + i));
				bp.x = 10;
				bp.y = 0;
				bp.scaleX = bp.scaleY = 0.4;
				_root.h[i].addChild(bp);
				_root.h[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hair
	this.mc_h10 = new lib.mc_loadImage();
	this.mc_h10.setTransform(114.5,316,1,1,0,0,0,34.5,32);

	this.mc_h9 = new lib.mc_loadImage();
	this.mc_h9.setTransform(40.5,316,1,1,0,0,0,34.5,32);

	this.mc_h8 = new lib.mc_loadImage();
	this.mc_h8.setTransform(114.5,245,1,1,0,0,0,34.5,32);

	this.mc_h7 = new lib.mc_loadImage();
	this.mc_h7.setTransform(40.5,245,1,1,0,0,0,34.5,32);

	this.mc_h6 = new lib.mc_loadImage();
	this.mc_h6.setTransform(114.5,176,1,1,0,0,0,34.5,32);

	this.mc_h5 = new lib.mc_loadImage();
	this.mc_h5.setTransform(40.5,176,1,1,0,0,0,34.5,32);

	this.mc_h4 = new lib.mc_loadImage();
	this.mc_h4.setTransform(114.5,106,1,1,0,0,0,34.5,32);

	this.mc_h3 = new lib.mc_loadImage();
	this.mc_h3.setTransform(40.5,106,1,1,0,0,0,34.5,32);

	this.mc_h2 = new lib.mc_loadImage();
	this.mc_h2.setTransform(114.5,36,1,1,0,0,0,34.5,32);

	this.mc_h1 = new lib.mc_loadImage();
	this.mc_h1.setTransform(40.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_h1},{t:this.mc_h2},{t:this.mc_h3},{t:this.mc_h4},{t:this.mc_h5},{t:this.mc_h6},{t:this.mc_h7},{t:this.mc_h8},{t:this.mc_h9},{t:this.mc_h10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,143,344);


(lib.mc_panelAlis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 10;
		this.h = [];
		var i;
		var posALisX = 557;
		var posALisY = 130;
		var butman = [];
		namaAlis = "";
		
		var ClickCount = 0;
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2, imgMc3, imgMc4, imgMc5, imgMc6, imgMc7, imgMc8, imgMc9, imgMc10;
		var imgCtx1, imgCtx2, imgCtx3, imgCtx4, imgCtx5, imgCtx6, imgCtx7, imgCtx8, imgCtx9, imgCtx10;
		_root.mc_h1.on("click", function () {
			++ClickCount;
			console.log("ClickCount: " + ClickCount);
			imgCtx1 = new createjs.Container();
			imgContainer.addChild(imgCtx1);
			imgMc1 = new createjs.Bitmap(imgQ.getResult("eb1"));
			imgMc1.x = posALisX;
			imgMc1.y = posALisY;
			imgMc1.scaleX = imgMc1.scaleY = 0.50;
			imgCtx1.addChild(imgMc1);
			namaAlis = "eb01";
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h2.on("click", function () {
			console.log("ClickCount: " + ClickCount);
			imgCtx2 = new createjs.Container();
			imgContainer.addChild(imgCtx2);
			imgMc2 = new createjs.Bitmap(imgQ.getResult("eb2"));
			imgMc2.x = posALisX;
			imgMc2.y = posALisY;
			imgMc2.scaleX = imgMc2.scaleY = 0.50;
			imgCtx2.addChild(imgMc2);
			namaAlis = "eb02";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h3.on("click", function () {
			imgCtx3 = new createjs.Container();
			imgContainer.addChild(imgCtx3);
			imgMc3 = new createjs.Bitmap(imgQ.getResult("eb3"));
			imgMc3.x = posALisX;
			imgMc3.y = posALisY;
			imgMc3.scaleX = imgMc3.scaleY = 0.50;
			imgCtx3.addChild(imgMc3);
			namaAlis = "eb03";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h4.on("click", function () {
			imgCtx4 = new createjs.Container();
			imgContainer.addChild(imgCtx4);
			imgMc4 = new createjs.Bitmap(imgQ.getResult("eb4"));
			imgMc4.x = posALisX;
			imgMc4.y = posALisY;
			imgMc4.scaleX = imgMc4.scaleY = 0.50;
			imgCtx4.addChild(imgMc4);
			namaAlis = "eb04";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h5.on("click", function () {
			imgCtx5 = new createjs.Container();
			imgContainer.addChild(imgCtx5);
			imgMc5 = new createjs.Bitmap(imgQ.getResult("eb5"));
			imgMc5.x = posALisX;
			imgMc5.y = posALisY;
			imgMc5.scaleX = imgMc5.scaleY = 0.50;
			imgCtx5.addChild(imgMc5);
			namaAlis = "eb05";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		
		});
		_root.mc_h6.on("click", function () {
			imgCtx6 = new createjs.Container();
			imgContainer.addChild(imgCtx6);
			imgMc6 = new createjs.Bitmap(imgQ.getResult("eb6"));
			imgMc6.x = posALisX;
			imgMc6.y = posALisY;
			imgMc6.scaleX = imgMc6.scaleY = 0.50;
			imgCtx6.addChild(imgMc6);
			namaAlis = "eb06";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h7.on("click", function () {
			imgCtx7 = new createjs.Container();
			imgContainer.addChild(imgCtx7);
			imgMc7 = new createjs.Bitmap(imgQ.getResult("eb7"));
			imgMc7.x = posALisX;
			imgMc7.y = posALisY;
			imgMc7.scaleX = imgMc7.scaleY = 0.50;
			imgCtx7.addChild(imgMc7);
			namaAlis = "eb07";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h8.on("click", function () {
			imgCtx8 = new createjs.Container();
			imgContainer.addChild(imgCtx8);
			imgMc8 = new createjs.Bitmap(imgQ.getResult("eb8"));
			imgMc8.x = posALisX;
			imgMc8.y = posALisY;
			imgMc8.scaleX = imgMc8.scaleY = 0.50;
			imgCtx8.addChild(imgMc8);
			namaAlis = "eb08";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx9);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h9.on("click", function () {
			imgCtx9 = new createjs.Container();
			imgContainer.addChild(imgCtx9);
			imgMc9 = new createjs.Bitmap(imgQ.getResult("eb9"));
			imgMc9.x = posALisX;
			imgMc9.y = posALisY;
			imgMc9.scaleX = imgMc9.scaleY = 0.50;
			imgCtx9.addChild(imgMc9);
			namaAlis = "eb09";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx10);
		});
		_root.mc_h10.on("click", function () {
			imgCtx10 = new createjs.Container();
			imgContainer.addChild(imgCtx10);
			imgMc10 = new createjs.Bitmap(imgQ.getResult("eb10"));
			imgMc10.x = posALisX;
			imgMc10.y = posALisY;
			imgMc10.scaleX = imgMc10.scaleY = 0.50;
			imgCtx10.addChild(imgMc10);
			namaAlis = "eb10";
			imgContainer.removeChild(imgCtx1);
			imgContainer.removeChild(imgCtx2);
			imgContainer.removeChild(imgCtx3);
			imgContainer.removeChild(imgCtx4);
			imgContainer.removeChild(imgCtx5);
			imgContainer.removeChild(imgCtx6);
			imgContainer.removeChild(imgCtx7);
			imgContainer.removeChild(imgCtx8);
			imgContainer.removeChild(imgCtx9);
		});
		
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "eb" + i,
				src: "images/alis/eb" + (i < 10 ? "0" : "") + i + ".png"
			});
			this.h[i] = this["mc_h" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("eb" + i));
				bp.x = 0;
				bp.y = 64 / 3;
				bp.scaleX = bp.scaleY = 0.26;
				_root.h[i].addChild(bp);
				_root.h[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hair
	this.mc_h10 = new lib.mc_loadImage();
	this.mc_h10.setTransform(114.5,316,1,1,0,0,0,34.5,32);

	this.mc_h9 = new lib.mc_loadImage();
	this.mc_h9.setTransform(40.5,316,1,1,0,0,0,34.5,32);

	this.mc_h8 = new lib.mc_loadImage();
	this.mc_h8.setTransform(114.5,245,1,1,0,0,0,34.5,32);

	this.mc_h7 = new lib.mc_loadImage();
	this.mc_h7.setTransform(40.5,245,1,1,0,0,0,34.5,32);

	this.mc_h6 = new lib.mc_loadImage();
	this.mc_h6.setTransform(114.5,176,1,1,0,0,0,34.5,32);

	this.mc_h5 = new lib.mc_loadImage();
	this.mc_h5.setTransform(40.5,176,1,1,0,0,0,34.5,32);

	this.mc_h4 = new lib.mc_loadImage();
	this.mc_h4.setTransform(114.5,106,1,1,0,0,0,34.5,32);

	this.mc_h3 = new lib.mc_loadImage();
	this.mc_h3.setTransform(40.5,106,1,1,0,0,0,34.5,32);

	this.mc_h2 = new lib.mc_loadImage();
	this.mc_h2.setTransform(114.5,36,1,1,0,0,0,34.5,32);

	this.mc_h1 = new lib.mc_loadImage();
	this.mc_h1.setTransform(40.5,36,1,1,0,0,0,34.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_h1},{t:this.mc_h2},{t:this.mc_h3},{t:this.mc_h4},{t:this.mc_h5},{t:this.mc_h6},{t:this.mc_h7},{t:this.mc_h8},{t:this.mc_h9},{t:this.mc_h10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,143,344);


(lib.mc_character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{skinDefault:0,skin1:1,skin2:2,skin3:3,skin4:4,skin5:5,skin6:6,skin7:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// flash0.ai
	this.instance = new lib.Path();
	this.instance.setTransform(95.4,145.9,1,1,0,0,0,20.9,28.4);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191919").ss(1,0,0,2.6).p("AjXkUQAMAxAhAwQBEBiBvAAQBwAABJhkQAlgyAOgyICEADQgGAWgDAcQgGA3APAcQAuBVAFCyQACBagGBKItQAAQgGhdAEhkQAGjFArgfQAcgUgKg9QgFgegKgag");
	this.shape.setTransform(73.6,145.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3F9F7").s().p("AmoEaQgGhdAEhkQAGjFArgfQAcgUgKg9QgFgegKgaICfAAQAMAxAhAwQBEBiBvAAQBwAABJhkQAlgyAOgyICEADQgGAWgDAcQgGA3APAcQAuBVAFCyQACBagGBKg");
	this.shape_1.setTransform(73.6,145.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6E71").s().p("AAKBiIgCAAIgBgGIAGAAIAAAFIACAAIAAAFIgFAAgAAABmIAAgEIgBAAIABgDIgBAAIABgCIADAAIAAAFIACAAIAAAEgAgIBmIAAgEIgDAAIABgGIAFABIAAAFIACAAIAAAEgAAUBhIgCAAIAAgFIAEgBIABAGIgCAAIADAAIABAEIgFABgAgTBmIABgFIABAAIgEAAIABgGIAFABIAAAFIACAAIAAAFgAgdBlIABgFIAFABIAAAEgAAeBgIAEgBIABAFIgFABgAgnBjIABgEIAGAAIgBAFgAAnBeIAFgBIABAFIgFABgAgwBhIABgFIAFABIgBAFgAAwBcIAGgCIABAFIgFACgAAbBbIAFgBIABAFIgFABgAgeBfIAAgFIAFABIAAAFgAg6BdIACgEIAFABIgCAFgAgoBdIAAgEIAGAAIgCAGgAAlBZIAEgBIACAFIgFABgAA6BZIAFgCIACAEIgGACgAAvBXIAEgBIABAEIgEACgAgyBaIABgEIAFABIgCAFgAhDBZIACgEIAFACIgDAEgABCBUIABAAIgCgEIADgCIAEADIgDACIACgBIADAFIgFACgAg8BXIACgFIAEACIgBAFgAA4BUIAEgCIADAFIgFACgAhMBUIACgEIAFACIgDAFgAhFBSIACgEIAEADIgCAEgABLBQIAEgDIADAEIgEADgAhFBSgAhUBOIADgEIAEADIgDAEgAhNBMIADgEIAEADIgEAFgABJBKIADgCIADADIgEAEgABTBJIADgCIAEADIgEAEgAAIBGIADAAIAAgFIAEAAIAAAFIgCAAIAAAEIgFAAgAgDBKIAAgDIgEgBIAAgFIAFAAIgBAFIAEAAIAAgEIgDAAIAAgEIACAAIAAgGIgBAAIAAAFIgFAAIAAgFIAEAAIAAgEIADAAIAAAAIAAAEIACAAIAAAHIgBAAIAAACIADAAIAAAGIgCAAIAAADgAhcBHIAEgDIADADIgDADgAASBFIADAAIgBgFIAFAAIAAAFIgCAAIAAAEIgEABgAgNBJIAAgDIgFAAIABgGIAFABIgBAEIAGAAIgBAFgAgXBIIABgDIgGAAIABgGIAFABIAAAEIAEAAIAAAFgAAcBEIACgBIAAgEIAFAAIABAFIgDABIAAADIgEAAgAghBHIABgDIgGAAIABgGIAFABIAAADIAEABIAAAFgAhUBEIADgCIgCAAIAAgEIgFAAIgDgCIAEgEIABABIAEAAIAAAEIAFAAIAAAFIgCAAIACADIgEADIgDgEgABPBEIACgCIgEAAIAAgEIADgBIAAgEIAFAAIAAAFIgCAAIAAACIADADIgDAEgAAmBCIACAAIAAgEIAFAAIABAFIgEAAIABAEIgEAAgABaBDIADgEIADADIgDAFgAgrBGIABgDIgGgBIAAADIgFAAIABgEIgGAAIAAADIgFAAIAAgEIgEgBIAAgEIAGABIgBACIAFABIAAgDIAGABIgBACIAFABIAAgCIAFAAIAAADIAEAAIAAAGgAAwBAIACAAIAAgDIAFAAIABAEIgEABIABADIgFABgAA6A/IACAAIAAgDIAFgBIABAFIgDAAIAAAEIgFAAgABDA+IADAAIgBgDIAGgBIAAAFIgCAAIAAADIgFABgAhJBCIAAgDIgEgBIABgFIAEABIAAAEIAFAAIAAAFgAhiA+IAEgCIADADIgEAEgABfA8IAEgFIAEADIgDAEgAASA5IgCAAIAAgFIAFAAIAAADIABAAIAAAGIgEAAgAAHA9IAAgEIgBAAIAAgFIAFAAIAAAEIACAAIAAAFgAgQA9IABgFIADAAIAAgEIAFAAIAAAFIgEAAIAAAEgAAcA4IgCAAIAAgEIAFgBIAAAEIABAAIABAFIgFABgAgaA9IABgGIADAAIAAgDIAFAAIAAAFIgEgBIAAAFgABXA4QABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIAEADIgEAEgAAmA3IgBAAIgBgEIAEgBIABAEIABAAIABAGIgFAAgAgkA8IAAgFIAEAAIABgEIAEABIAAAEIgDAAIgBAEgAguA7IAAgFIAEAAIABgEIgEACIgCgFIAEgCIADADIgBACIAEABIAAAEIgDAAIgBAFgAAwA2IgBAAIgBgCIgDgCIADgEIADACIAAABIABgBIABAGIABAAIABAFIgFAAgAg4A6IAAgFIAFABIAAgGIAAACIABgCIADABIAAAFIgDAAIgBAFgAhoA2IAEgCIADAEIgEADgAA5A1IAFgBIABAFIgFABgAhCA4IABgEIAFAAIgBAFgABDAzIAFAAIABAEIgFABgAhMA2IABgEIgBgBIAAgFIAFABIgBAFIACABIgBAEgAhgAzIAEgCIgDgCIACgEIgDgCIADgEIAEACIgCAFIADABIgDAFIgBgBIACAEIgEACgABlA0IACgFIAFADIgDAEgABMAxIADgBIgBgEIAFgBIABAEIgCABIABAFIgFABgAhVAzIAAgEIgBgBIABgEIAEABIgBAEIADABIgCAFgABdAxIAAgDIAAgBIAGAAIAAABIgCAFgABWAuIAEgBIgDgEIAFgCIACAEIgDACIACAEIgGACgABFAtIAFAAIABAFIgGABgAA7AyIAAgFIAGAAIgBAGgAhDAzIABgGIAFAAIAAAGgAg5AsQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADAEIgGADgAhtAtIAFgCIACAEIgEADgABdAxgAAwAsIAEgCIAEACIgCAEQgEgBgCgDgABpArIADgFIAEACIgCAFgAAnAqIAAgEIAGABIgBADIABACIgGAAgAgyApIAAgCIgBgBIAEgCIABABIAAADIAAADgAgrAqIAAgFIAEgBIABAGgAhwAkIAEgCIACAEIgFADgABfAkIAEgDIAEADIgEAEgAAvAmIABgBIABgEIAFACIgCAEgAhnAhIAEgDIADAEIgEADgABuAiIABgFIAFABIgCAGgAAoAiIACgGIAFACIgBAFgAg3AaIAFAAIAAACIABAAIABAEIgFABgAgtAgIAAAAIAAgFIAEAAIABAEIgFACgABlAdIACgEIAFACIgDAFgAAxAfIgBgFIAJAAIgBADIgCgBIAAADgAh0AaIAEgBIACAEIgEACgAhsAYIAFgCIABAEIgEACgABxAZIABgGIAFACIgBAFgABpAUIABgEIAFABIgBAFgAh3ARIAFgBIABAEIgFABgAhvAOIAFgCIABAFIgFACgABzAPIACgFIAEABIgBAFgABsALIACgEIAEABIgBAEgAh5AHIAEgBIACAEIgGABgAhxAFIAEgCIABAFIgEABgAB2AGIABgGIAFABIgBAGgABvABIAAgCIAGABIgCACgAh8gBIAFgBIABADIgEABgAh0gEIAFgBIABAFIgFAAgAB4gCIABgFIAGABIgCAFgABwgGIABgFIAGABIgBAFgAh+gLIAFgBIABAFIgFABgAh2gOIAFgBIABAGIgFABgAB6gMIABgFIAGABIgBAFgABygQIACgFIAEABIAAAFgAiAgUIAFgCIABAFIgFABgAh4gXIAFgBIABAFIgFABgAB8gWIACgFIAEABIgBAFgAB1gaIABgFIAFACIgCAEgAiCgfIAEgBIACAGIgFAAgAh6ghIAEgBIABAFIgEABgAB/ggIABgEIAFABIgCAEgAB4gjIAAgGIAGACIgCAFgAiEgoIAEgBIABAFIgEABgABFgkIAAgEIAAgCIAAAAIABgBIAFACIgBADIgBACgAh9gqIAEgCIACAFIgEACgAA/goIACgEIAEABIgCAFgAhEgoIABgEIACAAIAAAAIACAAIADAFgACBgqIACgEIAFABIgCAFgAhNguIAEgDIADAFIgFACgAB6gtIACgFIAFABIgCAFgABJgvIADgFIAEADIgCACIgBADgAiIgxIAFgCIABAFIgEACgABCgxIACgDIACgCIADAEIgBABIgBACgAhGgxIgCgBIAEgEIABACIACADIgEACgAiBg0IAFgBIACAEIgFACgACEg0IADgEIAEACIgCAEgAhUg0IADgEIACABIACgFIAEADIgDAEIgCgBIACABIgDADgABRg3IgEACIgDgEIAEgDIADAFIADgEIADAFIgDACgAB+g3IADgFIAEADIgDAFgAiLg6IAEgDIACAGIgFACgAhcg6IADgEIABABIADgEIAEADIgDAEIgBgBIgCAEgAiFg8IAEgCIACAEIgEADgABag9IgFADIgCgEIAEgDIADAEIADgCIADAEIgEADgACJg9IACgEIAFADIgDADgAhlg+IACgEIADABIACgFIAEACIgDAFIgBgBIgCAEgACDhAIAEgEIADADIgCAEgABihBIAFgDIACAFIgEACgAiRhCIAFgDIACAEIgEADgABchEIAEgCIACAFIgEACgAiKhCIAAgBIAAgDIAEABIABAAIAAABIABABIgEAEgAhuhCIADgFIAEACIgCAFgABrhGIAEgCIADAEIgEADgABihBgACOhGIACgDIAEABQABACgDADgAiUhIIAGgBIABADIgEADgABkhIIAEgCIADADIgEADgAhphHIACgDIAEACIgCAEgAh3hHIAEgFIADADIgCAEgABzhKIAFgDIACAEIgDADgACEhLIAFgCIABAGIgEAAgABthOIADgCIADAEIgEADgAhyhMIACgEIAFADIgDAEgAiJhLIACgFIAFABIgBAGgAh/hOIAEgDIADADIgCAEgACNhQIAFgDIACAFIgEABgAB7hQIAEgDIADADIgDADgAiThPIACgEIAFACIgCAEgAB1hTIADgDIADAEIgDADgAh6hSIADgEIAEADIgDAEgACBhVIAGgBIABAFIgFABgAiEhUIgBgBIACgGIAEAGIgDAEgACIhZIADgCIAEADIgEADgAiNhYIADgDIADACIgDAEgAiChZIAEgDIAEADIgEADgAB8hZIADgEIAEADIgDAEgACChgIABAAIgCgBIABgBIACgDIAFAFIgFAEgAiHhgIACgCIACgDIADAEIgCABIABAAIgCAEg");
	this.shape_2.setTransform(54.9,220.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AAABiQhVADgahGQgPhPgRgVQgFgGAGgJIALgOQAGANAXANIAiAUIADAJIgHAAIgEgHQgGgGgVgLQgUgKgIgKIgFASQAMANAHAlQAJAnAGALQAGAJAPAEQAMAEALgCQAMgCgDgHIgDgJIAJAAQADAMgBAEQgCAEgIACQAaAEAZgBQAbABAZgEQgIgCgCgEQgBgFADgLIAJgBIgEAKQgCAHAMACQALACAMgEQAOgEAGgJQAGgLAJgnQAIglAMgNIgFgSQgIAKgUAKQgWAKgFAHQgDAEgDAGIgHAAIAFgMIAigUQAXgNAGgNIALAOQAGAJgFAGQgKAMgHAhQgJApgGAOQgZBEhSAAIgFgBgAgBBeIABAAQBGgBAPgfQgPABgdAEQgcAEgNAAQgKAAgegEQgdgEgPgBQAOAdBFADgAAAA5IAAAKQAZgBAdgEQAbgEAHAAQAIgHgBgHQgaANhFAAgAhXA6QAHAAAbAEQAdAEAYABIAAgKQhEAAgbgNQAAAHAIAHg");
	this.shape_3.setTransform(54.9,220.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6E71").s().p("AgBASQhGgDgPgdIgCgDIAEAAQALAAAjAEQAWAEAQABIAAAAQAOAAAcgFQAfgEAMAAIAEAAIgCADQgPAfhHABgAgBANIABAAQA/AAARgZQgNABgZAEQgeAEgKgBIgCAAQgJAAgegDQgbgEgOgBQARAWA+ADg");
	this.shape_4.setTransform(54.9,228.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgBAQQhEgEgPgbQAPABAdAEQAeAEAKAAQANAAAcgEQAdgEAPgBQgPAdhGACg");
	this.shape_5.setTransform(54.9,228.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6E71").s().p("AAvAOQgZgBghgEIgcgDIgBAAIAAgBQgJgGAAgJIABgDIADABQAbAMA8AAIAIAAIAAAOgAgmABIAcADQAeAEAZABIAAgEIgDAAQg5AAgcgKQACAFADABg");
	this.shape_6.setTransform(50,226.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgEAGQgcgDgHAAQgIgGABgHQAbAMBCAAIAAAJQgZgBgagEg");
	this.shape_7.setTransform(50,226.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAvAOQgZgBghgEIgcgDIgBAAIAAgBQgJgGAAgJIABgDIADABQAbAMA8AAIAIAAIAAAOgAgmABIAcADQAeAEAZABIAAgEIgDAAQg5AAgcgKQACAFADABg");
	this.shape_8.setTransform(50,226.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAGQgcgDgHAAQgIgGABgHQAbAMBCAAIAAAJQgZgBgagEg");
	this.shape_9.setTransform(50,226.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6E71").s().p("AgxAOIABgOIAHAAQA9AAAagMIAEgBIAAADQABAJgJAGIgBABIgBAAIgcADQgfAEgbABgAgsAJQAZgBAfgEIAbgDQAEgCACgEQgdAKg5AAIgCAAg");
	this.shape_10.setTransform(59.7,226.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AguACQBDAAAagMQABAHgIAGQgHAAgbADQgbAEgZABg");
	this.shape_11.setTransform(59.7,226.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6E71").s().p("AgFAIIgfgGIAAgDIAqgFIAGgBIAKAAIAKgBQABAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIABAEIAAABIgLACIgeAIgAANgBIgiABIARADIAagFIgJABg");
	this.shape_12.setTransform(60.6,217.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgjAAIAqgEIAGAAIAKgBIAJAAQABAAABAAQAAAAABAAQAAABAAAAQABAAgBAAIgmAKg");
	this.shape_13.setTransform(60.5,217.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D6E71").s().p("AApANIgCAAIhQgNIgbgIIgFgCIAAgBIABgDQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAYABQAfADAfAFIA4AJIgCAMIgGABgAAoAIIABAAIAZADIACAAIAAgEIgHgBIgigGIgKgBQgegFgfgDIgOgBg");
	this.shape_14.setTransform(52.9,217.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgpgCIgdgJQAAgBAAAAQAAAAAAAAQABgBABAAQAAAAABAAIAXACQAbACAiAGIA1AIIABAAIgBAIIgEABg");
	this.shape_15.setTransform(52.9,217.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D6E71").s().p("AgYAIIgBgLIARgEIABAAIAhAGIAAADIgvAGgAgTAAIAAADIAbgDIgPgCg");
	this.shape_16.setTransform(52.1,218.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgYgBIAQgEQAQAEARABIgvAGg");
	this.shape_17.setTransform(52.2,218.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6E71").s().p("AgLAKIgjgGIAAgEIAugGIAqgDQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIgKADIgvAKgAgfACIAUADIAYgFQAJAAALgEg");
	this.shape_18.setTransform(59.5,220);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgtABIAugEIAIgBIACAAIAfgDQABAAABAAQABAAAAABQABAAAAAAQAAAAAAABIgJADIgvAKg");
	this.shape_19.setTransform(59.4,220);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D6E71").s().p("ABEAOQgUgCgWAAIgKABIgBgBIgJgBIglgHIgBgBIgHgBIgXgFIgLgEIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAICOASIgBAIgAgfAAIABAAIAuAHIAqABIh0gPIAAAAg");
	this.shape_20.setTransform(52.9,220.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("ABEALQgXgCgYAAIgFABIgBAAIgugJIgBgBIgmgJQAAAAAAAAQAAAAAAgBQABAAABAAQAAAAABAAIAbACIAEAAIBrAQIAAADg");
	this.shape_21.setTransform(52.9,220.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D6E71").s().p("AgzACIgBgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAgBAEgCIAegCIAJAAIArgBIAAAFIg5ABIBNACIAAAFg");
	this.shape_22.setTransform(51.1,222.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAEIgpgEIgCAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAIAegCIAIAAIAUAAIgUAAIgIABIAAAAIgJAAIgCADIBSADIgkAAIgYAAg");
	this.shape_23.setTransform(51.3,222.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D6E71").s().p("AhNAEIAEgIIBxgBIAdACIAEAAIADABQABABAAAAQABABAAAAQAAAAAAAAQAAAAgBABIgBABIgBAAIglAEgAhEAAIBpABIAXgBIgCAAIgSAAg");
	this.shape_24.setTransform(55.6,222.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("Ag1ACIgJAAIgMgBIACgCIAJAAIAAAAIAIgBIBegBIAEABIAHAAIASACIAEAAIACAAIABAAIgBAAIgcADg");
	this.shape_25.setTransform(55.7,222.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808285").s().p("AAEAEIhOgDIACgCQBXgFA5AGQABAAAAAAQABAAAAAAQABAAAAAAQAAAAgBAAQgZAEglAAIgIAAg");
	this.shape_26.setTransform(55.7,222.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#808285").s().p("AhKAAQAAAAAAAAQAAAAAAAAQAAAAABAAQABAAABAAQA5gGBWAFIADAEIhOACQgrAAgcgFg");
	this.shape_27.setTransform(53.5,222.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6D6E71").s().p("AhMADIgDAAIgBgCQgFgDAMgBQA3gHBaAFIAFAAIAFAJIgHACIhLACQguAAgegFg");
	this.shape_28.setTransform(53.6,222.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgFABQgCgBAHgCQAEgBACADQACABgHABIgCABQgDAAgBgCg");
	this.shape_29.setTransform(45.6,222.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D6E71").s().p("AgMABQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQADgDAGgBQALgCAEAGQABABgCACQgDADgGABIgEAAQgIAAgDgFg");
	this.shape_30.setTransform(45.6,222.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6E71").s().p("AABAIIhLgDIgIgBIAFgJIAFAAQBbgFA3AHQALABgEADIgBACIgDAAQgaAFgpAAIgJAAg");
	this.shape_31.setTransform(55.6,222.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AAAADQgHgCACgBQACgCAEAAQAHABgCABQgBADgEAAIgBAAg");
	this.shape_32.setTransform(63.9,222.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6E71").s().p("AgCAGQgNgDADgEQACgCAFgCQAFgBADABQAGABADACQACACgBABQgDAFgIAAIgEAAg");
	this.shape_33.setTransform(63.9,222.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#808285").s().p("AhGgMQAAAAAAAAQAAAAAAgBQABAAABAAQAAAAABAAQA6ACBQAQIgBAJQhigMgqgOg");
	this.shape_34.setTransform(52.9,221.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6D6E71").s().p("ABEARQhkgNgqgNIgDgBIAAgBQgBgGALAAIABAAQA3ADBVAQIAEABIgCAPg");
	this.shape_35.setTransform(52.9,221.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgGAAQAAgCAGAAQAGAAABACQgBADgGAAQgGAAAAgDg");
	this.shape_36.setTransform(45.6,219.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D6E71").s().p("AgIAEQgFgCAAgCQABgFAMAAQANAAAAAFQAAACgDACQgFACgFAAQgEAAgEgCg");
	this.shape_37.setTransform(45.6,219.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AhGAFQBQgQA6gCQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQgqANhiAMg");
	this.shape_38.setTransform(56.9,220.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6D6E71").s().p("AhNACIAEgBQBRgPA7gDIABAAQALAAgBAFIAAACIgDABQgqANhkANIgIABg");
	this.shape_39.setTransform(56.9,220.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgFAAQAAgCAFAAQAHAAgBACQABADgHAAQgFAAAAgDg");
	this.shape_40.setTransform(64.2,219.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6D6E71").s().p("AgJAEQgDgCAAgCQAAgBADgCQAFgCAEAAQAFAAAFACQADACAAABQAAACgDACQgFACgFAAQgEAAgFgCg");
	this.shape_41.setTransform(64.2,219.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#808285").s().p("AhGgMQAAAAAAAAQAAAAAAgBQABAAABAAQAAAAABAAQA6ADBQAPIgBAJQhigMgqgOg");
	this.shape_42.setTransform(52.9,217.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6D6E71").s().p("ABEARQhigMgsgOIgDgBIAAgCQgBgFALAAIABAAQA6ADBSAPIAEABIgCAQg");
	this.shape_43.setTransform(52.9,217.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgGAAQAAgCAGAAQAGAAABACQgBADgGAAQgGAAAAgDg");
	this.shape_44.setTransform(45.6,216.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6D6E71").s().p("AgNAAQAAgBAFgCQAEgCAEAAQAFAAAFACQADACAAABQAAAGgNAAQgMAAgBgGg");
	this.shape_45.setTransform(45.6,216.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#808285").s().p("AhGAFQBQgPA6gDQABAAAAAAQABAAABAAQAAABAAAAQAAAAAAAAQgsAPhgALg");
	this.shape_46.setTransform(56.9,218.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6D6E71").s().p("AhNACIAEgBQBSgPA6gDIABAAQALAAgBAFIAAACIgDABQgsAOhiAMIgIABg");
	this.shape_47.setTransform(56.9,218.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AgFAAQAAgCAFAAQAHAAgBACQABADgHAAQgFAAAAgDg");
	this.shape_48.setTransform(64.2,216.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6D6E71").s().p("AgJAEQgDgCAAgCQAAgBADgCQAFgCAEAAQAFAAAFACQADACAAABQAAACgDACQgFACgFAAQgEAAgFgCg");
	this.shape_49.setTransform(64.2,216.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AgBASQhGgDgPgdIgCgDIAEAAQALAAAjAEQAWAEAQABIAFAAQALAAAagFQAfgEAMAAIAEAAIgCADQgPAfhGABgAgBANIABAAQA/AAASgZQgNABgaAEQgZADgMAAIgFAAQgJAAgegDQgbgEgNgBQAQAWA+ADg");
	this.shape_50.setTransform(54.9,228.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#808285").s().p("AgBAQQhEgEgPgbQAPABAdAEQAeAEAKAAIAFAAQAMAAAagEQAbgEAPgBQgPAdhGACg");
	this.shape_51.setTransform(54.9,228.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgBAOQgZgBgigEIgbgDIgBAAIgBgBQgJgGABgJIAAgDIADABQAbAMA/AAIAJAAQA/AAAagMIAEgBIAAADQABAJgJAGIgBABIgBAAIgcADQgiAEgZABgAACAJQAZgBAhgEIAbgDQAEgCACgEQgdAKg7AAIgCAAgAhWABIAbADQAhAEAYABIAAgEIgCAAQg8AAgcgKQACAEAEACg");
	this.shape_52.setTransform(54.9,226.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#808285").s().p("AAAACQBFAAAbgMQAAAHgIAGQgHAAgbADQgdAEgZABgAg1AGQgbgDgHAAQgIgGAAgHQAbAMBEAAIAAAJQgYgBgdgEg");
	this.shape_53.setTransform(54.9,226.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6D6E71").s().p("AgiBHQgIgCgCgFQgCgDABgDQAFgLAFgZQAHgkAKgPQAHgIARgJIARgIQAIgGAFgGIADgEIAHAYIgBABQgLAMgKAqQgHAhgGAMQgLARgaAAgAAIgpQgQAIgGAHQgJAOgHAjQgHAdgDAIIAAACQACADAFABQALABALgDQAMgEAFgJQAGgKAHghQAKgqALgNIgDgMQgIAHgVALg");
	this.shape_54.setTransform(64.3,218.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F2F2").s().p("AghBDQgLgCACgIQAEgJAHgjQAGgcAKgOQAGgHATgKQAVgKAHgKIAFASQgLANgIAjQgJAogGALQgGAKgMAEQgJACgIAAIgHAAg");
	this.shape_55.setTransform(64.2,218.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6D6E71").s().p("AgKA2QgGgLgHgiIgIgdQgFgRgIgIIgBgBIAHgYIADAEQAFAGAJAGIAQAIQAQAJAHAIQALAQAHAjQAFAZAFALQABADgCADQgDAFgHACIgIAAQgbAAgKgRgAgngvQAMAPAIAoQAHAfAHAMQAFAJALAEQAMADALgBQAFgBACgDIAAgCQgFgLgFgaQgHgjgKgOQgFgGgQgJQgVgKgIgIg");
	this.shape_56.setTransform(45.5,218.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F2F2").s().p("AAKBBQgMgEgGgKQgGgKgJgpQgIgjgMgNIAGgSQAHAKAVAKQATAKAGAHQAKAOAGAcQAHAjAEAJQADAHgMADIgHAAQgIAAgJgCg");
	this.shape_57.setTransform(45.5,218.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6D6E71").s().p("AAABmIgFAAQhAAAgdgnQgRgXgMg1IgHgeQgFgQgGgIQgHgIAOgRIAFgGIACgDIACADQAEAIAMAJIAWANIAYAQIABAAQAIAUALAkIAFAVQAGASgEAEIgCADQAWADAUgBIANAAIAdgCIgCgDQgDgFAGgRIAFgVQAIgeALgaIABAAIAYgQIAWgNQAMgJAEgIIACgDIACADIAFAGQAHAIABAEQADAIgEAFQgGAIgFAQIgIAeQgLA1gRAXQgdAnhAAAgAAGBiQA9AAAcglQAQgWAMg1QAIgqALgOQADgDgCgGIgIgKIgDgDQgIANgeAQQgTALgEADQgJAVgJAhIgGAVQgFAPADAEQABACAHABIAAAGQgYADgQAAIgYAAQgSAAgXgDIAAgGQAHgBABgCQACgEgFgPIgFgVQgJghgKgVQgFgEgSgKQgdgQgJgNIgCADQgMANAFAGQALAOAIAqQAMA3ARAVQAdAlBAgCg");
	this.shape_58.setTransform(54.9,220.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6D6E71").s().p("AidBaIAAizIE7AAIAACzgAiYBUIExAAIAAinIkxAAg");
	this.shape_59.setTransform(54.8,224.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2F2F2").s().p("AiaBXIAAitIE1AAIAACtg");
	this.shape_60.setTransform(54.8,224.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6D6E71").s().p("AidAYIAAgvIE7AAIAAAvgAiYATIExAAIAAglIkxAAg");
	this.shape_61.setTransform(54.8,235);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2F2F2").s().p("AiaAWIAAgrIE1AAIAAArg");
	this.shape_62.setTransform(54.8,235);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6D6E71").s().p("AAMBiIgDAAIgBgFIAFAAIAAAEIAEAAIAAAFIgFABgAACBnIAAgFIgCAAIAAAFIgEAAIAAgFIADAAIAAgCIABAAIAAgDIADAAIAAAFIAEAAIAAAFgAgOBmIAAgFIAEABIABgFIAEAAIAAAFIgDAAIgBAFgAgYBmIABgFIADAAIAAgFIAFABIAAAEIgDAAIgBAFgAAVBhIgCAAIgBgFIAEAAIABAFIAEgBIAAAFIgFABgAgiBkIABgFIAEABIAAAFgAAfBgIAGgBIAAAFIgFABgAgsBiIACgFIAEACIgBAEgAApBeIgDAAIgBgFIAFgBIACAFIACAAIABAFIgFABgAg1BfIABgEIAEABIgBAFgAAyBbIAFgBIACAFIgFABgAgeBgIAAgFIAGAAIgBAFgAAcBbIAEgBIACAFIgGABgAgoBeIABgFIAFABIgBAFgAg/BcIACgFIAEACIgCAFgAA7BYIACAAIgDABIgCgFIAFgCIACAEIABAAIACAEIgEADgAgyBbIABgFIAGACIgCAFgAAvBXIAFgBIABAEIgFACgAg8BYIACgFIAFACIgBAFgAhIBXIADgEIADACIgCAEgABEBUIAFgDIACAEIgEADgAhEBTIACgEIAEACIgCAEgABBBQIAEgDIADAEIgFADgAhRBRIADgEIAEADIgDAEgABMBPIAFgDIACADIgDAEgAhNBNIADgEIAEADIgDAEgABJBLIADgEIAEAEIgEADgAhYBKIADgDIAEADIgEAEgABUBIIAEgDIADADIgDAEgAgEBLIAAgEIgBAAIAAgFIAFAAIAAgCIgCAAIAAgFIADAAIAAACIABAAIAAgFIAFAAIAAgEIAEAAIAAAFIgEAAIAAAEIgFAAIAAAFIgCAAIAAAEIACAAIAAAFgAgPBKIABgEIgBAAIAAgFIAGAAIgBAFIABAAIAAAFgAAHBKIAAgEIgEABIAAgFIAFgBIAAAEIADAAIABAFgAARBGIgEAAIgBgFIAGAAIAAADIADAAIABAFIgFABgAgYBJIAAgEIgBAAIABgFIAEABIAAAEIABAAIgBAFgAhUBFIAEgDIgEAAIAAgEIgBAAIABgFIAFABIAAADIABAAIgBAFIgBAAIADAEIgEADgAgiBIIAAgEIgBAAIABgFIAEABIAAADIABABIgBAFgAAbBFIgEAAIgBgFIAGAAIAAADIADAAIABAFIgFAAgAAlBEIgEAAIgBgFIAFAAIABADIADgBIABAFIgFABgAgsBGIAAgDIgBAAIABgFIAEABIAAADIABAAIgBAFgABQBEIABgCIgFAAIAAgDIgDAAIgBgFIAFAAIAAADIAFAAIAAAEIAAgBIAEACIgDAFgAhgBDIAEgDIAEADIgEAEgAAuBDIgDAAIAAgFIAEAAIABADIADgBIABAFIgFABgAg2BFIABgDIgCAAIABgFIAFAAIgBADIABABIAAAFgABbBBIADgDIAEADIgEAEgAA4BCIgDAAIAAgFIAEgBIAAADIAEAAIABAFIgFAAgAhABEIABgEIgCAAIABgFIAFABIgBADIABAAIAAAFgABCBAIgDABIgBgFIAFgBIAAADIAEAAIABAFIgGAAgAhKBDIAAgEIgBAAIABgFIAFABIAAADIABAAIgBAFgAhmA7IAFgDIACAEIgDADgABSA+IAAgFIAGAAIAAAFgAAMA4IAFAAIAAgEIAEAAIAAAFIgEAAIAAAEIgFAAgAgJA9IAAgEIgDAAIAAgFIAGAAIAAAEIACAAIAAAFgABhA6IADgEIADACIgCAFgAAWA9IAAgFIAFAAIAAgEIAEgBIABAFIgFABIAAAEgAgTA9IAAgEIgDAAIAAgFIAGAAIAAAEIACAAIAAAFgAgdA8IAAgEIgDAAIABgFIAFABIAAAEIACAAIAAAFgAAgA8IAAgEIAAgBIAFAAIAAgEIAEgBIABAFIgFABIAAAEgAgoA8IABgFIgDAAIABgFIAFABIAAAEIACAAIAAAFgAAqA3IAAAAIAEgBIABAFIgFABgAheA4IAEgDIADADIgDAEIgEgEgAgyA7IABgFIgCAAIAAgFIAEAAIgBgBIAEgCIADADIgFADIAAAAIgBACIADAAIAAAFgAA0A2IgFAAIgBgCQgCAAgDgDIAEgDIADACIAAABIADAAIABAFIAEgBIABAFIgEABgAg8A6IABgFIAGAAIgBAFgABZA3IACgEIAFACIgDAFgAA+A0IAEgBIABAFIgEABgAgCA5IAAgFIADAAIAAAFgAhFA4IABgFIAFABIgCAFgABHAtIAEAAIABAFIABAEIgFABgAAqA3gAhPA2IABgFIADAAIABgEIAFAAIAAAFIgEAAIgCAFgAhqAyIADgDIADAFIgEACgABRAwIAAAAIgBgEIAEgCIACAFIgBAAIACAEIgFACgAhZAyIACgEIACABIACgEIAFABIgCAFIgDgBIgBAEgABlAxIADgEIAFACIgDAFgAA9AyIAAgFIAEABIABAFgAhBAuIAFgBIABAFIgGABgAhhAuIAAgBIAAgEIACABIADgEIAFADIgDAEIgCgBIgBABIAAABIABADIgEACgABaAtIABgBIgCgEIAEgCIACAEIADgBIAAAEIAAADIgCAAIgEABgAAyAvIADgEIADACIgBAEgAg4AsIAEgCIADAEQgCACgCABgAhvApIAFgCIABAEIgEACgAAnAmIAFABIAAAEIgFAAgAgrArIAAgFIAEgBIAAAGgABqApIACgFIAEACIgCAFgAAuAoIABgDIABgCIAFACIgBACIAAABIgGABgAgzAoIAAgBIgBgDIAEgCIABADIABADgAhnAjIAFgDIACAEIgCADgABhAjIADgDIADADIgDAEgAhzAfIAFgCIACAFIgFACgAAoAhIACgGIADAAIAAADIABAAIgBAEgAgtAeIABgBIAAgDIACABIACAFIgEACgABuAgIABgFIAGACIgCAEgAA1AfIAAABIgDAAIgBgCIABAAIgBgDIAHgBIgBAGgAg0AfIAAgBIgCABIgCgFIAHAAIgBAFgAhrAaIAEgCIACAEIgEADgABlAcIACgFIAGACIgDAFgAh2AWIAFgCIABAFIgEABgABxAWIACgFIAEACIgBAFgAhvAQIAFgBIABAFIgFABgABqATIABgFIAEACIgBAEgAh5AMIAFgBIACAEIgGACgAB0ANIABgFIAFABIgCAFgAhxAHIAFgCIABAFIgGABgABsAJIACgEIAFABIgCAFgAh7ACIAFgBIABAFIgFABgAB2ADIABgDIAFAAIgBAEgAh0gBIAFgBIABADIgEABgABuAAIABgDIAGABIgBADgAh9gGIAEgBIABAFIgEABgAB4gFIABgEIAGABIgBAEgAh2gLIAFgBIABAFIgFABgABwgIIABgFIAFABIAAAFgAiAgQIAFgBIABAFIgEABgAB6gOIACgFIAEABIgBAFgAh4gVIAFgBIABAFIgFABgABzgSIABgFIAEABIgBAFgAiCgZIAGgBIABAEIgGABgAB9gYIABgFIAEABIgBAFgAh6gfIAFgBIABAFIgFABgAB1gcIABgFIAFACIgBAFgAiEgjIAFgBIACAFIgGABgAB/giIABgFIAFABIgBAFgAh9goIAFgCIABAFIgEACgAB3glIACgFIAFABIgCAFgAhIglIAAgBIgCgCIAFgCIAAAAIABABIAAAFgAhEgpIAAgCIAFgCIACAEIgGACgABBgsIAFgBIABAFIgGABgAiGgtIAEgBIACAFIgFABgAhEgpgACBgsIACgFIAFACIgBAFgABIguIACgEIABgBIAEAEIgDADgAhOgvIAAgBIADgDIABABIADADIgFADgAiAgxIAFgCIABAFIgEABgAB6gvIADgFIAEACIgCAFgABBgvIACgFIAAAAIAEADIgBAEgAhGgxIgCgCIADgEIACADIABACIgEACgAiKg2IAFgCIABAFIgEACgABPg2IAEgEIgCgEIAEgCIACAEIAEgDIgBgEIADgCIADAEIgEADIACAEIgEACIgDgEIgEADIACAEIgDACgAhWg2IADgEIADACIACgEIAEACIgDAFIgCgCIgDAEgACFg1IACgFIAEACIgCAEgABIg4IAEgDIADAEIgEADgAiEg6IAEgCIADAEIgFACgAB/g5IACgEIAFACIgDAFgAheg7IACgEIADABIACgDIAEACIgCAEIgCgBIgDAEgAiOg+IAEgDIADAFIgFACgACJg/IADgEIAEADIgCAEgABhhBIAEgCIACAEIgEADgAhng/IACgEIADABIACgEIAFACIgDAEIgCgBIgCAEgAiKhCIAEgDIADAEIgEADgACEhCIADgDIABABIADgBIAAACIgBABIgCADgABqhFIAEgDIACAFIgEACgAhwhDIACgFIAFACIgCAFgAiRhDIgDgEIAGgCIABADIAAABIgDADgABihHIAEgDIADAEIgFADgAhqhHIACgEIAEACIgDAFgACPhHIABgEIAEAAIgBAGgAByhKIAEgCIADAEIgEACgAh5hJIADgEIAEADIgCAEgAiKhJIACgFIAFACIgBAFgACDhNIAFgBIABAEIgEACgABrhMIADgDIADAEIgEADgAhzhNIACgEIAFADIgDAEgAB6hPIAEgDIADADIgEAEgAiBhPIAEgEIADADIgDAEgAiUhOIACgFIAFADIgBAEgABzhSIADgDIADAEIgDADgACMhSIAFgDIACAEIgEACgAh7hTIADgEIAEADIgEAEgAiGhSIACgJIADAEIgBACIABAAIgBAEgACBhVIAAAAIgBgBIAFgFIACAIIgFABgAiOhXIADgEIAEADIgEAEgAB6hYIAEgEIADAEIgDADgACGhaIAEgDIAEAEIgFADgAiDhbIAFgDIADAEIgEADgAiIhfIADgDIABgEIACAEIgBABIABABIgCAEgACAhfIAEgHIACAEIABABIgBABIABAAIgCADg");
	this.shape_63.setTransform(92.4,220.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F2F2F2").s().p("AAABjQhVACgahGQgGgOgJgpQgHgigKgMQgFgGAGgJIALgNQAHAMAWANIAiAVIAFAMIgHgBIgGgJQgFgHgWgKQgUgKgIgKIgFASQAMANAIAlQAIAmAHALQAGAKAOAEQAMAEALgCQAMgCgCgHIgEgKIAJAAQAEAMgCAFQgCAEgIACQAZAEAagBQAaABAagEQgIgCgCgEQgBgEADgMIAJAAIgEAJQgCAHAMACQALACAMgEQAPgEAGgKQAGgKAJgnQAHglAMgNIgFgSQgIAKgUAKQgVAKgGAHIgEAGIgHABIADgJIAigVQAXgNAGgMIALANQAGAJgFAGQgKAMgHAiQgJApgGAOQgZBEhSAAIgFAAgAAABeIACAAQBFgDAOgdQgOABgeAEQgeAEgLAAQgMAAgcgEQgdgEgPgBQAPAfBFABgAAAA5IAAAKQAZgBAdgEQAagEAIAAQAIgIAAgGQgdANhDAAgAhXA6QAIAAAbAEQAcAEAYABIAAgKQhCAAgdgNQAAAGAIAIg");
	this.shape_64.setTransform(92.4,220.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6D6E71").s().p("AAAASQhHgCgPgdIgCgEIAEAAQAMAAAfAFQAhAEAIgBIABAAQAQAAAWgDQAjgFALAAIAEAAIgCAEQgPAchGADgAAAANIACAAQA+gDARgWQgNAAgcAEQgdAFgLAAIgBAAQgMAAgcgFQgZgEgOAAQATAYA9ABg");
	this.shape_65.setTransform(92.4,228.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2F2F2").s().p("AAAAPQhFgBgPgcQAOAAAeAEQAcAEAMAAQALAAAdgEQAfgEAOAAQgOAbhFACg");
	this.shape_66.setTransform(92.4,228.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6D6E71").s().p("AgxAOIAAgOIAIAAQA9AAAagMIADgBIABADQAAAJgJAGIgBABIAAAAQgKAAgSACQgcAFgeABgAgsAJQAZgBAegEIAcgDIAFgGQgcAKg5AAIgDAAg");
	this.shape_67.setTransform(97.2,226.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2F2F2").s().p("AguABQBBAAAcgLQABAHgJAFQgGAAgcAFQgaADgZABg");
	this.shape_68.setTransform(97.2,226.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#231F20").s().p("AgxAOIAAgOIAIAAQA9AAAagMIADgBIABADQAAAJgJAGIgBABIAAAAQgKAAgSACQgcAFgeABgAgsAJQAZgBAegEIAcgDIAFgGQgcAKg5AAIgDAAg");
	this.shape_69.setTransform(97.2,226.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AguABQBBAAAcgLQABAHgJAFQgGAAgcAFQgaADgZABg");
	this.shape_70.setTransform(97.2,226.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D6E71").s().p("AAvAOQgfgBgbgFQgSgCgKAAIAAAAIgBgBQgJgGAAgJIABgDIADABQAbAMA8AAIAIAAIAAAOgAglABIAbADQAeAEAZABIAAgEIgDAAQg5AAgcgKQABADAFADg");
	this.shape_71.setTransform(87.5,226.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F2F2F2").s().p("AgEAHQgcgFgGAAQgJgFABgHQAcALBBAAIABAKQgagBgagDg");
	this.shape_72.setTransform(87.5,226.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6D6E71").s().p("AAFAIIgpgJIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAaACIAqAGIAAACIgfAGgAAFADIARgDIgrgCg");
	this.shape_73.setTransform(86.7,217.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2F2F2").s().p("AgigEQgBAAABAAQAAAAAAgBQABAAAAAAQABAAABAAIAZABIAqAEIggAGg");
	this.shape_74.setTransform(86.8,217.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2F2F2").s().p("AhFANIgBgIIABAAIA1gIQAagFAjgDIAXgCQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIgXAHIhxASg");
	this.shape_75.setTransform(94.3,217.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6D6E71").s().p("AAWAIIgvgHIAAgDIAggFIABAAIASADIgCAMgAgIAAIAcADIABgDIgNgCg");
	this.shape_76.setTransform(95.2,219);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2F2F2").s().p("AgYAAIAhgEIAQACIgCAHg");
	this.shape_77.setTransform(95.1,219);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6D6E71").s().p("AALAKIg1gMIgDgBIgBgBIAAgBIAAgDQABAAAAgBQAAAAABAAQABAAAAAAQABAAABAAIAKAAIARABIAHABIA2AHIAAAEIgjAGgAAMAFIAUgEIgugEIgSgBg");
	this.shape_78.setTransform(87.7,220.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F2F2F2").s().p("AgtgFQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAIAJABIARABIAEAAIADAAIAIABQAfAEAPABIgjAHg");
	this.shape_79.setTransform(87.8,220.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6D6E71").s().p("AhJAGIAegGIAkgFIAwgGIASgBIAKgBIAEABIABAEIAAABIgLAEIgeAGIAAAAIgIACIgnAHIg1ABIgFAAgAAqgGIhjAOIArgBIAtgHIABAAIAbgHIAAAAIgRABg");
	this.shape_80.setTransform(94.3,220.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F2F2F2").s().p("AhGAIIBlgPIADAAIAHgBIASgBIAJgBQABAAAAAAQABAAABABQAAAAAAAAQAAAAAAABIgfAIIgHABIgCAAIgHACIgmAHIg4ABg");
	this.shape_81.setTransform(94.3,220.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6D6E71").s().p("Ag1AGIABgEIBNgCIgPAAIgTgBIgYAAIAAgFIAsABIAIAAIAeACQAEACABABQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABIgBAAIgCABIghADIgJABg");
	this.shape_82.setTransform(96.1,222.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgzAEIA9gCIAVgBIgCgDIgJAAIgJAAIgSgBIgJgBIAcABIAIAAIAeADQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgCAAIggAEIgJAAIgYABIgkgBg");
	this.shape_83.setTransform(96,222.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6D6E71").s().p("AguAGIgWgCIgBgBIgFAAIgBgBIgBgBQgBgBAAAAQAAAAAAAAQAAAAAAgBQABAAABAAIADgBIBqgDIAVABIATAAIAEAIIhzACIgJAAgAg5AAIgDAAIAPABIBygBIgOAAIgVAAg");
	this.shape_84.setTransform(91.6,222.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F2F2F2").s().p("AgkADIgJAAIgcgDIgBAAIABAAIACAAIBqgDIAUABIAJAAIAJAAIACADIgMAAIgJABIg9ACIgIAAIgVgBg");
	this.shape_85.setTransform(91.6,222.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#808285").s().p("AhJAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQA3gGBZAFIACADQg3ACgXAAIgOAAQgiAAgWgEg");
	this.shape_86.setTransform(91.6,222.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#808285").s().p("AhKACIADgEQBZgEA2AGQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgcAFgrAAIhOgDg");
	this.shape_87.setTransform(93.7,222.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6D6E71").s().p("AhKAGIgHgCIAFgJIAEAAQBVgFA9AGIAAAAQALACgEADIgBABIgDABQgdAFgvAAIhLgCg");
	this.shape_88.setTransform(93.7,222.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2F2F2").s().p("AAAACQgHgBACgBQACgDAEACQAHABgCAAQgBADgEAAIgBgBg");
	this.shape_89.setTransform(101.7,222.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6D6E71").s().p("AgCAGQgNgDADgEQACgCAFgCQAFgBADABQAGABADACQACACgBABQgDAFgIAAIgEAAg");
	this.shape_90.setTransform(101.7,222.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6D6E71").s().p("AhMADIgDAAIgBgCQgEgCALgCQA9gHBVAGIAFAAIAFAJIgIAAIhLADIgJAAQgpAAgagFg");
	this.shape_91.setTransform(91.6,222.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F2F2F2").s().p("AgFAAQgCAAAHgBQAFgCABADQACABgHABIgBABQgEAAgBgDg");
	this.shape_92.setTransform(83.4,222.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6D6E71").s().p("AgMACQgDgEANgDQALgCAEAHQABAAgCADQgDACgGABIgEAAQgIAAgDgEg");
	this.shape_93.setTransform(83.4,222.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#808285").s().p("AhGAFQBQgQA6gCQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQgtANhfAMg");
	this.shape_94.setTransform(94.3,221.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6D6E71").s().p("AhNACIAEgBQBSgPA6gDQAMAAgBAFIAAACIgDABQgsAOhjAMIgHABg");
	this.shape_95.setTransform(94.3,221.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F2F2F2").s().p("AgGAAQAAgBAGAAQAHAAAAABQAAACgHAAQgGAAAAgCg");
	this.shape_96.setTransform(101.6,219.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6D6E71").s().p("AgNAAQAAgFANAAQAFAAAFACQADACAAABQAAACgDACQgFACgFAAQgNAAAAgGg");
	this.shape_97.setTransform(101.7,219.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F2F2F2").s().p("AhGgMQAAAAAAAAQAAAAAAgBQABAAABAAQAAAAABAAQA6ADBQAPIgBAJQhhgLgrgPg");
	this.shape_98.setTransform(90.4,220.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6D6E71").s().p("ABEARQhigMgsgOIgDgBIAAgCQgBgFALAAIABAAQA6ADBSAPIAEABIgCAQg");
	this.shape_99.setTransform(90.4,220.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F2F2F2").s().p("AgGAAQAAgCAGAAQAGAAABACQgBADgGAAQgGAAAAgDg");
	this.shape_100.setTransform(83.1,219.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6D6E71").s().p("AgNAAQAAgBAFgCQAEgCAEAAQAFAAAFACQADACAAABQAAACgDACQgFACgFAAQgNAAAAgGg");
	this.shape_101.setTransform(83.1,219.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#808285").s().p("AhGAFQBQgPA6gDQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQgqAOhiAMg");
	this.shape_102.setTransform(94.3,217.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6D6E71").s().p("AhNACIAEgBQBVgPA3gDQAMAAgBAGIAAABIgDABQgvAPhgALIgHABg");
	this.shape_103.setTransform(94.3,217.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F2F2F2").s().p("AgGAAQAAgCAGAAQAHAAAAACQAAADgHAAQgGAAAAgDg");
	this.shape_104.setTransform(101.6,216.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6D6E71").s().p("AgNAAQAAgFANAAQAOAAgBAFQAAACgDACQgFACgFAAQgNAAAAgGg");
	this.shape_105.setTransform(101.7,216.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#808285").s().p("AhGgMQAAAAAAAAQAAAAAAgBQABAAABAAQAAAAABAAQA6ADBQAPIgBAJQhjgMgpgOg");
	this.shape_106.setTransform(90.4,218.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6D6E71").s().p("ABEARQhkgNgqgNIgDgBIAAgBQgBgGALAAIABAAQA3ACBVARIAEABIgCAPg");
	this.shape_107.setTransform(90.4,218.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F2F2F2").s().p("AgGAAQAAgCAGAAQAGAAABACQgBADgGAAQgGAAAAgDg");
	this.shape_108.setTransform(83.1,216.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6D6E71").s().p("AgNAAQAAgFANAAQANAAAAAFQAAACgDACQgFACgFAAQgNAAAAgGg");
	this.shape_109.setTransform(83.1,216.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#231F20").s().p("AAAASQhHgCgPgdIgCgEIAEAAQAMAAAfAFQAaADALAAIAFAAQAQAAAWgDQAjgFALAAIAEAAIgCAEQgPAchGADgAAAANIACAAQA+gDARgWQgOAAgbAEQgeAFgKAAIgEAAQgLAAgagFQgZgEgOAAQATAYA9ABg");
	this.shape_110.setTransform(92.4,228.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#808285").s().p("AAAAPQhFgBgPgcQAPAAAbAEQAbAEALAAIAEAAQALAAAdgEQAfgEAOAAQgOAbhFACg");
	this.shape_111.setTransform(92.4,228.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#231F20").s().p("AgBAOQgfgBgbgFQgTgCgJAAIgBAAIgBgBQgJgGABgJIAAgDIAEABQAaAMA/AAIAJAAQA/AAAagMIAEgBIAAADQABAJgJAGIgBABIgBAAQgKAAgRACQgdAFgeABgAADAJQAYgBAhgEIAbgDIAGgGQgdAKg7AAIgCAAgAhWABIAbADQAhAEAYABIAAgEIgCAAQg7AAgdgKQACADAEADg");
	this.shape_112.setTransform(92.4,226.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#808285").s().p("AAAABQBDAAAdgLQAAAHgIAFQgHAAgbAFQgcADgaABgAg0AHQgcgFgHAAQgIgFAAgHQAdALBCAAIAAAKQgYgBgcgDg");
	this.shape_113.setTransform(92.4,226.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6D6E71").s().p("AAFBEQgKgFgFgJQgHgNgHggIgHgdQgGgRgHgIIgBgBIAHgZIADAFQAHAKAWAKQARAIAHAJQALAOAHAlQAFAZAEALQACADgCADQgEAGgHABIgHAAQgMAAgKgDgAgogvQAMAOAJApQAHAhAGALQAGAIALAEQAMADAKgBQAGgBABgDIABgCQgEgHgGgeQgIgjgJgPQgGgGgQgJQgVgKgHgIg");
	this.shape_114.setTransform(83,218.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F2F2F2").s().p("AAKBBQgMgEgGgKQgGgLgJgoQgIgjgLgNIAFgSQAHAKAVAKQATAKAGAHQAKAOAGAcQAHAjAEAKQACAHgLACIgHAAQgIAAgJgCg");
	this.shape_115.setTransform(83,218.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6D6E71").s().p("AghBHQgHgBgEgGQgCgDACgDQAEgLAFgZQAHgkALgPQAHgJARgIQAWgKAHgKIADgFIAHAZIgBABQgLAMgJAqQgHAggHANQgLARgaAAgAAJgqQgQAJgGAGQgJAPgIAjQgEAagGALIABACQABADAGABQAKABAMgDQAMgEAFgIQAHgNAGgfQAJgpAMgOIgEgNQgIAJgUAJg");
	this.shape_116.setTransform(101.7,218.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F2F2F2").s().p("AghBDQgLgCACgHQAEgKAHgjQAGgcAKgOQAGgHATgKQAVgKAHgKIAGASQgMANgIAjQgJApgGAKQgGAKgMAEQgJACgIAAIgHAAg");
	this.shape_117.setTransform(101.7,218.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6D6E71").s().p("AgFBnQhAAAgdgnQgQgXgNg2IgHgeQgEgQgHgIQgHgJAOgQIAFgGIACgEIACAEQAEAIAMAJIAWANQAQAJAIAHIABAAQALAZAIAfIAFAVQAGASgEAFIgCACQAaADAQgBIALAAIAggCIgCgCQgEgFAGgSIAFgVQALgkAIgUIABAAQAIgHAQgJIAWgNQAMgJAEgIIACgEIACAEIAFAGQAOAQgHAJQgJAMgJAqQgMA2gRAXQgdAnhAAAgAiGhZIgIAKQgCAGADADQALAOAIAqQAMA2ARAWQAdAlBAgBIAGAAQA9AAAcglQAQgWAMg1QAIgqALgOQAEgFgLgOIgCgDQgJAMgdAQQgTAKgFAFQgKAWgIAgIgGAWQgEAPACADQABACAHACIAAAFQgaAEgbgBIgMAAQgQAAgYgDIAAgFQAHgCABgCQACgEgEgOIgGgWQgIgggKgWQgEgEgTgLQgegPgIgNg");
	this.shape_118.setTransform(92.4,220.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6D6E71").s().p("AidBaIAAizIE7AAIAACzgAiYBVIExAAIAAipIkxAAg");
	this.shape_119.setTransform(92.5,224.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F2F2F2").s().p("AibBXIAAitIE3AAIAACtg");
	this.shape_120.setTransform(92.5,224.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6D6E71").s().p("AidAYIAAgvIE7AAIAAAvgAiYATIExAAIAAglIkxAAg");
	this.shape_121.setTransform(92.5,235.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F2F2F2").s().p("AibAWIAAgrIE3AAIAAArg");
	this.shape_122.setTransform(92.5,235.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6D6E71").s().p("AhHAQIgCgNIA4gJQAogGAWgCIAYgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABADIAAACIgLADIg4AMIhIAKgAAtgJQgVACgoAGIgzAIIAAAEIACAAIBHgKIA1gLg");
	this.shape_123.setTransform(94.3,217.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#648982").s().p("AACAGIgBAAIgBAAIAAgBIAAAAIAAgCIAAgEIgCAAIAAgBIACAAIAAgCIAAgBIAAADIADAAIAAABIgDAAIAAAEIAAABIABABIABAAIABABIgBAAg");
	this.shape_124.setTransform(107.2,212.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#648982").s().p("AgBAHIAAgHIgBAAIAAgBIABAAIAAgBIABgBIAAgCIAAgBIABAAIABAAIABAAIgBACIAAAAIgBAAIgBAAIAAABIAAABIAAABIACAAIAAABIgCAAIAAAHg");
	this.shape_125.setTransform(106.6,212.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#648982").s().p("AAAAHIAAgIIAAAAIAAAIgAAAgEIAAAAIAAgBIAAgBIAAAAIAAAAIAAABIAAABIAAAAg");
	this.shape_126.setTransform(106,212.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#648982").s().p("AgBAGIgCAAIABgBIABAAIABAAIABAAIABgBIAAgCIAAgBIgBABIgBABIgBgBIgCgCIAAgBIAAgCIACgCIABgBIABABIABAAIAAABIAAgBIACAAIAAABIAAABIAAAEIAAADIgBABIgCABIgBABIgBgBgAgBgDIgBACIABABIABAAIAAABIABgBIABAAIAAAAIAAAAIAAgCIAAAAIAAAAIgBgCIgBAAIgBABg");
	this.shape_127.setTransform(105.1,213.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#648982").s().p("AACAGIgBAAIgBAAIAAgBIAAAAIAAgCIAAgEIgCAAIAAgBIACAAIAAgCIAAgBIAAADIACAAIAAABIgCAAIAAAEIAAABIABABIABAAIAAABIAAAAg");
	this.shape_128.setTransform(104.2,212.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#648982").s().p("AAAAHIAAgIIAAAAIAAAIgAAAgEIAAAAIAAgBIAAgBIAAAAIAAAAIAAABIAAABIAAAAg");
	this.shape_129.setTransform(103.6,212.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#648982").s().p("AACAFIAAgCIgBABIgBABIAAAAIgBAAIgBgCIgBgDIAAgDIACAAIAAADIABACIAAABIAAAAIABgBIABgBIAAAAIAAgBIAAgDIACAAIAAAEIAAACIAAACg");
	this.shape_130.setTransform(102.8,213);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#648982").s().p("AACAHIAAgGIAAgBIgBAAIgBAAIAAAAIgBAAIAAAAIAAABIAAAGIgCAAIAAgNIACAAIAAAGIABgBIAAAAIAAAAIAAgBIACABIABAAIABABIAAABIAAAGg");
	this.shape_131.setTransform(101.6,212.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#648982").s().p("AACAFIAAgCIgCACIAAAAIgBAAIgBgCIgBgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADAAIgBgBIAAgBIgBAAIAAAAIgBAAIgBgBIACAAIAAgBIACABIABACIAAABIAAACIAAACIABABgAAAAAIgBACIABABIAAABIABgBIABgBIAAgBIAAgBIgCAAIAAAAg");
	this.shape_132.setTransform(100.5,212.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#648982").s().p("AAAAHIAAgNIABAAIAAANg");
	this.shape_133.setTransform(99.8,212.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#648982").s().p("AACAFIAAgCIgCACIAAAAIgBAAIgBgCIgBgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIADAAIgBgBIAAgBIgBAAIAAAAIgBAAIgBgBIACAAIAAgBIACABIABACIAAABIAAACIAAACIABABgAAAAAIgBACIABABIAAABIABgBIABgBIAAgBIAAgBIgCAAIAAAAg");
	this.shape_134.setTransform(99,212.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#648982").s().p("AgBAEIgCgBIAAgDIAAgBIACgCIABgBIACABIACACIAAABIAAADIgCABIgCABIgBgBgAAAgCIgBACIgBAAIABACIABABIAAABIABgBIABgBIABgCIgBAAIgBgCIgBAAIAAAAg");
	this.shape_135.setTransform(98,212.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#648982").s().p("AAAAFIgDgIIACAAIABADIAAABIAAABIAAgBIAAgBIACgDIACAAIgEAIg");
	this.shape_136.setTransform(96.9,213);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C1EAE6").s().p("AgTBnIAAjNIAnDNg");
	this.shape_137.setTransform(78.7,205);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C1EAE6").s().p("AgkgRQgMgbAAgWIBiAAIAACFQg9gfgZg1g");
	this.shape_138.setTransform(103.7,181.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C1EAE6").s().p("AgwhCIBhAAQAAAWgMAbQgYA1g9Afg");
	this.shape_139.setTransform(43.6,181.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CCFFFC").s().p("AAeDLIgDjLIg3AAIAADLIlBABIAAmXIK7AAIAAGXg");
	this.shape_140.setTransform(73.7,194.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(8));

	// flash0.ai
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BEBEBE").s().p("ArKjQIWVAAIgPEgQgZgkgVgsQgqhbAVgwQiKAqirAiQlTBBidgqQjEg2ikBNQhOAigqA8QgqA7ABBJg");
	this.shape_141.setTransform(71.5,20.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#22211E").ss(1,0,0,2.6).p("AGpEbItRAAIAAo1INRAAg");
	this.shape_142.setTransform(73.5,146);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2F2F2").s().p("AmnEbIAAo1INPAAIAAI1g");
	this.shape_143.setTransform(73.5,146);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#22211E").ss(1,0,0,2.6).p("ALMpHI2WAAIAqSPIVCAAQABgGAmw5QABgnACgpg");
	this.shape_144.setTransform(71.6,58.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F2F2F2").s().p("AqgJIIgryPIWWAAIAAABIgCBPQgmQ5gCAGg");
	this.shape_145.setTransform(71.6,58.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#7C574D").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_146.setTransform(73.5,146);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#22211E").ss(1,0,0,2.6).p("ALMpHI2WAAIAqSPIVCAAQABgGApyJg");
	this.shape_147.setTransform(71.6,58.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#7C574D").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_148.setTransform(71.6,58.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#AE8372").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_149.setTransform(73.5,146);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AE8372").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_150.setTransform(71.6,58.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C39574").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_151.setTransform(73.5,146);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C39574").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_152.setTransform(71.6,58.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E0B38E").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_153.setTransform(73.5,146);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E0B38E").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_154.setTransform(71.6,58.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E2BCA5").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_155.setTransform(73.5,146);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E2BCA5").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_156.setTransform(71.6,58.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F1CAB9").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_157.setTransform(73.5,146);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F1CAB9").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_158.setTransform(71.6,58.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FCECE3").s().p("AmnEbIAAo1INQAAIAAI1g");
	this.shape_159.setTransform(73.5,146);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FCECE3").s().p("AqgJIIgryPIWWAAIAAABQgoSIgCAGg");
	this.shape_160.setTransform(71.6,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_142}]},1).to({state:[{t:this.shape_150},{t:this.shape_147},{t:this.shape_149},{t:this.shape_142}]},1).to({state:[{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_142}]},1).to({state:[{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_142}]},1).to({state:[{t:this.shape_156},{t:this.shape_147},{t:this.shape_155},{t:this.shape_142}]},1).to({state:[{t:this.shape_158},{t:this.shape_147},{t:this.shape_157},{t:this.shape_142}]},1).to({state:[{t:this.shape_160},{t:this.shape_147},{t:this.shape_159},{t:this.shape_142}]},1).wait(1));

	// flash0.ai
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#22211E").s().p("ACCk1IAJAAIAAEtIhcDJIi6B1gAh9EjICihpIBbjEIAAkag");
	this.shape_161.setTransform(17.5,148.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F2F2F2").s().p("ACBkxIAFEwIhaDAIiyBzg");
	this.shape_162.setTransform(17.7,148.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#22211E").s().p("AguDBIhcjJIgBktIAKAAIENJrgAB7EjIj+pHIAAEaIBdDEIChBpg");
	this.shape_163.setTransform(129.5,148.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F2F2F2").s().p("AgrC/IhajAIAFkwIEGJjg");
	this.shape_164.setTransform(129.2,148.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#7C574D").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_165.setTransform(17.5,148.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7C574D").s().p("AgrC/IhajAIAFkwIEGJjg");
	this.shape_166.setTransform(129.2,148.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#AE8372").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_167.setTransform(17.5,148.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#AE8372").s().p("AgiC7IhcjEIAAkaID9JHg");
	this.shape_168.setTransform(129,148.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#22211E").s().p("AguDBIhcjJIgBktIAKAAIENJrgAiDgKIBdDEIChBpIj+pHg");
	this.shape_169.setTransform(129.5,148.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C39574").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_170.setTransform(17.5,148.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C39574").s().p("AgiC7IhcjEIAAkaID9JHg");
	this.shape_171.setTransform(129,148.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E0B38E").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_172.setTransform(17.5,148.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E0B38E").s().p("AgiC7IhcjEIAAkaID9JHg");
	this.shape_173.setTransform(129,148.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E2BCA5").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_174.setTransform(17.5,148.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E2BCA5").s().p("AgiC7IhcjEIAAkaID9JHg");
	this.shape_175.setTransform(129,148.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F1CAB9").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_176.setTransform(17.5,148.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F1CAB9").s().p("AgiC7IhcjEIAAkaID9JHg");
	this.shape_177.setTransform(129,148.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FCECE3").s().p("AB/kjIAAEaIhbDEIiiBpg");
	this.shape_178.setTransform(17.5,148.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FCECE3").s().p("AgiC7IhcjEIAAkaID9JHg");
	this.shape_179.setTransform(129,148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]}).to({state:[{t:this.shape_166},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_165}]},1).to({state:[{t:this.shape_166},{t:this.shape_169},{t:this.shape_168},{t:this.shape_162},{t:this.shape_161},{t:this.shape_167}]},1).to({state:[{t:this.shape_166},{t:this.shape_169},{t:this.shape_171},{t:this.shape_162},{t:this.shape_161},{t:this.shape_170}]},1).to({state:[{t:this.shape_166},{t:this.shape_169},{t:this.shape_173},{t:this.shape_162},{t:this.shape_161},{t:this.shape_172}]},1).to({state:[{t:this.shape_166},{t:this.shape_169},{t:this.shape_175},{t:this.shape_162},{t:this.shape_161},{t:this.shape_174}]},1).to({state:[{t:this.shape_166},{t:this.shape_169},{t:this.shape_177},{t:this.shape_162},{t:this.shape_161},{t:this.shape_176}]},1).to({state:[{t:this.shape_166},{t:this.shape_169},{t:this.shape_179},{t:this.shape_162},{t:this.shape_161},{t:this.shape_178}]},1).wait(1));

	// flash0.ai
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#262626").s().p("AAVDTIgDjOIgkAAIAADOIlVAAIAAmlILPAAIAAGlgAAcgDIADDMIE/AAIAAmRIq7AAIAAGRIFBAAIAAjMg");
	this.shape_180.setTransform(73.7,195);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F2F2F2").s().p("AAeDLIgFjLIgwAAIAADLIlLABIAAmXILFAAIAAGXg");
	this.shape_181.setTransform(73.2,195.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#7C574D").s().p("AAVDTIgDjOIgkAAIAADOIlVAAIAAmlILPAAIAAGlgAAcgDIADDMIE/AAIAAmRIq7AAIAAGRIFBAAIAAjMg");
	this.shape_182.setTransform(73.7,195);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#7C574D").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_183.setTransform(73.2,195.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#AE8372").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_184.setTransform(73.2,195.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C39574").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_185.setTransform(73.2,195.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E0B38E").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_186.setTransform(73.2,195.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E2BCA5").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_187.setTransform(73.2,195.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F1CAB9").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_188.setTransform(73.2,195.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FCECE3").s().p("AAeDLIgFjLIgwAAIAADLIlKABIAAmXILEAAIAAGXg");
	this.shape_189.setTransform(73.2,195.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180}]}).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_180}]},1).to({state:[{t:this.shape_184},{t:this.shape_182},{t:this.shape_180}]},1).to({state:[{t:this.shape_185},{t:this.shape_182},{t:this.shape_180}]},1).to({state:[{t:this.shape_186},{t:this.shape_182},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_182},{t:this.shape_180}]},1).to({state:[{t:this.shape_188},{t:this.shape_182},{t:this.shape_180}]},1).to({state:[{t:this.shape_189},{t:this.shape_182},{t:this.shape_180}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.2,238.6);


// stage content:
(lib.desainPaper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
			var head = document.getElementsByTagName('head')[0];
			viewport = document.createElement('meta');
			viewport.setAttribute('name', 'viewport');
			head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
			var widthToHeight = stageWidth / stageHeight;
			var newWidth = window.innerWidth;
			var newHeight = window.innerHeight;
			var newWidthToHeight = newWidth / newHeight;
			//
			if (newWidthToHeight > widthToHeight) {
				newWidth = newHeight * widthToHeight;
				page_canvas.style.height = newHeight + "px";
				page_canvas.style.width = newWidth + "px";
			} else {
				newHeight = newWidth / widthToHeight;
				page_canvas.style.height = newHeight + "px";
				page_canvas.style.width = newWidth + "px";
			}
			scale = newWidthToHeight / widthToHeight;
			stage.width = newWidth;
			stage.height = newHeight;
			page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
			page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
			onResize();
		}
		
		onResize();
		namaKulit = "";
		this.skin1.addEventListener("click", skin1Btn.bind(this));
		this.skin2.addEventListener("click", skin2Btn.bind(this));
		this.skin3.addEventListener("click", skin3Btn.bind(this));
		this.skin4.addEventListener("click", skin4Btn.bind(this));
		this.skin5.addEventListener("click", skin5Btn.bind(this));
		this.skin6.addEventListener("click", skin6Btn.bind(this));
		this.skin7.addEventListener("click", skin7Btn.bind(this));
		function skin1Btn(event) {
			this.mc_character.gotoAndStop('skin1');
			namaKulit = "skin1";
		}
		
		function skin2Btn(event) {
			this.mc_character.gotoAndStop('skin2');
			namaKulit = "skin2";
		}
		
		function skin3Btn(event) {
			this.mc_character.gotoAndStop('skin3');
			namaKulit = "skin3";
		}
		
		function skin4Btn(event) {
			this.mc_character.gotoAndStop('skin4');
			namaKulit = "skin4";
		}
		
		function skin5Btn(event) {
			this.mc_character.gotoAndStop('skin5');
			namaKulit = "skin5";
		}
		
		function skin6Btn(event) {
			this.mc_character.gotoAndStop('skin6');
			namaKulit = "skin6";
		}
		
		function skin7Btn(event) {
			this.mc_character.gotoAndStop('skin7');
			namaKulit = "skin7";
		}
		//panel kiri
		var rambut = new lib.mc_panelRambut();
		var mata = new lib.mc_panelMata();
		var hidung = new lib.mc_panelHidung();
		var alis = new lib.mc_panelAlis();
		var mulut = new lib.mc_panelMulut();
		//panel kanan
		var baju = new lib.mc_panelBaju();
		var celana = new lib.mc_panelCelana();
		var sepatu = new lib.mc_panelSepatu();
		var kacamata = new lib.mc_panelKacamata();
		var topi = new lib.mc_panelTopi();
		//stage canvas
		stage.addChild(rambut, baju);
		rambut.x = 107;
		rambut.y = 6;
		baju.x = 901, 5;
		baju.y = 5, 15;
		
		
		//panel kiri
		this.btn_rambut.addEventListener("click", panelRambutShow.bind(this));
		this.btn_mata.addEventListener("click", panelMataShow.bind(this));
		this.btn_hidung.addEventListener("click", panelHidungShow.bind(this));
		this.btn_mulut.addEventListener("click", panelMulutShow.bind(this));
		this.btn_alis.addEventListener("click", panelAlisShow.bind(this));
		//panel kanan
		this.btn_baju.addEventListener("click", panelBajuShow.bind(this));
		this.btn_celana.addEventListener("click", panelCelanaShow.bind(this));
		this.btn_sepatu.addEventListener("click", panelSepatuShow.bind(this));
		this.btn_kacamata.addEventListener("click", panelKacamataShow.bind(this));
		this.btn_topi.addEventListener("click", panelTopiShow.bind(this));
		
		//panel kiri
		function panelRambutShow(event) {
			stage.addChild(rambut);
			stage.removeChild(mata, hidung, mulut, alis);
			rambut.x = 107;
			rambut.y = 6;
		}
		function panelMataShow(event) {
			stage.addChild(mata);
			stage.removeChild(rambut, hidung, mulut, alis);
			mata.x = 107;
			mata.y = 6;
		}
		function panelHidungShow(event) {
			stage.addChild(hidung);
			stage.removeChild(rambut, mata, mulut, alis);
			hidung.x = 107;
			hidung.y = 6;
		}
		function panelMulutShow(event) {
			stage.addChild(mulut);
			stage.removeChild(rambut, hidung, mata, alis);
			mulut.x = 107;
			mulut.y = 6;
		}
		function panelAlisShow(event) {
			stage.addChild(alis);
			stage.removeChild(rambut, hidung, mulut, mata);
			alis.x = 107;
			alis.y = 6;
		}
		
		//panel kanan
		function panelBajuShow(event) {
			stage.addChild(baju);
			stage.removeChild(celana, sepatu, kacamata, topi);
			baju.x = 901, 5;
			baju.y = 5, 15;
		}
		function panelCelanaShow(event) {
			stage.addChild(celana);
			stage.removeChild(baju, sepatu, kacamata, topi);
			celana.x = 901, 5;
			celana.y = 5, 15;
		}
		function panelSepatuShow(event) {
			stage.addChild(sepatu);
			stage.removeChild(celana, baju, kacamata, topi);
			sepatu.x = 901, 5;
			sepatu.y = 5, 15;
		}
		function panelKacamataShow(event) {
			stage.addChild(kacamata);
			stage.removeChild(celana, sepatu, baju, topi);
			kacamata.x = 901, 5;
			kacamata.y = 5, 15;
		}
		function panelTopiShow(event) {
			stage.addChild(topi);
			stage.removeChild(celana, sepatu, kacamata, baju);
			topi.x = 901, 5;
			topi.y = 5, 15;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// char
	this.mc_character = new lib.mc_character();
	this.mc_character.setTransform(621.9,167.4,1,1,0,0,0,71.6,58.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_character).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape.setTransform(1092,321.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_1.setTransform(1017,321.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_2.setTransform(943,321.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_3.setTransform(1092,251.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_4.setTransform(1017,251.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_5.setTransform(943,251.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_6.setTransform(1092,181.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_7.setTransform(1017,181.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_8.setTransform(943,181.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_9.setTransform(1092,111.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_10.setTransform(1017,111.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_11.setTransform(943,111.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_12.setTransform(1092,41.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_13.setTransform(1017,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_14.setTransform(943,41.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AyCblMAAAg3IMAkFAAAMAAAA3Ig");
	this.shape_15.setTransform(1017,181.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_16.setTransform(221.5,322);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_17.setTransform(147.5,322);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_18.setTransform(221.5,252);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_19.setTransform(147.5,252);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_20.setTransform(221.5,182);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_21.setTransform(147.5,182);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_22.setTransform(221.5,112);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_23.setTransform(147.5,112);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKwAAIAAJ+g");
	this.shape_24.setTransform(221.5,42);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D3D3D3").s().p("AlXFAIAAp/IKvAAIAAJ/g");
	this.shape_25.setTransform(147.5,42);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AsFblMAAAg3IIYMAAMAAAA3Ig");
	this.shape_26.setTransform(184.5,182.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgqoAbuMAAAg3bMBVRAAAMAAAA3bg");
	this.shape_27.setTransform(615.2,183.5);

	this.mc_RpanelBaju = new lib.mc_panelBaju();
	this.mc_RpanelBaju.setTransform(1017,181.7,1,1,0,0,0,115.5,176.5);

	this.skin7 = new lib.btn_skin7();
	this.skin7.setTransform(301.7,283,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin7, 0, 1, 1);

	this.skin6 = new lib.btn_skin6();
	this.skin6.setTransform(301.7,241.2,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin6, 0, 1, 1);

	this.skin5 = new lib.btn_skin5();
	this.skin5.setTransform(301.7,200,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin5, 0, 1, 1);

	this.skin4 = new lib.btn_skin4();
	this.skin4.setTransform(301.7,158,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin4, 0, 1, 1);

	this.skin3 = new lib.btn_skin3();
	this.skin3.setTransform(301.7,115,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin3, 0, 1, 1);

	this.skin2 = new lib.btn_skin2();
	this.skin2.setTransform(301.7,72,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin2, 0, 1, 1);

	this.skin1 = new lib.btn_skin1();
	this.skin1.setTransform(301.7,29,1,1,0,0,0,22.5,19);
	new cjs.ButtonHelper(this.skin1, 0, 1, 1);

	this.btn_kacamata = new lib.btn_kacamata();
	this.btn_kacamata.setTransform(1181.7,322,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_kacamata, 0, 1, 2);

	this.btn_topi = new lib.btn_topi();
	this.btn_topi.setTransform(1181.7,252,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_topi, 0, 1, 2);

	this.btn_sepatu = new lib.btn_sepatu();
	this.btn_sepatu.setTransform(1181.7,182,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_sepatu, 0, 1, 2);

	this.btn_celana = new lib.btn_celana();
	this.btn_celana.setTransform(1181.7,113,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_celana, 0, 1, 2);

	this.btn_baju = new lib.btn_baju();
	this.btn_baju.setTransform(1144.2,10);
	new cjs.ButtonHelper(this.btn_baju, 0, 1, 2);

	this.btn_alis = new lib.btn_alis();
	this.btn_alis.setTransform(51.7,322,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_alis, 0, 1, 2);

	this.btn_mulut = new lib.btn_mulut();
	this.btn_mulut.setTransform(51.7,252,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_mulut, 0, 1, 2);

	this.btn_hidung = new lib.btn_hidung();
	this.btn_hidung.setTransform(51.7,182,1,1,0,0,0,37.5,32);
	new cjs.ButtonHelper(this.btn_hidung, 0, 1, 2);

	this.btn_mata = new lib.btn_mata();
	this.btn_mata.setTransform(14.2,80);
	new cjs.ButtonHelper(this.btn_mata, 0, 1, 2);

	this.btn_rambut = new lib.btn_rambut();
	this.btn_rambut.setTransform(14.2,10);
	new cjs.ButtonHelper(this.btn_rambut, 0, 1, 2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkIXbMAAAgu1IIQAAMAAAAu1g");
	this.shape_28.setTransform(301.7,156);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AmeblMAAAg3IIM9AAMAAAA3Ig");
	this.shape_29.setTransform(1181.7,182.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AmnblMAAAg3IINPAAMAAAA3Ig");
	this.shape_30.setTransform(51.7,181.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7A7979").s().p("EhgJAcrMAAAg5VMDATAAAMAAAA5Vg");
	this.shape_31.setTransform(615.5,183.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.btn_rambut},{t:this.btn_mata},{t:this.btn_hidung},{t:this.btn_mulut},{t:this.btn_alis},{t:this.btn_baju},{t:this.btn_celana},{t:this.btn_sepatu},{t:this.btn_topi},{t:this.btn_kacamata},{t:this.skin1},{t:this.skin2},{t:this.skin3},{t:this.skin4},{t:this.skin5},{t:this.skin6},{t:this.skin7},{t:this.mc_RpanelBaju},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(615.5,183.5,1231,367);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;