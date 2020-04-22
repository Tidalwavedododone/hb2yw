// 都都 2020年9月5日 https://github.com/Tidalwavedododone/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [    
        "亲爱的小猫",  //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "今天是你的生日",
        "我可没有忘记哟",
        "去年的生日",
        "还记得许的什么愿望吗",
        "时间总是不紧不慢的走着",
        "不是什么好事也不是什么坏事",
        "令人高兴的是",
        "我还能在你身边",
        "对亲爱的你说",
        "祝你二十一岁快乐",
        "天天心情不错",
        "痘痘全部都好了",
        "该吃就吃 该喝就喝",
        "男票一定找到更好的",
        "开玩笑 上一句还是算了吧~",
        "小猫 快许个愿望吧",
        "都都祝你心想事成",
        "不用求算命先生也能运气不错",
        "永远永远永远都快乐~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "有点暗 请打开灯",
        play: "来点音乐吧",
        bannar_coming: "这里有什么？",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "点上蜡烛吧",
        wish_message: "21岁生日快乐！",
        story: "A MESSAGE FOR YOU",
    }
};
