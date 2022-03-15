/*! (C) 2022 Conviva, Inc. All rights reserved. Confidential and proprietary. */
!function(t, i) {
    var n;
    "function" == typeof define && define.amd ? define(i) : ("object" == typeof exports || "object" == typeof module && module.exports) && (module.exports = i()),
    void 0 !== t && t && (void 0 !== t.Conviva && t.Conviva ? t.Conviva.ProxyMonitor || t.ConvivaModuleLoading || (n = i(),
    t.ConvivaModuleLoading = !0, t.Conviva.ProxyMonitor = n.ProxyMonitor, t.Conviva.Impl.VideojsProxy = n.Impl.VideojsProxy,
    delete t.ConvivaModuleLoading) : t.ConvivaModule || t.ConvivaModuleLoading || (t.ConvivaModuleLoading = !0,
    t.ConvivaModule = i(), delete t.ConvivaModuleLoading));
}(this, function() {
    var o = {};
    return function() {
        "use strict";
        function t(t, i, n, v) {
            var l = this;
            l.t = [], l.i = 0, l.n = 0, l.e = !1, this.o = -1, this.a = -1, this.s = v.Constants.PlayerState.UNKNOWN,
            this.r = !1, this.f = 0, this.u = -1, this.h = "", this.c = null, this.d = !1,
            this.v = function(t, i, n) {
                void 0 === n && (n = l.l), l.p.push([ t, i, n ]), n.on(t, i);
            }, this.y = function(t, i, n) {
                (n = void 0 === n ? l.l : n).off(t, i);
            }, this.N = function() {
                l.v("onContentPauseRequested", function(t) {
                    l.V("onContentPauseRequested", t);
                }), l.v("onContentResumeRequested", function(t) {
                    l.V("onContentResumeRequested", t);
                }), l.v("abort", function(t) {
                    l.V("abort", t);
                }), l.v("loadstart", function(t) {
                    l.V("loadstart", t);
                }), l.v("firstplay", function(t) {
                    l.V("firstplay", t), l.C(t);
                }), l.v("play", function(t) {
                    l.V("play", t), l.C(t);
                }), l.v("ended", function(t) {
                    l.V("ended", t), l.g(v.Constants.PlayerState.STOPPED);
                }), l.v("pause", function(t) {
                    l.V("pause", t), l.C(t), l.g(v.Constants.PlayerState.PAUSED);
                }), l.v("playing", function(t) {
                    l.V("playing", t), l.C(t), 0 === l.l.currentTime() ? l.e = !0 : 0 < l.l.currentTime() && (l.e = !1);
                }), l.v("waiting", function(t) {
                    l.V("waiting", t), l.C(t), l.g(v.Constants.PlayerState.BUFFERING);
                }), l.v("timeupdate", function() {
                    l.e && (l.i++, l.s !== v.Constants.PlayerState.PLAYING && l.l && !l.l.seeking() && l.g(v.Constants.PlayerState.PLAYING));
                }), l.v("error", function(t) {
                    l.A(t);
                }), l.v("contenterror", function(t) {
                    l.A(t);
                }), l.v("aderror", function(t) {
                    l.A(t);
                }), l.v("loadedmetadata", function(t) {
                    l.V("loadedmetadata", t), l.C(t), l.I() || l.m();
                }), l.v("loadeddata", function(t) {
                    l.V("loadeddata", t), l.C(t);
                }), l.v("durationchange", function(t) {
                    l.V("durationchange", t), l.C(t);
                }), l.v("seeking", function(t) {
                    l.V("seeking", t), l.C(t), l.isSeekStarted || (l.isSeekStarted = !0,
                    l.O && l.O.reportPlaybackMetric(v.Constants.Playback.SEEK_STARTED, "CONVIVA")),
                    l.e && l.s !== v.Constants.PlayerState.BUFFERING && (l.V("Adjusting Conviva player state to: BUFFERING"),
                    l.g(v.Constants.PlayerState.BUFFERING));
                }), l.v("seeked", function(t) {
                    l.V("seeked", t), l.C(t), l.isSeekStarted = !1, l.O && l.O.reportPlaybackMetric(v.Constants.Playback.SEEK_ENDED, "CONVIVA");
                }), l.v("progress", function() {
                    l.d || l.j();
                }), l.v("stalled", function() {}), l.v("resize", function() {
                    var t, i;
                    !l.I() && l.d || l.j(), "function" == typeof l.l.videoWidth && "function" == typeof l.l.videoHeight && (t = l.l.videoWidth(),
                    i = l.l.videoHeight(), (!isNaN(t) && 0 < t && t !== l.o || !isNaN(i) && 0 < i && i !== l.a) && (l.o = t,
                    l.a = i, l.O.reportPlaybackMetric(v.Constants.Playback.RESOLUTION, t, i, "CONVIVA")));
                });
            }, this.m = function() {
                if (!l.d) {
                    for (var t, i = l.l.textTracks(), n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                    t && (t.on("cuechange", l.b), l.d = !0);
                }
            }, this.w = function() {
                for (var t, i = l.l.textTracks(), n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                t && (t.off("cuechange", l.b), l.d = !1);
            }, this.b = function() {
                var t = this.activeCues[0];
                if (t && t.value && t.value.bandwidth && l.O && l.s !== v.Constants.PlayerState.UNKNOWN) {
                    var i = 0, n = t.value.bandwidth, e = l.l;
                    if (e) {
                        var o, a, s = e.tech(!0);
                        if (s) if (s.vhs && s.vhs.playlists && s.vhs.playlists.media ? (a = s.vhs.playlists,
                        h = s.vhs.playlists.media()) : s.hls && s.hls.playlists && s.hls.playlists.media && (a = s.hls.playlists,
                        h = s.hls.playlists.media()), h && h.attributes) {
                            if (h.attributes.BANDWIDTH) {
                                var r = e.audioTracks();
                                if (r && 0 < r.length) for (var f = 0; f < r.length; f++) {
                                    var u = r[f];
                                    if (u.enabled) {
                                        o = u;
                                        break;
                                    }
                                }
                            }
                            o && h.attributes.AUDIO && a && a.master && a.master.mediaGroups && a.master.mediaGroups.AUDIO && (s = a.master.mediaGroups.AUDIO[h.attributes.AUDIO]) && (e = s[o.id]) && e.playlists && e.playlists[0] && (a = e.playlists[0].attributes) && a.BANDWIDTH && (i = a.BANDWIDTH);
                        }
                    }
                    var h = Math.round((n + i) / 1e3);
                    h !== l.f && (l.f = h, l.O.reportPlaybackMetric(v.Constants.Playback.BITRATE, l.f, "CONVIVA")),
                    t.value.resolution && t.value.resolution.width && t.value.resolution.height && (s = t.value.resolution.width,
                    e = t.value.resolution.height, (!isNaN(s) && 0 < s && s !== l.o || !isNaN(e) && 0 < e && e !== l.a) && (l.o = s,
                    l.a = e, l.O.reportPlaybackMetric(v.Constants.Playback.RESOLUTION, s, e, "CONVIVA")));
                }
            }, this.j = function() {
                var t = 0, i = 0, n = 0;
                if (l.O && l.s !== v.Constants.PlayerState.UNKNOWN) {
                    var e = l.l;
                    if (e) {
                        var o, a, s = e.tech({
                            IWillNotUseThisInPlugins: !0
                        });
                        if (s) {
                            if (s.vhs && s.vhs.playlists && s.vhs.playlists.media ? (d = s.vhs.playlists,
                            c = s.vhs.playlists.media()) : s.hls && s.hls.playlists && s.hls.playlists.media && (d = s.hls.playlists,
                            c = s.hls.playlists.media()), c && c.attributes) {
                                c.attributes.BANDWIDTH && (n = c.attributes.BANDWIDTH);
                                var r, f = e.audioTracks();
                                if (f && 0 < f.length) for (var u = 0; u < f.length; u++) {
                                    var h = f[u];
                                    if (h.enabled) {
                                        r = h;
                                        break;
                                    }
                                }
                                return t = n + (i = r && c.attributes.AUDIO && d && d.master && d.master.mediaGroups && d.master.mediaGroups.AUDIO && (d = d.master.mediaGroups.AUDIO[c.attributes.AUDIO]) && (c = d[r.id]) && c.playlists && c.playlists[0] && (d = c.playlists[0].attributes) && d.BANDWIDTH ? d.BANDWIDTH : i),
                                void ((o = Math.round(t / 1e3)) !== l.f && (l.f = o,
                                l.O.reportPlaybackMetric(v.Constants.Playback.BITRATE, l.f, "CONVIVA")));
                            }
                            var c = s.shakaPlayer_ || s.shaka_ || s.shakaPlayer;
                            if (c && "function" == typeof c.getStats) {
                                var d = c.getStats();
                                if (d && d.streamBandwidth) return void ((o = Math.round(d.streamBandwidth / 1e3)) !== l.f && (l.f = o,
                                l.O.reportPlaybackMetric(v.Constants.Playback.BITRATE, l.f, "CONVIVA")));
                            }
                            var c = s.hls_;
                            if (c && c.levels && 0 <= c.currentLevel) {
                                var d = c.levels[c.currentLevel];
                                if (d && d.bitrate) return void ((o = Math.round(d.bitrate / 1e3)) !== l.f && (l.f = o,
                                l.O.reportPlaybackMetric(v.Constants.Playback.BITRATE, l.f, "CONVIVA")));
                            }
                        }
                        e.mediaPlayer ? a = e.mediaPlayer : e.dash && e.dash.mediaPlayer && (a = e.dash.mediaPlayer),
                        a && "function" == typeof a.getQualityFor && "function" == typeof a.getBitrateInfoListFor && (s = a.getQualityFor("audio"),
                        c = a.getBitrateInfoListFor("audio"), void 0 !== s && c && c[s] && c[s].bitrate && (i = c[s].bitrate),
                        d = a.getQualityFor("video"), e = a.getBitrateInfoListFor("video"),
                        t = i + (n = void 0 !== d && e && e[d] && e[d].bitrate ? e[d].bitrate : n),
                        (o = Math.round(t / 1e3)) !== l.f && (l.f = o, l.O.reportPlaybackMetric(v.Constants.Playback.BITRATE, l.f, "CONVIVA")));
                    }
                }
            }, this.getBufferLength = function() {
                var t = l.l.buffered();
                if ("number" != typeof t) return -1;
                for (var i = 0, n = 0; n < t.length; n++) {
                    var e = t.start(n), o = t.end(n);
                    e <= l.l.currentTime() && l.l.currentTime() < o && (i += o - l.l.currentTime());
                }
                return l.P = i, 1e3 * l.P;
            }, this.M = function() {
                for (var t = 0; t < l.p.length; t++) {
                    var i = l.p[t];
                    l.y(i[0], i[1], i[2]);
                }
                l.p = [];
            }, this.x = function() {
                l.l && (l.k = l.l.readyState(), 0 === l.l.readyState() || l.l.ended() ? l.g(v.Constants.PlayerState.STOPPED) : (l.l.paused() || l.l.seeking()) && l.g(v.Constants.PlayerState.PAUSED));
            }, this.g = function(t) {
                l.O && (l.s = t, l.O.reportPlaybackMetric(v.Constants.Playback.PLAYER_STATE, l.s, "CONVIVA"),
                l.R(), l.q = !0);
            }, this.C = function(t) {
                if (l.O) {
                    var i, n = !0, e = !0, o = (l.B && ((i = l.l.playlist && l.l.playlist() && 0 < l.l.playlist().length ? l.l.playlist()[l.l.playlist.currentItem()] : l.l.mediainfo) && (((o = i.custom_fields || i.customFields) && (o.isLive || o.islive) || 0 < i.duration) && (n = !1),
                    0 < i.duration && (e = !1)), l.F && void 0 !== l.F.isLive && (n = !1)),
                    {});
                    if (l.l && l.l.playlist && "function" == typeof l.l.playlist.currentItem && (e || n)) {
                        var a, s = !1;
                        switch (t.type) {
                          case "play":
                          case "waiting":
                            -1 === l.l.playlist.currentItem() && (s = !0);
                            break;

                          case "playing":
                          case "seeking":
                          case "seeked":
                          case "pause":
                          case "loadedmetadata":
                          case "loadeddata":
                          case "durationChange":
                            s = !0;
                        }
                        s && ("function" == typeof l.l.duration && (a = l.l.duration(),
                        l.l.duration() === 1 / 0 || isNaN(l.l.duration()) || (a = Math.round(l.l.duration()))),
                        a && a !== l.u && ((l.u = a) === 1 / 0 ? n && (o[v.Constants.IS_LIVE] = v.Constants.StreamType.LIVE) : 0 < a && (e && (o[v.Constants.DURATION] = a),
                        n && (o[v.Constants.IS_LIVE] = v.Constants.StreamType.VOD))));
                    }
                    "function" != typeof l.l.currentSource || !l.l.currentSource().src || (i = l.l.currentSource().src) !== l.h && (l.h = i,
                    o[v.Constants.STREAM_URL] = i), "{}" !== JSON.stringify(o) && l.O.setContentInfo(o);
                }
            }, this.S = function() {
                var t;
                l.l && "function" == typeof l.l.getVideoPlaybackQuality && l.l.getVideoPlaybackQuality() && ((t = l.l.getVideoPlaybackQuality().droppedVideoFrames) && 0 < t && t !== l.c && (l.c = t,
                l.O.reportPlaybackMetric(v.Constants.Playback.DROPPED_FRAMES_TOTAL, l.c, "CONVIVA")));
            }, this.U = function() {
                this.D = 0, this.G = 0, this.P = 0, this.J = this._.createTimer(this.z, 100, "videojsProxy._poll()");
            }, this.z = function() {
                l.O && (l.O.getAdType() !== v.Constants.AdType.CLIENT_SIDE && l.l ? (l.O.reportPlaybackMetric(v.Constants.Playback.PLAY_HEAD_TIME, 1e3 * l.l.currentTime(), "CONVIVA"),
                l.O.reportPlaybackMetric(v.Constants.Playback.BUFFER_LENGTH, l.getBufferLength(), "CONVIVA"),
                l.T(), l.L(), l.S()) : l.s !== v.Constants.PlayerState.UNKNOWN && (l.s = v.Constants.PlayerState.UNKNOWN));
            }, this.T = function() {
                l.D = l.G, l.G = l.l.currentTime();
                var t, i = Date.now();
                0 < l.W && i > l.W && (t = (t = (t = l.G - l.D) < 0 ? 0 : t) / (i - l.W) * 1e3,
                l.t.push(t)), l.W = i, l.t.length > Math.max(8, 4) && l.t.shift();
            }, this.L = function() {
                var t = l.t.length;
                if (t >= Math.min(4, 8)) {
                    for (var i = 0, n = l.t.slice(), e = 0; e < n.length; e++) i += n[e];
                    i /= t;
                    var o = 1, a = .25, s = l.l.playbackRate();
                    !isNaN(s) && s !== 1 / 0 && 0 < s && (o *= s = l.I() && s < .5 ? .5 : s,
                    a *= s), l.s !== v.Constants.PlayerState.PLAYING && 4 <= t && Math.abs(i - o) < a ? l.l.seeking() || (l.V("Adjusting Conviva player state to: PLAYING"),
                    l.g(v.Constants.PlayerState.PLAYING)) : 8 <= t && 0 === i && (l.l.paused() ? l.s !== v.Constants.PlayerState.PAUSED && (l.V("Adjusting Conviva player state to: PAUSED"),
                    l.g(v.Constants.PlayerState.PAUSED)) : l.l.seeking() || l.s !== v.Constants.PlayerState.BUFFERING && (l.V("Adjusting Conviva player state to: BUFFERING"),
                    l.g(v.Constants.PlayerState.BUFFERING)));
                }
            }, this.Y = function() {
                this.J && (this.J(), this.J = null);
            }, this.R = function() {
                l.t = [], l.D = -1, l.W = 0;
            }, this.H = function() {
                l.n = 0, l.i = 0;
            }, this.A = function(t) {
                l.V("error", t), l.l && l.l.error() && !l.B && (t = "Error Type: " + t.type + ", Error Message: " + l.l.error().message + ", Error Code: " + l.l.error().code,
                l.O.reportPlaybackError(t, v.Constants.ErrorSeverity.FATAL));
            }, this.V = function(t) {
                this.B ? this.K(t) : this.K.log(t, v.SystemSettings.LogLevel.DEBUG);
            }, this.Q = function(t, i) {
                if (!t) throw new Error("bcVideojsProxy: player argument cannot be null.");
                l.l = t, l.O = i, l.V("bcVideojsProxy.update()"), 0 === l.p.length && l.N(),
                l.R(), l.H(), l.Y(), l.U(), l.o = -1, l.a = -1, l.s = v.Constants.PlayerState.UNKNOWN,
                l.f = 0, l.u = -1, l.h = "", l.c = null, l.x();
                var t = {};
                t[v.Constants.MODULE_NAME] = "BC", t[v.Constants.MODULE_VERSION] = "4.1.11",
                l.O.setContentInfo(t), this.I() || this.m(), !l.I() && l.d || (l.j(),
                "function" == typeof l.l.videoWidth && "function" == typeof l.l.videoHeight && (i = l.l.videoWidth(),
                t = l.l.videoHeight(), (!isNaN(i) && 0 < i && i !== l.o || !isNaN(t) && 0 < t && t !== l.a) && (l.o = i,
                l.a = t, l.O.reportPlaybackMetric(v.Constants.Playback.RESOLUTION, i, t, "CONVIVA"))));
            }, this.I = function() {
                return /apple/i.test(navigator.vendor);
            }, function(t, i, n, e, o, a) {
                if (!t) throw new Error("videojsProxy: videoElement argument cannot be null.");
                var s = {};
                this.B = !1, this.l = t, this.O = n, this._ = new e.Impl.Html5Timer(),
                i ? (this.K = i.buildLogger(), this.K.setModuleName("videojsProxy"),
                s[e.Constants.MODULE_NAME] = "Video JS", (t = {})[e.Constants.FRAMEWORK_NAME] = "Video JS",
                "undefined" != typeof videojs && (t[e.Constants.FRAMEWORK_VERSION] = videojs.VERSION),
                this.O.setPlayerInfo(t)) : (this.K = o, this.F = a, s[e.Constants.MODULE_NAME] = "BC",
                this.B = !0), s[e.Constants.MODULE_VERSION] = "4.1.11", this.V("videojsProxy._constr()"),
                this.p = [], this.N(), this.R(), this.H(), this.U(), this.x(), this.O.setContentInfo(s),
                this.I() || this.m(), !l.I() && l.d || (l.j(), "function" == typeof l.l.videoWidth && "function" == typeof l.l.videoHeight && (n = l.l.videoWidth(),
                i = l.l.videoHeight(), (!isNaN(n) && 0 < n && n !== l.o || !isNaN(i) && 0 < i && i !== l.a) && (l.o = n,
                l.a = i, l.O.reportPlaybackMetric(e.Constants.Playback.RESOLUTION, n, i, "CONVIVA"))));
            }.apply(this, arguments), this.cleanup = function() {
                this.V("videojsProxy.cleanup()"), this.Y(), this.M(), this.I() || this.w(),
                this.l = null, l.O = null, l.o = -1, l.a = -1, l.s = v.Constants.PlayerState.UNKNOWN,
                l.f = 0, l.u = -1, l.h = "", l.c = null, l.d = !1;
            };
        }
        o.ProxyMonitor = {
            X: null,
            release: function() {
                this.X && this.X.cleanup();
            },
            initConvivaDropIn: function(t, i, n, e) {
                if (t) return this.X = new o.Impl.VideojsProxy(t, i, n, e), this.X;
                throw new Error("No player proxy initialized");
            }
        }, void 0 !== o && (o.Impl = o.Impl || {}, o.Impl.VideojsProxy = t);
    }(), o;
});
