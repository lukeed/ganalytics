declare module "ganalytics" {
	export type Number = string | number;
	export type Boolean = 1 | 0 | '1' | '0';

	export type ProductAction = 'detail' | 'click' | 'add' | 'remove' | 'checkout' | 'checkout_option' | 'purchase' | 'refund';

	export interface EventMap {
		'event': EventParams,
		'social': SocialParams,
		'pageview': CommonParams,
		'exception': ExceptionParams,
		'screenview': ScreenviewParams,
		'transaction': TransactionParams,
		'timing': TimingParams,
		'item': ItemParams,
	}

	export type EventOptional = 'pageview' | 'exception' | 'screenview';

	export interface GAnalytics {
		send<K extends keyof EventMap>(type: K, params: EventMap[K]): void;
		send(type: EventOptional): void;
	}

	export interface CommonParams {
		/**
		 * Anonymize the sender's IP address.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip
		 * @example '0', 1
		 */
		aip?: Boolean;

		/**
		 * The hit's data source type.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ds
		 * @example 'call center', 'web'
		 */
		ds?: string;

		/**
		 * The time delta (in milliseconds) between the hit's occurrence and when it was reported.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#qt
		 * @example 560, '560'
		 */
		qt?: Number;

		/**
		 * The application or site owner's known identifier for the user.
		 * @note This becomes required if `cid` is not defined.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uid
		 * @example 'as8eknlll', 'foobar'
		 */
		uid?: string;

		/**
		 * The application or site owner's generated identifier for the client device.
		 * @note This becomes required if `uid` is not defined.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cid
		 * @example 'as8eknlll', 'foobar'
		 */
		cid?: string;

		/**
		 * Control the session duration. The session will begin or end with this hit.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#sc
		 * @example 'start', 'end'
		 */
		sc?: 'start' | 'end';

		/**
		 * The IP address of the user in IPV4 or IPV6 format
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uip
		 * @example '1.2.3.4'
		 */
		uip?: string;

		/**
		 * The User Agent of the browser.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ua
		 * @example 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'
		 */
		ua?: string;

		/**
		 * The geographical location of the user. It should be a two-letter country code or a [Geographical ID](http://developers.google.com/analytics/devguides/collection/protocol/v1/geoid).
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#geoid
		 * @example 'US', '21137'
		 */
		geoid?: string;

		/**
		 * The referral source that brought traffic to the application.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dr
		 * @example 'http://example.com'
		 */
		dr?: string;

		/**
		 * The campaign name.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cn
		 * @example '(direct)'
		 */
		cn?: string;

		/**
		 * The campaign source.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cs
		 * @example '(direct)'
		 */
		cs?: string;

		/**
		 * The campaign medium.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cm
		 * @example 'organic'
		 */
		cm?: string;

		/**
		 * The campaign keyword.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ck
		 * @example 'Blue Shoes'
		 */
		ck?: string;

		/**
		 * The campaign content.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cc
		 * @example 'content'
		 */
		cc?: string;

		/**
		 * The campaign identifier.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ci
		 * @example 'ID'
		 */
		ci?: string;

		/**
		 * The Google Ads ID.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#gclid
		 * @example 'CL6Q-OXyqKUCFcgK2goddQuoHg'
		 */
		gclid?: string;

		/**
		 * Google Display Ads identifier.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dclid
		 * @example 'd_click_id'
		 */
		dclid?: string;

		/**
		 * The screen resolution.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#sr
		 * @example '800x600'
		 */
		sr?: string;

		/**
		 * The viewport size.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#vp
		 * @example '123x456'
		 */
		vp?: string;

		/**
		 * The character set used to encode the current page/document.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#de
		 * @default 'UTF-8'
		 * @example 'UTF-8'
		 */
		de?: string;

		/**
		 * The screen's color depth.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#sd
		 * @example '24-bits'
		 */
		sd?: string;

		/**
		 * The user's language.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ul
		 * @example 'en-us'
		 */
		ul?: string;

		/**
		 * Specify whether Java was enabled.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#je
		 * @example '1', 0
		 */
		je?: Boolean;

		/**
		 * Specify the version of Flash available.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#fl
		 * @example '10 1 r103'
		 */
		fl?: string;

		/**
		 * Consider the hit as non-interactive.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ni
		 * @example 'd_click_id'
		 */
		ni?: Boolean;

		/**
		 * The full URL (document location) of the document.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dl
		 * @example 'http://foo.com/home?a=b'
		 */
		dl?: string;

		/**
		 * The document's hostname.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dh
		 * @example 'foo.com'
		 */
		dh?: string;

		/**
		 * The path portion of the document's URL location.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dp
		 * @example '/foo'
		 */
		dp?: string;

		/**
		 * The document's title.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dt
		 * @example 'Settings'
		 */
		dt?: string;

		/**
		 * The document's content group. You may have up to 5 groupings, each of which cna have up to 100 groups.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cg_
		 * @example 'news/sports'
		 */
		cg1?: string;

		/**
		 * The document's content group. You may have up to 5 groupings, each of which cna have up to 100 groups.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cg_
		 * @example 'news/sports'
		 */
		cg2?: string;

		/**
		 * The document's content group. You may have up to 5 groupings, each of which cna have up to 100 groups.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cg_
		 * @example 'news/sports'
		 */
		cg3?: string;

		/**
		 * The document's content group. You may have up to 5 groupings, each of which cna have up to 100 groups.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cg_
		 * @example 'news/sports'
		 */
		cg4?: string;

		/**
		 * The document's content group. You may have up to 5 groupings, each of which cna have up to 100 groups.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cg_
		 * @example 'news/sports'
		 */
		cg5?: string;

		/**
		 * The ID of a clicked DOM element, used to disambiguate multiple links to the same URL for In-Page Analytics reports.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#linkid
		 * @example 'nav_bar'
		 */
		linkid?: string;

		/**
		 * The application's name.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#an
		 * @example 'My App'
		 */
		an?: string;

		/**
		 * The application identifier.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aid
		 * @example 'com.company.app'
		 */
		aid?: string;

		/**
		 * The application's version.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#av
		 * @example '1.2'
		 */
		av?: string;

		/**
		 * The application's installer identifier.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aiid
		 * @example 'com.platform.vending'
		 */
		aiid?: string;

		/**
		 * The role of the products included in a git. If no Product Action is specified, all product definitions included with the hit will be ignored.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#pa
		 * @example 'detail'
		 */
		pa?: ProductAction,

		/**
		 * The list or collection from which a product action occurred. This is an additional parameter that can be sent when Product Action is set to 'detail' or 'click'.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#pal
		 * @example 'Search Results'
		 */
		pal?: string,

		/**
		 * The step number in a checkout funnel. This is an additional parameter that can be sent when Product Action is set to 'checkout'.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cos
		 * @example '2'
		 */
		cos?: Number,

		/**
		 * Additional information about a checkout step. This is an additional parameter that can be sent when Product Action is set to 'checkout'.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#col
		 * @example 'Visa'
		 */
		col?: string,

		/**
		 * Indicate the local currency for all transaction currency values. Value should be a valid ISO 4217 currency code.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cu
		 * @example 'EUR'
		 */
		cu?: string,

		/**
		 * Specify the experiment ID that the user is exposed to, if any. It should be sent in conjunction with the `xvar` parameter.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#xid
		 * @example 'Qp0gahJ3RAO3DJ18b0XoUQ'
		 */
		xid?: string,

		/**
		 * The experiment's version number, if any. It should be sent in conjunction with the `xid` parameter.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#xvar
		 * @example '1'
		 */
		xvar?: string,
	}

	export interface ScreenviewParams extends CommonParams {
		/**
		 * The document's screen name. Required for mobile applications. Optional for web applications, defaulting to `dl` value.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cd
		 * @example 'High Scores'
		 */
		cd?: string,
	}

	export interface EventParams extends CommonParams {
		/**
		 * The event category.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ec
		 * @example 'Category'
		 */
		ec: string;

		/**
		 * The event action.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ea
		 * @example 'Action'
		 */
		ea: string;

		/**
		 * The event label.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#el
		 * @example 'Label'
		 */
		el?: string;

		/**
		 * The event's non-negative value.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ev
		 * @example 55
		 */
		ev?: Number;
	}

	export interface ExceptionParams extends CommonParams {
		/**
		 * The exception's description.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#exd
		 * @example 'DatabaseError'
		 */
		exd?: string;

		/**
		 * Specify if the exception was fatal.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#exf
		 * @example 'DatabaseError'
		 */
		exf?: Boolean;
	}

	export interface SocialParams extends CommonParams {
		/**
		 * The social network.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#sn
		 * @example 'facebook'
		 */
		sn: string;

		/**
		 * The social interaction action; for example, on Facebook when a user clicks the 'Like' button, the social action is 'like'.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#sa
		 * @example 'like'
		 */
		sa: string;

		/**
		 * The social interaction's target, which is typically a URL but can be any text value.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#st
		 * @example 'http://foo.com'
		 */
		st: string;
	}

	export interface TimingParams extends CommonParams {
		/**
		 * The user's timing category.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#utc
		 * @example 'category'
		 */
		utc: string;

		/**
		 * The user's timing variable.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#utv
		 * @example 'lookup'
		 */
		utv: string;

		/**
		 * The user's timing value.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#utt
		 * @example 123
		 */
		utt: Number;

		/**
		 * The user's timing label.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#utl
		 * @example 'label'
		 */
		utl?: string;

		/**
		 * The time (in milliseconds) it took for the page to load.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#plt
		 * @example 3554
		 */
		plt?: Number;

		/**
		 * The time (in milliseconds) it took to perform a DNS lookup.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dns
		 * @example 43
		 */
		dns?: Number;

		/**
		 * The time (in milliseconds) it took for the page to be downloaded.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#pdt
		 * @example 500
		 */
		pdt?: Number;

		/**
		 * The time (in milliseconds) it took for any redirects to happen.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#rrt
		 * @example 500
		 */
		rrt?: Number;

		/**
		 * The time (in milliseconds) it took for a TCP connection to be established.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#tcp
		 * @example 500
		 */
		tcp?: Number;

		/**
		 * The time (in milliseconds) it took for the server to respond after connecting.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#srt
		 * @example 500
		 */
		srt?: Number;

		/**
		 * The time (in milliseconds) it took for the `document.readyState` to be 'interactive'.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dit
		 * @example 500
		 */
		dit?: Number;

		/**
		 * The time (in milliseconds) it took for the `DOMContentLoaded` event to fire.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#clt
		 * @example 500
		 */
		clt?: Number;
	}

	export interface ItemParams extends CommonParams {
		/**
		 * A unique identifier for the transaction. This value should be the same for both the 'transaction' hit and 'item' hits associated with the transaction.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ti
		 * @example 'OD564'
		 */
		ti: string;

		/**
		 * The item's name
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#in
		 * @example 'Shoe'
		 */
		in: string;

		/**
		 * The price for a single item or unit.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ip
		 * @example 'OD564'
		 */
		ip?: Number;

		/**
		 * The number of items purchased.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#iq
		 * @example 4
		 */
		iq?: Number;

		/**
		 * The SKU or item code.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ic
		 * @example 'SKU47'
		 */
		ic?: string;

		/**
		 * The category that the item belongs to.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#iv
		 * @example 'Blue'
		 */
		iv?: string;
	}

	export interface TransactionParams extends CommonParams {
		/**
		 * A unique identifier for the transaction. This value should be the same for both the 'transaction' hit and 'item' hits associated with the transaction.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ti
		 * @example 'OD564'
		 */
		ti: string;

		/**
		 * The store or affiliation from which this transaction occurred.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ta
		 * @example 'Member'
		 */
		ta?: string;

		/**
		 * The total revenue associated with the transaction. This value should include any shipping or tax costs.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#tr
		 * @example '15.47'
		 */
		tr?: Number;

		/**
		 * The total shipping cost of the transaction.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ts
		 * @example '3.50'
		 */
		ts?: Number;

		/**
		 * The total tax of the transaction.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#tt
		 * @example '11.20'
		 */
		tt?: Number;

		/**
		 * The coupon redeemed with the transaction.
		 * @see https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#tcc
		 * @example 'SUMMER08'
		 */
		tcc?: string;
	}

	/**
	 * @param trackerID Your Google Analytics tracker ID; eg UA-XXXXXXXX-X
	 * @param options Options
	 * @param toWait When truthy, a pageview event will not be sent immediately upon initialization.
	 */
	export default function (trackerID: string, options?: Partial<CommonParams>, toWait?: boolean): GAnalytics;
}
