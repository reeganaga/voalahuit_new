(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.desainWooden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(3).p("AJ2AAQAAEFi4C4Qi5C5kFAAQkEAAi4i5Qi5i4AAkFQAAkEC5i4QC4i5EEAAQEFAAC5C5QC4C4AAEEg");
	this.shape.setTransform(649.4,119.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDEDED").s().p("Am8G9Qi5i4AAkFQAAkEC5i4QC4i5EEAAQEFAAC5C5QC4C4AAEEQAAEFi4C4Qi5C5kFAAQkEAAi4i5g");
	this.shape_1.setTransform(649.4,119.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(4).p("AK/ETQAAG3jOC2QilCTlMAAQlLAAiliTQjOi2AAm3QAAjhBTj3QBKjbB9jMQBxi7B4h2QB1h1BGAAQBHAAB1B1QB4B2ByC7QB9DMBJDbQBTD3AADhg");
	this.shape_2.setTransform(647.4,244.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8D8D8").s().p("AnwOAQjPi2ABm4QAAjfBTj4QBKjbB9jNQBwi5B5h3QB2h1BFAAQBHAAB1B1QB4B3ByC5QB8DNBKDbQBTD4AADfQAAG4jOC2QilCTlMAAQlLAAiliTg");
	this.shape_3.setTransform(647.4,244.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3735").s().p("ABeBWQgegIgWgsIgXg2QgEgLgPAAQgOAAgFALIgWA2QgXAsgdAHQgjAJgkgDQgkgEgQgOQgPgNgKgjQgJgZgCgbQgFgQgMACIgBgkIAvgHQA1gHAaAAQAZABAqAIIAwAKIAdADIAdgDIAxgKQAqgIAZgBQAqgBBUAPIgCAkQgHgBgGAHIgEAIQgCAbgIAZQgKAjgPANQgQAOgkAEIgVABQgZAAgZgGgABAhDQgWAJgEAZQgEAZAQAeQAPAhAXAOQAYAPAoAAQAjAAATgOQAKgIAJgSQAJgRADgdQADgngRgRQgNgOgbgEQgNgDggAAIgFAAQglAAggAMgAiJhPQggAAgNADQgbAEgNAOQgQARADAnQACAdAJARQAKATAJAHQATAOAjAAQAoAAAYgPQAXgOAQghQAPgegEgZQgEgZgWgJQgfgMglAAIgGAAg");
	this.shape_4.setTransform(1208.3,202.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A3735").s().p("AiHBUQgEi0AGhFQADgnAGgeIAGgWIB2ACQApAABOgCIAFAWQAHAeADAnQAFBFgDC0IgECtQgIABhmgDIgBinQgBgmgDgrQgCgogCgJQgDgHgDgkIgDgjIgHAAQgFBCgDAMQgDAJgDAoIgDBTIgBCmIhuABg");
	this.shape_5.setTransform(1209.2,131.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A3735").s().p("AhnDSQgMAAgHgLQgHgKAAgNIAAizIgyAdQgIAGgKgEQgKgCgFgKIg1hnQgFgJADgLQAEgKAIgFICIhWIAAAAIAxAAIgBAEQAAAdAUAVQAUAUAcAAQAaAAAUgUQAUgVAAgdIAAgEIBMAAIAAABIB5BVQAIAFABAKQABAKgEAKIg6BnQgFAKgHACQgIADgIgFIgpgdIAACzQAAAMgQALQgPALgOAAg");
	this.shape_6.setTransform(1208.5,58);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3735").s().p("AgvB8QgpgHgdgdQg0g2gegXQgIgGgYgLIgWgNIAggGQAggJBAgyQA5grAYABQAXABAOAYQAHAMABALQACgLAHgMQANgYAXgBQAYgBA5ArQBAAyAfAJQANAEATACIgWANQgYALgIAGQgYASg5A7QgdAdgqAHQgOADgiAAQghAAgOgDgAhggGQANAEAgANQAfANAYAAQAaAAAcgMIAngRIAogQIkJAAg");
	this.shape_7.setTransform(78,200.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A3735").s().p("AiyBFQgcgVgYgZIgSgWQAbghAtgiQBbhGBagBQBcABBVBGQArAiAYAhQgYAigrAiQhWBEheABQhcgBhYhEgABigzQAOAYAAAbQAAAcgQAZQgPAZgaAOQAzgOAzgoIAoglQgOgPgYgUQgxgogxgPQAXAOAOAYgAg0BcQgagOgPgZQgPgZAAgcQAAgZANgXQAMgXAVgPQgvARgwAmQgXASgPAOIApAkQAzAoAzAPIAAAAgAhJg7QgLAKAAAPQAAAPALALQALAJAPAAQAPAAALgJQALgLAAgPQAAgPgLgKQgLgMgPAAQgPAAgLAMg");
	this.shape_8.setTransform(76.5,129.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A3735").s().p("Aj8CCQgWhCAQgkQAFgLAJgHIAHgFQgFgDgJABQgRABgSAUQAJgUARgYQAggzAkgZQgJgBgKgFQgWgJgJgQIAkgBQAngDARgFQgLgDgMgIQgZgQgJgaIAhACQAuAAA+gMQBVgRAqAHQA6AKA9A5IAMgOQARgNAaAEQgJAHgHAIQgOARAJAJIAbAcQAcAfAHAUQALAiAAAPQgBAkgXBPQgLAngTAdQgKAOgHAHQgIgZgIgiQgQhCAAgoQgeAPg+AHQh6AQiiggIgGA8QgIBDgNAkQgJgLgYhHg");
	this.shape_9.setTransform(75.7,58.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3D3D3").s().p("AlXE/IAAp9IKvAAIAAJ9g");
	this.shape_10.setTransform(1119,339);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKvAAIAAJ+g");
	this.shape_11.setTransform(1119,269);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKvAAIAAJ+g");
	this.shape_12.setTransform(1119,199);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3D3D3").s().p("AlXFAIAAp+IKvAAIAAJ+g");
	this.shape_13.setTransform(1119,129);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D3D3").s().p("AlXFAIAAp+IKvAAIAAJ+g");
	this.shape_14.setTransform(1119,59);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3D3D3").s().p("AlYE/IAAp9IKxAAIAAJ9g");
	this.shape_15.setTransform(1044,339);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D3D3").s().p("AlYE/IAAp9IKxAAIAAJ9g");
	this.shape_16.setTransform(970,339);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape_17.setTransform(1044,269);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape_18.setTransform(970,269);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape_19.setTransform(1044,199);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape_20.setTransform(970,199);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3D3D3").s().p("AlYFAIAAp+IKxAAIAAJ+g");
	this.shape_21.setTransform(1044,129);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D3D3D3").s().p("AlYFAIAAp+IKxAAIAAJ+g");
	this.shape_22.setTransform(970,129);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3D3D3").s().p("AlYFAIAAp+IKxAAIAAJ+g");
	this.shape_23.setTransform(1044,59);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D3D3D3").s().p("AlYFAIAAp+IKxAAIAAJ+g");
	this.shape_24.setTransform(970,59);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D3D3D3").s().p("AlXE/IAAp9IKvAAIAAJ9g");
	this.shape_25.setTransform(246,339);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D3D3D3").s().p("AlYE/IAAp9IKxAAIAAJ9g");
	this.shape_26.setTransform(172,339);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKvAAIAAJ+g");
	this.shape_27.setTransform(246,269);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape_28.setTransform(172,269);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D3D3D3").s().p("AlXE/IAAp+IKvAAIAAJ+g");
	this.shape_29.setTransform(246,199);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D3D3D3").s().p("AlYE/IAAp+IKxAAIAAJ+g");
	this.shape_30.setTransform(172,199);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D3D3D3").s().p("AlXFAIAAp+IKvAAIAAJ+g");
	this.shape_31.setTransform(246,129);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D3D3D3").s().p("AlYFAIAAp+IKxAAIAAJ+g");
	this.shape_32.setTransform(172,129);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AE8372").s().p("AjfC+IAAl6IHAAAIAAF6g");
	this.shape_33.setTransform(327,89);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8D9C7").s().p("AjfC9IAAl6IHAAAIAAF6g");
	this.shape_34.setTransform(327,300);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1CAB9").s().p("AjfC+IAAl6IHAAAIAAF6g");
	this.shape_35.setTransform(327,260);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2BCA5").s().p("AjfC9IAAl5IHAAAIAAF5g");
	this.shape_36.setTransform(327,217);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E0B38E").s().p("AjfC9IAAl6IHAAAIAAF6g");
	this.shape_37.setTransform(327,175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C39574").s().p("AjfC+IAAl7IHAAAIAAF7g");
	this.shape_38.setTransform(327,132);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C574D").s().p("AjfC+IAAl6IHAAAIAAF6g");
	this.shape_39.setTransform(327,46);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D3D3D3").s().p("Al2E/IAAp9ILsAAIAAJ9g");
	this.shape_40.setTransform(1207,339);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILsAAIAAJ+g");
	this.shape_41.setTransform(1207,269);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILsAAIAAJ+g");
	this.shape_42.setTransform(1207,199);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D3D3D3").s().p("Al2FAIAAp+ILsAAIAAJ+g");
	this.shape_43.setTransform(1207,130);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D3D3D3").s().p("Al2FAIAAp+ILsAAIAAJ+g");
	this.shape_44.setTransform(1207,59);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D3D3D3").s().p("Al2E/IAAp9ILtAAIAAJ9g");
	this.shape_45.setTransform(77,339);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILtAAIAAJ+g");
	this.shape_46.setTransform(77,269);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D3D3D3").s().p("Al2E/IAAp+ILtAAIAAJ+g");
	this.shape_47.setTransform(77,199);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D3D3D3").s().p("Al2FAIAAp+ILtAAIAAJ+g");
	this.shape_48.setTransform(77,129);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D3D3D3").s().p("AlXFAIAAp+IKvAAIAAJ+g");
	this.shape_49.setTransform(246,59);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D3D3D3").s().p("AlYFAIAAp+IKxAAIAAJ+g");
	this.shape_50.setTransform(172,59);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D3D3D3").s().p("Al2FAIAAp+ILtAAIAAJ+g");
	this.shape_51.setTransform(77,59);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("EgqoAbvMAAAg3dMBVSAAAMAAAA3dg");
	this.shape_52.setTransform(640.5,200.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AkIXcMAAAgu3IIQAAMAAAAu3g");
	this.shape_53.setTransform(327,173);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AyCblMAAAg3JMAkFAAAMAAAA3Jg");
	this.shape_54.setTransform(1043,199.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AmdblMAAAg3JIM8AAMAAAA3Jg");
	this.shape_55.setTransform(1207,199.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AsFblMAAAg3JIYMAAMAAAA3Jg");
	this.shape_56.setTransform(209,199.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AmnblMAAAg3JINPAAMAAAA3Jg");
	this.shape_57.setTransform(77,199.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7A7979").s().p("EhgJAcqMAAAg5TMDAUAAAMAAAA5Tg");
	this.shape_58.setTransform(640,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(664.5,217,1231,367);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;