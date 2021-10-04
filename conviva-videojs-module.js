/*! (C) 2021 Conviva, Inc. All rights reserved. Confidential and proprietary. */

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
        !function() {
            function t(t, i, n, p) {
                var y = this;
                y.t = [], y.i = 0, y.n = 0, y.e = !1, this.o = -1, this.s = -1, this.a = p.Constants.PlayerState.UNKNOWN, 
                this.r = !1, this.f = 0, this.u = -1, this.h = "", this.c = null, this.d = !1, this.v = function(t, i, n) {
                    void 0 === n && (n = y.l), y.p.push([ t, i, n ]), n.on(t, i);
                }, this.y = function(t, i, n) {
                    (n = void 0 === n ? y.l : n).off(t, i);
                }, this.N = function() {
                    y.v("onContentPauseRequested", function(t) {
                        y.V("onContentPauseRequested", t);
                    }), y.v("onContentResumeRequested", function(t) {
                        y.V("onContentResumeRequested", t);
                    }), y.v("abort", function(t) {
                        y.V("abort", t);
                    }), y.v("loadstart", function(t) {
                        y.V("loadstart", t);
                    }), y.v("firstplay", function(t) {
                        y.V("firstplay", t), y.C(t);
                    }), y.v("play", function(t) {
                        y.V("play", t), y.C(t);
                    }), y.v("ended", function(t) {
                        y.V("ended", t), y.g(p.Constants.PlayerState.STOPPED);
                    }), y.v("pause", function(t) {
                        y.V("pause", t), y.C(t), y.g(p.Constants.PlayerState.PAUSED);
                    }), y.v("playing", function(t) {
                        y.V("playing", t), y.C(t), 0 === y.l.currentTime() ? y.e = !0 : 0 < y.l.currentTime() && (y.e = !1);
                    }), y.v("waiting", function(t) {
                        y.V("waiting", t), y.C(t), y.g(p.Constants.PlayerState.BUFFERING);
                    }), y.v("timeupdate", function() {
                        y.e && (y.i++, y.a !== p.Constants.PlayerState.PLAYING && y.l && !y.l.seeking() && y.g(p.Constants.PlayerState.PLAYING));
                    }), y.v("error", function(t) {
                        y.A(t);
                    }), y.v("contenterror", function(t) {
                        y.A(t);
                    }), y.v("aderror", function(t) {
                        y.A(t);
                    }), y.v("loadedmetadata", function(t) {
                        y.V("loadedmetadata", t), y.C(t), y.I() || y.m();
                    }), y.v("loadeddata", function(t) {
                        y.V("loadeddata", t), y.C(t);
                    }), y.v("durationchange", function(t) {
                        y.V("durationchange", t), y.C(t);
                    }), y.v("seeking", function(t) {
                        y.V("seeking", t), y.C(t), y.isSeekStarted || (y.isSeekStarted = !0, y.O && y.O.reportPlaybackMetric(p.Constants.Playback.SEEK_STARTED, "CONVIVA")), 
                        y.e && y.a !== p.Constants.PlayerState.BUFFERING && (y.V("Adjusting Conviva player state to: BUFFERING"), 
                        y.g(p.Constants.PlayerState.BUFFERING));
                    }), y.v("seeked", function(t) {
                        y.V("seeked", t), y.C(t), y.isSeekStarted = !1, y.O && y.O.reportPlaybackMetric(p.Constants.Playback.SEEK_ENDED, "CONVIVA");
                    }), y.v("progress", function() {}), y.v("stalled", function() {}), y.v("resize", function() {
                        var t, i;
                        y.I() && y.j(), "function" == typeof y.l.videoWidth && "function" == typeof y.l.videoHeight && (t = y.l.videoWidth(), 
                        i = y.l.videoHeight(), (!isNaN(t) && 0 < t && t !== y.o || !isNaN(i) && 0 < i && i !== y.s) && (y.o = t, 
                        y.s = i, y.O.reportPlaybackMetric(p.Constants.Playback.RESOLUTION, t, i, "CONVIVA")));
                    });
                }, this.m = function() {
                    if (!y.d) {
                        for (var t, i = y.l.textTracks(), n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                        t && (t.on("cuechange", y.b), y.d = !0);
                    }
                }, this.w = function() {
                    for (var t, i = y.l.textTracks(), n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                    t && (t.off("cuechange", y.b), y.d = !1);
                }, this.b = function() {
                    var t = this.activeCues[0];
                    if (t && t.value && t.value.bandwidth && y.O && y.a !== p.Constants.PlayerState.UNKNOWN) {
                        var i = 0, n = t.value.bandwidth, e = y.l;
                        if (e) {
                            var o, s, a, r = e.tech(!0);
                            if (r) if (r.vhs && r.vhs.playlists && r.vhs.playlists.media ? (o = r.vhs.playlists, 
                            a = r.vhs.playlists.media()) : r.hls && r.hls.playlists && r.hls.playlists.media && (o = r.hls.playlists, 
                            a = r.hls.playlists.media()), a && a.attributes) {
                                if (a.attributes.BANDWIDTH) {
                                    var f = e.audioTracks();
                                    if (f && 0 < f.length) for (var u = 0; u < f.length; u++) {
                                        var h = f[u];
                                        if (h.enabled) {
                                            s = h;
                                            break;
                                        }
                                    }
                                }
                                s && a.attributes.AUDIO && o && o.master && o.master.mediaGroups && o.master.mediaGroups.AUDIO && (!(a = o.master.mediaGroups.AUDIO[a.attributes.AUDIO]) || (a = a[s.id]) && a.playlists && a.playlists[0] && ((a = a.playlists[0].attributes) && a.BANDWIDTH && (i = a.BANDWIDTH)));
                            }
                        }
                        i = Math.round((n + i) / 1e3);
                        i !== y.f && (y.f = i, y.O.reportPlaybackMetric(p.Constants.Playback.BITRATE, y.f, "CONVIVA")), 
                        t.value.resolution && t.value.resolution.width && t.value.resolution.height && (i = t.value.resolution.width, 
                        t = t.value.resolution.height, (!isNaN(i) && 0 < i && i !== y.o || !isNaN(t) && 0 < t && t !== y.s) && (y.o = i, 
                        y.s = t, y.O.reportPlaybackMetric(p.Constants.Playback.RESOLUTION, i, t, "CONVIVA")));
                    }
                }, this.j = function() {
                    var t = 0, i = 0, n = 0;
                    if (y.O && y.a !== p.Constants.PlayerState.UNKNOWN) {
                        var e = y.l;
                        if (e) {
                            var o, s, a, r = e.tech({
                                IWillNotUseThisInPlugins: !0
                            });
                            if (r) {
                                if (r.vhs && r.vhs.playlists && r.vhs.playlists.media ? (o = r.vhs.playlists, f = r.vhs.playlists.media()) : r.hls && r.hls.playlists && r.hls.playlists.media && (o = r.hls.playlists, 
                                f = r.hls.playlists.media()), f && f.attributes) {
                                    f.attributes.BANDWIDTH && (n = f.attributes.BANDWIDTH);
                                    var f, u, h = e.audioTracks();
                                    if (h && 0 < h.length) for (var c = 0; c < h.length; c++) {
                                        var d = h[c];
                                        if (d.enabled) {
                                            s = d;
                                            break;
                                        }
                                    }
                                    return s && f.attributes.AUDIO && o && o.master && o.master.mediaGroups && o.master.mediaGroups.AUDIO && (!(f = o.master.mediaGroups.AUDIO[f.attributes.AUDIO]) || (u = f[s.id]) && u.playlists && u.playlists[0] && ((v = u.playlists[0].attributes) && v.BANDWIDTH && (i = v.BANDWIDTH))), 
                                    t = n + i, void ((u = Math.round(t / 1e3)) !== y.f && (y.f = u, y.O.reportPlaybackMetric(p.Constants.Playback.BITRATE, y.f, "CONVIVA")));
                                }
                                var v = r.shakaPlayer_ || r.shaka_ || r.shakaPlayer;
                                if (v && "function" == typeof v.getStats) {
                                    v = v.getStats();
                                    if (v && v.streamBandwidth) return void ((u = Math.round(v.streamBandwidth / 1e3)) !== y.f && (y.f = u, 
                                    y.O.reportPlaybackMetric(p.Constants.Playback.BITRATE, y.f, "CONVIVA")));
                                }
                                r = r.hls_;
                                if (r && r.levels && 0 <= r.currentLevel) {
                                    var l = r.levels[r.currentLevel];
                                    if (l && l.bitrate) return void ((u = Math.round(l.bitrate / 1e3)) !== y.f && (y.f = u, 
                                    y.O.reportPlaybackMetric(p.Constants.Playback.BITRATE, y.f, "CONVIVA")));
                                }
                            }
                            e.mediaPlayer ? a = e.mediaPlayer : e.dash && e.dash.mediaPlayer && (a = e.dash.mediaPlayer), 
                            a && "function" == typeof a.getQualityFor && "function" == typeof a.getBitrateInfoListFor && (l = a.getQualityFor("audio"), 
                            e = a.getBitrateInfoListFor("audio"), void 0 !== l && e && e[l] && e[l].bitrate && (i = e[l].bitrate), 
                            l = a.getQualityFor("video"), a = a.getBitrateInfoListFor("video"), t = i + (n = void 0 !== l && a && a[l] && a[l].bitrate ? a[l].bitrate : n), 
                            (u = Math.round(t / 1e3)) !== y.f && (y.f = u, y.O.reportPlaybackMetric(p.Constants.Playback.BITRATE, y.f, "CONVIVA")));
                        }
                    }
                }, this.getBufferLength = function() {
                    var t = y.l.buffered();
                    if ("number" != typeof t) return -1;
                    for (var i = 0, n = 0; n < t.length; n++) {
                        var e = t.start(n), o = t.end(n);
                        e <= y.l.currentTime() && y.l.currentTime() < o && (i += o - y.l.currentTime());
                    }
                    return y.P = i, 1e3 * y.P;
                }, this.M = function() {
                    for (var t = 0; t < y.p.length; t++) {
                        var i = y.p[t];
                        y.y(i[0], i[1], i[2]);
                    }
                    y.p = [];
                }, this.x = function() {
                    y.l && (y.k = y.l.readyState(), 0 === y.l.readyState() || y.l.ended() ? y.g(p.Constants.PlayerState.STOPPED) : (y.l.paused() || y.l.seeking()) && y.g(p.Constants.PlayerState.PAUSED));
                }, this.g = function(t) {
                    y.O && (y.a = t, y.O.reportPlaybackMetric(p.Constants.Playback.PLAYER_STATE, y.a, "CONVIVA"), 
                    y.R(), y.q = !0);
                }, this.C = function(t) {
                    if (y.O) {
                        var i, n = !0, e = !0;
                        y.B && ((o = y.l.playlist && y.l.playlist() && 0 < y.l.playlist().length ? y.l.playlist()[y.l.playlist.currentItem()] : y.l.mediainfo) && (((i = o.custom_fields || o.customFields) && (i.isLive || i.islive) || 0 < o.duration) && (n = !1), 
                        0 < o.duration && (e = !1)), y.F && void 0 !== y.F.isLive && (n = !1));
                        var o = {};
                        if (y.l && y.l.playlist && "function" == typeof y.l.playlist.currentItem && (e || n)) {
                            var s, a = !1;
                            switch (t.type) {
                              case "play":
                              case "waiting":
                                -1 === y.l.playlist.currentItem() && (a = !0);
                                break;

                              case "playing":
                              case "seeking":
                              case "seeked":
                              case "pause":
                              case "loadedmetadata":
                              case "loadeddata":
                              case "durationChange":
                                a = !0;
                            }
                            a && ("function" == typeof y.l.duration && (s = y.l.duration(), y.l.duration() === 1 / 0 || isNaN(y.l.duration()) || (s = Math.round(y.l.duration()))), 
                            s && s !== y.u && ((y.u = s) === 1 / 0 ? n && (o[p.Constants.IS_LIVE] = p.Constants.StreamType.LIVE) : 0 < s && (e && (o[p.Constants.DURATION] = s), 
                            n && (o[p.Constants.IS_LIVE] = p.Constants.StreamType.VOD))));
                        }
                        "function" != typeof y.l.currentSource || !y.l.currentSource().src || (n = y.l.currentSource().src) !== y.h && (y.h = n, 
                        o[p.Constants.STREAM_URL] = n), "{}" !== JSON.stringify(o) && y.O.setContentInfo(o);
                    }
                }, this.S = function() {
                    var t;
                    y.l && "function" == typeof y.l.getVideoPlaybackQuality && y.l.getVideoPlaybackQuality() && ((t = y.l.getVideoPlaybackQuality().droppedVideoFrames) && 0 < t && t !== y.c && (y.c = t, 
                    y.O.reportPlaybackMetric(p.Constants.Playback.DROPPED_FRAMES_TOTAL, y.c, "CONVIVA")));
                }, this.U = function() {
                    this.D = 0, this.G = 0, this.P = 0, this.J = this._.createTimer(this.z, 100, "videojsProxy._poll()");
                }, this.z = function() {
                    y.O && (y.O.getAdType() !== p.Constants.AdType.CLIENT_SIDE && y.l ? (y.O.reportPlaybackMetric(p.Constants.Playback.PLAY_HEAD_TIME, 1e3 * y.l.currentTime(), "CONVIVA"), 
                    y.O.reportPlaybackMetric(p.Constants.Playback.BUFFER_LENGTH, y.getBufferLength(), "CONVIVA"), 
                    y.T(), y.L(), y.S()) : y.a !== p.Constants.PlayerState.UNKNOWN && (y.a = p.Constants.PlayerState.UNKNOWN));
                }, this.T = function() {
                    y.D = y.G, y.G = y.l.currentTime();
                    var t, i = Date.now();
                    0 < y.W && i > y.W && (t = (t = (t = y.G - y.D) < 0 ? 0 : t) / (i - y.W) * 1e3, 
                    y.t.push(t)), y.W = i, y.t.length > Math.max(8, 4) && y.t.shift();
                }, this.L = function() {
                    var t = y.t.length;
                    if (t >= Math.min(4, 8)) {
                        for (var i = 0, n = y.t.slice(), e = 0; e < n.length; e++) i += n[e];
                        i /= t;
                        var o = 1, s = .25, a = y.l.playbackRate();
                        !isNaN(a) && a !== 1 / 0 && 0 < a && (o *= a = y.I() && a < .5 ? .5 : a, s *= a), 
                        y.a !== p.Constants.PlayerState.PLAYING && 4 <= t && Math.abs(i - o) < s ? y.l.seeking() || (y.V("Adjusting Conviva player state to: PLAYING"), 
                        y.g(p.Constants.PlayerState.PLAYING)) : 8 <= t && 0 === i && (y.l.paused() ? y.a !== p.Constants.PlayerState.PAUSED && (y.V("Adjusting Conviva player state to: PAUSED"), 
                        y.g(p.Constants.PlayerState.PAUSED)) : y.l.seeking() || y.a !== p.Constants.PlayerState.BUFFERING && (y.V("Adjusting Conviva player state to: BUFFERING"), 
                        y.g(p.Constants.PlayerState.BUFFERING)));
                    }
                }, this.Y = function() {
                    this.J && (this.J(), this.J = null);
                }, this.R = function() {
                    y.t = [], y.D = -1, y.W = 0;
                }, this.H = function() {
                    y.n = 0, y.i = 0;
                }, this.A = function(t) {
                    y.V("error", t), y.l && y.l.error() && !y.B && (t = "Error Type: " + t.type + ", Error Message: " + y.l.error().message + ", Error Code: " + y.l.error().code, 
                    y.O.reportPlaybackError(t, p.Constants.ErrorSeverity.FATAL));
                }, this.V = function(t) {
                    this.B ? this.K(t) : this.K.log(t, p.SystemSettings.LogLevel.DEBUG);
                }, this.Q = function(t, i) {
                    if (!t) throw new Error("bcVideojsProxy: player argument cannot be null.");
                    y.l = t, y.O = i, y.V("bcVideojsProxy.update()"), 0 === y.p.length && y.N(), y.R(), 
                    y.H(), y.Y(), y.U(), y.o = -1, y.s = -1, y.a = p.Constants.PlayerState.UNKNOWN, 
                    y.f = 0, y.u = -1, y.h = "", y.c = null, y.x();
                    t = {};
                    t[p.Constants.MODULE_NAME] = "BC", t[p.Constants.MODULE_VERSION] = "4.1.10", y.O.setContentInfo(t), 
                    this.I() || this.m(), y.I() && (y.j(), "function" == typeof y.l.videoWidth && "function" == typeof y.l.videoHeight && (i = y.l.videoWidth(), 
                    t = y.l.videoHeight(), (!isNaN(i) && 0 < i && i !== y.o || !isNaN(t) && 0 < t && t !== y.s) && (y.o = i, 
                    y.s = t, y.O.reportPlaybackMetric(p.Constants.Playback.RESOLUTION, i, t, "CONVIVA"))));
                }, this.I = function() {
                    return /apple/i.test(navigator.vendor);
                }, function(t, i, n, e, o, s) {
                    if (!t) throw new Error("videojsProxy: videoElement argument cannot be null.");
                    var a = {};
                    this.B = !1, this.l = t, this.O = n, this._ = new e.Impl.Html5Timer(), i ? (this.K = i.buildLogger(), 
                    this.K.setModuleName("videojsProxy"), a[e.Constants.MODULE_NAME] = "Video JS", (i = {})[e.Constants.FRAMEWORK_NAME] = "Video JS", 
                    "undefined" != typeof videojs && (i[e.Constants.FRAMEWORK_VERSION] = videojs.VERSION), 
                    this.O.setPlayerInfo(i)) : (this.K = o, this.F = s, a[e.Constants.MODULE_NAME] = "BC", 
                    this.B = !0), a[e.Constants.MODULE_VERSION] = "4.1.10", this.V("videojsProxy._constr()"), 
                    this.p = [], this.N(), this.R(), this.H(), this.U(), this.x(), this.O.setContentInfo(a), 
                    this.I() || this.m(), y.I() && (y.j(), "function" == typeof y.l.videoWidth && "function" == typeof y.l.videoHeight && (s = y.l.videoWidth(), 
                    a = y.l.videoHeight(), (!isNaN(s) && 0 < s && s !== y.o || !isNaN(a) && 0 < a && a !== y.s) && (y.o = s, 
                    y.s = a, y.O.reportPlaybackMetric(e.Constants.Playback.RESOLUTION, s, a, "CONVIVA"))));
                }.apply(this, arguments), this.cleanup = function() {
                    this.V("videojsProxy.cleanup()"), this.Y(), this.M(), this.I() || this.w(), this.l = null, 
                    y.O = null, y.o = -1, y.s = -1, y.a = p.Constants.PlayerState.UNKNOWN, y.f = 0, 
                    y.u = -1, y.h = "", y.c = null, y.d = !1;
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
            };
            void 0 !== o && (o.Impl = o.Impl || {}, o.Impl.VideojsProxy = t);
        }();
    }(), o;
});