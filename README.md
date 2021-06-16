# LESS QUERY
[![Build Status](https://travis-ci.com/dasx10/less-query.svg?branch=master)](https://travis-ci.com/dasx10/less-query)
----
**Modified approach to responsive layout**
----

##### Navigation
<nav id="navigation">
	<ul>
		<li>
			<a href="#install">Install</a>
		</li>
		<li>
			<a href="#standard-grid-system">Standard grid system</a>
		</li>
		<li>
			<a href="#mixins">Mixins</a>
		</li>
		<li>
			<a href="#experimental-mixins">Experimental mixins</a>
		</li>
		<li>
			<a href="#functions">Functions</a>
		</li>
		<li>
			<a href="#examples">Example</a>
		</li>
		<li>
			<a href="#recommendation">Recommendation</a>
		</li>
		<li>
			<a href="#overriding-standard-variables">Overriding standard variables</a>
		</li>
		<li>
			<a href="#faq">F.A.Q.</a>
		</li>
	</ul>
</nav>

---
## Install
```
npm install -D less-query
```

set the entry point to your file

```
@import './node_modules/less-query/style.less';
```

---


## Standard grid system

<details id="grid-system-mixin">
	<summary>
		Default break point
	</summary>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>width</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>xt</td>
				<td>320px</td>
				<td>extra tiny</td>
			</tr>
			<tr>
				<td>ti</td>
				<td>430px</td>
				<td>tiny</td>
			</tr>
			<tr>
				<td>xs</td>
				<td>540px</td>
				<td>extra small</td>
			</tr>
			<tr>
				<td>sm</td>
				<td>720px</td>
				<td>small</td>
			</tr>
			<tr>
				<td>md</td>
				<td>960px</td>
				<td>medium</td>
			</tr>
			<tr>
				<td>lg</td>
				<td>1140px</td>
				<td>large</td>
			</tr>
			<tr>
				<td>xl</td>
				<td>1320px</td>
				<td>extra large</td>
			</tr>
			<tr>
				<td>hu</td>
				<td>1530px</td>
				<td>huge</td>
			</tr>
			<tr>
				<td>xh</td>
				<td>1680px</td>
				<td>extra huge</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="grid-system-mixin">
	<summary>
		Default grid system setup
	</summary>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>params</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>columns count</td>
				<td>12</td>
				<td>number of columns in a column</td>
			</tr>
			<tr>
				<td>
					<a href="#offsets-a">offset</a>
				</td>
				<td>2em</td>
				<td>Column indents</td>
			</tr>
			<tr>
				<td>container</td>
				<td>1680px</td>
				<td>Standard container width</td>
			</tr>
		</tbody>
	</table>
</details>


<p>Go back to <a href="#navigation">navigation</a></p>
<p>Go to <a href="#overriding-standard-variables">overriding this variables</a></p>

## Mixins

<details id="grid-system-mixin">
	<summary>
		Break point mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>input</th>
				<th>system</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.row</td>
				<td>keyword</td>
				<td>grid</td>
				<td>row for columns</td>
			</tr>
			<tr>
				<td>.col</td>
				<td>number</td>
				<td>grid</td>
				<td>column</td>
			</tr>
			<tr>
				<td>.col-count</td>
				<td>number</td>
				<td>false</td>
				<td>overrides the default column count</td>
			</tr>
			<tr>
				<td>.mq</td>
				<td>mixin</td>
				<td>grid</td>
				<td>media width builder</td>
			</tr>
			<tr>
				<td>.to</td>
				<td>mixin</td>
				<td>grid</td>
				<td>media max width only</td>
			</tr>
			<tr>
				<td>.from</td>
				<td>mixin</td>
				<td>grid</td>
				<td>media min width only</td>
			</tr>
			<tr>
				<td>.mqh</td>
				<td>mixin</td>
				<td>grid</td>
				<td>media height builder</td>
			</tr>
			<tr>
				<td>.container</td>
				<td>mixin</td>
				<td>false</td>
				<td>max size (container)</td>
			</tr>
			<tr>
				<td>.wrp</td>
				<td>mixin</td>
				<td>false</td>
				<td>padding max size (container)</td>
			</tr>
		</tbody>
	</table>
	<details id="example-grid-system-mixin">
	<summary>Example grid system mixin</summary>

	// input
	.grid{
		.row;
		&__col{
			.col(12, sm, 6, md, 4, lg, 3);
		}
	}

	// output
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
<details id="grid-s-mix">
	<summary>Example .mq</summary>

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
<hr />

</details>


<details id="grid-mixin">
	<summary>
		Grid mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.grid-area</td>
				<td>.ga</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-auto-column</td>
				<td>.gac</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-auto-row</td>
				<td>.gar</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-template</td>
				<td>.gt</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-template-column</td>
				<td>.gtc</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-template-row</td>
				<td>.gtr</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-column</td>
				<td>.gc</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-column-gap</td>
				<td>.gcg</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-column-start</td>
				<td>.gcs</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-column-end</td>
				<td>.gce</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-row</td>
				<td>.gr</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-row-gap</td>
				<td>.grg</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-row-start</td>
				<td>.grs</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-row-end</td>
				<td>.gre</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.grid-gap</td>
				<td>.gg</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="flex-mixin">
	<summary>
		Flex box mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.flex</td>
				<td>.fx</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.flex-basis</td>
				<td>.fxb</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.flex-direction</td>
				<td>.fxd</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.flex-flow</td>
				<td>.fxf</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.flex-grow</td>
				<td>.fxg</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.flex-shrink</td>
				<td>.fxs</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.flex-wrap</td>
				<td>.fxw</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>


<details id="align-mixin">
	<summary>
		Align mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.align-content</td>
				<td>.ac</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.align-items</td>
				<td>.ai</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.align-self</td>
				<td>.as</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="justify-mixin">
	<summary>
		Justify mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.justify-content</td>
				<td>.jc</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.justify-items</td>
				<td>.ji</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.justify-self</td>
				<td>.js</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>


<details id="box-mixin">
	<summary>
		Box mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.box-shadow</td>
				<td>.bsh</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.box-sizing</td>
				<td>.bz</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="margin-mixin">
	<summary>
		Margin mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.margin</td>
				<td>.m</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.margin-top</td>
				<td>.mt</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.margin-right</td>
				<td>.mr</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.margin-bottom</td>
				<td>.mb</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.margin-left</td>
				<td>.ml</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.margin-y</td>
				<td>.my</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.margin-x</td>
				<td>.mx</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.margin-y-right</td>
				<td>.myr</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.margin-y-left</td>
				<td>.myl</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.margin-top-x</td>
				<td>.mxt</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.margin-bottom-x</td>
				<td>.mxb</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
	<details>
	<summary>Example margin mixins</summary>

	.m(1rem 2rem);  // margin: 1rem 2rem;
	.mt(10px); 		// margin-top: 10px;
	.mb(10px); 		// margin-bottom: 10px;
	.ml(10px); 		// margin-left: 10px;
	.mr(10px); 		// margin-right: 10px;

	.my(5px); 		// margin-top: 5px; margin-bottom: 5px;
	.mx(5px); 		// margin-right: 5px; margin-left: 5px;
</details>
<hr />

</details>

<details id="padding-mixin">
	<summary>
		Padding mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.padding</td>
				<td>.p</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.padding-top</td>
				<td>.pt</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.padding-right</td>
				<td>.pr</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.padding-bottom</td>
				<td>.pb</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.padding-left</td>
				<td>.pl</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.padding-y</td>
				<td>.py</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.padding-x</td>
				<td>.px</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.padding-y-right</td>
				<td>.pyr</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.padding-y-left</td>
				<td>.pyl</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.padding-top-x</td>
				<td>.pxt</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.padding-bottom-x</td>
				<td>.pxb</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
	<details>
	<summary>Example padding mixins</summary>

	.p(1rem 2rem);  // padding: 1rem 2rem;
	.pt(10px); 		// padding-top: 10px;
	.pb(10px); 		// padding-bottom: 10px;
	.pl(10px); 		// padding-left: 10px;
	.pr(10px); 		// padding-right: 10px;

	.py(5px); 		// padding-top: 5px; padding-bottom: 5px;
	.px(5px); 		// padding-right: 5px; padding-left: 5px;
</details>
<hr />

</details>

<details id="width-mixin">
	<summary>
		Width mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.width</td>
				<td>.w</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.min-width</td>
				<td>.miw</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.max-width</td>
				<td>.mw</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.minmax-width</td>
				<td>.mmw</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="height-mixin">
	<summary>
		Height mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.height</td>
				<td>.h</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.min-height</td>
				<td>.mih</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.max-height</td>
				<td>.mh</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.minmax-height</td>
				<td>.mmh</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="position-mixin">
	<summary>
		Position mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.a</td>
				<td>.a</td>
				<td>true</td>
				<td>true</td>
				<td>All position</td>
			</tr>
			<tr>
				<td>.top</td>
				<td>.t</td>
				<td>true</td>
				<td>false</td>
				<td></td>
			</tr>
			<tr>
				<td>.right</td>
				<td>.r</td>
				<td>true</td>
				<td>false</td>
				<td></td>
			</tr>
			<tr>
				<td>.bottom</td>
				<td>.b</td>
				<td>true</td>
				<td>false</td>
				<td></td>
			</tr>
			<tr>
				<td>.left</td>
				<td>.l</td>
				<td>true</td>
				<td>false</td>
				<td></td>
			</tr>
			<tr>
				<td>.y</td>
				<td>.y</td>
				<td>true</td>
				<td>true</td>
				<td>top + bottom</td>
			</tr>
			<tr>
				<td>.x</td>
				<td>.x</td>
				<td>true</td>
				<td>true</td>
				<td>right + left</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="text-mixin">
	<summary>
		Text mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.text-align</td>
				<td>.ta</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.text-decoration</td>
				<td>.td</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.text-indent</td>
				<td>.ti</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.text-shadow</td>
				<td>.ts</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.text-transform</td>
				<td>.tt</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.text-overflow</td>
				<td>.tv</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="font-mixin">
	<summary>
		Font mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.font</td>
				<td>.f</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.font-style</td>
				<td>.fs</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.font-size</td>
				<td>.fz</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.font-weight</td>
				<td>.f</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.font-family</td>
				<td>.ff</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="word-mixin">
	<summary>
		Word mixins
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.word-break</td>
				<td>.wb</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.word-spacing</td>
				<td>.ws</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.word-wrap</td>
				<td>.ww</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="background-mixin">
	<summary>
		Background mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.background</td>
				<td>.bg</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-attachment</td>
				<td>.bga</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-clip</td>
				<td>.bgcl</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-color</td>
				<td>.bgc</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-image</td>
				<td>.bgi</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-origin</td>
				<td>.bgo</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-position</td>
				<td>.bgp</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-repeat</td>
				<td>.bgr</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.background-size</td>
				<td>.bgz</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="border-mixin">
	<summary>
		Border mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.border</td>
				<td>.bd</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.border-style</td>
				<td>.bds</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.border-color</td>
				<td>.bdc</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.border-radius</td>
				<td>.bd-rs</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="any-mixin">
	<summary>
		Any mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.line-height</td>
				<td>.lh</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.order</td>
				<td>.od</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.letter-spacing</td>
				<td>.ls</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.display</td>
				<td>.d</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.resize</td>
				<td>.rz</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.position</td>
				<td>.pos</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.vertical-align</td>
				<td>.va</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.clip</td>
				<td>.cp</td>
				<td>true</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>


Go back to <a href="#mixins">mixins</a> | <a href="#navigation">navigation</a>

## Experimental mixins

<details id="size-mixin">
	<summary title="height + width">
		Size mixins
	</summary>
	<p>Height + width</p>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.size</td>
				<td>.sz</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.min-size</td>
				<td>.misz</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.max-size</td>
				<td>.msz</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.minmax-size</td>
				<td>.mmsz</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="even-mixin">
	<summary title="Align + justify">
		Even mixin
	</summary>
	<p>Align + justify</p>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>short</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.even-content</td>
				<td>.ec</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.even-items</td>
				<td>.ei</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.even-self</td>
				<td>.es</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="triangle-mixin">
	<summary>
		Triangle mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>input</th>
				<th>grid system</th>
				<th>Multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.triangle-t</td>
				<td>number</td>
				<td>false</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.triangle-r</td>
				<td>number</td>
				<td>false</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.triangle-b</td>
				<td>number</td>
				<td>false</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.triangle-l</td>
				<td>number</td>
				<td>false</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.triangle-rt</td>
				<td>number</td>
				<td>false</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.triangle-rb</td>
				<td>number</td>
				<td>false</td>
				<td>false</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="shift-mixin">
	<summary title="margin + padding">
		Shift mixins
	</summary>
	<p>margin + padding</p>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.shift</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.shift-t</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.shift-r</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.shift-b</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.shift-l</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.shift-y</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.shift-x</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="out-mixin">
	<summary title="-margin +padding">
		Out mixins
	</summary>
	<p>-margin +padding</p>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.out</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.out-t</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.out-r</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.out-b</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.out-l</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.out-y</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.out-x</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="pull-mixin">
	<summary title="-margin +padding">
		Pull mixins
	</summary>
	<p>-margin +padding</p>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>grid system</th>
				<th>multi line</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.pull</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.pull-t</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.pull-r</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.pull-b</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.pull-l</td>
				<td>true</td>
				<td>false</td>
			</tr>
			<tr>
				<td>.pull-y</td>
				<td>true</td>
				<td>true</td>
			</tr>
			<tr>
				<td>.pull-x</td>
				<td>true</td>
				<td>true</td>
			</tr>
		</tbody>
	</table>
</details>

<details>
	<summary>
		Any experimental mixin
	</summary>
	<table>
		<thead>
			<tr>
				<th>mixin</th>
				<th>grid system</th>
				<th>multi line</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.reset</td>
				<td>false</td>
				<td>false</td>
				<td>normalize</td>
			</tr>
			<tr>
				<td>.round</td>
				<td>false</td>
				<td>false</td>
				<td>border-radius: 50%;</td>
			</tr>
			<tr>
				<td>.circle</td>
				<td>false</td>
				<td>false</td>
				<td>circle</td>
			</tr>
		</tbody>
	</table>
</details>

<details id="pxrt">
	<summary>
		Pixel ratio
	</summary>
	<p>Mixin: .pxrt()</p>
	<p>Params: pixel ration (number) or mixin</p>

	.pxrt(
		1, { background-image:url('1.webp') },
		2, { background-image:url('2.webp') },
		3, { background-image:url('3.webp') }
	);
	// 1x upload only 1.webp
	// retina 2x upload only 2.webp
	// retina 3x upload only 3.webp
</details>



Go back to <a href="#mixins"> mixins</a> | <a href="#experimental-mixins">experimental mixins</a> | <a href="#navigation">navigation</a>

## Functions

<details id="flexible-function">
	<summary>
		Flexible function
	</summary>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>first param *</th>
				<th>second param *</th>
				<th>next params</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>fw</td>
				<td>min size</td>
				<td>max size</td>
				<td>min-width, max-width</td>
				<td>adapts to width</td>
			</tr>
			<tr>
				<td>fh</td>
				<td>min size</td>
				<td>max size</td>
				<td>min-height, max-height</td>
				<td>adapts to height</td>
			</tr>
			<tr>
				<td>fmin</td>
				<td>min size</td>
				<td>max size</td>
				<td>min-size, max-size</td>
				<td>adapts to min height or width desktop size</td>
			</tr>
			<tr>
				<td>fmax</td>
				<td>min size</td>
				<td>max size</td>
				<td>min-size, max-size</td>
				<td>adapts to max height or width desktop size</td>
			</tr>
			<tr>
				<td>fd</td>
				<td>min size</td>
				<td>max size</td>
				<td>min-width, min-height, max-width, max-height</td>
				<td>adapts to desktop size</td>
			</tr>
		</tbody>
	</table>
	<details>
	<summary>Example</summary>

	// flexible font
	.fz(fw(12px, 20px)); // -> font-size: calc(10.4px + 0.5vw);
</details>
	<details>
	<summary>
		Default params (next params)
	</summary>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>min-height</td>
				<td>240px</td>
			</tr>
			<tr>
				<td>min-width</td>
				<td>320px</td>
			</tr>
			<tr>
				<td>max-height</td>
				<td>1080px</td>
			</tr>
			<tr>
				<td>max-width</td>
				<td>1920px</td>
			</tr>
			<tr>
				<td>min-size</td>
				<td>320px</td>
			</tr>
			<tr>
				<td>max-size</td>
				<td>1920px</td>
			</tr>
		</tbody>
	</table>
</details>
	<hr />
</details>
<details id="converter-function">
	<summary>
		Converter unit function
	</summary>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>first param *</th>
				<th>second param</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>toEm</td>
				<td>px unit</td>
				<td>default em</td>
				<td>convert pixel to em</td>
			</tr>
			<tr>
				<td>toRem</td>
				<td>px unit</td>
				<td>default rem</td>
				<td>convert pixel to rem</td>
			</tr>
			<tr>
				<td>toP</td>
				<td>px unit</td>
				<td>default width layout</td>
				<td>convert pixel to %</td>
			</tr>
			<tr>
				<td>toW</td>
				<td>px unit</td>
				<td>default width layout</td>
				<td>convert pixel to vw</td>
			</tr>
			<tr>
				<td>toH</td>
				<td>px unit</td>
				<td>default width layout</td>
				<td>convert pixel to vh</td>
			</tr>
			<tr>
				<td>toM</td>
				<td>px unit</td>
				<td>default width layout</td>
				<td>convert pixel to vmax</td>
			</tr>
			<tr>
				<td>toMi</td>
				<td>px unit</td>
				<td>default width layout</td>
				<td>convert pixel to vmin</td>
			</tr>
			<tr>
				<td>toPx</td>
				<td>any number unit</td>
				<td>default width layout</td>
				<td>convert unit to px</td>
			</tr>
		</tbody>
	</table>
	<details>
	<summary>
		Example
	</summary>

	toEm(16); 		   // 1em;
	toPx(10%, 1920px);  // 192px;
	toP(20px, 1920px); // 1.0416666666666665%;

	.pt(toEm(16)); 	   // padding-top: 1em;
</details>
	<hr />
</details>

<details id="console-function">
	<summary>
		Console function
	</summary>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>input or type</th>
				<th>description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>console-log</td>
				<td>varaiable | unit | params | string ...</td>
				<td>output from console</td>
			</tr>
			<tr>
				<td>console-dir</td>
				<td>varaiable | unit | params | string ...</td>
				<td>output from console full information</td>
			</tr>
			<tr>
				<td>console-error</td>
				<td>varaiable | unit | params | string ...</td>
				<td>output from console (red output)</td>
			</tr>
		</tbody>
	</table>
</details>


Go back to <a href="#functions">functions</a> | <a href="#navigation">navigation</a>

## Examples

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
		{.px(xs, 10px, sm, 20px);},
		md,
		{.my(sm, 5px, md, 12px, lg, auto);}
	)
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

<details>
	<summary>Recommendations for use media query</summary>
	<p>We strongly recommend that your media mixin starts with a parameter and ends with a parameter.</p>
	<p>This does not mean that you are using it incorrectly. But this is a signal that you are most likely doing something wrong.</p>
	<p></p>
	<details>
		<summary>Example of correct use</summary>
		<pre>
			.mq(.p(5px), xs, .p(10px));
			.m(1rem, xs, 1.5rem);
		</pre>
	</details>
	<details>
		<summary>An example of a possibly incorrect use</summary>
		<pre>
			.mq(xs, .p(10px), sm, .p(5px), md);
			.m(xs, 1.5rem, sm, 2rem, md);
		</pre>
	</details>
	<hr />
</details>

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
<details>
	<summary><strong>If you need dynamic offset.</strong></summary>
	<p>
		You can also set them in your <a href="#overriding-standard-variables" id="offsets-a">settings file</a>.
		Variable offsets will be automatically inserted into the <a href="#standard-grid-system">column system</a>.
	</p>
	<p>We strongly recommend using it as an exception.</p>
	<p>If you want the same offsets on all sides. Then use</p>
	<pre>
		@offset-var: my offset;
	</pre>
	<p>If you need different horizontal and vertical offset. Then use these options.</p>
	<pre>
		@offset-var-x: my offset x;
		@offset-var-y: my offset y;
	</pre>
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
</details>

Go back to <a href="#overriding-standard-variables">Overriding standard variables</a> | <a href="#navigation">navigation</a>

---

## F.A.Q.

<details>
	<summary>Mobile first or desktop first?</summary>
	<p>this library does not take a mobile-first approach. It also does not use a desktop-centric approach. But there is an opportunity to apply one or another approach in the library. Read the instructions carefully. The library combines both approaches.</p>
	<h4>Benefits of this approach</h4>
	<p>Faster rendering speed</p>
	<p><i>Since you don't need to apply styles and then overwrite them</i></p>
	<p>Since you don't need to apply styles and then overwrite them</p>
	<p>You don't have to think about which approach to use.</p>
	<p><i>since the hybrid approach is backward compatible with any of the approaches</i></p>
	<br />
	<h4>Disadvantages of this approach</h4>
	<p>increases file size almost insignificantly</p>
	<p><i>due to the use of both the minimum and maximum value</i></p>
</details>

<details>
	<summary>Documentation in another language?</summary>
	<p>There is currently no documentation in other languages.Work in progress. If you would like to help us translate, you can send a pull request to the author.</p>
</details>

<details>
	<summary>Your library won't start!</summary>
	<p>Please check your version node js. - Tested and works correctly since version 14</p>
	<p>check your transpiler `less` - the library was tested as with a regular transpiler. Same thing via 'webpack' 'gulp'</p>
	<p>Check if the library is connected correctly</p>
	<p>You are trying to run the library through the browser? This does not work. You need node js to work</p>
	<p>I checked everything and tried everything. But still doesn't work - Please write to the author about this problem. Preferably informative with screenshots. So that we can help you</p>
</details>

<details>
	<summary>The library is too big - what's the problem?</summary>
	<p>Don't worry about it - your latest kit will only get what you need.</p>
</details>

<details>
	<summary>My bundle is too big.</summary>
	<p>To reduce the size of the bundle, we recommend using minifiers in conjunction with the library to combine media query.</p>
</details>

<details>
	<summary>Do you have any suggestions for the library?</summary>
	<p>Please write to the author or send a pull request. We will be glad to consider your suggestions.</p>
</details>

Go back to <a href="#navigation">navigation</a>

***If you find a bug or have suggestions for improving the system, i will be glad to your feedback.***
