
# Changelog

## 4.2.1 (6/APR/2023)
* Supports auto-collection of Audio, Subtitles and Closed Captions Language( Core SDK 4.7.0 and above).

## 4.1.13 (3/MAR/2023)
* Supports auto collection of Average Bitrate (Core SDK 4.6.1 and above).

## 4.1.12 (11/DEC/2022)
* Supports Typescript.

## 4.1.11 (15/MAR/2022)
* Supports Video.js 7.20.1.
* Fixes issue where bitrate is not reported for streams without textTracks.

## 4.1.10 (30/SEP/2021)
* Supports Video.js 7.15.2.
* Fixes issue where bitrate is not reported for HLS demux stream.
* Fixes issue of error when dropped video frames api is not available.

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
