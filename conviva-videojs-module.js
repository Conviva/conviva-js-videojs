/*! (C) 2024 Conviva, Inc. All rights reserved. Confidential and proprietary. */
!function(t, i) {
    var n;
    "function" == typeof define && define.amd ? define(i) : ("object" == typeof exports || "object" == typeof module && module.exports) && (module.exports = i()), 
    void 0 !== t && t && (void 0 !== t.Conviva && t.Conviva ? t.Conviva.ProxyMonitor || t.ConvivaModuleLoading || (n = i(), 
    t.ConvivaModuleLoading = !0, t.Conviva.ProxyMonitor = n.ProxyMonitor, t.Conviva.Impl.VideojsProxy = n.Impl.VideojsProxy, 
    delete t.ConvivaModuleLoading) : t.ConvivaModule || t.ConvivaModuleLoading || (t.ConvivaModuleLoading = !0, 
    t.ConvivaModule = i(), delete t.ConvivaModuleLoading));
}(this, function() {
    var o = {};
    function t(t, i, n, l) {
        var p = this, a = (p.t = [], p.i = 0, p.o = 0, p.u = !1, "");
        function e() {
            var t = p.h.audioTracks();
            if (null !== t) for (var i = 0; i < t.length; i++) {
                var n = t[i];
                if (n.enabled) return "" !== n.label && "" !== n.language ? a = "[" + n.language + "]:" + n.label : "" !== n.label && "" === n.language ? a = n.label : "" === n.label && "" !== n.language && (a = n.language), 
                void (p.v !== a && (p.v = a, p.l.reportPlaybackMetric(l.Constants.Playback.AUDIO_LANGUAGE, p.v, "CONVIVA"), 
                p.p(">>>>>>>>>>>> received Audio langauge " + p.v)));
            }
        }
        function o() {
            if (null !== p.h) {
                var t = p.h.textTracks(), i = !0, n = !0;
                if (t) for (var e = 0; e < t.length; e++) {
                    var o = t[e];
                    if ("showing" === o.mode) return "subtitles" === o.kind && ("" !== o.label && "" !== o.language ? a = "[" + o.language + "]:" + o.label : "" !== o.label && "" === o.language ? a = o.label : "" === o.label && "" !== o.language && (a = o.language), 
                    p.N = a, p.l.reportPlaybackMetric(l.Constants.Playback.SUBTITLES_LANGUAGE, p.N, "CONVIVA"), 
                    p.p("received subtitle changed event: " + p.N), i = !1), void ("captions" === o.kind && ("" !== o.label && "" !== o.language ? a = "[" + o.language + "]:" + o.label : "" !== o.label && "" === o.language ? a = o.label : "" === o.label && "" !== o.language && (a = o.language), 
                    p.V = a, p.l.reportPlaybackMetric(l.Constants.Playback.CLOSED_CAPTIONS_LANGUAGE, p.V, "CONVIVA"), 
                    p.p("received caption changed event: " + p.V), n = !1));
                }
                if (i && p.N && "off" !== p.N) {
                    if (p.l.getAdType() === l.Constants.AdType.CLIENT_SIDE) return;
                    p.N = "off", p.l.reportPlaybackMetric(l.Constants.Playback.SUBTITLES_LANGUAGE, p.N, "CONVIVA"), 
                    p.p("Subtitle track selected :: " + p.N);
                }
                n && p.V && "off" !== p.V && p.l.getAdType() !== l.Constants.AdType.CLIENT_SIDE && (p.V = "off", 
                p.l.reportPlaybackMetric(l.Constants.Playback.CLOSED_CAPTIONS_LANGUAGE, p.V, "CONVIVA"), 
                p.p("Caption track selected :: " + p.V));
            }
        }
        this.C = -1, this.g = -1, this.I = l.Constants.PlayerState.UNKNOWN, this.A = !1, 
        this.O = 0, this.m = 0, this.j = -1, this.M = "", this.P = null, this.k = !1, 
        this.v = "", this.V = "", this.N = "", this.R = !1, p.S = !1, this.q = function(t, i, n) {
            void 0 === n && (n = p.h), p.B.push([ t, i, n ]), n.on(t, i);
        }, this.F = function(t, i, n) {
            (n = void 0 === n ? p.h : n).off(t, i);
        }, this.U = function() {
            p.q("onContentPauseRequested", function(t) {
                p.p("onContentPauseRequested", t);
            }), p.q("onContentResumeRequested", function(t) {
                p.p("onContentResumeRequested", t);
            }), p.q("abort", function(t) {
                p.p("abort", t);
            }), p.q("loadstart", function(t) {
                p.p("loadstart", t);
            }), p.q("firstplay", function(t) {
                p.p("firstplay", t), p.D(t);
            }), p.q("play", function(t) {
                p.p("play", t), p.D(t);
            }), p.q("ended", function(t) {
                p.p("ended", t), p.G(l.Constants.PlayerState.STOPPED);
            }), p.q("pause", function(t) {
                p.p("pause", t), p.D(t), p.G(l.Constants.PlayerState.PAUSED);
            }), p.q("playing", function(t) {
                p.p("playing", t), p.D(t), 0 === p.h.currentTime() ? p.u = !0 : 0 < p.h.currentTime() && (p.u = !1);
            }), p.q("waiting", function(t) {
                p.p("waiting", t), p.D(t), p.G(l.Constants.PlayerState.BUFFERING);
            }), p.q("timeupdate", function() {
                p.u && (p.i++, p.I !== l.Constants.PlayerState.PLAYING) && p.h && !p.h.seeking() && p.G(l.Constants.PlayerState.PLAYING);
            }), p.q("error", function(t) {
                p.J(t);
            }), p.q("contenterror", function(t) {
                p.J(t);
            }), p.q("aderror", function(t) {
                p.J(t);
            }), p.q("loadedmetadata", function(t) {
                p.p("loadedmetadata", t), p.D(t), p._() || p.T();
            }), p.q("loadeddata", function(t) {
                p.p("loadeddata", t), p.D(t);
            }), p.q("durationchange", function(t) {
                p.p("durationchange", t), p.D(t);
            }), p.q("seeking", function(t) {
                p.p("seeking", t), p.D(t), p.isSeekStarted || (p.isSeekStarted = !0, 
                p.l && p.l.reportPlaybackMetric(l.Constants.Playback.SEEK_STARTED, "CONVIVA")), 
                p.u && p.I !== l.Constants.PlayerState.BUFFERING && (p.p("Adjusting Conviva player state to: BUFFERING"), 
                p.G(l.Constants.PlayerState.BUFFERING));
            }), p.q("seeked", function(t) {
                p.p("seeked", t), p.D(t), p.isSeekStarted = !1, p.l && p.l.reportPlaybackMetric(l.Constants.Playback.SEEK_ENDED, "CONVIVA");
            }), p.q("progress", function() {
                p.k || p.L(), p.R || p.W(), p.S || p.Y();
            }), p.q("stalled", function() {}), p.q("resize", function() {
                var t, i;
                !p._() && p.k || p.L(), "function" == typeof p.h.videoWidth && "function" == typeof p.h.videoHeight && (t = p.h.videoWidth(), 
                i = p.h.videoHeight(), !isNaN(t) && 0 < t && t !== p.C || !isNaN(i) && 0 < i && i !== p.g) && (p.C = t, 
                p.g = i, p.l.reportPlaybackMetric(l.Constants.Playback.RESOLUTION, t, i, "CONVIVA"));
            });
        }, this.W = function() {
            var t;
            p.R || ((t = p.h.audioTracks()) && e(), t.addEventListener("change", function() {
                e();
            }), !p.R && 0 < t.length && (p.R = !0));
        }, this.Y = function() {
            var t;
            p.S || (p.H = !1, p.K = !1, (t = p.h.textTracks()) && o(), t.addEventListener("change", function() {
                o();
            }), p.S = !0);
        }, this.T = function() {
            if (!p.k) {
                var t, i = p.h.textTracks();
                if (i) for (var n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
                t && (t.on("cuechange", p.X), p.k = !0);
            }
        }, this.Z = function() {
            var t, i = p.h.textTracks();
            if (i) for (var n = 0; n < i.length; n++) "segment-metadata" === i[n].label && (t = i[n]);
            t && (t.off("cuechange", p.X), p.k = !1);
        }, this.X = function() {
            var t = this.activeCues[0];
            if (t && t.value && t.value.bandwidth && p.l && p.I !== l.Constants.PlayerState.UNKNOWN) {
                var i = 0, n = 0, e = t.value.bandwidth, o = p.h;
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
                        a && c.attributes.AUDIO && (s && (s.master ? d = s.master : s.main && (d = s.main)), 
                        d) && d.mediaGroups && d.mediaGroups.AUDIO && (r = d.mediaGroups.AUDIO[c.attributes.AUDIO]) && (o = r[a.id]) && o.playlists && o.playlists[0] && (s = o.playlists[0].attributes) && s.BANDWIDTH && (i = s.BANDWIDTH);
                    }
                }
                var c, d = Math.round((e + i) / 1e3);
                d !== p.O && (p.O = d, p.l.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.O, "CONVIVA")), 
                (n = Math.round(n / 1e3)) !== p.m && (p.m = n, p.l.reportPlaybackMetric(l.Constants.Playback.AVG_BITRATE, p.m, "CONVIVA")), 
                t.value.resolution && t.value.resolution.width && t.value.resolution.height && (c = t.value.resolution.width, 
                r = t.value.resolution.height, !isNaN(c) && 0 < c && c !== p.C || !isNaN(r) && 0 < r && r !== p.g) && (p.C = c, 
                p.g = r, p.l.reportPlaybackMetric(l.Constants.Playback.RESOLUTION, c, r, "CONVIVA"));
            }
        }, this.L = function() {
            var t = 0, i = 0, n = 0, e = 0;
            if (p.l && p.I !== l.Constants.PlayerState.UNKNOWN) {
                var o = p.h;
                if (o) {
                    var a, s = o.tech({
                        IWillNotUseThisInPlugins: !0
                    });
                    if (s) {
                        if (s.vhs && s.vhs.playlists && s.vhs.playlists.media ? (d = s.vhs.playlists, 
                        v = s.vhs.playlists.media()) : s.hls && s.hls.playlists && s.hls.playlists.media && (d = s.hls.playlists, 
                        v = s.hls.playlists.media()), v && v.attributes) {
                            v.attributes.BANDWIDTH && (n = v.attributes.BANDWIDTH), 
                            v.attributes["AVERAGE-BANDWIDTH"] && (e = parseInt(v.attributes["AVERAGE-BANDWIDTH"], 10));
                            var r, f, u = o.audioTracks();
                            if (u && 0 < u.length) for (var h = 0; h < u.length; h++) {
                                var c = u[h];
                                if (c.enabled) {
                                    r = c;
                                    break;
                                }
                            }
                            return t = n + (i = r && v.attributes.AUDIO && (d && (d.master ? f = d.master : d.main && (f = d.main)), 
                            f) && f.mediaGroups && f.mediaGroups.AUDIO && (d = f.mediaGroups.AUDIO[v.attributes.AUDIO]) && (f = d[r.id]) && f.playlists && f.playlists[0] && (v = f.playlists[0].attributes) && v.BANDWIDTH ? v.BANDWIDTH : i), 
                            (f = Math.round(t / 1e3)) !== p.O && (p.O = f, p.l.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.O, "CONVIVA")), 
                            void ((e = Math.round(e / 1e3)) !== p.m && (p.m = e, 
                            p.l.reportPlaybackMetric(l.Constants.Playback.AVG_BITRATE, p.m, "CONVIVA")));
                        }
                        var d = s.shakaPlayer_ || s.shaka_ || s.shakaPlayer;
                        if (d && "function" == typeof d.getStats) {
                            var v = d.getStats();
                            if (v && v.streamBandwidth) return void ((f = Math.round(v.streamBandwidth / 1e3)) !== p.O && (p.O = f, 
                            p.l.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.O, "CONVIVA")));
                        }
                        var e = s.hls_;
                        if (e && e.levels && 0 <= e.currentLevel) {
                            var d = e.levels[e.currentLevel];
                            if (d && d.bitrate) return void ((f = Math.round(d.bitrate / 1e3)) !== p.O && (p.O = f, 
                            p.l.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.O, "CONVIVA")));
                        }
                    }
                    o.mediaPlayer ? a = o.mediaPlayer : o.dash && o.dash.mediaPlayer && (a = o.dash.mediaPlayer), 
                    a && "function" == typeof a.getQualityFor && "function" == typeof a.getBitrateInfoListFor && (v = a.getQualityFor("audio"), 
                    s = a.getBitrateInfoListFor("audio"), void 0 !== v && s && s[v] && s[v].bitrate && (i = s[v].bitrate), 
                    e = a.getQualityFor("video"), d = a.getBitrateInfoListFor("video"), 
                    t = i + (n = void 0 !== e && d && d[e] && d[e].bitrate ? d[e].bitrate : n), 
                    (f = Math.round(t / 1e3)) !== p.O) && (p.O = f, p.l.reportPlaybackMetric(l.Constants.Playback.BITRATE, p.O, "CONVIVA"));
                }
            }
        }, this.getBufferLength = function() {
            var t = p.h.buffered();
            if ("number" != typeof t.length) return -1;
            for (var i = 0, n = 0; n < t.length; n++) {
                var e = t.start(n), o = t.end(n);
                p.h.currentTime && e <= p.h.currentTime() && p.h.currentTime() < o && (i += o - p.h.currentTime());
            }
            return p.$ = i, 1e3 * p.$;
        }, this.tt = function() {
            for (var t = 0; t < p.B.length; t++) {
                var i = p.B[t];
                p.F(i[0], i[1], i[2]);
            }
            p.B = [];
        }, this.it = function() {
            p.h && (0 === p.h.readyState() || p.h.ended() ? p.G(l.Constants.PlayerState.STOPPED) : (p.h.paused() || p.h.seeking()) && p.G(l.Constants.PlayerState.PAUSED));
        }, this.G = function(t) {
            p.l && (p.I = t, p.l.reportPlaybackMetric(l.Constants.Playback.PLAYER_STATE, p.I, "CONVIVA"), 
            p.nt(), p.et = !0);
        }, this.D = function(t) {
            if (p.l) {
                var i, n = !0, e = !0, o = (p.ot && ((i = p.h.playlist && p.h.playlist() && 0 < p.h.playlist().length ? p.h.playlist()[p.h.playlist.currentItem()] : p.h.mediainfo) && (((o = i.custom_fields || i.customFields) && (o.isLive || o.islive) || i.duration && 0 < i.duration && i.duration !== 1 / 0) && (n = !1), 
                0 < i.duration) && (e = !1), p.at) && void 0 !== p.at.isLive && (n = !1), 
                {});
                if (p.h && (e || n)) {
                    var a, s = !1;
                    switch (t.type) {
                      case "play":
                      case "waiting":
                        (void 0 === p.h.playlist || p.h.playlist && -1 === p.h.playlist.currentItem()) && (s = !0);
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
                    s && ("function" == typeof p.h.duration && (a = p.h.duration(), 
                    p.h.duration() === 1 / 0 || isNaN(p.h.duration()) || (a = Math.round(p.h.duration()))), 
                    a) && a !== p.j && ((p.j = a) === 1 / 0 ? n && (o[l.Constants.IS_LIVE] = l.Constants.StreamType.LIVE) : 0 < a && (e && (o[l.Constants.DURATION] = a), 
                    n) && (o[l.Constants.IS_LIVE] = l.Constants.StreamType.VOD));
                }
                "function" == typeof p.h.currentSource && p.h.currentSource().src && (i = p.h.currentSource().src) !== p.M && (p.M = i, 
                o[l.Constants.STREAM_URL] = i), "{}" !== JSON.stringify(o) && p.l.setContentInfo(o);
            }
        }, this.st = function() {
            var t;
            p.h && "function" == typeof p.h.getVideoPlaybackQuality && p.h.getVideoPlaybackQuality() && (t = p.h.getVideoPlaybackQuality().droppedVideoFrames) && 0 < t && t !== p.P && (p.P = t, 
            p.l.reportPlaybackMetric(l.Constants.Playback.DROPPED_FRAMES_TOTAL, p.P, "CONVIVA"));
        }, this.rt = function() {
            this.ft = 0, this.ut = 0, this.$ = 0, this.ht = this.ct.createTimer(this.dt, 100, "videojsProxy._poll()");
        }, this.dt = function() {
            p.l && (p.l.getAdType() !== l.Constants.AdType.CLIENT_SIDE && p.h ? (void 0 !== p.h.currentTime() && p.l.reportPlaybackMetric(l.Constants.Playback.PLAY_HEAD_TIME, 1e3 * p.h.currentTime(), "CONVIVA"), 
            p.l.reportPlaybackMetric(l.Constants.Playback.BUFFER_LENGTH, p.getBufferLength(), "CONVIVA"), 
            p.vt(), p.lt(), p.st()) : p.I !== l.Constants.PlayerState.UNKNOWN && (p.I = l.Constants.PlayerState.UNKNOWN));
        }, this.vt = function() {
            p.ft = p.ut, void 0 !== p.h.currentTime() && (p.ut = p.h.currentTime());
            var t, i = Date.now();
            0 < p.Nt && i > p.Nt && (t = (t = (t = p.ut - p.ft) < 0 ? 0 : t) / (i - p.Nt) * 1e3, 
            p.t.push(t)), p.Nt = i, p.t.length > Math.max(8, 4) && p.t.shift();
        }, this.lt = function() {
            var t = p.t.length;
            if (t >= Math.min(4, 8)) {
                for (var i = 0, n = p.t.slice(), e = 0; e < n.length; e++) i += n[e];
                i /= t;
                var o = 1, a = .25, s = p.h.playbackRate();
                !isNaN(s) && s !== 1 / 0 && 0 < s && (o *= s = p._() && s < .5 ? .5 : s, 
                a *= s), p.I !== l.Constants.PlayerState.PLAYING && 4 <= t && Math.abs(i - o) < a ? p.h.seeking() || (p.p("Adjusting Conviva player state to: PLAYING"), 
                p.G(l.Constants.PlayerState.PLAYING)) : 8 <= t && 0 === i && (p.h.paused() ? p.I !== l.Constants.PlayerState.PAUSED && (p.p("Adjusting Conviva player state to: PAUSED"), 
                p.G(l.Constants.PlayerState.PAUSED)) : p.h.seeking() || p.I !== l.Constants.PlayerState.BUFFERING && (p.p("Adjusting Conviva player state to: BUFFERING"), 
                p.G(l.Constants.PlayerState.BUFFERING)));
            }
        }, this.Vt = function() {
            this.ht && (this.ht(), this.ht = null);
        }, this.nt = function() {
            p.t = [], p.ft = -1, p.Nt = 0;
        }, this.yt = function() {
            p.o = 0, p.i = 0;
        }, this.J = function(t) {
            p.p("error", t), p.h && p.h.error() && !p.ot && (t = "Error Type: " + t.type + ", Error Message: " + p.h.error().message + ", Error Code: " + p.h.error().code, 
            p.l.reportPlaybackError(t, l.Constants.ErrorSeverity.FATAL));
        }, this.p = function(t) {
            this.ot ? this.Ct(t) : this.Ct.log(t, l.SystemSettings.LogLevel.DEBUG);
        }, this.gt = function(t, i) {
            if (!t) throw new Error("bcVideojsProxy: player argument cannot be null.");
            p.h = t, p.l = i, p.p("bcVideojsProxy.update()"), 0 === p.B.length && p.U(), 
            p.nt(), p.yt(), p.Vt(), p.rt(), p.R = !1, p.S = !1, p.v = "", p.V = "", 
            p.N = "", p.K = !1, p.H = !1, p.Y(), p.W(), p.C = -1, p.g = -1, p.I = l.Constants.PlayerState.UNKNOWN, 
            p.O = 0, p.j = -1, p.M = "", p.P = null, p.it();
            var t = {};
            t[l.Constants.MODULE_NAME] = "BC", t[l.Constants.MODULE_VERSION] = "4.3.3", 
            p.l.setContentInfo(t), this._() || this.T(), !p._() && p.k || (p.L(), 
            "function" == typeof p.h.videoWidth && "function" == typeof p.h.videoHeight && (i = p.h.videoWidth(), 
            t = p.h.videoHeight(), !isNaN(i) && 0 < i && i !== p.C || !isNaN(t) && 0 < t && t !== p.g) && (p.C = i, 
            p.g = t, p.l.reportPlaybackMetric(l.Constants.Playback.RESOLUTION, i, t, "CONVIVA")));
        }, this._ = function() {
            return /apple/i.test(navigator.vendor);
        }, function(t, i, n, e, o, a) {
            if (!t) throw new Error("videojsProxy: videoElement argument cannot be null.");
            var s = {};
            this.ot = !1, this.h = t, this.l = n, this.ct = new e.Impl.Html5Timer(), 
            i ? (this.Ct = i.buildLogger(), this.Ct.setModuleName("videojsProxy"), 
            s[e.Constants.MODULE_NAME] = "Video JS", (t = {})[e.Constants.FRAMEWORK_NAME] = "Video JS", 
            "undefined" != typeof videojs && (t[e.Constants.FRAMEWORK_VERSION] = videojs.VERSION), 
            this.l.setPlayerInfo(t)) : (this.Ct = o, this.at = a, s[e.Constants.MODULE_NAME] = "BC", 
            this.ot = !0), s[e.Constants.MODULE_VERSION] = "4.3.3", this.p("videojsProxy._constr()"), 
            this.B = [], this.U(), this.nt(), this.yt(), this.rt(), this.W(), this.it(), 
            this.l.setContentInfo(s), this._() || this.T(), !p._() && p.k || (p.L(), 
            "function" == typeof p.h.videoWidth && "function" == typeof p.h.videoHeight && (n = p.h.videoWidth(), 
            i = p.h.videoHeight(), !isNaN(n) && 0 < n && n !== p.C || !isNaN(i) && 0 < i && i !== p.g) && (p.C = n, 
            p.g = i, p.l.reportPlaybackMetric(e.Constants.Playback.RESOLUTION, n, i, "CONVIVA")));
        }.apply(this, arguments), this.cleanup = function() {
            this.p("videojsProxy.cleanup()"), this.Vt(), this.tt(), this._() || this.Z(), 
            this.h = null, p.l = null, p.C = -1, p.g = -1, p.I = l.Constants.PlayerState.UNKNOWN, 
            p.O = 0, p.m = 0, p.j = -1, p.M = "", p.P = null, p.k = !1, p.R = !1, 
            p.S = !1, p.v = "", p.V = "", p.N = "";
        };
    }
    return o.ProxyMonitor = {
        It: null,
        release: function() {
            this.It && this.It.cleanup();
        },
        initConvivaDropIn: function(t, i, n, e) {
            if (t) return this.It = new o.Impl.VideojsProxy(t, i, n, e), this.It;
            throw new Error("No player proxy initialized");
        }
    }, void 0 !== o && (o.Impl = o.Impl || {}, o.Impl.VideojsProxy = t), o;
});