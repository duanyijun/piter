/**
 * Created by Julian on 2016/12/21.
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
var timer = null;
function startMove(obj, attr, gola) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var Curt = 0;
        if (attr == "opacity") {
            Curt = parseFloat(getStyle(obj, attr)) * 100;
        } else {
            Curt = parseInt(getStyle(obj, attr))
        }
        var iSpeed = (gola - Curt) / 8;

        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (Curt == gola) {
            clearInterval(obj.timer);
        } else {

            if (attr == "opacity") {
                obj.style.opacity = (Curt + iSpeed) / 100;
            } else {
                obj.style[attr] = Curt + iSpeed + "px";
            }
        }
    }, 30)
}