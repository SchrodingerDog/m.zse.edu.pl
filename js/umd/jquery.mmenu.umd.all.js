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
     * jQuery mmenu v4.3.2
     * @requires jQuery 1.7.0 or later
     *
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     *
     * Dual licensed under the MIT license:
     * http://en.wikipedia.org/wiki/MIT_License
     */
    !function (e) {
        function s(s, n, t) {
            if (t) {
                if ("object" != typeof s && (s = {}), "boolean" != typeof s.isMenu) {
                    var i = t.children();
                    s.isMenu = 1 == i.length && i.is(n.panelNodetype)
                }
                return s
            }
            s = e.extend(!0, {}, e[a].defaults, s), ("top" == s.position || "bottom" == s.position) && ("back" == s.zposition || "next" == s.zposition) && (e[a].deprecated('Using position "' + s.position + '" in combination with zposition "' + s.zposition + '"', 'zposition "front"'), s.zposition = "front");
            for (var o = ["position", "zposition", "modal", "moveBackground"], l = 0, d = o.length; d > l; l++)"undefined" != typeof s[o[l]] && (e[a].deprecated('The option "' + o[l] + '"', "offCanvas." + o[l]), s.offCanvas = s.offCanvas || {}, s.offCanvas[o[l]] = s[o[l]]);
            return s
        }

        function n(s) {
            s = e.extend(!0, {}, e[a].configuration, s);
            for (var n = ["panel", "list", "selected", "label", "spacer"], t = 0, i = n.length; i > t; t++)"undefined" != typeof s[n[t] + "Class"] && (e[a].deprecated('The configuration option "' + n[t] + 'Class"', "classNames." + n[t]), s.classNames[n[t]] = s[n[t] + "Class"]);
            if ("undefined" != typeof s.counterClass && (e[a].deprecated('The configuration option "counterClass"', "classNames.counters.counter"), s.classNames.counters = s.classNames.counters || {}, s.classNames.counters.counter = s.counterClass), "undefined" != typeof s.collapsedClass && (e[a].deprecated('The configuration option "collapsedClass"', "classNames.labels.collapsed"), s.classNames.labels = s.classNames.labels || {}, s.classNames.labels.collapsed = s.collapsedClass), "undefined" != typeof s.header)for (var n = ["panelHeader", "panelNext", "panelPrev"], t = 0, i = n.length; i > t; t++)"undefined" != typeof s.header[n[t] + "Class"] && (e[a].deprecated('The configuration option "header.' + n[t] + 'Class"', "classNames.header." + n[t]), s.classNames.header = s.classNames.header || {}, s.classNames.header[n[t]] = s.header[n[t] + "Class"]);
            for (var n = ["pageNodetype", "pageSelector", "menuWrapperSelector", "menuInjectMethod"], t = 0, i = n.length; i > t; t++)"undefined" != typeof s[n[t]] && (e[a].deprecated('The configuration option "' + n[t] + '"', "offCanvas." + n[t]), s.offCanvas = s.offCanvas || {}, s.offCanvas[n[t]] = s[n[t]]);
            return s
        }

        function t() {
            u = !0, c.$wndw = e(window), c.$html = e("html"), c.$body = e("body"), e.each([l, d, r], function (e, s) {
                s.add = function (e) {
                    e = e.split(" ");
                    for (var n in e)s[e[n]] = s.mm(e[n])
                }
            }), l.mm = function (e) {
                return"mm-" + e
            }, l.add("wrapper menu ismenu inline panel list subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"), l.umm = function (e) {
                return"mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, d.mm = function (e) {
                return"mm-" + e
            }, d.add("parent"), r.mm = function (e) {
                return e + ".mm"
            }, r.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"), e[a]._c = l, e[a]._d = d, e[a]._e = r, e[a].glbl = c
        }

        function i(s, n) {
            if (s.hasClass(l.current))return!1;
            var t = e("." + l.panel, n), i = t.filter("." + l.current);
            return t.removeClass(l.highest).removeClass(l.current).not(s).not(i).addClass(l.hidden), s.hasClass(l.opened) ? i.addClass(l.highest).removeClass(l.opened).removeClass(l.subopened) : (s.addClass(l.highest), i.addClass(l.subopened)), s.removeClass(l.hidden).addClass(l.current), setTimeout(function () {
                s.removeClass(l.subopened).addClass(l.opened)
            }, 25), "open"
        }

        var a = "mmenu", o = "4.3.2";
        if (!e[a]) {
            var l = {}, d = {}, r = {}, u = !1, c = {$wndw: null, $html: null, $body: null};
            e[a] = function (e, s, n) {
                return this.$menu = e, this.opts = s, this.conf = n, this.vars = {}, this._init(), this
            }, e[a].uniqueId = 0, e[a].prototype = {_init: function () {
                if (this.opts = s(this.opts, this.conf, this.$menu), this._initMenu(), this._initPanels(), this._initLinks(), this._bindCustomEvents(), e[a].addons)for (var n = 0; n < e[a].addons.length; n++)"function" == typeof this["_addon_" + e[a].addons[n]] && this["_addon_" + e[a].addons[n]]()
            }, _bindCustomEvents: function () {
                var s = this, n = this.$menu.find(this.opts.isMenu && !this.opts.slidingSubmenus ? "ul, ol" : "." + l.panel);
                n.off(r.toggle + " " + r.open + " " + r.close).on(r.toggle + " " + r.open + " " + r.close, function (e) {
                    e.stopPropagation()
                }), this.opts.slidingSubmenus ? n.on(r.open, function () {
                    return i(e(this), s.$menu)
                }) : n.on(r.toggle,function () {
                    var s = e(this);
                    return s.triggerHandler(s.parent().hasClass(l.opened) ? r.close : r.open)
                }).on(r.open,function () {
                    return e(this).parent().addClass(l.opened), "open"
                }).on(r.close, function () {
                    return e(this).parent().removeClass(l.opened), "close"
                })
            }, _initMenu: function () {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("*")).filter("[id]").each(function () {
                    e(this).attr("id", l.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$menu.parent().addClass(l.wrapper);
                var s = [l.menu];
                s.push(l.mm(this.opts.slidingSubmenus ? "horizontal" : "vertical")), this.opts.classes && s.push(this.opts.classes), this.opts.isMenu && s.push(l.ismenu), this.$menu.addClass(s.join(" "))
            }, _initPanels: function () {
                var s = this;
                this.__refactorClass(e("." + this.conf.classNames.list, this.$menu), this.conf.classNames.list, "list"), this.opts.isMenu && e("ul, ol", this.$menu).not(".mm-nolist").addClass(l.list);
                var n = e("." + l.list + " > li", this.$menu);
                this.__refactorClass(n, this.conf.classNames.selected, "selected"), this.__refactorClass(n, this.conf.classNames.label, "label"), this.__refactorClass(n, this.conf.classNames.spacer, "spacer"), n.off(r.setSelected).on(r.setSelected, function (s, t) {
                    s.stopPropagation(), n.removeClass(l.selected), "boolean" != typeof t && (t = !0), t && e(this).addClass(l.selected)
                }), this.__refactorClass(e("." + this.conf.classNames.panel, this.$menu), this.conf.classNames.panel, "panel"), this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("." + l.list).children().children().filter(this.conf.panelNodetype)).addClass(l.panel);
                var t = e("." + l.panel, this.$menu);
                t.each(function () {
                    var n = e(this), t = n.attr("id") || s.__getUniqueId();
                    n.attr("id", t)
                }), t.find("." + l.panel).each(function () {
                    var n = e(this), t = n.is("ul, ol") ? n : n.find("ul ,ol").first(), i = n.parent(), a = i.find("> a, > span"), o = i.closest("." + l.panel);
                    if (n.data(d.parent, i), i.parent().is("." + l.list)) {
                        var r = e('<a class="' + l.subopen + '" href="#' + n.attr("id") + '" />').insertBefore(a);
                        a.is("a") || r.addClass(l.fullsubopen), s.opts.slidingSubmenus && t.prepend('<li class="' + l.subtitle + '"><a class="' + l.subclose + '" href="#' + o.attr("id") + '">' + a.text() + "</a></li>")
                    }
                });
                var i = this.opts.slidingSubmenus ? r.open : r.toggle;
                if (t.each(function () {
                    var n = e(this), t = n.attr("id");
                    e('a[href="#' + t + '"]', s.$menu).off(r.click).on(r.click, function (e) {
                        e.preventDefault(), n.trigger(i)
                    })
                }), this.opts.slidingSubmenus) {
                    var a = e("." + l.list + " > li." + l.selected, this.$menu);
                    a.parents("li").removeClass(l.selected).end().add(a.parents("li")).each(function () {
                        var s = e(this), n = s.find("> ." + l.panel);
                        n.length && (s.parents("." + l.panel).addClass(l.subopened), n.addClass(l.opened))
                    }).closest("." + l.panel).addClass(l.opened).parents("." + l.panel).addClass(l.subopened)
                } else {
                    var a = e("li." + l.selected, this.$menu);
                    a.parents("li").removeClass(l.selected).end().add(a.parents("li")).addClass(l.opened)
                }
                var o = t.filter("." + l.opened);
                o.length || (o = t.first()), o.addClass(l.opened).last().addClass(l.current), this.opts.slidingSubmenus && t.not(o.last()).addClass(l.hidden).end().find("." + l.panel).appendTo(this.$menu)
            }, _initLinks: function () {
                var s = this;
                e("." + l.list + " > li > a", this.$menu).not("." + l.subopen).not("." + l.subclose).not('[rel="external"]').not('[target="_blank"]').off(r.click).on(r.click, function (n) {
                    var t = e(this), i = t.attr("href");
                    s.__valueOrFn(s.opts.onClick.setSelected, t) && t.parent().trigger(r.setSelected);
                    var a = s.__valueOrFn(s.opts.onClick.preventDefault, t, "#" == i.slice(0, 1));
                    a && n.preventDefault(), s.__valueOrFn(s.opts.onClick.blockUI, t, !a) && c.$html.addClass(l.blocking), s.__valueOrFn(s.opts.onClick.close, t, a) && s.$menu.triggerHandler(r.close)
                })
            }, _update: function (e) {
                if (this.updates || (this.updates = []), "function" == typeof e)this.updates.push(e); else for (var s = 0, n = this.updates.length; n > s; s++)this.updates[s].call(this, e)
            }, __valueOrFn: function (e, s, n) {
                return"function" == typeof e ? e.call(s[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
            }, __refactorClass: function (e, s, n) {
                e.filter("." + s).removeClass(s).addClass(l[n])
            }, __transitionend: function (e, s, n) {
                var t = !1, i = function () {
                    t || s.call(e[0]), t = !0
                };
                e.one(r.transitionend, i), e.one(r.webkitTransitionEnd, i), setTimeout(i, 1.1 * n)
            }, __getUniqueId: function () {
                return l.mm(e[a].uniqueId++)
            }}, e.fn[a] = function (i, o) {
                return u || t(), i = s(i, o), o = n(o), this.each(function () {
                    var s = e(this);
                    s.data(a) || s.data(a, new e[a](s, i, o))
                })
            }, e[a].version = o, e[a].defaults = {classes: "", slidingSubmenus: !0, onClick: {setSelected: !0}}, e[a].configuration = {panelNodetype: "ul, ol, div", transitionDuration: 400, classNames: {panel: "Panle", list: "List", selected: "Selected", label: "Label", spacer: "Spacer"}}, function () {
                var s = window.document, n = window.navigator.userAgent, t = "ontouchstart"in s, i = "WebkitOverflowScrolling"in s.documentElement.style, o = function () {
                    return n.indexOf("Android") >= 0 ? 2.4 > parseFloat(n.slice(n.indexOf("Android") + 8)) : !1
                }();
                e[a].support = {touch: t, oldAndroidBrowser: o, overflowscrolling: function () {
                    return t ? i ? !0 : o ? !1 : !0 : !0
                }()}
            }(), e[a].debug = function () {
            }, e[a].deprecated = function (e, s) {
                "undefined" != typeof console && "undefined" != typeof console.warn && console.warn("MMENU: " + e + " is deprecated, use " + s + " instead.")
            }
        }
    }(jQuery);
    /*	
     * jQuery mmenu offCanvas addon
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (e) {
        function o(e) {
            return e
        }

        function t(e) {
            return"string" != typeof e.pageSelector && (e.pageSelector = "> " + e.pageNodetype), e
        }

        function n() {
            u = !0, s = e[r]._c, i = e[r]._d, a = e[r]._e, s.add("offcanvas modal background opening blocker page"), i.add("style"), a.add("opening opened closing closed setPage"), p = e[r].glbl, p.$allMenus = (p.$allMenus || e()).add(this.$menu), p.$wndw.on(a.keydown, function (e) {
                return p.$html.hasClass(s.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
            });
            var o = 0;
            p.$wndw.on(a.resize, function (e, t) {
                if (t || p.$html.hasClass(s.opened)) {
                    var n = p.$wndw.height();
                    (t || n != o) && (o = n, p.$page.css("minHeight", n))
                }
            })
        }

        var s, i, a, p, r = "mmenu", l = "offCanvas", u = !1;
        e[r].prototype["_addon_" + l] = function () {
            if (!this.opts[l])return this;
            u || n(), this.opts[l] = o(this.opts[l]), this.conf[l] = t(this.conf[l]), this.vars.opened = !1;
            var e = this.opts[l], i = this.conf[l], a = [s.offcanvas];
            "left" != e.position && a.push(s.mm(e.position)), "back" != e.zposition && a.push(s.mm(e.zposition)), this.$menu.addClass(a.join(" ")).parent().removeClass(s.wrapper), this[l + "_initPage"](p.$page), this[l + "_initBlocker"](), this[l + "_initOpenClose"](), this[l + "_bindCustomEvents"](), this.$menu[i.menuInjectMethod + "To"](i.menuWrapperSelector)
        }, e[r].addons = e[r].addons || [], e[r].addons.push(l), e[r].defaults[l] = {position: "left", zposition: "back", modal: !1, moveBackground: !0}, e[r].configuration[l] = {pageNodetype: "div", pageSelector: null, menuWrapperSelector: "body", menuInjectMethod: "prepend"}, e[r].prototype.open = function () {
            if (this.vars.opened)return!1;
            var e = this;
            return this._openSetup(), setTimeout(function () {
                e._openFinish()
            }, 25), "open"
        }, e[r].prototype._openSetup = function () {
            p.$allMenus.not(this.$menu).trigger(a.close), p.$page.data(i.style, p.$page.attr("style") || ""), p.$wndw.trigger(a.resize, [!0]);
            var e = [s.opened];
            this.opts[l].modal && e.push(s.modal), this.opts[l].moveBackground && e.push(s.background), "left" != this.opts[l].position && e.push(s.mm(this.opts[l].position)), "back" != this.opts[l].zposition && e.push(s.mm(this.opts[l].zposition)), this.opts.classes && e.push(this.opts.classes), p.$html.addClass(e.join(" ")), this.$menu.addClass(s.current + " " + s.opened)
        }, e[r].prototype._openFinish = function () {
            var e = this;
            this.__transitionend(p.$page, function () {
                e.$menu.trigger(a.opened)
            }, this.conf.transitionDuration), this.vars.opened = !0, p.$html.addClass(s.opening), this.$menu.trigger(a.opening)
        }, e[r].prototype.close = function () {
            if (!this.vars.opened)return!1;
            var e = this;
            return this.__transitionend(p.$page, function () {
                e.$menu.removeClass(s.current).removeClass(s.opened), p.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)), e.opts.classes && p.$html.removeClass(e.opts.classes), p.$page.attr("style", p.$page.data(i.style)), e.vars.opened = !1, e.$menu.trigger(a.closed)
            }, this.conf.transitionDuration), p.$html.removeClass(s.opening), this.$menu.trigger(a.closing), "close"
        }, e[r].prototype[l + "_initBlocker"] = function () {
            var o = this;
            p.$blck || (p.$blck = e('<div id="' + s.blocker + '" />').appendTo(p.$body)), p.$blck.off(a.touchstart).on(a.touchstart,function (e) {
                e.preventDefault(), e.stopPropagation(), p.$blck.trigger(a.mousedown)
            }).on(a.mousedown, function (e) {
                e.preventDefault(), p.$html.hasClass(s.modal) || o.close()
            })
        }, e[r].prototype[l + "_initPage"] = function (o) {
            o || (o = e(this.conf[l].pageSelector, p.$body), o.length > 1 && (e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <" + this.conf[l].pageNodetype + ">."), o = o.wrapAll("<" + this.conf[l].pageNodetype + " />").parent())), o.addClass(s.page), p.$page = o
        }, e[r].prototype[l + "_initOpenClose"] = function () {
            var o = this, t = this.$menu.attr("id");
            t && t.length && (this.conf.clone && (t = s.umm(t)), e('a[href="#' + t + '"]').off(a.click).on(a.click, function (e) {
                e.preventDefault(), o.open()
            }));
            var t = p.$page.attr("id");
            t && t.length && e('a[href="#' + t + '"]').on(a.click, function (e) {
                e.preventDefault(), o.close()
            })
        }, e[r].prototype[l + "_bindCustomEvents"] = function () {
            var e = this, o = a.open + " " + a.opening + " " + a.opened + " " + a.close + " " + a.closing + " " + a.closed + " " + a.setPage;
            this.$menu.off(o).on(o, function (e) {
                e.stopPropagation()
            }), this.$menu.on(a.open,function () {
                e.open()
            }).on(a.close,function () {
                e.close()
            }).on(a.setPage, function (o, t) {
                e[l + "_initPage"](t), e[l + "_initOpenClose"]()
            })
        }
    }(jQuery);
    /*	
     * jQuery mmenu counters addon
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (t) {
        function n(n) {
            return"boolean" == typeof n && (n = {add: n, update: n}), "object" != typeof n && (n = {}), n = t.extend(!0, {}, t[i].defaults[c], n), n.count && (t[i].deprecated('the option "count" for counters', 'the option "update"'), n.update = n.count), n
        }

        function e(t) {
            return t
        }

        function o() {
            d = !0, s = t[i]._c, a = t[i]._d, u = t[i]._e, s.add("counter search noresultsmsg"), r = t[i].glbl
        }

        var s, a, u, r, i = "mmenu", c = "counters", d = !1;
        t[i].prototype["_addon_" + c] = function () {
            d || o(), this.opts[c] = n(this.opts[c]), this.conf[c] = e(this.conf[c]);
            var u = this, r = this.opts[c];
            if (this.conf[c], this.__refactorClass(t("em", this.$menu), this.conf.classNames[c].counter, "counter"), r.add && t("." + s.panel, this.$menu).each(function () {
                var n = t(this), e = n.data(a.parent);
                if (e) {
                    var o = t('<em class="' + s.counter + '" />'), u = e.find("> a." + s.subopen);
                    u.parent().find("em." + s.counter).length || u.before(o)
                }
            }), r.update) {
                var i = t("em." + s.counter, this.$menu);
                i.each(function () {
                    var n = t(this), e = t(n.next().attr("href"), u.$menu);
                    if (e.is("." + s.list) || (e = e.find("> ." + s.list)), e.length) {
                        var o = function () {
                            var t = e.children().not("." + s.label).not("." + s.subtitle).not("." + s.hidden).not("." + s.search).not("." + s.noresultsmsg);
                            n.html(t.length)
                        };
                        o(), u._update(o)
                    }
                })
            }
        }, t[i].addons = t[i].addons || [], t[i].addons.push(c), t[i].defaults[c] = {add: !1, update: !1}, t[i].configuration.classNames[c] = {counter: "Counter"}
    }(jQuery);
    /*	
     * jQuery mmenu dragOpen addon
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (e) {
        function t(t) {
            return"boolean" == typeof t && (t = {open: t}), "object" != typeof t && (t = {}), t = e.extend(!0, {}, e[p].defaults[g], t)
        }

        function a(e) {
            return e
        }

        function o() {
            f = !0, s = e[p]._c, i = e[p]._d, r = e[p]._e, s.add("dragging"), r.add("dragleft dragright dragup dragdown dragend"), d = e[p].glbl
        }

        function n(e, t, a) {
            return t > e && (e = t), e > a && (e = a), e
        }

        var s, i, r, d, p = "mmenu", g = "dragOpen", f = !1;
        e[p].prototype["_addon_" + g] = function () {
            if (e.fn.hammer) {
                f || o(), this.opts[g] = t(this.opts[g]), this.conf[g] = a(this.conf[g]);
                var i = this, p = this.opts[g], h = this.conf[g];
                if (p.open) {
                    var c = 0, l = !1, u = 0, v = 0, m = "width";
                    switch (this.opts.offCanvas.position) {
                        case"left":
                        case"right":
                            m = "width";
                            break;
                        default:
                            m = "height"
                    }
                    switch (this.opts.offCanvas.position) {
                        case"left":
                            var _ = {events: r.dragleft + " " + r.dragright, open_dir: "right", close_dir: "left", delta: "deltaX", page: "pageX", negative: !1};
                            break;
                        case"right":
                            var _ = {events: r.dragleft + " " + r.dragright, open_dir: "left", close_dir: "right", delta: "deltaX", page: "pageX", negative: !0};
                            break;
                        case"top":
                            var _ = {events: r.dragup + " " + r.dragdown, open_dir: "down", close_dir: "up", delta: "deltaY", page: "pageY", negative: !1};
                            break;
                        case"bottom":
                            var _ = {events: r.dragup + " " + r.dragdown, open_dir: "up", close_dir: "down", delta: "deltaY", page: "pageY", negative: !0}
                    }
                    var w = this.__valueOrFn(p.pageNode, this.$menu, d.$page);
                    "string" == typeof w && (w = e(w));
                    var b = d.$page.find("." + s.mm("fixed-top") + ", ." + s.mm("fixed-bottom")), $ = d.$page;
                    switch (this.opts.offCanvas.zposition) {
                        case"back":
                            $ = $.add(b);
                            break;
                        case"front":
                            $ = this.$menu;
                            break;
                        case"next":
                            $ = $.add(this.$menu).add(b)
                    }
                    w.hammer().on(r.touchstart + " " + r.mousedown,function (e) {
                        if ("touchstart" == e.type)var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a = t[_.page]; else if ("mousedown" == e.type)var a = e[_.page];
                        switch (i.opts.offCanvas.position) {
                            case"right":
                            case"bottom":
                                a >= d.$wndw[m]() - p.maxStartPos && (c = 1);
                                break;
                            default:
                                a <= p.maxStartPos && (c = 1)
                        }
                    }).on(_.events + " " + r.dragend,function (e) {
                        c > 0 && (e.gesture.preventDefault(), e.stopPropagation())
                    }).on(_.events,function (e) {
                        var t = _.negative ? -e.gesture[_.delta] : e.gesture[_.delta];
                        if (l = t > u ? _.open_dir : _.close_dir, u = t, u > p.threshold && 1 == c) {
                            if (d.$html.hasClass(s.opened))return;
                            c = 2, i._openSetup(), i.vars.opened = !0, d.$html.addClass(s.dragging), v = n(d.$wndw[m]() * h[m].perc, h[m].min, h[m].max)
                        }
                        2 == c && $.css(i.opts.offCanvas.position, n(u, 10, v) - ("front" == i.opts.offCanvas.zposition ? v : 0))
                    }).on(r.dragend, function () {
                        2 == c && (d.$html.removeClass(s.dragging), $.css(i.opts.offCanvas.position, ""), l == _.open_dir ? i._openFinish() : i.close()), c = 0
                    })
                }
            }
        }, e[p].addons = e[p].addons || [], e[p].addons.push(g), e[p].defaults[g] = {open: !1, maxStartPos: 100, threshold: 50}, e[p].configuration[g] = {width: {perc: .8, min: 140, max: 440}, height: {perc: .8, min: 140, max: 880}}
    }(jQuery);
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
    /*	
     * jQuery mmenu labels addon
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (l) {
        function s(s) {
            return"boolean" == typeof s && (s = {collapse: s}), "object" != typeof s && (s = {}), s = l.extend(!0, {}, l[p].defaults[d], s)
        }

        function e(l) {
            return l
        }

        function a() {
            i = !0, o = l[p]._c, n = l[p]._d, t = l[p]._e, o.add("collapsed"), c = l[p].glbl
        }

        var o, n, t, c, p = "mmenu", d = "labels", i = !1;
        l[p].prototype["_addon_" + d] = function () {
            i || a(), this.opts[d] = s(this.opts[d]), this.conf[d] = e(this.conf[d]);
            var n = this.opts[d];
            this.conf[d], n.collapse && (this.__refactorClass(l("li", this.$menu), this.conf.classNames[d].collapsed, "collapsed"), l("." + o.label, this.$menu).each(function () {
                var s = l(this), e = s.nextUntil("." + o.label, "all" == n.collapse ? null : "." + o.collapsed);
                "all" == n.collapse && (s.addClass(o.opened), e.removeClass(o.collapsed)), e.length && (s.wrapInner("<span />"), l('<a href="#" class="' + o.subopen + " " + o.fullsubopen + '" />').prependTo(s).on(t.click, function (l) {
                    l.preventDefault(), s.toggleClass(o.opened), e[s.hasClass(o.opened) ? "removeClass" : "addClass"](o.collapsed)
                }))
            }))
        }, l[p].addons = l[p].addons || [], l[p].addons.push(d), l[p].defaults[d] = {collapse: !1}, l[p].configuration.classNames[d] = {collapsed: "Collapsed"}
    }(jQuery);
    /*	
     * jQuery mmenu searchfield addon
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (e) {
        function s(s) {
            return"boolean" == typeof s && (s = {add: s, search: s}), "object" != typeof s && (s = {}), s = e.extend(!0, {}, e[d].defaults[c], s), "boolean" != typeof s.showLinksOnly && (s.showLinksOnly = "menu" == s.addTo), s
        }

        function n(e) {
            return e
        }

        function t() {
            h = !0, o = e[d]._c, r = e[d]._d, l = e[d]._e, o.add("search hassearch noresultsmsg noresults nosubresults counter"), l.add("search reset change"), i = e[d].glbl
        }

        function a(e) {
            switch (e) {
                case 9:
                case 16:
                case 17:
                case 18:
                case 37:
                case 38:
                case 39:
                case 40:
                    return!0
            }
            return!1
        }

        var o, r, l, i, d = "mmenu", c = "searchfield", h = !1;
        e[d].prototype["_addon_" + c] = function () {
            h || t(), this.opts[c] = s(this.opts[c]), this.conf[c] = n(this.conf[c]);
            var i = this, d = this.opts[c];
            if (this.conf[c], d.add) {
                switch (d.addTo) {
                    case"menu":
                        var u = this.$menu;
                        break;
                    case"panels":
                        var u = e("." + o.panel, this.$menu);
                        break;
                    default:
                        var u = e(d.addTo, this.$menu).filter("." + o.panel)
                }
                u.length && u.each(function () {
                    var s = e(this), n = s.is("." + o.list) ? "li" : "div", t = e("<" + n + ' class="' + o.search + '" />');
                    if (t.append('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />'), s.is("." + o.menu))t.prependTo(i.$menu); else {
                        var a = s.children().first(), r = a.is("." + o.subtitle) ? "After" : "Before";
                        t["insert" + r](a)
                    }
                    d.noResults && (s.is("." + o.menu) && (s = s.find("." + o.panel).first()), n = s.is("." + o.list) ? "li" : "div", e("<" + n + ' class="' + o.noresultsmsg + '" />').html(d.noResults).appendTo(s))
                })
            }
            if (this.$menu.children("div." + o.search).length && this.$menu.addClass(o.hassearch), d.search) {
                var f = e("." + o.search, this.$menu);
                f.length && f.each(function () {
                    var s = e(this);
                    if ("menu" == d.addTo)var n = e("." + o.panel, i.$menu), t = i.$menu; else var n = s.closest("." + o.panel), t = n;
                    var c = n.add(n.children("." + o.list)), h = s.find("input"), u = e("> li", c), f = u.filter("." + o.label), p = u.not("." + o.subtitle).not("." + o.label).not("." + o.search).not("." + o.noresultsmsg), m = "> a";
                    d.showLinksOnly || (m += ", > span"), h.off(l.keyup + " " + l.change).on(l.keyup,function (e) {
                        a(e.keyCode) || s.trigger(l.search)
                    }).on(l.change, function () {
                        s.trigger(l.search)
                    }), s.off(l.reset + " " + l.search).on(l.reset + " " + l.search,function (e) {
                        e.stopPropagation()
                    }).on(l.reset,function () {
                        s.trigger(l.search, [""])
                    }).on(l.search, function (s, a) {
                        "string" == typeof a ? h.val(a) : a = h.val(), a = a.toLowerCase(), n.scrollTop(0), p.add(f).addClass(o.hidden), p.each(function () {
                            var s = e(this);
                            e(m, s).text().toLowerCase().indexOf(a) > -1 && s.add(s.prevAll("." + o.label).first()).removeClass(o.hidden)
                        }), e(n.get().reverse()).each(function () {
                            var s = e(this), n = s.data(r.parent);
                            if (n) {
                                var t = s.add(s.find("> ." + o.list)).find("> li").not("." + o.subtitle).not("." + o.search).not("." + o.noresultsmsg).not("." + o.label).not("." + o.hidden);
                                t.length ? n.removeClass(o.hidden).removeClass(o.nosubresults).prevAll("." + o.label).first().removeClass(o.hidden) : "menu" == d.addTo && (s.hasClass(o.current) && n.trigger(l.open), n.addClass(o.nosubresults))
                            }
                        }), t[p.not("." + o.hidden).length ? "removeClass" : "addClass"](o.noresults), i._update()
                    })
                })
            }
        }, e[d].addons = e[d].addons || [], e[d].addons.push(c), e[d].defaults[c] = {add: !1, addTo: "menu", search: !1, placeholder: "Search", noResults: "No results found."}
    }(jQuery);
    /*	
     * jQuery mmenu toggles addon
     * mmenu.frebsite.nl
     *	
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     */
    !function (t) {
        function n(t) {
            return t
        }

        function s(t) {
            return t
        }

        function e() {
            g = !0, o = t[r]._c, i = t[r]._d, a = t[r]._e, o.add("toggle"), l = t[r].glbl
        }

        var o, i, a, l, r = "mmenu", d = "toggles", g = !1;
        t[r].prototype["_addon_" + d] = function () {
            g || e(), this.opts[d] = n(this.opts[d]), this.conf[d] = s(this.conf[d]);
            var i = this;
            this.opts[d], this.conf[d], this.__refactorClass(t("input", this.$menu), this.conf.classNames[d].toggle, "toggle"), t("." + o.toggle, this.$menu).each(function () {
                var n = t(this), s = n.parent(), e = n.attr("id") || i.__getUniqueId();
                n.attr("id", e), s.prepend(n), t('<label for="' + e + '" class="' + o.toggle + '"><div></div></label>').insertBefore(s.children().last())
            })
        }, t[r].addons = t[r].addons || [], t[r].addons.push(d), t[r].defaults[d] = {}, t[r].configuration.classNames[d] = {toggle: "Toggle"}
    }(jQuery);
}));