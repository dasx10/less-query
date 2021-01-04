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
.class-grid{
    .row();
    .class-col{
        .col(12, xs , 6 , sm , 4);
    }
}
```
## output 
```
.class-grid {
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-flow: row wrap;
}

@media (min-width: 540px) {
  .class-grid .class-col {
    word-wrap: break-word;
    box-sizing: border-box;
  }
}

@media (min-width: 720px) {
  .class-grid .class-col {
    width: calc(33.333333333333336% - 30px);
    margin-left: 15px;
    margin-right: 15px;
  }
}

@media (max-width: 540px) {
  .class-grid .class-col {
    width: calc(100% - 30px);
    margin-left: 15px;
    margin-right: 15px;
  }
}

@media (min-width: 540px) and (max-width: 720px) {
  .class-grid .class-col {
    width: calc(50% - 30px);
    margin-left: 15px;
    margin-right: 15px;
  }
}
```
## Standart grid system
| short name     | break point width | description
|:---|:---|:---
| xh             | 1680px            | extra huge                 
| hu             | 1530px            | huge                 
| xl             | 1320px            | extra large                 
| lg             | 1140px            | large          
| md             | 960px             | medium                
| sm             | 720px             | small               
| xs             | 540px             | extra small                
| ti             | 430px             | tiny          
| xt             | 320px             | extra tiny   

you can override these parameters
```
node_modules/less-mixin/mixins/grid/_data.less
```

default columns = 12
override the number of columns

example grid 24
```
.set-columns(24, 24, flex); // .set-columns(@set_size, @set_length, @set_row);
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
| name mixin              | input  or type                                                          | grid system
|:---|:---|:---
| row                     | row row-reverse grid left right inline-block inline-flex inline-grid    | true
| col                     | number                                                                  | true
| query                   | mixin                                                                   | true
| to                      | mixin                                                                   | true
| from                    | mixin                                                                   | true

example
```
.query(xs, { .p(1px); color:red }, 1200px, .m(2px));
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
| example name            | post prefix | output          | grid system
|:---|:---|:---|:---
| t                       | a d i s t v | text            | true
| w                       | b s w       | word            | true
| fx                      | b d f g s w | flex            | true
| b                       | sh b        | box             | true

Content mixin
| example name            | post prefix | output          | grid system
|:---|:---|:---|:---
| j                       | c s         | justify         | true
| a                       | c s i       | align           | true

c - content
s - self
i - item 


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
| d                       | display type                      | display         | true
| ls                      | number                            | leter-spacyng   | true
| lh                      | number                            | line-height     | true
| rz                      | keyword                           | resize          | true
| w                       | number                            | width           | true
| h                       | number                            | height          | true
| va                      | number                            | vertical-align  | true
| fx                      | grow shrink basis                 | flex            | true

example
```
.class{
  .d(block,sm,flex);
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
```
```
padding-top: 10px;
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

Pixel ratio 
```
.pixel-ratio(1,background-image:url('1.webp'),2,background-image:url('2.webp'));
// retina 2x upload 2.webp
// 1x upload 1.webp
```

## Function
| function name    | input or type                                                  | output     | description
|:---|:---|:---|:---
| fw               | mobile-size desctop-size mobile-size-lyout desctop-syze-layout | calc(...)  | flexible size from the width 
| fр               | mobile-size desctop-size mobile-size-lyout desctop-syze-layout | calc(...)  | flexible size from the height 
| fmin             | mobile-size desctop-size mobile-size-lyout desctop-syze-layout | calc(...)  | flexible size from the min screen 
| fmax             | mobile-size desctop-size mobile-size-lyout desctop-syze-layout | calc(...)  | flexible size from the max screen 
| fd               | mobile-size desctop-size mobile-size-lyout desctop-syze-layout | calc(...)  | flexible size from the screen 
| console-log      | console.log                                                    | trminal log| log from the terminal 
| console-error    | console.error "red output"                                     | trminal log| log from the terminal 
| console-dir      | console.dir                                                    | trminal log| log from the terminal full params

default 
mobile-size-lyout = 320px
desctop-syze-layout = 1920px

example // flexible font
```
.fz(fw(12,20));
```
```
font-size: calc(10.4 + (100vw * 0.005));
```

## Information

if the property is still missing, then you can create your own mix and use it like this
```
.my-mixin(@params){
  color:@params;
}

.query(xs,.my-mixin(red),sm,.my-mixin(darkred));
```