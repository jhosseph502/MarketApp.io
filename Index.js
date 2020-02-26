(function(global, factory) { typeof exports === "object" && typeof module !== "undefined" ? (module.exports = factory()) : typeof define === "function" && define.amd ? define(factory) : ((global = global || self), (global.App = factory()));})
(this, function() { "use strict";
  function _extends() {  _extends = Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
    return _extends.apply(this, arguments);
  };
//---- **** App **** ----------------------------------
  var App = (function() {
    function App(el, config) {
      config = App.formatConfig(config || {});
      this.config = config;
      if (typeof el === "string") {
        el = document.body.querySelector(el);
      }
      this.$el = el;
      this.$body;
      this.main_1();
      this.activity_1();
    }
    //--------------------------------------
    App.formatConfig = function formatConfig(config) {
      var defaultConfig = {
        main: {
          versionCode: "1",
          versionCodeName:"1.0",
          packagee:"marketapp.io",
        },
        application:{ // app definicion
		  type:"navbar", // tipo: navbar - two_navbar
		  icon:"currentApp", // url icon.png
		  label:"MarketApp.io", // Nombre del modulo
        },
        theme: {
          currentTheme: true, // 
          customTheme : false,
          currentRipple: true,
          styles: {
            colorPrimary: "default", // color claro
            colorSecondary: "default", // color oscuro
            incluideRipple: true,
          },
        },
      };
      return _extends({}, defaultConfig, {}, config);
    };
    //--------------------------------------
    var _proto = App.prototype;

    _proto.main_1 = function main() {
      var _this = this,
        titulo = this.config.application.label,
        customElm = window.customElements;

      customElm.define("xx-button", class extends HTMLButtonElement {}, {extends: "button"});
      customElm.define("llo-navbar", class extends HTMLDivElement {}, {extends: "div"});
      customElm.define("llo-app", class extends HTMLElement {});
      customElm.define("llo-header", class extends HTMLElement {});
      customElm.define("llo-body", class extends HTMLElement {});
      customElm.define("x-card", class extends HTMLElement {});
      customElm.define("llo-title", class extends HTMLElement {
          connectedCallback() {
            this.innerHTML = "<span>" + titulo + "</span>"; } }
      );
      this.$body = document.querySelector("llo-body");
    };

    _proto.activity_1 = function activity_1() {
      var _this1 = this,
        root = document.documentElement,
        night = localStorage.getItem("ModoNoche"),
		currentTheme = this.config.theme.currentTheme,
		customTheme  = this.config.theme.customTheme,
        ripple = this.config.theme.styles.incluideRipple;
        function _dark(){
        root.style.setProperty("--fondoNoche", "var(--colorBlack)");
        root.style.setProperty("--colorNoche", "var(--colorWhite)");
        root.style.setProperty("--colorRipple", "var(--colorWhite)");
        root.style.setProperty("--colorNocheRgbaW", "var(--rgbaW)");       
        };
        function _light(){
        root.style.setProperty("--fondoNoche", "var(--colorWhite)");
        root.style.setProperty("--colorNoche", "var(--colorBlack)");
        root.style.setProperty("--colorRipple", "var(--colorBlack)");
        root.style.setProperty("--colorNocheRgbaW", "var(--rgbaB)");
        };

      if(customTheme){
         if(customTheme == "oscuro" 
        && currentTheme == false){
            _dark();
         }
         if(customTheme == "claro"
        && currentTheme == false){
            _light();
         }
      }
      if(ripple){
      var i,
          rippleEfect = document.getElementsByClassName("efectR");
      for(i = 0; i < rippleEfect.length; i++){
      
      if(ripple !== false){
        rippleEfect[i].style.background = "none";
      }
      if(ripple !== true){
        rippleEfect[i].style.background = "var(--colorRipple)";
        alert("jajajaja");
      }
      }
      }
      
      alert(ripple+" / "+currentTheme +" / "+ customTheme)
      

      if (this.config.theme.colorPrimary == false){
      	 
      	 } else {
        root.style.setProperty( "--colorPrimary", this.config.theme.styles.colorPrimary);
      };
    };
   //-- ↑ _proto.activity_1 ------------------------------------
    return App;
  })();
  return App;
});
