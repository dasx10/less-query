# LESS QUERY
Modified approach to responsive layout

## install

cmd
npm install -D less-query


## use
set the entry point to your file

@import './node_modules/less-query/style.less';


## example 

.class-grid{
    .row();
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

| name mixin              | input  or type                    | prefix      | post prefix | output          | grid system
| ---:|:---

Grid
| .row();                 | row row-reverse grid left right   |             |             |                 | true
| .col();                 | number                            |             |             |                 | true




| .bd();                  | number style color                | r l t b x y | w s c       | border          | true
| .d();                   | display type                      |             |             | display         | true
| .ls();                  | number                            |             |             | leter-spacyng   | true
| .lh();                  | number                            |             |             | line-height     | true
| .m();                   | number                            | r l t b x y |             | margin          | true
| .p();                   | number                            | r l t b x y |             | padding         | true
| .rz();                  | keyword                           |             |             | resize          | true
| .w();                   | number                            |             |             | width           | true
| .h();                   | number                            |             |             | height          | true
| .va();                  | number                            |             |             | vertical-align  | true



Position
| .a();                   | number                            |             |             | all position    | true
| .r();                   | number                            |             |             | right           | true
| .l();                   | number                            |             |             | left            | true
| .t();                   | number                            |             |             | top             | true
| .b();                   | number                            |             |             | bottom          | true




