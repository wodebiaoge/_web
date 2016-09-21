var CITIES = [
['六安','LiuAn','1'],
['滁州','ChuZhou','1'],
['株洲','ZhuZhou','12'],
['南宁','NanNing','5'],
['梧州','WuZhou','5'],
['普洱','PuEr','26'],
['文山壮族苗族自治州','WenShanZhuangZuMiaoZuZiZhiZhou','26'],
['甘孜藏族自治州','GanZiCangZuZiZhiZhou','23'],
['酒泉','JiuQuan','3'],
['咸阳','XianYang','22'],
['鹰潭','YingTan','14'],
['青岛','QingDao','20'],
['桃园','TaoYuan','397'],
['武汉','WuHan','11'],
['澳门','AoMen','390'],
['惠州','HuiZhou','4'],
['咸宁','XianNing','11'],
['张掖','ZhangYe','3'],
['克孜勒苏柯尔克孜自治州','KeZiLeSuKeErKeZiZiZhiZhou','24'],
['万宁','WanNing','7'],
['天门','TianMen','11'],['衡水','HengShui','8'],
['玉树藏族自治州','YuShuCangZuZiZhiZhou','19'],
['聊城','LiaoCheng','20'],
['柳州','LiuZhou','5'],
['阿坝藏族羌族自治州','ABaCangZuQiangZuZiZhiZhou','23'],
['琼中黎族苗族自治','QiongZhongLiZuMiaoZuZiZhi','7'],
['淮南','HuaiNan','1'],
['嘉兴','JiaXing','27'],
['重庆','ChongQing','280'],['辽阳','LiaoYang','16'],
['甘南藏族自治州','GanNanCangZuZiZhiZhou','3'],
['安顺','AnShun','6'],['牡丹江','MuDanJiang','9'],['白山','BaiShan','15'],
['固原','GuYuan','18'],
['淮北','HuaiBei','1'],
['兴城','XingCheng','16'],
['贺州','HeZhou','5'],
['哈密','HaMi','24'],
['巴中','BaZhong','23'],['哈尔滨','HaErBin','9'],
['文昌','WenChang','7'],
['常德','ChangDe','12'],['晋中','JinZhong','21'],['铁岭','TieLing','16'],
['高雄','GaoXiong','397'],
['银川','YinChuan','18'],
['岳阳','YueYang','12'],
['黔南布依族苗族自治州','QianNanBuYiZuMiaoZuZiZhiZhou','6'],
['九江','JiuJiang','14'],
['曲靖','QuJing','26'],
['广州','GuangZhou','4'],
['菏泽','HeZe','20'],['呼伦贝尔','HuLunBeiEr','17'],
['伊犁哈萨克自治州','YiLiHaSaKeZiZhiZhou','24'],
['襄阳','XiangYang','11'],['乌海','WuHai','17'],
['中卫','ZhongWei','18'],
['莆田','PuTian','2'],['沧州','CangZhou','8'],
['阿克苏','AKeSu','24'],
['苗栗','MiaoLi','397'],
['石嘴山','ShiZuiShan','18'],
['拉萨','LaSa','25'],
['乌鲁木齐','WuLuMuQi','24'],
['图木舒克','TuMuShuKe','24'],
['漯河','LuoHe','10'],['白城','BaiCheng','15'],
['深圳','ShenZhen','4'],
['安阳','AnYang','10'],
['临高','LinGao','7'],
['宿迁','SuQian','13'],
['榆林','YuLin','22'],
['云林','YunLin','397'],
['金华','JinHua','27'],
['南平','NanPing','2'],
['海北藏族自治州','HaiBeiCangZuZiZhiZhou','19'],
['荆州','JingZhou','11'],
['广安','GuangAn','23'],
['嘉义','JiaYi','397'],
['铜川','TongChuan','22'],
['清远','QingYuan','4'],['秦皇岛','QinHuangDao','8'],
['巢湖','ChaoHu','1'],
['娄底','LouDi','12'],
['乌苏里江','WuSuLiJiang','9'],
['汉中','HanZhong','22'],
['许昌','XuChang','10'],['通辽','TongLiao','17'],
['林芝','LinZhi','25'],
['资阳','ZiYang','23'],
['海林','HaiLin','9'],['赤峰','ChiFeng','17'],
['红河哈尼族彝族自治州','HongHeHaNiZuYiZuZiZhiZhou','26'],
['马鞍山','MaAnShan','1'],['邢台','XingTai','8'],['丹东','DanDong','16'],
['亳州','BoZhou','1'],
['丽水','LiShui','27'],
['蚌埠','BengBu','1'],['锡林郭勒盟','XiLinGuoLeMeng','17'],
['六盘水','LiuPanShui','6'],
['丽江','LiJiang','26'],
['海西蒙古族藏族自治州','HaiXiMengGuZuCangZuZiZhiZhou','19'],
['彰化','ZhangHua','397'],
['赣州','GanZhou','14'],['晋城','JinCheng','21'],
['陵水黎族自治','LingShuiLiZuZiZhi','7'],
['昌吉回族自治州','ChangJiHuiZuZiZhiZhou','24'],
['绍兴','ShaoXing','27'],
['黄山','HuangShan','1'],
['泉州','QuanZhou','2'],
['嘉峪关','JiaYuGuan','3'],
['陇南','LongNan','3'],
['宜兰','YiLan','397'],['辽源','LiaoYuan','15'],
['厦门','XiaMen','2'],
['广元','GuangYuan','23'],['临汾','LinFen','21'],
['临沂','LinYi','20'],
['临沧','LinCang','26'],
['南投','NanTou','397'],['七台河','QiTaiHe','9'],
['益阳','YiYang','12'],
['济源','JiYuan','10'],
['淮安','HuaiAn','13'],
['平凉','PingLiang','3'],
['长沙','ChangSha','12'],
['平顶山','PingDingShan','10'],['阿拉善盟','ALaShanMeng','17'],
['山南','ShanNan','25'],['呼和浩特','HuHeHaoTe','17'],
['阜阳','FuYang','1'],
['百色','BaiSe','5'],['长治','ChangZhi','21'],
['衡阳','HengYang','12'],
['金昌','JinChang','3'],
['湘潭','XiangTan','12'],['盘锦','PanJin','16'],
['阿里','ALi','25'],
['台中','TaiZhong','397'],
['渭南','WeiNan','22'],['吕梁','LvLiang','21'],
['台东','TaiDong','397'],
['洛阳','LuoYang','10'],
['滨州','BinZhou','20'],['佳木斯','JiaMuSi','9'],
['保亭黎族苗族自治','BaoTingLiZuMiaoZuZiZhi','7'],
['崇左','ChongZuo','5'],
['海东','HaiDong','19'],['长春','ChangChun','15'],
['盐城','YanCheng','13'],
['和田','HeTian','24'],
['定西','DingXi','3'],
['泸州','LuZhou','23'],
['恩施土家族苗族自治州','EnShiTuJiaZuMiaoZuZiZhiZhou','11'],
['遂宁','SuiNing','23'],
['阿勒泰','ALeTai','24'],['延边朝鲜族自治州','YanBianChaoXianZuZiZhiZhou','15'],
['黄石','HuangShi','11'],
['济南','JiNan','20'],
['澄迈','ChengMai','7'],
['潜江','QianJiang','11'],
['兰州','LanZhou','3'],
['楚雄彝族自治州','ChuXiongYiZuZiZhiZhou','26'],
['桂林','GuiLin','5'],
['自贡','ZiGong','23'],
['龙岩','LongYan','2'],['兴安盟','XingAnMeng','17'],
['果洛藏族自治州','GuoLuoCangZuZiZhiZhou','19'],['朔州','ShuoZhou','21'],
['湘西土家族苗族自治州','XiangXiTuJiaZuMiaoZuZiZhiZhou','12'],
['泰州','TaiZhou','13'],
['上海','ShangHai','100'],
['常州','ChangZhou','13'],
['长白山保护区','ChangBaiShanBaoHuQu','15'],
['连云港','LianYunGang','13'],
['南昌','NanChang','14'],
['宁波','NingBo','27'],['锦州','JinZhou','16'],['大庆','DaQing','9'],
['吴忠','WuZhong','18'],
['新乡','XinXiang','10'],
['台北','TaiBei','397'],
['湛江','ZhanJiang','4'],
['三亚','SanYa','7'],
['北海','BeiHai','5'],
['萍乡','PingXiang','14'],
['珠海','ZhuHai','4'],
['台南','TaiNan','397'],
['德宏傣族景颇族自治州','DeHongDaiZuJingPoZuZiZhiZhou','26'],
['肇庆','ZhaoQing','4'],['松原','SongYuan','15'],
['黔东南苗族侗族自治州','QianDongNanMiaoZuDongZuZiZhiZhou','6'],
['梅州','MeiZhou','4'],
['衢州','QuZhou','27'],['北京','BeiJing','28'],
['泰安','TaiAn','20'],
['新余','XinYu','14'],
['成都','ChengDu','23'],
['塔城','TaCheng','24'],
['孝感','XiaoGan','11'],
['海南藏族自治州','HaiNanCangZuZiZhiZhou','19'],
['庆阳','QingYang','3'],
['池州','ChiZhou','1'],['营口','YingKou','16'],
['雅安','YaAn','23'],
['威海','WeiHai','20'],
['铜陵','TongLing','1'],['葫芦岛','HuLuDao','16'],
['香港','XiangGang','389'],
['周口','ZhouKou','10'],
['鄂州','EZhou','11'],
['白沙黎族自治','BaiShaLiZuZiZhi','7'],['阳泉','YangQuan','21'],
['阳江','YangJiang','4'],
['三沙','SanSha','7'],['承德','ChengDe','8'],
['宣城','XuanCheng','1'],
['延安','YanAn','22'],
['遵义','ZunYi','6'],['大兴安岭','DaXingAnLing','9'],
['抚州','FuZhou','14'],
['定安','DingAn','7'],['邯郸','HanDan','8'],
['西双版纳傣族自治州','XiShuangBanNaDaiZuZiZhiZhou','26'],
['迪庆藏族自治州','DiQingCangZuZiZhiZhou','26'],
['五指山','WuZhiShan','7'],
['石河子','ShiHeZi','24'],
['信阳','XinYang','10'],
['南阳','NanYang','10'],
['合肥','HeFei','1'],
['宜宾','YiBin','23'],['鄂尔多斯','EErDuoSi','17'],
['西安','XiAn','22'],
['西宁','XiNing','19'],
['漳州','ZhangZhou','2'],
['茂名','MaoMing','4'],
['克拉玛依','KeLaMaYi','24'],
['杭州','HangZhou','27'],['保定','BaoDing','8'],
['莱芜','LaiWu','20'],
['毕节','BiJie','6'],
['防城港','FangChengGang','5'],
['花莲','HuaLian','397'],['鸡西','JiXi','9'],['鹤岗','HeGang','9'],
['扬州','YangZhou','13'],
['温州','WenZhou','27'],
['乐东黎族自治','YueDongLiZuZiZhi','7'],
['南京','NanJing','13'],['绥化','SuiHua','9'],
['武威','WuWei','3'],
['日喀则','RiKaZe','25'],
['神农架林区','ShenNongJiaLinQu','11'],
['河池','HeChi','5'],
['佛山','FoShan','4'],
['澎湖','PengHu','397'],
['随州','SuiZhou','11'],['伊春','YiChun','9'],['包头','BaoTou','17'],['黑河','HeiHe','9'],
['永州','YongZhou','12'],
['安庆','AnQing','1'],
['宁德','NingDe','2'],
['琼海','QiongHai','7'],
['安康','AnKang','22'],
['东营','DongYing','20'],
['济宁','JiNing','20'],
['江门','JiangMen','4'],
['昆明','KunMing','26'],
['东方','DongFang','7'],
['吉安','JiAn','14'],
['绵阳','MianYang','23'],
['铜仁','TongRen','6'],
['黄冈','HuangGang','11'],['忻州','XinZhou','21'],
['怒江傈僳族自治州','NuJiangLiSuZuZiZhiZhou','26'],
['东莞','DongGuan','4'],['唐山','TangShan','8'],
['喀什','KaShen','24'],
['乐山','YueShan','23'],
['玉溪','YuXi','26'],
['苏州','SuZhou','13'],
['那曲','NaQu','25'],
['郴州','ChenZhou','12'],
['汕尾','ShanWei','4'],
['德阳','DeYang','23'],
['阿拉尔','ALaEr','24'],
['贵阳','GuiYang','6'],
['眉山','MeiShan','23'],
['三明','SanMing','2'],
['开封','KaiFeng','10'],
['海口','HaiKou','7'],
['来宾','LaiBin','5'],
['韶关','ShaoGuan','4'],
['潍坊','WeiFang','20'],
['徐州','XuZhou','13'],
['儋州','DanZhou','7'],['大连','DaLian','16'],
['景德镇','JingDeZhen','14'],
['宿州','SuZhou','1'],
['南通','NanTong','13'],['抚顺','FuShun','16'],
['昭通','ZhaoTong','26'],
['三门峡','SanMenXia','10'],
['凉山彝族自治州','LiangShanYiZuZiZhiZhou','23'],
['鹤壁','HeBi','10'],
['金门','JinMen','397'],
['仙桃','XianTao','11'],['大同','DaTong','21'],['太原','TaiYuan','21'],
['基隆','JiLong','397'],
['上饶','ShangRao','14'],
['邵阳','ShaoYang','12'],['通化','TongHua','15'],['张家口','ZhangJiaKou','8'],['齐齐哈尔','QiQiHaEr','9'],['朝阳','ChaoYang','16'],
['屯昌','TunChang','7'],
['福州','FuZhou','2'],['四平','SiPing','15'],
['商洛','ShangLuo','22'],['鞍山','AnShan','16'],
['攀枝花','PanZhiHua','23'],
['张家界','ZhangJiaJie','12'],
['烟台','YanTai','20'],
['台州','TaiZhou','27'],
['汕头','ShanTou','4'],
['南充','NanChong','23'],
['湖州','HuZhou','27'],
['河源','HeYuan','4'],
['屏东','PingDong','397'],['石家庄','ShiJiaZhuang','8'],
['大理','DaLi','26'],
['潮州','ChaoZhou','4'],
['宝鸡','BaoJi','22'],['沈阳','ShenYang','16'],
['濮阳','PuYang','10'],
['黄南藏族自治州','HuangNanCangZuZiZhiZhou','19'],['本溪','BenXi','16'],
['达州','DaZhou','23'],
['怀化','HuaiHua','12'],
['郑州','ZhengZhou','10'],
['昌都','ChangDu','25'],['廊坊','LangFang','8'],
['内江','NeiJiang','23'],
['保山','BaoShan','26'],
['淄博','ZiBo','20'],['双鸭山','ShuangYaShan','9'],['天津','TianJin','29'],
['驻马店','ZhuMaDian','10'],
['宜昌','YiChang','11'],
['揭阳','JieYang','4'],
['云浮','YunFu','4'],['巴彦淖尔','BaYanNaoEr','17'],['乌兰察布','WuLanChaBu','17'],
['无锡','WuXi','13'],
['枣庄','ZaoZhuang','20'],
['德州','DeZhou','20'],
['荆门','JingMen','11'],
['天水','TianShui','3'],
['芜湖','WuHu','1'],
['钦州','QinZhou','5'],
['黔西南布依族苗族自治州','QianXiNanBuYiZuMiaoZuZiZhiZhou','6'],
['五家渠','WuJiaQu','24'],
['白银','BaiYin','3'],
['镇江','ZhenJiang','13'],
['贵港','GuiGang','5'],
['中山','ZhongShan','4'],
['日照','RiZhao','20'],
['焦作','JiaoZuo','10'],['阜新','FuXin','16'],
['商丘','ShangQiu','10'],
['临夏回族自治州','LinXiaHuiZuZiZhiZhou','3'],
['新竹','XinZhu','397'],
['巴音郭楞蒙古自治州','BaYinGuoLengMengGuZiZhiZhou','24'],
['吐鲁番','TuLuFan','24'],
['舟山','ZhouShan','27'],
['昌江黎族自治','ChangJiangLiZuZiZhi','7'],
['博尔塔拉蒙古自治州','BoErTaLaMengGuZiZhiZhou','24'],
['玉林','YuLin','5'],['运城','YunCheng','21'],
['十堰','ShiYan','11'],
['宜春','YiChun','14'],['吉林市','JiLinShi','15']
];