// GTFS import script
const importGTFS = require('./import');

// Standard GTFS Filenames
const agencies = require('./gtfs/agencies');
const calendars = require('./gtfs/calendars');
const calendarDates = require('./gtfs/calendar-dates');
const fareAttributes = require('./gtfs/fare-attributes');
const fareRules = require('./gtfs/fare-rules');
const feedInfo = require('./gtfs/feed-info');
const routes = require('./gtfs/routes');
const shapes = require('./gtfs/shapes');
const stops = require('./gtfs/stops');
const stopTimes = require('./gtfs/stop-times');
const trips = require('./gtfs/trips');

// Non-standard GTFS Filenames
const stopAttributes = require('./gtfs/stop-attributes');
const timetables = require('./gtfs/timetables');
const timetableStopOrder = require('./gtfs/timetable-stop-order');
const timetablePages = require('./gtfs/timetable-pages');

exports.import = importGTFS;

exports.getAgencies = agencies.getAgencies;

exports.getCalendarDates = calendarDates.getCalendarDates;

exports.getCalendars = calendars.getCalendars;

exports.getFareAttributes = fareAttributes.getFareAttributes;

exports.getFareRules = fareRules.getFareRules;

exports.getFeedInfo = feedInfo.getFeedInfo;

exports.getRoutes = routes.getRoutes;

exports.getShapes = shapes.getShapes;
exports.getShapesAsGeoJSON = shapes.getShapesAsGeoJSON;

exports.getStopAttributes = stopAttributes.getStopAttributes;

exports.getStops = stops.getStops;
exports.getStopsAsGeoJSON = stops.getStopsAsGeoJSON;

exports.getStoptimes = stopTimes.getStoptimes;

exports.getTrips = trips.getTrips;
exports.getDirectionsByRoute = trips.getDirectionsByRoute;

exports.getTimetablePages = timetablePages.getTimetablePages;

exports.getTimetableStopOrders = timetableStopOrder.getTimetableStopOrders;

exports.getTimetables = timetables.getTimetables;
