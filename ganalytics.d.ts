export interface IGAnalyticsOptions {

    /**
     * Anonymize the sender's IP address.
     * See [Anonymize IP](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip).
     */
    aip?: number;

    /**
     * Specifies the application's name.
     * See [Application Name](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#an).
     */
    an?: string;

    /**
     * Specifies the application identifier.
     * See [Application ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aid).
     */
    aid?: string;

    /**
     * Specifies the application installer identifier.
     * See [Installer ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aiid).
     */
    aiid?: string;

    /**
     * Specifies the application verison.
     * See [Version](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#av).
     */
    av?: string;

    /**
     * Indicates the data source type of the hit; eg web or app.
     * See [Data Source](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ds).
     */
    ds?: string;
}

export interface IEventParams {
    /**
     * Specifies the event category. Must not be empty.
     * Max length: 150 bytes.
     */
    ec: string;

    /**
     * Specifies the event action. Must not be empty.
     * Max length: 500 bytes.
     */
    ea: string;

    /**
     * Specifies the event label.
     * Max length: 500 bytes.
     */
    el?: string;

    /**
     * Specifies the event value. Values must be non-negative.
     */
    ev?: number;
}

export interface IExceptionParams {
    /**
     * Specifies the description of an exception.
     */
    exd?: string;

    /**
     * Specifies whether the exception was fatal.
     */
    exf?: string;
}

export interface IPageviewParams {
    /**
     * Use this parameter to send the full URL (document location) of the page on which content resides.
     * Max length: 2048 bytes.
     */
    dl?: string;

    /**
     * Specifies the hostname from which content was hosted.
     * Max length: 100 bytes.
     */
    dh?: string;

    /**
     * The path portion of the page URL. Should begin with '/'. For 'pageview' hits, either &dl or both &dh and &dp have to be specified for the hit to be valid.
     * Max length: 2048 bytes.
     */
    dp?: string;

    /**
     * The title of the page / document.
     */
    dt?: string;

    /**
     * The ID of a clicked DOM element, used to disambiguate multiple links to the same URL in In-Page Analytics reports when Enhanced Link Attribution is enabled for the property.
     */
    linkid: string;

    /**
     * You can have up to 5 content groupings, each of which has an associated index between 1 and 5, inclusive. Each content grouping can have up to 100 content groups.
     * Max length: 100 bytes.
     */
    cg1?: string;

    /**
     * You can have up to 5 content groupings, each of which has an associated index between 1 and 5, inclusive. Each content grouping can have up to 100 content groups.
     * Max length: 100 bytes.
     */
    cg2?: string;

    /**
     * You can have up to 5 content groupings, each of which has an associated index between 1 and 5, inclusive. Each content grouping can have up to 100 content groups.
     * Max length: 100 bytes.
     */
    cg3?: string;

    /**
     * You can have up to 5 content groupings, each of which has an associated index between 1 and 5, inclusive. Each content grouping can have up to 100 content groups.
     * Max length: 100 bytes.
     */
    cg4?: string;

    /**
     * You can have up to 5 content groupings, each of which has an associated index between 1 and 5, inclusive. Each content grouping can have up to 100 content groups.
     * Max length: 100 bytes.
     */
    cg5?: string;
}

export interface IScreenviewParams extends IPageviewParams {
    /**
     * This parameter is optional on web properties, and required on mobile properties for screenview hits, where it is used for the 'Screen Name' of the screenview hit.
     * Max length: 2048 bytes.
     */
    cd: string;
}

export interface ISocialParams {
    /**
     * Specifies the social network, for example Facebook or Google Plus.
     * Max length: 50 bytes.
     */
    sn: string;

    /**
     * Specifies the social interaction action. For example on Google Plus when a user clicks the +1 button, the social action is 'plus'.
     * Max length: 50 bytes.
     */
    sa: string;

    /**
     * Specifies the target of a social interaction. This value is typically a URL but can be any text.
     * Max length: 2048 bytes.
     */
    st: string;
}

export interface ITimingParams {
    /**
     * Specifies the user timing category.
     * Max length: 150 bytes.
     */
    utc: string;

    /**
     * Specifies the user timing variable.
     * Max length: 500 bytes.
     */
    utv: string;

    /**
     * Specifies the user timing value. The value is in milliseconds.
     */
    utt: number;

    /**
     * Specifies the user timing label.
     * Max length: 500 bytes.
     */
    utl?: string;

    /**
     * Specifies the time it took for a page to load. The value is in milliseconds.
     */
    plt?: number;

    /**
     * Specifies the time it took to do a DNS lookup. The value is in milliseconds.
     */
    dns?: number;

    /**
     * Specifies the time it took for the page to be downloaded. The value is in milliseconds.
     */
    pdt?: number;

    /**
     * Specifies the time it took for any redirects to happen. The value is in millseconds.
     */
    rrt?: number;

    /**
     * Specifies the time it took for a TCP connection to be made. The value is in milliseconds.
     */
    tcp?: number;

    /**
     * Specifies the time it took for the server to respond after the connect time. The value is in milliseconds.
     */
    srt?: number;

    /**
     * Specifies the time it took for Document.readyState to be 'interactive'. The value is in milliseconds.
     */
    dit?: number;

    /**
     * Specifies the time it took for the DomContentLoaded Event to fire. The value is in milliseconds.
     */
    clt?: number;
}

export interface IItemParams {
    /**
     * Specifies the item name.
     * Max length: 500 bytes.
     */
    in: string;

    /**
     * Specifies the price for a single item / unit.
     */
    ip?: number;

    /**
     * Specifies the number of items purchased.
     */
    iq: number;

    /**
     * Specifies the SKU or item code.
     * Max length: 500 bytes.
     */
    ic: string;

    /**
     * Specifies the category that the item belongs to.
     * Max length: 500 bytes.
     */
    iv: string;
}

export interface ITransactionParams {
    /**
     * A unique identifier for the transaction. This value should be the same for both the Transaction hit and Items hits associated to the particular transaction.
     * Max length: 500 bytes.
     */
    ti: string;

    /**
     * Specifies the affiliation or store name.
     * Max length: 500 bytes.
     */
    ta?: string;

    /**
     * Specifies the total revenue associated with the transaction. This value should include any shipping or tax costs.
     */
    tr?: number;

    /**
     * Specifies the total shipping cost of the transaction.
     */
    ts?: number;

    /**
     * Specifies the total tax of the transaction.
     */
    tt?: number;
}

export interface IGAnalytics {
    send(kind:       "event", params:       IEventParams): void;
    send(kind:      "social", params:      ISocialParams): void;
    send(kind:    "pageview", params:    IPageviewParams): void;
    send(kind:   "exception", params:   IExceptionParams): void;
    send(kind:        "item", params:        IItemParams): void;
    send(kind:  "screenview", params:  IScreenviewParams): void;
    send(kind:      "timing", params:      ITimingParams): void;
    send(kind: "transaction", params: ITransactionParams): void;
}

declare namespace ganalytics {
    /**
     * @param trackerID Your Google Analytics tracker ID; eg UA-XXXXXXXX-X
     * @param options Options
     * @param toWait When truthy, a pageview event will not be sent immediately upon initialization.
     */
    function GAnalyticsFactory(trackerID: string, options?: Partial<IGAnalyticsOptions>, toWait?: boolean): IGAnalytics;
}

export default ganalytics.GAnalyticsFactory;
