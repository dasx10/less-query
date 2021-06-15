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
@@include('./mix.flex.html')

@@include('./mix.align.html')
@@include('./mix.justify.html')

@@include('./mix.box.html')
@@include('./mix.margin.html')
@@include('./mix.padding.html')
@@include('./mix.width.html')
@@include('./mix.height.html')
@@include('./mix.position.html')
@@include('./mix.text.html')
@@include('./mix.font.html')
@@include('./mix.word.html')
@@include('./mix.background.html')
@@include('./mix.border.html')
@@include('./mix.any.html')

Go back to <a href="#mixins">mixins</a> | <a href="#navigation">navigation</a>

## Experimental mixins

@@include('./ex.mix.even.html')


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

## Examples
@@include('./example.use-grid.html')
@@include('./example.use-multi-line.html')
---

## Recommendation

@@include('./recomendation.use.html')
@@include('./recomendation.fail.html')
@@include('./recomendation-1.html')
@@include('./recomendation-2.html')
@@include('./recomendation-3.html')
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
