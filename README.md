# LESS QUERY
[![Build Status](https://travis-ci.com/dasx10/less-query.svg?branch=master)](https://travis-ci.com/dasx10/less-query)
----
**Modified approach to responsive layout**
----

<nav id="nav">
	<ul>
		<li>
			<a href="#install">Install</a>
		</li>
		<li>
			<a href="#use">Use</a>
		</li>
		<li>
			<a href="#example">Example</a>
		</li>
		<li>
			<a href="#standard-grid-system">Standard grid system</a>
		</li>
		<li>
			<a href="#overriding-standard-variables">Overriding standard variables</a>
		</li>
	</ul>
</nav>

---
## Install
```
npm install -D less-query
```

## Use
set the entry point to your file

```
@import './node_modules/less-query/style.less';
```

---

## Example

<details>
	<summary>Input</summary>

	.grid{
		.row;
		&__col{
			.col(12, sm, 6, md, 4, lg, 3);
		}
	}
</details>

<details>
	<summary>Output</summary>

	.grid {
		margin-left: -15px;
		margin-right: -15px;
		display: flex;
		flex-flow: row wrap;
	}

	.grid__col {
		word-wrap: break-word;
		box-sizing: border-box;
		margin-left: 15px;
		margin-right: 15px;
	}

	@media (max-width: 720px) {
		.grid__col {
			width: calc(100% - 30px);
		}
	}

	@media (min-width: 720px) and (max-width: 960px) {
		.grid__col {
			width: calc(50% - 30px);
		}
	}

	@media (min-width: 960px) and (max-width: 1140px) {
		.grid__col {
			width: calc(33.333333333333336% - 30px);
		}
	}

	@media (min-width: 1140px) {
		.grid__col {
			width: calc(25% - 30px);
		}
	}
</details>

---

## Standard grid system
| short name | break point | description
|:---|:---|:---
| xh         | 1680px      | extra huge
| hu         | 1530px      | huge
| xl         | 1320px      | extra large
| lg         | 1140px      | large
| md         | 960px       | medium
| sm         | 720px       | small
| xs         | 540px       | extra small
| ti         | 430px       | tiny
| xt         | 320px       | extra tiny



| columns                | offset 	  | container
|:---|:---|:---
| 12                	 | 2em (32px) | 1680px

<a href="#overriding-standard-variables">Overriding this variables</a>

### Grid system mixin

| name mixin |<a href="#position">-position</a>| input   | grid  | decription
|:---|:---|:---|:---|:---
| row        |			   					  | keyword | true  |
| col        |			   					  | number  | true  |
| col-count  |			   					  | number  | false | overrides the default column count
| mq         |			   					  | mixin   | true  | media width builder
| to         |			   					  | mixin   | true  | media max width only
| from       |			   					  | mixin   | true  | media min width only
| mqh        |			   					  | mixin   | true  | media height builder
| container  |			   					  | number  | true  | max size (container)
| wrp        |			   					  | number  | true  | padding max size (container)

<details id="grid-s-mix">
	<summary>Example grid system mixin</summary>

	.mq(xs, { .p(1px); color:red }, 1200px, .m(2px));

	/*
		@media (min-width: 540px) and (max-width: 1200px) {
			.class-grid {
				padding: 1px;
				color: red;
			}
		}

		@media (min-width: 1200px) {
			.class-grid {
				margin: 2px;
			}
		}
	*/
</details>

Shift mixin
| mixin | input  |<a href="#position">position</a>| output | grid | description
|:---|:---|:---|:---|:---|:---
| m     | number | r l t b x y | margin             | true |
| p     | number | r l t b x y | padding            | true |

<details id="ex-shift">
	<summary>Example mixin shift mixin</summary>

	.m(2px); // margin: 2px;
	.p(8px); // padding: 8px;

	.shift(2px); // margin: 2px; padding: 2px;

	.out(10px); // margin: -10px; padding: 10px;
</details>

<details>
	<summary>Example mixin with prefix</summary>

	.pt(10px); // padding-top: 10px;
	.pb(10px); // padding-bottom: 10px;
	.pl(10px); // padding-left: 10px;
	.pr(10px); // padding-right: 10px;
</details>

<details>
	<summary>Example mixin with grid</summary>

	.class{
		.px(1px, xs, 2px, sm, 3px);
	}

	/*
		@media (max-width: 540px) {
			.class {
				padding-left: 1px;
				padding-right: 1px;
			}
		}

		@media (min-width: 540px) and (max-width: 720px) {
			.class {
				padding-left: 2px;
				padding-right: 2px;
			}
		}

		@media (min-width: 720px) {
			.class {
				padding-left: 3px;
				padding-right: 3px;
			}
		}
	*/
</details>

### Short mixin
<abbr>(emmet type)</abbr>

| example name | post prefix      | output     | grid
|:---|:---|:---|:---
| t            | a d i s t v      | text       | true
| f            | s z w f          | font       | true
| w            | b s w            | word       | true
| fx           | b d f g s w      | flex       | true
| b            | sh z             | box        | true
| bg           | a cl c i o p r z | background | true

Content mixin
| example name | post prefix | output  | grid
|:---|:---|:---|:---
| j            | c s i       | justify | true
| a            | c s i       | align   | true

| post prefix | output
|:---|:---
| c           | content
| s           | self
| i           | item

example
```
.tt(uppercase);
.ai(center);
```
```
text-transform:uppercase;
align-items:center;
```

Border
| mixin | input 			 |<a href="#position">position</a>| post prefix | output | grid
|:---|:---|:---|:---|:---|:---
| bd    | number style color | r l t b x y 					  | w s c       | border | true

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


### Standard mixin
| mixin | input   | output         | grid
|:---|:---|:---|:---
| w     | number  | width          | true
| h     | number  | height         | true
| mw    | number  | max-width      | true
| mh    | number  | max-height     | true
| miw   | number  | min-width      | true
| mih   | number  | min-height     | true
| lh    | number  | line-height    | true
| od    | number  | order          | true
| ls    | number  | letter-spacing | true
| d     | keyword | display        | true
| rz    | keyword | resize         | true
| va    | keyword | vertical-align | true
| fx    | keyword | flex           | true
| cp    | keyword | clip           | true
| f     | keyword | font           | true


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
| mixin  | input  | output       | grid
|:---|:---|:---|:---
| a		 | number | all position | true
| r		 | number | right        | true
| l		 | number | left         | true
| t		 | number | top          | true
| b		 | number | bottom       | true

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

### post prefix
| prefix | input   | output
|:---|:---|:---
| a      | keyword | align
| d      | keyword | decoration
| i      | number  | indent
| s      | keyword | style
| t      | keyword | transform
| v      | number  | overflow

<details>
	<summary>Example</summary>

	.td(none); 	 	 // text-decoration: none;
	.ta(center); 	 // text-align: center;
	.tt(lower-case); // text-transform: lower-case;
</details>

---
### any mixin

| name                    | input  or type                    | output                | grid system
|:---|:---|:---|:---
| pxrt                    |                                   | <a href="#pxrt">Pixel ratio</a>| false
| reset                   |                                   | normilize css         | false
| box                     | number                            | width + height        | true
| mbox                    | number                            | max width and height  | true
| mibox                   | number                            | min width and height  | true
| triangle-t              | number                            | triangle              | false
| triangle-b              | number                            | triangle              | false
| triangle-l              | number                            | triangle              | false
| triangle-r              | number                            | triangle              | false
| triangle-rt             | number                            | triangle              | false
| triangle-rb             | number                            | triangle              | false
| round                   | number                            | border-radius:50%     | false
| circle                  | number                            | circle                | false
| elipse                  | number                            | circle                | false


| mixin | input  |<a href="#position">-position</a>| output | grid | description
|:---|:---|:---|:---|:---|:---
| shift	| number | r l t b x y | margin and padding | true | Divides space evenly
| out 	| number | r l t b x y | margin and padding | true | Creates a tension effect

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

<details>
	<summary>Example shift</summary>

	.shift-t(5px); // padding-top: 5px; margin-top: 5px;
	.shift-b(5px); // padding-bottom: 5px; margin-bottom: 5px;
</details>

---
## Functions

### Flexible size function

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

If you need dynamic offset. You can also set them in your settings file.
Variable offsets will be automatically inserted into the column system.

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
<details>

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
<details>

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
<details>

---

***If you find a bug or have suggestions for improving the system, i will be glad to your feedback.***
