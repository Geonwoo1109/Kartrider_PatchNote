const scriptName = "카트패치내용";

const allsee = "\u200d".repeat(500);

//카트 - 사이트 jsoup파싱
const Js = org.jsoup.Jsoup;

const n = "\n";
const nn = "\n".repeat(2);


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
    if (msg == ".패치노트 카트") {
        
      var date = new Date();
      var Y = String(date.getFullYear());
      var M = String(date.getMonth()+1);
      if (M.length == 1) M = "0" + M;
      var D = String(date.getDate());
      if (D.length == 1) D = "0" + D;
      
        var MainUrl = Js.connect("https://kart.nexon.com/Kart/News/Patch/List.aspx").get() .select("#kart_main_sections > section.board > div > div.list_tb.tb_notice > table > tbody");
      var Final = [];
      for (i=1; i<11; i++) {
        var site = MainUrl.select("tr:nth-child("+i+")");
        Final.push(""
          +"["+site.select("td:nth-child(1)").text()+"]"
          +n+"day: "+site.select("td:nth-child(2)").text()
          +n+"views: "+site.select("td:nth-child(3)").text()
          +n+"link: "+site.select("td:nth-child(1) > div > div > a").attr("href")
        );
      }
      replier.reply(
        "최근 10개의 패치노트!"+n+
        "("+Y+"."+M+"."+D+") 기준   "+allsee+nn+
        Final.join(nn));
      Final = [];
  }
    
}
  
