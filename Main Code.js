const scriptName = "카트패치내용";

const Js = org.jsoup.Jsoup;
 
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if (msg == ".패치") {
    try {
      var a = Js.connect("https://kart.nexon.com/Kart/News/Patch/List.aspx").get().select("#kart_main_sections > section.board > div > div.list_tb.tb_notice > table > tbody > tr:nth-child(1) > td:nth-child(1)").select("a").attr("hre");
      replier.reply(a);
    } catch (e) {replier.reply(e+e.lineNumber);}
  }
  
}
