"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateFormat;
(function (DateFormat) {
    DateFormat[DateFormat["YYYYMMDD"] = 0] = "YYYYMMDD";
    DateFormat[DateFormat["YYYYMMMMDD"] = 1] = "YYYYMMMMDD";
    DateFormat[DateFormat["YYYYMMDDHHMM"] = 2] = "YYYYMMDDHHMM";
    DateFormat[DateFormat["YYYYMMDDHHMMSS"] = 3] = "YYYYMMDDHHMMSS";
    DateFormat[DateFormat["TBD"] = 4] = "TBD";
})(DateFormat || (DateFormat = {}));
var ReleaseRegion;
(function (ReleaseRegion) {
    ReleaseRegion[ReleaseRegion["Europe"] = 1] = "Europe";
    ReleaseRegion[ReleaseRegion["NorthAmerica"] = 2] = "NorthAmerica";
    ReleaseRegion[ReleaseRegion["Australia"] = 3] = "Australia";
    ReleaseRegion[ReleaseRegion["NewZealand"] = 4] = "NewZealand";
    ReleaseRegion[ReleaseRegion["Japan"] = 5] = "Japan";
    ReleaseRegion[ReleaseRegion["China"] = 6] = "China";
    ReleaseRegion[ReleaseRegion["Asia"] = 7] = "Asia";
    ReleaseRegion[ReleaseRegion["Worldwide"] = 8] = "Worldwide";
    ReleaseRegion[ReleaseRegion["Korea"] = 9] = "Korea";
    ReleaseRegion[ReleaseRegion["Brazil"] = 10] = "Brazil";
})(ReleaseRegion || (ReleaseRegion = {}));
var PopularityType;
(function (PopularityType) {
    PopularityType[PopularityType["IGDBVisits"] = 1] = "IGDBVisits";
    PopularityType[PopularityType["IGDBWantToPlay"] = 2] = "IGDBWantToPlay";
    PopularityType[PopularityType["IGDBPlaying"] = 3] = "IGDBPlaying";
    PopularityType[PopularityType["IGDBPlayed"] = 4] = "IGDBPlayed";
    PopularityType[PopularityType["Steam24hrPeakPlayers"] = 5] = "Steam24hrPeakPlayers";
    PopularityType[PopularityType["SteamPositiveReviews"] = 6] = "SteamPositiveReviews";
    PopularityType[PopularityType["SteamNegativeReviews"] = 7] = "SteamNegativeReviews";
    PopularityType[PopularityType["SteamTotalReviews"] = 8] = "SteamTotalReviews";
})(PopularityType || (PopularityType = {}));
var AgeRatingCategory;
(function (AgeRatingCategory) {
    AgeRatingCategory[AgeRatingCategory["ESRB"] = 1] = "ESRB";
    AgeRatingCategory[AgeRatingCategory["PEGI"] = 2] = "PEGI";
    AgeRatingCategory[AgeRatingCategory["CERO"] = 3] = "CERO";
    AgeRatingCategory[AgeRatingCategory["USK"] = 4] = "USK";
    AgeRatingCategory[AgeRatingCategory["GRAC"] = 5] = "GRAC";
    AgeRatingCategory[AgeRatingCategory["CLASS_IND"] = 6] = "CLASS_IND";
    AgeRatingCategory[AgeRatingCategory["ACB"] = 7] = "ACB";
})(AgeRatingCategory || (AgeRatingCategory = {}));
