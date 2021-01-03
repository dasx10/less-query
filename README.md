# LESS QUERY
Modified approach to responsive layout

## install

npm install -D less-query


## use
set the entry point to your file

@import './node_modules/less-query/style.less';


## example 

.class-grid{
    .row
    .class-col{
        .col(12, xs , 6 , sm , 4 , md, 3, lg, 2)
    }
}

## output 

.class-grid {
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-flow: row wrap;
}

.class-grid .class-col {
  border-left-width: 1px;
  border-right-width: 1px;
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

## mixin 

Grid system
| name mixin              | input  or type                    | grid system
|:---|:---|:---
| row                     | row row-reverse grid left right   | true
| col                     | number                            | true
| query                   | mixin                             | true
| to                      | mixin                             | true
| from                    | mixin                             | true

Shift mixin
| name mixin              | input  or type                    | prefix      | output          | grid system
|:---|:---|:---|:---|:---
| m                       | number                            | r l t b x y | margin          | true
| p                       | number                            | r l t b x y | padding         | true

post prefix name
| prefix name             | output     
|:---|:---|:---|:---
| l                       | left      
| r                       | right 
| t                       | top     
| b                       | bottom      
| x                       | left right  
| y                       | top bottom   

| example use             | output      
|:---|:---
| .mx(1px 2px)            | margin-right:1px; margin-left:2px; 
| .class{.px(xs,2px);}    | @media(min-width:540px){.class{padding-left:1px;padding-right:1px;}}

Border
| name mixin              | input  or type                    | prefix      | post prefix | output          | grid system
|:---|:---|:---|:---|:---|:---
| bd                      | number style color                | r l t b x y | w s c       | border          | true

Standart mixin
| name mixin              | input  or type                    | output          | grid system
|:---|:---|:---|:---|:---|:---
| d                       | display type                      | display         | true
| ls                      | number                            | leter-spacyng   | true
| lh                      | number                            | line-height     | true
| rz                      | keyword                           | resize          | true
| w                       | number                            | width           | true
| h                       | number                            | height          | true
| va                      | number                            | vertical-align  | true


Position
| name mixin              | input  or type                    | output          | grid system
|:---|:---|:---|:---
| a                       | number                            | all position    | true
| r                       | number                            | right           | true
| l                       | number                            | left            | true
| t                       | number                            | top             | true
| b                       | number                            | bottom          | true


Text
| example name            | post prefix | output          | grid system
|:---|:---|:---|:---
| t                       | a d i s t v | text            | true

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
| example use             | input  or type                    | output                      
|:---|:---|:---
| .tt(uppercase)          | keyword                           | text-transform:uppercase;   

Any
scroll
