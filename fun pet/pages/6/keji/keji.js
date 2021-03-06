Page({
  data: {
    spacedata: {},
    img:"images/t.jpg",
    currentIndex: 1
  },
  onLoad: function () {
    this.setData({
      spacedata: {
        "ParkCode": "ZCKJ20160831200444",
        "PetName": "威尔士柯基犬",
        "introduction": "威尔士柯基犬（welsh corgi pembroke）是一种小型犬，但性格非常稳健，完全没有一般小型犬的神经质，是非常适合小孩的守护犬。它们的胆子很大，也相当机警，能高度警惕地守护家园，是最受欢迎的小型护卫犬之一。",
        "TagIDs": ["寿命：12-15年", "身高：25cm-30cm", "体重：10kg-12kg", "市场价：1000-10000"],
        "Morphological_characteristics": "耳中等大小，直立，耳尖呈圆形，棕褐色眼睛中等大小，呈卵圆形。眼睛中等大小，不突出，眼圈为暗黑色，眼角清晰。嘴鼻部优美且紧凑，缺毛，为先天性特征。胸部宽度适中，向下逐渐变细，在前肢之间放松。后驱的肌肉发达且结实，但宽度略小于肩部。体躯比卡狄犬略小。\n 被毛长度适中，绒毛层短而厚，外层被毛较长而粗糙，能抵御各种环境条件。全身毛长度不等，颈圈、胸部和肩部稍厚而长，躯干被毛平伏。前肢腹面、下腹部与后躯腹面毛比较长。被毛最好是直的。该犬容易褪毛。毛色有淡黄色短毛，金色短毛，红色短毛，黄褐色和白色短毛。",
        "Personality_characteristics": "本性友好，勇敢大胆，既不胆怯也不凶残，性格温和。\n精力旺盛，容易训练，很快适应家居生活，会成为孩子们的好朋友。但易患进行性视网膜脱落，血液失调，臀部发育不良和脊椎疾病。",
        "Breeding_method": "每天喂饲食物的量要适度，过多过少都不利健成长。每天的饲料中，应含肉类及等量的各种杂粮、蔬菜、胡萝卜、等素食。要定期更换品种，以确保摄食的营养全面。\n柯基犬容易患眼疾，应每隔3～5天，用2% 的硼酸水为它洗眼，以防止眼疾发生。还应定期为它洗澡、清除耳垢、牙垢，修剪爪子等。柯基犬无体臭，一个月洗一次澡就可以了。犬舍要选择通风、干净和干燥的地方，并每隔半个月或一个月做一次消毒处理，以防滋生细菌。",
        "comb": "梳毛要注意顺序：由颈部开始，由前向后，自上而下顺次进行，即先从颈部到肩部，然后依次背、胸、腰、腹、后躯，再梳头部，最后是四肢和尾部，梳理过程中应梳完一侧再梳另一侧。\n梳毛的手法：梳毛应按顺毛方向快速梳拉。许多人在给长毛犬梳毛时，只梳表面的长毛而忽略了下面的细茸毛梳理。犬的底毛，细软而绵密，长期不梳理，会形成缠结，甚至会引起湿疹、皮癣或其他皮肤病。因此在对长毛犬梳理时，应一层一层地梳，还要把长毛翻起来，然后对其底毛进行梳理。\n梳子的种类：毛刷、弹性钢丝刷和长而疏的金属梳。毛刷只能使长毛的末端蓬松，而细茸毛却梳不到。梳理长毛犬时，毛刷、弹性钢丝刷和长而疏的金属梳应配合使用。"
      },
      spaceimgs: ["http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/46932530-4bc8-48dc-bf10-1e5e39d254b8_750x470.png", "http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/73efa039-6c54-43c6-8ad9-70f831723e2e_750x470.png", "http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/eb8bbf4d-e236-4c92-900c-67d8b941b02a_750x470.png"]
    })
  },
  setCurrent: function (e) {  //当前图片索引
    this.setData({
      currentIndex: e.detail.current + 1
    })
  },
  imgPreview: function () { //图片预览
    const imgs = this.data.spaceimgs;
    wx.previewImage({
      current: imgs[this.data.currentIndex - 1], // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },
  
  // formateNumber:function(n){
  //   return n>9?n:'0'+n
  // }
})
