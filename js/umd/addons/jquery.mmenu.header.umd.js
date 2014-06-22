(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([ 'jquery' ], factory);
    }
    else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    }
    else {
        // Browser globals
        factory(jQuery);
    }
}(function (jQuery) {


    /*
     * jQuery mmenu header addon
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (e) {
        function t(t) {
            return"boolean" == typeof t && (t = {add: t, update: t}), "object" != typeof t && (t = {}), t = e.extend(!0, {}, e[i].defaults[h], t)
        }

        function a(e) {
            return e
        }

        function n() {
            c = !0, s = e[i]._c, r = e[i]._d, o = e[i]._e, s.add("header hasheader prev next title titletext"), d = e[i].glbl
        }

        var s, r, o, d, i = "mmenu", h = "header", c = !1;
        e[i].prototype["_addon_" + h] = function () {
            c || n(), this.opts[h] = t(this.opts[h]), this.conf[h] = a(this.conf[h]);
            var r = this, i = this.opts[h];
            if (this.conf[h], i.add) {
                var l = i.content ? i.content : '<a class="' + s.prev + '" href="#"></a><span class="' + s.title + '"></span><a class="' + s.next + '" href="#"></a>';
                e('<div class="' + s.header + '" />').prependTo(this.$menu).append(l)
            }
            var f = e("div." + s.header, this.$menu);
            if (f.length && this.$menu.addClass(s.hasheader), i.update && f.length) {
                var p = f.find("." + s.title), u = f.find("." + s.prev), v = f.find("." + s.next), m = !1;
                d.$page && (m = "#" + d.$page.attr("id")), u.add(v).on(o.click, function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var a = e(this).attr("href");
                    "#" !== a && (m && a == m ? r.$menu.trigger(o.close) : e(a, r.$menu).trigger(o.open))
                }), e("." + s.panel, this.$menu).each(function () {
                    var t = e(this), a = e("." + r.conf.classNames[h].panelHeader, t).text(), n = e("." + r.conf.classNames[h].panelPrev, t).attr("href"), d = e("." + r.conf.classNames[h].panelNext, t).attr("href");
                    a || (a = e("." + s.subclose, t).text()), a || (a = i.title), n || (n = e("." + s.subclose, t).attr("href"));
                    var c = function () {
                        p[a ? "show" : "hide"]().text(a), u[n ? "show" : "hide"]().attr("href", n), v[d ? "show" : "hide"]().attr("href", d)
                    };
                    t.on(o.open, function () {
                        c()
                    }), t.hasClass(s.current) && c()
                })
            }
        }, e[i].addons = e[i].addons || [], e[i].addons.push(h), e[i].defaults[h] = {add: !1, content: !1, update: !1, title: "Menu"}, e[i].configuration.classNames[h] = {panelHeader: "Header", panelNext: "Next", panelPrev: "Prev"}
    }(jQuery);
}));