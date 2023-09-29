/**
 * This file is part of
 * Kimai - Open Source Time Tracking // https://www.kimai.org
 * (c) 2006-2009 Kimai-Development-Team
 *
 * Kimai is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; Version 3, 29 June 2007
 *
 * Kimai is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Kimai; If not, see <http://www.gnu.org/licenses/>.
 */

// ===========
// TS EXT init
// ===========

// set path of extension
var ts_ext_path = "../extensions/ki_timesheets/";
var ts_total = '';

var scroller_width;
var drittel;
var timeSheet_width;
var timeSheet_height;

var timesheet_timeframe_changed_hook_flag = 0;
var timesheet_customers_changed_hook_flag = 0;
var timesheet_projects_changed_hook_flag = 0;
var timesheet_activities_changed_hook_flag = 0;



var ts_dayFormatExp = new RegExp("^([0-9]{1,2})\.([0-9]{1,2})\.([0-9]{2,4})$");
var ts_timeFormatExp = new RegExp("^([0-9]{1,2})(:[0-9]{1,2})?(:[0-9]{1,2})?$");

$(document).ready(function(){

    var ts_resizeTimer = null;
    $(window).bind('resize', function() {
       if (ts_resizeTimer) clearTimeout(ts_resizeTimer);
       ts_resizeTimer = setTimeout(ts_ext_resize, 500);
    });

    var description_opened = false;
    $(document).on('click', '#timeSheet_head td.description', function() {
        if (description_opened) {
            description_opened = false;
            $(this).attr('title', 'Alle Beschreibungen öffnen');
            $('#timeSheet td.description > .inner-description').removeClass('open');
        } else {
            description_opened = true;
            $(this).attr('title', 'Alle Beschreibungen schließen');
            $('#timeSheet td.description > .inner-description').addClass('open');
        }
    });

    $(document).on('click', '#timeSheet td.description > .inner-description', function() {
        $(this).addClass('open');
    });

    
});
