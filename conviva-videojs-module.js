/*! (C) 2023 Conviva, Inc. All rights reserved. Confidential and proprietary. */
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
        function t(t, i, n, l) {
            var p = this;
            p.t = [], p.i = 0, p.o = 0, p.u = !1, this.h = -1, this.v = -1, this.l = l.Constants.PlayerState.UNKNOWN, 
            this.p = !1, this.N = 0, this.V = 0, this.C = -1, this.g = "", this.I = null, 
            this.A = !1, this.O = function(t, i, n) {
                void 0 === n && (n = p.m), p.j.push([ t, i, n ]), n.on(t, i);
            }, this.M = function(t, i, n) {
                (n = void 0 === n ? p.m : n).off(t, i);
            }, this.P = function() {
                p.O("onContentPauseRequested", function(t) {
                    p.k("onContentPauseRequested", t);
                }), p.O("onContentResumeRequested", function(t) {
                    p.k("onContentResumeRequested", t);
                }), p.O("abort", function(t) {
                    p.k("abort", t);
                }), p.O("loadstart", function(t) {
                    p.k("loadstart", t);
                }), p.O("firstplay", function(t) {
                    p.k("firstplay", t), p.R(t);
                }), p.O("play", function(t) {
                    p.k("play", t), p.R(t);
                }), p.O("ended", function(t) {
                    p.k("ended", t), p.q(l.Constants.PlayerState.STOPPED);
                }), p.O("pause", function(t) {
                    p.k("pause", t), p.R(t), p.q(l.Constants.PlayerState.PAUSED);
                }), p.O("playing", function(t) {
                    p.k("playing", t), p.R(t), 0 === p.m.currentTime() ? p.u = !0 : 0 < p.m.currentTime() && (p.u = !1);
                }), p.O("waiting", function(t) {
                    p.k("waiting", t), p.R(t), p.q(l.Constants.PlayerState.BUFFERING);
                }), p.O("timeupdate", function() {
                    p.u && (p.i++, p.l !== l.Constants.PlayerState.PLAYING) && p.m && !p.m.seeking() && p.q(l.Constants.PlayerState.PLAYING);
                }), p.O("error", function(t) {
                    p.B(t);
                }), p.O("contenterror", function(t) {
                    p.B(t);
                }), p.O("aderror", function(t) {
                    p.B(t);
                }), p.O("loadedmetadata", function(t) {
                    p.k("loadedmetadata", t), p.R(t), p.F() || p.S();
                }), p.O("loadeddata", function(t) {
                    p.k("loadeddata", t), p.R(t);
                }), p.O("durationchange", function(t) {
                    p.k("durationchange", t), p.R(t);
                }), p.O("seeking", function(t) {
                    p.k("seeking", t), p.R(t), p.isSeekStarted || (p.isSeekStarted = !0, 
                    p.U && p.U.reportPlaybackMetric(l.Constants.Playback.SEEK_STARTED, "CONVIVA")), 
                    p.u && p.l !== l.Constants.PlayerState.BUFFERING && (p.k("Adjusting Conviva player state to: BUFFERING"), 
                    p.q(l.Constants.PlayerState.BUFFERING));
                }), p.O("seeked", function(t) {
                    p.k("seeked", t), p.R(t), p.isSeekStarted = !1, p.U && p.U.reportPlaybackMetric(l.Constants.Playback.SEEK_ENDED, "CONVIVA");
                }), p.O("progress", function() {
                    p.A || p.D();
                }), p.O("stalled", function() {}), p.O("resize", function() {
                    var t, i;
                    !p.F() && p.A || p.D(), "function" == typeof p.m.videoWidth && "function" == typeof p.m.videoHeight && (t = p.m.videoWidth(), 
                    i = p.m.videoHeight(), !isNaN(t) && 0 < t && t !== p.h || !isNaN(i) && 0 < i && i !== p.v) && (p.h = t, 
                    p.v = i, p.U.reportPlaybackMetric(l.Constants.Playback.RESOLUTION, t, i, "CONVIVA"));
                });
            }, this.S = function() {
                if (!p.A) {
                    for (var t, i = p.m.textTracks(), n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                    t && (t.on("cuechange", p.G), p.A = !0);
                }
            }, this.J = function() {
                for (var t, i = p.m.textTracks(), n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                t && (t.off("cuechange", p.G), p.A = !1);
            }, this.G = function() {
                var t = this.activeCues[0];
                if (t && t.value && t.value.bandwidth && p.U && p.l !== l.Constants.PlayerState.UNKNOWN) {
                    var i = 0, n = 0, e = t.value.bandwidth, o = p.m;
                    if (o) {
                        var a, s, r = o.tech(!0);
                        if (r) if (r.vhs && r.vhs.playlists && r.vhs.playlists.media ? (s = r.vhs.playlists, 
                        c = r.vhs.playlists.media()) : r.hls && r.hls.playlists && r.hls.playlists.media && (s = r.hls.playlists, 
                        c = r.hls.playlists.media()), c && c.attributes) {
                            if (c.attributes["AVERAGE-BANDWIDTH"] && (n = parseInt(c.attributes["AVERAGE-BANDWIDTH"], 10)), 
                            c.attributes.BANDWIDTH) {
                                var f = o.audioTracks();
                                if (f && 0 < f.length) for (var u = 0; u < f.length; u++) {
                                    var h = f[u];
                                    if (h.enabled) {
                                        a = h;
                                        break;
                                    }
                                }
                            }
                            a && c.attributes.AUDIO && s && s.master && s.master.mediaGroups && s.master.mediaGroups.AUDIO && (r = s.master.mediaGroups.AUDIO[c.attributes.AUDIO]) && (o = r[a.id]) && o.playlists && o.playlists[0] && (s = o.playlists[0].attributes) && s.BANDWIDTH && (i = s.BANDWIDTH);
                        }
                    }
                    var c = Math.round((e + i) / 1e3);
                    c !== p.N && (p.N = c, p.U.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.N, "CONVIVA")), 
                    (n = Math.round(n / 1e3)) !== p.V && (p.V = n, p.U.reportPlaybackMetric(l.Constants.Playback.AVG_BITRATE, p.V, "CONVIVA")), 
                    t.value.resolution && t.value.resolution.width && t.value.resolution.height && (r = t.value.resolution.width, 
                    o = t.value.resolution.height, !isNaN(r) && 0 < r && r !== p.h || !isNaN(o) && 0 < o && o !== p.v) && (p.h = r, 
                    p.v = o, p.U.reportPlaybackMetric(l.Constants.Playback.RESOLUTION, r, o, "CONVIVA"));
                }
            }, this.D = function() {
                var t = 0, i = 0, n = 0, e = 0;
                if (p.U && p.l !== l.Constants.PlayerState.UNKNOWN) {
                    var o = p.m;
                    if (o) {
                        var a, s, r = o.tech({
                            IWillNotUseThisInPlugins: !0
                        });
                        if (r) {
                            if (r.vhs && r.vhs.playlists && r.vhs.playlists.media ? (v = r.vhs.playlists, 
                            d = r.vhs.playlists.media()) : r.hls && r.hls.playlists && r.hls.playlists.media && (v = r.hls.playlists, 
                            d = r.hls.playlists.media()), d && d.attributes) {
                                d.attributes.BANDWIDTH && (n = d.attributes.BANDWIDTH), 
                                d.attributes["AVERAGE-BANDWIDTH"] && (e = parseInt(d.attributes["AVERAGE-BANDWIDTH"], 10));
                                var f, u = o.audioTracks();
                                if (u && 0 < u.length) for (var h = 0; h < u.length; h++) {
                                    var c = u[h];
                                    if (c.enabled) {
                                        f = c;
                                        break;
                                    }
                                }
                                return t = n + (i = f && d.attributes.AUDIO && v && v.master && v.master.mediaGroups && v.master.mediaGroups.AUDIO && (v = v.master.mediaGroups.AUDIO[d.attributes.AUDIO]) && (d = v[f.id]) && d.playlists && d.playlists[0] && (v = d.playlists[0].attributes) && v.BANDWIDTH ? v.BANDWIDTH : i), 
                                (a = Math.round(t / 1e3)) !== p.N && (p.N = a, p.U.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.N, "CONVIVA")), 
                                void ((e = Math.round(e / 1e3)) !== p.V && (p.V = e, 
                                p.U.reportPlaybackMetric(l.Constants.Playback.AVG_BITRATE, p.V, "CONVIVA")));
                            }
                            var d = r.shakaPlayer_ || r.shaka_ || r.shakaPlayer;
                            if (d && "function" == typeof d.getStats) {
                                var v = d.getStats();
                                if (v && v.streamBandwidth) return void ((a = Math.round(v.streamBandwidth / 1e3)) !== p.N && (p.N = a, 
                                p.U.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.N, "CONVIVA")));
                            }
                            var e = r.hls_;
                            if (e && e.levels && 0 <= e.currentLevel) {
                                var d = e.levels[e.currentLevel];
                                if (d && d.bitrate) return void ((a = Math.round(d.bitrate / 1e3)) !== p.N && (p.N = a, 
                                p.U.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.N, "CONVIVA")));
                            }
                        }
                        o.mediaPlayer ? s = o.mediaPlayer : o.dash && o.dash.mediaPlayer && (s = o.dash.mediaPlayer), 
                        s && "function" == typeof s.getQualityFor && "function" == typeof s.getBitrateInfoListFor && (v = s.getQualityFor("audio"), 
                        r = s.getBitrateInfoListFor("audio"), void 0 !== v && r && r[v] && r[v].bitrate && (i = r[v].bitrate), 
                        e = s.getQualityFor("video"), d = s.getBitrateInfoListFor("video"), 
                        t = i + (n = void 0 !== e && d && d[e] && d[e].bitrate ? d[e].bitrate : n), 
                        (a = Math.round(t / 1e3)) !== p.N) && (p.N = a, p.U.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.N, "CONVIVA"));
                    }
                }
            }, this.getBufferLength = function() {
                var t = p.m.buffered();
                if ("number" != typeof t) return -1;
                for (var i = 0, n = 0; n < t.length; n++) {
                    var e = t.start(n), o = t.end(n);
                    e <= p.m.currentTime() && p.m.currentTime() < o && (i += o - p.m.currentTime());
                }
                return p._ = i, 1e3 * p._;
            }, this.T = function() {
                for (var t = 0; t < p.j.length; t++) {
                    var i = p.j[t];
                    p.M(i[0], i[1], i[2]);
                }
                p.j = [];
            }, this.L = function() {
                p.m && (p.W = p.m.readyState(), 0 === p.m.readyState() || p.m.ended() ? p.q(l.Constants.PlayerState.STOPPED) : (p.m.paused() || p.m.seeking()) && p.q(l.Constants.PlayerState.PAUSED));
            }, this.q = function(t) {
                p.U && (p.l = t, p.U.reportPlaybackMetric(l.Constants.Playback.PLAYER_STATE, p.l, "CONVIVA"), 
                p.Y(), p.H = !0);
            }, this.R = function(t) {
                if (p.U) {
                    var i, n = !0, e = !0, o = (p.K && ((i = p.m.playlist && p.m.playlist() && 0 < p.m.playlist().length ? p.m.playlist()[p.m.playlist.currentItem()] : p.m.mediainfo) && (((o = i.custom_fields || i.customFields) && (o.isLive || o.islive) || 0 < i.duration) && (n = !1), 
                    0 < i.duration) && (e = !1), p.X) && void 0 !== p.X.isLive && (n = !1), 
                    {});
                    if (p.m && p.m.playlist && "function" == typeof p.m.playlist.currentItem && (e || n)) {
                        var a, s = !1;
                        switch (t.type) {
                          case "play":
                          case "waiting":
                            -1 === p.m.playlist.currentItem() && (s = !0);
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
                        s && ("function" == typeof p.m.duration && (a = p.m.duration(), 
                        p.m.duration() === 1 / 0 || isNaN(p.m.duration()) || (a = Math.round(p.m.duration()))), 
                        a) && a !== p.C && ((p.C = a) === 1 / 0 ? n && (o[l.Constants.IS_LIVE] = l.Constants.StreamType.LIVE) : 0 < a && (e && (o[l.Constants.DURATION] = a), 
                        n) && (o[l.Constants.IS_LIVE] = l.Constants.StreamType.VOD));
                    }
                    "function" == typeof p.m.currentSource && p.m.currentSource().src && (i = p.m.currentSource().src) !== p.g && (p.g = i, 
                    o[l.Constants.STREAM_URL] = i), "{}" !== JSON.stringify(o) && p.U.setContentInfo(o);
                }
            }, this.Z = function() {
                var t;
                p.m && "function" == typeof p.m.getVideoPlaybackQuality && p.m.getVideoPlaybackQuality() && (t = p.m.getVideoPlaybackQuality().droppedVideoFrames) && 0 < t && t !== p.I && (p.I = t, 
                p.U.reportPlaybackMetric(l.Constants.Playback.DROPPED_FRAMES_TOTAL, p.I, "CONVIVA"));
            }, this.$ = function() {
                this.tt = 0, this.it = 0, this._ = 0, this.nt = this.et.createTimer(this.ot, 100, "videojsProxy._poll()");
            }, this.ot = function() {
                p.U && (p.U.getAdType() !== l.Constants.AdType.CLIENT_SIDE && p.m ? (p.U.reportPlaybackMetric(l.Constants.Playback.PLAY_HEAD_TIME, 1e3 * p.m.currentTime(), "CONVIVA"), 
                p.U.reportPlaybackMetric(l.Constants.Playback.BUFFER_LENGTH, p.getBufferLength(), "CONVIVA"), 
                p.at(), p.st(), p.Z()) : p.l !== l.Constants.PlayerState.UNKNOWN && (p.l = l.Constants.PlayerState.UNKNOWN));
            }, this.at = function() {
                p.tt = p.it, p.it = p.m.currentTime();
                var t, i = Date.now();
                0 < p.rt && i > p.rt && (t = (t = (t = p.it - p.tt) < 0 ? 0 : t) / (i - p.rt) * 1e3, 
                p.t.push(t)), p.rt = i, p.t.length > Math.max(8, 4) && p.t.shift();
            }, this.st = function() {
                var t = p.t.length;
                if (t >= Math.min(4, 8)) {
                    for (var i = 0, n = p.t.slice(), e = 0; e < n.length; e++) i += n[e];
                    i /= t;
                    var o = 1, a = .25, s = p.m.playbackRate();
                    !isNaN(s) && s !== 1 / 0 && 0 < s && (o *= s = p.F() && s < .5 ? .5 : s, 
                    a *= s), p.l !== l.Constants.PlayerState.PLAYING && 4 <= t && Math.abs(i - o) < a ? p.m.seeking() || (p.k("Adjusting Conviva player state to: PLAYING"), 
                    p.q(l.Constants.PlayerState.PLAYING)) : 8 <= t && 0 === i && (p.m.paused() ? p.l !== l.Constants.PlayerState.PAUSED && (p.k("Adjusting Conviva player state to: PAUSED"), 
                    p.q(l.Constants.PlayerState.PAUSED)) : p.m.seeking() || p.l !== l.Constants.PlayerState.BUFFERING && (p.k("Adjusting Conviva player state to: BUFFERING"), 
                    p.q(l.Constants.PlayerState.BUFFERING)));
                }
            }, this.ft = function() {
                this.nt && (this.nt(), this.nt = null);
            }, this.Y = function() {
                p.t = [], p.tt = -1, p.rt = 0;
            }, this.ut = function() {
                p.o = 0, p.i = 0;
            }, this.B = function(t) {
                p.k("error", t), p.m && p.m.error() && !p.K && (t = "Error Type: " + t.type + ", Error Message: " + p.m.error().message + ", Error Code: " + p.m.error().code, 
                p.U.reportPlaybackError(t, l.Constants.ErrorSeverity.FATAL));
            }, this.k = function(t) {
                this.K ? this.ht(t) : this.ht.log(t, l.SystemSettings.LogLevel.DEBUG);
            }, this.ct = function(t, i) {
                if (!t) throw new Error("bcVideojsProxy: player argument cannot be null.");
                p.m = t, p.U = i, p.k("bcVideojsProxy.update()"), 0 === p.j.length && p.P(), 
                p.Y(), p.ut(), p.ft(), p.$(), p.h = -1, p.v = -1, p.l = l.Constants.PlayerState.UNKNOWN, 
                p.N = 0, p.C = -1, p.g = "", p.I = null, p.L();
                var t = {};
                t[l.Constants.MODULE_NAME] = "BC", t[l.Constants.MODULE_VERSION] = "4.1.13", 
                p.U.setContentInfo(t), this.F() || this.S(), !p.F() && p.A || (p.D(), 
                "function" == typeof p.m.videoWidth && "function" == typeof p.m.videoHeight && (i = p.m.videoWidth(), 
                t = p.m.videoHeight(), !isNaN(i) && 0 < i && i !== p.h || !isNaN(t) && 0 < t && t !== p.v) && (p.h = i, 
                p.v = t, p.U.reportPlaybackMetric(l.Constants.Playback.RESOLUTION, i, t, "CONVIVA")));
            }, this.F = function() {
                return /apple/i.test(navigator.vendor);
            }, function(t, i, n, e, o, a) {
                if (!t) throw new Error("videojsProxy: videoElement argument cannot be null.");
                var s = {};
                this.K = !1, this.m = t, this.U = n, this.et = new e.Impl.Html5Timer(), 
                i ? (this.ht = i.buildLogger(), this.ht.setModuleName("videojsProxy"), 
                s[e.Constants.MODULE_NAME] = "Video JS", (t = {})[e.Constants.FRAMEWORK_NAME] = "Video JS", 
                "undefined" != typeof videojs && (t[e.Constants.FRAMEWORK_VERSION] = videojs.VERSION), 
                this.U.setPlayerInfo(t)) : (this.ht = o, this.X = a, s[e.Constants.MODULE_NAME] = "BC", 
                this.K = !0), s[e.Constants.MODULE_VERSION] = "4.1.13", this.k("videojsProxy._constr()"), 
                this.j = [], this.P(), this.Y(), this.ut(), this.$(), this.L(), 
                this.U.setContentInfo(s), this.F() || this.S(), !p.F() && p.A || (p.D(), 
                "function" == typeof p.m.videoWidth && "function" == typeof p.m.videoHeight && (n = p.m.videoWidth(), 
                i = p.m.videoHeight(), !isNaN(n) && 0 < n && n !== p.h || !isNaN(i) && 0 < i && i !== p.v) && (p.h = n, 
                p.v = i, p.U.reportPlaybackMetric(e.Constants.Playback.RESOLUTION, n, i, "CONVIVA")));
            }.apply(this, arguments), this.cleanup = function() {
                this.k("videojsProxy.cleanup()"), this.ft(), this.T(), this.F() || this.J(), 
                this.m = null, p.U = null, p.h = -1, p.v = -1, p.l = l.Constants.PlayerState.UNKNOWN, 
                p.N = 0, p.C = -1, p.g = "", p.I = null, p.A = !1;
            };
        }
        o.ProxyMonitor = {
            dt: null,
            release: function() {
                this.dt && this.dt.cleanup();
            },
            initConvivaDropIn: function(t, i, n, e) {
                if (t) return this.dt = new o.Impl.VideojsProxy(t, i, n, e), this.dt;
                throw new Error("No player proxy initialized");
            }
        }, void 0 !== o && (o.Impl = o.Impl || {}, o.Impl.VideojsProxy = t);
    }(), o;
});