
# Changelog

## 4.1.8 (30/MAR/2021)
* Supports Video.js 7.11.5
* Updated bitrate reporting logic to report current playing segment bitrate instead of downloading segment.

## 4.1.2 (12/NOV/2020)
* Supports Video.js 7.10.1
* Supports auto collection of Screen Resolution of the Display connected to Chromecast. (Core SDK 4.0.18 and above)
* Supports auto collection of Dropped Frames during playback. (Core SDK 4.0.18 and above)
* Added handling of video error events like error, contenterror, aderror fired by the player.

## 4.0.4 (26/JUN/2020)
* Fixes an issue when an ES5 non-compatible keyword const is used.

## 4.0.3 (28/MAY/2020)
* Fixes an issue where query parameters from streamUrl were getting removed.

## 4.0.1 (07/APR/2020)
* Supports Video.js 7.6.6.
* Introduces a major upgrade to the SDK architecture that simplifies and accelerates Conviva integration.
* Introduces Analytics, VideoAnalytics, and AdAnalytics to simplify the integration of the SDK.
