$("body").append(`
<style>
  .screen {
    text-align: center;
    background: gray;
    background: -moz-linear-gradient(center top , #00DD88 0%, #00CC00 100%) repeat scroll 0 0 transparent;
    border-radius: 30px 30px 30px 30px;
    margin: 5px 0 10px 15px;
    padding: 15px;
    position: absolute;
    left: -980px;
    display: none;
    z-index: 100;
    color: #fff;
    cursor: pointer; 
  }
</style>
 <div class='screen' onclick="about()" id="a"><b>?</b></div>`);

 $('.screen').animate({
 opacity: 1,
 left: "1px",
 bottom: "10px",
 height: "toggle"
 }, 1000, function() {
 }).css('position','fixed');