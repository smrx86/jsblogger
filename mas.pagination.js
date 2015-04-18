//<![CDATA[
function showpageCount(n){var h=home_page_url;var f=new Array();var m=1;var c=1;var q=0;var s=0;var d=0;var e="";var a="";var o="";for(var l=0,k;k=n.feed.entry[l];l++){var r=k.published.$t.substring(0,19)+k.published.$t.substring(23,29);timestamp=encodeURIComponent(r);var t=k.title.$t;if(t!=""){if(q==0||(q%pageCount==(pageCount-1))){if(h.indexOf(timestamp)!=-1){m=c}if(t!=""){c++}f[f.length]="/search?updated-max="+timestamp+"&max-results="+pageCount}}q++}for(var g=0;g<f.length;g++){if(g>=(m-displayPageNum-1)&&g<(m+displayPageNum)){if(s==0&&g==m-2){if(m==2){a='


<script type="text/javascript" src="/static/js/analytics.js"></script>
<script type="text/javascript">archive_analytics.values.server_name="wwwb-app0.us.archive.org";archive_analytics.values.server_ms=97;</script>
<link type="text/css" rel="stylesheet" href="/static/css/banner-styles.css"/>




<!-- BEGIN WAYBACK TOOLBAR INSERT -->
<script type="text/javascript" src="/static/js/disclaim-element.js" ></script>
<script type="text/javascript" src="/static/js/graph-calc.js" ></script>
<script type="text/javascript" src="/static/jflot/jquery.min.js" ></script>
<script type="text/javascript">//<![CDATA[
var __wm = (function(){
var wbPrefix = "/web/";
var wbCurrentUrl = "http://kauman.googlecode.com/files/mas.pagination.js";

var firstYear = 1996;
var imgWidth = 500,imgHeight = 27;
var yearImgWidth = 25,monthImgWidth = 2;
var displayDay = "26";
var displayMonth = "Jul";
var displayYear = "2012";
var prettyMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var $D=document,$=function(n){return document.getElementById(n)};
var trackerVal,curYear = -1,curMonth = -1;
var yearTracker,monthTracker;
function showTrackers(val) {
  if (val===trackerVal) return;
  var $ipp=$("wm-ipp");
  var $y=$("displayYearEl"),$m=$("displayMonthEl"),$d=$("displayDayEl");
  if (val) {
    $ipp.className="hi";
  } else {
    $ipp.className="";
    $y.innerHTML=displayYear;$m.innerHTML=displayMonth;$d.innerHTML=displayDay;
  }
  yearTracker.style.display=val?"inline":"none";
  monthTracker.style.display=val?"inline":"none";
  trackerVal = val;
}
function getElementX2(obj) {
  var $e=jQuery(obj);
  return (typeof $e=="undefined"||typeof $e.offset=="undefined")?
    getElementX(obj):Math.round($e.offset().left);
}
function trackMouseMove(event,element) {
  var eventX = getEventX(event);
  var elementX = getElementX2(element);
  var xOff = Math.min(Math.max(0, eventX - elementX),imgWidth);
  var monthOff = xOff % yearImgWidth;

  var year = Math.floor(xOff / yearImgWidth);
  var monthOfYear = Math.min(11,Math.floor(monthOff / monthImgWidth));
  // 1 extra border pixel at the left edge of the year:
  var month = (year * 12) + monthOfYear;
  var day = monthOff % 2==1?15:1;
  var dateString = zeroPad(year + firstYear) + zeroPad(monthOfYear+1,2) +
    zeroPad(day,2) + "000000";

  $("displayYearEl").innerHTML=year+firstYear;
  $("displayMonthEl").innerHTML=prettyMonths[monthOfYear];
  // looks too jarring when it changes..
  //$("displayDayEl").innerHTML=zeroPad(day,2);
  var url = wbPrefix + dateString + '/' +  wbCurrentUrl;
  $("wm-graph-anchor").href=url;

  if(curYear != year) {
    var yrOff = year * yearImgWidth;
    yearTracker.style.left = yrOff + "px";
    curYear = year;
  }
  if(curMonth != month) {
    var mtOff = year + (month * monthImgWidth) + 1;
    monthTracker.style.left = mtOff + "px";
    curMonth = month;
  }
}
function hideToolbar() {
  $("wm-ipp").style.display="none";
}
function bootstrap() {
  var $spk=$("wm-ipp-sparkline");
  yearTracker=$D.createElement('div');
  yearTracker.className='yt';
  with(yearTracker.style){
    display='none';width=yearImgWidth+"px";height=imgHeight+"px";
  }
  monthTracker=$D.createElement('div');
  monthTracker.className='mt';
  with(monthTracker.style){
    display='none';width=monthImgWidth+"px";height=imgHeight+"px";
  }
  $spk.appendChild(yearTracker);
  $spk.appendChild(monthTracker);

  var $ipp=$("wm-ipp");
  $ipp&&disclaimElement($ipp);
}
return{st:showTrackers,mv:trackMouseMove,h:hideToolbar,bt:bootstrap};
})();//]]>
</script>
<style type="text/css">
body {
  margin-top:0 !important;
  padding-top:0 !important;
  min-width:800px !important;
}
</style>
<div id="wm-ipp" lang="en" style="display:none;">

<div style="position:fixed;left:0;top:0;width:100%!important">
<div id="wm-ipp-inside">
   <table style="width:100%;"><tbody><tr>
   <td id="wm-logo">
       <a href="/web/" title="Wayback Machine home page"><img src="/static/images/toolbar/wayback-toolbar-logo.png" alt="Wayback Machine" width="110" height="39" border="0" /></a>
   </td>
   <td class="c">
       <table style="margin:0 auto;"><tbody><tr>
       <td class="u" colspan="2">
       <form target="_top" method="get" action="/web/form-submit.jsp" name="wmtb" id="wmtb"><input type="text" name="url" id="wmtbURL" value="http://kauman.googlecode.com/files/mas.pagination.js" style="width:400px;" onfocus="this.focus();this.select();" /><input type="hidden" name="type" value="replay" /><input type="hidden" name="date" value="20120726205138" /><input type="submit" value="Go" /><span id="wm_tb_options" style="display:block;"></span></form>
       </td>
       <td class="n" rowspan="2">
           <table><tbody>
           <!-- NEXT/PREV MONTH NAV AND MONTH INDICATOR -->
           <tr class="m">
           	<td class="b" nowrap="nowrap">
		
		    Jun
		
		</td>
		<td class="c" id="displayMonthEl" title="You are here: 20:51:38 Jul 26, 2012">JUL</td>
		<td class="f" nowrap="nowrap">
		
		    <a href="/web/20130304215138/http://kauman.googlecode.com/files/mas.pagination.js" title="4 Mar 2013"><strong>MAR</strong></a>
		
                </td>
	    </tr>
           <!-- NEXT/PREV CAPTURE NAV AND DAY OF MONTH INDICATOR -->
           <tr class="d">
               <td class="b" nowrap="nowrap">
               
                       <img src="/static/images/toolbar/wm_tb_prv_off.png" alt="Previous capture" width="14" height="16" border="0" />
               
               </td>
               <td class="c" id="displayDayEl" style="width:34px;font-size:24px;" title="You are here: 20:51:38 Jul 26, 2012">26</td>
	       <td class="f" nowrap="nowrap">
               
		   <a href="/web/20130304215138/http://kauman.googlecode.com/files/mas.pagination.js" title="21:51:38 Mar 4, 2013"><img src="/static/images/toolbar/wm_tb_nxt_on.png" alt="Next capture" width="14" height="16" border="0" /></a>
	       
	       </td>
           </tr>
           <!-- NEXT/PREV YEAR NAV AND YEAR INDICATOR -->
           <tr class="y">
	       <td class="b" nowrap="nowrap">
               
                   2011
               
               </td>
               <td class="c" id="displayYearEl" title="You are here: 20:51:38 Jul 26, 2012">2012</td>
	       <td class="f" nowrap="nowrap">
               
	           <a href="/web/20131109110000/http://kauman.googlecode.com/files/mas.pagination.js" title="9 Nov 2013"><strong>2013</strong></a>
	       
	       </td>
           </tr>
           </tbody></table>
       </td>
       </tr>
       <tr>
       <td class="s">
           <a class="t" href="/web/20120726205138*/http://kauman.googlecode.com/files/mas.pagination.js" title="See a list of every capture for this URL">10 captures</a>
           <div class="r" title="Timespan for captures of this URL">26 Jul 12 - 30 Dec 14</div>
       </td>
       <td class="k">
       <a href="" id="wm-graph-anchor">
       <div id="wm-ipp-sparkline" title="Explore captures for this URL">
	 <img id="sparklineImgId" alt="sparklines"
		 onmouseover="__wm.st(1)" onmouseout="__wm.st(0)"
		 onmousemove="__wm.mv(event,this)"
		 width="500"
		 height="27"
		 border="0"
		 src="/web/jsp/graph.jsp?graphdata=500_27_1996:-1:000000000000_1997:-1:000000000000_1998:-1:000000000000_1999:-1:000000000000_2000:-1:000000000000_2001:-1:000000000000_2002:-1:000000000000_2003:-1:000000000000_2004:-1:000000000000_2005:-1:000000000000_2006:-1:000000000000_2007:-1:000000000000_2008:-1:000000000000_2009:-1:000000000000_2010:-1:000000000000_2011:-1:000000000000_2012:6:000000100000_2013:-1:002100000011_2014:-1:010000000102_2015:-1:000000000000" />
       </div>
       </a>
       </td>
       </tr></tbody></table>
   </td>
   <td class="r">
       <a href="#close" onclick="__wm.h();return false;" style="background-image:url(/static/images/toolbar/wm_tb_close.png);top:5px;" title="Close the toolbar">Close</a>
       <a href="http://faq.web.archive.org/" style="background-image:url(/static/images/toolbar/wm_tb_help.png);bottom:5px;" title="Get some help using the Wayback Machine">Help</a>
   </td>
   </tr></tbody></table>
</div>
</div>
</div>
<script type="text/javascript">__wm.bt();</script>
<!-- END WAYBACK TOOLBAR INSERT -->
<span class="showpage"><a href="/web/20120726205138/http://kauman.googlecode.com/">'+upPageWord+"</a></span>"}else{a='<span class="showpage"><a href="'+f[g]+'">'+upPageWord+"</a></span>"}s++}if(g==(m-1)){e+='<span class="showpagePoint">'+m+"</span>"}else{if(g==0){e+='<span class="showpageNum"><a href="/web/20120726205138/http://kauman.googlecode.com/">1</a></span>'}else{e+='<span class="showpageNum"><a href="'+f[g]+'">'+(g+1)+"</a></span>"}}if(d==0&&g==m){o='<span class="showpage"> <a href="'+f[g]+'">'+downPageWord+"</a></span>";d++}}}if(m>1){e=""+a+" "+e+" "}e='<div class="showpageArea"><span style="COLOR: #aaa;" class="showpageOf">Pages ('+(c-1)+")</span>"+e;if(m<(c-1)){e+=o}if(c==1){c++}e+="</div>";var b=document.getElementsByName("pageArea");var j=document.getElementById("blog-pager");if(c<=2){e=""}for(var g=0;g<b.length;g++){b[g].innerHTML=e}if(b&&b.length>0){e=""}if(j){j.innerHTML=e}}function showpageCount2(r){var l=home_page_url;var k=new Array();var g=l.indexOf("/search/label/")!=-1;var d=g?l.substr(l.indexOf("/search/label/")+14,l.length):"";d=d.indexOf("?")!=-1?d.substr(0,d.indexOf("?")):d;var q=1;var e=1;var t=0;var v=0;var f=0;var h="";var a="";var s="";var c='<span class="showpageNum"><a href="/web/20120726205138/http://kauman.googlecode.com/search/label/'+d+"?&max-results="+pageCount+'">';var l=home_page_url;for(var o=0,n;n=r.feed.entry[o];o++){var u=n.published.$t.substring(0,19)+n.published.$t.substring(23,29);timestamp=encodeURIComponent(u);var w=n.title.$t;if(w!=""){if(t==0||(t%pageCount==(pageCount-1))){if(l.indexOf(timestamp)!=-1){q=e}if(w!=""){e++}k[k.length]="/search/label/"+d+"?updated-max="+timestamp+"&max-results="+pageCount}}t++}for(var j=0;j<k.length;j++){if(j>=(q-displayPageNum-1)&&j<(q+displayPageNum)){if(v==0&&j==q-2){if(q==2){a=c+upPageWord+"</a></span>"}else{a='<span class="showpage"><a href="'+k[j]+'">'+upPageWord+"</a></span>"}v++}if(j==(q-1)){h+='<span class="showpagePoint">'+q+"</span>"}else{if(j==0){h=c+"1</a></span>"}else{h+='<span class="showpageNum"><a href="'+k[j]+'">'+(j+1)+"</a></span>"}}if(f==0&&j==q){s='<span class="showpage"> <a href="'+k[j]+'">'+downPageWord+"</a></span>";f++}}}if(q>1){if(!g){h=""+a+" "+h+" "}else{h=""+a+" "+h+" "}}h='<div class="showpageArea"><span style="COLOR: #fff;" class="showpageOf">Pages ('+(e-1)+")</span>"+h;if(q<(e-1)){h+=s}if(e==1){e++}h+="</div>";var b=document.getElementsByName("pageArea");var m=document.getElementById("blog-pager");if(e<=2){h=""}for(var j=0;j<b.length;j++){b[j].innerHTML=h}if(b&&b.length>0){h=""}if(m){m.innerHTML=h}}var home_page_url=location.href;var thisUrl=home_page_url;if(thisUrl.indexOf("/search/label/")!=-1){if(thisUrl.indexOf("?updated-max")!=-1){var lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"))}else{var lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"))}}var home_page="/";if(thisUrl.indexOf("?q=")==-1){if(thisUrl.indexOf("/search/label/")==-1){document.write('<script src="'+home_page+'feeds/posts/summary?alt=json-in-script&amp;callback=showpageCount&amp;max-results=99999" ><\/script>')}else{document.write('<script src="'+home_page+"feeds/posts/full/-/"+lblname1+'?alt=json-in-script&callback=showpageCount2&max-results=99999" ><\/script>')}};
//]]>




<!--
     FILE ARCHIVED ON 20:51:38 Jul 26, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:12:37 Apr 18, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
-->
