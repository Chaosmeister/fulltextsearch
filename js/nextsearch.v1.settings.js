/*
 * FullNextSearch - Full Text Search your Nextcloud.
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 * @copyright 2017
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 */

/** global: searchbar */
/** global: api */

var next_settings = {

	parent: null,
	delay_provider: 300,
	delay_result: 150,
	resultContainer: null,
	entryTemplate: null,
	searchProviderId: '',
	lockSearchbox: false,
	entryTemplateDefault: null,
	divNoResult: null,

	generateDefaultTemplate: function () {

		var divLeft = $('<div>', {class: 'result_entry_left'});
		divLeft.append($('<div>', {id: 'title'}));
		divLeft.append($('<div>', {id: 'line1'}));
		divLeft.append($('<div>', {id: 'line2'}));

		var divRight = $('<div>', {class: 'result_entry_right'});
		divRight.append($('<div>', {id: 'score'}));

		var div = $('<div>', {class: 'result_entry_default'});
		div.append(divLeft);
		div.append(divRight);

		next_settings.entryTemplateDefault = $('<div>').append(div);
	},


	generateNoResultDiv: function () {
		var div = $('<div>', {id: 'noresult'});
		div.html('no result');
		div.hide();
		next_settings.divNoResult = div;
	},


	setEntryTemplateId: function (template, parent) {
		next_settings.entryTemplate = template;
		next_settings.parent = parent;
	},

	setResultContainerId: function (container) {
		next_settings.resultContainer = container;
		next_settings.resultContainer.prepend(next_settings.divNoResult);
	},

	addSearchBar: function (providerId) {
		next_settings.searchProviderId = providerId;
		searchbar.init();
	},

	parentHasMethod: function (method) {
		if (next_settings.parent === null) {
			return false;
		}
		return (typeof eval('next_settings.parent. ' + method) === "function");
	}
};