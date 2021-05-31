# LESS QUERY
[![Build Status](https://travis-ci.com/dasx10/less-query.svg?branch=master)](https://travis-ci.com/dasx10/less-query)
----
**Modified approach to responsive layout**
----

<nav>
	<ul>
		<li>
			<a href="#install">Install</a>
		</li>
		<li>
			<a href="#use">Use</a>
		</li>
		<li>
			<a href="#overriding-standard-variables">Overriding standard variables</a>
		</li>
	</ul>
</nav>

## install
```
npm install -D less-query
```

## use
set the entry point to your file

```
@import './node_modules/less-query/style.less';
```

## example
```
.grid{
  .row;
  &__col{
    .col(12, sm, 6, md, 4, lg, 3);
  }
}
```
## output
```
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

```
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

| default                | parameters
|:---|:---
| columns                | 12
| offset                 | 30px
| wrapper                | 1680px

override the number of columns

To change values or set your own

example
```
@breaks:{
  @xl : 1440px;
  @lg : 1200px;
  @md : 960px;
  @sm : 720px;
  @xs : 540px;
}

@offset : 20px;
@number-of-columns: 24;
@width-wrapper : 1440px;

```

you can also change the number of columns for a layer
```
.col-count(24); // .col-count(@set_size, @col-count, @row-type);
```

you can override these parameters
```
node_modules/less-mixin/mixins/grid/_data.less
```

## wrapper
```
.wrp(1200px); // padding max size
```

## container
```
.container(1200px); // max size container
```

## Mixin

Grid system
| name mixin | post prefix | input   | grid  | decription
|:---|:---|:---|:---
| row        |			   | keyword | true  |
| col        |			   | number  | true  |
| col-count  |			   | number  | false | overrides the default column count
| col-offset | r l t b x y | number  | false | change default column margin
| row-offset | r l t b x y | number  | false | change default rows margin
| mq         |			   | mixin   | true  | media width builder
| to         |			   | mixin   | true  | media max width only
| from       |			   | mixin   | true  | media min width only
| mqh        |			   | mixin   | true  | media height builder

| post prefix | output
|:---|:---
| r           | right
| l           | left
| t           | top
| b           | bottom
| x           | left + right
| y           | bottom + top

example
```
.mq(xs, { .p(1px); color:red }, 1200px, .m(2px));
```
```
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
```

Shift mixin
| mixin | input  |<a href="#position">position</a>| output | grid | description
|:---|:---|:---|:---|:---|:---
| m     | number | r l t b x y | margin             | true |
| p     | number | r l t b x y | padding            | true |
| shift	| number | r l t b x y | margin and padding | true | Divides space evenly
| out 	| number | r l t b x y | margin and padding | true | Creates a tension effect

example
```
.mx(1px 2px);
```
```
margin-right: 1px;
margin-left: 2px;
```

example grid system

```
.class{
  .px(1px, xs, 2px);
}
```

```
@media (max-width: 540px) {
  .class {
    padding-left: 1px;
    padding-right: 1px;
  }
}
@media (min-width: 540px) {
  .class {
    padding-left: 2px;
    padding-right: 2px;
  }
}
```

Short mixin (emmet type)
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
| mixin | input 			 |<a href="#position">position</a>| post prefix | output | grid system
|:---|:---|:---|:---|:---|:---
| bd    | number style color | r l t b x y 					  | w s c       | border | true

example
```
.bdxw(2px);
```
```
border-left-width: 2px;
border-right-width: 2px;
```

Standard mixin
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

example
```
.class{
  .d(block, sm, flex);
}
```
```
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
```

Position
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
</details>

### position

| prefix | output
|:---|:---
| l      | left
| r      | right
| t      | top
| b      | bottom
| x      | left right
| y      | top bottom

example
```
.pt(10px);
.my(5px 10px);
```
```
padding-top: 10px;
margin-top: 5px;
margin-bottom: 10px;
```

post prefix name
| prefix name | input   | output
|:---|:---|:---
| a           | keyword | align
| d           | keyword | decoration
| i           | number  | indent
| s           | keyword | style
| t           | keyword | transform
| v           | number  | overflow

example
```
.ta(center);
```
```
text-align: center;
```

Pixel ratio example
```
.pxrt(
  1, { background-image:url('1.webp') },
  2, { background-image:url('2.webp') },
  3, { background-image:url('3.webp') }
);

// 1x upload only 1.webp
// retina 2x upload only 2.webp
// retina 3x upload only 3.webp
```

## any mixin
```
.reset(); // normalize

```

| name                    | input  or type                    | output                | grid system
|:---|:---|:---|:---
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

## Function
flexible size function
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

|params|default
|:---|:---
| mobWidthLayout  | 320px
| mobHeightLayout | 240px
| PCWidthLayout   | 1920px
| PCHeightLayout  | 1080px


## converter function

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

	toEm(16); // 1em;
	toP(20px, 1920px); // 1.0416666666666665%;
	toPx(10%,1920px); // 192px;
</details>

## log function

| function name | input or type
|:---|:---
| console-log   | console.log
| console-error | console.error "red output"
| console-dir   | console.dir

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
</details>

<details>
	<summary>How to use it correctly <strong>(example #3)</strong></summary>

	.mq(
		sm, .my(5px),
		md, .my(12px),
		lg, .my(auto)
	);
</details>

<details>
	<summary>How to use it correctly <strong>(example #4)</strong></summary>

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
	<summary>Example of installation in the main file</summary>

	@import './node_modules/less-query/style.less';
	@import './data.less';
</details>

<details>
	<summary>Reassigning Variables (example data file)</summary>

	@offset-y: 0;
	@offset-x: 1em;

	@default-margin: auto;
	@default-padding: auto;
</details>


---

***If you find a bug or have suggestions for improving the system, i will be glad to your feedback.***
