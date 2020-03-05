var Time =
{
    time: new Date(),
    get: function ()
    {
        this.time = new Date();
        var h = this.time.getHours().toString();
        var m = this.time.getMinutes().toString();
        var s = this.time.getSeconds().toString();
        if (h > 12) h -= 12;
        if (h.length != 2) h = "0" + h;
        if (m.length != 2) m = "0" + m;
        if (s.length != 2) s = "0" + s;
        return h + ":" + m + ":" + s;
    },
    set: function (time)
    {

    }
}

var DateTime =
{
    date: new Date(),
    get: function ()
    {
        this.date = new Date();
        var m = this.date.getMonth() + 1;
        var d = this.date.getDay() + 1;
        var y = this.date.getFullYear();
        switch (m)
        {
            case 1: m = "January"; break;
            case 2: m = "February"; break;
            case 3: m = "March"; break;
            case 4: m = "April"; break;
            case 5: m = "May"; break;
            case 6: m = "June"; break;
            case 7: m = "July"; break;
            case 8: m ="August"; break;
            case 9: m = "September"; break;
            case 10: m ="October"; break;
            case 11: m = "November"; break;
            case 12: m = "Decemeber"; break;
        }
        return m + " " + d + ", " + y;
    },
    set: function (date)
    {

    }
}

_("$time").html(Time.get());
_("$date").html(DateTime.get());
var pday = new Date().getDay();
setInterval(function ()
{
    console.log(Time.get());
    _("$time").html(Time.get());
    if (new Date().getDay() != pday) _("$date").html(DateTime.get());
}, 1000);