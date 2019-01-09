Array.prototype.delete = function(dx) { 
    if(isNaN(dx)||dx>this.length){return false;} 
    this.splice(dx,1); 
} 

export default {
    // 筛选功能
    createFilter(queryString, type) {
        return restaurant => {
            return (
            restaurant[type].toLowerCase().indexOf(queryString.toLowerCase()) >=0);
        };
    },
    // 函数节流
     /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * */
    throttle(fn, t = 1000) {
        if (typeof fn !== "function") {
          console.log("in throttle,first argument must be Function");
          return;
        }
        let _fn = fn;
        let time = null;
        let first = true;
        return function() {
          let arg = arguments;
          let _this = this;
          if (first) {
            _fn.apply(_this, arg);
            first = false;
            return;
          }
          if (time) return;
          time = setTimeout(function() {
            setTimeout(time);
            time = null;
            _fn.apply(_this, arg);
          }, t);
        };
      },
      /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间 单位ms
   */
    debounce(fn, t = 1000) {
        if (typeof fn !== "function") {
            console.log("in debounce,first argument must be Function");
            return;
        }
        let time;

        return function() {
        const arg = arguments;

            if (time) {
                clearTimeout(time);
                time = null;
                return;
            }
            time = setTimeout(() => {
                fn.apply(this, arg);
                time = null;
            }, t);
        };
    },
    /**
   * @description 时间格式化
   * @param { Data } 时间
   * @param { String } 格式，默认'yyyy-MM-dd hh:mm:ss'
   * @return { String } 格式化后的时间
   */
    dateFormat(date, fmt = "yyyy-MM-dd hh:mm:ss") {
        const o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
        };

        if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
        }
        for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
        }
        }
        return fmt;
    },
}
