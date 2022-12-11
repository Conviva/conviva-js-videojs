export type valueof<T> = T[keyof T];

export namespace Impl {
    function videojsProxy(player?:Player, systemFactory?: systemFactory, videoAnalytics?: VideoAnalytics, Conviva?: Conviva): void;
}

export namespace ProxyMonitor {
    function initConvivaDropIn(player?: Player, systemFactory?: systemFactory, videoAnalytics?: VideoAnalytics, Conviva?: Conviva): ProxyMonitor;
    function release(): void;
}