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

Go to <a href="#overriding-standard-variables">overriding this variables</a>

## Mixins

@@include('./base/grid-system.html')

@@include('./base/grid.html')
@@include('./base/flex.html')

@@include('./base/align.html')
@@include('./base/justify.html')

@@include('./base/box.html')
@@include('./base/margin.html')
@@include('./base/padding.html')
@@include('./base/width.html')
@@include('./base/height.html')
@@include('./base/position.html')
@@include('./base/text.html')
@@include('./base/font.html')
@@include('./base/word.html')
@@include('./base/background.html')
@@include('./base/border.html')
@@include('./base/any.html')

Go back to <a href="#mixins">mixins</a> | <a href="#navigation">navigation</a>

## Experimental mixins

@@include('./test/size.html')
@@include('./test/even.html')
@@include('./test/triangle.html')
@@include('./test/shift.html')
@@include('./test/out.html')
@@include('./test/any.html')
@@include('./test/pxrt.html')


Go back to <a href="#mixins"> mixins</a> | <a href="#experimental-mixins">experimental mixins</a> | <a href="#navigation">navigation</a>

## Functions

@@include('./function/flexible.html')
@@include('./function/converter.html')
@@include('./function/console.html')

Go back to <a href="#functions">functions</a> | <a href="#navigation">navigation</a>

## Examples

@@include('./example/use-grid.html')
@@include('./example/use-multi-line.html')

## Recommendation

@@include('./recomendation.use.html')
@@include('./recomendation.fail.html')
@@include('./recomendation-1.html')
@@include('./recomendation-2.html')
@@include('./recomendation-3.html')

<p>Go back to <a href="#recommendation">recommendation</a> | <a href="#navigation">navigation</a></p>
<p>Go to <a href="#example">example</a></p>

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
