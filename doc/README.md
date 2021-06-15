# LESS QUERY
[![Build Status](https://travis-ci.com/dasx10/less-query.svg?branch=master)](https://travis-ci.com/dasx10/less-query)
----
**Modified approach to responsive layout**
----

@@include('./nav.html')

@@include('./install.md')


## Standard grid system
@@include('./break.html')

@@include('./break.set.html')

<a href="#overriding-standard-variables">Overriding this variables</a>

## Mixins

@@include('./mix.grid-system.html')

@@include('./mix.grid.html')

@@include('./mix.margin.html')
@@include('./mix.padding.html')

<details>
	<summary>Example mixin with grid</summary>

	// input
	.class{
		.px(1px, xs, 2px, sm, 3px);
	}

	// output
	@media (min-width: 45em) {
		.class {
			padding-left: 3px;
			padding-right: 3px;
		}
	}

	@media (max-width: 33.75em) {
		.class {
			padding-left: 1px;
			padding-right: 1px;
		}
	}

	@media (min-width: 33.75em) and (max-width: 45em) {
		.class {
			padding-left: 2px;
			padding-right: 2px;
		}
	}
</details>

<details>
	<summary>Example multi line</summary>

	// input
	.shift {
		.mx(1px 2px);
		.my(10px 5px, sm, 8px);
	}

	// output
	.shift {
		margin-right: 1px;
		margin-left: 2px;
	}

	@media (min-width: 45em) {
		.shift {
			margin-top: 8px;
			margin-bottom: 8px;
		}
	}

	@media (max-width: 45em) {
		.shift {
			margin-top: 10px;
			margin-bottom: 5px;
		}
	}
</details>

<a href="#any-shift-mixin">example any shift mixin</a>

### Short mixin
<abbr>(emmet type)</abbr>

| example name 									   | post prefix      | output     | grid system |
|:---|:---|:---|:---
| <i title=".ta() .td() .ti ...">.t</i>            | <i title="align">a</i> <i title="decoration">d</i> <i title="indent">i</i> <i title="shadow">s</i> <i title="transform">t</i> <i title="overflow">v</i>      | text       | true |
| <i title=".f() .ff(). fz( ...">.f</i>            | <i title="style">s</i> <i title="size">z</i> <i title="weight">w</i> <i title="family">f</i>          | font       | true |
| <i title=".ww() .ws()">.w</i>           		   | <i title="break">b</i> <i title="spacing">s</i> <i title="wrap">w</i>            | word       | true |
| <i title=".fx() .fxd() ...">.fx</i>              | <i title="basis">b</i> <i title="decoration">d</i> <i title="flow">f</i> <i title="grow">g</i> <i title="shrink">s</i> <i title="wrap">w</i>      | flex       | true |
| <i title=".bz() .bsh()">.b</i>            	   | <i title="shadow">sh</i> <i title="sizing">z</i>             | box        | true |
| <i title=".bg() .bgc() ...">.bg</i>              | <i title="attachment">a</i> <i title="clip">cl</i> <i title="color">c</i> <i title="image">i</i> <i title="origin">o</i> <i title="position">p</i> <i title="repeat">r</i> <i title="size">z</i> | background | true |

<details>
	<summary>Example</summary>

	.tt(uppercase);  // text-transform:uppercase;
	.tt(lower-case); // text-transform: lower-case;
	.td(none); 	 	 // text-decoration: none;
	.ta(center); 	 // text-align: center;
	.ai(center); 	 // align-items:center;
	.fz(1em); 	     // font-size: 1em;
	.fxd(column);    // flex-direction: column;
	.fxw(wrap);      // flex-wrap: wrap;
	.bgc(red); 	     // background-color: red;
</details>

### Content mixin
| example name | example short name | post prefix | output  | grid system
|:---|:---|:---|:---|:---
| .justify     | .j            | <i title="content">c</i> <i title="self">s</i> <i title="item">i</i>       | justify 		  | true
| .align       | .a            | <i title="content">c</i> <i title="self">s</i> <i title="item">i</i>       | align   		  | true
| .even        | .e            | <i title="content">c</i> <i title="self">s</i> <i title="item">i</i>       | align + justify | true

post prefix
| c  | s  | i
|:---|:---|:---
| content | self | item

<details>
	<summary>Example</summary>

	.jc(center); // justify-content: center;
	.as(flex-start); // align-self: flex-start;

	.ec(center); // align-content: center; justify-content: center;
</details>

### Border
| mixin   | short | input 			 |<a href="#position">position</a>| post prefix | output | grid system
|:---|:---|:---|:---|:---|:---|:---
| .border | .bd    | number style color | <i title="right">r<i> <i title="left">l<i> <i title="top">t<i> <i title="bottom">b<i> x y | w s c       | border | true

<details>
	<summary>Example</summary>

	.bd(1px solid black); // border: 1px solid black;

	.bdxw(2px);

	/*
		border-left-width: 2px;
		border-right-width: 2px;
	*/

	.bdyc(red);

	/*
		border-top-color: red;
		border-bottom-color: red;
	*/

</details>

### Border radius
| mixin 		 | short  | input  | <a href="#position">-position</a> | grid system
|:---|:---|:---|:---|:---
| .border-radius | .bd-rs | number | t r b l tr tl br bl 				 | true

<details>
	<summary>
		Example
	</summary>

	// input
	.bd-rs(3px);
	.bd-t-rs(50%);
	.bd-br-rs(1rem);

	// Output
	border-radius: 3px;
	border-top-left-radius: 50%;
  	border-top-right-radius: 50%;
  	border-bottom-right-radius: 1rem;

</details>

### Standard mixin
| short  | input   | mixin         | grid system
|:---|:---|:---|:---
| .w     | number  | .width          | true
| .h     | number  | .height         | true
| .mw    | number  | .max-width      | true
| .mh    | number  | .max-height     | true
| .miw   | number  | .min-width      | true
| .mih   | number  | .min-height     | true
| .lh    | number  | .line-height    | true
| .od    | number  | .order          | true
| .ls    | number  | .letter-spacing | true
| .d     | <i title="none block inline flex grid table inline-...">keyword</i> | .display        | true
| .rz    | keyword | .resize         | true
| .va    | keyword | .vertical-align | true
| .fx    | keyword | .flex           | true
| .cp    | keyword | .clip           | true
| .f     | keyword | .font           | true


<details>
	<summary>Example standard mixin</summary>

	.class{
		.d(block, sm, flex);
	}
	/*
	@media (min-width: 720px) {
		.class {
			display: flex;
		}
	}

	@media (max-width: 720px) {
		.class {
			display: block;
		}
	}
	*/
</details>

### Position mixin
| mixin   | short  | input  | output       | grid system
|:---|:---|:---|:---|:---
|	      | .a	 | number or none | all position | true
|	      | .x	 | number or none | right + left | true
| .right  | .r	 | number or none | right        | true
| .left   | .l	 | number or none | left         | true
| 	      | .y	 | number or none | top + bottom | true
| .top	  | .t	 | number or none | top          | true
| .bottom | .b	 | number or none | bottom       | true

<details>
	<summary>Example</summary>

	.a(10px);

	// top: 10px;
	// bottom: 10px;
	// left: 10px;
	// right: 10px;


	.x(5px);

	// left: 5px;
	// right: 5px;

	.r(1%);  // right: 1%;
	.l(2px); // left: 2px;
	.t(1vw); // top: 1vw;
	.b(1em); // bottom: 1em;
</details>

---
## Prefix

### position

| l	 | r  |	t  | b	| x	 | y
|:---|:---|:---|:---|:---|:---
| left | right | top | bottom | left + right | top + bottom

| tl | tr | bl | br
|:---|:---|:---|:---
| top + left | top + right | bottom + left | bottom + right

<details>
	<summary>Example</summary>

	// no prefix
	.p(10px);  // padding: 10px;
	.m(auth);  // margin: auto;

	// with prefix
	.pt(10px); // padding-top: 10px;
	.pb(10px); // padding-bottom: 10px;
	.pl(10px); // padding-left: 10px;
	.pr(10px); // padding-right: 10px;

	.mx(auto); // margin-left: auto; margin-right: auto;
	.my(auto); // margin-top: auto; margin-bottom: auto;

</details>

---
### any mixin

| name                    | input  or type                    | output                | grid system
|:---|:---|:---|:---
| .pxrt                    |                                   | <a href="#pxrt">Pixel ratio</a>| false
| .reset                   |                                   | normalize css         | false
| .box                     | number                            | width + height        | true
| .mbox                    | number                            | max width and height  | true
| .mibox                   | number                            | min width and height  | true
| .triangle-t              | number                            | triangle              | false
| .triangle-b              | number                            | triangle              | false
| .triangle-l              | number                            | triangle              | false
| .triangle-r              | number                            | triangle              | false
| .triangle-rt             | number                            | triangle              | false
| .triangle-rb             | number                            | triangle              | false
| .round                   | number                            | border-radius:50%     | false
| .circle                  | number                            | circle                | false

<details id="pxrt">
	<summary><strong><big>Pixel Ratio Example</big></strong></summary>

	.pxrt(
		1, { background-image:url('1.webp') },
		2, { background-image:url('2.webp') },
		3, { background-image:url('3.webp') }
	);
	// 1x upload only 1.webp
	// retina 2x upload only 2.webp
	// retina 3x upload only 3.webp
</details>

<details>
	<summary>box example</summary>

	.box(10px); // width: 10px; height: 10px;
</details>

<details>
	<summary>circle example</summary>

	.circle(10px); //border-radius: 50%; width: 10px; height: 10px;
</details>

Any <a href="#shift-mixin" id="any-shift-mixin">shift mixin</a>
| mixin | input  |<a href="#position">-position</a>| output | grid system | description
|:---|:---|:---|:---|:---|:---
| .shift	| number | r l t b x y | margin and padding | true | Divides space evenly
| .out 	| number | r l t b x y | margin and padding | true | Creates a tension effect

<details>
	<summary>Example shift</summary>

	.shift-t(5px); // padding-top: 5px; margin-top: 5px;
	.shift-b(5px); // padding-bottom: 5px; margin-bottom: 5px;
</details>

<a href="#standard-grid-system">back to mixin</a> | <a href="#navigation">back to navigation<a>

---
## Functions

### Flexible size functions

|input| params | description
|:---|:---|:---
|fw  |mobSize PCSize mobWidthLayout PCWidthLayout                               |from the width
|fh  |mobSize PCSize mobHeightLayout PCHeightLayout                             |from the height
|fmin|mobSize PCSize mobSizeLayout PCSizeLayout                                 |from the minScreen
|fmax|mobSize PCSize mobSizeLayout PCSizeLayout                                 |from the maxScreen
|fd  |mobSize PCSize mobWidthLayout mobHeightLayout PCWidthLayout PCHeightLayout|from the screen

<details>
	<summary>Example</summary>

	// flexible font
	.fz(fw(12px, 20px)); // -> font-size: calc(10.4px + 0.5vw);
</details>

|mobWidthLayout|mobHeightLayout|PCWidthLayout|PCHeightLayout
|:---|:---|:---|:---
|320px|240px|1920px|1080px

### Converter functions

|input  | params            | description
|:---|:---|:---
|toEm   | px default_em     | convert pixel to em
|toRem  | px default_rem    | convert pixel to rem
|toP    | px default_layout | convert pixel to percent
|toW    | px default_layout | convert pixel to viewport width
|toH    | px default_layout | convert pixel to viewport height
|toM    | px default_layout | convert pixel to viewport max size
|toMi   | px default_layout | convert pixel to viewport min size
|toPx   | value px          | convert percent to pixel

<details>
	<summary>
		example
	</summary>

	toEm(16); 		   // 1em;
	toPx(10%,1920px);  // 192px;
	toP(20px, 1920px); // 1.0416666666666665%;

	.pt(toEm(16)); 	   // padding-top: 1em;
</details>

### Console functions

| function name | input or type
|:---|:---
| console-log   | console.log
| console-error | console.error "red output"
| console-dir   | console.dir

<a href="#functions">back to functions</a> | <a href="#navigation">back to navigation<a>

---
## Recommendation

<details>
	<summary>if the property is still missing, then you can create your own mix and use it like this</summary>

	.myMix(@params){
		.c(lighten(@params));
		.bgc(darken(@params));
	}

	.mq(
		sm,     .myMix(darkred),
		1280px, .myMix(#000)
	);
</details>

<details>
	<summary>How not recommended to use</summary>

	.mq(
		xs, .px(10px, sm, 20px),
		s,  .my(5px, md, 12px, lg, auto),
	);
</details>

<details>
	<summary>How to use it correctly <strong>(example #1)</strong></summary>

	.px(xs, 10px, sm, 20px);
	.my(sm, 5px, md, 12px, lg, auto);
</details>

<details>
	<summary>How to use it correctly <strong>(example #2)</strong></summary>

	.mq(
		xs, .px(10px),
		sm, .px(20px)
	);

	.mq(
		sm, .my(5px),
		md, .my(12px),
		lg, .my(auto)
	);
</details>

<details>
	<summary>How to use it correctly <strong>(example #3)</strong></summary>

	.mq(
		xs, .px(10px),
		sm, {
			.px(20px);
			.my(12px);
		},
		md, .my(12px),
		lg, .my(auto)
	);
</details>

<a href="#example">Back to example</a>

## Overriding standard variables
**These settings are optional, but you can change the default mixin behavior.**

<details>
	<summary><strong>Example of installation in the main file</strong></summary>
	<em>Create a file for variables. For example, at the root of the data.less directory. And register the file after registering the library.</em>

	@import './node_modules/less-query/style.less';
	@import './data.less';
</details>

<details>
	<summary><strong>Reassigning Variables <em>(example data.less file)</em></strong></summary>
	<em>Use parameters in your data.less file</em>

	// BREAK POINTS

	@breaks:{
		@xl : 1440px;
		@lg : 1200px;
		@md : 960px;
		@sm : 720px;
		@xs : 540px;
	}

	// ANY GRID

	@number-of-columns: 24;
	@width-wrapper : 1440px;

	// OFFSET

	@offset: 1em;
	@offset-one-side: @offset / 2;
	@offset-one-deny: @offset-one-side * -1;

	@offset-x: @offset;
	@offset-one-side-x:  @offset-x / 2;
	@offset-one-deny-x:  @offset-one-side-x * -1;

	@offset-left: @offset-x;
	@offset-one-side-left: @offset-left / 2;
	@offset-one-deny-left: @offset-one-side-left * -1;

	@offset-right: @offset-x;
	@offset-one-side-right: @offset-right / 2;
	@offset-one-deny-right: @offset-one-side-right * -1;

	@offset-y: @offset;
	@offset-one-side-y:  @offset-y / 2;
	@offset-one-deny-y:  @offset-one-side-y * -1;

	@offset-top: @offset-y;
	@offset-one-side-top: @offset-top / 2;
	@offset-one-deny-top: @offset-one-side-top * -1;

	@offset-bottom: @offset-y;
	@offset-one-side-bottom: @offset-bottom / 2;
	@offset-one-deny-bottom: @offset-one-side-bottom * -1;

	// SHIFT

	@default-margin: 		auto;
	@default-margin-x: 		@default-margin;
	@default-margin-left: 	@default-margin-x;
	@default-margin-right:  @default-margin-x;
	@default-margin-y: 		@default-margin;
	@default-margin-top: 	@default-margin-y;
	@default-margin-bottom: @default-margin-y;

	@default-padding: 		 auto;
	@default-padding-x: 	 @default-padding;
	@default-padding-left: 	 @default-padding-x;
	@default-padding-right:  @default-padding-x;
	@default-padding-y: 	 @default-padding;
	@default-padding-top: 	 @default-padding-y;
	@default-padding-bottom: @default-padding-y;
</details>

If you need dynamic offset. You can also set them in your <a href="#overriding-standard-variables" id="offsets-a">settings file</a>.
Variable offsets will be automatically inserted into the <a href="#standard-grid-system">column system</a>.

We strongly recommend using it as an exception.

If you want the same offsets on all sides. Then use

```
 @offset-var: my offset;

```
If you need different horizontal and vertical offset. Then use these options.

```
@offset-var-x: my offset x;
@offset-var-y: my offset y;
```

<details>
	<summary>Example: @offset-var: 1em;</summary>

	:root {
		--offset: 	1em;
		--offset-x: var(--offset);
		--offset-y: var(--offset);
		--offset-l: var(--offset-x);
		--offset-r: var(--offset-x);
		--offset-t: var(--offset-y);
		--offset-b: var(--offset-y);

		--offset-one-side:   calc(var(--offset) / 2);
		--offset-one-side-x: calc(var(--offset-x) / 2);
		--offset-one-side-y: calc(var(--offset-y) / 2);
		--offset-one-side-l: calc(var(--offset-x) / 2);
		--offset-one-side-r: calc(var(--offset-x) / 2);
		--offset-one-side-t: calc(var(--offset-y) / 2);
		--offset-one-side-b: calc(var(--offset-y) / 2);
	}
</details>

<details>
	<summary>Example: @offset-var-x: 1em;</summary>

	:root {
		--offset-x: 1em;
		--offset-l: var(--offset-x);
		--offset-r: var(--offset-x);
		--offset-one-side-l: calc(var(--offset-x) / 2);
		--offset-one-side-r: calc(var(--offset-x) / 2);
		--offset-one-side-x: calc(var(--offset-x) / 2);
	}
</details>

<details>
	<summary>Example: @offset-var-x: 1em; @offset-var-y: 2em;</summary>

	:root {
		--offset-x: 1em;
		--offset-l: var(--offset-x);
		--offset-r: var(--offset-x);
		--offset-one-side-l: calc(var(--offset-x) / 2);
		--offset-one-side-r: calc(var(--offset-x) / 2);
		--offset-one-side-x: calc(var(--offset-x) / 2);
		--offset-y: 2em;
		--offset-t: var(--offset-y);
		--offset-b: var(--offset-y);
		--offset-one-side-t: calc(var(--offset-y) / 2);
		--offset-one-side-b: calc(var(--offset-y) / 2);
		--offset-one-side-y: calc(var(--offset-y) / 2);
	}
</details>

<a href="#navigation">Go to navigation</a>

---

***If you find a bug or have suggestions for improving the system, i will be glad to your feedback.***
