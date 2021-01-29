# LESS QUERY
Modified approach to responsive layout

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
    .row();
    &__col{
        .col(12, s, 6, m, 4, l, 3);
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
## Standart grid system
| short name     | break point width | description
|:---|:---|:---
| xh             | 1680px            | extra huge                 
| h              | 1530px            | huge                 
| xl             | 1320px            | extra large                 
| l              | 1140px            | large          
| m              | 960px             | medium                
| s              | 720px             | small               
| xs             | 540px             | extra small                
| t              | 430px             | tiny          
| xt             | 320px             | extra tiny   

| default                | parameters
|:---|:---
| columns                | 12                
| offset                 | 30px                
| wraper                 | 1680px                

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
@defaultСolumns: 24;
@widthWrap : 1440px;

```

you can also change the number of columns for a layer
```
.set-columns(24); // .set-columns(@set_size, @set_length, @set_row);
```

you can override these parameters
```
node_modules/less-mixin/mixins/grid/_data.less
```

## wraper
```
.wrp(1200px); // padding max size
```

## container
```
.container(1200px); // max size container
```

## Mixin 

Grid system
| name mixin              | input  or type                                                          | grid system | decription
|:---|:---|:---|:---
| row                     | row row-reverse grid left right inline-block inline-flex inline-grid    | true        | 
| col                     | number                                                                  | true        | 
| mq                      | mixin                                                                   | true        | media width builder
| to                      | mixin                                                                   | true        | media max width only
| from                    | mixin                                                                   | true        | media min width only
| mqh                     | mixin                                                                   | true        | media height builder

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
| name mixin              | input  or type                    | prefix      | output                | grid system
|:---|:---|:---|:---|:---
| m                       | number                            | r l t b x y | margin                | true
| p                       | number                            | r l t b x y | padding               | true
| mp                      | number                            | r l t b x y | margin and padding    | true


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
  .px(xs, 1px);
}
```
```
@media(min-width:540px){
  .class{
    padding-left: 1px;
    padding-right: 1px;
  }
}
```

Short mixin (emmet type)
| example name            | post prefix       | output          | grid system
|:---|:---|:---|:---
| t                       | a d i s t v       | text            | true
| f                       | s z w f           | font            | true
| w                       | b s w             | word            | true
| fx                      | b d f g s w       | flex            | true
| b                       | sh z              | box             | true
| bg                      | a cl c i o p r z  | background      | true

Content mixin
| example name            | post prefix | output          | grid system
|:---|:---|:---|:---
| j                       | c s i       | justify         | true
| a                       | c s i       | align           | true

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
| name mixin              | input  or type                    | prefix      | post prefix | output          | grid system
|:---|:---|:---|:---|:---|:---
| bd                      | number style color                | r l t b x y | w s c       | border          | true

example
```
.bdxw(2px);
```
```
border-left-width: 2px;
border-right-width: 2px;
```

Standart mixin
| name mixin              | input  or type                    | output          | grid system
|:---|:---|:---|:---
| w                       | number                            | width           | true
| h                       | number                            | height          | true
| mw                      | number                            | max-width       | true
| mh                      | number                            | max-height      | true
| miw                     | number                            | min-width       | true
| mih                     | number                            | min-height      | true
| lh                      | number                            | line-height     | true
| od                      | number                            | order           | true
| ls                      | number                            | letter-spacing  | true
| d                       | keyword (block flex grid ...)     | display         | true
| rz                      | keyword                           | resize          | true
| va                      | keyword                           | vertical-align  | true
| fx                      | keyword (grow shrink basis)       | flex            | true
| cp                      | keyword                           | clip            | true
| f                       | keyword                           | font            | true

example
```
.class{
  .d(block,s,flex);
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
| name mixin              | input  or type                    | output          | grid system
|:---|:---|:---|:---
| a                       | number                            | all position    | true
| r                       | number                            | right           | true
| l                       | number                            | left            | true
| t                       | number                            | top             | true
| b                       | number                            | bottom          | true

example
```
.a(10px);
```
```
top: 10px;
bottom: 10px;
left: 10px;
right: 10px;
```

prefix name
| prefix name             | output     
|:---|:---
| l                       | left      
| r                       | right 
| t                       | top     
| b                       | bottom      
| x                       | left right  
| y                       | top bottom  

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
| prefix name             | input  or type                    | output     
|:---|:---|:---
| a                       | keyword                           | align      
| d                       | keyword                           | dicoration 
| i                       | number                            | indent     
| s                       | keyword                           | style      
| t                       | keyword                           | transform  
| v                       | number                            | overflov   

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
.reset(); // normilize
```
## Function
flexible size function
|input| params | description
|:---|:---|:---
|fw  |mobSize PCSize mobWidthLayout PCWidthLayout                               |from the width 
|fh  |mobSize PCSize mobHeightLayout PCHeightLayout                             |from the height 
|fmin|mobSize PCSize mobSizeLayout PCSizeLayout                                 |from the minScreen 
|fmax|mobSize PCSize mobSizeLayout PCSizeLayout                                 |from the maxScreen 
|fd  |mobSize PCSize mobWidthLayout mobHeightLayout PCWidthLayout PCHeightLayout|from the screen

|params|default
|:---|:---
| mobWidthLayout  |320px 
| mobHeightLayout |240px 
| PCWidthLayout   |1920px
| PCHeightLayout  |1080px

example // flexible font
```
.fz(fw(12,20));
```
```
font-size: calc(10.4 + (100vw * 0.005));
```

log function
| function name| input or type
|:---|:---
| console-log  | console.log
| console-error| console.error "red output"
| console-dir  | console.dir

## Information

if the property is still missing, then you can create your own mix and use it like this
```
.myMix(@params){
  .c(lighten(@params));
  .bgc(darken(@params));
}

.mq(
  s,      .myMix(darkred),
  1280px, .myMix(#000)
);
```

We strongly recommend not using this approach
```
.mq(
  xs, .px(10px, s, 20px),
  s, .my(5px, m, 12px, l, auto),
);
```

Use so
```
.px(xs, 10px, s, 20px);
.my(s, 5px, m, 12px, l, auto);

```
or
```
.mq(
  xs, .px(10px), 
  s, .px(20px)
);

.mq(
  s, .my(5px),
  m, .my(12px), 
  l, .my(auto)
);

```
or
```
.mq(
  xs, .px(10px), 
  s, {
    .px(20px);
    .my(12px);
  },
  m, .my(12px), 
  l, .my(auto)
);

```

If you find a bug or have suggestions for improving the system, i will be glad to your feedback.