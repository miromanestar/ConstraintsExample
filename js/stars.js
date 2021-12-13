(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    102: function (t, e, n) {
      "use strict";
      var r = {};
      (r["force-redirect"] = n(510)),
        (r["force-redirect"] =
          r["force-redirect"].default || r["force-redirect"]),
        (r["set-headers-cache-control"] = n(511)),
        (r["set-headers-cache-control"] =
          r["set-headers-cache-control"].default ||
          r["set-headers-cache-control"]),
        (e.a = r);
    },
    127: function (t, e, n) {
      t.exports = n.p + "img/logo-cover2x.8e60675.png";
    },
    129: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = (n(126), n(2)),
        component = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 87.4 87.4",
                  },
                },
                t.$listeners
              ),
              [
                n(
                  "linearGradient",
                  {
                    attrs: {
                      id: "play_border_svg__a",
                      gradientUnits: "userSpaceOnUse",
                      x1: "9052.933",
                      y1: "-1684.065",
                      x2: "9132.467",
                      y2: "-1604.533",
                      gradientTransform: "matrix(1 0 0 -1 -9048.56 -1600.16)",
                    },
                  },
                  [
                    n("stop", {
                      attrs: { offset: "0%", "stop-color": "#D6B07F" },
                    }),
                    n("stop", {
                      attrs: { offset: "100%", "stop-color": "#82624F" },
                    }),
                  ],
                  1
                ),
                n("path", {
                  attrs: {
                    fill: "none",
                    stroke: "url(#play_border_svg__a)",
                    d: "M44.139 4.384c21.956 0 39.754 17.798 39.755 39.754 0 21.956-17.798 39.755-39.754 39.755S4.385 66.095 4.385 44.139C4.387 22.183 22.184 4.385 44.139 4.384z",
                  },
                }),
                n(
                  "linearGradient",
                  {
                    attrs: {
                      id: "play_border_svg__b",
                      gradientUnits: "userSpaceOnUse",
                      x1: ".699",
                      y1: "2.698",
                      x2: "86.703",
                      y2: "88.702",
                      gradientTransform: "matrix(1 0 0 -1 0 89.4)",
                    },
                  },
                  [
                    n("stop", {
                      attrs: { offset: "0%", "stop-color": "#D6B07F" },
                    }),
                    n("stop", {
                      attrs: { offset: "100%", "stop-color": "#82624F" },
                    }),
                  ],
                  1
                ),
                n("path", {
                  attrs: {
                    fill: "none",
                    stroke: "url(#play_border_svg__b)",
                    d: "M42.46.7h2.481C68.004.7 86.7 19.396 86.7 42.459v2.481c0 23.063-18.696 41.759-41.759 41.759H42.46C19.397 86.7.701 68.004.701 44.94v-2.481C.701 19.396 19.397.7 42.46.7z",
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      component.options.__file = "static/svg/play_border.svg";
      var c = component.exports,
        l = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 25 25",
                  },
                },
                t.$listeners
              ),
              [
                n("defs", [
                  n(
                    "filter",
                    {
                      attrs: {
                        filterUnits: "userSpaceOnUse",
                        id: "play_icon_svg__a",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "25",
                      },
                    },
                    [
                      n("feOffset", { attrs: { in: "SourceAlpha" } }),
                      n("feGaussianBlur", {
                        attrs: { result: "blurOut", stdDeviation: "2.236" },
                      }),
                      n("feFlood", {
                        attrs: { "flood-color": "#FFAA3A", result: "floodOut" },
                      }),
                      n("feComposite", {
                        attrs: {
                          operator: "atop",
                          in: "floodOut",
                          in2: "blurOut",
                        },
                      }),
                      n(
                        "feComponentTransfer",
                        [n("feFuncA", { attrs: { type: "linear" } })],
                        1
                      ),
                      n(
                        "feMerge",
                        [
                          n("feMergeNode"),
                          n("feMergeNode", { attrs: { in: "SourceGraphic" } }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                n("g", { attrs: { filter: "url(#play_icon_svg__a)" } }, [
                  n("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      fill: "#FFF",
                      d: "M16.5 12L6 18V6l10.5 6z",
                    },
                  }),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      l.options.__file = "static/svg/play_icon.svg";
      var f = l.exports,
        d = n(9);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var v = {
          name: "YoutubePlayer",
          components: { border: c, play: f },
          props: {
            youtubeId: { type: String, required: !0 },
            controls: { type: Number, required: !1, default: 0 },
            isAutoplay: { type: Boolean, required: !1, default: !1 },
            isLoop: { type: Boolean, required: !1, default: !1 },
            isFullscreen: { type: Boolean, required: !1, default: !0 },
          },
          data: function () {
            return { height: 0, width: 0, isPlaying: !1, player: null };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? h(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : h(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(d.b)({ slug: "global/getSlug" })),
          mounted: function () {
            this.$youtube.register(this.initPlayer),
              this.$youtube.isReady && this.$youtube.onInit();
          },
          methods: {
            initPlayer: function () {
              var t = this.$refs.youtubePlayer.id,
                e = {
                  height: this.$el.offsetHeight,
                  width: this.$el.offsetWidth,
                  videoId: this.youtubeId,
                  host: "https://www.youtube-nocookie.com",
                  playerVars: {
                    autoplay: this.autoplay,
                    controls: this.isControls,
                    loop: this.isLoop,
                    showinfo: this.isControls,
                    fs: this.isFullscreen,
                    rel: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                  },
                  events: { onStateChange: this.onStateChange },
                };
              this.player = new YT.Player(t, e);
            },
            onClick: function () {
              this.isPlaying ? this.pause() : this.play();
            },
            play: function () {
              if (null == this.player || null == this.player.playVideo)
                return !1;
              if (
                (this.player.playVideo(),
                (this.isPlaying = !0),
                (this.player.h.style.pointerEvents = "all"),
                this.isFullscreen)
              ) {
                var t =
                  this.player.h.requestFullScreen ||
                  this.player.h.mozRequestFullScreen ||
                  this.player.h.webkitRequestFullScreen;
                t && t.bind(this.player.h)();
              }
            },
            pause: function () {
              this.player.pauseVideo(), (this.isPlaying = !1);
            },
            onStateChange: function (t) {
              0 == t.data && (this.pause(), this.player.seekTo(0));
            },
          },
        },
        m = v,
        y =
          (n(665),
          Object(o.a)(
            m,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass:
                    "c-youtube-player u-full-height u-full-width u-inline-block",
                },
                [
                  n("div", {
                    ref: "youtubePlayer",
                    staticClass: "u-relative u-overflow-hidden",
                    attrs: {
                      "data-controls": "2",
                      "data-loop": "1",
                      "data-fullscreen": "1",
                      id: t.youtubeId,
                    },
                  }),
                  t._v(" "),
                  t.isPlaying
                    ? t._e()
                    : n(
                        "div",
                        {
                          staticClass:
                            "c-youtube-player__cover u-wrapper-panel u-cursor-pointer",
                          class: {
                            "is-playing": t.isPlaying,
                            "u-z-back": !t.isPlaying,
                          },
                          on: { click: t.onClick },
                        },
                        [
                          t._t("default"),
                          t._v(" "),
                          n(
                            "div",
                            {
                              staticClass:
                                "u-flex u-wrapper-panel u-justify-content-center u-align-items-center",
                            },
                            [
                              n(
                                "div",
                                { staticClass: "c-youtube-player__icon" },
                                [
                                  n("play"),
                                  t._v(" "),
                                  n(
                                    "span",
                                    { staticClass: "c-youtube-player__border" },
                                    [n("border")],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        2
                      ),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      e.default = y.exports;
    },
    130: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(23), n(16), n(24);
      var r = n(11),
        o = n(5),
        c = (n(52), n(50), n(53), n(7), n(28), n(189)),
        l = n.n(c),
        f = n(58),
        d = n.n(f),
        h = n(9);
      function v(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var m = {
          name: "NewsletterForm",
          props: {
            title: { type: Array, required: !0 },
            paragraph: { type: Array, required: !0 },
            formSource: { type: String, required: !0 },
            isSidebar: { type: Boolean, required: !1, default: !1 },
          },
          data: function () {
            return {
              birthDate: "",
              country: "",
              isError: null,
              localDatePicker: {},
              isErrorDate: !1,
            };
          },
          created: function () {
            this.onChangeForm = d()(this.onChangeForm, 500);
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? v(Object(source), !0).forEach(function (e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : v(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {
              countries: function () {
                l.a.registerLocale(n(527)("./".concat(this.locale, ".json")));
                var t = l.a.getNames(this.locale, { select: "official" }),
                  e = [];
                for (var r in t) e.push({ label: t[r], value: r });
                return e;
              },
              locale: function () {
                return this.$i18n.locale.substring(0, 2);
              },
            },
            Object(h.b)({ config: "global/getConfig" })
          ),
          methods: {
            setlangDatePicker: function () {
              this.localDatePicker = n(601)("./".concat(this.locale));
            },
            getAge: function (t) {
              var e = Date.now() - t.getTime(),
                n = new Date(e);
              return Math.abs(n.getUTCFullYear() - 1970);
            },
            onChangeForm: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r, o;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((t.isError = null), (n = 0), !t.birthDate)) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 5), t.getAge(t.birthDate);
                        case 5:
                          n = e.sent;
                        case 6:
                          if (!(n > 100)) {
                            e.next = 9;
                            break;
                          }
                          return (t.isError = !0), e.abrupt("return");
                        case 9:
                          if (!t.country || !t.birthDate) {
                            e.next = 27;
                            break;
                          }
                          e.t0 = regeneratorRuntime.keys(t.config.ageGate);
                        case 11:
                          if ((e.t1 = e.t0()).done) {
                            e.next = 27;
                            break;
                          }
                          if (
                            ((r = e.t1.value),
                            (o = t.country.value.toLowerCase()),
                            !(n < r && t.config.ageGate[r].includes(o)))
                          ) {
                            e.next = 19;
                            break;
                          }
                          return (t.isError = !0), e.abrupt("break", 27);
                        case 19:
                          if (!(n < 16) || t.config.ageGate[r].includes(o)) {
                            e.next = 24;
                            break;
                          }
                          return (t.isError = !0), e.abrupt("break", 27);
                        case 24:
                          t.isError = !1;
                        case 25:
                          e.next = 11;
                          break;
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          watch: {
            locale: {
              handler: function (t) {
                this.setlangDatePicker();
              },
            },
          },
        },
        y = m,
        _ = (n(602), n(2)),
        component = Object(_.a)(
          y,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "c-newsletter-form" },
              [
                n(
                  "client-only",
                  [
                    t.title.length
                      ? n("core-aov", [
                          n("p", {
                            directives: [
                              {
                                name: "editable",
                                rawName: "v-editable",
                                value: t.title[0],
                                expression: "title[0]",
                              },
                            ],
                            staticClass:
                              "c-newsletter-form__title t-title--lg t-translate-down t-fade-in",
                            domProps: {
                              innerHTML: t._s(
                                t.$storyblok.richtext(t.title[0].text)
                              ),
                            },
                          }),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.paragraph.length
                      ? n("core-aov", { attrs: { delay: 200 } }, [
                          n("p", {
                            directives: [
                              {
                                name: "editable",
                                rawName: "v-editable",
                                value: t.paragraph[0],
                                expression: "paragraph[0]",
                              },
                            ],
                            staticClass: "t-text t-translate-down t-fade-in",
                            domProps: {
                              innerHTML: t._s(
                                t.$storyblok.richtext(t.paragraph[0].text)
                              ),
                            },
                          }),
                        ])
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "form",
                  {
                    staticClass:
                      "row c-newsletter__form t-form u-white u-justify-content-center u-align-items-ends",
                  },
                  [
                    n(
                      "div",
                      { class: t.isSidebar ? "col-lg-5" : "col-lg-3" },
                      [
                        n("core-aov", { attrs: { delay: 200 } }, [
                          n(
                            "div",
                            {
                              staticClass: "input",
                              class: {
                                "is-error is-active": t.isErrorDate,
                                "t-fade-in": !t.isSidebar,
                              },
                            },
                            [
                              n("base-input-date", {
                                attrs: { date: t.birthDate },
                                on: {
                                  "input:error": function (e) {
                                    t.isErrorDate = e;
                                  },
                                  input: t.onChangeForm,
                                },
                                model: {
                                  value: t.birthDate,
                                  callback: function (e) {
                                    t.birthDate = e;
                                  },
                                  expression: "birthDate",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "u-marg-t-xs u-marg-t-0--lg",
                        class: t.isSidebar ? "col-lg-5" : "col-lg-3",
                      },
                      [
                        n("core-aov", { attrs: { delay: 250 } }, [
                          n(
                            "div",
                            {
                              staticClass: "input",
                              class: { "t-fade-in": !t.isSidebar },
                            },
                            [
                              n("v-select", {
                                attrs: {
                                  options: t.countries,
                                  placeholder: t.$t(
                                    "newsletter.country.placeholder"
                                  ),
                                },
                                on: { close: t.onChangeForm },
                                model: {
                                  value: t.country,
                                  callback: function (e) {
                                    t.country = e;
                                  },
                                  expression: "country",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                t.isError || t.isErrorDate
                  ? n("p", { staticClass: "t-text u-red u-marg-t-xs" }, [
                      (t.isErrorDate,
                      n("span", [t._v(t._s(t.$t("newsletter.error_date")))])),
                    ])
                  : t._e(),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "row u-justify-content-center u-align-items-end u-marg-t-xs",
                    class: { "u-none": null == t.isError || t.isError },
                  },
                  [
                    n(
                      "div",
                      { class: t.isSidebar ? "col-lg-10" : "col-lg-7" },
                      [
                        n("iframe", {
                          staticClass: "mj-w-res-iframe",
                          attrs: {
                            frameborder: "0",
                            scrolling: "no",
                            marginheight: "0",
                            marginwidth: "0",
                            src: t.formSource,
                            width: "100%",
                          },
                        }),
                        t._v(" "),
                        n("script", {
                          attrs: {
                            type: "text/javascript",
                            src: "https://app.mailjet.com/statics/js/iframeResizer.min.js",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "38e26efa",
          null
        );
      e.default = component.exports;
      installComponents(component, { BaseInputDate: n(181).default });
    },
    131: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "Video",
          props: { src: { type: Object, required: !0 } },
          data: function () {
            return { currentSrc: "" };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)({ screen: "global/getScreen" })),
          mounted: function () {
            this.src.mobile && (this.bindEvents(), this.onResize());
          },
          methods: {
            bindEvents: function () {
              this.$eventHub.$on("onResize", this.onResize);
            },
            unBindEvents: function () {
              this.$eventHub.$off("onResize");
            },
            onResize: function () {
              "mobile" === this.screen
                ? (this.currentSrc = this.src.mobile)
                : (this.currentSrc = this.src.desktop);
            },
          },
          watch: {
            currentSrc: function () {
              this.$refs.video.classList.remove("lazyload", "lazyloaded"),
                this.$refs.video.classList.add("lazyload");
            },
          },
        },
        f = l,
        d = n(2),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)("video", {
              ref: "video",
              staticClass: "u-fit lazyload",
              attrs: {
                "data-autoplay": "",
                loop: "",
                muted: "",
                preload: "none",
                src: t.$storyblok.replace(t.currentSrc),
              },
              domProps: { muted: !0 },
            });
          },
          [],
          !1,
          null,
          "731cea6c",
          null
        );
      e.default = component.exports;
    },
    137: function (t, e) {
      t.exports = function (element) {
        var t = document.body.getBoundingClientRect(),
          e = element.getBoundingClientRect();
        return {
          top: e.top - t.top,
          left: e.left - t.left,
          bottom: e.bottom - t.bottom,
          right: e.right - t.right,
        };
      };
    },
    138: function (t, e, n) {
      "use strict";
      n(72),
        n(7),
        n(16),
        n(50),
        n(53),
        n(54),
        n(18),
        n(33),
        n(34),
        n(48),
        n(27),
        n(20),
        n(14),
        n(45),
        n(49),
        n(28);
      var r = n(1);
      function o(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          f = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          },
        };
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var l =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        f =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        d =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = l(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          f(this.handleId),
            this.__observed &&
              (d.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            d &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              d.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              d.unobserve(this.$el);
              var t,
                e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          },
        },
      };
    },
    172: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(173),
        o = n(174),
        c = n(175);
      e.default = {
        namespaced: !0,
        actions: o.default,
        mutations: c.default,
        getters: r.default,
        state: {
          slug: "",
          isInEditor: !1,
          isHome: !1,
          config: {},
          screen: "desktop",
          stories: {},
          global: {},
          cv: null,
          version: "draft",
        },
      };
    },
    173: function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = {
          getLanguages: function (t) {
            return t.languages;
          },
          getLocale: function (t) {
            return t.locale;
          },
          getSlug: function (t) {
            return t.slug;
          },
          getVersion: function (t) {
            return t.version;
          },
          getIsHome: function (t) {
            return t.isHome;
          },
          getConfig: function (t) {
            return t.config;
          },
          getScreen: function (t) {
            return t.screen;
          },
          getIsInEditor: function (t) {
            return t.isInEditor;
          },
          getGlobal: function (t) {
            return t.global;
          },
          getCV: function (t) {
            return t.cv;
          },
          getStory: function (t) {
            return function (e, n) {
              return null == e || null == n
                ? null
                : e in t.stories && n in t.stories[e]
                ? t.stories[e][n]
                : {};
            };
          },
        });
    },
    174: function (t, e, n) {
      "use strict";
      n.r(e);
      n(20), n(51);
      var r = n(1);
      e.default = {
        loadStory: function (t, e) {
          var n = e.locale,
            o = e.fullSlug,
            c = {
              version: t.rootGetters["global/getVersion"],
              language: n,
              resolve_links: "url",
            },
            l = o.replace(n, "").toLowerCase();
          return r.a.prototype.$storyapi
            .get("cdn/stories/".concat(l), c)
            .then(function (e) {
              return (
                t.commit("setSlug", e.data.story.slug),
                t.commit("setStory", { locale: n, data: e.data.story }),
                e.data
              );
            });
        },
        loadCV: function (t) {
          return r.a.prototype.$storyapi
            .get("cdn/spaces/me")
            .then(function (e) {
              t.commit("setCV", e.data.space.version);
            });
        },
        loadScreen: function (t, e) {
          t.commit("setScreen", e);
        },
        loadGlobal: function (t, e) {
          var n = e.locale;
          return r.a.prototype.$storyapi
            .get("cdn/stories/global", {
              language: n,
              resolve_links: "url",
              version: t.rootGetters["global/getVersion"],
            })
            .then(function (e) {
              t.commit("setGlobal", e.data.story);
            })
            .catch(function (t) {
              console.error("Component global doesn't exist");
            });
        },
      };
    },
    175: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(1);
      e.default = {
        setSlug: function (t, e) {
          (t.isHome = "home" === e), (t.slug = e);
        },
        setVersion: function (t, e) {
          t.version = e;
        },
        setIsInEditor: function (t, e) {
          t.isInEditor = e;
        },
        setConfig: function (t) {
          t.config = n(605).default;
        },
        setCV: function (t, e) {
          t.cv = e;
        },
        setScreen: function (t, e) {
          t.screen = e;
        },
        setGlobal: function (t, e) {
          t.global = e;
        },
        setStory: function (t, e) {
          var n = e.locale,
            data = e.data;
          n in t.stories || r.a.set(t.stories, n, {}),
            (t.stories[n][data.slug] = data);
        },
      };
    },
    176: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(177),
        o = n(178),
        c = n(179);
      e.default = {
        namespaced: !0,
        actions: o.default,
        mutations: c.default,
        getters: r.default,
        state: {
          filters: {},
          activeFilters: { language: { in_array: "English" } },
          pressArticles: {},
          sortBy: "desc",
          pagination: { current: 1, max: 1 },
        },
      };
    },
    177: function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = {
          getPressArticles: function (t) {
            return function (e) {
              return e && e in t.pressArticles ? t.pressArticles[e] : [];
            };
          },
          getFilters: function (t) {
            return function (e) {
              return e && e in t.filters ? t.filters[e] : {};
            };
          },
          getActiveFilters: function (t) {
            return t.activeFilters;
          },
          getSortBy: function (t) {
            return t.sortBy;
          },
          getPagination: function (t) {
            return t.pagination;
          },
        });
    },
    178: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(11),
        o = (n(52), n(15), n(7), n(27), n(28), n(54), n(1));
      e.default = {
        loadPressArticles: function (t, e) {
          var n = e.locale,
            r = e.filters,
            c = e.page,
            l = void 0 === c ? 1 : c,
            f = t.state.sortBy,
            d = r || t.state.activeFilters,
            h = {
              version: t.rootGetters["global/getVersion"],
              language: n,
              page: l,
              resolve_links: "url",
              starts_with: "press_article/",
              per_page: 9,
              sort_by: "created_at:".concat(f),
            };
          return (
            delete d.sort_by,
            Object.keys(d).length && (h.filter_query = d),
            t.commit("setActiveFilters", d),
            o.a.prototype.$storyapi.get("cdn/stories", h).then(function (e) {
              return (
                t.commit("setMaxPage", Math.ceil(e.total / e.perPage)),
                t.commit("setCurrentPage", l),
                t.commit("setPressArticles", {
                  locale: n,
                  data: e.data.stories,
                  page: l,
                }),
                e.data.story
              );
            })
          );
        },
        loadFilters: function (t, e) {
          return Object(r.a)(
            regeneratorRuntime.mark(function n() {
              var r, c, l, f;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((r = e.locale),
                        (c = t.rootGetters["global/getVersion"]),
                        (l = t.getters.getFilters(r)),
                        "draft" === c || !l || !Object.keys(l).length)
                      ) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt(
                        "return",
                        new Promise(function (t) {
                          return t(l), l;
                        })
                      );
                    case 5:
                      return (
                        (n.next = 7),
                        o.a.prototype.$storyapi
                          .get("cdn/datasources", { per_page: 100 })
                          .then(function (t) {
                            return t.data.datasources;
                          })
                      );
                    case 7:
                      return (
                        (f = n.sent),
                        (n.next = 10),
                        Promise.all(
                          f.map(function (t) {
                            return o.a.prototype.$storyapi.get(
                              "cdn/datasource_entries",
                              { datasource: t.slug, dimension: r }
                            );
                          })
                        ).then(function (e) {
                          e.map(function (e, n) {
                            t.commit("setFilters", {
                              locale: r,
                              slug: f[n].slug,
                              data: e.data.datasource_entries,
                            });
                          });
                        })
                      );
                    case 10:
                      return n.abrupt("return", n.sent);
                    case 11:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    },
    179: function (t, e, n) {
      "use strict";
      n.r(e);
      n(31), n(350), n(33);
      var r = n(1);
      e.default = {
        setPressArticles: function (t, e) {
          var n = e.locale,
            data = e.data,
            o = e.page;
          n in t.pressArticles || r.a.set(t.pressArticles, n, []);
          var c = o > 1 ? t.pressArticles[n].concat(data) : data;
          t.pressArticles[n] = c;
        },
        setFilters: function (t, e) {
          var n = e.locale,
            o = e.slug,
            data = e.data;
          n in t.filters || r.a.set(t.filters, n, {}), (t.filters[n][o] = data);
        },
        setActiveFilters: function (t, e) {
          t.activeFilters = e;
        },
        setSortBy: function (t, e) {
          t.sortBy = e;
        },
        setMaxPage: function (t, e) {
          t.pagination.max = e;
        },
        setCurrentPage: function (t, e) {
          t.pagination.current = e;
        },
        sortPressArticles: function (t, e) {
          var n = e.locale,
            r = t.pressArticles[n];
          t.pressArticles[n] = r.slice().sort(function (a, b) {
            return "desc" === t.sortBy
              ? new Date(b.created_at) - new Date(a.created_at)
              : new Date(a.created_at) - new Date(b.created_at);
          });
        },
      };
    },
    180: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "langSwitcher",
          methods: {
            setLocale: function (t) {
              if (null == t) return console.warn("Locale args is missing"), !1;
              t !== this.$i18n.locale && this.$i18n.setLocale(t);
            },
          },
          components: {},
        },
        o = (n(524), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass:
                  "c-lang-switcher u-flex u-justify-content-center u-flex-column u-center",
              },
              [
                n("p", { staticClass: "t-title c-lang-switcher__title" }, [
                  t._v(t._s(t.$t("sidebar.lang.title"))),
                ]),
                t._v(" "),
                n("nav", [
                  n(
                    "ul",
                    {
                      staticClass:
                        "c-lang-switcher__items u-flex u-justify-content-center",
                    },
                    t._l(t.$i18n.locales, function (e) {
                      return n("li", { key: e.code, staticClass: "u-flex" }, [
                        n(
                          "button",
                          {
                            staticClass:
                              "c-lang-switcher__item t-text-hover t-text t-link t-link--gradient u-capitalize",
                            class: {
                              "t-text-gradient u-pointer-none is-active t-link t-link--gradient":
                                e.code === t.$i18n.locale,
                            },
                            attrs: {
                              "data-text": t.$t("sidebar.lang." + e.code),
                            },
                            on: {
                              click: function (n) {
                                return t.setLocale(e.code);
                              },
                            },
                          },
                          [
                            n("span", [
                              t._v(
                                " " + t._s(t.$t("sidebar.lang." + e.code)) + " "
                              ),
                            ]),
                          ]
                        ),
                      ]);
                    }),
                    0
                  ),
                ]),
                t._v(" "),
                n(
                  "p",
                  {
                    staticClass:
                      "t-text t-text-gradient c-lang-switcher__upcomming",
                  },
                  [
                    t._v(
                      "\n    " + t._s(t.$t("sidebar.lang.upcomming")) + "\n  "
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "342343b0",
          null
        );
      e.default = component.exports;
    },
    181: function (t, e, n) {
      "use strict";
      n.r(e);
      n(20), n(51), n(34), n(31);
      var r = n(452),
        o = n.n(r),
        c = {
          name: "BaseCheckbox",
          props: {
            isChecked: { type: Boolean, required: !1, default: !1 },
            id: { type: String, required: !1 },
            date: { type: String | Date, required: !1 },
            disabled: { type: Boolean, required: !1, default: !1 },
          },
          data: function () {
            return { month: "", day: "", year: "", isValid: !0 };
          },
          methods: {
            checkInput: function (input) {
              input.value = input.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1");
            },
            onChangeVal: function (t) {
              var e = t.value,
                n = t.name;
              if (!e) return !1;
              switch ((this.$emit("input:error", !1), (this.isValid = !0), n)) {
                case "month":
                  this.month = e;
                  break;
                case "day":
                  this.day = e;
                  break;
                case "year":
                  this.year = e;
              }
              if (
                ("month" === n && 2 === this.month.length
                  ? this.$refs.day.focus()
                  : "day" === n &&
                    2 === this.day.length &&
                    this.$refs.year.focus(),
                "" !== this.month &&
                  2 === this.month.length &&
                  "" !== this.day &&
                  2 === this.day.length &&
                  "" !== this.year &&
                  4 === this.year.length)
              )
                if (
                  o()(
                    ""
                      .concat(this.month, "/")
                      .concat(this.day, "/")
                      .concat(this.year),
                    "boolean"
                  )
                ) {
                  var r = new Date(
                    ""
                      .concat(this.month, "/")
                      .concat(this.day, "/")
                      .concat(this.year)
                  );
                  this.$emit("input", r);
                } else
                  this.$emit("input", ""),
                    this.$emit("input:error", !0),
                    (this.isValid = !1);
            },
          },
        },
        l = (n(603), n(2)),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass:
                  "c-input-date u-flex u-align-items-center u-justify-content-center",
              },
              [
                n("input", {
                  ref: "month",
                  staticClass: "c-input-date__month",
                  attrs: {
                    name: "month",
                    id: "month",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    size: "3",
                    minlength: "2",
                    maxlength: "2",
                    type: "text",
                    placeholder: "MM",
                  },
                  on: {
                    input: function (e) {
                      t.checkInput(e.target),
                        t.onChangeVal({ value: e.target.value, name: "month" });
                    },
                  },
                }),
                t._v(" "),
                n("span", [t._v(" / ")]),
                t._v(" "),
                n("input", {
                  ref: "day",
                  staticClass: "c-input-date__day",
                  attrs: {
                    name: "day",
                    id: "day",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    size: "3",
                    minlength: "2",
                    maxlength: "2",
                    type: "text",
                    placeholder: "DD",
                  },
                  on: {
                    input: function (e) {
                      t.checkInput(e.target),
                        t.onChangeVal({ value: e.target.value, name: "day" });
                    },
                  },
                }),
                t._v(" "),
                n("span", [t._v(" / ")]),
                t._v(" "),
                n("input", {
                  ref: "year",
                  staticClass: "c-input-date__year",
                  attrs: {
                    name: "year",
                    id: "year",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    size: "5",
                    minlength: "4",
                    maxlength: "4",
                    type: "text",
                    placeholder: "YYYY",
                  },
                  on: {
                    input: function (e) {
                      t.checkInput(e.target),
                        t.onChangeVal({ value: e.target.value, name: "year" });
                    },
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "79f3867a",
          null
        );
      e.default = component.exports;
    },
    182: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "BaseMask",
          props: {
            isFull: { type: Boolean, required: !1, default: !1 },
            isSquare: { type: Boolean, required: !1, default: !1 },
          },
          data: function () {
            return {
              mask: this.isSquare
                ? "frame-square"
                : this.isFull
                ? "frame-full"
                : "frame",
            };
          },
          mounted: function () {
            this.bindEvents(), this.onResize();
          },
          destroy: function () {
            this.unBindEvents();
          },
          methods: {
            bindEvents: function () {
              this.$eventHub.$on("onResize", this.onResize);
            },
            unBindEvents: function () {
              this.$eventHub.$off("onResize");
            },
            onResize: function () {
              this.isSquare
                ? (this.mask = "frame-square")
                : this.$device && this.$device.width < 992
                ? (this.mask = this.isFull
                    ? "frame-full-square"
                    : "frame-square")
                : (this.mask =
                    this.isFull && this.$device && this.$device.width < 1920
                      ? "frame-full"
                      : "frame");
            },
          },
        },
        o = (n(661), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "figure",
              {
                staticClass: "c-mask u-relative",
                class: {
                  "c-mask--full": t.isFull,
                  "c-mask--square": t.isSquare,
                },
              },
              [
                n(
                  "div",
                  { staticClass: "c-mask__wrapper u-full-height u-full-width" },
                  [t._t("default")],
                  2
                ),
                t._v(" "),
                n("base-use-svg", { attrs: { id: t.mask } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "1cfc7917",
          null
        );
      e.default = component.exports;
      installComponents(component, { BaseUseSvg: n(66).default });
    },
    183: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "BaseCheckbox",
          props: {
            isChecked: { type: Boolean, required: !1, default: !1 },
            id: { type: String, required: !0 },
            value: { type: String | Object, required: !0 },
            disabled: { type: Boolean, required: !1, default: !1 },
          },
        },
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n("div", [
                n("input", {
                  staticClass: "t-checkbox",
                  attrs: { type: "checkbox", id: t.id, disabled: t.disabled },
                  domProps: { value: t.value, checked: t.isChecked },
                  on: {
                    change: function (e) {
                      return t.$emit("change", {
                        value: t.value,
                        isChecked: e.target.checked,
                      });
                    },
                  },
                }),
                t._v(" "),
                n(
                  "label",
                  { staticClass: "t-text", attrs: { for: t.id } },
                  [t._t("default")],
                  2
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    184: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "BaseCheckbox",
          props: {
            isChecked: { type: Boolean, required: !1, default: !1 },
            name: { type: String, required: !0 },
            id: { type: String, required: !0 },
            value: { type: String | Object, required: !0 },
            disabled: { type: Boolean, required: !1, default: !1 },
          },
        },
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n("div", [
                n("input", {
                  staticClass: "t-checkbox",
                  attrs: {
                    type: "radio",
                    id: t.id,
                    name: t.name,
                    disabled: t.disabled,
                  },
                  domProps: { value: t.value, checked: t.isChecked },
                  on: {
                    change: function (e) {
                      return t.$emit("change", t.value);
                    },
                  },
                }),
                t._v(" "),
                n(
                  "label",
                  { staticClass: "t-text", attrs: { for: t.id } },
                  [t._t("default")],
                  2
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    185: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "MediaCard",
          mixins: [n(74).a],
          props: {
            datas: { type: Object, required: !0 },
            cropId: { type: String, required: !0 },
            isVideo: { type: Boolean, required: !0 },
          },
          methods: {
            openLightBox: function () {
              this.$eventHub.$emit("lightbox:open", this.datas);
            },
          },
        },
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.datas.image.length && t.datas.image[0].image_desktop
              ? n(
                  "article",
                  {
                    ref: t.isVideo,
                    staticClass: "c-card c-card--media",
                    class: { "u-cursor-pointer": !t.isVideo },
                    on: {
                      click: function (e) {
                        !t.isVideo && t.openLightBox();
                      },
                    },
                  },
                  [
                    n(
                      "figure",
                      { staticClass: "c-card__figure t-border" },
                      [
                        t.datas.video_id
                          ? n(
                              "core-youtube-player",
                              { attrs: { "youtube-id": t.datas.video_id } },
                              [
                                n("base-picture", {
                                  attrs: {
                                    src: {
                                      desktop:
                                        t.datas.image[0].image_desktop.filename,
                                      tablet:
                                        t.datas.image[0].image_mobile
                                          .filename ||
                                        t.datas.image[0].image_desktop.filename,
                                    },
                                    alt: t.datas.image[0].image_desktop.alt,
                                    "crop-id": t.cropId,
                                  },
                                }),
                              ],
                              1
                            )
                          : n("base-picture", {
                              attrs: {
                                src: {
                                  desktop:
                                    t.datas.image[0].image_desktop.filename,
                                  tablet:
                                    t.datas.image[0].image_mobile.filename ||
                                    t.datas.image[0].image_desktop.filename,
                                },
                                alt: t.datas.image[0].image_desktop.alt,
                                "crop-id": t.cropId,
                              },
                            }),
                      ],
                      1
                    ),
                    t._v(" "),
                    t.isVideo
                      ? n(
                          "div",
                          {
                            staticClass: "u-cursor-pointer",
                            on: {
                              click: function (e) {
                                !t.filesDownloaded.includes(
                                  t.datas.media_to_download.filename
                                ) &&
                                  t.setDownload({
                                    file: t.datas.media_to_download.filename,
                                    target: e.target,
                                    autoDownload: !0,
                                  });
                              },
                            },
                          },
                          [
                            t.datas.description
                              ? n(
                                  "div",
                                  {
                                    staticClass:
                                      "c-card__tags t-text u-relative",
                                  },
                                  [
                                    n("span", [
                                      t._v(
                                        "\n        " +
                                          t._s(t.datas.description) +
                                          "\n      "
                                      ),
                                    ]),
                                    t._v(" "),
                                    n(
                                      "div",
                                      { staticClass: "c-card__download" },
                                      [
                                        n("base-use-svg", {
                                          attrs: {
                                            id: "download",
                                            color: "white",
                                            size: "sm",
                                          },
                                        }),
                                        t._v(" "),
                                        n("base-use-svg", {
                                          attrs: {
                                            id: "download",
                                            color: "white",
                                            size: "sm",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                )
                              : t._e(),
                          ]
                        )
                      : t._e(),
                  ]
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BasePicture: n(57).default,
        CoreYoutubePlayer: n(129).default,
        BaseUseSvg: n(66).default,
      });
    },
    186: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(2),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    width: "600",
                    height: "152",
                    viewBox: "0 0 600 152",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                t.$listeners
              ),
              [
                n("path", {
                  attrs: {
                    d: "M262 1.5c1 0 1.6.5 1.6 1.6v28.6c0 2 .2 3.5.5 4.8.3 1.3.8 2.3 1.5 3 .6.7 1.6 1.3 2.9 1.7 1.1.3 2.8.5 4.6.5h19.5c1.8 0 3.4-.2 4.6-.5 1.1-.3 2.1-.8 2.9-1.7.7-.7 1.1-1.8 1.5-3 .3-1.3.5-2.8.5-4.8V3.1c0-1 .5-1.6 1.6-1.6h7.6c1 0 1.6.5 1.6 1.6v29.8c0 3.5-.3 6.5-1.1 8.8-.6 2.5-1.8 4.5-3.4 6-1.6 1.5-3.6 2.6-6.2 3.3-2.6.7-5.5 1-9.1 1h-20.3c-3.6 0-6.7-.3-9.1-1-2.4-.7-4.6-1.8-6.2-3.3-1.6-1.5-2.8-3.5-3.4-6-.7-2.5-1.1-5.3-1.1-8.8V3.1c0-1 .5-1.6 1.6-1.6h7.4zM403.9 1.5c1.1 0 2.1 0 2.8.2.8.2 1.5.3 1.9.7.5.3 1.1.7 1.6 1.3.5.5 1.2 1.3 1.8 2.1l26.3 35.1c.2.3.5.5 1 .5h.6c.3 0 .5-.2.5-.7V3.2c0-1 .5-1.6 1.6-1.6h7.5c1 0 1.6.5 1.6 1.6v41.4c0 3-.5 5-1.6 6-1 1-2.6 1.5-4.9 1.5h-6c-1.1 0-1.9 0-2.8-.2-.8-.2-1.3-.3-2-.5-.5-.3-1.1-.7-1.6-1.3-.5-.5-1.1-1.3-2-2.3l-26.3-35.1c-.3-.3-.6-.5-1-.5h-.7c-.3 0-.5.2-.5.7v37.5c0 1-.5 1.7-1.6 1.7h-7.5c-1.1 0-1.6-.5-1.6-1.7V8.9c0-3 .5-5 1.6-6 1-1 2.6-1.5 4.9-1.5l6.4.1zM516.6 1.5c1.1 0 1.6.5 1.6 1.6v7.1c0 1.2-.5 1.7-1.6 1.7h-22.3v38.5c0 1-.5 1.7-1.6 1.7H485c-1 0-1.6-.5-1.6-1.7V11.9h-22.3c-1.1 0-1.6-.5-1.6-1.7V3.1c0-1 .5-1.6 1.6-1.6h55.5zM536.4 1.5c1 0 1.6.5 1.6 1.6v47.1c0 1-.5 1.7-1.6 1.7h-7.6c-1.1 0-1.6-.5-1.6-1.7V3.1c0-1 .5-1.6 1.6-1.6h7.6zM598.3 1.5c1 0 1.6.5 1.6 1.6v7.1c0 1.2-.5 1.7-1.6 1.7H567c-1.8 0-3.4.2-4.6.5-1.1.3-2.1.8-2.9 1.7-.7.7-1.1 1.8-1.5 3-.3 1.3-.5 2.8-.5 4.8v10.3c0 2 .2 3.5.5 4.8.3 1.3.8 2.3 1.5 3 .6.7 1.6 1.3 2.9 1.6 1.1.3 2.8.5 4.6.5h31.4c1 0 1.6.5 1.6 1.7v7.1c0 1-.5 1.7-1.6 1.7h-31.9c-3.6 0-6.7-.3-9.1-1-2.4-.7-4.5-1.8-6.2-3.3-1.6-1.5-2.8-3.5-3.4-6-.8-2.5-1.1-5.3-1.1-8.8V21.1c0-3.5.3-6.4 1.1-8.8.7-2.3 2-4.3 3.4-5.8 1.6-1.5 3.6-2.6 6.2-3.3 2.4-.7 5.5-1 9.1-1h31.9v-.7h-.1zM238.8 74.4c-1.8-1.7-3.9-2.8-6.7-3.6-2.8-.8-6-1.2-9.8-1.2h-33c-1.5 0-2.1.7-2.1 2.1v46c0 1.5.7 2.1 2.1 2.1h33c3.7 0 7.2-.3 9.8-1.2 2.8-.8 5-2 6.7-3.6 1.8-1.6 3.1-3.8 3.9-6.3.8-2.5 1.3-5.6 1.3-9.1v-9.8c0-3.5-.5-6.4-1.3-9.1-.8-2.4-2.1-4.6-3.9-6.3zm-5.7 24.4c0 2.1-.2 3.8-.5 5.3s-1 2.7-2 3.5c-.8.8-2 1.5-3.4 1.8-1.5.3-3.1.5-5.2.5h-23.2c-.7 0-1-.3-1-1V80.4c0-.7.3-1 1-1H222c2.1 0 3.7.2 5.2.5s2.6 1 3.4 1.8c.8.8 1.5 2 2 3.5.3 1.5.5 3.1.5 5.3v8.3zM297.5 102.9c3.7-.7 6.3-2.2 8.1-4.6 1.6-2.3 2.4-5.6 2.4-9.8v-4.1c0-5-1.1-8.6-3.6-11.1-2.3-2.5-6.2-3.8-11.7-3.8h-37.9c-1.5 0-2.1.7-2.1 2.2v46.6c0 1 .5 1.6 1.6 1.6h7.6c1 0 1.6-.5 1.6-1.6V80.2c0-.5.3-.8 1-.8h26.2c2.4 0 4.1.5 5 1.7 1 1 1.5 2.6 1.5 4.8v3c0 2.1-.5 3.8-1.5 4.8s-2.8 1.6-5 1.6h-18.9v8.8h14.6l11.2 14.9c.2.3.5.5.7.7.2.2.6.2 1.3.2h9.1c.6 0 1-.2 1.1-.7.2-.5 0-.8-.2-1.2l-12.1-15.1zM367.3 69.7h-31c-3.6 0-6.7.3-9.1 1-2.4.7-4.5 1.8-6.2 3.3-1.6 1.5-2.8 3.5-3.4 5.8-.8 2.3-1.1 5.3-1.1 8.8v12.3c0 3.5.3 6.5 1.1 8.8.6 2.5 1.9 4.5 3.4 6 1.6 1.5 3.6 2.6 6.2 3.3 2.6.7 5.5 1 9.1 1h31c1.1 0 1.6-.5 1.6-1.6v-6.8c0-1-.5-1.7-1.6-1.7h-30.9c-1.8 0-3.4-.2-4.6-.5-1.1-.3-2.1-.8-2.9-1.6-.7-.7-1.3-1.8-1.5-3-.3-1.3-.5-2.8-.5-4.6V89.3c0-1.8.2-3.5.5-4.6.3-1.3.8-2.3 1.5-3 .6-.7 1.6-1.3 2.9-1.6 1.1-.3 2.8-.5 4.6-.5h30.9c1.1 0 1.6-.5 1.6-1.7v-6.8c.1-1-.4-1.4-1.6-1.4z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M367 99.1c1 0 1.6-.5 1.6-1.7v-5.6c0-1-.5-1.6-1.6-1.6h-31.7V99H367v.1zM523.6 71.3c-.8-1.2-2.4-1.6-4.9-1.6h-7.6c-1 0-2 0-2.6.2-.6.2-1.3.5-1.9.8-.5.3-1.1 1-1.5 1.6-.5.7-1 1.7-1.3 2.8l-14.6 34.6c-.2.5-.5.7-1 .7h-.8c-.5 0-.8-.2-1-.7l-14.6-34.6c-.5-1.2-1-2.1-1.3-2.8-.5-.7-1-1.3-1.5-1.6-.5-.3-1.3-.7-1.9-.8-.8-.2-1.6-.2-2.8-.2h-7.6c-2.4 0-4.2.5-5 1.6-.8 1.2-1.3 3-1.3 5.8v41.4c0 1 .5 1.7 1.6 1.7h7.2c1 0 1.6-.5 1.6-1.7V80.9c0-.5.2-.7.5-.7h.7c.5 0 .8.2 1 .5l14.3 32.3c.5 1.3 1.1 2.3 1.8 3.3.6.8 1.3 1.6 1.9 2.1.6.5 1.5 1 2.3 1.2.8.2 2 .3 3.1.3h3.4c1.1 0 2.3-.2 3.1-.3.8-.2 1.6-.7 2.3-1.2.7-.5 1.3-1.3 2-2.1.6-.8 1.1-2 1.8-3.3l14.3-32.3c.2-.3.5-.5 1-.5h.7c.3 0 .5.2.5.7v37.5c0 1 .5 1.7 1.6 1.7h7.2c1.1 0 1.6-.5 1.6-1.7V77c-1-2.6-1.4-4.5-2.3-5.7z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M152.5 78.7c0 .3-.2.8-.2 1.2-.2 5.5-1 10.8-2.6 15.9-1.1 3.8-2.9 7.3-5.2 10.4-2.9 3.8-6.5 6.6-10.7 8.8-3.1 1.5-6.3 2.6-9.8 3.5-2.4.5-5 1-7.5 1.3-.8.2-.7.2-1.1-.5-4.6-6.5-9.3-12.9-13.8-19.2-.8-1.2-1.6-2.3-2.4-3.5-.2-.2-.2-.3-.3-.5 0 0 0-.2.2-.2h.5c2.1 0 4.2 0 6.3-.2 3.1-.2 6-.5 8.9-1.3 2.1-.7 3.9-1.5 5.5-3 1.6-1.3 2.8-3.1 3.6-5.1.8-1.8 1.1-3.6 1.5-5.5.5-3 .7-6 .7-8.9V47.6c0-3.1-.3-6.3-.8-9.4-.3-1.8-1-3.6-1.8-5.3-1.6-3.1-3.9-5.1-7.2-6.3-1.6-.7-3.3-1-4.9-1.3-2.8-.5-5.5-.7-8.3-.7h-55c-.2 0-.3 0-.5-.3 0-.2-.2-.2-.3-.3-5.2-7.3-10.4-14.6-15.6-21.8 0-.2-.2-.2-.2-.3-.2-.3-.2-.3.2-.3.7-.2 1.3-.3 1.8-.3 2.1-.3 4.1-.5 6.2-.8 1.6-.2 3.2-.2 4.9-.3.3 0 .8 0 1.1-.2h61.4c.3 0 .7.2 1 .2 2.4.2 4.9.3 7.3.5 2.9.3 5.9.8 8.8 1.5 3.4.8 6.8 2 10.1 3.5 4.1 2 7.5 4.8 10.2 8.4 2.6 3.3 4.2 6.9 5.5 10.9 1.5 5.1 2.3 10.4 2.6 15.7 0 .3 0 .8.2 1.2-.3 12.4-.3 24.6-.3 36.8z",
                    fill: "#2CACE3",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M0 43.7c0-.5.2-1 .2-1.5.2-2.5.3-5.1.7-7.6.7-4.6 1.6-8.9 3.6-13.2 2.1-4.6 4.9-8.6 8.9-11.7.8-.7.7-.7 1.1.2 5.2 7.3 10.4 14.4 15.6 21.7 0 .2.2.2.2.3.2.2.2.5 0 .7-1.3 2-2 4.3-2.4 6.6-.5 2.3-.7 4.6-.8 6.9 0 1.7-.2 3.5-.2 5.1v22.2c0 2.8.2 5.6.7 8.4.3 2 .8 4 1.8 6 1.5 3.3 4.1 5.5 7.3 6.8 1.6.7 3.2 1 5 1.3 2.8.5 5.5.7 8.3.7h25.5c1 0 .8-.2 1.3.7 11.7 16.4 23.4 32.7 35.3 49.1l.3.3c.6 1 .8 2 .5 3-.2.7-.7 1-1.1 1.2-.2 0-.3.2-.5.2H86.6c-.2 0-.2-.2-.3-.2-.7-.2-1.3-.3-1.8-.8l-1.5-1.5c-6-8.9-12.2-17.9-18.2-26.8-.5-.8-.3-.7-1.3-.7H46.4c-2.6 0-5.2-.2-7.8-.5-2.6-.3-5.2-.7-7.8-1.2-3.3-.7-6.3-1.5-9.4-2.8-3.4-1.3-6.5-3.3-9.1-5.6-3.4-3-6-6.8-7.8-11.1-1.8-4.1-2.6-8.4-3.2-12.7-.3-2.6-.5-5.1-.7-7.8 0-.5-.2-1.2-.2-1.7C0 66.2 0 54.9 0 43.7zM244.5 34.3v.5c-.2 2.3-.5 4.5-1.1 6.6-.5 1.7-1.1 3-2.3 4.3-1.1 1.7-2.8 2.8-4.6 3.6-1.3.7-2.8 1.2-4.1 1.5-1 .2-2.1.5-3.1.5-.3 0-.3.2-.5-.2-2-2.6-3.9-5.3-5.8-8.1-.3-.5-.7-1-1-1.5l-.2-.2H224.6c1.3 0 2.6-.2 3.7-.5.8-.3 1.6-.7 2.3-1.2.7-.7 1.1-1.3 1.5-2.2.3-.7.5-1.5.6-2.3.2-1.2.3-2.5.3-3.6V21.4c0-1.3-.2-2.6-.3-4-.2-.8-.3-1.5-.8-2.2-.7-1.3-1.6-2.2-2.9-2.6-.7-.3-1.3-.5-2-.5-1.1-.2-2.3-.3-3.4-.3H200.7c-.2 0-.2 0-.2-.2 0 0 0-.2-.2-.2-2.1-3-4.4-6.1-6.5-9.1 0 0 0-.2-.2-.2v-.2c.3 0 .5-.2.8-.2.8-.2 1.8-.2 2.6-.3.7 0 1.3-.2 2.1-.2h26.5c1 0 2.1.2 3.1.2 1.3.2 2.4.3 3.7.7 1.5.3 2.9.8 4.2 1.5 1.6.8 3.1 2 4.2 3.5 1 1.3 1.8 2.8 2.3 4.5.6 2.2 1 4.3 1 6.6v.5c.4 5.3.4 10.4.4 15.6zM180.7 19.5c0-.2 0-.5.2-.7 0-1 .2-2.1.3-3.1.3-2 .6-3.8 1.5-5.5.8-2 2.1-3.6 3.7-5 .3-.3.3-.3.5 0 2.1 3 4.4 6.1 6.5 9.1v.2c0 .2.2.2 0 .3-.5.8-.8 1.8-1 2.8-.2 1-.3 2-.3 3V32c0 1.2.2 2.3.3 3.5.2.8.3 1.7.8 2.5.6 1.3 1.6 2.3 3.1 2.8.7.3 1.3.5 2.1.5 1.1.2 2.3.2 3.4.2h10.7c.5 0 .3 0 .5.3 4.9 6.8 9.8 13.7 14.8 20.5 0 0 0 .2.2.2.3.3.3.8.2 1.3 0 .3-.2.3-.5.5H217c-.3 0-.5-.2-.8-.3-.2-.2-.5-.3-.7-.7-2.6-3.8-5-7.4-7.6-11.2-.2-.3-.2-.3-.5-.3h-7.2c-1.1 0-2.3 0-3.2-.2-1.1-.2-2.1-.3-3.3-.5-1.3-.3-2.8-.7-3.9-1.2-1.5-.7-2.8-1.3-3.9-2.3-1.5-1.3-2.4-2.8-3.3-4.6-.6-1.7-1.1-3.5-1.3-5.3-.2-1-.2-2.2-.3-3.3 0-.2 0-.5-.2-.7-.1-4.7-.1-9.4-.1-14.2zM383.1 50.1L359.7 6.9c-1.1-2.2-2.4-3.6-3.6-4.3-1.3-.7-2.8-1.2-4.6-1.2h-4.2c-1.5 0-2.8.3-3.9 1.2-1.1.7-2.3 2.2-3.4 4.3l-23.3 43.2c-.2.5-.3.8-.2 1.2.2.3.5.5 1.1.5h9.3c.8 0 1.3-.3 1.6-1l4.9-9.3 11.1-20.8 4.5-8.6c.2-.3.5-.5.8-.5h.5c.3 0 .6.2.8.5l11.2 21h-16.1l-4.4 8.3h25l5 9.3c.3.7.8 1 1.6 1h8.9c.5 0 1-.2 1-.5.1-.2 0-.6-.2-1.1zM441.6 118.3l-23.4-43.2c-1.1-2.1-2.4-3.6-3.6-4.3-1.3-.7-2.8-1.2-4.5-1.2h-4.2c-1.5 0-2.8.3-3.9 1.2-1.1.7-2.3 2.1-3.4 4.3l-23.2 43.2c-.2.5-.3.8-.2 1.2.2.3.5.5 1.1.5h9.3c.8 0 1.3-.3 1.6-1l4.9-9.3 11.1-20.8 4.6-8.6c.2-.3.5-.5.8-.5h.5c.3 0 .6.2.8.5l11.2 21H405l-4.4 8.3h25l5 9.3c.3.7.8 1 1.6 1h8.9c.5 0 1-.2 1-.5-.1-.1-.3-.6-.5-1.1z",
                    fill: "#fff",
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      component.options.__file = "static/svg/logo-quantic-dream.svg";
      e.default = component.exports;
    },
    227: function (t, e, n) {},
    228: function (t, e, n) {},
    229: function (t, e, n) {},
    230: function (t, e, n) {},
    231: function (t, e, n) {},
    348: function (t, e, n) {},
    349: function (t, e, n) {},
    361: function (t, e, n) {},
    363: function (t, e, n) {},
    366: function (t, e, n) {},
    367: function (t, e, n) {},
    368: function (t, e, n) {
      t.exports = n.p + "img/logo-header2x.58efec3.png";
    },
    369: function (t, e, n) {},
    370: function (t, e, n) {
      t.exports = n.p + "img/logo-cover.aa0bf19.png";
    },
    371: function (t, e, n) {
      t.exports = n.p + "img/logo-cover-mobile2x.d2b2928.png";
    },
    372: function (t, e, n) {
      t.exports = n.p + "img/logo-cover-mobile.fddadcc.png";
    },
    373: function (t, e, n) {},
    374: function (t, e, n) {},
    375: function (t, e, n) {},
    376: function (t, e, n) {},
    377: function (t, e, n) {},
    378: function (t, e, n) {},
    379: function (t, e, n) {},
    380: function (t, e, n) {},
    381: function (t, e, n) {},
    382: function (t, e, n) {},
    383: function (t, e, n) {},
    384: function (t, e, n) {},
    385: function (t, e, n) {},
    386: function (t, e, n) {},
    387: function (t, e, n) {},
    388: function (t, e, n) {
      "use strict";
      n.r(e);
      n(126);
      var r = {
          name: "BaseSelect",
          props: {
            id: { type: String, required: !1, default: "" },
            size: { type: Number, required: !1 },
            name: { type: String, required: !1, default: "" },
            options: { type: [Array, Object], required: !0 },
            selected: { type: [String, Number], required: !1, default: "" },
            label: { type: String, required: !1, default: "" },
            placeholder: { type: String, required: !1, default: "" },
            disabled: { type: Boolean, required: !1, default: !1 },
          },
        },
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "select",
              {
                staticClass: "t-select",
                attrs: { name: t.name, size: t.size, id: t.id },
                on: {
                  change: function (e) {
                    return t.$emit("change", e.target.value);
                  },
                },
              },
              [
                !t.selected && t.placeholder
                  ? n(
                      "option",
                      { attrs: { disabled: "", selected: "", value: "" } },
                      [t._v(t._s(t.placeholder))]
                    )
                  : t._e(),
                t._v(" "),
                t._l(t.options, function (option, e) {
                  return n(
                    "option",
                    {
                      key: e,
                      attrs: { label: option.key },
                      domProps: {
                        value: option.value || e,
                        selected: option.value === t.selected,
                      },
                    },
                    [t._v("\n    " + t._s(option) + "\n  ")]
                  );
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "cad7153a",
          null
        );
      e.default = component.exports;
    },
    389: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(460),
        o = {
          name: "PressCard",
          mixins: [n(74).a],
          props: { datas: { type: Object, required: !0 } },
          data: function () {
            return { weight: 0 };
          },
          mounted: function () {
            this.setDownload({ file: this.datas.content.download.filename });
          },
          computed: {
            date: function () {
              return Object(r.a)(this.datas.created_at, "dd.mm.yyyy");
            },
            filters: function () {
              var t = this.$i18n.locale;
              return this.$store.getters["press/getFilters"](t);
            },
          },
        },
        c = n(2),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("article", { ref: "root", staticClass: "c-card" }, [
              t.datas.content.image.length
                ? n(
                    "figure",
                    { staticClass: "c-card__figure t-border" },
                    [
                      n("base-picture", {
                        attrs: {
                          src: {
                            desktop:
                              t.datas.content.image[0].image_desktop.filename,
                            tablet:
                              t.datas.content.image[0].image_mobile.filename ||
                              t.datas.content.image[0].image_desktop.filename,
                          },
                          alt: t.datas.content.image[0].image_desktop.alt,
                          "crop-id": "press",
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              n("div", [
                t.datas.name
                  ? n("p", { staticClass: "t-text--xs u-uppercase" }, [
                      t._v(t._s(t.datas.name)),
                    ])
                  : t._e(),
                t._v(" "),
                n("p", { staticClass: "c-card__meta" }, [
                  t._v(t._s(t.date) + " "),
                  0 !== t.weight
                    ? n("span", [t._v(" - " + t._s(t.weight))])
                    : t._e(),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { BasePicture: n(57).default });
    },
    390: function (t, e, n) {
      "use strict";
      n.r(e);
      n(14), n(23), n(16), n(24);
      var r = n(5),
        o =
          (n(7),
          n(27),
          n(28),
          n(193),
          n(90),
          n(31),
          n(124),
          n(18),
          n(20),
          n(55),
          n(73),
          n(15),
          n(50),
          n(53),
          n(9)),
        c = n(58),
        l = n.n(c);
      n(487);
      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var d = {
          name: "PressFilters",
          props: { filters: { type: Object, required: !0 } },
          data: function () {
            return { filterQuery: {}, url: {}, params: {} };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? f(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : f(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(o.b)({
              version: "global/getVersion",
              activeFilters: "press/getActiveFilters",
              screen: "global/getScreen",
              sortBy: "press/getSortBy",
              pagination: "press/getPagination",
            })
          ),
          mounted: function () {
            (this.filterQuery = this.activeFilters),
              (this.url = new URL(window.location)),
              (this.getNewPressArticles = l()(
                this.getNewPressArticles,
                500,
                !0
              )),
              this.bindEvents();
          },
          destroyed: function () {
            this.unBindEvents();
          },
          methods: {
            bindEvents: function () {
              var t = this;
              this.$eventHub.$on("filters:sort_by:change", function () {
                t.getNewPressArticles({ sorting: !0 });
              });
            },
            unBindEvents: function () {
              this.$eventHub.$off("filters:sort_by:change");
            },
            setLabel: function (t) {
              return t.dimension_value ? t.dimension_value : t.value;
            },
            onChangeSortBy: function (t) {
              this.$store.commit("press/setSortBy", t);
            },
            onChange: function (t) {
              var e = t.value,
                n = t.isChecked;
              if (((this.filterQuery = this.activeFilters), n))
                e.datasource in this.filterQuery
                  ? (this.filterQuery[e.datasource] = {
                      in_array: ""
                        .concat(this.filterQuery[e.datasource].in_array, ",")
                        .concat(e.value),
                    })
                  : (this.filterQuery[e.datasource] = { in_array: e.value });
              else {
                var r = this.filterQuery[e.datasource].in_array
                  .split(",")
                  .filter(function (t) {
                    return t !== e.value;
                  })
                  .join(",");
                r.length
                  ? (this.filterQuery[e.datasource].in_array = r)
                  : delete this.filterQuery[e.datasource];
              }
              ("desktop" !== this.screen && "tabletLand" !== this.screen) ||
                this.getNewPressArticles();
            },
            getNewPressArticles: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              t
                ? this.pagination.current === this.pagination.max
                  ? this.$store.commit("press/sortPressArticles", {
                      locale: this.$i18n.locale,
                    })
                  : this.$store.dispatch("press/loadPressArticles", {
                      locale: this.$i18n.locale,
                    })
                : this.$store.dispatch("press/loadPressArticles", {
                    locale: this.$i18n.locale,
                    filters: this.filterQuery,
                  }),
                this.addParamsUrl(this.filterQuery),
                ("mobile" !== this.screen && "tablet" !== this.screen) ||
                  this.$eventHub.$emit("sidebar:close", "press-filters");
            },
            addParamsUrl: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = {};
              for (var n in ((e.sort_by = this.sortBy), t))
                n in e || (e[n] = t[n].in_array);
              e = new URLSearchParams(e).toString();
              var r = Object.keys(e).length
                ? ""
                    .concat(this.url.origin)
                    .concat(this.url.pathname, "?")
                    .concat(e)
                : "".concat(this.url.origin).concat(this.url.pathname);
              window.history.replaceState("", "", r);
            },
            isChecked: function (t) {
              if (!Object.keys(this.activeFilters).length) return !1;
              var e = !1;
              for (var filter in this.activeFilters) {
                if (
                  this.activeFilters[filter].in_array.split(",").includes(t)
                ) {
                  e = !0;
                  break;
                }
              }
              return e;
            },
          },
        },
        h = d,
        v = (n(693), n(2)),
        component = Object(v.a)(
          h,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return Object.keys(t.filters).length
              ? n(
                  "div",
                  {
                    staticClass:
                      "c-filters u-full-width u-full-height u-flex u-flex-column u-block--lg",
                  },
                  [
                    "mobile" === t.screen || "tablet" === t.screen
                      ? n(
                          "div",
                          {
                            staticClass:
                              "c-filters__item u-marg-t-auto u-none--lg",
                          },
                          [
                            n(
                              "header",
                              { staticClass: "c-filters__header u-marg-b-xxs" },
                              [
                                n("p", { staticClass: "t-text--xs" }, [
                                  t._v(t._s(t.$t("press.sort_by.label"))),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "u-flex u-flex-column" }, [
                              n(
                                "li",
                                { staticClass: "c-filters__checkbox" },
                                [
                                  n(
                                    "base-radio",
                                    {
                                      attrs: {
                                        name: "sorting",
                                        value: "desc",
                                        "is-checked": "desc" === t.sortBy,
                                        id: "sort_by_asc",
                                      },
                                      on: { change: t.onChangeSortBy },
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(t.$t("press.sort_by.newest")) +
                                          "\n        "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              n(
                                "li",
                                { staticClass: "c-filters__checkbox" },
                                [
                                  n(
                                    "base-radio",
                                    {
                                      attrs: {
                                        name: "sorting",
                                        value: "asc",
                                        "is-checked": "asc" === t.sortBy,
                                        id: "sort_by_desc",
                                      },
                                      on: { change: t.onChangeSortBy },
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(t.$t("press.sort_by.oldest")) +
                                          "\n        "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    t._l(t.filters, function (e, r, o) {
                      return n(
                        "div",
                        { key: o, staticClass: "c-filters__item" },
                        [
                          n(
                            "header",
                            { staticClass: "c-filters__header u-marg-b-xxs" },
                            [
                              n("p", { staticClass: "t-text--xs" }, [
                                t._v(t._s(t.$t("press.filters." + r))),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "ul",
                            { staticClass: "u-flex u-flex-column" },
                            t._l(e, function (filter) {
                              return n(
                                "li",
                                {
                                  key: filter.value,
                                  staticClass: "c-filters__checkbox",
                                },
                                [
                                  n(
                                    "base-checkbox",
                                    {
                                      attrs: {
                                        value: {
                                          datasource: r,
                                          value: filter.value,
                                        },
                                        "is-checked": t.isChecked(filter.value),
                                        id: filter.name,
                                      },
                                      on: { change: t.onChange },
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(t.setLabel(filter)) +
                                          "\n        "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]
                      );
                    }),
                    t._v(" "),
                    "mobile" === t.screen || "tablet" === t.screen
                      ? n(
                          "div",
                          {
                            staticClass:
                              "u-full-width u-marg-t-auto u-none--lg",
                          },
                          [
                            n("base-cta", {
                              staticClass: "u-full-width",
                              attrs: {
                                tag: "button",
                                name: t.$t("press.filters.apply_filters"),
                              },
                              nativeOn: {
                                click: function (e) {
                                  return t.getNewPressArticles.apply(
                                    null,
                                    arguments
                                  );
                                },
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ],
                  2
                )
              : t._e();
          },
          [],
          !1,
          null,
          "688d134a",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BaseRadio: n(184).default,
        BaseCheckbox: n(183).default,
        BaseCta: n(56).default,
      });
    },
    4: function (t, e, n) {
      "use strict";
      n.d(e, "k", function () {
        return _;
      }),
        n.d(e, "m", function () {
          return x;
        }),
        n.d(e, "l", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return k;
        }),
        n.d(e, "b", function () {
          return j;
        }),
        n.d(e, "s", function () {
          return O;
        }),
        n.d(e, "g", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return $;
        }),
        n.d(e, "d", function () {
          return P;
        }),
        n.d(e, "r", function () {
          return S;
        }),
        n.d(e, "j", function () {
          return L;
        }),
        n.d(e, "t", function () {
          return z;
        }),
        n.d(e, "o", function () {
          return D;
        }),
        n.d(e, "q", function () {
          return M;
        }),
        n.d(e, "f", function () {
          return A;
        }),
        n.d(e, "c", function () {
          return T;
        }),
        n.d(e, "i", function () {
          return B;
        }),
        n.d(e, "p", function () {
          return H;
        }),
        n.d(e, "a", function () {
          return X;
        }),
        n.d(e, "v", function () {
          return K;
        }),
        n.d(e, "n", function () {
          return Q;
        }),
        n.d(e, "u", function () {
          return Y;
        });
      n(48), n(14), n(45), n(49), n(23), n(16), n(24);
      var r = n(40),
        o = n(11),
        c = n(5),
        l = n(21),
        f =
          (n(52),
          n(7),
          n(18),
          n(162),
          n(34),
          n(31),
          n(54),
          n(15),
          n(27),
          n(28),
          n(33),
          n(20),
          n(51),
          n(164),
          n(165),
          n(223),
          n(73),
          n(124),
          n(514),
          n(50),
          n(53),
          n(1)),
        d = n(35);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function v(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function m(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function _(t) {
        f.a.config.errorHandler && f.a.config.errorHandler(t);
      }
      function x(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }
      function w(t) {
        return (
          t.$options &&
          "function" == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function k(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = m(r);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && k(c, n);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return n;
      }
      function j(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                v(v({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function O(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = f.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o];
            });
          })
        );
      }
      function $(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return C(t, e, "instances");
      }
      function P(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }
      function S(t, e) {
        return Promise.all(
          P(
            t,
            (function () {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  var l, f;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof n || n.options) {
                              t.next = 11;
                              break;
                            }
                            return (t.prev = 1), (t.next = 4), n();
                          case 4:
                            (n = t.sent), (t.next = 11);
                            break;
                          case 7:
                            throw (
                              ((t.prev = 7),
                              (t.t0 = t.catch(1)),
                              t.t0 &&
                                "ChunkLoadError" === t.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((l = Date.now()),
                                (!(f = parseInt(
                                  window.sessionStorage.getItem("nuxt-reload")
                                )) ||
                                  f + 6e4 < l) &&
                                  (window.sessionStorage.setItem(
                                    "nuxt-reload",
                                    l
                                  ),
                                  window.location.reload(!0))),
                              t.t0)
                            );
                          case 11:
                            return (
                              (o.components[c] = n = O(n)),
                              t.abrupt(
                                "return",
                                "function" == typeof e ? e(n, r, o, c) : n
                              )
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function L(t) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), S(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      v(
                        v({}, e),
                        {},
                        {
                          meta: C(e).map(function (t, n) {
                            return v(
                              v({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function z(t, e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o, c, f, h;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !1,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: e.router.options.base,
                          env: {},
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var o = Object(r.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== o && "object" !== o) ||
                                ((n = path || {}),
                                (path = t),
                                (o = Object(r.a)(path)),
                                (t = 302)),
                              "object" === o &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(d.e)(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([L(n.route), L(n.from)])
                    );
                  case 3:
                    (o = t.sent),
                      (c = Object(l.a)(o, 2)),
                      (f = c[0]),
                      (h = c[1]),
                      n.route && (e.context.route = f),
                      n.from && (e.context.from = h),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : M(t[0], e).then(function () {
              return D(t.slice(1), e);
            });
      }
      function M(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function A(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(d.d)(e);
      }
      function T(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(r.a)(t[i]) &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", G(e)));
          return function (e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? N : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ("string" != typeof l) {
                var f = data[l.name || "pathMatch"],
                  d = void 0;
                if (null == f) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined'
                  );
                }
                if (Array.isArray(f)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        "`"
                    );
                  if (0 === f.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var h = 0; h < f.length; h++) {
                    if (((d = o(f[h])), !n[c].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          "`"
                      );
                    path += (0 === h ? l.prefix : l.delimiter) + d;
                  }
                } else {
                  if (((d = l.asterisk ? V(f) : o(f)), !n[c].test(d)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        d +
                        '"'
                    );
                  path += l.prefix + d;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              l = (e && e.delimiter) || "/";
            for (; null != (n = I.exec(t)); ) {
              var f = n[0],
                d = n[1],
                h = n.index;
              if (((path += t.slice(c, h)), (c = h + f.length), d))
                path += d[1];
              else {
                var v = t[c],
                  m = n[2],
                  y = n[3],
                  _ = n[4],
                  x = n[5],
                  w = n[6],
                  k = n[7];
                path && (r.push(path), (path = ""));
                var j = null != m && null != v && v !== m,
                  O = "+" === w || "*" === w,
                  C = "?" === w || "*" === w,
                  $ = n[2] || l,
                  pattern = _ || x;
                r.push({
                  name: y || o++,
                  prefix: m || "",
                  delimiter: $,
                  optional: C,
                  repeat: O,
                  partial: j,
                  asterisk: Boolean(k),
                  pattern: pattern
                    ? U(pattern)
                    : k
                    ? ".*"
                    : "[^" + F($) + "]+?",
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }
      function B(t, e) {
        var n = {},
          r = v(v({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function H(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return v(
          v({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var I = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function N(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function V(t) {
        return N(t, !0);
      }
      function F(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function U(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function G(t) {
        return t && t.sensitive ? "" : "i";
      }
      function X(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var K = d.c,
        Q = (d.g, d.b);
      function Y(t) {
        try {
          window.history.scrollRestoration = t;
        } catch (t) {}
      }
    },
    458: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function () {
          return d;
        });
      var r = n(135),
        o = n(136),
        c = (n(364), n(82)),
        l = n(81),
        f = n(1),
        d = (function () {
          function t(e) {
            var n = e.layer,
              o = void 0 === n ? 1 : n,
              d = e.debug,
              h = void 0 !== d && d;
            Object(r.a)(this, t),
              (this.debug = h),
              (this.layer = o),
              (this.translateScroll = 0),
              (this.factor =
                1 -
                Object(l.inverseLerp)(
                  1,
                  4,
                  Object(c.valueNonZero)() + this.layer
                ).toFixed(2)),
              (this.deformation = 0),
              (this.dimension = Object(c.range)(
                this.factor,
                1 + 1.5 * this.factor
              )),
              (this.width = this.height = this.dimension),
              (this.pos = {
                x: Object(c.valueNonZero)() * f.a.prototype.$device.width,
                y: Object(c.valueNonZero)() * f.a.prototype.$device.height,
              }),
              (this.posRatio = {
                x: this.setRatioPos({ value: this.pos.x, ratio: "width" }),
                y: this.setRatioPos({ value: this.pos.y, ratio: "height" }),
              }),
              (this.alpha = {
                min: Object(c.range)(1 - this.factor, 0.8),
                current: 0,
                max: Object(c.range)(0, 0 - this.factor),
                velocity: 0,
              });
          }
          return (
            Object(o.a)(t, [
              {
                key: "resetPos",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "down";
                  this.pos.y =
                    "down" === t
                      ? 0 - this.height
                      : f.a.prototype.$device.height + this.height;
                },
              },
              {
                key: "onResize",
                value: function () {
                  (this.pos.x = this.posRatio.x * f.a.prototype.$device.width),
                    (this.pos.y =
                      this.posRatio.y * f.a.prototype.$device.height);
                },
              },
              {
                key: "setScrollTranslate",
                value: function (t) {
                  this.translateScroll =
                    t * Math.pow(this.factor, Math.abs(this.layer - 4));
                },
              },
              {
                key: "setDeformation",
                value: function (t) {
                  this.deformation = t < 0.1 ? 0 : t * this.factor;
                },
              },
              {
                key: "update",
                value: function (t) {
                  this.pos.y = this.pos.y + this.translateScroll;
                  var e = this.height - this.height + this.deformation,
                    n = this.width - this.width + this.deformation;
                  (this.height = Object(l.clamp)(
                    this.dimension + e,
                    this.dimension,
                    2 * this.dimension
                  )),
                    (this.width = Object(l.clamp)(
                      this.dimension - n,
                      0.5 * this.dimension,
                      this.dimension
                    )),
                    (this.alpha.current = Math.abs(
                      Math.cos(this.alpha.velocity / (200 / this.factor))
                    )),
                    (this.alpha.current = Object(l.clamp)(
                      this.alpha.current,
                      this.alpha.min,
                      this.alpha.max
                    )),
                    (this.alpha.velocity += 0.5),
                    this.alpha.velocity > 1e3 && (this.alpha.velocity = 0),
                    this.pos.y + this.height > f.a.prototype.$device.height &&
                    "down" === f.a.prototype.$device.scroll.direction
                      ? this.resetPos("down")
                      : this.pos.y - this.height < 0 &&
                        "up" === f.a.prototype.$device.scroll.direction &&
                        this.resetPos("up"),
                    (this.posRatio.x = this.setRatioPos({
                      value: this.pos.x,
                      ratio: "width",
                    })),
                    (this.posRatio.y = this.setRatioPos({
                      value: this.pos.y,
                      ratio: "height",
                    }));
                },
              },
              {
                key: "setRatioPos",
                value: function (t) {
                  var e = t.value,
                    n = t.ratio;
                  switch (void 0 === n ? "width" : n) {
                    case "width":
                      return e / f.a.prototype.$device.width;
                    case "height":
                      return e / f.a.prototype.$device.height;
                  }
                },
              },
            ]),
            t
          );
        })();
    },
    459: function (t, e, n) {
      n(364),
        (t.exports = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          if (0 === t) return "0 Bytes";
          var n = 1024,
            r = e < 0 ? 0 : e,
            o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            i = Math.floor(Math.log(t) / Math.log(n));
          return parseFloat((t / Math.pow(n, i)).toFixed(r)) + " " + o[i];
        });
    },
    462: function (t, e, n) {
      "use strict";
      var r = n(11),
        o = (n(52), n(7), n(72), n(1)),
        c = n(4),
        l = window.__NUXT__;
      function f() {
        if (!this._hydrated) return this.$fetch();
      }
      function d() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = l.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.a.set(this.$data, e, data[e]);
        }
      }
      function h() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = v.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function v() {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = h.bind(this)),
            Object(c.a)(this, "created", d),
            Object(c.a)(this, "beforeMount", f));
        },
      };
    },
    463: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9),
        c = n(2),
        component = Object(c.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    width: "227",
                    height: "72",
                    viewBox: "0 0 227 72",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                t.$listeners
              ),
              [
                n("path", {
                  attrs: {
                    d: "M35.783 61.087a13.187 13.187 0 004.187-.676c3.915-1.325 6.742-3.66 8.402-6.944a17.113 17.113 0 001.705-7.167c.206-5.085.208-38.098.208-38.588a1.78 1.78 0 01.238-.727c.392-.432 2.17-1.146 2.17-1.146a.91.91 0 00.56-.882V1.6a.877.877 0 00-.222-.608.817.817 0 00-.578-.242h-11.92a.817.817 0 00-.579.242.877.877 0 00-.22.608v3.892a.82.82 0 00.6.785l.013.004.015.002c1.76.268 2.18.99 2.292 1.679 0 0 .635 38.177 0 40.45a5.058 5.058 0 01-1.217 2.249 3.885 3.885 0 01-2.892 1.157 3.644 3.644 0 01-2.572-1.07c-.825-.84-1.228-2.079-1.198-3.681v-.007c-.003-.302-.003-7.096.014-37.744 0-.973.003-1.66.003-1.66.012-.39.026-.52.236-.67.282-.202.898-.407 2.123-.705h.007a.82.82 0 00.6-.785V1.605a.877.877 0 00-.221-.608.817.817 0 00-.58-.242h-15.49a.818.818 0 00-.58.242.877.877 0 00-.22.608v3.892a.82.82 0 00.6.785h.007c1.224.298 1.84.502 2.122.704.21.152.224.283.236.67l.008 40.593s-.978.032-1.017.706c-.567 3.041-.803 5.499-.993 7.473-.265 2.762-.44 4.586-1.31 5.654-.831 1.018-2.348 1.431-5.377 1.453V7.356a.66.66 0 01.173-.38c.3-.263 1.354-.433 1.922-.523l.04-.007a.818.818 0 00.677-.798V1.62a.869.869 0 00-.867-.867H.8a.818.818 0 00-.579.242.877.877 0 00-.222.608v3.895a.82.82 0 00.6.785h.008c1.224.298 1.837.505 2.122.704.239.168.238.728.238.728L2.97 64.19c0 .624-.913.846-.974.86l-1.043.166a.812.812 0 00-.696.778v4.418a.762.762 0 00.183.58.668.668 0 00.506.17h26.306a.813.813 0 00.811-.746l.987-11.32a10.196 10.196 0 002.802 1.39c1.272.4 2.598.603 3.931.601zm-9.037 7.958a.76.76 0 01-.75.69l-23.604.063c-.199 0-.756.017-.756-.755l.008-1.833a.753.753 0 01.674-.745 2.8 2.8 0 001.813-1.242c.335-.488.39-1.633.386-1.842L4.397 7.65a2.755 2.755 0 00-.645-1.568 2.965 2.965 0 00-1.584-.856l-.198-.054a.743.743 0 01-.545-.723v-.317c0-.435-.004-1.162-.004-1.163a.75.75 0 01.22-.533.758.758 0 01.534-.222H15.58a.756.756 0 01.755.755v1.527a.752.752 0 01-.626.743 3.622 3.622 0 00-1.575.702 2.823 2.823 0 00-.8 1.458l-.008 35.294-.005 22.302 4.22.002a5.094 5.094 0 003.008-1.234 4.687 4.687 0 001.435-1.795l.033-.078c.22-.486.39-.994.506-1.515.08-.408 1.355-9.94 1.37-10.034a.754.754 0 01.748-.66l2.976.005a.764.764 0 01.713.513.75.75 0 01.037.308l-1.62 18.538zm2.142-11.635l-.078-.06.09-1.162.276.233a11.365 11.365 0 003.76 1.994c1.025.314 2.09.474 3.163.478 2.05-.03 4.06-.587 5.833-1.619 3.403-1.898 4.864-5.404 5.49-8.011.411-1.728.595-3.502.548-5.278v-.006l-.057-36.3v-.007c.003-.066.104-1.62 1.128-2.397a6.325 6.325 0 011.874-.937V3.17h-8.856v1.168c.692.2 1.343.517 1.927.938.887.673 1.083 1.934 1.121 2.307v.012c.044 11.651.094 37.993.084 39.104-.022 2.26-.685 4.092-1.968 5.444a6.308 6.308 0 01-4.658 2.095h-.038a6.98 6.98 0 01-4.346-1.819c-1.335-1.19-1.772-3.666-1.772-4.258l-.136-40.569v-.016a4.37 4.37 0 01.73-2.022 3.605 3.605 0 012.234-1.242V3.114h-12.42v1.125a4.13 4.13 0 012.025 1.026c.793.736.963 1.884.988 2.578h.004v.123l.003 40.717h-.932V7.97c-.005-.422-.085-1.465-.691-2.029a3.123 3.123 0 00-1.648-.79.754.754 0 01-.688-.753V2.93a.756.756 0 01.754-.755H35.42a.756.756 0 01.755.755v1.545a.752.752 0 01-.682.75c-.67.077-1.29.395-1.742.896-.296.449-.48.962-.536 1.497l.13 40.538c.004.626.458 2.668 1.46 3.563a6.092 6.092 0 003.73 1.576h.035a5.348 5.348 0 003.973-1.8c1.1-1.157 1.692-2.819 1.71-4.806.01-1.09-.04-27.385-.08-39.063v-.002c-.035-.268-.189-1.175-.753-1.601a5.477 5.477 0 00-1.732-.815.758.758 0 01-.564-.731V2.985a.756.756 0 01.752-.754h9.227a.755.755 0 01.752.754v1.49a.758.758 0 01-.564.732 5.452 5.452 0 00-1.68.815c-.602.455-.736 1.446-.76 1.664v.858c.029 13.502.075 36.172.073 36.3a21.298 21.298 0 01-.564 4.634c-.949 3.988-3.013 6.97-5.97 8.619a12.892 12.892 0 01-6.316 1.727c-1.165 0-2.323-.173-3.437-.514a11.924 11.924 0 01-3.749-1.9zM226.445 65.977a.816.816 0 00-.722-.806l-1.195-.138s-1.202-.114-1.202-.91L223.3 7.71c.022-.676.033-.838 2.478-1.432h.008a.82.82 0 00.599-.785V1.6a.873.873 0 00-.221-.608.821.821 0 00-.579-.242L210.459.75a.82.82 0 00-.8.65l-4.699 22.627c-1.222-5.82-4.718-22.448-4.757-22.63a.817.817 0 00-.797-.647h-12.858a.817.817 0 00-.58.242.873.873 0 00-.221.608v3.892a.82.82 0 00.6.785h.007c1.225.298 1.84.502 2.122.705.21.15.225.282.237.67v.057l.015 26.89-2.944-.01a.823.823 0 00-.789.594l-2.601 9.14c-.041.118-.392 1.05-1.128 1.325l-.01.004-.01.004c-.197.07-.404.101-.612.093a3.97 3.97 0 01-1.45-.314c0-2.74-.018-37.157-.018-37.723 0-.035 0-.069.002-.102.011-.377.023-.492.227-.638.279-.202.881-.401 2.079-.692h.007a.823.823 0 00.6-.785V1.602a.882.882 0 00-.221-.608.814.814 0 00-.579-.242l-15.02-.003a.814.814 0 00-.579.242.873.873 0 00-.221.608v3.942a.821.821 0 00.599.786h.008c1.687.317 2.042.986 2.055 1.375l.004 34.819a.909.909 0 01-.802.831l-1.27.095a.871.871 0 00-.287.073s.052-.766-.594-.927c0 0-2.457-.314-2.371-2.029l-.005-32.853c.022-.591.278-.791 1.076-1.224.062-.034.88-.412.88-.995V1.6a.873.873 0 00-.221-.608.821.821 0 00-.579-.242L150.643.747a.815.815 0 01-1.125 0L125.983.75a.81.81 0 01-1.118-.003h-5.616a.806.806 0 00-.765.591A26.459 26.459 0 00115.57.317 16.126 16.126 0 00112.754 0h-.05a12.01 12.01 0 00-3.952.772 9.247 9.247 0 00-2.756 1.831 7.544 7.544 0 00-2.35 4.81v.017l-.004 7.954c.008.726.089 1.45.242 2.159a9.32 9.32 0 00.863 2.27 9.608 9.608 0 001.575 2.032c.411.403.855.77 1.327 1.1l.048.033.012.008h.004l5.886 3.734.904.63.268.27.015.02c.06.08.113.166.159.256.065.276.102.559.111.843l-.007 3.514v.006c.001.713-.267 1.4-.75 1.924a2.197 2.197 0 01-1.629.645 2.04 2.04 0 01-1.438-.592 2.64 2.64 0 01-.644-1.979v-.002c-.006-.52.005-5.422.005-5.472a.821.821 0 00-.816-.813h-5.328a.816.816 0 00-.816.816l-.019 10.103a1.434 1.434 0 01-1.166-1.126c-.254-1.581-4.455-27.327-4.537-27.808a1.117 1.117 0 01.143-.926.96.96 0 01.715-.275l1.572.005a.813.813 0 00.815-.813l.008-4.38a.816.816 0 00-.816-.816H80.715a.816.816 0 00-.579.242.877.877 0 00-.221.608v3.892a.82.82 0 00.6.785s1.732.144 2.046.679c.14.213.2.468.17.721l-4.767 30.772c-.087.507-.21 1.008-.366 1.499a2.402 2.402 0 01-.73.983c.1-.74.16-1.486.178-2.234V28.061a.817.817 0 00-.816-.815h-6.168a.816.816 0 00-.817.817v10.948a3.352 3.352 0 01-.887 2.279 2.588 2.588 0 01-1.928.765 2.414 2.414 0 01-1.705-.702 3.12 3.12 0 01-.762-2.337v-.008c-.004-.464.011-29.688.011-29.688.029-.338.128-.666.292-.964a1.841 1.841 0 011.736-.919c2.507 0 3.095 1.714 3.19 4.294V17.4a.817.817 0 00.816.817h6.14a.822.822 0 00.817-.821V1.564a.841.841 0 00-.844-.815h-6.225a.875.875 0 00-.704.4h-.004A17.487 17.487 0 0064.685.045a9.517 9.517 0 00-.886-.04 13.363 13.363 0 00-5.25 1.19s-2.988 1.465-4.547 4.096a6.236 6.236 0 00-.783 3.45v32.266c.012 2.717.93 5.036 2.652 6.71 1.903 1.848 4.76 2.825 8.265 2.825h.386a13.19 13.19 0 007.547-2.288 12.462 12.462 0 003.59-3.912v1.735a1.07 1.07 0 001.058.979c.04 0 10.398-2.176 10.398-2.176a.81.81 0 00.457-.73V39.91a.813.813 0 00-.815-.815c-.008 0-1.522.036-1.579.032.121-.778 1.23-7.835 1.23-7.835h4.387l1.018 5.817s.12 1.013-.742 1.165c-.535.094-1.23.373-1.177.992l-.011.972v3.23a.81.81 0 00.806.811l.04-.002c3.724-.586 13.148-1.605 13.148-1.605a.567.567 0 00.305-.118c.105.07.226.11.351.12 0 0 4.041-.208 5.735-.269 0 0 .415-.065.419-.673l-.002-.161c.201.093.37.166.521.224.6.228 1.219.403 1.849.524.924.18 1.862.272 2.802.272.975.017 1.948-.092 2.895-.322a9.687 9.687 0 001.602-.57 10.175 10.175 0 003.344-2.582 8.727 8.727 0 002.017-4.979V27.35a10.784 10.784 0 00-.241-2.12 9.896 9.896 0 00-.868-2.323 8.952 8.952 0 00-1.454-1.987 14.336 14.336 0 00-1.777-1.464c-.003 0-.01-.006-5.792-3.602-1.406-.85-1.591-1.458-1.583-1.989l-.003-4.315a1.662 1.662 0 01.535-1.193 1.67 1.67 0 011.23-.444c2.21 0 2.716 1.528 2.794 3.822-.005.246-.009 3.002-.01 3.113a.817.817 0 00.816.817h5.513a.818.818 0 00.816-.815l-.011-8.607c.031.013 1.766.32 2.215.738.189.175.222.27.234.661l.061 27.586c-.157 1.318-2.073 1.462-2.073 1.462a.82.82 0 00-.679.8l-.007 4.12a.814.814 0 00.737.813l.865.1.242.013c4.565.25 8.995.681 13.635 1.31a.698.698 0 00.514-.202.873.873 0 00.27-.607v-4.332a.81.81 0 00-.697-.806s-2.24-.286-2.313-1.225l-.034-11.292 1.446-.003c.715-.025.913 1.665 1.062 2.37a.823.823 0 00.795.648l4.968.003a.817.817 0 00.817-.816V16.05a.817.817 0 00-.817-.817h-5.093a.82.82 0 00-.809.7l-.167 1.167s-.177.973-.756 1.037h-1.474l-.016-9.767h2.345c.29.018.577.07.855.156.211.089.407.21.582.358.172.165.319.355.435.564.07.163.114.335.132.512V13.7a.821.821 0 00.817.817h5.748a.817.817 0 00.818-.817V6.246c.034.015 1.452.385 1.482 1.169v.045l.031 30.727s-.014 1.208-.961 1.361l-1.183.165a.819.819 0 00-.705.8l-.009 3.98a.81.81 0 00.36.674s15.833 3.608 15.849 3.608a.378.378 0 00.181-.047.459.459 0 00.175.152l.046.018c.974.265 1.86.514 2.71.758a175.401 175.401 0 0129.819 11.857s.192.103.532-.098a.786.786 0 00.379-.69l.006-4.794a.812.812 0 00-.502-.753s-2.458-.735-2.458-2.263.018-16.914.027-25.459c1.772 8.155 6.083 27.915 6.13 28.137a1.9 1.9 0 00.296.71.881.881 0 00.664.23l1.476-.003c.203-.03.393-.12.546-.257a1.85 1.85 0 00.359-.644s4.198-20.053 5.912-28.25l-.023 35.994c-.013.39-.062.78-.146 1.16-.128.372-.785.554-.901.572-.073.01-.31.047-1.161.178a.819.819 0 00-.693.801l-.007 4.287a.816.816 0 00.816.816h16.277a.813.813 0 00.581-.242.803.803 0 00.236-.574s.001-.003-.034-4.394zM75.115 42.14a9.939 9.939 0 01-2.468 3.746 12.202 12.202 0 01-4.324 2.693 11.66 11.66 0 01-3.663.53s-.512.005-.668.005c-.852 0-1.703-.08-2.54-.241-1.64-.316-3.269-.975-4.053-1.64a8.383 8.383 0 01-2.317-2.949 9.48 9.48 0 01-.626-3.354V8.722a7.119 7.119 0 01.81-2.763 9.075 9.075 0 013.86-3.457 11.87 11.87 0 014.658-1.07c.26 0 .52.012.769.036 1.41.153 2.795.493 4.116 1.01.626.246 1.237.529 1.83.847v-.346a.756.756 0 01.755-.755h3.529a.756.756 0 01.755.753L75.53 16.03a.752.752 0 01-.754.757h-3.401a.755.755 0 01-.754-.755v-4.817c-.006-.125-.172-3.083-2.07-4.475a3.595 3.595 0 00-2.161-.733 4.075 4.075 0 00-2.424.827 4.154 4.154 0 00-1.41 3.34l-.021 29.615c.034.428.131.85.29 1.25a4.95 4.95 0 001 1.464c.384.359.834.638 1.326.823.352.11.719.166 1.088.166a6.344 6.344 0 001.853-.322 4.713 4.713 0 001.553-1.076c.378-.438.66-.95.826-1.503a6.579 6.579 0 00.23-1.65l-.023-9.508a.755.755 0 01.755-.756h3.43a.755.755 0 01.756.754v9.266a10.572 10.572 0 01-.504 3.443zm28.232-1.473a.756.756 0 01-.674.75s-10.58 1.137-10.607 1.137a.754.754 0 01-.753-.754v-1.552a.754.754 0 01.523-.716c.245-.087.477-.207.688-.358a2.54 2.54 0 00.564-.617 1.901 1.901 0 00.202-.893c-.02-.351-.058-.7-.113-1.048l-.121-.68-.375-2.151c-.27-1.54-.564-3.22-.685-3.922h-6.809l-.443 2.814-.053.34c-.403 2.555-.951 6.053-.957 6.095a1.155 1.155 0 00.297 1.029c.201.16.43.281.675.359.224.044.452.067.68.07a.757.757 0 01.757.755v1.56a.756.756 0 01-.607.74l-7.545 1.503a.754.754 0 01-.902-.74v-1.39a.751.751 0 01.288-.592A5.374 5.374 0 0078.87 40.6c.23-.625.4-1.271.507-1.93l4.647-30.256c.065-.364.078-.735.04-1.103a2.763 2.763 0 00-.395-1.058 2.1 2.1 0 00-.691-.64 3.981 3.981 0 00-1.033-.37.753.753 0 01-.617-.748l.012-1.57a.755.755 0 01.754-.747H98.98a.756.756 0 01.755.754v1.65a.756.756 0 01-.756.755c-.31-.001-.62.024-.926.074-.325.09-.629.24-.896.446a1.99 1.99 0 00-.532.604c-.135.28-.2.59-.19.9 0 0 4.587 28.509 4.622 28.736l.004.015c.06.253.143.5.247.737.106.21.241.405.4.579.178.17.38.315.599.428l.519.21a.826.826 0 01.521.717v1.885zm20.92-27.185a.755.755 0 01-.753.755h-2.78a.756.756 0 01-.754-.755v-1.94a6.843 6.843 0 00-.282-2.176 5.712 5.712 0 00-.752-1.33c-.745-1.093-2.33-1.602-3.166-1.602-.822.02-1.611.33-2.226.875a3.154 3.154 0 00-.707.904c-.16.354-.252.735-.271 1.123v4.57c.02.345.085.687.194 1.015.148.35.337.681.564.986.457.44.959.83 1.499 1.163l1.377.854 4.422 2.75c.539.373 1.044.792 1.51 1.253.475.492.88 1.047 1.206 1.649.324.622.57 1.281.734 1.963.128.595.198 1.202.209 1.81v6.704a7.526 7.526 0 01-1.661 4.117 8.196 8.196 0 01-6.77 2.992 12.087 12.087 0 01-4.135-.7 19.994 19.994 0 01-2.508-1.304l.02 1.218a.754.754 0 01-.754.754h-2.692a.76.76 0 01-.697-.466.753.753 0 01-.057-.289V28.154a.755.755 0 01.754-.754h2.625a.76.76 0 01.756.75l.027 4.427c.017.385.083.766.197 1.134.154.503.412.968.757 1.365.44.472.986.831 1.593 1.048.306.091.625.135.944.13a6.024 6.024 0 001.755-.276 3.917 3.917 0 001.36-1.078c.212-.255.369-.55.462-.868a7.329 7.329 0 00.216-1.77V28.71a5.911 5.911 0 00-.161-1.191 2.49 2.49 0 00-.356-.68l-.03-.042a3.049 3.049 0 00-.533-.553c-.331-.26-.676-.5-1.034-.722l-5.915-3.753a9.387 9.387 0 01-1.133-.94 8.033 8.033 0 01-1.32-1.696 7.743 7.743 0 01-.723-1.894 9.644 9.644 0 01-.208-1.855V7.466a6.163 6.163 0 011.869-3.841 7.888 7.888 0 012.34-1.576 10.59 10.59 0 013.422-.671c.865 0 1.727.095 2.571.285.896.193 1.764.499 2.584.91.706.366 1.383.789 2.022 1.263V2.95a.752.752 0 01.754-.755h2.881a.755.755 0 01.754.753v10.535zm24.639-1.148a.757.757 0 01-.755.755h-3.014a.758.758 0 01-.755-.755V9.892a3.29 3.29 0 00-.253-1.024 3.657 3.657 0 00-.806-1.066 3.607 3.607 0 00-1.067-.633 5.11 5.11 0 00-1.3-.23h-3.784c0 1.465.019 11.064.021 12.626h3.003a2.29 2.29 0 00.659-.161c.245-.132.466-.305.653-.513a3.74 3.74 0 00.545-.846c.099-.233.169-.477.21-.727a.763.763 0 01.748-.657h2.547a.757.757 0 01.755.755v8.796a.757.757 0 01-.755.755h-2.488a.76.76 0 01-.739-.605V26.344a5.768 5.768 0 00-.276-.87c-.153-.37-1.029-1.531-1.94-1.531l-2.894.005.041 12.785c.017.272.076.538.175.791.139.3.325.574.55.815.29.247.613.45.962.604.212.09.435.155.663.194a.76.76 0 01.659.748v1.625a.762.762 0 01-.836.751l-1.683-.185c-2.887-.317-3.407-.373-4.179-.425-1.769-.112-4.863-.402-6.111-.523l-.063-.006a.75.75 0 01-.682-.75V38.65a.756.756 0 01.633-.745c.307-.057.605-.154.886-.288.313-.165.594-.383.831-.645.187-.247.328-.526.418-.823a4.22 4.22 0 00.141-.886c0-.423-.07-27.454-.07-27.454a3.565 3.565 0 00-.17-.927 2.326 2.326 0 00-.476-.725 3.178 3.178 0 00-.84-.584 3.951 3.951 0 00-.838-.268.754.754 0 01-.619-.74l-.007-1.628a.738.738 0 01.22-.535.75.75 0 01.535-.22h20.789a.757.757 0 01.756.753v9.399zm15.155 34.508a.76.76 0 01-.466.162 5.399 5.399 0 01-.581-.121c-1.084-.27-11.889-2.729-11.997-2.754a.756.756 0 01-.595-.737v-1.677a.754.754 0 01.657-.748c.309-.046.608-.14.887-.28.325-.196.612-.45.846-.75.166-.27.288-.566.362-.875.065-.287.1-.58.106-.875V36.09c-.008-7.636-.028-27.87-.027-28.464V7.62a3.437 3.437 0 00-.179-.82 3.078 3.078 0 00-.432-.702l-.014-.019a3.555 3.555 0 00-.538-.465l-.611-.36a.852.852 0 01-.42-.675V2.973a.759.759 0 01.752-.755l10.931-.03a.75.75 0 01.534.22.762.762 0 01.222.533v1.711a.849.849 0 01-.424.676l-.481.288a4.15 4.15 0 00-.729.677c-.133.196-.235.41-.304.636a6.264 6.264 0 00-.192 1.016l.009 32.622c.024.336.074.668.149.996.288 1.227 2.256 2.122 2.262 2.123a.76.76 0 01.556.725l.01 1.838a.76.76 0 01-.293.594zm21.471 7.5c-.058-.023-6.916-2.638-10.147-3.73-2.99-1.01-7.233-2.3-8.053-2.55l-.026-.007a.75.75 0 01-.537-.723v-1.757a.753.753 0 01.7-.751h.015c.306-.028.608-.088.902-.178a1.77 1.77 0 00.678-.389 1.64 1.64 0 00.376-.65c.087-.328.141-.663.159-1V8.134a4.419 4.419 0 00-.159-1.072c-.1-.316-.26-.61-.47-.866a5.505 5.505 0 00-1.823-.934.76.76 0 01-.515-.743l-.041-1.6a.75.75 0 01.754-.727h12.602a.758.758 0 01.755.756v1.576a.743.743 0 01-.507.713c-1.666.504-2.051 1.276-2.176 1.53a2.249 2.249 0 00-.223.79l.006 28.824v10.193c.875.37 1.812.574 2.762.599.396.015.791-.046 1.165-.18l.031-.013c1.399-.522 2.068-2.301 2.146-2.52l2.238-7.909v-.01a.77.77 0 01.71-.474c.445 0 1.79.006 1.79.006a.75.75 0 01.725.556.757.757 0 01.017.325l-2.844 16.81a.788.788 0 01-1.01.578zm3.896-10.641c.046.579-.186 5.531-.2 5.777a.983.983 0 01-.362.69c-.203.161-.452.252-.71.26-.15 0-.332-.087-.164-.852.167-.764 1.165-5.852 1.165-5.852.029-.247.226-.602.271-.023zm35.436 25.876a.744.744 0 01-.536.222h-13.53a.757.757 0 01-.754-.754v-1.74a.762.762 0 01.645-.747 3.39 3.39 0 001.057-.359c.378-.194.684-.504.871-.886.225-.607.339-1.25.335-1.897l.029-44.132-1.193-.01-7.099 34.066c-.141.71-.329 1.366-.754 1.366-.489-.015-.636-.828-.725-1.311-.034-.168-6.725-31.134-7.368-34.108h-1.102l-.036 33.706c.016.344.077.684.181 1.012.144.375.34.728.583 1.047.236.26.509.482.81.662.294.18.601.338.918.474a.754.754 0 01.467.698v1.74a.755.755 0 01-.757.754.777.777 0 01-.318-.069l-4.932-2.293-4.046-1.797a.765.765 0 01-.455-.694v-1.979a.748.748 0 01.613-.74c.006 0 .014-.003.027-.006.342-.065.677-.159 1.002-.282.284-.11.548-.27.778-.47.223-.221.401-.484.524-.773.074-.213.111-.436.112-.661V47.17c-.02-34.507-.022-39.176-.021-39.191a2.826 2.826 0 00-.079-.761 2.609 2.609 0 00-.483-.927 3.219 3.219 0 00-.898-.658 4.056 4.056 0 00-.912-.287.756.756 0 01-.631-.732l-.024-1.66a.753.753 0 01.754-.768h10.415a.759.759 0 01.738.6c4.827 22.956 5.406 25.715 5.465 25.997.259.002.675.006.95.01l5.393-26.02a.757.757 0 01.738-.602h12.625a.758.758 0 01.755.755V4.58a.756.756 0 01-.596.738 5.628 5.628 0 00-.961.317 3.021 3.021 0 00-.816.536c-.23.23-.414.504-.54.806a3.087 3.087 0 00-.17.822l.03 56.42c.015.278.081.55.195.805.17.309.382.593.631.842.248.198.529.35.829.453.26.086.527.147.799.181a.755.755 0 01.672.745l.014 1.803c0 .199-.079.39-.219.531z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M206.191 67.944a174.48 174.48 0 00-37.992-16.297c-17.031-4.906-33.973-7.392-50.352-7.392-11.845 0-26.675.738-46.83 6.217-21.638 5.882-39.601 16.391-40.355 16.835a1.09 1.09 0 00-.11 1.81c.115.085.245.147.384.182.28.028.562-.011.824-.115.75-.443 18.476-10.81 39.827-16.615 19.907-5.41 34.556-6.14 46.26-6.14 16.177 0 32.916 2.46 49.749 7.307a171.958 171.958 0 0137.46 16.062 1.087 1.087 0 001.134-1.853l.001-.001zM88.11 10.11l-2.395 15.645h5.766l-2.611-15.65-.76.005zm1.534 14.512c-.206.004-1.893-.003-2.066-.003a.292.292 0 01-.282-.353c.043-.318 1.161-9.549 1.168-9.596.008-.047.034-.067.068-.067a.087.087 0 01.076.067c.01.037 1.265 9.465 1.289 9.603a.28.28 0 01-.253.35z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M101.01 38.056a3.478 3.478 0 01-.558-.817 5.4 5.4 0 01-.314-.952v-.006L95.774 9.514c0-.008-.156-.846-.208-1.23a6.117 6.117 0 01-.07-.92c-.011-.442.082-.88.27-1.28.19-.366.455-.686.779-.94a3.597 3.597 0 011.278-.645c.31-.073.628-.11.948-.108h.024V3.117H82.278l-.01 1.235c.404.096.794.243 1.16.438.413.233.765.558 1.03.952.279.442.462.937.539 1.455.05.465.034.935-.05 1.395l-4.642 30.226a11.284 11.284 0 01-.615 2.244c-.23.408-.492.799-.781 1.168-.27.31-.565.597-.88.859v1.076l7.174-1.429v-1.224a3.34 3.34 0 01-.734-.101c-.4-.114-.77-.313-1.084-.584a2.222 2.222 0 01-.55-.976 2.416 2.416 0 01-.027-.897l1.507-9.598a.485.485 0 01.176-.332c.1-.067.22-.101.34-.097h7.409c.136-.001.27.036.385.108a.537.537 0 01.242.362l1.28 7.318c.069.403.094.813.075 1.221-.031.375-.135.74-.307 1.073a3.36 3.36 0 01-.838.926 3.682 3.682 0 01-.826.448v1.214l10.156-1.092v-1.59a4.2 4.2 0 01-.531-.226 3.423 3.423 0 01-.866-.633zm-8.736-11.628a.757.757 0 01-.575.266H85.5a.754.754 0 01-.746-.87l2.453-16.01a.752.752 0 01.74-.642l1.073-.008a.754.754 0 01.75.63l2.673 16.021a.756.756 0 01-.169.613zM120.817 4.793c.006.059-.021.37-.192.459a.486.486 0 01-.515-.075l-.008-.004-.007-.006-.016-.012a19.315 19.315 0 00-2.619-1.73 11.35 11.35 0 00-2.382-.843 13.823 13.823 0 00-2.354-.264h-.028a9.505 9.505 0 00-3.068.605 7.122 7.122 0 00-2.067 1.407 5.266 5.266 0 00-1.553 3.195v7.858c.01.557.072 1.11.187 1.654.137.574.349 1.127.63 1.645.318.541.707 1.037 1.155 1.477.311.302.645.58 1 .831l5.884 3.733c.39.243.767.506 1.128.79.273.216.514.47.717.751l.026.037c.216.293.383.62.491.967.117.466.183.944.198 1.425v3.564a8.238 8.238 0 01-.25 2.026c-.131.45-.355.868-.657 1.227a4.933 4.933 0 01-1.705 1.333c-.681.22-1.39.338-2.105.349a4.074 4.074 0 01-1.243-.174 4.95 4.95 0 01-1.996-1.301 4.727 4.727 0 01-.97-1.733 5.417 5.417 0 01-.237-1.4l-.028-4.247H106l-.024 11.855h2.318l-.028-1.726a.58.58 0 01.312-.573.419.419 0 01.147-.025c.188.018.366.09.515.207h.002a23.033 23.033 0 002.82 1.512c1.219.43 2.503.646 3.795.636a7.278 7.278 0 006.068-2.676 6.616 6.616 0 001.426-3.542v-6.654a8.608 8.608 0 00-.186-1.608 7.551 7.551 0 00-.649-1.726 6.431 6.431 0 00-1.045-1.428c-.42-.414-.875-.792-1.359-1.128l-5.778-3.594c-.059-.038-1.435-.942-1.77-1.42a5.402 5.402 0 01-.68-1.216 4.779 4.779 0 01-.249-1.302V9.336a3.948 3.948 0 01.358-1.518c.23-.454.542-.86.922-1.198a4.486 4.486 0 012.865-1.128c.994 0 2.944.547 3.942 2.015l.016.023c.358.474.646.997.854 1.553.245.813.356 1.66.326 2.509v1.707h2.408V3.134h-2.511l.002 1.659zM24.038 56.636c-.005.031-.448 3.17-.595 3.916a8.66 8.66 0 01-.57 1.715l-.024.059a5.62 5.62 0 01-1.711 2.165 6.584 6.584 0 01-3.581 1.442l-4.649-.004c-.09 0-.538-.032-.538-.661l.015-57.871v-.012a3.673 3.673 0 011.102-2.13 4.259 4.259 0 011.906-.913v-1.19H2.36l.005 1.149c.799.166 1.53.57 2.095 1.16.513.612.82 1.37.877 2.167l.12 55.746c.003.06.056 1.494-.552 2.38a3.846 3.846 0 01-2.32 1.612l-.006 1.49 23.247-.062 1.584-18.17-2.61-.005-.762 6.017zM127.548 4.415c.315.072.621.175.915.308.416.2.796.466 1.124.789.294.305.525.663.682 1.056.132.393.207.804.224 1.218l.072 27.483c-.016.386-.076.77-.179 1.142a3.517 3.517 0 01-.608 1.172c-.32.357-.703.654-1.128.876-.317.154-.651.27-.996.343v1.401c.749.071 4.124.392 5.978.51.799.053 1.334.112 4.304.438l1.393.153V40.04a3.903 3.903 0 01-.756-.234 4.721 4.721 0 01-1.256-.806 4.066 4.066 0 01-.752-1.116 3.423 3.423 0 01-.244-1.124l-.044-13.07a.786.786 0 01.138-.538.701.701 0 01.533-.145c.091 0 .161.006.184.007l2.992-.005a2.795 2.795 0 011.982.915c.339.347.614.75.814 1.193.121.296.22.602.296.913h2.157v-8.428h-2.206a4.138 4.138 0 01-.254.821 4.57 4.57 0 01-.726 1.116 2.694 2.694 0 01-1.937.967h-3.437a.694.694 0 01-.418-.107.518.518 0 01-.139-.43l-.022-13.395a.567.567 0 01.128-.443.628.628 0 01.422-.129H140.961c.541.02 1.076.113 1.592.277a4.28 4.28 0 012.437 2.208c.191.436.304.903.333 1.378v2.286h2.642V3.123h-20.421l.004 1.292zM74.678 29.616h-3.062l.024 9.324a7.66 7.66 0 01-.269 1.916c-.21.7-.57 1.345-1.054 1.893a5.71 5.71 0 01-1.894 1.302c-.708.241-1.45.37-2.198.384-.464 0-.925-.073-1.368-.214a4.975 4.975 0 01-1.685-1.04 5.904 5.904 0 01-1.218-1.785 5.111 5.111 0 01-.358-1.575s.053-28.151.032-29.54c-.028-1.79.512-3.045 1.752-4.068a5.19 5.19 0 013.12-1.106 4.332 4.332 0 012.606.875c2.304 1.693 2.452 5.166 2.453 5.205v4.663h3.032l-.03-12.685H71.44v.806a.446.446 0 01-.241.483 1.024 1.024 0 01-.812-.12c-.663-.373-1.351-.7-2.059-.98a15.264 15.264 0 00-3.864-.952 7.275 7.275 0 00-.676-.031c-1.47.04-2.918.373-4.258.979a8.184 8.184 0 00-3.434 3.048 6.188 6.188 0 00-.701 2.354v32.18a8.602 8.602 0 00.556 2.999 7.452 7.452 0 002.055 2.587c.773.655 2.417 1.202 3.623 1.432.781.15 1.575.225 2.37.225l.689-.005c1.13.01 2.256-.153 3.338-.482a11.454 11.454 0 003.986-2.494 8.898 8.898 0 002.216-3.358 9.754 9.754 0 00.452-3.107v-9.113zM184.81 44.744l-.007.023c-.142.4-.935 2.43-2.697 3.096a3.96 3.96 0 01-1.545.258 8.768 8.768 0 01-3.421-.793l-.287-.124v-.624c0-.378-.027-38.587-.004-39.037.016-.41.124-.81.316-1.172.215-.419.507-.793.861-1.104a5.018 5.018 0 011.735-.886V3.134h-12.139l-.046 1.283c.47.168 1.651.63 2.113 1.175.292.358.514.768.653 1.208.122.435.188.883.197 1.335v34.48a5.702 5.702 0 01-.196 1.258 2.588 2.588 0 01-.589 1.025c-.303.295-.67.515-1.073.644-.317.1-.643.169-.973.206v1.45c.797.242 4.989 1.517 7.978 2.527 2.952 1 8.803 3.218 9.97 3.663l2.771-16.373-1.414-.006-2.203 7.735zM162.622 44.191a5.83 5.83 0 01-1.317-1.09 4.554 4.554 0 01-.678-1.261 4.711 4.711 0 01-.192-1.282l-.006-32.655v-.008c.04-.416.117-.828.229-1.23.099-.332.249-.646.447-.93.275-.334.592-.632.943-.886.162-.117.332-.221.51-.313v-1.41l-10.561.03v1.308c.22.113.433.242.635.385.271.187.517.406.734.653l.008.01c.236.287.429.606.573.948.128.354.209.723.242 1.097v.01l.032 30.619c-.005.37-.05.737-.133 1.097a3.85 3.85 0 01-.529 1.222 4.1 4.1 0 01-1.145 1.007c-.33.171-.684.292-1.05.359v1.37c1.149.259 10.611 2.429 12.046 2.77l-.007-1.464a4.05 4.05 0 01-.781-.356z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M223.289 67.203a3.557 3.557 0 01-1.178-.67 4.487 4.487 0 01-.828-1.12 3.166 3.166 0 01-.279-1.188l-.029-56.435c.02-.39.098-.774.231-1.142.173-.43.432-.82.76-1.148.321-.3.69-.545 1.091-.725a6.484 6.484 0 011-.342v-1.32h-12.288l-5.417 26.135v.007l-.002.007a1.18 1.18 0 01-.175.334.563.563 0 01-.365.14h-.007l-1.513-.016h-.009a.696.696 0 01-.43-.206 1.307 1.307 0 01-.223-.494l-5.446-25.894h-10.077l.019 1.323a4.84 4.84 0 011.004.334c.451.219.857.518 1.2.882.321.383.556.83.69 1.311.086.344.123.698.108 1.052l.024 41.58c.003.34-.055.676-.171.995-.171.425-.429.81-.757 1.13a3.56 3.56 0 01-1.081.663c-.341.128-.691.23-1.048.304v1.706c.448.191 2.023.873 3.954 1.758a666.43 666.43 0 014.677 2.171v-1.33a8.168 8.168 0 01-.941-.494c-.4-.24-.759-.54-1.064-.892a5.083 5.083 0 01-.725-1.32 4.852 4.852 0 01-.23-1.292l.037-34.156a.567.567 0 01.135-.4.524.524 0 01.343-.109c.032 0 .057 0 .07.004l1.899-.006a.43.43 0 01.277.08.653.653 0 01.173.373l7.246 33.419 6.98-33.402a.788.788 0 01.187-.388.523.523 0 01.34-.094h.058l1.809.014.059-.002a.546.546 0 01.362.12.628.628 0 01.18.465l-.03 44.494v.02c-.007.5-.065 1.73-.464 2.34a3.63 3.63 0 01-2.443 1.681v1.396h13.162l-.012-1.45a4.933 4.933 0 01-.843-.203zM146.824 61.008a187.505 187.505 0 01-2.449-1.735c-.815-.576-1.459-1.03-1.457-1.916l.002-2.318a1.15 1.15 0 01.385-.89 1.57 1.57 0 011.123-.37 2.272 2.272 0 011.506.946c.33.474.504 1.04.496 1.618v.545a.466.466 0 00.413.459c.452.043.903.087 1.354.132a.376.376 0 00.422-.382v-4.593a.484.484 0 00-.41-.467c-.468-.065-.936-.128-1.404-.19a.373.373 0 00-.297.087.379.379 0 00-.126.29v.34a6.857 6.857 0 00-3.441-1.516 3.917 3.917 0 00-2.858.842 2.844 2.844 0 00-.929 2.227c0 .028-.026 2.81-.005 3.736a4.253 4.253 0 001.685 3.457l.065.057c.019.018 1.968 1.387 2.808 1.968.912.633 1.011.993 1.01 1.61v1.782a1.995 1.995 0 01-.5 1.477 1.73 1.73 0 01-1.258.443h-.047a1.805 1.805 0 01-1.654-1.859l.004-3.184a.462.462 0 00-.431-.45c-.427-.019-.855-.037-1.282-.054h-.017c-.102 0-.2.04-.273.11a.448.448 0 00-.132.316l-.01 7.265a.435.435 0 00.419.443h1.298a.424.424 0 00.303-.112.441.441 0 00.115-.322v-.526l.037.033a4.94 4.94 0 001.128.855 5.733 5.733 0 002.04.36c3.186-.014 4.174-2.593 4.173-3.53v-3.546a5.034 5.034 0 00-.102-.899 4.277 4.277 0 00-1.704-2.54zM137.877 63.918l-.541-.017h-.015a.647.647 0 00-.558.414l-.007.026c-.1.41-.443 1.8-.648 2.488l-.012.043c-.231.775-.519 1.74-1.663 1.74h-.02c-1.861-.023-2.427-.027-2.605-.022l.009-6.527 1.412.042c.722.024.967 1.112.97 1.123.052.282.211.448.438.454h.018l1.238.037h.008a.382.382 0 00.252-.115.424.424 0 00.132-.295l.007-4.604a.471.471 0 00-.387-.431l-1.257-.064c-.221-.008-.389.144-.443.424 0 .01-.245 1.048-.943 1.048h-.027l-1.416-.054.009-6.617c.773.044 1.394.08 1.73.104a1.732 1.732 0 011.692 1.654v1.244a.46.46 0 00.42.473l1.498.091a.4.4 0 00.265-.112.387.387 0 00.129-.277l.006-4.929a.476.476 0 00-.403-.474 225.6 225.6 0 00-10.219-.663.368.368 0 00-.258.103.428.428 0 00-.134.307v.916a.5.5 0 00.343.454.748.748 0 01.29.098l.112.059a1.303 1.303 0 01.701 1.186l-.016 15.028v.014a1.354 1.354 0 01-1.063 1.07.513.513 0 00-.379.496v.939a.405.405 0 00.389.424c3.403.002 6.806.004 10.209.009a.397.397 0 00.282-.129.453.453 0 00.123-.308c.223-2.154.447-4.302.67-6.442a.37.37 0 00-.09-.291.369.369 0 00-.248-.137zM125.183 50.056a229.32 229.32 0 00-3.836-.099h-.006a.565.565 0 00-.494.382c-1.027 2.831-2.11 5.834-3.505 9.718-1.18-3.644-2.216-6.825-3.161-9.723a.578.578 0 00-.504-.378h-.006c-1.071.019-2.148.044-3.201.077a.445.445 0 00-.388.444v.91a.467.467 0 00.347.435.7.7 0 01.288.08c.03.015.066.032.113.052a1.204 1.204 0 01.699 1.145l.008 15.163a1.37 1.37 0 01-1.062 1.088.513.513 0 00-.378.5v.942c0 .117.045.23.127.313a.37.37 0 00.262.112h5.18a.412.412 0 00.389-.428v-.947a.512.512 0 00-.378-.5 11.284 11.284 0 00-.56-.088 5.622 5.622 0 01-.763-.139.743.743 0 01-.469-.613l-.007-10.072a.132.132 0 01.121-.14h.032a.122.122 0 01.111.089c.85 2.6 1.7 5.204 2.549 7.814a.25.25 0 00.479-.006c.937-2.609 1.874-5.215 2.813-7.818a.122.122 0 01.041-.06.123.123 0 01.068-.026h.068a.13.13 0 01.12.14l-.005 9.83a1.368 1.368 0 01-1.062 1.086.512.512 0 00-.379.5v.948a.408.408 0 00.389.427h5.942a.374.374 0 00.262-.111.445.445 0 00.126-.313v-.941a.51.51 0 00-.378-.5 1.372 1.372 0 01-1.061-1.086v-.017l.011-15.132a1.2 1.2 0 01.698-1.142c.048-.02.083-.037.113-.051a.698.698 0 01.288-.078.466.466 0 00.348-.434v-.917a.442.442 0 00-.389-.436zM109.265 69.353a1.345 1.345 0 01-.843-1.099c-.057-.4-1.675-11.355-2.256-15.238a1.015 1.015 0 01.773-1.025c.136-.034.276-.05.415-.05a.452.452 0 00.287-.136.496.496 0 00.129-.333v-.883a.454.454 0 00-.136-.328.384.384 0 00-.285-.109c-2.727.124-5.489.298-8.21.52a.472.472 0 00-.412.47l-.004.817a.41.41 0 00.342.416c.126.019.25.051.37.098.506.24.703.708.603 1.43-.486 3.475-1.849 13.094-1.974 13.972-.172 1.214-.653 1.56-.886 1.726l-.044.031a.367.367 0 00-.157.326v.739a.581.581 0 00.286.49c.059.029.123.045.189.047l3.563-.004a.361.361 0 00.337-.394s.003-.648 0-.843a.572.572 0 00-.528-.57.813.813 0 01-.607-.862l.493-3.394c1.075-.025 2.149-.047 3.224-.066.062.38.517 3.174.569 3.581a.82.82 0 01-.679.846.398.398 0 00-.295.396v.81c0 .178.208.485.42.485l5.221-.002a.39.39 0 00.381-.41v-.999a.541.541 0 00-.286-.455zm-8.288-6.45c.379-2.714.759-5.439 1.138-8.173l.282-.018c.422 2.694.843 5.4 1.264 8.117-.894.023-1.789.047-2.684.074zM97.258 65.214v-1.592a.53.53 0 00-.173-.38.645.645 0 00-.475-.19c-1.576.06-3.159.128-4.704.202a.598.598 0 00-.556.6v1.012a.564.564 0 00.171.409c.1.096.233.15.371.15h.02l.895-.032a.746.746 0 01.672.734l.002.016.003.787c0 1.45-.993 1.985-1.846 2.001h-.023a1.406 1.406 0 01-.986-.428 1.674 1.674 0 01-.516-1.113l-.01-11.457c0-.444 0-.622-.012-.696h.01c0-.987 1.004-1.518 1.517-1.57a1.784 1.784 0 011.5.644c.347.444.524.998.497 1.562v.562a.412.412 0 00.13.307.379.379 0 00.292.101l1.357-.1a.465.465 0 00.414-.466l-.006-4.854a.416.416 0 00-.132-.31.361.361 0 00-.291-.094c-.47.046-.939.094-1.408.143a.484.484 0 00-.412.475v.369a5.43 5.43 0 00-3.457-.725 5.174 5.174 0 00-2.306.986 3.461 3.461 0 00-1.455 2.791v12.918a3.27 3.27 0 001.231 2.68 4.33 4.33 0 002.66.85h.002c2.035 0 2.612-.42 2.993-.697l.084-.06a.615.615 0 00.155.302.54.54 0 00.395.185h1.407a.576.576 0 00.559-.59l-.005-3.817a1 1 0 01.531-.915c.168-.121.357-.21.558-.26a.478.478 0 00.347-.44zM195.986 66.725l-32.513.048h-.065l-.037.055a6.3 6.3 0 11-.096-7.166l.038.052h.063c.649.003 4.374.047 4.432.047h.029a2.359 2.359 0 002.26-2.35 2.228 2.228 0 00-.658-1.618 2.342 2.342 0 00-1.588-.7h-.027a2.227 2.227 0 00-1.887.894c-.251.398-.297.973.06 1.25a.827.827 0 001.151-.145.96.96 0 01.623-.403.73.73 0 01.758.73.764.764 0 01-.71.724l-3.414-.052a8.16 8.16 0 10.113 10.293l31.124-.037h.05a.717.717 0 01.685.7.759.759 0 01-.735.726.833.833 0 01-.527-.282 1.316 1.316 0 00-.815-.35.689.689 0 00-.469.175l-.004.004-.003.003c-.337.35-.277.86.155 1.334a2.59 2.59 0 001.654.72h.014a2.293 2.293 0 002.178-1.433c.116-.287.173-.594.168-.903.018-1.238-1.085-2.28-2.007-2.316z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M158.173 61.495a1.726 1.726 0 00-1.703 1.729 1.728 1.728 0 001.703 1.729 1.705 1.705 0 001.504-.9l27.441-.048a.806.806 0 100-1.612l-27.416.048a1.72 1.72 0 00-1.529-.946zM76.697 55.16a8.078 8.078 0 00-6.232 2.933l-2.78.052a.766.766 0 01-.707-.725.733.733 0 01.76-.73.956.956 0 01.621.404.804.804 0 00.645.314.83.83 0 00.508-.172c.355-.275.31-.85.06-1.249a2.233 2.233 0 00-1.888-.894h-.028c-.6.022-1.168.272-1.588.7a2.23 2.23 0 00-.659 1.618 2.36 2.36 0 002.262 2.35h.032c.058 0 3.14-.044 3.788-.047h.062l.037-.052a6.304 6.304 0 11-.094 7.166l-.037-.055h-.066l-31.54-.048c-.927.036-2.03 1.078-2.015 2.32a2.297 2.297 0 002.347 2.334h.014a2.579 2.579 0 001.651-.721c.435-.473.495-.984.158-1.334l-.003-.003-.004-.004a.687.687 0 00-.47-.174c-.303.018-.59.141-.812.349a.83.83 0 01-.532.282.758.758 0 01-.732-.725.718.718 0 01.685-.701c.019 0 28.75.04 30.206.04a8.051 8.051 0 006.345 3.084 8.155 8.155 0 100-16.31l.006-.003z",
                    fill: "#fff",
                  },
                }),
                n("path", {
                  attrs: {
                    d: "M75.177 64.052a1.703 1.703 0 001.501.9 1.73 1.73 0 10-1.53-2.51l-26.554-.049a.806.806 0 000 1.612l26.583.047z",
                    fill: "#fff",
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      component.options.__file = "static/svg/lcf.svg";
      var l = component.exports,
        f = Object(c.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                { attrs: { fill: "none", viewBox: "0 0 358 157" } },
                t.$listeners
              ),
              [
                n("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M173.099 23.337V.68c0-.453-.453-.68-.68-.68H69.33C64.8 0 58.682 2.266 55.056 4.985c-3.625 2.718-8.836 8.61-8.836 16.992 0 8.383 4.985 14.727 4.985 14.727 2.492 3.172 9.063 9.97 9.063 9.97.226.226.226.452.226.679 0 .453-.453.906-.906.906H.68c-.453 0-.68.453-.68.68v24.696c0 .453.453.68.68.68h70.916c9.742 0 15.18-5.211 16.766-6.797 1.586-1.586 6.344-7.024 6.344-16.313 0-9.29-4.305-14.048-5.89-16.087-1.587-2.039-7.93-8.61-9.29-9.969-.227-.226-.227-.226-.227-.453s.227-.68.453-.68h33.759c.453 0 .68.454.68.68v48.939c0 .453.453.906.906.906h24.923c.453 0 .68-.453.68-.68V24.924c0-.453.453-.68.679-.68h31.04c.453 0 .68-.453.68-.906zm-60.041 58.228H85.417c-.227 0-.227.227-.227.227l-5.664 19.258c0 .226 0 .227-.227.227-.226 0-.226-.227-.226-.227l-5.891-19.258c0-.227-.227-.227-.227-.227H42.368s-.226 0-.226.227l-5.438 19.258c0 .226-.226.227-.226.227-.227 0-.227-.001-.227-.227l-5.664-19.258c0-.227 0-.227-.227-.227H.906a.487.487 0 00-.453.453v.227l22.884 73.635c0 .226.226.453.453.453h24.47c.226 0 .226-.227.226-.453l8.61-27.415c0-.227.226-.227.226-.227.227 0 .227.227.227.227l8.383 27.641c0 .227.226.227.226.227h24.696c.227 0 .227-.227.454-.453 0 0 22.43-73.635 22.43-73.862-.453-.227-.68-.453-.68-.453zm224.077 70.463v.453h1.36v3.852h.453v-3.852h1.586v-.453h-3.399zm3.852 0v4.305h.453v-3.399l1.133 3.399h.68l1.132-3.399v3.399h.454v-4.305h-.68l-1.133 3.398-1.359-3.398h-.68z",
                  },
                }),
                n("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-rule": "evenodd",
                    d: "M241.523 112.152H225.21s-.453-.227-.453-.68v-8.156c0-.454.453-.68.453-.68h14.954c1.812 0 5.211.906 5.211 4.984 0 4.079-3.852 4.532-3.852 4.532zm114.871-30.587h-45.088c-4.531 0-10.648 2.266-14.274 4.984-3.625 2.72-8.836 8.61-8.836 16.993s4.985 14.727 4.985 14.727c2.492 3.172 9.063 9.969 9.063 9.969.226.227.226.453.226.68 0 .453-.453.906-.906.906H262.82c-3.625 0-4.758-1.812-4.758-2.039 0-.453.454-.68.454-.68 1.812-.906 4.984-3.398 4.984-3.398 7.25-5.664 8.157-13.368 8.157-17.446 0-4.078-.68-11.555-7.93-17.899-7.477-6.344-16.766-6.57-16.766-6.57h-51.205c-.453 0-.906.453-.906.68v72.955c0 .453.453.679.679.679h27.868c.454 0 .68-.453.68-.679v-19.939c0-.679.453 0 .453 0l15.18 15.181c5.438 5.437 14.274 5.664 14.274 5.664h59.361c9.743 0 15.181-5.211 16.767-6.797 1.586-1.586 6.343-7.024 6.343-16.313 0-9.29-4.304-14.048-5.89-16.087-1.586-2.039-7.93-8.609-9.29-9.969-.226-.226-.226-.226-.226-.453 0-.226.226-.68.453-.68h34.438c.454 0 .68-.453.68-.679V82.698c.68-.68.227-1.133-.226-1.133zm-204.139 44.408H140.7c-.454 0-.68-.454-.68-.907 0-.226 6.117-18.805 6.117-18.805l.227-.68.226.68 5.891 18.805c.227.453 0 .907-.226.907zm14.5-43.728c0-.454-.453-.68-.906-.68h-40.103c-.453 0-.68.227-.906.68l-22.204 73.182c0 .453.226.679.68.679h26.508a.486.486 0 00.453-.453l3.172-9.969c0-.227.227-.453.68-.453h24.47c.226 0 .453.226.679.453l2.946 9.969c0 .227.226.453.453.453h26.055c.453 0 .68-.226.68-.679l-22.657-73.182zm133.676-51.658h-16.313s-.453-.227-.453-.68V21.75c0-.453.453-.68.453-.68h14.954c1.812 0 5.211.907 5.211 4.985 0 3.852-3.852 4.532-3.852 4.532zm57.095 17.672h-35.344c-3.625 0-4.758-1.812-4.758-2.039 0-.453.453-.68.453-.68 1.812-.906 4.984-3.398 4.984-3.398 7.251-5.665 8.157-13.368 8.157-17.446 0-4.078-.68-11.555-7.93-17.9-7.477-6.343-16.766-6.57-16.766-6.57h-51.431c-.454 0-.68.454-.68.68v72.956c0 .453.453.68.68.68h27.868c.453 0 .679-.454.679-.68V53.923c0-.68.453 0 .453 0l15.181 15.18c5.437 5.438 14.273 5.665 14.273 5.665h43.728c.453 0 .68-.453.68-.68V49.392c.453-.906.227-1.133-.227-1.133zm-145.457-3.851h-10.875c-.454 0-.68-.453-.68-.907 0-.226 5.891-18.805 5.891-18.805l.226-.68.227.68 5.891 18.805c-.227.454-.454.68-.68.907zM225.89 0h-40.103c-.453 0-.68.227-.906.68l-22.204 73.182c0 .453.226.68.68.68h26.508a.487.487 0 00.453-.454l3.172-9.969c0-.227.227-.453.68-.453h24.469c.227 0 .454.227.68.453l3.172 9.97c0 .226.227.452.453.452H249c.453 0 .679-.226.679-.68 0-.226-22.656-73.408-22.656-73.408-.454-.226-.907-.453-1.133-.453z",
                    "clip-rule": "evenodd",
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      f.options.__file = "static/svg/starwars++.svg";
      var d = f.exports,
        h = Object(c.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    version: "1.1",
                    id: "rp_svg__Calque_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    x: "0",
                    y: "0",
                    viewBox: "0 0 35.33 53",
                    "xml:space": "preserve",
                  },
                },
                t.$listeners
              ),
              [
                n("style", { tag: "component" }, [
                  t._v(".rp_svg__st0{fill:#fff}.rp_svg__st1{fill:#231f20}"),
                ]),
                n("path", {
                  staticClass: "rp_svg__st0",
                  attrs: { d: "M35.47 0H.13v53h35.34V0z" },
                }),
                n("path", {
                  staticClass: "rp_svg__st1",
                  attrs: { d: "M34.95.57v51.86H.65V.57h34.3" },
                }),
                n("path", {
                  staticClass: "rp_svg__st0",
                  attrs: {
                    d: "M2.37 2.41h30.61v8.6H2.37zM2.36 12.89h30.62v31.62H2.36zM2.37 50.56v-4.19h6.14v.98H4.84v.6h3.11v.98H4.84v.65h3.82v.98zM13.88 47.59c-.04-.14-.18-.23-.36-.28-.18-.05-.39-.08-.64-.08-.54 0-.79.09-.79.25 0 .62 4.34.23 4.34 1.76 0 .97-1.46 1.45-3.53 1.45-1.99 0-3.29-.65-3.34-1.41h2.36c.05.15.2.26.41.33.2.07.46.11.7.11.62 0 1.03-.11 1.03-.31 0-.64-4.34-.2-4.34-1.8 0-.89 1.38-1.34 3.27-1.34 2.09 0 3.05.59 3.23 1.33h-2.34zM20.13 48.19h.97c.76 0 1.17-.11 1.17-.4 0-.3-.42-.44-.99-.44h-1.15v.84zm0 .91v1.46h-2.47v-4.2h3.56c2.51 0 3.34.38 3.34 1.2 0 .49-.39.89-1.27 1.03.79.16 1.28.26 1.28 1.11 0 .55-.03.74.26.74v.13h-2.5c-.06-.09-.12-.36-.12-.73 0-.55-.17-.73-1.32-.73h-.76zM28.55 47.35v.7h1.03c.49 0 .85-.13.85-.37 0-.33-.49-.34-1.01-.34h-.87zm0 1.46v.77h1.08c.61 0 1.07-.07 1.07-.38 0-.37-.57-.39-1.36-.39h-.79zm-2.47 1.75v-4.2h3.6c1.7 0 3.05.23 3.05 1.06 0 .43-.5.75-.98.91.81.12 1.25.52 1.25.97 0 .94-1.28 1.27-3.25 1.27h-3.67z",
                  },
                }),
                n("g", [
                  n("path", {
                    staticClass: "rp_svg__st1",
                    attrs: {
                      d: "M18.81 32.31c-.51-1.89-1.53-3-2.97-3.38.9-1.05 1.41-2.68.72-5.23-.97-3.57-3.42-5.3-6.41-4.5L3.37 21l-.14.04 5.62 20.79 4.54-1.21s-1.84-6.81-2.16-8.01l.22-.06c.69-.18 1.2-.18 1.54.02.6.34.88 1.38 1.2 2.59l.25.96c.3 1.16.61 2.35 1.39 3.37l.3.4 5.19-1.38-.7-.89c-.35-.46-1.22-3.11-1.81-5.31zm-7.43-3.72s-.58.16-1.16.31c-.34-1.25-1.12-4.13-1.46-5.39.57-.15 1.16-.31 1.16-.31.55-.14 1.47-.39 2.14 2.1.13.49.72 2.92-.68 3.29zM24.49 15.73l-6.11 1.63-.73.19 5.62 20.79 4.64-1.23s-1.81-6.68-2.13-7.87c.78-.21 1.99-.53 1.99-.53 3.62-.97 5-3.77 3.88-7.9-1.45-5.38-4.69-5.73-7.16-5.08zm1.9 9.23s-.89.24-1.65.44c-.33-1.23-1.13-4.16-1.45-5.39.67-.18 1.41-.37 1.41-.37.8-.21 1.71-.21 2.44 2.46.33 1.28-.03 2.67-.75 2.86z",
                    },
                  }),
                ]),
                n("g", [
                  n("path", {
                    staticClass: "rp_svg__st1",
                    attrs: {
                      d: "M3.83 9.16h-.61V4.27h1.13c.21 0 .38.11.5.32.12.22.18.53.18.95 0 .31-.04.58-.12.79-.08.23-.22.36-.42.42v.01c.04.01.08.02.14.04.06.02.12.06.18.12s.11.16.15.28c.04.13.06.3.06.52v.32c0 .14 0 .28.01.43a4.893 4.893 0 00.05.67h-.6c-.04-.15-.06-.3-.06-.47v-.48-.41c0-.13-.02-.24-.04-.34-.03-.1-.07-.18-.13-.23s-.14-.08-.26-.08h-.16v2.03zm0-2.78h.27c.06 0 .11-.02.15-.07s.07-.1.1-.17.04-.14.05-.23c.01-.09.01-.17.01-.24 0-.23-.03-.4-.08-.5-.05-.1-.13-.15-.23-.15h-.27v1.36zM5.26 9.16l.81-4.88h.8l.79 4.88h-.64l-.16-1.09h-.83l-.17 1.09h-.6zm1.18-3.95l-.29 2.11h.58l-.29-2.11zM9.45 4.27v.81h-.68v4.07h-.61V5.08h-.68v-.81h1.97zM9.73 9.16V4.27h.61v4.88h-.61zM10.86 9.16V4.27h.82l.78 3.38h.01V4.27h.57v4.88h-.8l-.79-3.57h-.01v3.57h-.58zM14.88 5.77c0-.11 0-.22-.01-.32s-.02-.19-.05-.27a.501.501 0 00-.11-.19.249.249 0 00-.19-.07c-.09 0-.17.05-.22.15-.05.1-.09.23-.11.4-.02.17-.04.36-.04.58-.01.22-.01.45-.01.68 0 .38.01.69.02.93.01.23.04.42.07.55.03.13.08.21.13.26.06.05.13.07.21.07.05 0 .1-.01.16-.03.05-.02.1-.04.15-.07V7.35h-.33V6.6h.94v2.47c-.04.01-.09.03-.16.05-.07.02-.14.04-.22.05-.08.02-.16.03-.23.04-.08.01-.15.02-.21.02-.26 0-.46-.05-.61-.14a.86.86 0 01-.35-.45c-.08-.21-.13-.47-.15-.79-.02-.32-.03-.72-.03-1.18 0-.31.01-.61.02-.91.01-.3.05-.56.12-.79.07-.23.17-.42.31-.56.14-.14.33-.22.58-.22.15 0 .28.03.4.11.12.07.22.17.3.3.08.13.14.3.18.49.04.2.05.42.05.68h-.61zM16.92 4.27h1.1c.14 0 .26.03.36.1.1.07.18.17.24.29.06.13.11.28.14.46.03.18.04.38.04.6 0 .14-.01.29-.03.46-.02.17-.05.32-.11.47-.06.14-.14.26-.25.36-.11.1-.25.15-.43.15h-.45v1.99h-.61V4.27zm.61 2.15h.34c.05 0 .09-.02.13-.06s.07-.09.1-.15.05-.13.06-.21c.01-.08.02-.16.02-.24 0-.1-.01-.19-.01-.28-.01-.09-.03-.17-.05-.24a.515.515 0 00-.12-.16.235.235 0 00-.17-.06h-.31v1.4zM19.16 9.16V4.27h1.59v.75h-.98v1.2h.91v.75h-.91V8.4h1.02v.75h-1.63zM21.19 9.16V4.27h.82l.78 3.38h.01V4.27h.57v4.88h-.8l-.8-3.57h-.01v3.57h-.57zM23.89 4.27h1.02c.2 0 .36.05.49.16.12.11.22.27.29.47.07.21.12.46.14.76.02.3.04.64.04 1.02v.44c0 .17-.01.35-.02.53-.01.19-.04.37-.08.55-.03.18-.09.34-.16.48-.07.14-.17.25-.28.34-.12.09-.26.13-.43.13h-.99V4.27zm.61 4.14h.3c.09 0 .17-.03.22-.09.06-.06.1-.16.13-.29.03-.14.05-.31.07-.53.01-.21.02-.47.02-.78 0-.23 0-.44-.01-.64 0-.2-.02-.38-.05-.54-.03-.15-.07-.28-.13-.37-.05-.1-.13-.15-.23-.15h-.32v3.39zM26.35 9.16V4.27h.61v4.88h-.61zM27.48 9.16V4.27h.82l.78 3.38h.01V4.27h.57v4.88h-.8l-.8-3.57h-.01v3.57h-.57zM31.5 5.77c0-.11 0-.22-.01-.32s-.02-.19-.05-.27a.501.501 0 00-.11-.19.249.249 0 00-.19-.07c-.09 0-.17.05-.22.15-.05.1-.09.23-.11.4-.02.17-.04.36-.04.58 0 .22-.01.45-.01.68 0 .38.01.69.02.93.01.23.04.42.07.55.03.13.08.21.13.26.06.05.13.07.21.07.05 0 .1-.01.16-.03.05-.02.1-.04.15-.07V7.35h-.33V6.6h.94v2.47c-.04.01-.09.03-.16.05-.07.02-.14.04-.22.05-.08.02-.16.03-.23.04-.08.01-.15.02-.21.02-.26 0-.46-.05-.61-.14a.86.86 0 01-.35-.45c-.08-.21-.13-.47-.15-.79-.02-.32-.03-.72-.03-1.18 0-.31.01-.61.02-.91.01-.3.05-.56.12-.79.07-.23.17-.42.31-.56.14-.14.33-.22.59-.22.15 0 .28.03.4.11.12.07.22.17.3.3.08.13.14.3.18.49.04.2.05.42.05.68h-.62z",
                    },
                  }),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      function v(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      h.options.__file = "static/svg/rp.svg";
      var m = {
          name: "FooterGame",
          components: { lucasfilm: l, starwars: d, ratingPending: h.exports },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? v(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : v(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(o.b)({
              footer: "global/getGlobal",
              screen: "global/getScreen",
            })
          ),
          mounted: function () {},
        },
        y = m,
        _ =
          (n(676),
          Object(c.a)(
            y,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "l-footer-game u-relative" },
                [
                  r("div", { staticClass: "container" }, [
                    r(
                      "div",
                      {
                        staticClass:
                          "l-footer-game__items u-flex u-flex-column u-flex-row--lg u-align-center u-justify-content-center u-justify-content-between--lg",
                      },
                      [
                        r(
                          "div",
                          {
                            staticClass:
                              "l-footer-game__start u-flex u-justify-content-center u-justify-content-start--lg u-flex-row u-align-items-center",
                          },
                          [
                            r("core-aov", [
                              r(
                                "a",
                                {
                                  staticClass: "t-fade-in",
                                  attrs: {
                                    href: "https://www.lucasfilm.com/what-we-do/games/",
                                    target: "_blank",
                                  },
                                },
                                [
                                  r("lucasfilm", {
                                    staticClass:
                                      "l-footer-game__logo l-footer-game__logo--row1",
                                    attrs: { alt: "Lucasfilm Logo" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            r("core-aov", [
                              r(
                                "a",
                                {
                                  staticClass: "t-fade-in",
                                  attrs: {
                                    href: "https://www.starwars.com/",
                                    target: "_blank",
                                  },
                                },
                                [
                                  r("starwars", {
                                    staticClass:
                                      "l-footer-game__logo l-footer-game__logo--row1",
                                    attrs: { alt: "StarWars Logo" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            r("core-aov", [
                              r(
                                "a",
                                {
                                  staticClass: "u-pointer-none t-fade-in",
                                  attrs: { href: "#", target: "_blank" },
                                },
                                [
                                  r("ratingPending", {
                                    staticClass:
                                      "l-footer-game__logo l-footer-game__logo--size",
                                    attrs: { alt: "RP Logo" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ],
                          1
                        ),
                        t._v(" "),
                        r(
                          "div",
                          { staticClass: "l-footer-game__center u-flex" },
                          [
                            r(
                              "div",
                              { staticClass: "l-footer-game__center__eclipse" },
                              [
                                r(
                                  "nuxt-link",
                                  { attrs: { to: "/" } },
                                  [
                                    r("core-aov", [
                                      r("img", {
                                        staticClass: "lazyload t-fade-in",
                                        attrs: {
                                          "data-srcset":
                                            n(127) +
                                            " 918w, " +
                                            n(370) +
                                            " 459w, " +
                                            n(371) +
                                            " 276w, " +
                                            n(372) +
                                            " 138w",
                                          "data-sizes": "auto",
                                          "data-src": n(127),
                                        },
                                      }),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        r(
                          "div",
                          {
                            staticClass:
                              "l-footer-game__end u-flex u-justify-content-center u-justify-content-end--lg",
                          },
                          [
                            r(
                              "ul",
                              {
                                staticClass:
                                  "l-footer-game__list u-flex u-align-items-center ",
                              },
                              t._l(
                                t.footer.content.footer_links,
                                function (link) {
                                  return r(
                                    "li",
                                    {
                                      key: link.name,
                                      staticClass: "l-footer-game__item",
                                    },
                                    [
                                      r("core-aov", [
                                        r(
                                          "span",
                                          {
                                            staticClass:
                                              "u-inline-block t-fade-in",
                                          },
                                          [
                                            r(
                                              "nuxt-link",
                                              {
                                                staticClass:
                                                  "t-link t-link--gradient",
                                                attrs: {
                                                  to: t.localePath(
                                                    t.$storyblok.url(link.link)
                                                  ),
                                                },
                                              },
                                              [
                                                r(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-inline-block t-text-hover",
                                                    attrs: {
                                                      "data-text": link.name,
                                                    },
                                                  },
                                                  [
                                                    r("span", [
                                                      t._v(t._s(link.name)),
                                                    ]),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ],
                                    1
                                  );
                                }
                              ),
                              0
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    t.footer.content.copyright1 && t.footer.content.copyright2
                      ? r("div", { staticClass: "l-footer-game__rights" }, [
                          t.footer.content.copyright1
                            ? r("p", [
                                t._v(
                                  "\n        " +
                                    t._s(t.footer.content.copyright1) +
                                    "\n      "
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          t.footer.content.copyright2
                            ? r("p", [
                                t._v(
                                  "\n        " +
                                    t._s(t.footer.content.copyright2) +
                                    "\n      "
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          r(
                            "button",
                            {
                              staticClass:
                                "ot-sdk-show-settings t-link is-selected",
                              attrs: { id: "ot-sdk-btn" },
                            },
                            [t._v("Cookie Settings")]
                          ),
                        ])
                      : t._e(),
                  ]),
                  t._v(" "),
                  r("c-img-background", {
                    attrs: {
                      image:
                        t.footer.content.image_footer &&
                        t.footer.content.image_footer.length
                          ? t.footer.content.image_footer
                          : [],
                      position: "bottom",
                    },
                  }),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      e.default = _.exports;
    },
    464: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(2),
        component = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 69.2 37",
                  },
                },
                t.$listeners
              ),
              [
                n("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    fill: "#FFF",
                    d: "M7 20.5l1-2-1-2-7 2 7 2zm55.2-4l-1 2 1 2 7-2-7-2z",
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      component.options.__file = "static/svg/newsletter_arrows.svg";
      var c = component.exports,
        l = n(9);
      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var d = {
          name: "Header",
          components: { arrows: c },
          data: function () {
            return {
              elLogoHero: null,
              isFixed: !1,
              isLogo: !1,
              isLangOpen: !1,
              isMenuOpen: !1,
              isOpen: !1,
              isClose: !1,
            };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? f(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : f(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(l.b)({
              isHome: "global/getIsHome",
              header: "global/getGlobal",
              screen: "global/getScreen",
            })
          ),
          mounted: function () {
            var t = this;
            this.bindEvents(),
              this.$nextTick(function () {
                t.onScroll(t.$device.scroll);
              });
          },
          destroyed: function () {
            this.unbindEvents();
          },
          methods: {
            bindEvents: function () {
              var t = this;
              this.$eventHub.$on("onScroll", function (e) {
                t.onScroll(e);
              }),
                this.$eventHub.$on("onResize", this.onResize),
                this.$eventHub.$on("sidebar:close", function (e) {
                  ("locales" !== e && null != e) || (t.isLangOpen = !1),
                    "menu" === e && (t.isMenuOpen = !1);
                });
            },
            unbindEvents: function () {
              this.$eventHub.$off("onScroll"),
                this.$eventHub.$off("onResize"),
                this.$eventHub.$off("sidebar:close");
            },
            onScroll: function (t) {
              this.$fixScroll.state ||
                ((this.isFixed = t.top > 0),
                (this.isLogo = t.top > 0 || !this.isHome));
            },
            onResize: function () {
              this.onScroll(this.$device.scroll);
            },
            openMenu: function () {
              this.$eventHub.$emit("sidebar:open", "menu"),
                (this.isMenuOpen = !0),
                (this.isOpen = !0);
            },
            openNewsletter: function () {
              this.$eventHub.$emit("sidebar:open", "newsletter");
            },
          },
          watch: {
            $route: function () {
              var t = this;
              this.$nextTick(function () {
                t.onScroll(t.$device.scroll);
              });
            },
          },
        },
        h = d,
        v =
          (n(675),
          Object(o.a)(
            h,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "header",
                {
                  staticClass: "l-header",
                  class: {
                    "is-home": t.isHome,
                    "is-fixed": t.isFixed,
                    "is-logo": t.isLogo || !t.isHome,
                  },
                },
                [
                  r(
                    "div",
                    { staticClass: "container l-header__container u-relative" },
                    [
                      r(
                        "div",
                        {
                          staticClass:
                            "l-header__row row u-flex u-align-items-center",
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass: "col-12 u-flex u-align-items-center",
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass: "l-header__burger u-none--lg",
                                  on: { click: t.openMenu },
                                },
                                [
                                  r("base-use-svg", {
                                    class: { isOpen: t.isOpen },
                                    attrs: { id: "burger-close", size: "lg" },
                                    on: {
                                      click: function (e) {
                                        t.isOpen = !t.isOpen;
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              "desktop" === t.screen ||
                              "tabletLand" === t.screen
                                ? r("c-nav-menu", {
                                    staticClass: "u-none u-flex--lg",
                                  })
                                : t._e(),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass:
                                    "l-header__logo u-flex u-justify-content-center",
                                },
                                [
                                  r(
                                    "nuxt-link",
                                    {
                                      staticClass: " u-inline-block",
                                      attrs: { to: t.localePath("/") },
                                    },
                                    [
                                      r("img", {
                                        staticClass: "lazyload",
                                        attrs: {
                                          "data-srcset":
                                            n(368) +
                                            " 248w, " +
                                            n(674) +
                                            " 124w",
                                          "data-sizes": "auto",
                                          "data-src": n(368),
                                        },
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              !t.header.content.label_newsletter ||
                              ("desktop" !== t.screen &&
                                "tabletLand" !== t.screen)
                                ? t._e()
                                : r(
                                    "div",
                                    {
                                      staticClass:
                                        "l-header__container__nl u-justify-content-end u-none u-flex--lg",
                                    },
                                    [
                                      r("base-cta", {
                                        attrs: {
                                          tag: "button",
                                          name: t.header.content
                                            .label_newsletter,
                                          "is-download": !1,
                                        },
                                        nativeOn: {
                                          click: function (e) {
                                            return t.openNewsletter.apply(
                                              null,
                                              arguments
                                            );
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass:
                                    "l-header__container__nl u-relative u-flex u-justify-content-end u-none--lg",
                                  on: { click: t.openNewsletter },
                                },
                                [
                                  r(
                                    "span",
                                    {
                                      staticClass: "u-relative u-inline-block",
                                    },
                                    [
                                      r("base-use-svg", {
                                        attrs: { id: "newsletter-mobile" },
                                      }),
                                      t._v(" "),
                                      r("arrows"),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      e.default = v.exports;
      installComponents(v, {
        BaseUseSvg: n(66).default,
        BaseCta: n(56).default,
      });
    },
    465: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function l(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : c(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var f = {
          name: "Page",
          props: { blok: { type: Object, required: !0 } },
          computed: l(
            l(
              {},
              Object(o.b)({
                newsletter: "global/getGlobal",
                slug: "global/getSlug",
              })
            ),
            {},
            {
              story: function () {
                var t = this.$i18n.locale;
                return this.$store.getters["global/getStory"](t, this.slug);
              },
            }
          ),
        },
        d = n(2),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass: "px-6",
              },
              [
                t._l(t.blok.body, function (t) {
                  return n(t.component, {
                    key: t._uid,
                    tag: "component",
                    attrs: { blok: t },
                  });
                }),
                t._v(" "),
                t.newsletter.content.form_source &&
                !t.newsletter.content.newsletter_hide.includes(t.story.uuid)
                  ? n("c-newsletter")
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    466: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "Media",
          props: { blok: { type: Object, required: !0 } },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)({ newsletter: "global/getGlobal" })),
        },
        f = l,
        d = n(2),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
              },
              [
                t._l(t.blok.body, function (t) {
                  return n(t.component, {
                    key: t._uid,
                    tag: "component",
                    attrs: { blok: t },
                  });
                }),
                t._v(" "),
                t.newsletter.content.form_source
                  ? n("c-newsletter", {
                      attrs: {
                        title: t.newsletter.content.title,
                        paragraph: t.newsletter.content.paragraph,
                      },
                    })
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    467: function (t, e, n) {
      "use strict";
      n.r(e);
      n(126);
      var r = {
          name: "BaseInput",
          props: {
            type: { type: String, required: !0 },
            value: { type: [String, Number], default: "" },
            name: { type: String, required: !1, default: "" },
            placeholder: { type: String, required: !1, default: "" },
            id: { type: String, required: !1, default: "" },
            label: { type: String, required: !1, default: "" },
            focus: { type: Boolean, required: !1, default: !1 },
            autofocus: { type: Boolean, required: !1, default: !1 },
            maxLengthInput: { type: Number, required: !1, default: 50 },
            readonlyInput: { type: Boolean, required: !1, default: !1 },
            min: { type: String, required: !1 },
          },
        },
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              t.label
                ? n(
                    "label",
                    {
                      staticClass: "t-text t-label u-blue",
                      attrs: { for: t.name },
                    },
                    [t._v(t._s(t.label))]
                  )
                : t._e(),
              t._v(" "),
              n("input", {
                staticClass: "t-input",
                attrs: {
                  type: t.type,
                  name: t.name,
                  id: t.name,
                  placeholder: t.placeholder,
                  min: t.min,
                  maxlength: t.maxLengthInput,
                  readonly: t.readonlyInput,
                },
                domProps: { value: t.value },
                on: {
                  input: function (e) {
                    return t.$emit("input", e.target.value);
                  },
                  blur: function (e) {
                    return t.$emit("blur");
                  },
                  keyup: function (e) {
                    return t.$emit("keyup", e);
                  },
                },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    468: function (t, e, n) {
      "use strict";
      n.r(e);
      n(72),
        n(7),
        n(16),
        n(666),
        n(33),
        n(34),
        n(48),
        n(27),
        n(20),
        n(14),
        n(45),
        n(49),
        n(28);
      var r = n(458),
        o = n(81);
      function c(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return l(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          },
        };
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var f = {
          name: "StarField",
          data: function () {
            return {
              width: 0,
              height: 0,
              ctx: null,
              stars: [],
              layers: 3,
              scrollTop: 0,
              translateScroll: 0,
              deformation: 0,
              isActive: !1,
            };
          },
          mounted: function () {
            var t = this;
            (this.ctx = this.$refs.starField.getContext("2d")),
              (this.scrollTop = this.$device.scroll.top),
              this.bindEvents(),
              this.$nextTick(function () {
                t.onResize(), t.createStars();
              }),
              setTimeout(function () {
                t.isActive = !0;
              }, 500);
          },
          destroy: function () {
            this.unBindEvents();
          },
          methods: {
            bindEvents: function () {
              this.$eventHub.$on("onResize", this.onResize),
                this.$eventHub.$on("onUpdate", this.onUpdate);
            },
            unBindEvents: function () {
              this.$eventHub.$off("onResize"), this.$eventHub.$off("onUpdate");
            },
            onResize: function () {
              var t = this;
              (this.$refs.starField.width = this.width = this.$device.width),
                (this.$refs.starField.height = this.height =
                  this.$device.height),
                this.$nextTick(function () {
                  t.updatePos();
                });
            },
            createStars: function () {
              for (
                var t = Math.round(this.$device.width / 3), e = 1;
                e <= this.layers;
                e++
              ) {
                this.stars.push([]), (t = 0 === e ? t : Math.round(t / 2));
                for (var s = 0; s <= t; s++)
                  this.stars[e - 1].push(new r.default({ layer: e }));
              }
            },
            updatePos: function () {
              this.stars.forEach(function (t) {
                var e,
                  n = c(t);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    e.value.onResize();
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
              });
            },
            onUpdate: function (t) {
              var e = this;
              this.updateScrollSpeed(),
                this.ctx.clearRect(0, 0, this.width, this.height),
                this.stars.forEach(function (n) {
                  for (var s = 0; s < n.length; s++)
                    n[s].setScrollTranslate(e.translateScroll),
                      n[s].setDeformation(e.deformation),
                      n[s].update(t),
                      e.ctx.save(),
                      (e.ctx.fillStyle = "#FFFFFF"),
                      e.ctx.beginPath(),
                      e.ctx.rect(
                        n[s].pos.x,
                        n[s].pos.y,
                        n[s].width,
                        n[s].height
                      ),
                      e.ctx.closePath(),
                      (e.ctx.globalAlpha = n[s].alpha.current),
                      e.ctx.fill(),
                      e.ctx.restore();
                });
            },
            updateScrollSpeed: function () {
              if (!this.isActive) return !1;
              var t = Object(o.lerp)(
                this.scrollTop,
                this.$device.scroll.top,
                0.05
              );
              Math.abs(t) < 0.1 && (t = 0);
              var e = +((this.scrollTop - t) / this.$device.scroll.height);
              (this.translateScroll = 350 * -e),
                (this.deformation = Math.abs(this.translateScroll)),
                (this.scrollTop = t);
            },
          },
        },
        d = (n(671), n(2)),
        component = Object(d.a)(
          f,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)("canvas", { ref: "starField" });
          },
          [],
          !1,
          null,
          "6536bb67",
          null
        );
      e.default = component.exports;
    },
    469: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15);
      var r = {
          name: "LightBox",
          mixins: [n(74).a],
          data: function () {
            return { datas: {}, isOpen: !1, isImgLoaded: !1 };
          },
          mounted: function () {
            this.bindEvents(),
              document.addEventListener("keydown", this.onKeyPress);
          },
          destroyed: function () {
            this.unBindEvents();
          },
          methods: {
            bindEvents: function () {
              this.$eventHub.$on("lightbox:open", this.open),
                this.$eventHub.$on("lightbox:close", this.close);
            },
            unBindEvents: function () {
              this.$eventHub.$off("lightbox:open"),
                this.$eventHub.$off("lightbox:close");
            },
            open: function (t) {
              t && t instanceof Object && Object.keys(t).length
                ? ((this.datas = t), (this.isOpen = !0), this.$fixScroll.fix())
                : console.warn("Missing datas to open lightbox");
            },
            close: function () {
              (this.isOpen = !1), this.$fixScroll.unFix();
            },
            afterLeave: function () {
              (this.datas = {}), (this.isImgLoaded = !1);
            },
            onKeyPress: function (t) {
              27 == t.keyCode && this.isOpen && this.close();
            },
          },
        },
        o = (n(673), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              { attrs: { name: "fade" }, on: { ":after-leave": t.afterLeave } },
              [
                t.isOpen
                  ? n("div", { staticClass: "c-lightbox" }, [
                      n("div", {
                        staticClass: "c-lightbox__overlay",
                        on: { click: t.close },
                      }),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass:
                            "c-lightbox__inner u-relative u-z-back u-pad-l-xs u-pad-r-xs",
                        },
                        [
                          n("transition", { attrs: { name: "fade" } }, [
                            t.isImgLoaded
                              ? n(
                                  "button",
                                  {
                                    staticClass:
                                      "c-lightbox__close u-cursor-pointer",
                                  },
                                  [
                                    n("base-use-svg", {
                                      attrs: { id: "close", size: "md" },
                                      nativeOn: {
                                        click: function (e) {
                                          return t.close.apply(null, arguments);
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]),
                          t._v(" "),
                          n(
                            "figure",
                            [
                              n("base-picture", {
                                attrs: {
                                  src: {
                                    desktop: t.datas.media_to_download.filename,
                                    tablet: t.datas.media_to_download.filename,
                                  },
                                  alt: t.datas.image[0].image_desktop.alt,
                                  "crop-id": "lightbox",
                                },
                                on: {
                                  "img:loaded": function (e) {
                                    t.isImgLoaded = !0;
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          n("transition", { attrs: { name: "fade" } }, [
                            t.isImgLoaded
                              ? n(
                                  "div",
                                  {
                                    staticClass:
                                      "c-lightbox__sub u-marg-t-xxs u-flex u-flex u-flex-column u-flex-row--sm u-align-items--center--sm u-align-items-start u-justify-content-between",
                                  },
                                  [
                                    t.datas.title
                                      ? n("p", { staticClass: "t-text--xs" }, [
                                          n("span", [
                                            t._v(t._s(t.datas.title)),
                                          ]),
                                        ])
                                      : t._e(),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "c-lightbox__download u-flex u-align-items-center u-marg-t-xxs u-marg-t-0--sm",
                                      },
                                      [
                                        n(
                                          "button",
                                          {
                                            staticClass:
                                              "t-text--xs t-link t-link--gradient t-text-hover u-relative",
                                            attrs: {
                                              "data-text":
                                                t.$t("lightbox.download"),
                                            },
                                            on: {
                                              click: function (e) {
                                                !t.filesDownloaded.includes(
                                                  t.datas.media_to_download
                                                    .filename
                                                ) &&
                                                  t.setDownload({
                                                    file: t.datas
                                                      .media_to_download
                                                      .filename,
                                                    target: e.target,
                                                    autoDownload: !0,
                                                  });
                                              },
                                            },
                                          },
                                          [
                                            n("span", [
                                              t._v(
                                                t._s(t.$t("lightbox.download"))
                                              ),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          { staticClass: "u-relative" },
                                          [
                                            n("base-use-svg", {
                                              attrs: {
                                                id: "download",
                                                color: "white",
                                                size: "sm",
                                              },
                                            }),
                                            t._v(" "),
                                            n("base-use-svg", {
                                              attrs: {
                                                id: "download",
                                                color: "brown",
                                                size: "sm",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              : t._e(),
                          ]),
                        ],
                        1
                      ),
                    ])
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "c7ba010a",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BaseUseSvg: n(66).default,
        BasePicture: n(57).default,
      });
    },
    470: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "SvgIcons",
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)({ slug: "global/getSlug" })),
        },
        f = l,
        d = n(2),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              {
                staticStyle: {
                  position: "absolute",
                  width: "0",
                  height: "0",
                  overflow: "hidden",
                },
                attrs: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
              },
              [
                n(
                  "defs",
                  [
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-frame",
                          viewBox: "0 0 1233 526",
                          preserveAspectRatio: "none",
                        },
                      },
                      [
                        n("title", [t._v("Frame")]),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              gradientUnits: "userSpaceOnUse",
                              x1: "-1.5731",
                              y1: "528.2526",
                              x2: "1232.871",
                              y2: "1.9468",
                              gradientTransform: "matrix(1 0 0 -1 0 528)",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            t._v(" "),
                            n("stop", {
                              attrs: { offset: ".25", "stop-color": "#82624f" },
                            }),
                            t._v(" "),
                            n("stop", {
                              attrs: { offset: ".75", "stop-color": "#82624f" },
                            }),
                            t._v(" "),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#d6b07f" },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "url(#a)",
                            d: "m1232 166.2-4-5V8h-4V4H765.4l-5.1-4H471.6l-4.95 4H8v4H4v152.95L0 166v194.1l4 4.95V518h4v4.1h458.83l4.97 3.9h288.6l4.78-3.9H1224V518h4V365.15l4-4.95v-194zM1227 9v150.95l-3-3.75V9h3zm-4 360.7V517H769.7l-.3.2-4.75 3.9h-297.4l-4.95-3.9-.3-.2H9V369.5l-.2-.3-3.8-4.63V161.22l3.8-4.82.2-.3V9h453.2l.3-.2 4.68-3.8h297.8l4.82 3.8.3.2H1223v147.3l.2.3 3.8 4.77v203.3l-3.8 4.73-.2.3zM1223 5v3H770.5l-3.83-3H1223zM472.1 1h287.8l3.81 3h-295.3l3.69-3zM9 5h456.41l-3.71 3H9V5zM5 9h3v146.9l-3 3.79V9zM1 359.7V166.3l3-3.81v200.86l-3-3.65zM5 517V366.29L8 370v147H5zm4 4.1V518h452.6l3.95 3.1H9zm750.9 3.9H472.2l-3.68-2.9h294.91l-3.53 2.9zm463.1-3.9H766.4l3.8-3.1H1223v3.1zm4-4.1h-3V370.1l3-3.71V517zm4-157.3-3 3.73v-200.8l3 3.77v193.3z",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-frame-full-square",
                          viewBox: "0 0 376 376",
                          preserveAspectRatio: "none",
                        },
                      },
                      [
                        n("title", [t._v("Frame full square")]),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              gradientUnits: "userSpaceOnUse",
                              x1: "0",
                              y1: "190",
                              x2: "375",
                              y2: "190",
                              gradientTransform: "matrix(1 0 0 -1 0 378)",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".1", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".9", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#d6b07f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "none",
                            stroke: "url(#a)",
                            "stroke-width": ".9947",
                            "stroke-miterlimit": "10",
                            d: "M375 371.5H0m0-367h375",
                          },
                        }),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "b",
                              gradientUnits: "userSpaceOnUse",
                              x1: "0",
                              y1: "190",
                              x2: "375",
                              y2: "190",
                              gradientTransform: "matrix(1 0 0 -1 0 378)",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".1", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".9", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#d6b07f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "none",
                            stroke: "url(#b)",
                            "stroke-width": ".9947",
                            "stroke-miterlimit": "10",
                            d: "M375 367.5h-34.5l-9.6 8H45.3l-10.1-8H0m0-359h35.4l9.7-8h285.6l10.1 8H375",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-frame-square",
                          viewBox: "0 0 346 346",
                        },
                      },
                      [
                        n("title", [t._v("Frame square")]),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              gradientUnits: "userSpaceOnUse",
                              x1: "3",
                              y1: "175",
                              x2: "343",
                              y2: "175",
                              gradientTransform: "matrix(1 0 0 -1 0 348)",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".1", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".9", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#d6b07f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "url(#a)",
                            d: "M228.734 346H118.293l-6-6H3V6h109.293l6-6h110.414l6 6H343v334H233.734l-5 6zm-110.027-1h109.559l5-6H342V7H234.293l-6-6H118.707l-6 6H4v332h108.707l6 6z",
                          },
                        }),
                        n(
                          "g",
                          [
                            n(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "b",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "0",
                                  y1: "175",
                                  x2: "346",
                                  y2: "175",
                                  gradientTransform: "matrix(1 0 0 -1 0 348)",
                                },
                              },
                              [
                                n("stop", {
                                  attrs: {
                                    offset: "0",
                                    "stop-color": "#d6b07f",
                                  },
                                }),
                                n("stop", {
                                  attrs: {
                                    offset: ".1",
                                    "stop-color": "#82624f",
                                  },
                                }),
                                n("stop", {
                                  attrs: {
                                    offset: ".9",
                                    "stop-color": "#82624f",
                                  },
                                }),
                                n("stop", {
                                  attrs: {
                                    offset: "1",
                                    "stop-color": "#d6b07f",
                                  },
                                }),
                              ],
                              1
                            ),
                            n("path", {
                              attrs: {
                                fill: "url(#b)",
                                d: "M340 343H6V233.707l-6-6V117.315l6-7V3h334v108.293l6 6v110.414l-6 6V343zM7 342h332V233.293l6-6V117.707l-6-6V4H7v106.685l-6 7v109.608l6 6V342z",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-frame-full",
                          viewBox: "0 0  1440 614",
                          preserveAspectRatio: "none",
                        },
                      },
                      [
                        n("title", [t._v("Frame full")]),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              gradientUnits: "userSpaceOnUse",
                              x1: "-.000061",
                              y1: "309",
                              x2: "1440",
                              y2: "309",
                              gradientTransform: "matrix(1 0 0 -1 0 616)",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".25", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: ".75", "stop-color": "#82624f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#d6b07f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "url(#a)",
                            d: "M575.85 1h287.97l3.82 3H572.15l3.7-3zm288.41 612H575.82l-3.82-3h295.92l-3.66 3zm575.74-8H874.02l-4.87 4H570.73l-5.09-4H0v1h565.29l3.81 3H0v1h570.38l5.09 4h289.15l4.88-4H1440v-1H870.72l3.65-3H1440v-1zm0-601H869.26l-5.1-4H575.49l-4.93 4H0v1h569.33l-3.69 3H0v1h565.99l.28-.22L570.92 5h298l5.1 4H1440V8H874.36l-3.82-3H1440",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-youtube", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon Youtube")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M23.5 6.15A3.13 3.13 0 0 0 21.4 4c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5C1.6 4.3.8 5.1.5 6.15 0 8 0 11.95 0 11.95s0 3.95.5 5.8a3.13 3.13 0 0 0 2.1 2.15c1.85.5 9.4.5 9.4.5s7.5 0 9.4-.5c1.05-.3 1.85-1.1 2.1-2.15.5-1.9.5-5.8.5-5.8s0-3.95-.5-5.8zM9.55 15.5V8.4l6.25 3.55-6.25 3.55z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-instagram", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon Instragram")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M12 2.15c3.2 0 3.6 0 4.85.05 1.15.1 1.8.3 2.25.45.55.2.95.5 1.4.9.4.4.7.8.9 1.4.15.4.35 1.05.4 2.25.05 1.25.05 1.65.05 4.85s0 3.6-.05 4.85c-.05 1.15-.25 1.8-.4 2.25-.2.55-.5.95-.9 1.4-.4.4-.8.7-1.4.9-.4.15-1.05.35-2.25.4-1.25.05-1.65.05-4.85.05s-3.6 0-4.85-.05c-1.15-.05-1.8-.25-2.25-.4-.55-.2-.95-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.5-.3-1.15-.35-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.05-4.85c.05-1.15.25-1.8.4-2.25.2-.55.5-.95.9-1.4.4-.4.8-.7 1.4-.9.4-.1 1.05-.3 2.2-.35 1.25-.1 1.65-.1 4.85-.1zM12 0C8.75 0 8.35 0 7.05.05S4.9.3 4.15.6C3.35.95 2.7 1.35 2 2 1.35 2.7.95 3.35.65 4.15.35 4.9.15 5.8.1 7.05 0 8.35 0 8.75 0 12s0 3.65.05 4.95c.05 1.3.25 2.15.55 2.9.35.8.75 1.45 1.4 2.15.65.65 1.35 1.1 2.15 1.4.75.3 1.65.5 2.9.55 1.3.05 1.7.05 4.95.05s3.65 0 4.95-.05c1.3-.05 2.15-.25 2.9-.55.8-.3 1.45-.7 2.15-1.4.65-.65 1.1-1.35 1.4-2.15.3-.75.5-1.65.55-2.9.05-1.3.05-1.7.05-4.95s0-3.65-.05-4.95c-.05-1.3-.25-2.15-.55-2.9-.35-.8-.75-1.45-1.4-2.15-.65-.65-1.35-1.1-2.15-1.4-.75-.3-1.65-.5-2.9-.55C15.65 0 15.25 0 12 0z",
                          },
                        }),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M12 5.85C8.6 5.85 5.85 8.6 5.85 12c0 3.4 2.75 6.15 6.15 6.15 3.4 0 6.15-2.75 6.15-6.15 0-3.4-2.75-6.15-6.15-6.15zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM18.4 7.05a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-facebook", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon Facebook")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M24 12c0-6.628-5.372-12-12-12S0 5.372 0 12c0 5.991 4.387 10.955 10.125 11.855v-8.386H7.078V12h3.047V9.356c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.955.926-1.955 1.875V12h3.328l-.532 3.469h-2.796v8.386C19.612 22.955 24 17.991 24 12z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-linkedin", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon LinkedIn")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M20.449 20.449h-3.556V14.88c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.135 1.447-2.135 2.941v5.665H9.352V8.997h3.414v1.565h.048a3.738 3.738 0 0 1 3.368-1.849c3.604 0 4.269 2.371 4.269 5.455l-.002 6.281zM5.34 7.431a2.065 2.065 0 0 1-1.46-3.523 2.06 2.06 0 0 1 2.248-.447 2.066 2.066 0 0 1 .67 3.366 2.062 2.062 0 0 1-1.458.604zm1.778 13.018h-3.56V8.997h3.56v11.452zM22.222.002H1.771A1.752 1.752 0 0 0 0 1.732v20.536A1.75 1.75 0 0 0 1.771 24h20.451A1.753 1.753 0 0 0 24 22.268V1.73A1.758 1.758 0 0 0 22.222 0v.002z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-pinterest", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon Pinterest")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M12 0C5.373 0 0 5.373 0 12c0 5.086 3.161 9.432 7.625 11.18-.109-.948-.198-2.41.039-3.447.217-.938 1.402-5.965 1.402-5.965s-.356-.721-.356-1.778c0-1.669.968-2.914 2.173-2.914 1.027 0 1.521.77 1.521 1.689 0 1.027-.652 2.568-.998 4-.286 1.195.602 2.173 1.778 2.173 2.133 0 3.773-2.252 3.773-5.491 0-2.874-2.064-4.879-5.017-4.879-3.417 0-5.422 2.558-5.422 5.205 0 1.027.395 2.133.889 2.736a.356.356 0 0 1 .079.346c-.089.375-.296 1.195-.336 1.363-.049.217-.178.267-.405.158-1.501-.701-2.44-2.884-2.44-4.652 0-3.783 2.746-7.259 7.931-7.259 4.158 0 7.398 2.963 7.398 6.933 0 4.138-2.608 7.467-6.222 7.467-1.215 0-2.361-.632-2.746-1.383l-.751 2.854c-.267 1.047-.998 2.351-1.491 3.151 1.126.346 2.311.533 3.556.533 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-tiktok", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon tiktok")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M22.034 9.71a6.456 6.456 0 0 1-.59.03 6.402 6.402 0 0 1-5.361-2.897v9.866a7.294 7.294 0 0 1-8.714 7.152 7.297 7.297 0 0 1-5.314-9.942 7.287 7.287 0 0 1 2.686-3.272 7.279 7.279 0 0 1 4.051-1.23c.152 0 .301.014.451.023v3.593c-.15-.018-.297-.045-.451-.045a3.718 3.718 0 0 0-3.721 3.722 3.722 3.722 0 0 0 3.721 3.722c2.056 0 3.871-1.62 3.871-3.675L12.699 0h3.438a6.402 6.402 0 0 0 5.901 5.717V9.71",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-twitter", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon twitter")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M7.55 21.5c9.05 0 14-7.5 14-14v-.65c.95-.7 1.8-1.55 2.45-2.55-.9.4-1.85.65-2.85.8 1-.6 1.8-1.55 2.15-2.7-.95.55-2 .95-3.15 1.2-.85-1-2.1-1.6-3.55-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4.05.75.15 1.1-4.1-.15-7.75-2.1-10.2-5.1-.4.75-.65 1.55-.65 2.5 0 1.7.85 3.2 2.2 4.1-.8 0-1.55-.25-2.25-.6v.05c0 2.4 1.7 4.4 3.95 4.85-.4.1-.85.15-1.3.15-.3 0-.65-.05-.95-.1.65 1.95 2.45 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.15-.05 2.2 1.4 4.75 2.2 7.55 2.2z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-whatsapp", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon Whatsapp")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20.402 3.49A11.779 11.779 0 0 0 11.991 0C5.44 0 .103 5.337.097 11.889c0 2.098.547 4.14 1.585 5.947L0 24l6.306-1.654a11.894 11.894 0 0 0 5.685 1.448h.006c6.552 0 11.889-5.337 11.894-11.895a11.84 11.84 0 0 0-3.489-8.409zm-8.411 18.292a9.86 9.86 0 0 1-5.035-1.38l-.359-.217-3.741.981.998-3.649-.233-.377a9.843 9.843 0 0 1-1.511-5.257c0-5.44 4.436-9.876 9.887-9.876a9.84 9.84 0 0 1 6.991 2.897 9.833 9.833 0 0 1 2.891 6.991c-.006 5.456-4.442 9.887-9.888 9.887zm5.423-7.401c-.297-.148-1.756-.867-2.03-.969-.274-.097-.473-.148-.667.148-.2.297-.77.969-.941 1.163-.171.2-.348.222-.644.074-.297-.148-1.254-.462-2.389-1.477-.884-.787-1.477-1.762-1.654-2.059-.171-.296-.017-.456.131-.604.131-.131.297-.348.445-.519.148-.171.2-.297.297-.496.097-.2.051-.371-.023-.519-.074-.148-.667-1.613-.918-2.206-.24-.582-.485-.502-.667-.508-.171-.011-.371-.011-.57-.011-.2 0-.519.074-.793.371-.274.296-1.038 1.015-1.038 2.48s1.066 2.874 1.215 3.073 2.093 3.199 5.075 4.488c.707.308 1.26.49 1.694.627.713.228 1.357.194 1.87.12.57-.085 1.756-.719 2.007-1.414.245-.696.245-1.289.171-1.414-.075-.126-.274-.2-.571-.348z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-close", viewBox: "0 0 24 24" } },
                      [
                        n("title", [t._v("Icon close")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M13.415 12 23.707 1.709c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.001 10.586 1.708.293C1.317-.098.685-.098.294.293s-.391 1.023 0 1.414L10.586 12 .293 22.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293L12 13.414l10.292 10.293c.391.391 1.023.391 1.414 0s.391-1.023 0-1.414L13.415 12z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      { attrs: { id: "icon-close", viewBox: "0 0 86 86" } },
                      [
                        n("title", [t._v("Icon close")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M13.415 12 23.707 1.709c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.001 10.586 1.708.293C1.317-.098.685-.098.294.293s-.391 1.023 0 1.414L10.586 12 .293 22.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293L12 13.414l10.292 10.293c.391.391 1.023.391 1.414 0s.391-1.023 0-1.414L13.415 12z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-chevron",
                          "xml:space": "preserve",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        n("title", [t._v("Icon chevron")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "none",
                            "stroke-width": "6",
                            d: "m1 6.759 11 10.483L23 6.759",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-download",
                          "xml:space": "preserve",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        n("title", [t._v("Icon download")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "m21.387 8.847-7.92 7.92V2.247h-2.64v14.52l-7.92-7.92L1 10.753l11 11 11-11-1.613-1.906z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-play",
                          "xml:space": "preserve",
                          viewBox: "0 0 24 26",
                        },
                      },
                      [
                        n("title", [t._v("Icon CTA")]),
                        t._v(" "),
                        n("defs", [
                          n(
                            "filter",
                            {
                              attrs: {
                                filterUnits: "userSpaceOnUse",
                                id: "Filter_0",
                                x: "0px",
                                y: "0px",
                                width: "24px",
                                height: "25px",
                              },
                            },
                            [
                              n("feOffset", {
                                attrs: { in: "SourceAlpha", dx: "0", dy: "0" },
                              }),
                              t._v(" "),
                              n("feGaussianBlur", {
                                attrs: {
                                  result: "blurOut",
                                  stdDeviation: "2.236",
                                },
                              }),
                              t._v(" "),
                              n("feFlood", {
                                attrs: {
                                  "flood-color": "rgb(255, 170, 58)",
                                  result: "floodOut",
                                },
                              }),
                              t._v(" "),
                              n("feComposite", {
                                attrs: {
                                  operator: "atop",
                                  in: "floodOut",
                                  in2: "blurOut",
                                },
                              }),
                              t._v(" "),
                              n(
                                "feComponentTransfer",
                                [
                                  n("feFuncA", {
                                    attrs: { type: "linear", slope: "1" },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              n(
                                "feMerge",
                                [
                                  n("feMergeNode"),
                                  t._v(" "),
                                  n("feMergeNode", {
                                    attrs: { in: "SourceGraphic" },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        n("g", { attrs: { filter: "url(#Filter_0)" } }, [
                          n("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              fill: "rgb(255, 255, 255)",
                              d: "M16.500,12.000 L6.000,18.000 L6.000,6.000 L16.500,12.000 Z",
                            },
                          }),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-button-border",
                          "xml:space": "preserve",
                          viewBox: "0 0 212 47",
                          preserveAspectRatio: "none",
                        },
                      },
                      [
                        n("title", [t._v("Icon bg")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "#FFF",
                            "fill-rule": "evenodd",
                            d: "m198 21-1 1.999L198 25l7-2.001L198 21z",
                            "clip-rule": "evenodd",
                          },
                        }),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              x1: "15.247",
                              x2: "196.052",
                              y1: "24.5",
                              y2: "24.5",
                              gradientTransform: "matrix(1 0 0 -1 0 48)",
                              gradientUnits: "userSpaceOnUse",
                            },
                          },
                          [
                            n("stop", {
                              staticStyle: { "stop-color": "#d6b07f" },
                              attrs: { offset: "0" },
                            }),
                            t._v(" "),
                            n("stop", {
                              staticStyle: { "stop-color": "#82624f" },
                              attrs: { offset: "1" },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "none",
                            stroke: "url(#a)",
                            "stroke-miterlimit": "10",
                            d: "m195.8 32.5-4.7 14H20.2l-4.7-14m0-18 4.7-14h170.9l4.7 13.9",
                          },
                        }),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "b",
                              x1: "12.245",
                              x2: "199.053",
                              y1: "24.5",
                              y2: "24.5",
                              gradientTransform: "matrix(1 0 0 -1 0 48)",
                              gradientUnits: "userSpaceOnUse",
                            },
                          },
                          [
                            n("stop", {
                              staticStyle: { "stop-color": "#d6b07f" },
                              attrs: { offset: "0" },
                            }),
                            t._v(" "),
                            n("stop", {
                              staticStyle: { "stop-color": "#82624f" },
                              attrs: { offset: "1" },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "none",
                            stroke: "url(#b)",
                            "stroke-miterlimit": "10",
                            d: "m12.5 16.5 4.8-14H194l4.8 14.1m0 13.9-4.7 14H17.2l-4.7-14.1",
                          },
                        }),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "#FFF",
                            "fill-rule": "evenodd",
                            d: "m13 25 1-2.001L13 21l-7 1.999L13 25z",
                            "clip-rule": "evenodd",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-burger-open",
                          "xml:space": "preserve",
                          viewBox: "0 0 16 16",
                        },
                      },
                      [
                        n("title", [t._v("Icon burger open")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "#FFF",
                            "fill-rule": "evenodd",
                            d: "M16 15.201 14.444 16 7.432 8.394.418 16l.098-.799 6.178-7.606L0 0l.43.106 7.001 6.687L14.433.106 15.171 0 8.169 7.594 16 15.201z",
                            "clip-rule": "evenodd",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-burger-close",
                          "xml:space": "preserve",
                          viewBox: "0 0 16 16",
                        },
                      },
                      [
                        n("title", [t._v("Icon burger close")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            fill: "#FFF",
                            "fill-rule": "evenodd",
                            d: "M0 13v-.91h16V13H0zm0-5.455h16v.908H0v-.908zM0 3h16v.909H0V3z",
                            "clip-rule": "evenodd",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-vk",
                          "xml:space": "preserve",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        n("title", [t._v("Icon vk")]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            d: "M15.679 0H8.321C1.599 0 0 1.599 0 8.321v7.359C0 22.401 1.599 24 8.321 24h7.359c6.721 0 8.32-1.599 8.32-8.321V8.321C23.987 1.599 22.388 0 15.679 0zm3.686 17.116h-1.749c-.662 0-.862-.537-2.049-1.724-1.037-1-1.487-1.124-1.737-1.124-.35 0-.462.1-.462.6v1.574c0 .425-.137.675-1.249.675-1.849 0-3.885-1.124-5.335-3.198-2.174-3.037-2.761-5.336-2.761-5.798 0-.262.1-.5.6-.5h1.749c.45 0 .612.2.787.675.85 2.486 2.299 4.673 2.886 4.673.225 0 .325-.1.325-.662V9.732c-.062-1.187-.7-1.287-.7-1.699 0-.2.162-.4.45-.4h2.749c.375 0 .5.2.5.637v3.461c0 .375.163.5.275.5.225 0 .412-.125.812-.537 1.262-1.412 2.149-3.573 2.149-3.573.112-.262.312-.5.762-.5h1.749c.525 0 .637.275.525.637-.212 1.024-2.349 4.023-2.349 4.023-.187.3-.262.45 0 .775.187.262.8.775 1.199 1.262.75.85 1.312 1.562 1.474 2.049.15.499-.1.749-.6.749z",
                            "clip-rule": "evenodd",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    "media" === t.slug
                      ? [
                          n(
                            "symbol",
                            {
                              attrs: {
                                id: "icon-title-after",
                                "xml:space": "preserve",
                                viewBox: "0 0 457.529 4.994",
                              },
                            },
                            [
                              n("title", [t._v("Icon Border ")]),
                              t._v(" "),
                              n(
                                "linearGradient",
                                {
                                  attrs: {
                                    id: "a",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "0",
                                    y1: "4.4895",
                                    x2: "457.5287",
                                    y2: "4.4895",
                                  },
                                },
                                [
                                  n("stop", {
                                    attrs: {
                                      offset: "0",
                                      "stop-color": "#d6b07f",
                                      "stop-opacity": "0",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: ".2",
                                      "stop-color": "#d6b07f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: ".5",
                                      "stop-color": "#82624f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: ".8",
                                      "stop-color": "#d6b07f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: "1",
                                      "stop-color": "#d6b07f",
                                      "stop-opacity": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              n(
                                "linearGradient",
                                {
                                  attrs: {
                                    id: "b",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "0",
                                    y1: "4.4895",
                                    x2: "457.5287",
                                    y2: "4.4895",
                                  },
                                },
                                [
                                  n("stop", {
                                    attrs: {
                                      offset: ".9",
                                      "stop-color": "#82624f",
                                    },
                                  }),
                                  t._v(" "),
                                  n("stop", {
                                    attrs: {
                                      offset: "1",
                                      "stop-color": "#d6b07f",
                                      "stop-opacity": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n("path", {
                                attrs: {
                                  d: "M0 4.489h457.529",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "url(#a)",
                                  stroke: "url(#b)",
                                  "stroke-miterlimit": "10",
                                },
                              }),
                              t._v(" "),
                              n(
                                "linearGradient",
                                {
                                  attrs: {
                                    id: "c",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "0",
                                    y1: ".4893",
                                    x2: "457.5287",
                                    y2: ".4893",
                                  },
                                },
                                [
                                  n("stop", {
                                    attrs: {
                                      offset: "0",
                                      "stop-color": "#d6b07f",
                                      "stop-opacity": "0",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: ".2",
                                      "stop-color": "#d6b07f",
                                    },
                                  }),
                                  t._v(" "),
                                  n("stop", {
                                    attrs: {
                                      offset: ".4",
                                      "stop-color": "#82624f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: ".6",
                                      "stop-color": "#82624f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: ".8",
                                      "stop-color": "#d6b07f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: "1",
                                      "stop-color": "#d6b07f",
                                      "stop-opacity": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n(
                                "linearGradient",
                                {
                                  attrs: {
                                    id: "d",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "0",
                                    y1: ".4893",
                                    x2: "457.5287",
                                    y2: ".4893",
                                  },
                                },
                                [
                                  n("stop", {
                                    attrs: {
                                      offset: ".9",
                                      "stop-color": "#82624f",
                                    },
                                  }),
                                  n("stop", {
                                    attrs: {
                                      offset: "1",
                                      "stop-color": "#d6b07f",
                                      "stop-opacity": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n("path", {
                                attrs: {
                                  d: "M0 .489h457.529",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "url(#c)",
                                  stroke: "url(#d)",
                                  "stroke-miterlimit": "10",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      : t._e(),
                    t._v(" "),
                    n(
                      "symbol",
                      {
                        attrs: {
                          id: "icon-newsletter-mobile",
                          "xml:space": "preserve",
                          viewBox: "0 0 59.2 37",
                        },
                      },
                      [
                        n("title", [t._v("Icon burger close")]),
                        t._v(" "),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              gradientUnits: "userSpaceOnUse",
                              x1: "18.3999",
                              y1: "18.4497",
                              x2: "40.8748",
                              y2: "18.4497",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#82624f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "url(#a)",
                            d: "M18.9 25.6h22V11.3H18.4v14.3h.5zm10.702-6.52-9.183-6.78h18.452l-9.269 6.78zM39.9 12.785v11.301L32.36 18.3l7.54-5.515zm-12.998 5.544L19.4 24.086V12.79l7.502 5.539zM20.373 24.6l7.366-5.653 1.86 1.373 1.921-1.405 7.408 5.684H20.373z",
                          },
                        }),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "b",
                              gradientUnits: "userSpaceOnUse",
                              x1: ".0557",
                              y1: "31.0854",
                              x2: "59.0763",
                              y2: "31.0854",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#82624f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "url(#b)",
                            d: "M53.697 34h-.728l3.274-6.269-.887-.463L51.841 34H7.459l-3.515-6.731-.887.463L6.331 34h-.826L.944 25.171l-.888.459L4.896 35h1.957l1.045 2h43.505l1.045-2h1.856l4.841-9.269-.887-.463L53.697 34zm-2.9 2H8.503l-.522-1h43.338l-.522 1z",
                          },
                        }),
                        n(
                          "linearGradient",
                          {
                            attrs: {
                              id: "c",
                              gradientUnits: "userSpaceOnUse",
                              x1: "-.0415",
                              y1: "5.9167",
                              x2: "59.1747",
                              y2: "5.9167",
                            },
                          },
                          [
                            n("stop", {
                              attrs: { offset: "0", "stop-color": "#d6b07f" },
                            }),
                            n("stop", {
                              attrs: { offset: "1", "stop-color": "#82624f" },
                            }),
                          ],
                          1
                        ),
                        n("path", {
                          attrs: {
                            fill: "url(#c)",
                            d: "M5.5 3h.831L3.057 9.269l.887.463L7.459 3h44.396l3.503 6.633.885-.467L52.986 3h.713l4.659 8.833.885-.467L54.302 2h-1.844l-1.056-2H7.897L6.853 2H4.9l-4.942 9.265.883.471L5.5 3zm3.003-2h42.295l.528 1H7.981l.522-1z",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    471: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(186),
        c = n(9);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var f = {
          name: "Footer",
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? l(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : l(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(c.b)({
              footer_qd: "global/getGlobal",
              screen: "global/getScreen",
            })
          ),
          components: { logo: o.default },
          data: function () {
            return { logo: n(186) };
          },
        },
        d = f,
        h = (n(677), n(2)),
        component = Object(h.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "l-footer" }, [
              n(
                "div",
                {
                  staticClass:
                    "container u-relative u-z-back u-flex u-flex-column u-flex-row--xl u-align-items-center u-justify-content-between ",
                },
                [
                  n("div", { staticClass: "l-footer__start" }, [
                    n(
                      "ul",
                      {
                        staticClass:
                          "l-footer__start__list u-flex u-flex-column u-flex-row--xl u-align-items-center ",
                      },
                      [
                        n("li", { staticClass: "l-footer__logo u-relative " }, [
                          n(
                            "a",
                            {
                              attrs: {
                                href: "https://www.quanticdream.com/",
                                target: "_blank",
                              },
                            },
                            [
                              n("logo", {
                                staticClass: "l-footer-game__logo",
                                attrs: { alt: "Quantic dream Logo" },
                              }),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass:
                              "l-footer__start__items u-flex u-flex-wrap u-justify-content-center",
                          },
                          t._l(t.footer_qd.content.qd_links, function (link) {
                            return n(
                              "li",
                              {
                                key: link.name,
                                staticClass: "l-footer__start__item",
                              },
                              [
                                n(
                                  t.$storyblok.ctaTag(link.link),
                                  {
                                    tag: "component",
                                    staticClass: "t-link",
                                    attrs: {
                                      href: t.$storyblok.url(link.link),
                                      to: t.localePath(
                                        t.$storyblok.url(link.link)
                                      ),
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    n(
                                      "span",
                                      { staticClass: "u-inline-block" },
                                      [t._v(t._s(link.name))]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "l-footer__end u-flex u-flex-column u-flex-row--xl",
                    },
                    [
                      n("p", [t._v("Follow us on:")]),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "l-footer__end__items u-flex " },
                        t._l(
                          t.footer_qd.content.add_socials_networks,
                          function (t) {
                            return n(
                              "a",
                              {
                                key: t.social_network_icon,
                                attrs: {
                                  href: t.social_network_url.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                              },
                              [
                                n("base-use-svg", {
                                  staticClass: "u-flex u-align-items-center",
                                  attrs: {
                                    id: t.social_network_icon,
                                    size: "lg",
                                    typeColor: "",
                                  },
                                }),
                              ],
                              1
                            );
                          }
                        ),
                        0
                      ),
                    ]
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { BaseUseSvg: n(66).default });
    },
    472: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(58),
        o = n.n(r),
        c = {
          name: "Sidebar",
          props: {
            id: { type: String, required: !0 },
            position: { type: String, required: !1, default: "left" },
          },
          data: function () {
            return { isOpen: !1 };
          },
          mounted: function () {
            (this.open = o()(this.open, 500, !0)),
              (this.close = o()(this.close, 500, !0)),
              this.bindEvents();
          },
          destroyed: function () {
            this.unbindEvents();
          },
          methods: {
            bindEvents: function () {
              var t = this;
              this.$eventHub.$on("sidebar:open", function (e) {
                e === t.id ? t.open() : e !== t.id && t.isOpen && t.close();
              }),
                this.$eventHub.$on("sidebar:close", function (e) {
                  if (null == e) return t.close(), !1;
                  e === t.id && t.close();
                });
            },
            unbindEvents: function () {
              this.$eventHub.$off("sidebar:open"),
                this.$eventHub.$off("sidebar:close");
            },
            open: function () {
              (this.isOpen = !0), this.$fixScroll.fix();
            },
            close: function () {
              (this.isOpen = !1), this.$fixScroll.unFix();
            },
            onClick: function () {
              this.$eventHub.$emit("sidebar:close", this.id);
            },
          },
        },
        l = (n(678), n(679), n(2)),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "l-sidebar",
                class: [{ "is-open": t.isOpen }, "l-sidebar--" + t.position],
              },
              [
                n("div", {
                  staticClass: "l-sidebar__overlay u-cursor-pointer",
                  on: { click: t.onClick },
                }),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "l-sidebar__wrapper u-flex u-justify-content-center u-align-items-center",
                  },
                  [
                    n(
                      "button",
                      { staticClass: "l-sidebar__close u-cursor-pointer" },
                      [
                        n("base-use-svg", {
                          attrs: { id: "close", size: "md" },
                          nativeOn: {
                            click: function (e) {
                              return t.onClick.apply(null, arguments);
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "l-sidebar__inner u-flex u-align-items-center u-justify-content-center",
                      },
                      [t._t("default")],
                      2
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "48556841",
          null
        );
      e.default = component.exports;
      installComponents(component, { BaseUseSvg: n(66).default });
    },
    473: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "ImgBackground",
          props: {
            position: { type: String, required: !0 },
            image: { type: Array, required: !0 },
          },
        },
        o = (n(680), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.image.length
              ? n(
                  "div",
                  {
                    staticClass: "c-img-background",
                    class: "c-img-background--" + t.position,
                  },
                  [
                    n(
                      "div",
                      { staticClass: "u-full-width" },
                      [
                        n("base-picture", {
                          attrs: {
                            src: {
                              desktop: t.image[0].image_desktop.filename,
                              mobile:
                                t.image[0].image_mobile.filename ||
                                t.image[0].image_desktop.filename,
                            },
                            alt: t.image[0].image_desktop.alt,
                            "crop-id": "background_img",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                )
              : t._e();
          },
          [],
          !1,
          null,
          "7c1e6af0",
          null
        );
      e.default = component.exports;
      installComponents(component, { BasePicture: n(57).default });
    },
    474: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "Nav",
          props: { isSidebar: { type: Boolean, required: !1, default: !1 } },
          data: function () {
            return { isLangOpen: !1 };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(o.b)({
              header: "global/getGlobal",
              screen: "global/getScreen",
            })
          ),
          mounted: function () {
            var t = this;
            this.$eventHub.$on("sidebar:close", function (e) {
              (null != e && "locales" !== e) || (t.isLangOpen = !1);
            });
          },
          methods: {
            unbindEvents: function () {
              this.$eventHub.$off("sidebar:close");
            },
            openLangSwitcher: function () {
              this.$eventHub.$emit("sidebar:open", "locales"),
                (this.isLangOpen = !0);
            },
            openMenu: function () {
              this.$eventHub.$emit("sidebar:open", "menu"),
                (this.isMenuOpen = !0);
            },
          },
        },
        f = l,
        d = (n(681), n(2)),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "ul",
              {
                staticClass:
                  "l-nav u-flex u-flex-column u-flex-row--lg u-align-items-start",
              },
              [
                "mobile" === t.screen || "tablet" === t.screen
                  ? n(
                      "li",
                      { staticClass: "l-nav__item u-block u-none--lg" },
                      [
                        n(
                          "nuxt-link",
                          {
                            staticClass: "t-link  t-link--gradient",
                            attrs: {
                              to: t.localePath("/"),
                              "data-text": t.$t("nav.home"),
                            },
                          },
                          [
                            n(
                              "span",
                              {
                                staticClass: "u-inline-block t-text-gradient ",
                              },
                              [t._v(t._s(t.$t("nav.home")))]
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t._l(t.header.content.header_links, function (link) {
                  return n(
                    "li",
                    { key: link.name, staticClass: "l-nav__item" },
                    [
                      n(
                        t.$storyblok.ctaTag(link.link),
                        {
                          tag: "component",
                          staticClass:
                            "t-text-gradient t-link  t-link--gradient ",
                          attrs: {
                            href: t.$storyblok.url(link.link),
                            to: t.localePath(t.$storyblok.url(link.link)),
                            "data-text": link.name,
                          },
                        },
                        [
                          n(
                            "span",
                            { staticClass: "u-inline-block t-text-gradient " },
                            [t._v(t._s(link.name))]
                          ),
                        ]
                      ),
                    ],
                    1
                  );
                }),
                t._v(" "),
                n(
                  "li",
                  {
                    staticClass:
                      "l-nav__item l-nav__item--lang u-flex u-align-items-center",
                    on: { click: t.openLangSwitcher },
                  },
                  [
                    n(
                      "button",
                      {
                        staticClass: "t-text-hover t-link t-link--gradient",
                        attrs: {
                          "data-text": t.$t("sidebar.lang." + t.$i18n.locale),
                        },
                      },
                      [
                        n("span", { staticClass: "u-inline-block" }, [
                          t._v(t._s(t.$t("sidebar.lang." + t.$i18n.locale))),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "span",
                      { staticClass: "u-inline-block u-relative" },
                      [
                        n("base-use-svg", {
                          staticClass: "u-cursor-pointer",
                          attrs: { id: "chevron" },
                        }),
                        t._v(" "),
                        n("base-use-svg", {
                          staticClass: "u-cursor-pointer",
                          attrs: { id: "chevron" },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "1e4287ba",
          null
        );
      e.default = component.exports;
      installComponents(component, { BaseUseSvg: n(66).default });
    },
    475: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "Newsletter",
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)({ newsletter: "global/getGlobal" })),
        },
        f = l,
        d = n(2),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { staticClass: "container" }, [
              n(
                "div",
                {
                  staticClass:
                    "row u-justify-content-center u-align-items-center",
                },
                [
                  n(
                    "div",
                    { staticClass: "col-md-10 col-lg-8 u-center" },
                    [
                      n("newsletter-form", {
                        attrs: {
                          title: t.newsletter.content.title,
                          paragraph: t.newsletter.content.paragraph,
                          "form-source": t.newsletter.content.form_source,
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { NewsletterForm: n(130).default });
    },
    476: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "Video",
          mixins: [n(74).a],
          props: {
            blok: { type: Object, required: !0 },
            downloadLinks: {
              type: Array,
              required: !1,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { isImgLoaded: !1 };
          },
        },
        o = (n(682), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass:
                  "container l-strate c-strate-video c-strate-video--bg | js-strate-video",
              },
              [
                t.blok.image_background && t.blok.image_background.length
                  ? n("div", { staticClass: "c-strate-video__bg" }, [
                      n("div", { staticClass: "u-full-width" }, [
                        n(
                          "figure",
                          { staticClass: "u-full-width" },
                          [
                            t.blok.video_background &&
                            t.blok.video_background.length
                              ? n("base-video", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.video_background[0],
                                      expression: "blok.video_background[0]",
                                    },
                                  ],
                                  attrs: {
                                    src: {
                                      desktop:
                                        t.blok.video_background[0].video
                                          .filename,
                                      mobile:
                                        t.blok.video_background[0].video_mobile
                                          .filename ||
                                        t.blok.video_background[0].video
                                          .filename,
                                    },
                                  },
                                })
                              : n("base-picture", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.image_background[0],
                                      expression: "blok.image_background[0]",
                                    },
                                  ],
                                  attrs: {
                                    src: {
                                      desktop:
                                        t.blok.image_background[0].image_desktop
                                          .filename,
                                      mobile:
                                        t.blok.image_background[0].image_mobile
                                          .filename ||
                                        t.blok.image_background[0].image_desktop
                                          .filename,
                                    },
                                    alt: t.blok.image_background[0]
                                      .image_desktop.alt,
                                    "crop-id": "strate_video_bg",
                                  },
                                }),
                          ],
                          1
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(" "),
                n("client-only", [
                  n(
                    "div",
                    { staticClass: "row u-justify-content-center u-z-back" },
                    [
                      t.blok.title.length || t.blok.paragraph.length
                        ? n(
                            "div",
                            {
                              directives: [
                                {
                                  name: "editable",
                                  rawName: "v-editable",
                                  value: t.blok.title[0],
                                  expression: "blok.title[0]",
                                },
                              ],
                              staticClass:
                                "col-7 c-strate-video__content u-center",
                            },
                            [
                              t.blok.title.length
                                ? n("p", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.title[0],
                                        expression: "blok.title[0]",
                                      },
                                    ],
                                    staticClass:
                                      "c-strate-video__title t-title",
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$storyblok.richtext(
                                          t.blok.title[0].text
                                        )
                                      ),
                                    },
                                  })
                                : t._e(),
                              t._v(" "),
                              t.blok.paragraph.length
                                ? n("p", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.paragraph[0],
                                        expression: "blok.paragraph[0]",
                                      },
                                    ],
                                    staticClass:
                                      "c-strate-video__paragraph t-text",
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$storyblok.richtext(
                                          t.blok.paragraph[0].text
                                        )
                                      ),
                                    },
                                  })
                                : t._e(),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      n("core-aov", [
                        n(
                          "div",
                          {
                            staticClass:
                              "col-12 c-strate-video__youtube-wrapper t-fade-in",
                          },
                          [
                            n(
                              "core-youtube-player",
                              {
                                staticClass: "t-border",
                                class: { "is-img-loaded": t.isImgLoaded },
                                attrs: { "youtube-id": t.blok.video_id },
                              },
                              [
                                t.blok.image.length
                                  ? n("base-picture", {
                                      directives: [
                                        {
                                          name: "editable",
                                          rawName: "v-editable",
                                          value: t.blok.image[0],
                                          expression: "blok.image[0]",
                                        },
                                      ],
                                      attrs: {
                                        src: {
                                          desktop:
                                            t.blok.image[0].image_desktop
                                              .filename,
                                          tablet:
                                            t.blok.image[0].image_mobile
                                              .filename ||
                                            t.blok.image[0].image_desktop
                                              .filename,
                                        },
                                        alt: t.blok.image[0].image_desktop.alt,
                                        "crop-id": t.blok.component,
                                      },
                                      on: {
                                        "img:loaded": function (e) {
                                          t.isImgLoaded = !0;
                                        },
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      t.downloadLinks.length
                        ? n(
                            "div",
                            {
                              staticClass:
                                " col-12 c-strate-video__download-links u-marg-t-sm u-flex u-justify-content-center u-align-items-center t-text",
                            },
                            [
                              n("core-aov", [
                                n(
                                  "p",
                                  {
                                    staticClass:
                                      "t-translate-down t-fade-in u-marg-r-xxs",
                                  },
                                  [
                                    t._v(
                                      t._s(t.$t("strate_video.download_label"))
                                    ),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              n(
                                "ul",
                                { staticClass: "u-flex u-align-items-center" },
                                [
                                  t._l(t.downloadLinks, function (link, e) {
                                    return [
                                      n(
                                        "core-aov",
                                        { attrs: { delay: 50 * e } },
                                        [
                                          n(
                                            "li",
                                            {
                                              key: link.name,
                                              staticClass:
                                                "t-translate-down t-fade-in",
                                            },
                                            [
                                              n(
                                                "button",
                                                {
                                                  staticClass:
                                                    "t-text-hover u-bold",
                                                  attrs: {
                                                    "data-text": link.name,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      !t.filesDownloaded.includes(
                                                        link.link.cached_url
                                                      ) &&
                                                        t.setDownload({
                                                          file: link.link
                                                            .cached_url,
                                                          target: e.target,
                                                          autoDownload: !0,
                                                        });
                                                    },
                                                  },
                                                },
                                                [
                                                  n("span", [
                                                    t._v(t._s(link.name)),
                                                  ]),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e !== t.downloadLinks.length - 1
                                        ? n("span", [t._v("  -  ")])
                                        : t._e(),
                                    ];
                                  }),
                                ],
                                2
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "ff86c330",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BaseVideo: n(131).default,
        BasePicture: n(57).default,
        CoreYoutubePlayer: n(129).default,
      });
    },
    477: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "Img",
          mixins: [n(62).a],
          props: { blok: { type: Object, required: !0 } },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)({ screen: "global/getScreen" })),
          methods: {
            setPosition: function () {
              if (!this.blok.position || !this.blok.position.length)
                return "u-justify-content-start--lg u-left--lg";
              switch (this.blok.position[0].position) {
                case "start":
                  return "u-justify-content-start--lg u-left--lg";
                case "center":
                  return "u-justify-content-center--lg u-center--lg";
                case "end":
                  return "u-justify-content-end--lg u-right--lg";
                case "bloc_end-text_left":
                  return "u-justify-content-end--lg u-left--lg";
              }
            },
          },
        },
        f = l,
        d = (n(683), n(2)),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass: "container l-strate c-strate-img",
              },
              [
                n("div", { staticClass: "row" }, [
                  n("div", { staticClass: "col-12" }, [
                    t.blok.image.length
                      ? n(
                          "div",
                          {
                            staticClass:
                              "u-box-media u-relative u-marg-b-md u-marg-b-0--lg ",
                          },
                          [
                            n(
                              "core-aov",
                              [
                                n(
                                  t.blok.image_frame ? "base-mask" : "div",
                                  {
                                    tag: "component",
                                    staticClass: "t-fade-in",
                                  },
                                  [
                                    n("base-picture", {
                                      directives: [
                                        {
                                          name: "editable",
                                          rawName: "v-editable",
                                          value: t.blok.image[0],
                                          expression: "blok.image[0]",
                                        },
                                      ],
                                      attrs: {
                                        src: {
                                          desktop:
                                            t.blok.image[0].image_desktop
                                              .filename,
                                          tablet:
                                            t.blok.image[0].image_mobile
                                              .filename ||
                                            t.blok.image[0].image_desktop
                                              .filename,
                                        },
                                        alt: t.blok.image[0].image_desktop.alt,
                                        "crop-id": t.blok.component,
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "row no-gutters u-center u-pad-r-xs--lg u-pad-l-xs--lg",
                        class: [
                          t.setPosition(),
                          {
                            "u-wrapper-panel":
                              "desktop" === t.screen ||
                              "tabletLand" === t.screen,
                          },
                        ],
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass:
                              "col-lg-6 col-xxl-5 c-strate-img__content",
                            class: [
                              t.blok.position && t.blok.position.length
                                ? "u-" +
                                  t.blok.position[0].position_text +
                                  "--lg"
                                : "u-left--lg",
                              {
                                "is-end":
                                  !!t.blok.position &&
                                  t.blok.position.length &&
                                  "end" === t.blok.position[0].position,
                              },
                            ],
                          },
                          [
                            n("client-only", [
                              n(
                                "div",
                                { staticClass: "u-relative u-z-back" },
                                [
                                  t.blok.title.length
                                    ? n("core-aov", [
                                        n("div", {
                                          directives: [
                                            {
                                              name: "editable",
                                              rawName: "v-editable",
                                              value: t.blok.title[0],
                                              expression: "blok.title[0]",
                                            },
                                          ],
                                          staticClass:
                                            "t-title t-translate-down t-fade-in",
                                          domProps: {
                                            innerHTML: t._s(
                                              t.$storyblok.richtext(
                                                t.blok.title[0].text
                                              )
                                            ),
                                          },
                                        }),
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  t.blok.paragraph.length
                                    ? n("core-aov", { attrs: { delay: 200 } }, [
                                        n("div", {
                                          directives: [
                                            {
                                              name: "editable",
                                              rawName: "v-editable",
                                              value: t.blok.paragraph[0],
                                              expression: "blok.paragraph[0]",
                                            },
                                          ],
                                          staticClass:
                                            "c-strate-img__desc t-text t-translate-down t-fade-in",
                                          domProps: {
                                            innerHTML: t._s(
                                              t.$storyblok.richtext(
                                                t.blok.paragraph[0].text
                                              )
                                            ),
                                          },
                                        }),
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  t.blok.cta.length
                                    ? n(
                                        "core-aov",
                                        { attrs: { delay: 250 } },
                                        [
                                          n("base-cta", {
                                            directives: [
                                              {
                                                name: "editable",
                                                rawName: "v-editable",
                                                value: t.blok.cta[0],
                                                expression: "blok.cta[0]",
                                              },
                                            ],
                                            staticClass:
                                              "c-strate-img__cta t-translate-down t-fade-in",
                                            attrs: {
                                              tag: t.$storyblok.ctaTag(
                                                t.blok.cta[0].link
                                              ),
                                              name: t.blok.cta[0].name,
                                              link: t.blok.cta[0].link,
                                              "is-download":
                                                "asset" ===
                                                t.blok.cta[0].link.linktype,
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                t.blok.cta &&
                                                  t.blok.cta[0]
                                                    .custom_actions &&
                                                  t.onClickCta();
                                              },
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ]),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "089532b0",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BasePicture: n(57).default,
        BaseCta: n(56).default,
      });
    },
    478: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "ImageFull",
          mixins: [n(62).a],
          props: { blok: { type: Object, required: !0 } },
          methods: {
            setPosition: function () {
              if (!this.blok.position || !this.blok.position.length)
                return "u-justify-content-start--lg u-left--lg";
              switch (this.blok.position[0].position) {
                case "start":
                  return "u-justify-content-start--lg u-left--lg";
                case "center":
                  return "u-justify-content-center--lg u-center--lg";
                case "end":
                  return "u-justify-content-end--lg u-right--lg";
              }
            },
          },
        },
        o = (n(684), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass:
                  "l-strate c-strate-full-image u-full-width u-relative",
              },
              [
                n(
                  "core-aov",
                  [
                    n(
                      "base-mask",
                      { staticClass: "t-fade-in", attrs: { "is-full": !0 } },
                      [
                        t.blok.video && t.blok.video.length
                          ? n("base-video", {
                              directives: [
                                {
                                  name: "editable",
                                  rawName: "v-editable",
                                  value: t.blok.video[0],
                                  expression: "blok.video[0]",
                                },
                              ],
                              attrs: {
                                src: {
                                  desktop: t.blok.video[0].video.filename,
                                  mobile:
                                    t.blok.video[0].video_mobile.filename ||
                                    t.blok.video[0].video.filename,
                                },
                              },
                            })
                          : n("base-picture", {
                              directives: [
                                {
                                  name: "editable",
                                  rawName: "v-editable",
                                  value: t.blok.image[0],
                                  expression: "blok.image[0]",
                                },
                              ],
                              attrs: {
                                src: {
                                  desktop:
                                    t.blok.image[0].image_desktop.filename,
                                  tablet:
                                    t.blok.image[0].image_mobile.filename ||
                                    t.blok.image[0].image_desktop.filename,
                                },
                                alt: t.blok.image[0].image_desktop.alt,
                                "crop-id": t.blok.component,
                              },
                            }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "u-wrapper-panel u-flex u-align-items-center u-justify-content-center u-center",
                    class: t.setPosition(),
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "c-strate-full-image__inner",
                        class: [
                          t.blok.position && t.blok.position.length
                            ? "u-" + t.blok.position[0].position_text + "--lg"
                            : "u-left--lg",
                        ],
                      },
                      [
                        n(
                          "client-only",
                          [
                            t.blok.title.length
                              ? n("core-aov", [
                                  n("div", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.title[0],
                                        expression: "blok.title[0]",
                                      },
                                    ],
                                    staticClass:
                                      "t-title t-translate-down t-fade-in",
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$storyblok.richtext(
                                          t.blok.title[0].text
                                        )
                                      ),
                                    },
                                  }),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.blok.paragraph.length
                              ? n("core-aov", { attrs: { delay: 200 } }, [
                                  n("div", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.paragraph[0],
                                        expression: "blok.paragraph[0]",
                                      },
                                    ],
                                    staticClass:
                                      "c-strate-img__desc t-text t-translate-down t-fade-in",
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$storyblok.richtext(
                                          t.blok.paragraph[0].text
                                        )
                                      ),
                                    },
                                  }),
                                ])
                              : t._e(),
                          ],
                          1
                        ),
                        t._v(" "),
                        t.blok.cta.length
                          ? n(
                              "core-aov",
                              { attrs: { delay: 250 } },
                              [
                                n("base-cta", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.cta[0],
                                      expression: "blok.cta[0]",
                                    },
                                  ],
                                  staticClass:
                                    "c-strate-full-image__inner__cta t-translate-down t-fade-in",
                                  attrs: {
                                    tag: t.$storyblok.ctaTag(
                                      t.blok.cta[0].link
                                    ),
                                    name: t.blok.cta[0].name,
                                    link: t.blok.cta[0].link,
                                    "is-download":
                                      "asset" === t.blok.cta[0].link.linktype,
                                  },
                                  nativeOn: {
                                    click: function (e) {
                                      t.blok.cta &&
                                        t.blok.cta[0].custom_actions &&
                                        t.onClickCta();
                                    },
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "48491919",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BaseVideo: n(131).default,
        BasePicture: n(57).default,
        BaseMask: n(182).default,
        BaseCta: n(56).default,
      });
    },
    479: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "ContentText",
          mixins: [n(62).a],
          props: { blok: { type: Object, required: !0 } },
        },
        o = (n(685), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass: "container l-strate c-strate-content-text",
              },
              [
                n("client-only", [
                  n(
                    "div",
                    { staticClass: "row u-flex u-justify-content-center" },
                    [
                      n(
                        "div",
                        { staticClass: "col-lg-8  u-center" },
                        [
                          t.blok.title.length
                            ? n("core-aov", [
                                n("p", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.title[0],
                                      expression: "blok.title[0]",
                                    },
                                  ],
                                  staticClass:
                                    "t-title t-translate-down t-fade-in",
                                  domProps: {
                                    innerHTML: t._s(
                                      t.$storyblok.richtext(
                                        t.blok.title[0].text
                                      )
                                    ),
                                  },
                                }),
                              ])
                            : t._e(),
                          t._v(" "),
                          n(
                            "div",
                            { staticClass: "c-strate-content-text__text" },
                            [
                              t.blok.paragraph.length
                                ? n("core-aov", { attrs: { delay: 200 } }, [
                                    n("p", {
                                      directives: [
                                        {
                                          name: "editable",
                                          rawName: "v-editable",
                                          value: t.blok.paragraph[0],
                                          expression: "blok.paragraph[0]",
                                        },
                                      ],
                                      staticClass:
                                        "t-text t-translate-down t-fade-in",
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$storyblok.richtext(
                                            t.blok.paragraph[0].text
                                          )
                                        ),
                                      },
                                    }),
                                  ])
                                : t._e(),
                            ],
                            1
                          ),
                          t._v(" "),
                          t.blok.cta.length
                            ? n(
                                "core-aov",
                                { attrs: { delay: 250 } },
                                [
                                  n("base-cta", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.cta[0],
                                        expression: "blok.cta[0]",
                                      },
                                    ],
                                    staticClass:
                                      "c-strate-content-text__link t-translate-down t-fade-in",
                                    attrs: {
                                      tag: t.$storyblok.ctaTag(
                                        t.blok.cta[0].link
                                      ),
                                      name: t.blok.cta[0].name,
                                      link: t.blok.cta[0].link,
                                      "is-download":
                                        "asset" === t.blok.cta[0].link.linktype,
                                    },
                                    nativeOn: {
                                      click: function (e) {
                                        t.blok.cta &&
                                          t.blok.cta[0].custom_actions &&
                                          t.onClickCta();
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ],
                        1
                      ),
                    ]
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "0f69bd22",
          null
        );
      e.default = component.exports;
      installComponents(component, { BaseCta: n(56).default });
    },
    480: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "ImageText",
          mixins: [n(62).a],
          props: { blok: { type: Object, required: !0 } },
        },
        o = (n(686), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass: "container l-strate c-strate-image-text",
              },
              [
                n(
                  "div",
                  {
                    staticClass:
                      "c-strate-image-text__row row no-gutters u-justify-content-between u-align-items-center",
                    class: { "u-flex-row-reverse": t.blok.inverted },
                  },
                  [
                    n("div", { staticClass: "col-lg-5" }, [
                      n(
                        "div",
                        {
                          staticClass:
                            "c-strate-image-text__img-wrapper u-marg-b-md u-marg-b-0--lg",
                        },
                        [
                          n(
                            "core-aov",
                            [
                              n(
                                t.blok.image_frame ? "base-mask" : "div",
                                {
                                  tag: "component",
                                  staticClass: "t-fade-in",
                                  attrs: { "is-square": !0 },
                                },
                                [
                                  n("base-picture", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.image[0],
                                        expression: "blok.image[0]",
                                      },
                                    ],
                                    attrs: {
                                      src: {
                                        desktop:
                                          t.blok.image[0].image_desktop
                                            .filename,
                                        tablet:
                                          t.blok.image[0].image_mobile
                                            .filename ||
                                          t.blok.image[0].image_desktop
                                            .filename,
                                      },
                                      alt: t.blok.image[0].image_desktop.alt,
                                      "crop-id": t.blok.component,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("client-only", [
                      n(
                        "div",
                        { staticClass: "col-lg-6 u-center" },
                        [
                          t.blok.title.length
                            ? n("core-aov", [
                                n("div", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.title[0],
                                      expression: "blok.title[0]",
                                    },
                                  ],
                                  staticClass:
                                    " c-strate-image-text__title t-title t-translate-down t-fade-in",
                                  domProps: {
                                    innerHTML: t._s(
                                      t.$storyblok.richtext(
                                        t.blok.title[0].text
                                      )
                                    ),
                                  },
                                }),
                              ])
                            : t._e(),
                          t._v(" "),
                          t.blok.paragraph.length
                            ? n("core-aov", { attrs: { delay: 200 } }, [
                                n("div", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.paragraph[0],
                                      expression: "blok.paragraph[0]",
                                    },
                                  ],
                                  staticClass:
                                    "c-strate-image-text__paragraph t-text  t-translate-down t-fade-in",
                                  domProps: {
                                    innerHTML: t._s(
                                      t.$storyblok.richtext(
                                        t.blok.paragraph[0].text
                                      )
                                    ),
                                  },
                                }),
                              ])
                            : t._e(),
                          t._v(" "),
                          t.blok.cta.length
                            ? n(
                                "core-aov",
                                { attrs: { delay: 250 } },
                                [
                                  n("base-cta", {
                                    directives: [
                                      {
                                        name: "editable",
                                        rawName: "v-editable",
                                        value: t.blok.cta[0],
                                        expression: "blok.cta[0]",
                                      },
                                    ],
                                    staticClass:
                                      "c-strate-image-text__cta t-translate-down t-fade-in",
                                    attrs: {
                                      tag: t.$storyblok.ctaTag(
                                        t.blok.cta[0].link
                                      ),
                                      name: t.blok.cta[0].name,
                                      link: t.blok.cta[0].link,
                                      "is-download":
                                        "asset" === t.blok.cta[0].link.linktype,
                                    },
                                    nativeOn: {
                                      click: function (e) {
                                        t.blok.cta &&
                                          t.blok.cta[0].custom_actions &&
                                          t.onClickCta();
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "1c7575cf",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BasePicture: n(57).default,
        BaseCta: n(56).default,
      });
    },
    481: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "HomepageCover",
          props: { blok: { type: Object, required: !0 } },
        },
        o = (n(687), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass: "c-strate-homepage-cover u-relative u-z-back",
              },
              [
                r("div", { staticClass: "container" }, [
                  r("div", { staticClass: "c-strate-homepage-cover__inner" }, [
                    r("div", { staticClass: "c-strate-homepage-cover__logo" }, [
                      r("img", {
                        staticClass: "lazyload",
                        attrs: {
                          "data-srcset":
                            n(127) +
                            " 918w, " +
                            n(370) +
                            " 459w, " +
                            n(371) +
                            " 276w, " +
                            n(372) +
                            " 138w",
                          "data-sizes": "auto",
                          "data-src": n(127),
                        },
                      }),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "5eaa4a28",
          null
        );
      e.default = component.exports;
    },
    482: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = n(9);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "Cover",
          mixins: [n(62).a],
          props: { blok: { type: Object, required: !0 } },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)({ screen: "global/getScreen" })),
        },
        f = l,
        d = (n(688), n(2)),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                staticClass: "c-strate-cover ",
              },
              [
                t.blok.image.length
                  ? n("div", { staticClass: "c-strate-cover__background" }, [
                      n(
                        "div",
                        {
                          staticClass:
                            "c-strate-cover__background__inner u-full-width",
                        },
                        [
                          n("base-picture", {
                            attrs: {
                              src: {
                                desktop: t.blok.image[0].image_desktop.filename,
                                tablet:
                                  t.blok.image[0].image_mobile.filename ||
                                  t.blok.image[0].image_desktop.filename,
                              },
                              alt: t.blok.image[0].image_desktop.alt,
                              "crop-id": t.blok.component,
                            },
                          }),
                        ],
                        1
                      ),
                    ])
                  : t._e(),
                t._v(" "),
                n("div", { staticClass: "container c-strate-cover__inner" }, [
                  n(
                    "div",
                    {
                      staticClass:
                        "col-xl-8 col-lg-10  u-center c-strate-cover__inner__text",
                    },
                    [
                      n(
                        "client-only",
                        [
                          t.blok.title.length
                            ? n("core-aov", [
                                n("div", {
                                  directives: [
                                    {
                                      name: "editable",
                                      rawName: "v-editable",
                                      value: t.blok.title[0],
                                      expression: "blok.title[0]",
                                    },
                                  ],
                                  staticClass:
                                    "t-title c-strate-cover__inner__title t-text-gradient t-translate-down t-fade-in",
                                  domProps: {
                                    innerHTML: t._s(
                                      t.$storyblok.richtext(
                                        t.blok.title[0].text
                                      )
                                    ),
                                  },
                                }),
                              ])
                            : t._e(),
                          t._v(" "),
                          n(
                            "div",
                            { staticClass: "c-strate-cover__text" },
                            [
                              t.blok.paragraph.length
                                ? n("core-aov", { attrs: { delay: 200 } }, [
                                    n("p", {
                                      directives: [
                                        {
                                          name: "editable",
                                          rawName: "v-editable",
                                          value: t.blok.paragraph[0],
                                          expression: "blok.paragraph[0]",
                                        },
                                      ],
                                      staticClass:
                                        "t-text c-strate-cover__inner__paragraph t-translate-down t-fade-in",
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$storyblok.richtext(
                                            t.blok.paragraph[0].text
                                          )
                                        ),
                                      },
                                    }),
                                  ])
                                : t._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      t.blok.cta.length
                        ? n(
                            "core-aov",
                            { attrs: { delay: 250 } },
                            [
                              n("base-cta", {
                                directives: [
                                  {
                                    name: "editable",
                                    rawName: "v-editable",
                                    value: t.blok.cta[0],
                                    expression: "blok.cta[0]",
                                  },
                                ],
                                staticClass:
                                  "c-strate-cover__inner__cta t-translate-down t-fade-in",
                                attrs: {
                                  tag: t.$storyblok.ctaTag(t.blok.cta[0].link),
                                  name: t.blok.cta[0].name,
                                  link: t.blok.cta[0].link,
                                  "is-download":
                                    "asset" === t.blok.cta[0].link.linktype,
                                },
                                nativeOn: {
                                  click: function (e) {
                                    t.blok.cta &&
                                      t.blok.cta[0].custom_actions &&
                                      t.onClickCta();
                                  },
                                },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "f0194cf4",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BasePicture: n(57).default,
        BaseCta: n(56).default,
      });
    },
    483: function (t, e, n) {
      "use strict";
      n.r(e);
      n(31), n(33);
      var r = {
          name: "ImageText",
          props: { blok: { type: Object, required: !0 } },
          data: function () {
            return { listMedias: [], isLoaded: !1 };
          },
          created: function () {
            this.listMedias = this.listMedias.concat(
              this.blok.list_medias.slice(0, 9)
            );
          },
          methods: {
            setCol: function () {
              switch (this.blok.list_medias.length) {
                case 1:
                  return "col-lg-12";
                case 2:
                  return "col-lg-6";
                default:
                  return "col-lg-4";
              }
            },
            setCropId: function () {
              switch (this.blok.list_medias.length) {
                case 1:
                  return "strate_video";
                case 2:
                  return "media_col_2";
                default:
                  return "media_col_3";
              }
            },
            onLoadmore: function () {
              var t = this.blok.list_medias.slice(
                this.listMedias.length,
                this.listMedias.length + 6
              );
              (this.listMedias = this.listMedias.concat(t)),
                (this.isLoaded =
                  this.listMedias.length === this.blok.list_medias.length);
            },
          },
        },
        o = (n(689), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n(
                "section",
                {
                  directives: [
                    {
                      name: "editable",
                      rawName: "v-editable",
                      value: t.blok,
                      expression: "blok",
                    },
                  ],
                  staticClass: "container l-strate c-strate-media",
                },
                [
                  n("core-aov", [
                    n("div", { staticClass: "row c-strate-media__title-row" }, [
                      n(
                        "div",
                        {
                          staticClass:
                            "col-12 u-center u-flex u-justify-content-between u-align-items-center",
                        },
                        [
                          n("span", {
                            staticClass:
                              "c-strate-media__title-row__hr c-strate-media__title-row__hr--before",
                          }),
                          t._v(" "),
                          n("core-aov", [
                            n(
                              "p",
                              {
                                staticClass:
                                  "t-title t-fade-in u-inline-block u-pad-l-xxs u-pad-l-sm--lg u-pad-r-xxs u-pad-r-sm--lg",
                              },
                              [t._v(t._s(t.blok.title))]
                            ),
                          ]),
                          t._v(" "),
                          n("span", {
                            staticClass:
                              "c-strate-media__title-row__hr c-strate-media__title-row__hr--after",
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "row" },
                    [
                      t._l(t.listMedias, function (e) {
                        return n(
                          "div",
                          {
                            staticClass: "c-strate-media__item",
                            class: t.setCol(),
                          },
                          [
                            n(
                              "core-aov",
                              [
                                n("media-card", {
                                  staticClass: "t-translate-down t-fade-in",
                                  attrs: {
                                    datas: e,
                                    "crop-id": t.setCropId(),
                                    "is-video": !!e.video_id,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        );
                      }),
                      t._v(" "),
                      t.blok.list_medias.length > 9 && !t.isLoaded
                        ? n(
                            "div",
                            { staticClass: "col-12 u-center" },
                            [
                              n(
                                "core-aov",
                                [
                                  n("base-cta", {
                                    staticClass: "t-translate-down t-fade-in",
                                    attrs: {
                                      tag: "button",
                                      name: t.$t("loadmore.label"),
                                      "is-download": !1,
                                    },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.onLoadmore.apply(
                                          null,
                                          arguments
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    2
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "a88a82ea",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        MediaCard: n(185).default,
        BaseCta: n(56).default,
      });
    },
    484: function (t, e, n) {
      "use strict";
      n.r(e);
      n(126), n(72);
      var r = n(137),
        o = n.n(r),
        c = {
          name: "CoreAov",
          abstract: !0,
          render: function () {
            try {
              return this.$slots.default[0];
            } catch (t) {
              throw new Error(
                "IntersectionObserver.vue can only render one, and exactly one child component."
              );
            }
            return null;
          },
          props: {
            isStagger: { type: Boolean, required: !1, default: !0 },
            delay: { type: Number, required: !1, default: 0 },
            classActive: { type: String, required: !1, default: "is-visible" },
            removeOnLeave: { type: Boolean, required: !1, default: !1 },
            options: {
              type: Object,
              required: !1,
              default: function () {
                return { rootMargin: "5%" };
              },
            },
          },
          data: function () {
            return {
              isVisible: !1,
              stagger: 0,
              maxStagger: 400,
              staggerDelay: 0,
            };
          },
          mounted: function () {
            this.$eventHub.$on("onResize", this.onResize),
              this.onResize(),
              this.$nextTick(this.bindObserver());
          },
          destroyed: function () {
            this.$eventHub.$off("onResize"),
              this.$observer.unobserve(
                this.$slots.default[0].elm,
                this.options
              );
          },
          methods: {
            bindObserver: function () {
              this.$observer.observe(this.$slots.default[0].elm, this.options),
                this.$observer.addEnterCallback(
                  this.$slots.default[0].elm,
                  this.onVisible
                ),
                this.$observer.addExitCallback(
                  this.$slots.default[0].elm,
                  this.onLeave
                );
            },
            onVisible: function () {
              var t = this;
              (this.isVisible = !0),
                setTimeout(function () {
                  t.$slots.default[0].elm.classList.add(t.classActive);
                }, this.staggerDelay + this.delay),
                this.removeOnLeave ||
                  this.$observer.unobserve(
                    this.$slots.default[0].elm,
                    this.options
                  ),
                this.$emit("onVisible");
            },
            onLeave: function () {
              this.$slots.default[0].elm.classList.remove(this.classActive),
                this.$emit("onLeave");
            },
            onResize: function () {
              if (!this.isVisible && this.isStagger) {
                var t = o()(this.$slots.default[0].elm).left;
                this.staggerDelay = (this.maxStagger * t) / this.$device.width;
              }
            },
          },
        },
        l = n(2),
        component = Object(l.a)(c, undefined, undefined, !1, null, null, null);
      e.default = component.exports;
    },
    487: function (t, e, n) {
      n(20),
        n(165),
        n(55),
        (t.exports = function () {
          var t = {};
          if (location.search.length)
            for (
              var e, n = location.search.substr(1).split("&"), i = 0;
              i < n.length;
              i++
            )
              (e = n[i].split("=")).length > 1 &&
                (t[decodeURIComponent(e[0])] = decodeURIComponent(e[1]));
          return t;
        });
    },
    488: function (t, e, n) {
      n(489), (t.exports = n(490));
    },
    490: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n(33), n(48), n(14), n(45), n(49);
          var e = n(40),
            r = n(11),
            o =
              (n(148),
              n(498),
              n(506),
              n(507),
              n(52),
              n(34),
              n(7),
              n(16),
              n(18),
              n(15),
              n(50),
              n(53),
              n(31),
              n(54),
              n(20),
              n(27),
              n(28),
              n(72),
              n(1)),
            c = n(392),
            l = n(102),
            f = n(4),
            d = n(67),
            h = n(462),
            v = n(138);
          function m(t, e) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return y(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e);
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              c = !0,
              l = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (l = !0), (o = t);
              },
              f: function () {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          }
          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          o.a.__nuxt__fetch__mixin__ ||
            (o.a.mixin(h.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(v.a.name, v.a),
            o.a.component("NLink", v.a),
            t.fetch || (t.fetch = c.a);
          var _,
            x,
            w = [],
            k = window.__NUXT__ || {},
            j = k.config || {};
          j._app && (n.p = Object(f.v)(j._app.cdnURL, j._app.assetsPath)),
            Object.assign(o.a.config, { silent: !0, performance: !1 });
          var O = o.a.config.errorHandler || console.error;
          function C(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", e, n) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                o = n ? Object(f.g)(n) : [],
                c = Math.max(t.length, o.length),
                l = [],
                d = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e[t];
                    }),
                    l.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              d(i);
            return l;
          }
          function $(t, e, n) {
            return P.apply(this, arguments);
          }
          function P() {
            return (P = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  l,
                  d,
                  h = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(_.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(f.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(f.r)(e, function (t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return h._diffQuery[t];
                                    })
                                  : "function" == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (d = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(d))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 23:
                          this.error({ statusCode: l, message: d }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            r();
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function S(t, e) {
            return k.serverRendered && e && Object(f.b)(t, e), (t._Ctor = t), t;
          }
          function L(t) {
            return Object(f.d)(
              t,
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = S(
                                Object(f.s)(e),
                                k.data ? k.data[c] : null
                              )),
                              (r.components[o] = l),
                              t.abrupt("return", l)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function E(t, e, n) {
            var r = this,
              o = ["nuxti18n"],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(f.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function (t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof l.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t,
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(f.o)(o, e);
          }
          function z(t, e, n) {
            return R.apply(this, arguments);
          }
          function R() {
            return (
              (R = Object(r.a)(
                regeneratorRuntime.mark(function t(e, n, o) {
                  var c,
                    l,
                    h,
                    v,
                    y,
                    x,
                    k,
                    j,
                    O,
                    $,
                    P,
                    S,
                    L,
                    z,
                    R,
                    D = this;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !1 !== this._routeChanged ||
                              !1 !== this._paramChanged ||
                              !1 !== this._queryChanged
                            ) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 2:
                            return (
                              !1,
                              e === n
                                ? ((w = []), !0)
                                : ((c = []),
                                  (w = Object(f.g)(n, c).map(function (t, i) {
                                    return Object(f.c)(n.matched[c[i]].path)(
                                      n.params
                                    );
                                  }))),
                              (l = !1),
                              (h = function (path) {
                                n.path === path.path &&
                                  D.$loading.finish &&
                                  D.$loading.finish(),
                                  n.path !== path.path &&
                                    D.$loading.pause &&
                                    D.$loading.pause(),
                                  l || ((l = !0), o(path));
                              }),
                              (t.next = 8),
                              Object(f.t)(_, {
                                route: e,
                                from: n,
                                next: h.bind(this),
                              })
                            );
                          case 8:
                            if (
                              ((this._dateLastError = _.nuxt.dateErr),
                              (this._hadError = Boolean(_.nuxt.err)),
                              (v = []),
                              (y = Object(f.g)(e, v)).length)
                            ) {
                              t.next = 27;
                              break;
                            }
                            return (t.next = 15), E.call(this, y, _.context);
                          case 15:
                            if (!l) {
                              t.next = 17;
                              break;
                            }
                            return t.abrupt("return");
                          case 17:
                            return (
                              (x = (d.a.options || d.a).layout),
                              (t.next = 20),
                              this.loadLayout(
                                "function" == typeof x
                                  ? x.call(d.a, _.context)
                                  : x
                              )
                            );
                          case 20:
                            return (
                              (k = t.sent),
                              (t.next = 23),
                              E.call(this, y, _.context, k)
                            );
                          case 23:
                            if (!l) {
                              t.next = 25;
                              break;
                            }
                            return t.abrupt("return");
                          case 25:
                            return (
                              _.context.error({
                                statusCode: 404,
                                message: "This page could not be found",
                              }),
                              t.abrupt("return", o())
                            );
                          case 27:
                            return (
                              y.forEach(function (t) {
                                t._Ctor &&
                                  t._Ctor.options &&
                                  ((t.options.asyncData =
                                    t._Ctor.options.asyncData),
                                  (t.options.fetch = t._Ctor.options.fetch));
                              }),
                              this.setTransitions(C(y, e, n)),
                              (t.prev = 29),
                              (t.next = 32),
                              E.call(this, y, _.context)
                            );
                          case 32:
                            if (!l) {
                              t.next = 34;
                              break;
                            }
                            return t.abrupt("return");
                          case 34:
                            if (!_.context._errored) {
                              t.next = 36;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 36:
                            return (
                              "function" == typeof (j = y[0].options.layout) &&
                                (j = j(_.context)),
                              (t.next = 40),
                              this.loadLayout(j)
                            );
                          case 40:
                            return (
                              (j = t.sent),
                              (t.next = 43),
                              E.call(this, y, _.context, j)
                            );
                          case 43:
                            if (!l) {
                              t.next = 45;
                              break;
                            }
                            return t.abrupt("return");
                          case 45:
                            if (!_.context._errored) {
                              t.next = 47;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 47:
                            (O = !0),
                              (t.prev = 48),
                              ($ = m(y)),
                              (t.prev = 50),
                              $.s();
                          case 52:
                            if ((P = $.n()).done) {
                              t.next = 63;
                              break;
                            }
                            if (
                              "function" ==
                              typeof (S = P.value).options.validate
                            ) {
                              t.next = 56;
                              break;
                            }
                            return t.abrupt("continue", 61);
                          case 56:
                            return (t.next = 58), S.options.validate(_.context);
                          case 58:
                            if ((O = t.sent)) {
                              t.next = 61;
                              break;
                            }
                            return t.abrupt("break", 63);
                          case 61:
                            t.next = 52;
                            break;
                          case 63:
                            t.next = 68;
                            break;
                          case 65:
                            (t.prev = 65), (t.t0 = t.catch(50)), $.e(t.t0);
                          case 68:
                            return (t.prev = 68), $.f(), t.finish(68);
                          case 71:
                            t.next = 77;
                            break;
                          case 73:
                            return (
                              (t.prev = 73),
                              (t.t1 = t.catch(48)),
                              this.error({
                                statusCode: t.t1.statusCode || "500",
                                message: t.t1.message,
                              }),
                              t.abrupt("return", o())
                            );
                          case 77:
                            if (O) {
                              t.next = 80;
                              break;
                            }
                            return (
                              this.error({
                                statusCode: 404,
                                message: "This page could not be found",
                              }),
                              t.abrupt("return", o())
                            );
                          case 80:
                            return (
                              (t.next = 82),
                              Promise.all(
                                y.map(
                                  (function () {
                                    var t = Object(r.a)(
                                      regeneratorRuntime.mark(function t(r, i) {
                                        var o, c, l, d, h, m, y, x, p;
                                        return regeneratorRuntime.wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (
                                                    ((r._path = Object(f.c)(
                                                      e.matched[v[i]].path
                                                    )(e.params)),
                                                    (r._dataRefresh = !1),
                                                    (o = r._path !== w[i]),
                                                    D._routeChanged && o
                                                      ? (r._dataRefresh = !0)
                                                      : D._paramChanged && o
                                                      ? ((c =
                                                          r.options.watchParam),
                                                        (r._dataRefresh =
                                                          !1 !== c))
                                                      : D._queryChanged &&
                                                        (!0 ===
                                                        (l =
                                                          r.options.watchQuery)
                                                          ? (r._dataRefresh =
                                                              !0)
                                                          : Array.isArray(l)
                                                          ? (r._dataRefresh =
                                                              l.some(function (
                                                                t
                                                              ) {
                                                                return D
                                                                  ._diffQuery[
                                                                  t
                                                                ];
                                                              }))
                                                          : "function" ==
                                                              typeof l &&
                                                            (L ||
                                                              (L = Object(f.h)(
                                                                e
                                                              )),
                                                            (r._dataRefresh =
                                                              l.apply(L[i], [
                                                                e.query,
                                                                n.query,
                                                              ])))),
                                                    D._hadError ||
                                                      !D._isMounted ||
                                                      r._dataRefresh)
                                                  ) {
                                                    t.next = 6;
                                                    break;
                                                  }
                                                  return t.abrupt("return");
                                                case 6:
                                                  return (
                                                    (d = []),
                                                    (h =
                                                      r.options.asyncData &&
                                                      "function" ==
                                                        typeof r.options
                                                          .asyncData),
                                                    (m =
                                                      Boolean(
                                                        r.options.fetch
                                                      ) &&
                                                      r.options.fetch.length),
                                                    (y = h && m ? 30 : 45),
                                                    h &&
                                                      ((x = Object(f.q)(
                                                        r.options.asyncData,
                                                        _.context
                                                      )).then(function (t) {
                                                        Object(f.b)(r, t),
                                                          D.$loading.increase &&
                                                            D.$loading.increase(
                                                              y
                                                            );
                                                      }),
                                                      d.push(x)),
                                                    (D.$loading.manual =
                                                      !1 === r.options.loading),
                                                    m &&
                                                      (((p = r.options.fetch(
                                                        _.context
                                                      )) &&
                                                        (p instanceof Promise ||
                                                          "function" ==
                                                            typeof p.then)) ||
                                                        (p =
                                                          Promise.resolve(p)),
                                                      p.then(function (t) {
                                                        D.$loading.increase &&
                                                          D.$loading.increase(
                                                            y
                                                          );
                                                      }),
                                                      d.push(p)),
                                                    t.abrupt(
                                                      "return",
                                                      Promise.all(d)
                                                    )
                                                  );
                                                case 14:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t
                                        );
                                      })
                                    );
                                    return function (e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              )
                            );
                          case 82:
                            l ||
                              (this.$loading.finish &&
                                !this.$loading.manual &&
                                this.$loading.finish(),
                              o()),
                              (t.next = 99);
                            break;
                          case 85:
                            if (
                              ((t.prev = 85),
                              (t.t2 = t.catch(29)),
                              "ERR_REDIRECT" !== (z = t.t2 || {}).message)
                            ) {
                              t.next = 90;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              this.$nuxt.$emit("routeChanged", e, n, z)
                            );
                          case 90:
                            return (
                              (w = []),
                              Object(f.k)(z),
                              "function" ==
                                typeof (R = (d.a.options || d.a).layout) &&
                                (R = R(_.context)),
                              (t.next = 96),
                              this.loadLayout(R)
                            );
                          case 96:
                            this.error(z),
                              this.$nuxt.$emit("routeChanged", e, n, z),
                              o();
                          case 99:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [
                      [29, 85],
                      [48, 73],
                      [50, 65, 68, 71],
                    ]
                  );
                })
              )),
              R.apply(this, arguments)
            );
          }
          function D(t, n) {
            Object(f.d)(t, function (t, n, r, c) {
              return (
                "object" !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              );
            });
          }
          function M(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (d.a.options || d.a).layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(_.context)), this.setLayout(n);
          }
          function A(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function T(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(f.h)(t),
                c = Object(f.g)(t),
                l = !1;
              o.a.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.a.set(t.$data, n, e[n]);
                    l = !0;
                  }
                }),
                  l &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  A(n);
              });
            }
          }
          function B(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              x.afterEach(function (e, n) {
                o.a.nextTick(function () {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function H() {
            return (H = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, l, d;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (_ = e.app),
                          (x = e.router),
                          e.store,
                          (n = new o.a(_)),
                          (r = k.layout || "default"),
                          (t.next = 7),
                          n.loadLayout(r)
                        );
                      case 7:
                        return (
                          n.setLayout(r),
                          (c = function () {
                            n.$mount("#__nuxt"),
                              x.afterEach(D),
                              x.afterEach(M.bind(n)),
                              x.afterEach(T.bind(n)),
                              o.a.nextTick(function () {
                                B(n);
                              });
                          }),
                          (t.next = 11),
                          Promise.all(L(_.context.route))
                        );
                      case 11:
                        if (
                          ((l = t.sent),
                          (n.setTransitions =
                            n.$options.nuxt.setTransitions.bind(n)),
                          l.length &&
                            (n.setTransitions(C(l, x.currentRoute)),
                            (w = x.currentRoute.matched.map(function (t) {
                              return Object(f.c)(t.path)(x.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          k.error && n.error(k.error),
                          x.beforeEach($.bind(n)),
                          x.beforeEach(z.bind(n)),
                          !k.serverRendered ||
                            !Object(f.n)(k.routePath, n.context.route.path))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return t.abrupt("return", c());
                      case 20:
                        return (
                          (d = function () {
                            D(x.currentRoute, x.currentRoute),
                              M.call(n, x.currentRoute),
                              A(n),
                              c();
                          }),
                          (t.next = 23),
                          new Promise(function (t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 23:
                        z.call(
                          n,
                          x.currentRoute,
                          x.currentRoute,
                          function (path) {
                            if (path) {
                              var t = x.afterEach(function (e, n) {
                                t(), d();
                              });
                              x.push(path, void 0, function (t) {
                                t && O(t);
                              });
                            } else d();
                          }
                        );
                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(d.b)(null, k.config)
            .then(function (t) {
              return H.apply(this, arguments);
            })
            .catch(O);
        }.call(this, n(59));
    },
    510: function (t, e, n) {
      (function (e) {
        t.exports = function (t, n, r) {
          var o = t.headers.host,
            c = t.url,
            l = e.env.FORCE_DOMAIN;
          return 1 == !!l && o !== l
            ? (n.writeHead(301, { Location: "https://" + l + c }), n.end())
            : r();
        };
      }.call(this, n(161)));
    },
    511: function (t, e) {
      t.exports = function (t, e, n) {
        e.setHeader("Cache-Control", "public, max-age=120"), n();
      };
    },
    518: function (t, e, n) {
      "use strict";
      n(227);
    },
    519: function (t, e, n) {
      "use strict";
      n(228);
    },
    520: function (t, e, n) {
      "use strict";
      n(229);
    },
    521: function (t, e, n) {},
    523: function (t, e, n) {
      "use strict";
      n(230);
    },
    524: function (t, e, n) {
      "use strict";
      n(231);
    },
    527: function (t, e, n) {
      var map = {
        "./af.json": 528,
        "./am.json": 529,
        "./ar.json": 530,
        "./az.json": 531,
        "./be.json": 532,
        "./bg.json": 533,
        "./bn.json": 534,
        "./bs.json": 535,
        "./ca.json": 536,
        "./cs.json": 537,
        "./cy.json": 538,
        "./da.json": 539,
        "./de.json": 540,
        "./dv.json": 541,
        "./el.json": 542,
        "./en.json": 543,
        "./es.json": 544,
        "./et.json": 545,
        "./eu.json": 546,
        "./fa.json": 547,
        "./fi.json": 548,
        "./fr.json": 549,
        "./gl.json": 550,
        "./ha.json": 551,
        "./he.json": 552,
        "./hi.json": 553,
        "./hr.json": 554,
        "./hu.json": 555,
        "./hy.json": 556,
        "./id.json": 557,
        "./is.json": 558,
        "./it.json": 559,
        "./ja.json": 560,
        "./ka.json": 561,
        "./kk.json": 562,
        "./km.json": 563,
        "./ko.json": 564,
        "./ku.json": 565,
        "./ky.json": 566,
        "./lt.json": 567,
        "./lv.json": 568,
        "./mk.json": 569,
        "./ml.json": 570,
        "./mn.json": 571,
        "./ms.json": 572,
        "./nb.json": 573,
        "./nl.json": 574,
        "./nn.json": 575,
        "./no.json": 576,
        "./pl.json": 577,
        "./ps.json": 578,
        "./pt.json": 579,
        "./ro.json": 580,
        "./ru.json": 581,
        "./sd.json": 582,
        "./sk.json": 583,
        "./sl.json": 584,
        "./so.json": 585,
        "./sq.json": 586,
        "./sr.json": 587,
        "./sv.json": 588,
        "./sw.json": 589,
        "./ta.json": 590,
        "./tg.json": 591,
        "./th.json": 592,
        "./tr.json": 593,
        "./tt.json": 594,
        "./ug.json": 595,
        "./uk.json": 596,
        "./ur.json": 597,
        "./uz.json": 598,
        "./vi.json": 599,
        "./zh.json": 600,
      };
      function r(t) {
        var e = o(t);
        return n(e);
      }
      function o(t) {
        if (!n.o(map, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[t];
      }
      (r.keys = function () {
        return Object.keys(map);
      }),
        (r.resolve = o),
        (t.exports = r),
        (r.id = 527);
    },
    56: function (t, e, n) {
      "use strict";
      n.r(e);
      n(20), n(51), n(7), n(73);
      var r = n(2),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              t._g(
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 212 47",
                    preserveAspectRatio: "none",
                  },
                },
                t.$listeners
              ),
              [
                n("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    fill: "#fff",
                    d: "M198 21l-1 1.999L198 25l7-2.001L198 21zM13 25l1-2.001L13 21l-7 1.999L13 25z",
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      component.options.__file = "static/svg/cta_arrows.svg";
      var o = {
          name: "Cta",
          components: { arrows: component.exports },
          props: {
            tag: { type: String, default: "button" },
            name: { type: String, required: !1, default: "" },
            link: { type: [Object, String], required: !1 },
            isDownload: { type: Boolean, required: !1, default: !1 },
          },
          data: function () {
            return { urlA: "test", urlB: "test" };
          },
          mounted: function () {
            (this.urlA = Math.random()
              .toString(36)
              .replace(/[^a-z]+/g, "")
              .substr(0, 5)),
              (this.urlB = Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substr(0, 5));
          },
        },
        c =
          (n(519),
          Object(r.a)(
            o,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                t.tag,
                {
                  tag: "component",
                  staticClass:
                    "c-cta u-justify-content-center u-align-items-center u-cursor-pointer",
                  attrs: {
                    href: t.$storyblok.url(t.link),
                    to: t.localePath(t.$storyblok.url(t.link)),
                    download: t.isDownload,
                  },
                },
                [
                  n(
                    "span",
                    {
                      staticClass: "c-cta__name",
                      attrs: { "data-text": t.name },
                    },
                    [
                      n("span", [
                        t._v("\n        " + t._s(t.name) + "\n      "),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  n(
                    "span",
                    { staticClass: "u-wrapper-panel u-pointer-none" },
                    [
                      n(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 212 47",
                            "xml:space": "preserve",
                            preserveAspectRatio: "none",
                          },
                        },
                        [
                          n(
                            "linearGradient",
                            {
                              attrs: {
                                id: t.urlA,
                                gradientUnits: "userSpaceOnUse",
                                x1: "15.247",
                                y1: "767.5",
                                x2: "196.052",
                                y2: "767.5",
                                gradientTransform: "translate(0 -744)",
                              },
                            },
                            [
                              n("stop", {
                                attrs: { offset: "0", "stop-color": "#d6b07f" },
                              }),
                              t._v(" "),
                              n("stop", {
                                attrs: { offset: "1", "stop-color": "#82624f" },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              fill: "none",
                              stroke: "url(#" + t.urlA + ")",
                              "stroke-miterlimit": "10",
                              d: "m195.8 32.5-4.7 14H20.2l-4.7-14m0-18 4.7-14h170.9l4.7 13.9",
                            },
                          }),
                          t._v(" "),
                          n(
                            "linearGradient",
                            {
                              attrs: {
                                id: t.urlB,
                                gradientUnits: "userSpaceOnUse",
                                x1: "12.245",
                                y1: "767.5",
                                x2: "199.053",
                                y2: "767.5",
                                gradientTransform: "translate(0 -744)",
                              },
                            },
                            [
                              n("stop", {
                                attrs: { offset: "0", "stop-color": "#d6b07f" },
                              }),
                              t._v(" "),
                              n("stop", {
                                attrs: { offset: "1", "stop-color": "#82624f" },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              fill: "none",
                              stroke: "url(#" + t.urlB + ")",
                              "stroke-miterlimit": "10",
                              d: "m12.5 16.5 4.8-14H194l4.8 14.1m0 13.9-4.7 14H17.2l-4.7-14.1",
                            },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      n("arrows"),
                    ],
                    1
                  ),
                ]
              );
            },
            [],
            !1,
            null,
            "02b3d290",
            null
          ));
      e.default = c.exports;
    },
    57: function (t, e, n) {
      "use strict";
      n.r(e);
      n(15), n(14), n(18), n(7), n(23), n(16), n(24);
      var r = n(5),
        o = (n(20), n(55), n(31), n(9));
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: "BasePicture",
          props: {
            src: { type: Object, required: !0 },
            cropId: { type: String, required: !0 },
            alt: { type: String, required: !0 },
            ratio: { type: String, required: !1, default: "" },
          },
          data: function () {
            return { viewBox: [0, 0] };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(o.b)({
              config: "global/getConfig",
              screen: "global/getScreen",
              isInEditor: "global/getIsInEditor",
            })
          ),
          mounted: function () {
            var t = this;
            document.addEventListener("lazyloaded", function (e) {
              t.$refs.img === e.target && t.$emit("img:loaded");
            }),
              (this.viewBox = "" !== this.ratio ? this.ratio.split("x") : "");
          },
          methods: {
            setSrcset: function (t) {
              var e = t.cropId,
                n = t.screen,
                r = t.isRetina,
                o = void 0 !== r && r;
              if (null == e || null == n)
                return (
                  console.error(
                    "At least one args is missing: cropId:"
                      .concat(e, ", screen: ")
                      .concat(n)
                  ),
                  !1
                );
              var c = this.src.desktop,
                l = o ? "retina" : "normal",
                f = this.config.bp[n],
                d = 0,
                h = null;
              for (var v in this.src)
                "desktop" !== v &&
                  ((d = Math.abs(f - this.config.bp[v])),
                  f <= this.config.bp[v] &&
                    (d <= h || null == h) &&
                    ((c = this.src[v]), (h = d)));
              return this.$storyblok.resize(c, this.config.crop[e][n][l]);
            },
          },
          watch: {
            screen: {
              handler: function (t) {
                "" === this.ratio &&
                  (this.viewBox =
                    null == t
                      ? this.config.crop[this.cropId].desktop.normal.split("x")
                      : this.config.crop[this.cropId][t].normal.split("x"));
              },
              immediate: !0,
            },
            src: function (t, e) {
              this.isInEditor &&
                (this.$refs.img.classList.remove("lazyload", "lazyloaded"),
                this.$refs.img.classList.add("lazyload"));
            },
          },
        },
        f = l,
        d = n(2),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "picture",
              { staticClass: "u-full-width u-full-height u-inline-block" },
              [
                t._l(t.config.crop[t.cropId], function (e, r) {
                  return n("source", {
                    key: r,
                    attrs: {
                      "data-srcset":
                        t.setSrcset({ screen: r, cropId: t.cropId }) +
                        ", " +
                        t.setSrcset({
                          screen: r,
                          cropId: t.cropId,
                          isRetina: !0,
                        }) +
                        " 2x",
                      media:
                        null == t.config.bp[r]
                          ? ""
                          : "(max-width: " + t.config.bp[r] + "px)",
                    },
                  });
                }),
                t._v(" "),
                n("img", {
                  ref: "img",
                  staticClass: "lazyload u-fit",
                  attrs: {
                    src:
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 " +
                      t.viewBox[0] +
                      " " +
                      t.viewBox[1] +
                      "'%3E%3C/svg%3E",
                    "data-srcset": t.$storyblok.replace(t.src.desktop),
                    alt: t.alt + " - Star wars Eclipse",
                  },
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "28f843b2",
          null
        );
      e.default = component.exports;
    },
    58: function (t, e, n) {
      n(31),
        n(72),
        (t.exports = function (t, e) {
          var n,
            r = this,
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function () {
            for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
              l[f] = arguments[f];
            var d = t.bind.apply(t, [r].concat(l));
            clearTimeout(n), o && !n && d();
            var h = o
              ? function () {
                  n = null;
                }
              : d;
            n = setTimeout(h, e);
          };
        });
    },
    601: function (t, e, n) {
      var map = {
        "./af": 232,
        "./af.js": 232,
        "./ar": 233,
        "./ar-dz": 234,
        "./ar-dz.js": 234,
        "./ar-sa": 235,
        "./ar-sa.js": 235,
        "./ar.js": 233,
        "./az": 236,
        "./az.js": 236,
        "./be": 237,
        "./be.js": 237,
        "./bg": 238,
        "./bg.js": 238,
        "./bm": 239,
        "./bm.js": 239,
        "./bn": 240,
        "./bn.js": 240,
        "./ca": 241,
        "./ca.js": 241,
        "./cs": 242,
        "./cs.js": 242,
        "./cy": 243,
        "./cy.js": 243,
        "./da": 244,
        "./da.js": 244,
        "./de": 245,
        "./de.js": 245,
        "./el": 246,
        "./el.js": 246,
        "./en": 247,
        "./en.js": 247,
        "./eo": 248,
        "./eo.js": 248,
        "./es": 249,
        "./es.js": 249,
        "./es/af": 250,
        "./es/af.js": 250,
        "./es/ar": 251,
        "./es/ar-dz": 252,
        "./es/ar-dz.js": 252,
        "./es/ar-sa": 253,
        "./es/ar-sa.js": 253,
        "./es/ar.js": 251,
        "./es/az": 254,
        "./es/az.js": 254,
        "./es/be": 255,
        "./es/be.js": 255,
        "./es/bg": 256,
        "./es/bg.js": 256,
        "./es/bm": 257,
        "./es/bm.js": 257,
        "./es/bn": 258,
        "./es/bn.js": 258,
        "./es/ca": 259,
        "./es/ca.js": 259,
        "./es/cs": 260,
        "./es/cs.js": 260,
        "./es/cy": 261,
        "./es/cy.js": 261,
        "./es/da": 262,
        "./es/da.js": 262,
        "./es/de": 263,
        "./es/de.js": 263,
        "./es/el": 264,
        "./es/el.js": 264,
        "./es/en": 265,
        "./es/en.js": 265,
        "./es/eo": 266,
        "./es/eo.js": 266,
        "./es/es": 267,
        "./es/es.js": 267,
        "./es/et": 268,
        "./es/et.js": 268,
        "./es/fi": 269,
        "./es/fi.js": 269,
        "./es/fr": 270,
        "./es/fr.js": 270,
        "./es/gl": 271,
        "./es/gl.js": 271,
        "./es/gu": 272,
        "./es/gu.js": 272,
        "./es/he": 273,
        "./es/he.js": 273,
        "./es/hi": 274,
        "./es/hi.js": 274,
        "./es/hr": 275,
        "./es/hr.js": 275,
        "./es/hu": 276,
        "./es/hu.js": 276,
        "./es/id": 277,
        "./es/id.js": 277,
        "./es/is": 278,
        "./es/is.js": 278,
        "./es/it": 279,
        "./es/it.js": 279,
        "./es/ja": 280,
        "./es/ja.js": 280,
        "./es/ka": 281,
        "./es/ka.js": 281,
        "./es/kk": 282,
        "./es/kk.js": 282,
        "./es/ko": 283,
        "./es/ko.js": 283,
        "./es/lt": 284,
        "./es/lt.js": 284,
        "./es/lv": 285,
        "./es/lv.js": 285,
        "./es/mk": 286,
        "./es/mk.js": 286,
        "./es/ms": 287,
        "./es/ms.js": 287,
        "./es/nb": 288,
        "./es/nb.js": 288,
        "./es/nl": 289,
        "./es/nl-be": 290,
        "./es/nl-be.js": 290,
        "./es/nl.js": 289,
        "./es/pl": 291,
        "./es/pl.js": 291,
        "./es/pt": 292,
        "./es/pt-br": 293,
        "./es/pt-br.js": 293,
        "./es/pt.js": 292,
        "./es/ro": 294,
        "./es/ro.js": 294,
        "./es/ru": 295,
        "./es/ru.js": 295,
        "./es/sl": 296,
        "./es/sl.js": 296,
        "./es/sr": 297,
        "./es/sr.js": 297,
        "./es/sv": 298,
        "./es/sv.js": 298,
        "./es/ta": 299,
        "./es/ta.js": 299,
        "./es/te": 300,
        "./es/te.js": 300,
        "./es/th": 301,
        "./es/th.js": 301,
        "./es/tr": 302,
        "./es/tr.js": 302,
        "./es/ug-cn": 303,
        "./es/ug-cn.js": 303,
        "./es/uk": 304,
        "./es/uk.js": 304,
        "./es/vi": 305,
        "./es/vi.js": 305,
        "./es/zh-cn": 306,
        "./es/zh-cn.js": 306,
        "./es/zh-tw": 307,
        "./es/zh-tw.js": 307,
        "./et": 308,
        "./et.js": 308,
        "./fi": 309,
        "./fi.js": 309,
        "./fr": 310,
        "./fr.js": 310,
        "./gl": 311,
        "./gl.js": 311,
        "./gu": 312,
        "./gu.js": 312,
        "./he": 313,
        "./he.js": 313,
        "./hi": 314,
        "./hi.js": 314,
        "./hr": 315,
        "./hr.js": 315,
        "./hu": 316,
        "./hu.js": 316,
        "./id": 317,
        "./id.js": 317,
        "./is": 318,
        "./is.js": 318,
        "./it": 319,
        "./it.js": 319,
        "./ja": 320,
        "./ja.js": 320,
        "./ka": 321,
        "./ka.js": 321,
        "./kk": 322,
        "./kk.js": 322,
        "./ko": 323,
        "./ko.js": 323,
        "./lt": 324,
        "./lt.js": 324,
        "./lv": 325,
        "./lv.js": 325,
        "./mk": 326,
        "./mk.js": 326,
        "./ms": 327,
        "./ms.js": 327,
        "./nb": 328,
        "./nb.js": 328,
        "./nl": 329,
        "./nl-be": 330,
        "./nl-be.js": 330,
        "./nl.js": 329,
        "./pl": 331,
        "./pl.js": 331,
        "./pt": 332,
        "./pt-br": 333,
        "./pt-br.js": 333,
        "./pt.js": 332,
        "./ro": 334,
        "./ro.js": 334,
        "./ru": 335,
        "./ru.js": 335,
        "./sl": 336,
        "./sl.js": 336,
        "./sr": 337,
        "./sr.js": 337,
        "./sv": 338,
        "./sv.js": 338,
        "./ta": 339,
        "./ta.js": 339,
        "./te": 340,
        "./te.js": 340,
        "./th": 341,
        "./th.js": 341,
        "./tr": 342,
        "./tr.js": 342,
        "./ug-cn": 343,
        "./ug-cn.js": 343,
        "./uk": 344,
        "./uk.js": 344,
        "./vi": 345,
        "./vi.js": 345,
        "./zh-cn": 346,
        "./zh-cn.js": 346,
        "./zh-tw": 347,
        "./zh-tw.js": 347,
      };
      function r(t) {
        var e = o(t);
        return n(e);
      }
      function o(t) {
        if (!n.o(map, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[t];
      }
      (r.keys = function () {
        return Object.keys(map);
      }),
        (r.resolve = o),
        (t.exports = r),
        (r.id = 601);
    },
    602: function (t, e, n) {
      "use strict";
      n(348);
    },
    603: function (t, e, n) {
      "use strict";
      n(349);
    },
    604: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(11),
        o = (n(52), n(9)),
        c = n(172),
        l = n(176);
      e.default = function () {
        return new o.a.Store({
          actions: {
            nuxtServerInit: function (t, e) {
              return Object(r.a)(
                regeneratorRuntime.mark(function n() {
                  var r, o, c;
                  return regeneratorRuntime.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = t.dispatch),
                            (o = t.commit),
                            e.query._storyblok && o("global/setVersion", !0),
                            (c =
                              e.query._storyblok || e.isDev
                                ? "draft"
                                : "published"),
                            (n.next = 5),
                            o("global/setVersion", c)
                          );
                        case 5:
                          return (n.next = 7), r("global/loadCV");
                        case 7:
                          return (n.next = 9), o("global/setConfig");
                        case 9:
                          return (
                            (n.next = 11),
                            r("global/loadGlobal", { version: c })
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
          },
          namespaced: !0,
          modules: { global: c.default, press: l.default },
        });
      };
    },
    605: function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = {
          bp: { mobile: 767, tablet: 992, tabletLand: 1080 },
          ageGate: { 13: ["us", "gb"] },
          crop: {
            strate_image: {
              mobile: { normal: "345x345", retina: "690x690" },
              tablet: { normal: "657x657", retina: "1314x1314" },
              tabletLand: { normal: "866x376", retina: "1732x752" },
              desktop: { normal: "1232x526", retina: "1848x789" },
            },
            strate_image_full: {
              mobile: { normal: "345x345", retina: "690x690" },
              tablet: { normal: "657x657", retina: "1314x1314" },
              tabletLand: { normal: "1024x436", retina: "2048x872" },
              desktop: { normal: "1440x615", retina: "2160x922" },
            },
            strate_image_text: {
              mobile: { normal: "345x345", retina: "690x690" },
              tablet: { normal: "657x657", retina: "1314x1314" },
              tabletLand: { normal: "394x394", retina: "788x788" },
              desktop: { normal: "605x605", retina: "1210x1210" },
            },
            strate_video: {
              mobile: { normal: "345x195", retina: "690x390" },
              tablet: { normal: "657x383", retina: "1314x766" },
              tabletLand: { normal: "866x376", retina: "1732x752" },
              desktop: { normal: "1232x525", retina: "1848x788" },
            },
            strate_video_bg: {
              mobile: { normal: "375x400", retina: "750x800" },
              tablet: { normal: "768x421", retina: "1536x842" },
              tabletLand: { normal: "1024x561", retina: "2048x1122" },
              desktop: { normal: "1440x790", retina: "2160x1185" },
            },
            press: {
              mobile: { normal: "345x230", retina: "690x460" },
              tablet: { normal: "653x434", retina: "1306x868" },
              tabletLand: { normal: "200x136", retina: "400x270" },
              desktop: { normal: "293x195", retina: "586x390" },
            },
            background_img: {
              mobile: { normal: "375x0", retina: "750x0" },
              tablet: { normal: "768x0", retina: "1536x0" },
              tabletLand: { normal: "1024x0", retina: "2048x0" },
              desktop: { normal: "1440x0", retina: "20160x0" },
            },
            strate_cover: {
              mobile: { normal: "375x250", retina: "750x500" },
              tablet: { normal: "768x512", retina: "1536x1024" },
              tabletLand: { normal: "1024x496", retina: "2048x992" },
              desktop: { normal: "1440x760", retina: "2160x1140" },
            },
            media_col_2: {
              mobile: { normal: "345x230", retina: "690x460" },
              tablet: { normal: "653x434", retina: "1306x868" },
              tabletLand: { normal: "426x196", retina: "852x392" },
              desktop: { normal: "606x340", retina: "1212x680" },
            },
            media_col_3: {
              mobile: { normal: "345x230", retina: "690x460" },
              tablet: { normal: "653x434", retina: "1306x868" },
              tabletLand: { normal: "426x196", retina: "852x392" },
              desktop: { normal: "606x340", retina: "1212x680" },
            },
            media_col_1: {
              mobile: { normal: "345x230", retina: "690x460" },
              tablet: { normal: "653x434", retina: "1306x868" },
              tabletLand: { normal: "426x196", retina: "852x392" },
              desktop: { normal: "1148x650", retina: "1722x975" },
            },
            lightbox: {
              mobile: { normal: "375x0", retina: "750x0" },
              tablet: { normal: "768x0", retina: "1536x0" },
              tabletLand: { normal: "1024x0", retina: "2048x0" },
              desktop: { normal: "1440x0", retina: "2160x0" },
            },
          },
        });
    },
    62: function (t, e, n) {
      "use strict";
      var r = n(137),
        o = n.n(r);
      e.a = {
        data: function () {
          return { offsetTop: 0, elVideo: 0 };
        },
        mounted: function () {
          this.blok.cta &&
            this.blok.cta.length &&
            this.blok.cta[0].custom_actions &&
            "scrollTo" === this.blok.cta[0].custom_actions &&
            (this.elVideo = document.querySelector(".js-strate-video"));
        },
        destroyed: function () {
          this.$eventHub.$off("onResize");
        },
        methods: {
          onClickCta: function () {
            if (
              this.blok.cta &&
              this.blok.cta.length &&
              this.blok.cta[0].custom_actions
            )
              switch (this.blok.cta[0].custom_actions) {
                case "newsletter":
                  this.$eventHub.$emit("sidebar:open", "newsletter");
                  break;
                case "scrollTo":
                  this.scrollToStrateVideo();
              }
          },
          scrollToStrateVideo: function () {
            this.offsetTop = o()(this.elVideo).top;
            var t =
              "tablet" === this.$store.state.global.screen ||
              "mobile" === this.$store.state.global.screen
                ? 75
                : 105 * 1.1;
            window.scrollTo({
              top: this.offsetTop - t,
              left: 0,
              behavior: "smooth",
            });
          },
        },
      };
    },
    640: function (t, e) {},
    66: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "UseSvg",
          props: {
            typeColor: { type: String, required: !1, default: "fill" },
            color: { type: String, required: !1, default: "white" },
            size: { type: String, required: !1, default: "auto" },
            id: { type: String, required: !0 },
          },
        },
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "svg",
              { staticClass: "c-icon", class: "c-icon--" + t.size },
              [
                n("use", {
                  class: "u-" + t.typeColor + "-" + t.color,
                  attrs: { "xlink:href": "#icon-" + t.id, x: "0", y: "0" },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "4d68b2a2",
          null
        );
      e.default = component.exports;
    },
    661: function (t, e, n) {
      "use strict";
      n(361);
    },
    665: function (t, e, n) {
      "use strict";
      n(363);
    },
    67: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return kr;
      }),
        n.d(e, "a", function () {
          return D;
        });
      var r = {};
      n.r(r),
        n.d(r, "BaseCheckbox", function () {
          return st;
        }),
        n.d(r, "BaseCta", function () {
          return ct;
        }),
        n.d(r, "BaseInput", function () {
          return lt;
        }),
        n.d(r, "BaseInputDate", function () {
          return ut;
        }),
        n.d(r, "BaseMask", function () {
          return ft;
        }),
        n.d(r, "BasePicture", function () {
          return pt;
        }),
        n.d(r, "BaseRadio", function () {
          return ht;
        }),
        n.d(r, "BaseSelect", function () {
          return vt;
        }),
        n.d(r, "BaseUseSvg", function () {
          return mt;
        }),
        n.d(r, "BaseVideo", function () {
          return bt;
        }),
        n.d(r, "CommonFooter", function () {
          return gt;
        }),
        n.d(r, "CommonFooterGame", function () {
          return yt;
        }),
        n.d(r, "CommonHeader", function () {
          return _t;
        }),
        n.d(r, "CommonImgBackground", function () {
          return xt;
        }),
        n.d(r, "CommonNav", function () {
          return wt;
        }),
        n.d(r, "CommonNewsletter", function () {
          return kt;
        }),
        n.d(r, "CommonSidebar", function () {
          return jt;
        }),
        n.d(r, "CommonSvgIcons", function () {
          return Ot;
        }),
        n.d(r, "ContentTypeMedia", function () {
          return Ct;
        }),
        n.d(r, "ContentTypePage", function () {
          return $t;
        }),
        n.d(r, "StratesContentText", function () {
          return Pt;
        }),
        n.d(r, "StratesCover", function () {
          return St;
        }),
        n.d(r, "StratesHomepageCover", function () {
          return Lt;
        }),
        n.d(r, "StratesImage", function () {
          return Et;
        }),
        n.d(r, "StratesImageFull", function () {
          return zt;
        }),
        n.d(r, "StratesImageText", function () {
          return Rt;
        }),
        n.d(r, "StratesMedia", function () {
          return Dt;
        }),
        n.d(r, "StratesVideo", function () {
          return Mt;
        }),
        n.d(r, "CoreActiveOnVisible", function () {
          return At;
        }),
        n.d(r, "CoreLightBox", function () {
          return Tt;
        }),
        n.d(r, "CoreYoutubePlayer", function () {
          return Bt;
        }),
        n.d(r, "CoreStar", function () {
          return Ht;
        }),
        n.d(r, "CoreStarField", function () {
          return It;
        }),
        n.d(r, "LangSwitcher", function () {
          return Nt;
        }),
        n.d(r, "MediaCard", function () {
          return Vt;
        }),
        n.d(r, "NewsletterForm", function () {
          return qt;
        }),
        n.d(r, "PressCard", function () {
          return Ft;
        }),
        n.d(r, "PressFilters", function () {
          return Ut;
        });
      n(15), n(14), n(18), n(23), n(16), n(24);
      var o = n(11),
        c = n(5),
        l = (n(52), n(34), n(7), n(54), n(20), n(51), n(1)),
        f = n(9),
        d = n(104),
        h = n(187),
        v = n.n(h),
        m = n(88),
        y = n.n(m),
        _ = (n(27), n(28), n(188)),
        x = n(35),
        w = n(4);
      "scrollRestoration" in window.history &&
        (Object(w.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(w.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(w.u)("manual");
        }));
      function k(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function j(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? k(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : k(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var O = function () {};
      l.a.use(_.a);
      var C = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = t !== e;
          n
            ? (r = n)
            : o &&
              (function (t) {
                var e = Object(w.g)(t);
                if (1 === e.length) {
                  var n = e[0].options;
                  return !1 !== (void 0 === n ? {} : n).scrollToTop;
                }
                return e.some(function (t) {
                  var e = t.options;
                  return e && e.scrollToTop;
                });
              })(t) &&
              (r = { x: 0, y: 0 });
          var c = window.$nuxt;
          return (
            (!o || (t.path === e.path && t.hash !== e.hash)) &&
              c.$nextTick(function () {
                return c.$emit("triggerScroll");
              }),
            new Promise(function (e) {
              c.$once("triggerScroll", function () {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/media",
            component: function () {
              return Object(w.m)(n.e(3).then(n.bind(null, 705)));
            },
            name: "media___en",
          },
          {
            path: "/press",
            component: function () {
              return Object(w.m)(n.e(4).then(n.bind(null, 706)));
            },
            name: "press___en",
          },
          {
            path: "/*",
            component: function () {
              return Object(w.m)(n.e(2).then(n.bind(null, 704)));
            },
            name: "all___en",
          },
        ],
        fallback: !1,
      };
      function $(t, e) {
        var base = (e._app && e._app.basePath) || C.base,
          n = new _.a(j(j({}, C), {}, { base: base })),
          r = n.push;
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : O,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return r.call(this, t, e, n);
        };
        var o = n.resolve.bind(n);
        return (
          (n.resolve = function (t, e, n) {
            return "string" == typeof t && (t = Object(x.d)(t)), o(t, e, n);
          }),
          n
        );
      }
      var P = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                l = n.$nuxt.nuxt.transitions,
                f = n.$nuxt.nuxt.defaultTransition,
                d = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && d++, (n = n.$parent);
            data.nuxtChildDepth = d;
            var h = l[d] || f,
              v = {};
            S.forEach(function (t) {
              void 0 !== h[t] && (v[t] = h[t]);
            });
            var m = {};
            L.forEach(function (t) {
              "function" == typeof h[t] && (m[t] = h[t].bind(c));
            });
            var y = m.beforeEnter;
            if (
              ((m.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  y)
                )
                  return y.call(c, t);
              }),
              !1 === h.css)
            ) {
              var _ = m.leave;
              (!_ || _.length < 2) &&
                (m.leave = function (t, e) {
                  _ && _.call(c, t), c.$nextTick(e);
                });
            }
            var x = o("routerView", data);
            return (
              r.keepAlive &&
                (x = o("keep-alive", { props: r.keepAliveProps }, [x])),
              o("transition", { props: v, on: m }, [x])
            );
          },
        },
        S = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        L = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        E = { props: ["error"], layout: "error" },
        z = (n(518), n(2)),
        R = Object(z.a)(
          E,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { staticClass: "page404" }, [
              n(
                "div",
                {
                  staticClass:
                    " page404__container container u-flex u-justify-content-center u-flex-column u-align-center u-center",
                },
                [
                  n("p", { staticClass: "page404__title t-text-gradient " }, [
                    t._v(t._s(t.error.statusCode)),
                  ]),
                  t._v(" "),
                  n("p", { staticClass: "page404__paragraph t-text" }, [
                    t._v(
                      "\n      " + t._s(t.$t("errorPage.paragraph")) + "\n    "
                    ),
                  ]),
                  t._v(" "),
                  n("base-cta", {
                    staticClass: "page404__cta",
                    attrs: {
                      name: t.$t("errorPage.cta_label"),
                      tag: "nuxt-link",
                      to: t.localePath("/"),
                    },
                  }),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ),
        D = R.exports;
      installComponents(R, { BaseCta: n(56).default });
      var M = n(21),
        A =
          (n(73),
          {
            name: "Nuxt",
            components: { NuxtChild: P, NuxtError: D },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (t) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = t), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(w.c)(this.$route.matched[0].path)(this.$route.params)
                  );
                var t = Object(M.a)(this.$route.matched, 1)[0];
                if (!t) return this.$route.path;
                var e = t.components.default;
                if (e && e.options) {
                  var n = e.options;
                  if (n.key)
                    return "function" == typeof n.key
                      ? n.key(this.$route)
                      : n.key;
                }
                return /\/$/.test(t.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
            },
            render: function (t) {
              var e = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (e.errorFromNuxtError = !1);
                    }),
                    t("div", {}, [
                      t("h2", "An error occurred while showing the error page"),
                      t(
                        "p",
                        "Unfortunately an error occurred and while showing the error page another error occurred"
                      ),
                      t(
                        "p",
                        "Error details: ".concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (e.displayingNuxtError = !1);
                    }),
                    t(D, { props: { error: this.nuxt.err } }))
                : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props,
                  });
            },
          }),
        T =
          (n(33),
          n(48),
          n(45),
          n(49),
          n(72),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed,
                    },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                e
              );
            },
          }),
        B =
          (n(520),
          Object(z.a)(T, undefined, undefined, !1, null, null, null).exports),
        H = (n(521), n(522), n(58)),
        I = n.n(H);
      function N(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function V(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? N(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : N(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var F = {
          data: function () {
            return { date: new Date(), lastDate: new Date().getTime() };
          },
          computed: V(
            V(
              {},
              Object(f.b)({
                config: "global/getConfig",
                isHome: "global/getIsHome",
                header: "global/getGlobal",
                screen: "global/getScreen",
                slug: "global/getSlug",
              })
            ),
            {},
            {
              story: function () {
                var t = this.$i18n.locale;
                return this.$store.getters["global/getStory"](t, this.slug);
              },
            }
          ),
          created: function () {
            this._onResize = I()(this._onResize, 200);
          },
          mounted: function () {
            var t = this;
            this.bindEvents(),
              this._onResize(),
              this._onUpdate(),
              (window.getLocation = function () {
                return new Promise(function (e, n) {
                  t.$axios
                    .$post("https://pp.prjsnexy.fr/api/geo")
                    .then(function (t) {
                      return console.log(t), e(t), t;
                    });
                });
              });
          },
          methods: {
            bindEvents: function () {
              window.addEventListener("resize", this._onResize),
                document.addEventListener("scroll", this._onScroll);
            },
            _onResize: function () {
              this.$device._onResize(),
                this.setScreen(),
                this.$eventHub.$emit("onResize");
            },
            _onUpdate: function () {
              this.date = new Date();
              var t = this.date.getTime(),
                e = t - this.lastDate;
              this.$eventHub.$emit("onUpdate", e),
                (this.lastDate = t),
                requestAnimationFrame(this._onUpdate);
            },
            _onScroll: function () {
              this.$device._onScroll(),
                this.$eventHub.$emit("onScroll", this.$device.scroll);
            },
            setScreen: function () {
              var t = Object.values(this.config.bp),
                e = Object.keys(this.config.bp),
                n = "desktop";
              if (t.length)
                for (var i = 0; i < t.length; i++)
                  if (this.$device.width <= t[i]) {
                    n = e[i];
                    break;
                  }
              this.$store.dispatch("global/loadScreen", n);
            },
          },
          watch: {
            $route: function () {
              var t = this;
              this.$nextTick(function () {
                t.$eventHub.$emit("sidebar:close");
              });
            },
          },
        },
        U =
          (n(523),
          Object(z.a)(
            F,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "main",
                [
                  n("c-svg-icons"),
                  t._v(" "),
                  n("div", { staticClass: "u-sr-only" }, [
                    n("svg", { staticClass: "svg" }, [
                      n(
                        "clipPath",
                        {
                          attrs: {
                            id: "frame-clip",
                            clipPathUnits: "objectBoundingBox",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d: "m1,0.316,-0.003,-0.01 V0.015 h-0.003 V0.008 H0.621 l-0.004,-0.008 H0.383 l-0.004,0.008 H0.006 v0.008 H0.003 v0.291 l-0.003,0.01 v0.369 l0.003,0.01 v0.291 h0.003 v0.008 h0.373 l0.004,0.008 h0.234 l0.004,-0.008 h0.373 v-0.008 h0.003 V0.694 l0.003,-0.01 V0.316",
                            },
                          }),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    n(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 1233 526",
                        },
                      },
                      [
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "frame-clip-full",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                d: "M0,0.007 h0.396 l0.003,-0.007 h0.2 l0.004,0.007 H1 v0.987 H0.604 l-0.003,0.007 H0.4 l-0.004,-0.007 H0 V0.007",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("svg", [
                      n(
                        "clipPath",
                        {
                          attrs: {
                            id: "frame-clip-full-square",
                            clipPathUnits: "objectBoundingBox",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d: "m0.895,0.012,-0.014,-0.011 H0.12 l-0.013,0.011 H0 v0.979 h0.107 l0.013,0.011 h0.761 l0.013,-0.011 H1 V0.012 h-0.105",
                            },
                          }),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    n("svg", { staticClass: "svg" }, [
                      n(
                        "clipPath",
                        {
                          attrs: {
                            id: "frame-clip-square",
                            clipPathUnits: "objectBoundingBox",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d: "m1,0.341,-0.009,-0.009 V0.019 h-0.009 v-0.009 h-0.313 l-0.009,-0.009 h-0.319 l-0.009,0.009 H0.019 v0.009 h-0.009 V0.33 l-0.009,0.01 v0.319 l0.009,0.009 v0.316 h0.009 v0.009 h0.316 l0.009,0.009 h0.319 l0.007,-0.009 h0.314 v-0.009 h0.009 v-0.316 l0.009,-0.009",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "transition",
                    { attrs: { name: "fade" } },
                    [
                      t.isHome ||
                      t.header.content.image_header_hide.includes(t.story.uuid)
                        ? t._e()
                        : n("c-img-background", {
                            attrs: {
                              image:
                                t.header.content.image_header &&
                                t.header.content.image_header.length
                                  ? t.header.content.image_header
                                  : [],
                              position: "top",
                            },
                          }),
                    ],
                    1
                  ),
                  t._v(" "),
                  n("c-header"),
                  t._v(" "),
                  n("Nuxt", { staticClass: "c-page" }),
                  t._v(" "),
                  n("c-footer-game"),
                  t._v(" "),
                  n("c-app-footer"),
                  t._v(" "),
                  n("core-starfield"),
                  t._v(" "),
                  n(
                    "c-sidebar",
                    { attrs: { id: "locales" } },
                    [n("lang-switcher")],
                    1
                  ),
                  t._v(" "),
                  n(
                    "c-sidebar",
                    { attrs: { id: "menu" } },
                    [n("c-nav-menu", { attrs: { "is-sidebar": !0 } })],
                    1
                  ),
                  t._v(" "),
                  t.header.content.form_source
                    ? n(
                        "c-sidebar",
                        { attrs: { position: "right", id: "newsletter" } },
                        [
                          n(
                            "div",
                            { staticClass: "col-12" },
                            [
                              n("newsletter-form", {
                                staticClass: "u-center",
                                attrs: {
                                  title: t.header.content.title,
                                  paragraph: t.header.content.paragraph,
                                  "form-source": t.header.content.form_source,
                                  "is-sidebar": !0,
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      )
                    : t._e(),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          )),
        G = U.exports;
      function X(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return K(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return K(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function K(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      installComponents(U, {
        LangSwitcher: n(180).default,
        NewsletterForm: n(130).default,
      });
      var Q = { _default: Object(w.s)(G) },
        Y = {
          render: function (t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            l.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(w.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(w.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    r = X(
                                      Object(w.e)(e.$vnode.componentInstance)
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    r.e(t);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(w.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          l.a.set(e.$data, n, t[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(w.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var t = (D.options || D).layout;
                "function" == typeof t && (t = t(this.context)),
                  this.setLayout(t);
              }
            },
            setLayout: function (t) {
              return (
                (t && Q["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = Q["_" + t]),
                this.layout
              );
            },
            loadLayout: function (t) {
              return (
                (t && Q["_" + t]) || (t = "default"),
                Promise.resolve(Q["_" + t])
              );
            },
          },
          components: { NuxtLoading: B },
        };
      n(55), n(50);
      function W(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return J(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return J(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function J(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      l.a.use(f.a);
      var Z = ["state", "getters", "actions", "mutations"],
        tt = {};
      ((tt = (function (t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return "function" != typeof t && (t = Object.assign({}, t)), nt(t, e);
      })(n(604), "store/index.js")).modules = tt.modules || {}),
        at(n(176), "press/index.js"),
        at(n(172), "global/index.js"),
        at(n(174), "global/actions.js"),
        at(n(173), "global/getters.js"),
        at(n(175), "global/mutations.js"),
        at(n(178), "press/actions.js"),
        at(n(177), "press/getters.js"),
        at(n(179), "press/mutations.js");
      var et =
        tt instanceof Function
          ? tt
          : function () {
              return new f.a.Store(Object.assign({ strict: !1 }, tt));
            };
      function nt(t, e) {
        if (t.state && "function" != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function () {
              return n;
            },
          });
        }
        return t;
      }
      function at(t, e) {
        t = t.default || t;
        var n = e.replace(/\.(js|mjs)$/, "").split("/"),
          r = n[n.length - 1],
          o = "store/".concat(e);
        if (
          ((t =
            "state" === r
              ? (function (t, e) {
                  if ("function" != typeof t) {
                    console.warn(
                      "".concat(
                        e,
                        " should export a method that returns an object"
                      )
                    );
                    var n = Object.assign({}, t);
                    return function () {
                      return n;
                    };
                  }
                  return nt(t, e);
                })(t, o)
              : nt(t, o)),
          Z.includes(r))
        ) {
          var c = r;
          it(ot(tt, n, { isProperty: !0 }), t, c);
        } else {
          "index" === r && (n.pop(), (r = n[n.length - 1]));
          var l,
            f = ot(tt, n),
            d = W(Z);
          try {
            for (d.s(); !(l = d.n()).done; ) {
              var h = l.value;
              it(f, t[h], h);
            }
          } catch (t) {
            d.e(t);
          } finally {
            d.f();
          }
          !1 === t.namespaced && delete f.namespaced;
        }
      }
      function ot(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!e.length || (o && 1 === e.length)) return t;
        var c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          ot(t.modules[c], e, { isProperty: o })
        );
      }
      function it(t, e, n) {
        e &&
          ("state" === n
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      n(53);
      var st = function () {
          return Promise.resolve()
            .then(n.bind(null, 183))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        ct = function () {
          return Promise.resolve()
            .then(n.bind(null, 56))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        lt = function () {
          return Promise.resolve()
            .then(n.bind(null, 467))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        ut = function () {
          return Promise.resolve()
            .then(n.bind(null, 181))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        ft = function () {
          return Promise.resolve()
            .then(n.bind(null, 182))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        pt = function () {
          return Promise.resolve()
            .then(n.bind(null, 57))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        ht = function () {
          return Promise.resolve()
            .then(n.bind(null, 184))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        vt = function () {
          return Promise.resolve()
            .then(n.bind(null, 388))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        mt = function () {
          return Promise.resolve()
            .then(n.bind(null, 66))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        bt = function () {
          return Promise.resolve()
            .then(n.bind(null, 131))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        gt = function () {
          return Promise.resolve()
            .then(n.bind(null, 471))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        yt = function () {
          return Promise.resolve()
            .then(n.bind(null, 463))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        _t = function () {
          return Promise.resolve()
            .then(n.bind(null, 464))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        xt = function () {
          return Promise.resolve()
            .then(n.bind(null, 473))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        wt = function () {
          return Promise.resolve()
            .then(n.bind(null, 474))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        kt = function () {
          return Promise.resolve()
            .then(n.bind(null, 475))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        jt = function () {
          return Promise.resolve()
            .then(n.bind(null, 472))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Ot = function () {
          return Promise.resolve()
            .then(n.bind(null, 470))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Ct = function () {
          return Promise.resolve()
            .then(n.bind(null, 466))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        $t = function () {
          return Promise.resolve()
            .then(n.bind(null, 465))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Pt = function () {
          return Promise.resolve()
            .then(n.bind(null, 479))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        St = function () {
          return Promise.resolve()
            .then(n.bind(null, 482))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Lt = function () {
          return Promise.resolve()
            .then(n.bind(null, 481))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Et = function () {
          return Promise.resolve()
            .then(n.bind(null, 477))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        zt = function () {
          return Promise.resolve()
            .then(n.bind(null, 478))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Rt = function () {
          return Promise.resolve()
            .then(n.bind(null, 480))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Dt = function () {
          return Promise.resolve()
            .then(n.bind(null, 483))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Mt = function () {
          return Promise.resolve()
            .then(n.bind(null, 476))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        At = function () {
          return Promise.resolve()
            .then(n.bind(null, 484))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Tt = function () {
          return Promise.resolve()
            .then(n.bind(null, 469))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Bt = function () {
          return Promise.resolve()
            .then(n.bind(null, 129))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Ht = function () {
          return Promise.resolve()
            .then(n.bind(null, 458))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        It = function () {
          return Promise.resolve()
            .then(n.bind(null, 468))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Nt = function () {
          return Promise.resolve()
            .then(n.bind(null, 180))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Vt = function () {
          return Promise.resolve()
            .then(n.bind(null, 185))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        qt = function () {
          return Promise.resolve()
            .then(n.bind(null, 130))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Ft = function () {
          return Promise.resolve()
            .then(n.bind(null, 389))
            .then(function (t) {
              return Gt(t.default || t);
            });
        },
        Ut = function () {
          return Promise.resolve()
            .then(n.bind(null, 390))
            .then(function (t) {
              return Gt(t.default || t);
            });
        };
      function Gt(t) {
        if (!t || !t.functional) return t;
        var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
        return {
          render: function (n) {
            var r = {},
              o = {};
            for (var c in this.$attrs)
              e.includes(c) ? (o[c] = this.$attrs[c]) : (r[c] = this.$attrs[c]);
            return n(
              t,
              {
                on: this.$listeners,
                attrs: r,
                props: o,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      for (var Xt in r)
        l.a.component(Xt, r[Xt]), l.a.component("Lazy" + Xt, r[Xt]);
      var Kt = n(40),
        Qt =
          (n(125),
          n(31),
          n(162),
          {
            nav: { home: "home" },
            sidebar: {
              lang: {
                title: "Select your language",
                upcomming: "More languages to come soon!",
                en: "english",
                fr: "français",
                es: "español",
              },
            },
            press: {
              filters: {
                label: "Filter and sort",
                type: "types",
                language: "languages",
                apply_filters: "Apply filters",
              },
              sort_by: {
                label: "Sort by date",
                newest: "Descending",
                oldest: "Ascending",
              },
              not_found: "No result",
            },
            loadmore: { label: "load more" },
            errorPage: {
              paragraph: "This is not the page you are looking for.",
              cta_label: "Back to the homepage",
            },
            strate_video: { download_label: "Download this trailer" },
            newsletter: {
              country: { placeholder: "Country" },
              date: { placeholder: "MM/JJ/YYYY" },
              error: "Sorry error",
              error_date: "Invalid birthdate",
            },
            lightbox: { download: "download" },
          }),
        Yt = {
          COMPONENT_OPTIONS_KEY: "nuxtI18n",
          STRATEGIES: {
            PREFIX: "prefix",
            PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
            PREFIX_AND_DEFAULT: "prefix_and_default",
            NO_PREFIX: "no_prefix",
          },
          REDIRECT_ON_OPTIONS: {
            ALL: "all",
            ROOT: "root",
            NO_PREFIX: "no prefix",
          },
        },
        Wt = void 0,
        Jt = {
          vueI18n: { fallbackLocale: "en" },
          vueI18nLoader: !1,
          locales: [{ code: "en", iso: "en", file: "en.js" }],
          defaultLocale: "en",
          defaultDirection: "ltr",
          routesNameSeparator: "___",
          defaultLocaleRouteNameSuffix: "default",
          sortRoutes: !0,
          strategy: "prefix_except_default",
          lazy: !0,
          langDir: "/builds/quanticdream/project-s/lang",
          rootRedirect: null,
          detectBrowserLanguage: {
            alwaysRedirect: !1,
            cookieCrossOrigin: !1,
            cookieDomain: null,
            cookieKey: "i18n_redirected",
            cookieSecure: !1,
            fallbackLocale: "",
            redirectOn: "root",
            useCookie: !0,
          },
          differentDomains: !1,
          baseUrl: "https://www.starwarseclipse.com",
          vuex: {
            moduleName: "i18n",
            syncRouteParams: !0,
            syncLocale: !0,
            syncMessages: !0,
          },
          parsePages: !0,
          pages: {},
          skipSettingLocaleOnNavigate: !1,
          onBeforeLanguageSwitch: function () {},
          onLanguageSwitched: function () {
            return null;
          },
          noPrefixDefaultLocale: !1,
          seo: !0,
          addSeoAttributes: !0,
          normalizedLocales: [{ code: "en", iso: "en", file: "en.js" }],
          localeCodes: ["en"],
          additionalMessages: [],
        },
        Zt = {
          "en.js": function () {
            return Promise.resolve(Qt);
          },
        },
        te = (n(350), n(223), n(124), n(86), n(609), n(190)),
        ee = n.n(te);
      function ne(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return re(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return re(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function re(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function ae(text) {
        return "[@nuxtjs/i18n] ".concat(text);
      }
      function oe(t, e) {
        var n,
          r = [],
          o = [],
          c = ne(t);
        try {
          for (c.s(); !(n = c.n()).done; ) {
            var l = n.value,
              code = l.code,
              f = l.iso || code;
            o.push({ code: code, iso: f });
          }
        } catch (t) {
          c.e(t);
        } finally {
          c.f();
        }
        var d,
          h = ne(e.entries());
        try {
          var v = function () {
            var t = Object(M.a)(d.value, 2),
              n = t[0],
              c = t[1],
              l = o.find(function (t) {
                return t.iso.toLowerCase() === c.toLowerCase();
              });
            if (l)
              return r.push({ code: l.code, score: 1 - n / e.length }), "break";
          };
          for (h.s(); !(d = h.n()).done; ) {
            if ("break" === v()) break;
          }
        } catch (t) {
          h.e(t);
        } finally {
          h.f();
        }
        var m,
          y = ne(e.entries());
        try {
          var _ = function () {
            var t = Object(M.a)(m.value, 2),
              n = t[0],
              c = t[1].split("-")[0].toLowerCase(),
              l = o.find(function (t) {
                return t.iso.split("-")[0].toLowerCase() === c;
              });
            if (l)
              return (
                r.push({ code: l.code, score: 0.999 - n / e.length }), "break"
              );
          };
          for (y.s(); !(m = y.n()).done; ) {
            if ("break" === _()) break;
          }
        } catch (t) {
          y.e(t);
        } finally {
          y.f();
        }
        return (
          r.length > 1 &&
            r.sort(function (t, e) {
              return t.score === e.score
                ? e.code.length - t.code.length
                : e.score - t.score;
            }),
          r.length ? r[0].code : void 0
        );
      }
      function ie(t, e) {
        var n;
        if ((n = window.location.host)) {
          var r = t.find(function (t) {
            return t.domain === n;
          });
          if (r) return r.code;
        }
        return "";
      }
      function se(t) {
        return new RegExp("^/(".concat(t.join("|"), ")(?:/|$)"), "i");
      }
      function ce(t, e) {
        var n = e.routesNameSeparator,
          r = e.defaultLocaleRouteNameSuffix,
          o = "(".concat(t.join("|"), ")"),
          c = "(?:".concat(n).concat(r, ")?"),
          l = new RegExp("".concat(n).concat(o).concat(c, "$"), "i"),
          f = se(t);
        return function (t) {
          if (t.name) {
            var e = t.name.match(l);
            if (e && e.length > 1) return e[1];
          } else if (t.path) {
            var n = t.path.match(f);
            if (n && n.length > 1) return n[1];
          }
          return "";
        };
      }
      function le(t, e) {
        var n,
          r = e.useCookie,
          o = e.cookieKey,
          c = e.localeCodes;
        if (r && (n = ee.a.get(o)) && c.includes(n)) return n;
      }
      function ue(t, e, n) {
        var r = n.useCookie,
          o = n.cookieDomain,
          c = n.cookieKey,
          l = n.cookieSecure,
          f = n.cookieCrossOrigin;
        if (r) {
          var d = new Date(),
            h = {
              expires: new Date(d.setDate(d.getDate() + 365)),
              path: "/",
              sameSite: f ? "none" : "lax",
              secure: f || l,
            };
          o && (h.domain = o), ee.a.set(c, t, h);
        }
      }
      function fe(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return de(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return de(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function de(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function pe(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function he(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? pe(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : pe(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function ve(t, e) {
        return me.apply(this, arguments);
      }
      function me() {
        return (me = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r, o, c, l, f, d, h;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((r = e.app),
                        (o = r.i18n).loadedLanguages ||
                          (o.loadedLanguages = []),
                        o.loadedLanguages.includes(n))
                      ) {
                        t.next = 34;
                        break;
                      }
                      if (
                        !(c = Jt.normalizedLocales.find(function (t) {
                          return t.code === n;
                        }))
                      ) {
                        t.next = 33;
                        break;
                      }
                      if (!(l = c.file)) {
                        t.next = 30;
                        break;
                      }
                      if (
                        ((d = e.nuxtState) &&
                          d.__i18n &&
                          d.__i18n.langs[n] &&
                          ((f = d.__i18n.langs[n]), e.isDev && Zt[l]()),
                        f)
                      ) {
                        t.next = 27;
                        break;
                      }
                      return (
                        (t.prev = 10),
                        (t.next = 13),
                        Zt[l]().then(function (t) {
                          return t.default || t;
                        })
                      );
                    case 13:
                      if ("function" != typeof (h = t.sent)) {
                        t.next = 20;
                        break;
                      }
                      return (t.next = 17), Promise.resolve(h(e, n));
                    case 17:
                      (t.t0 = t.sent), (t.next = 21);
                      break;
                    case 20:
                      t.t0 = h;
                    case 21:
                      (f = t.t0), (t.next = 27);
                      break;
                    case 24:
                      (t.prev = 24),
                        (t.t1 = t.catch(10)),
                        console.error(
                          ae(
                            "Failed loading async locale export: ".concat(
                              t.t1.message
                            )
                          )
                        );
                    case 27:
                      f &&
                        (o.setLocaleMessage(n, f),
                        _e(o, Jt.additionalMessages, Jt.localeCodes, [n]),
                        o.loadedLanguages.push(n)),
                        (t.next = 31);
                      break;
                    case 30:
                      console.warn(
                        ae("Could not find lang file for locale ".concat(n))
                      );
                    case 31:
                      t.next = 34;
                      break;
                    case 33:
                      console.warn(
                        ae(
                          'Attempted to load messages for non-existant locale code "'.concat(
                            n,
                            '"'
                          )
                        )
                      );
                    case 34:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[10, 24]]
            );
          })
        )).apply(this, arguments);
      }
      function be(t, e, n, r) {
        var o = r.differentDomains,
          c = r.normalizedLocales;
        if ("function" == typeof t) return t(e);
        if (o && n) {
          var l = ge(n, e.req, { normalizedLocales: c });
          if (l) return l;
        }
        return t;
      }
      function ge(t, e, n) {
        var r,
          o = n.normalizedLocales.find(function (e) {
            return e.code === t;
          });
        if (o && o.domain)
          return Object(x.a)(o.domain)
            ? o.domain
            : ((r = window.location.protocol.split(":")[0]),
              "".concat(r, "://").concat(o.domain));
        console.warn(ae("Could not find domain name for locale ".concat(t)));
      }
      function ye(t, e, n) {
        var r = {
          namespaced: !0,
          state: function () {
            return he({}, e.syncRouteParams ? { routeParams: {} } : {});
          },
          actions: he(
            {},
            e.syncRouteParams
              ? {
                  setRouteParams: function (t, e) {
                    (0, t.commit)("setRouteParams", e);
                  },
                }
              : {}
          ),
          mutations: he(
            {},
            e.syncRouteParams
              ? {
                  setRouteParams: function (t, e) {
                    t.routeParams = e;
                  },
                }
              : {}
          ),
          getters: he(
            {},
            e.syncRouteParams
              ? {
                  localeRouteParams: function (t) {
                    var e = t.routeParams;
                    return function (t) {
                      return (e && e[t]) || {};
                    };
                  },
                }
              : {}
          ),
        };
        t.registerModule(e.moduleName, r, {
          preserveState: !!t.state[e.moduleName],
        });
      }
      function _e(t, e, n, r) {
        var o,
          c = r || n,
          l = fe(e);
        try {
          for (l.s(); !(o = l.n()).done; ) {
            var f,
              d = o.value,
              h = fe(c);
            try {
              for (h.s(); !(f = h.n()).done; ) {
                var v = f.value,
                  m = t.getLocaleMessage(v);
                t.mergeLocaleMessage(v, d[v]), t.mergeLocaleMessage(v, m);
              }
            } catch (t) {
              h.e(t);
            } finally {
              h.f();
            }
          }
        } catch (t) {
          l.e(t);
        } finally {
          l.f();
        }
      }
      var xe = n(485),
        we = n(102),
        ke = (function () {
          var t = Object(o.a)(
            regeneratorRuntime.mark(function t(e) {
              var n, r, o, c, l, f, d;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = e.app), !e.isHMR)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      return (t.next = 5), n.i18n.__onNavigate(e.route);
                    case 5:
                      (r = t.sent),
                        (o = Object(M.a)(r, 3)),
                        (c = o[0]),
                        (l = o[1]),
                        (f = o[2]),
                        c &&
                          l &&
                          ((d = f ? e.route.query : void 0),
                          e.redirect(c, l, d));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      we.a.nuxti18n = ke;
      var je = ["params"];
      function Oe(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Ce(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Oe(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Oe(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function $e(t, e) {
        var n = Le.call(this, t, e);
        return n ? n.route.redirectedFrom || n.route.fullPath : "";
      }
      function Pe(t, e) {
        var n = Le.call(this, t, e);
        return n ? n.route : void 0;
      }
      function Se(t, e) {
        var n = Le.call(this, t, e);
        return n ? n.location : void 0;
      }
      function Le(t, e) {
        if (t) {
          var n = this.i18n;
          if ((e = e || n.locale)) {
            "string" == typeof t &&
              (t = "/" === t[0] ? { path: t } : { name: t });
            var r = Object.assign({}, t);
            if (r.path && !r.name) {
              var o = this.router.resolve(r).route,
                c = this.getRouteBaseName(o);
              if (c)
                r = {
                  name: Re(c, e),
                  params: o.params,
                  query: o.query,
                  hash: o.hash,
                };
              else
                !(
                  (e === Jt.defaultLocale &&
                    [
                      Yt.STRATEGIES.PREFIX_EXCEPT_DEFAULT,
                      Yt.STRATEGIES.PREFIX_AND_DEFAULT,
                    ].includes(Jt.strategy)) ||
                  Jt.strategy === Yt.STRATEGIES.NO_PREFIX ||
                  n.differentDomains
                ) && (r.path = "/".concat(e).concat(r.path)),
                  (r.path = Wt
                    ? Object(x.f)(r.path, !0)
                    : Object(x.g)(r.path, !0));
            } else {
              r.name || r.path || (r.name = this.getRouteBaseName()),
                (r.name = Re(r.name, e));
              var l = r.params;
              l && void 0 === l[0] && l.pathMatch && (l[0] = l.pathMatch);
            }
            var f = this.router.resolve(r);
            return f.route.name ? f : this.router.resolve(t);
          }
        }
      }
      function Ee(t) {
        var e = this.getRouteBaseName();
        if (!e) return "";
        var n = this.i18n,
          r = this.route,
          o = this.store,
          c = r.params,
          l = Object(xe.a)(r, je),
          f = {};
        Jt.vuex &&
          Jt.vuex.syncRouteParams &&
          o &&
          (f =
            o.getters["".concat(Jt.vuex.moduleName, "/localeRouteParams")](t));
        var d = Object.assign({}, l, {
            name: e,
            params: Ce(Ce(Ce({}, c), f), {}, { 0: c.pathMatch }),
          }),
          path = this.localePath(d, t);
        if (n.differentDomains) {
          var h = {
              differentDomains: n.differentDomains,
              normalizedLocales: Jt.normalizedLocales,
            },
            v = ge(t, this.req, h);
          v && (path = v + path);
        }
        return path;
      }
      function ze(t) {
        var e = void 0 !== t ? t : this.route;
        if (e && e.name) return e.name.split(Jt.routesNameSeparator)[0];
      }
      function Re(t, e) {
        var n =
          t +
          (Jt.strategy === Yt.STRATEGIES.NO_PREFIX
            ? ""
            : Jt.routesNameSeparator + e);
        return (
          e === Jt.defaultLocale &&
            Jt.strategy === Yt.STRATEGIES.PREFIX_AND_DEFAULT &&
            (n += Jt.routesNameSeparator + Jt.defaultLocaleRouteNameSuffix),
          n
        );
      }
      var De = function (t) {
          return function () {
            var e = {
              getRouteBaseName: this.getRouteBaseName,
              i18n: this.$i18n,
              localePath: this.localePath,
              localeRoute: this.localeRoute,
              localeLocation: this.localeLocation,
              req: null,
              route: this.$route,
              router: this.$router,
              store: this.$store,
            };
            return t.call.apply(
              t,
              [e].concat(Array.prototype.slice.call(arguments))
            );
          };
        },
        Me = function (t, e) {
          return function () {
            var n = t.app,
              r = (t.req, t.route),
              o = t.store,
              c = {
                getRouteBaseName: n.getRouteBaseName,
                i18n: n.i18n,
                localePath: n.localePath,
                localeLocation: n.localeLocation,
                localeRoute: n.localeRoute,
                req: null,
                route: r,
                router: n.router,
                store: o,
              };
            return e.call.apply(
              e,
              [c].concat(Array.prototype.slice.call(arguments))
            );
          };
        },
        Ae = {
          install: function (t) {
            t.mixin({
              methods: {
                localePath: De($e),
                localeRoute: De(Pe),
                localeLocation: De(Se),
                switchLocalePath: De(Ee),
                getRouteBaseName: De(ze),
              },
            });
          },
        },
        Te = function (t) {
          l.a.use(Ae);
          var e = t.app,
            n = t.store;
          (e.localePath = t.localePath = Me(t, $e)),
            (e.localeRoute = t.localeRoute = Me(t, Pe)),
            (e.localeLocation = t.localeLocation = Me(t, Se)),
            (e.switchLocalePath = t.switchLocalePath = Me(t, Ee)),
            (e.getRouteBaseName = t.getRouteBaseName = Me(t, ze)),
            n &&
              ((n.localePath = e.localePath),
              (n.localeRoute = e.localeRoute),
              (n.localeLocation = e.localeLocation),
              (n.switchLocalePath = e.switchLocalePath),
              (n.getRouteBaseName = e.getRouteBaseName));
        },
        Be = (n(164), n(191)),
        He = n(391);
      n(610),
        n(616),
        n(618),
        n(619),
        n(620),
        n(621),
        n(622),
        n(624),
        n(625),
        n(626),
        n(627),
        n(628),
        n(629),
        n(630),
        n(90);
      function Ie(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Ne(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Ie(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Ie(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function Ve(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return qe(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return qe(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function qe(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function Fe() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.addDirAttribute,
          n = void 0 !== e && e,
          r = t.addSeoAttributes,
          o = void 0 !== r && r;
        if (!this.$i18n) return {};
        var c = { htmlAttrs: {}, link: [], meta: [] },
          l = this.$i18n.localeProperties,
          f = l.iso,
          h = l.dir || Jt.defaultDirection;
        if (
          (n && (c.htmlAttrs.dir = h),
          o &&
            (d.a.hasMetaInfo ? d.a.hasMetaInfo(this) : this._hasMetaInfo) &&
            this.$i18n.locale &&
            this.$i18n.locales)
        ) {
          f && (c.htmlAttrs.lang = f);
          var v = this.$i18n.locales;
          m.bind(this)(v, this.$i18n.__baseUrl, c.link),
            y.bind(this)(this.$i18n.__baseUrl, c.link, o),
            _.bind(this)(l, f, c.meta),
            x.bind(this)(v, f, c.meta);
        }
        function m(t, e, link) {
          if (Jt.strategy !== Yt.STRATEGIES.NO_PREFIX) {
            var n,
              r = new Map(),
              o = Ve(t);
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var c = n.value,
                  l = c.iso;
                if (l) {
                  var f = l.split("-"),
                    d = Object(M.a)(f, 2),
                    h = d[0],
                    v = d[1];
                  h && v && (c.isCatchallLocale || !r.has(h)) && r.set(h, c),
                    r.set(l, c);
                } else
                  console.warn(
                    ae("Locale ISO code is required to generate alternate link")
                  );
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            var m,
              y = Ve(r.entries());
            try {
              for (y.s(); !(m = y.n()).done; ) {
                var _ = Object(M.a)(m.value, 2),
                  x = _[0],
                  w = _[1],
                  j = this.switchLocalePath(w.code);
                j &&
                  link.push({
                    hid: "i18n-alt-".concat(x),
                    rel: "alternate",
                    href: k(j, e),
                    hreflang: x,
                  });
              }
            } catch (t) {
              y.e(t);
            } finally {
              y.f();
            }
            if (Jt.defaultLocale) {
              var O = this.switchLocalePath(Jt.defaultLocale);
              O &&
                link.push({
                  hid: "i18n-xd",
                  rel: "alternate",
                  href: k(O, e),
                  hreflang: "x-default",
                });
            }
          }
        }
        function y(t, link, e) {
          var n = this.localeRoute(
            Ne(Ne({}, this.$route), {}, { name: this.getRouteBaseName() })
          );
          if (n) {
            var r = k(n.path, t),
              o = ("boolean" != typeof e && e.canonicalQueries) || [];
            o.length &&
              (function () {
                var t,
                  e = n.query,
                  c = new URLSearchParams(),
                  l = Ve(o);
                try {
                  var f = function () {
                    var n = t.value;
                    if (n in e) {
                      var r = e[n];
                      Array.isArray(r)
                        ? r.forEach(function (t) {
                            return c.append(n, t || "");
                          })
                        : c.append(n, r || "");
                    }
                  };
                  for (l.s(); !(t = l.n()).done; ) f();
                } catch (t) {
                  l.e(t);
                } finally {
                  l.f();
                }
                var d = c.toString();
                d && (r = "".concat(r, "?").concat(d));
              })(),
              link.push({ hid: "i18n-can", rel: "canonical", href: r });
          }
        }
        function _(t, e, meta) {
          t &&
            e &&
            meta.push({ hid: "i18n-og", property: "og:locale", content: w(e) });
        }
        function x(t, e, meta) {
          var n = t.filter(function (t) {
            var n = t.iso;
            return n && n !== e;
          });
          if (n.length) {
            var r = n.map(function (t) {
              return {
                hid: "i18n-og-alt-".concat(t.iso),
                property: "og:locale:alternate",
                content: w(t.iso),
              };
            });
            meta.push.apply(meta, Object(He.a)(r));
          }
        }
        function w(t) {
          return (t || "").replace(/-/g, "_");
        }
        function k(t, e) {
          return t.match(/^https?:\/\//) ? t : e + t;
        }
        return c;
      }
      var Ue = n(89);
      function Ge(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Xe(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Xe(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function Xe(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      l.a.use(Be.a);
      var Ke = (function () {
          var t = Object(o.a)(
            regeneratorRuntime.mark(function t(e) {
              var n,
                r,
                c,
                f,
                d,
                h,
                v,
                m,
                y,
                _,
                w,
                k,
                j,
                O,
                C,
                $,
                P,
                S,
                L,
                E,
                z,
                R,
                D,
                A,
                T,
                B,
                H,
                I,
                N,
                V,
                F,
                U,
                G,
                X,
                K,
                Q,
                Y,
                W,
                J;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = e.app),
                        (r = e.route),
                        (c = e.store),
                        (f = e.req),
                        e.res,
                        (d = e.redirect),
                        Jt.vuex && c && ye(c, Jt.vuex, Jt.localeCodes),
                        (h = Jt.lazy),
                        h && (!0 === h || !0 !== h.skipNuxtState),
                        (t.next = 9);
                      break;
                    case 7:
                      (v = t.sent.default),
                        e.beforeNuxtRender(function (t) {
                          var e = t.nuxtState,
                            r = {},
                            o = n.i18n,
                            c = o.fallbackLocale,
                            l = o.locale;
                          if (l && l !== c) {
                            var f = n.i18n._getMessages()[l];
                            if (f)
                              try {
                                v(f), (r[l] = f);
                              } catch (t) {}
                          }
                          e.__i18n = { langs: r };
                        });
                    case 9:
                      if (
                        ((m = Jt.detectBrowserLanguage),
                        (y = m.alwaysRedirect),
                        (_ = m.fallbackLocale),
                        (w = m.redirectOn),
                        (k = m.useCookie),
                        (j = m.cookieKey),
                        (O = m.cookieDomain),
                        (C = m.cookieSecure),
                        ($ = m.cookieCrossOrigin),
                        (P = ce(Jt.localeCodes, {
                          routesNameSeparator: Jt.routesNameSeparator,
                          defaultLocaleRouteNameSuffix:
                            Jt.defaultLocaleRouteNameSuffix,
                        })),
                        (S = (function () {
                          var t = Object(o.a)(
                            regeneratorRuntime.mark(function t(r) {
                              var o,
                                c,
                                f,
                                h,
                                v,
                                m,
                                y,
                                _,
                                x,
                                w,
                                j,
                                O,
                                C,
                                $,
                                S,
                                L,
                                E,
                                z,
                                R,
                                D = arguments;
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        ((o =
                                          D.length > 1 && void 0 !== D[1]
                                            ? D[1]
                                            : {}),
                                        (c = o.initialSetup),
                                        (f = void 0 !== c && c),
                                        r)
                                      ) {
                                        t.next = 3;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 3:
                                      if (f || !n.i18n.differentDomains) {
                                        t.next = 5;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 5:
                                      if (((h = n.i18n.locale), r !== h)) {
                                        t.next = 8;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 8:
                                      if (
                                        !(v = n.i18n.onBeforeLanguageSwitch(
                                          h,
                                          r,
                                          f,
                                          e
                                        )) ||
                                        !n.i18n.localeCodes.includes(v)
                                      ) {
                                        t.next = 13;
                                        break;
                                      }
                                      if (v !== h) {
                                        t.next = 12;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 12:
                                      r = v;
                                    case 13:
                                      if (
                                        (k && n.i18n.setLocaleCookie(r),
                                        !Jt.langDir)
                                      ) {
                                        t.next = 30;
                                        break;
                                      }
                                      if (
                                        ((m = n.i18n.fallbackLocale), !Jt.lazy)
                                      ) {
                                        t.next = 26;
                                        break;
                                      }
                                      if (!m) {
                                        t.next = 22;
                                        break;
                                      }
                                      return (
                                        (y = []),
                                        Array.isArray(m)
                                          ? (y = m.map(function (t) {
                                              return ve(e, t);
                                            }))
                                          : "object" === Object(Kt.a)(m)
                                          ? (m[r] &&
                                              (y = y.concat(
                                                m[r].map(function (t) {
                                                  return ve(e, t);
                                                })
                                              )),
                                            m.default &&
                                              (y = y.concat(
                                                m.default.map(function (t) {
                                                  return ve(e, t);
                                                })
                                              )))
                                          : r !== m && y.push(ve(e, m)),
                                        (t.next = 22),
                                        Promise.all(y)
                                      );
                                    case 22:
                                      return (t.next = 24), ve(e, r);
                                    case 24:
                                      t.next = 28;
                                      break;
                                    case 26:
                                      return (
                                        (t.next = 28),
                                        Promise.all(
                                          Jt.localeCodes.map(function (t) {
                                            return ve(e, t);
                                          })
                                        )
                                      );
                                    case 28:
                                      t.next = 31;
                                      break;
                                    case 30:
                                      _e(
                                        n.i18n,
                                        Jt.additionalMessages,
                                        Jt.localeCodes
                                      );
                                    case 31:
                                      for (
                                        n.i18n.locale = r,
                                          _ = Jt.normalizedLocales.find(
                                            function (t) {
                                              return t.code === r;
                                            }
                                          ) || { code: r },
                                          x = 0,
                                          w = Object.keys(
                                            n.i18n.localeProperties
                                          );
                                        x < w.length;
                                        x++
                                      )
                                        (j = w[x]),
                                          (n.i18n.localeProperties[j] = void 0);
                                      for (
                                        O = 0, C = Object.entries(_);
                                        O < C.length;
                                        O++
                                      )
                                        ($ = Object(M.a)(C[O], 2)),
                                          (S = $[0]),
                                          (L = $[1]),
                                          l.a.set(
                                            n.i18n.localeProperties,
                                            S,
                                            Object(Ue.a)(L)
                                          );
                                      (E = e.route),
                                        (z = ""),
                                        !1 ||
                                          n.i18n.differentDomains ||
                                          Jt.strategy ===
                                            Yt.STRATEGIES.NO_PREFIX ||
                                          (P(E) === r &&
                                            (Jt.strategy !==
                                              Yt.STRATEGIES
                                                .PREFIX_AND_DEFAULT ||
                                              r !== Jt.defaultLocale)) ||
                                          ((R =
                                            n.switchLocalePath(r) ||
                                            n.localePath(E.fullPath, r)) &&
                                            R !== E.fullPath &&
                                            !R.startsWith("//") &&
                                            (z = R)),
                                        f
                                          ? (n.i18n.__redirect = z)
                                          : (n.i18n.onLanguageSwitched(h, r),
                                            z && d(z));
                                    case 40:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (L = (function () {
                          var t = Object(o.a)(
                            regeneratorRuntime.mark(function t(r) {
                              var o, path, c, l, f;
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if ("/" !== r.path || !Jt.rootRedirect) {
                                        t.next = 5;
                                        break;
                                      }
                                      return (
                                        (o = 302),
                                        (path = Jt.rootRedirect),
                                        "string" != typeof Jt.rootRedirect &&
                                          ((o = Jt.rootRedirect.statusCode),
                                          (path = Jt.rootRedirect.path)),
                                        t.abrupt("return", [
                                          o,
                                          "/".concat(path),
                                          !0,
                                        ])
                                      );
                                    case 5:
                                      if (!(c = n.i18n.__redirect)) {
                                        t.next = 9;
                                        break;
                                      }
                                      return (
                                        (n.i18n.__redirect = null),
                                        t.abrupt("return", [302, c])
                                      );
                                    case 9:
                                      if (
                                        ((l = {
                                          differentDomains: Jt.differentDomains,
                                          normalizedLocales:
                                            Jt.normalizedLocales,
                                        }),
                                        (n.i18n.__baseUrl = be(
                                          Jt.baseUrl,
                                          e,
                                          n.i18n.locale,
                                          l
                                        )),
                                        (f =
                                          (Jt.detectBrowserLanguage && D(r)) ||
                                          (!Jt.differentDomains && P(r)) ||
                                          n.i18n.locale ||
                                          n.i18n.defaultLocale ||
                                          ""),
                                        !Jt.skipSettingLocaleOnNavigate)
                                      ) {
                                        t.next = 17;
                                        break;
                                      }
                                      (n.i18n.__pendingLocale = f),
                                        (n.i18n.__pendingLocalePromise =
                                          new Promise(function (t) {
                                            n.i18n.__resolvePendingLocalePromise =
                                              t;
                                          })),
                                        (t.next = 19);
                                      break;
                                    case 17:
                                      return (t.next = 19), n.i18n.setLocale(f);
                                    case 19:
                                      return t.abrupt("return", [null, null]);
                                    case 20:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (E = (function () {
                          var t = Object(o.a)(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (n.i18n.__pendingLocale) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 2:
                                      return (
                                        (t.next = 4),
                                        n.i18n.setLocale(n.i18n.__pendingLocale)
                                      );
                                    case 4:
                                      n.i18n.__resolvePendingLocalePromise(""),
                                        (n.i18n.__pendingLocale = null);
                                    case 6:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (z = (function () {
                          var t = Object(o.a)(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!n.i18n.__pendingLocale) {
                                        t.next = 3;
                                        break;
                                      }
                                      return (
                                        (t.next = 3),
                                        n.i18n.__pendingLocalePromise
                                      );
                                    case 3:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (R = function () {
                          return "undefined" != typeof navigator &&
                            navigator.languages
                            ? oe(Jt.normalizedLocales, navigator.languages)
                            : f && void 0 !== f.headers["accept-language"]
                            ? oe(
                                Jt.normalizedLocales,
                                f.headers["accept-language"]
                                  .split(",")
                                  .map(function (t) {
                                    return t.split(";")[0];
                                  })
                              )
                            : void 0;
                        }),
                        (D = function (t) {
                          if (Jt.strategy !== Yt.STRATEGIES.NO_PREFIX)
                            if (w === Yt.REDIRECT_ON_OPTIONS.ROOT) {
                              if ("/" !== t.path) return "";
                            } else if (
                              w === Yt.REDIRECT_ON_OPTIONS.NO_PREFIX &&
                              !y &&
                              t.path.match(se(Jt.localeCodes))
                            )
                              return "";
                          var e;
                          (k && (e = n.i18n.getLocaleCookie())) || (e = R());
                          var r = e || _;
                          return !r ||
                            (k && !y && n.i18n.getLocaleCookie()) ||
                            r === n.i18n.locale
                            ? ""
                            : r;
                        }),
                        (A = function (t) {
                          (t.locales = Object(Ue.a)(Jt.locales)),
                            (t.localeCodes = Object(Ue.a)(Jt.localeCodes)),
                            (t.localeProperties = l.a.observable(
                              Object(Ue.a)(
                                Jt.normalizedLocales.find(function (e) {
                                  return e.code === t.locale;
                                }) || { code: t.locale }
                              )
                            )),
                            (t.defaultLocale = Jt.defaultLocale),
                            (t.differentDomains = Jt.differentDomains),
                            (t.onBeforeLanguageSwitch =
                              Jt.onBeforeLanguageSwitch),
                            (t.onLanguageSwitched = Jt.onLanguageSwitched),
                            (t.setLocaleCookie = function (t) {
                              return ue(t, 0, {
                                useCookie: k,
                                cookieDomain: O,
                                cookieKey: j,
                                cookieSecure: C,
                                cookieCrossOrigin: $,
                              });
                            }),
                            (t.getLocaleCookie = function () {
                              return le(0, {
                                useCookie: k,
                                cookieKey: j,
                                localeCodes: Jt.localeCodes,
                              });
                            }),
                            (t.setLocale = function (t) {
                              return S(t);
                            }),
                            (t.getBrowserLocale = function () {
                              return R();
                            }),
                            (t.finalizePendingLocaleChange = E),
                            (t.waitForPendingLocaleChange = z),
                            (t.__baseUrl = n.i18n.__baseUrl),
                            (t.__pendingLocale = n.i18n.__pendingLocale),
                            (t.__pendingLocalePromise =
                              n.i18n.__pendingLocalePromise),
                            (t.__resolvePendingLocalePromise =
                              n.i18n.__resolvePendingLocalePromise);
                        }),
                        "function" != typeof Jt.vueI18n)
                      ) {
                        t.next = 24;
                        break;
                      }
                      return (t.next = 21), Jt.vueI18n(e);
                    case 21:
                      (t.t0 = t.sent), (t.next = 25);
                      break;
                    case 24:
                      t.t0 = Object(Ue.a)(Jt.vueI18n);
                    case 25:
                      if (
                        (((T = t.t0).componentInstanceCreatedListener = A),
                        (n.i18n = e.i18n = new Be.a(T)),
                        (n.i18n.locale = ""),
                        (n.i18n.fallbackLocale = T.fallbackLocale || ""),
                        c && ((c.$i18n = n.i18n), c.state.localeDomains))
                      ) {
                        B = Ge(Jt.normalizedLocales.entries());
                        try {
                          for (B.s(); !(H = B.n()).done; )
                            (I = Object(M.a)(H.value, 2)),
                              (N = I[0]),
                              (V = I[1]),
                              (F = c.state.localeDomains[V.code]) &&
                                ((V.domain = F),
                                "string" != typeof (U = Jt.locales[N]) &&
                                  (U.domain = F));
                        } catch (t) {
                          B.e(t);
                        } finally {
                          B.f();
                        }
                      }
                      return (
                        A(n.i18n),
                        (G = {
                          differentDomains: Jt.differentDomains,
                          normalizedLocales: Jt.normalizedLocales,
                        }),
                        (n.i18n.__baseUrl = be(Jt.baseUrl, e, "", G)),
                        (n.i18n.__onNavigate = L),
                        (l.a.prototype.$nuxtI18nHead = Fe),
                        (X = Jt.detectBrowserLanguage ? D(r) : "") ||
                          (n.i18n.differentDomains
                            ? ((K = ie(Jt.normalizedLocales)), (X = K))
                            : Jt.strategy !== Yt.STRATEGIES.NO_PREFIX &&
                              ((Q = P(r)), (X = Q))),
                        !X && k && (X = n.i18n.getLocaleCookie()),
                        X || (X = n.i18n.defaultLocale || ""),
                        (t.next = 42),
                        S(X, { initialSetup: !0 })
                      );
                    case 42:
                      t.next = 50;
                      break;
                    case 45:
                      (Y = t.sent),
                        (W = Object(M.a)(Y, 2)),
                        W[0],
                        (J = W[1]) && location.assign(Object(x.c)(e.base, J));
                    case 50:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        Qe = n(453),
        Ye = n(454),
        We = n.n(Ye),
        Je = !0,
        Ze = {
          install: function () {
            l.a.prototype.$storyapi ||
              ((l.a.prototype.$storyapi = new Qe.a({
                accessToken: "u2vuhMQqvS76GHV9Q8O4Zwtt",
                cache: { clear: "auto", type: "[object Object]" },
                timeout: 0,
              })),
              (l.a.prototype.$storybridge = function (t, e) {
                if (
                  ("function" != typeof e && (e = function () {}),
                  window.location != window.parent.location)
                ) {
                  if (!Je)
                    return window.StoryblokBridge
                      ? void t()
                      : void e(
                          "The Storyblok bridge script is already loading."
                        );
                  (Je = !1),
                    (function (t, e) {
                      if (
                        document.getElementById("storyblok-javascript-bridge")
                      )
                        return e();
                      var script = document.createElement("script");
                      (script.async = !0),
                        (script.src = t),
                        (script.id = "storyblok-javascript-bridge"),
                        (script.onerror = function () {
                          e(new Error("Failed to load" + t));
                        }),
                        (script.onload = function () {
                          e();
                        }),
                        document
                          .getElementsByTagName("head")[0]
                          .appendChild(script);
                    })("https://app.storyblok.com/f/storyblok-v2-latest.js", t);
                } else e("You are not in the edit mode.");
              }));
          },
        };
      l.a.use(Ze), l.a.use(We.a);
      var tn = function (t) {
          var e = t.app,
            n = t.store;
          (e.$storyapi = l.a.prototype.$storyapi),
            (t.$storyapi = l.a.prototype.$storyapi),
            (e.$storybridge = l.a.prototype.$storybridge),
            (t.$storybridge = l.a.prototype.$storybridge),
            n && (n.$storyapi = l.a.prototype.$storyapi);
        },
        en = n(80),
        nn = n.n(en),
        rn = n(455);
      function an(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function on(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? an(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : an(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function sn(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return cn(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return cn(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function cn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      for (
        var ln = {
            setBaseURL: function (t) {
              this.defaults.baseURL = t;
            },
            setHeader: function (t, e) {
              var n,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                o = sn(Array.isArray(r) ? r : [r]);
              try {
                for (o.s(); !(n = o.n()).done; ) {
                  var c = n.value;
                  e
                    ? (this.defaults.headers[c][t] = e)
                    : delete this.defaults.headers[c][t];
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
            },
            setToken: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest: function (t) {
              this.interceptors.request.use(function (e) {
                return t(e) || e;
              });
            },
            onResponse: function (t) {
              this.interceptors.response.use(function (e) {
                return t(e) || e;
              });
            },
            onRequestError: function (t) {
              this.interceptors.request.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError: function (t) {
              this.interceptors.response.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError: function (t) {
              this.onRequestError(t), this.onResponseError(t);
            },
            create: function (t) {
              return pn(Object(rn.a)(t, this.defaults));
            },
          },
          un = function () {
            var t = dn[fn];
            ln["$" + t] = function () {
              return this[t].apply(this, arguments).then(function (t) {
                return t && t.data;
              });
            };
          },
          fn = 0,
          dn = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch",
          ];
        fn < dn.length;
        fn++
      )
        un();
      var pn = function (t) {
          var e = nn.a.create(t);
          return (
            (e.CancelToken = nn.a.CancelToken),
            (e.isCancel = nn.a.isCancel),
            (function (t) {
              for (var e in ln) t[e] = ln[e].bind(t);
            })(e),
            e.onRequest(function (t) {
              t.headers = on(on({}, e.defaults.headers.common), t.headers);
            }),
            hn(e),
            e
          );
        },
        hn = function (t) {
          var e = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {},
            },
            n = function () {
              var t = "undefined" != typeof window && window.$nuxt;
              return t && t.$loading && t.$loading.set ? t.$loading : e;
            },
            r = 0;
          t.onRequest(function (t) {
            (t && !1 === t.progress) || r++;
          }),
            t.onResponse(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (--r <= 0 && ((r = 0), n().finish()));
            }),
            t.onError(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (r--,
                nn.a.isCancel(t)
                  ? r <= 0 && ((r = 0), n().finish())
                  : (n().fail(), n().finish()));
            });
          var o = function (t) {
            if (r && t.total) {
              var progress = (100 * t.loaded) / (t.total * r);
              n().set(Math.min(100, progress));
            }
          };
          (t.defaults.onUploadProgress = o),
            (t.defaults.onDownloadProgress = o);
        },
        vn = function (t, e) {
          var n = (t.$config && t.$config.axios) || {},
            r =
              n.browserBaseURL ||
              n.browserBaseUrl ||
              n.baseURL ||
              n.baseUrl ||
              "http://localhost:3000/";
          var o = pn({
            baseURL: r,
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {},
            },
          });
          (t.$axios = o), e("axios", o);
        };
      var mn = "dataLayer",
        bn = "GTM-NBDL56N";
      var gn = function (t, e) {
          var n = "GTM-NBDL56N",
            r = ((t.$config && t.$config.gtm) || {}).id,
            o = (function (t, e) {
              return {
                init: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : bn;
                  !e[t] &&
                    window._gtm_inject &&
                    (window._gtm_inject(t), (e[t] = !0));
                },
                push: function (t) {
                  window[mn] || (window[mn] = []), window[mn].push(t);
                },
              };
            })(0, Object(c.a)({}, n, !0));
          r && r !== n && o.init(r),
            (t.$gtm = o),
            e("gtm", t.$gtm),
            (function (t) {
              t.app.router.afterEach(function (e) {
                setTimeout(function () {
                  t.$gtm.push(
                    e.gtm || {
                      routeName: e.name,
                      pageType: "PageView",
                      pageUrl: "" + e.fullPath,
                      pageTitle:
                        ("undefined" != typeof document && document.title) ||
                        "",
                      event: "nuxtRoute",
                    }
                  );
                }, 250);
              });
            })(t);
        },
        yn = n(128),
        _n = n.n(yn);
      Object.assign(_n.a.cfg, {}), n(660);
      var xn = {
        install: function (t) {
          t.prototype.$eventHub = new t();
        },
      };
      l.a.use(xn);
      var wn = n(456);
      l.a.use(function (t) {
        t.prototype.$observer = new wn.a();
      });
      var kn = n(465),
        jn = n(466),
        On = n(182),
        Cn = n(66),
        $n = n(57),
        Pn = n(56),
        Sn = n(183),
        Ln = n(184),
        En = n(388),
        zn = n(467),
        Rn = n(457),
        Dn = n.n(Rn),
        Mn = n(131),
        An = n(181),
        Tn = (n(664), n(129)),
        Bn = n(468),
        Hn = n(484),
        In = n(469),
        Nn = n(464),
        Vn = n(470),
        qn = n(463),
        Fn = n(471),
        Un = n(472),
        Gn = n(473),
        Xn = n(474),
        Kn = n(475),
        Qn = n(476),
        Yn = n(477),
        Wn = n(478),
        Jn = n(479),
        Zn = n(480),
        er = n(481),
        nr = n(482),
        rr = n(483),
        ar = n(180),
        or = n(389),
        ir = n(390),
        sr = n(185),
        cr = n(130);
      l.a.component("page", kn.default),
        l.a.component("media-page", jn.default),
        l.a.component("base-use-svg", Cn.default),
        l.a.component("base-mask", On.default),
        l.a.component("base-picture", $n.default),
        l.a.component("base-checkbox", Sn.default),
        l.a.component("base-radio", Ln.default),
        l.a.component("base-cta", Pn.default),
        l.a.component("base-select", En.default),
        l.a.component("base-input", zn.default),
        l.a.component("v-select", Dn.a),
        l.a.component("base-video", Mn.default),
        l.a.component("base-input-date", An.default),
        l.a.component("core-youtube-player", Tn.default),
        l.a.component("core-starfield", Bn.default),
        l.a.component("core-aov", Hn.default),
        l.a.component("core-lightbox", In.default),
        l.a.component("c-header", Nn.default),
        l.a.component("c-svg-icons", Vn.default),
        l.a.component("c-footer-game", qn.default),
        l.a.component("c-app-footer", Fn.default),
        l.a.component("c-sidebar", Un.default),
        l.a.component("c-img-background", Gn.default),
        l.a.component("c-nav-menu", Xn.default),
        l.a.component("c-newsletter", Kn.default),
        l.a.component("strate_video", Qn.default),
        l.a.component("strate_image", Yn.default),
        l.a.component("strate_image_full", Wn.default),
        l.a.component("strate_image_text", Zn.default),
        l.a.component("strate_content_text", Jn.default),
        l.a.component("strate_homepage_cover", er.default),
        l.a.component("strate_cover", nr.default),
        l.a.component("strate_media", rr.default),
        l.a.component("lang-switcher", ar.default),
        l.a.component("press-card", or.default),
        l.a.component("press-filters", ir.default),
        l.a.component("media-card", sr.default),
        l.a.component("newsletter-form", cr.default);
      var lr = n(10);
      l.a.use(lr.a);
      var ur = n(486);
      l.a.use(ur.a);
      var fr = function (t, e) {
          t.app, t.store;
          var n = t.$config;
          e("storyblok", {
            resize: function (image) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!t) return image;
              var path = ""
                .concat(image, "/m/")
                .concat(t, "/filters:quality(80)");
              return n.assetsPath
                ? path.replace("//a.storyblok.com", n.assetsPath)
                : path;
            },
            replace: function (path) {
              return n.assetsPath && path
                ? path.replace("//a.storyblok.com", n.assetsPath)
                : path;
            },
            richtext: function (t) {
              return t
                ? l.a.prototype.$storyapi.richTextResolver.render(t)
                : "";
            },
            url: function () {
              var link =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = "";
              return (
                Object.keys(link).length &&
                  (t =
                    "story" in link && link.story
                      ? "/".concat(link.story.url)
                      : link
                      ? link.url || "" === link.url
                        ? link.cached_url
                        : link.url
                      : ""),
                "asset" === link.linktype
                  ? t.replace("//a.storyblok.com", n.assetsPath)
                  : t
              );
            },
            ratioImg: function (t) {
              return {
                width: t.split("/")[5].split("x")[0],
                height: t.split("/")[5].split("x")[1],
              };
            },
            ctaTag: function (link) {
              var t = "button";
              if ("" !== link || "" !== link.url || "" !== link.cached_url)
                switch (link.linktype) {
                  case "asset":
                  case "url":
                    t = "a";
                    break;
                  case "story":
                    t = "nuxt-link";
                }
              return t;
            },
          });
        },
        dr = function (t) {
          var e = t.app;
          (e.i18n.onBeforeLanguageSwitch = function (t, e, n, r) {
            var o = r.query._storyblok || r.isDev ? "draft" : "published";
            r.store.dispatch("global/loadGlobal", { locale: e, version: o });
          }),
            (e.i18n.onLanguageSwitched = function (t, e) {
              l.a.prototype.$eventHub.$emit("sidebar:close");
            });
        },
        pr = {
          isReady: !1,
          isAdded: !1,
          callbacks: [],
          addScript: function () {
            if (pr.isAdded) return !1;
            var t = document.createElement("script");
            t.src = "https://www.youtube.com/player_api";
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(t, e),
              (pr.isAdded = !0),
              (window.onYouTubePlayerAPIReady = function () {
                (pr.isReady = !0), pr.onInit();
              });
          },
          register: function (t) {
            t && (pr.callbacks.push(t), pr.addScript());
          },
          onInit: function () {
            for (var i = 0; i < pr.callbacks.length; i++) pr.callbacks[i]();
            pr.callbacks = [];
          },
          install: function (t) {
            t.prototype.$youtube = pr;
          },
        };
      l.a.use(pr);
      var vr = {};
      (vr.width = window.innerWidth),
        (vr.height = window.innerHeight),
        (vr.scroll = {
          left: 0,
          top: 0,
          last: 0,
          direction: "down",
          height: document.documentElement.scrollHeight,
        }),
        (vr.isTouch =
          "ontouchstart" in window || navigator.msMaxTouchPoints > 0),
        (vr.isIpad = navigator.userAgent.match(/.*(iPad).*/)),
        (vr.isIphone = navigator.userAgent.match(/.*(iPhone).*/)),
        (vr.isAndroid = navigator.userAgent.match(/.*(Android).*/)),
        (vr.isFirefox = navigator.userAgent.match(/.*((f|F)irefox).*/)),
        (vr.isChrome = navigator.userAgent.match(/.*(Chrome).*/)),
        (vr.isSafari =
          navigator.userAgent.match(/.*(Safari).*/) && !vr.isChrome),
        (vr.isTrident = navigator.userAgent.match(/Trident.*rv\:11\./)),
        (vr.isEdge = navigator.userAgent.match(/.*(Edge).*/)),
        (vr.isMSIE = navigator.userAgent.match(/.*(MSIE ).*/)),
        (vr.pointer = !!window.navigator.pointerEnabled),
        (vr.msPointer = !!window.navigator.msPointerEnabled),
        (vr.pointerdown = vr.isTouch
          ? "touchstart"
          : vr.pointer
          ? "pointerdown"
          : vr.msPointer
          ? "MSPointerDown"
          : "mousedown"),
        (vr.pointerup = vr.isTouch
          ? "touchend"
          : vr.pointer
          ? "pointerup"
          : vr.msPointer
          ? "MSPointerUp"
          : "mouseup"),
        (vr.pointermove = vr.isTouch
          ? "touchmove"
          : vr.pointer
          ? "pointermove"
          : vr.msPointer
          ? "MSPointerMove"
          : "mousemove"),
        (vr.pointerenter = vr.isTouch
          ? "touchstart"
          : vr.pointer
          ? "pointerenter"
          : (vr.msPointer, "mouseenter")),
        (vr.pointerleave = vr.isTouch
          ? "touchend"
          : vr.pointer
          ? "pointerleave"
          : (vr.msPointer, "mouseout")),
        (vr.pointerover = vr.isTouch
          ? "touchstart"
          : vr.pointer
          ? "pointerover"
          : (vr.msPointer, "mouseover")),
        (vr.pointerout = vr.isTouch
          ? "touchend"
          : vr.pointer
          ? "pointerout"
          : (vr.msPointer, "mouseout")),
        (vr.click = "click"),
        (vr._onResize = function () {
          (vr.width = window.innerWidth),
            (vr.height = window.innerHeight),
            (vr.scroll.height = document.documentElement.scrollHeight);
        }),
        (vr._onScroll = function () {
          var t = document.documentElement;
          (vr.scroll.left =
            (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)),
            (vr.scroll.top =
              (window.pageYOffset || t.scrollTop) - (t.clientTop || 0)),
            vr.scroll.top > vr.scroll.last
              ? (vr.scroll.direction = "down")
              : (vr.scroll.direction = "up"),
            (vr.scroll.last = vr.scroll.top);
        }),
        (vr.getPointerPosition = function (t) {
          var e = t.clientY;
          return { x: t.clientX, y: e };
        }),
        (vr.webglAvailable = function () {
          try {
            var canvas = document.createElement("canvas");
            return (
              !!window.WebGLRenderingContext &&
              (canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl"))
            );
          } catch (t) {
            return !1;
          }
        }),
        (vr.install = function (t) {
          t.prototype.$device = vr;
        }),
        l.a.use(vr);
      var mr = {};
      function gr(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function yr(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? gr(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : gr(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      (mr.body = document.body),
        (mr.doc = document.documentElement),
        (mr.bodyPosition = 0),
        (mr.state = !1),
        (mr.fix = function () {
          (mr.bodyPosition = {
            top: l.a.prototype.$device.scroll.top,
            left: l.a.prototype.$device.scroll.left,
          }),
            (mr.body.style.position = "fixed"),
            (mr.body.style.top = -mr.bodyPosition.top + "px"),
            (mr.body.style.left = 0),
            (mr.body.style.width = "100vw"),
            (mr.state = !0);
        }),
        (mr.unFix = function () {
          (mr.body.style.top = ""),
            (mr.body.style.left = ""),
            (mr.body.style.position = ""),
            (mr.body.style.width = ""),
            (mr.state = !1),
            window.scrollTo(mr.bodyPosition.left, mr.bodyPosition.top);
        }),
        (mr.install = function (t) {
          t.prototype.$fixScroll = mr;
        }),
        l.a.use(mr),
        l.a.component(v.a.name, v.a),
        l.a.component(
          y.a.name,
          yr(
            yr({}, y.a),
            {},
            {
              render: function (t, e) {
                return (
                  y.a._warned ||
                    ((y.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  y.a.render(t, e)
                );
              },
            }
          )
        ),
        l.a.component(P.name, P),
        l.a.component("NChild", P),
        l.a.component(A.name, A),
        Object.defineProperty(l.a.prototype, "$nuxt", {
          get: function () {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt;
          },
          configurable: !0,
        }),
        l.a.use(d.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var _r = {
          name: "fade",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to",
        },
        xr = f.a.Store.prototype.registerModule;
      function wr(path, t) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = Array.isArray(path)
            ? !!path.reduce(function (t, path) {
                return t && t[path];
              }, this.state)
            : path in this.state;
        return xr.call(this, path, t, yr({ preserveState: n }, e));
      }
      function kr(t) {
        return jr.apply(this, arguments);
      }
      function jr() {
        return (
          (jr = Object(o.a)(
            regeneratorRuntime.mark(function t(e) {
              var n,
                r,
                c,
                f,
                d,
                h,
                path,
                v,
                m = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (v = function (t, e) {
                          if (!t)
                            throw new Error(
                              "inject(key, value) has no key provided"
                            );
                          if (void 0 === e)
                            throw new Error(
                              "inject('".concat(
                                t,
                                "', value) has no value provided"
                              )
                            );
                          (f[(t = "$" + t)] = e),
                            f.context[t] || (f.context[t] = e),
                            (c[t] = f[t]);
                          var n = "__nuxt_" + t + "_installed__";
                          l.a[n] ||
                            ((l.a[n] = !0),
                            l.a.use(function () {
                              Object.prototype.hasOwnProperty.call(
                                l.a.prototype,
                                t
                              ) ||
                                Object.defineProperty(l.a.prototype, t, {
                                  get: function () {
                                    return this.$root.$options[t];
                                  },
                                });
                            }));
                        }),
                        (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                        (t.next = 4),
                        $(0, n)
                      );
                    case 4:
                      return (
                        (r = t.sent),
                        ((c = et(e)).$router = r),
                        (c.registerModule = wr),
                        (f = yr(
                          {
                            head: {
                              title: "Starwars by Quantic Dream",
                              meta: [
                                { charset: "utf-8" },
                                {
                                  name: "viewport",
                                  content:
                                    "width=device-width, initial-scale=1",
                                },
                                {
                                  hid: "description",
                                  name: "description",
                                  content: "",
                                },
                              ],
                              link: [
                                {
                                  rel: "icon",
                                  type: "image/x-icon",
                                  href: "/favicon.ico",
                                },
                                {
                                  name: "google-site-verification",
                                  content:
                                    "BmkxTkBkF2irt0e4vE9UCDKH1J6yUe_bD7rdWav2yac",
                                },
                              ],
                              style: [],
                              script: [
                                {
                                  hid: "gtm-script",
                                  innerHTML:
                                    "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-NBDL56N')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}",
                                },
                              ],
                              noscript: [
                                {
                                  hid: "gtm-noscript",
                                  pbody: !0,
                                  innerHTML:
                                    '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBDL56N&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>',
                                },
                              ],
                              __dangerouslyDisableSanitizersByTagID: {
                                "gtm-script": ["innerHTML"],
                                "gtm-noscript": ["innerHTML"],
                              },
                            },
                            store: c,
                            router: r,
                            nuxt: {
                              defaultTransition: _r,
                              transitions: [_r],
                              setTransitions: function (t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function (t) {
                                    return (t = t
                                      ? "string" == typeof t
                                        ? Object.assign({}, _r, { name: t })
                                        : Object.assign({}, _r, t)
                                      : _r);
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                );
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                (t = t || null),
                                  (f.context._errored = Boolean(t)),
                                  (t = t ? Object(w.p)(t) : null);
                                var n = f.nuxt;
                                return (
                                  this && (n = this.nuxt || this.$options.nuxt),
                                  (n.dateErr = Date.now()),
                                  (n.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                );
                              },
                            },
                          },
                          Y
                        )),
                        (c.app = f),
                        (d = e
                          ? e.next
                          : function (t) {
                              return f.router.push(t);
                            }),
                        e
                          ? (h = r.resolve(e.url).route)
                          : ((path = Object(w.f)(
                              r.options.base,
                              r.options.mode
                            )),
                            (h = r.resolve(path).route)),
                        (t.next = 14),
                        Object(w.t)(f, {
                          store: c,
                          route: h,
                          next: d,
                          error: f.nuxt.error.bind(f),
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                          ssrContext: e,
                        })
                      );
                    case 14:
                      v("config", n),
                        window.__NUXT__ &&
                          window.__NUXT__.state &&
                          c.replaceState(window.__NUXT__.state),
                        (t.next = 20);
                      break;
                    case 20:
                      t.next = 23;
                      break;
                    case 23:
                      return (t.next = 26), Te(f.context);
                    case 26:
                      if ("function" != typeof Ke) {
                        t.next = 29;
                        break;
                      }
                      return (t.next = 29), Ke(f.context, v);
                    case 29:
                      return (t.next = 32), tn(f.context);
                    case 32:
                      return (t.next = 35), vn(f.context, v);
                    case 35:
                      return (t.next = 38), gn(f.context, v);
                    case 38:
                      t.next = 41;
                      break;
                    case 41:
                      t.next = 44;
                      break;
                    case 44:
                      t.next = 47;
                      break;
                    case 47:
                      t.next = 50;
                      break;
                    case 50:
                      t.next = 53;
                      break;
                    case 53:
                      t.next = 56;
                      break;
                    case 56:
                      return (t.next = 59), fr(f.context, v);
                    case 59:
                      return (t.next = 62), dr(f.context);
                    case 62:
                      t.next = 65;
                      break;
                    case 65:
                      t.next = 68;
                      break;
                    case 68:
                      t.next = 71;
                      break;
                    case 71:
                      return (
                        (t.next = 74),
                        new Promise(function (t, e) {
                          if (
                            !r.resolve(f.context.route.fullPath).route.matched
                              .length
                          )
                            return t();
                          r.replace(f.context.route.fullPath, t, function (n) {
                            if (!n._isRouter) return e(n);
                            if (2 !== n.type) return t();
                            var c = r.afterEach(
                              (function () {
                                var e = Object(o.a)(
                                  regeneratorRuntime.mark(function e(n, r) {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 3), Object(w.j)(n);
                                          case 3:
                                            (f.context.route = e.sent),
                                              (f.context.params =
                                                n.params || {}),
                                              (f.context.query = n.query || {}),
                                              c(),
                                              t();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          });
                        })
                      );
                    case 74:
                      return t.abrupt("return", {
                        store: c,
                        app: f,
                        router: r,
                      });
                    case 75:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          jr.apply(this, arguments)
        );
      }
    },
    671: function (t, e, n) {
      "use strict";
      n(366);
    },
    673: function (t, e, n) {
      "use strict";
      n(367);
    },
    674: function (t, e, n) {
      t.exports = n.p + "img/logo-header.64698da.png";
    },
    675: function (t, e, n) {
      "use strict";
      n(369);
    },
    676: function (t, e, n) {
      "use strict";
      n(373);
    },
    677: function (t, e, n) {
      "use strict";
      n(374);
    },
    678: function (t, e, n) {
      "use strict";
      n(375);
    },
    679: function (t, e, n) {
      "use strict";
      n(376);
    },
    680: function (t, e, n) {
      "use strict";
      n(377);
    },
    681: function (t, e, n) {
      "use strict";
      n(378);
    },
    682: function (t, e, n) {
      "use strict";
      n(379);
    },
    683: function (t, e, n) {
      "use strict";
      n(380);
    },
    684: function (t, e, n) {
      "use strict";
      n(381);
    },
    685: function (t, e, n) {
      "use strict";
      n(382);
    },
    686: function (t, e, n) {
      "use strict";
      n(383);
    },
    687: function (t, e, n) {
      "use strict";
      n(384);
    },
    688: function (t, e, n) {
      "use strict";
      n(385);
    },
    689: function (t, e, n) {
      "use strict";
      n(386);
    },
    693: function (t, e, n) {
      "use strict";
      n(387);
    },
    74: function (t, e, n) {
      "use strict";
      n(50), n(53), n(20), n(51), n(7), n(55), n(27), n(28), n(193), n(90);
      var r = n(459),
        o = n.n(r),
        c = n(58),
        l = n.n(c);
      e.a = {
        data: function () {
          return { filesDownloaded: [], isFetchingFile: !1 };
        },
        mounted: function () {
          this.setDownload = l()(this.setDownload, 100);
        },
        methods: {
          setDownload: function (t) {
            var e = this,
              n = t.file,
              r = void 0 !== n && n,
              c = t.target,
              l = t.autoDownload,
              f = void 0 !== l && l;
            r &&
              !this.filesDownloaded.includes(r) &&
              (console.log(
                "this.$storyblok.replace(file)",
                this.$storyblok.replace(r)
              ),
              fetch(this.$storyblok.replace(r), { method: "GET", mode: "cors" })
                .then(function (t) {
                  return t.blob();
                })
                .then(function (t) {
                  var n = r.split("/");
                  (n = n[n.length - 1]), (e.weight = o()(t.size));
                  var l = URL.createObjectURL(t),
                    a = document.createElement("a");
                  (a.href = l),
                    a.classList.add("u-extend-href"),
                    (a.download = n),
                    n && n.length && (a.download = n),
                    e.$refs.root
                      ? e.$refs.root.appendChild(a)
                      : c.appendChild(a),
                    f && a.click(),
                    e.filesDownloaded.push(r);
                }));
          },
        },
      };
    },
  },
  [[488, 5, 1, 6]],
]);
