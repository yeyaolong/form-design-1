Schema.addCategory({name:"weizhu_bm",text:"魏朱商业模式"});Schema.addShape({name:"company",title:"所研究企业",category:"weizhu_bm",props:{w:120,h:40},path:[{actions:{ref:"rectangle"}}]});Schema.addShape({name:"external_refer",title:"外部利益相关者",category:"weizhu_bm",props:{w:70,h:70},path:[{fillStyle:{type:"solid",color:"r-35,g-35,b-35"},actions:{ref:"round"}}]});Schema.addShape({name:"external_refer_cg",title:"外部利益相关者（参股）",category:"weizhu_bm",props:{w:70,h:70},textBlock:[{position:{x:0,y:"h/2",w:"w",h:"h/2"},text:""},{position:{x:"w/2",y:0,w:"w/2",h:"h/2"},text:""}],path:[{fillStyle:{type:"solid",color:"r-35,g-35,b-35"},actions:[{action:"move",x:"w/2",y:"0"},{action:"line",x:"w/2",y:"h/2"},{action:"line",x:"w",y:"h/2.1"},{action:"curve",x1:"w",y1:"h+h/6",x2:"0",y2:"h+h/6",x:"0",y:"h*0.5"},{action:"quadraticCurve",x1:"1",y1:"1",x:"w/2",y:"0"},{action:"close"}]},{fillStyle:{type:"solid",color:"r,g,b"},actions:[{action:"move",x:"w/2",y:"0"},{action:"line",x:"w/2",y:"h/2"},{action:"line",x:"w",y:"h/2.1"},{action:"quadraticCurve",x1:"w-2",y1:"1",x:"w/2",y:"0"},{action:"close"}]},{lineStyle:{lineWidth:0},fillStyle:{type:"none"},actions:{ref:"round"}}]});Schema.addShape({name:"external_refer_kg",title:"外部利益相关者（控股）",category:"weizhu_bm",props:{w:70,h:70},textBlock:[{position:{x:0,y:"h/2",w:"w",h:"h/2"},text:""},{position:{x:"w/2",y:0,w:"w/2",h:"h/2"},text:""}],path:[{fillStyle:{type:"solid",color:"r-0,g-0,b-0"},actions:[{action:"move",x:"w/2",y:"0"},{action:"line",x:"w/2",y:"h/2"},{action:"line",x:"w",y:"h/2.1"},{action:"curve",x1:"w",y1:"h+h/6",x2:"0",y2:"h+h/6",x:"0",y:"h*0.5"},{action:"quadraticCurve",x1:"1",y1:"1",x:"w/2",y:"0"},{action:"close"}]},{fillStyle:{type:"solid",color:"r-35,g-35,b-35"},actions:[{action:"move",x:"w/2",y:"0"},{action:"line",x:"w/2",y:"h/2"},{action:"line",x:"w",y:"h/2.1"},{action:"quadraticCurve",x1:"w-2",y1:"1",x:"w/2",y:"0"},{action:"close"}]},{lineStyle:{lineWidth:0},fillStyle:{type:"none"},actions:{ref:"round"}}]});Schema.addShape({name:"external_refer_zy",title:"外部利益相关者（直营）",category:"weizhu_bm",props:{w:70,h:70},path:[{actions:{ref:"round"}}]});Schema.addShape({name:"company_jy",title:"企业间交易活动",category:"weizhu_bm",props:{w:70,h:70},path:[{fillStyle:{type:"solid",color:"r-35,g-35,b-35"},actions:[{action:"move",x:"w/2",y:"0"},{action:"line",x:"w",y:"h/2"},{action:"line",x:"w/2",y:"h"},{action:"line",x:"0",y:"h/2"},{action:"line",x:"w/2",y:"0"},{action:"close"}]}]});Schema.addShape({name:"company_nbly",title:"企业内部利益相关者",category:"weizhu_bm",props:{w:150,h:210},textBlock:[{position:{x:0,y:0,w:"w",h:30}},{position:{x:0,y:30,w:"w",h:"h-60"}},{position:{x:0,y:"h-30",w:"w/2",h:"30"}},{position:{x:"w-w/2",y:"h-30",w:"w/1.8",h:"30"}}],path:[{actions:{ref:"rectangle"}},{fillStyle:{type:"none"},actions:[{action:"move",x:"0",y:"30"},{action:"line",x:"w",y:"30"},{action:"move",x:"0",y:"h-30"},{action:"line",x:"w/2",y:"h-30"},{action:"line",x:"w/2",y:"h"},{action:"move",x:"w",y:"h-30"},{action:"line",x:"w/1.8",y:"h-30"},{action:"line",x:"w/1.8",y:"h"},{action:"move",x:"w/1.8",y:"h"},{action:"close"}]},{fillStyle:{type:"none"},actions:{ref:"rectangle"}}],drawIcon:function(a,b){return[{actions:[{action:"move",x:0,y:0},{action:"line",x:0,y:b},{action:"line",x:a,y:b},{action:"line",x:a,y:0},{action:"line",x:0,y:0},{action:"move",x:0,y:5},{action:"line",x:a,y:5},{action:"move",x:0,y:b-5},{action:"line",x:a,y:b-5}]}]}});Schema.addShape({name:"company_jihe",title:"同类利益相关者集合",category:"weizhu_bm",props:{w:20,h:100},textBlock:[],path:[{fillStyle:{type:"none"},actions:[{action:"move",x:"w",y:"0"},{action:"line",x:"0",y:"0"},{action:"line",x:"0",y:"h/2"},{action:"line",x:"w",y:"h/2"},{action:"move",x:"0",y:"h/2"},{action:"line",x:"0",y:"h"},{action:"line",x:"w",y:"h"},{action:"move",x:"w",y:"h"},{action:"close"}]}]});Schema.addShape({name:"company_tlx",title:"同类型多个实体",category:"weizhu_bm",props:{w:30,h:18},anchors:[],textBlock:[],resizeDir:[],path:[{lineStyle:{lineWidth:0,lineStyle:"solid"},fillStyle:{type:"solid",color:"r-100,g-100,b-100"},actions:[{action:"move",x:"3",y:"6"},{action:"curve",x1:"4.5",y1:"6",x2:"6",y2:"7.5",x:"6",y:"9"},{action:"curve",x1:"6",y1:"10.5",x2:"4.5",y2:"12",x:"3",y:"12"},{action:"curve",x1:"1.5",y1:"12",x2:"0",y2:"10.5",x:"0",y:"9"},{action:"curve",x1:"0",y1:"7.5",x2:"1.5",y2:"6",x:"3",y:"6"},{action:"move",x:"10",y:"6"},{action:"curve",x1:"14.5",y1:"6",x2:"16",y2:"7.5",x:"16",y:"9"},{action:"curve",x1:"16",y1:"10.5",x2:"14.5",y2:"12",x:"13",y:"12"},{action:"curve",x1:"11.5",y1:"12",x2:"10",y2:"10.5",x:"10",y:"9"},{action:"curve",x1:"10",y1:"7.5",x2:"11.5",y2:"6",x:"13",y:"6"},{action:"move",x:"20",y:"6"},{action:"curve",x1:"24.5",y1:"6",x2:"26",y2:"7.5",x:"26",y:"9"},{action:"curve",x1:"26",y1:"10.5",x2:"24.5",y2:"12",x:"23",y:"12"},{action:"curve",x1:"21.5",y1:"12",x2:"20",y2:"10.5",x:"20",y:"9"},{action:"curve",x1:"20",y1:"7.5",x2:"21.5",y2:"6",x:"23",y:"6"},{action:"close"}]},{lineStyle:{lineWidth:0,lineStyle:"solid"},fillStyle:{type:"none"},actions:{ref:"rectangle"}}]});