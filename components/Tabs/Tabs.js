// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldeItemTap(e){
      /*
      1.绑定点击事件，需要在methods中绑定
      2.获取被点击的索引
      3.获取原数组
      4.对数组循环
        1.给每一个循环性 选中属性改为false
        2.给当前索引的项添加激活选中的效果
       */
      const {index}=e.currentTarget.dataset;
      //let tabs=JSON.parse(JSON.stringify(this.data.tabs));
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

      this.setData(
        {
          tabs
        }
      )
    }
  }
})
