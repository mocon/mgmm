import React from 'react';
import { Link } from 'react-router';

import ReportSection from './partials/ReportSection';
import GdsModal from './partials/GdsModal';
import GdsCornerContent from './partials/GdsCornerContent';

var BarChart = require('react-chartjs').Bar;

var Review = React.createClass({
    getInitialState: function() {
        return {
            showModal: false,
            json: [{"catLabels":["IAB11","IAB10","IAB18","IAB9","IAB3","IAB8","IAB7","IAB1","IAB15","IAB19","IAB17"],"tier1s":[{"value":100,"id":"IAB11","tier2s":[{"value":40,"id":"IAB11-2","name":"Legal Issues"},{"value":37,"id":"IAB11-4","name":"Politics"}],"name":"Law, Gov't & Politics"},{"value":90,"id":"IAB10","tier2s":[{"value":41,"id":"IAB10-7","name":"Interior Decorating"},{"value":31,"id":"IAB10-4","name":"Gardening"},{"value":29,"id":"IAB10-1","name":"Appliances"}],"name":"Home & Garden"},{"value":76,"id":"IAB18","tier2s":[{"value":33,"id":"IAB18-5","name":"Clothing"},{"value":32,"id":"IAB18-1","name":"Beauty"},{"value":32,"id":"IAB18-3","name":"Fashion"}],"name":"Style & Fashion"},{"value":68,"id":"IAB9","tier2s":[{"value":80,"id":"IAB9-16","name":"Guitar"},{"value":44,"id":"IAB9-2","name":"Arts & Crafts"},{"value":42,"id":"IAB9-11","name":"Comic Books"},{"value":31,"id":"IAB9-31","name":"Woodworking"},{"value":30,"id":"IAB9-21","name":"Needlework"},{"value":29,"id":"IAB9-26","name":"Sci-Fi & Fantasy"},{"value":29,"id":"IAB9-22","name":"Painting"},{"value":24,"id":"IAB9-30","name":"Video & Computer Games"},{"value":23,"id":"IAB9-10","name":"Collecting"},{"value":19,"id":"IAB9-5","name":"Board Games/Puzzles"},{"value":14,"id":"IAB9-23","name":"Photography"},{"value":0,"id":"IAB9-7","name":"Card Games"}],"name":"Hobbies & Interests"},{"value":64,"id":"IAB3","tier2s":[{"value":45,"id":"IAB3-2","name":"Agriculture"},{"value":33,"id":"IAB3-9","name":"Human Resources"},{"value":32,"id":"IAB3-11","name":"Marketing"},{"value":30,"id":"IAB3-5","name":"Construction"},{"value":20,"id":"IAB3-1","name":"Advertising"},{"value":19,"id":"IAB3-7","name":"Government"},{"value":3,"id":"IAB3-6","name":"Forestry"}],"name":"Business"},{"value":63,"id":"IAB8","tier2s":[{"value":32,"id":"IAB8-8","name":"Desserts & Baking"},{"value":30,"id":"IAB8-13","name":"Italian Cuisine"},{"value":30,"id":"IAB8-12","name":"Health/Lowfat Cooking"},{"value":29,"id":"IAB8-1","name":"American Cuisine"},{"value":29,"id":"IAB8-15","name":"Mexican Cuisine"},{"value":29,"id":"IAB8-2","name":"Barbecues & Grilling"},{"value":27,"id":"IAB8-5","name":"Cocktails/Beer"},{"value":27,"id":"IAB8-4","name":"Chinese Cuisine"},{"value":26,"id":"IAB8-17","name":"Vegetarian"},{"value":24,"id":"IAB8-16","name":"Vegan"},{"value":23,"id":"IAB8-18","name":"Wine"},{"value":22,"id":"IAB8-14","name":"Japanese Cuisine"},{"value":21,"id":"IAB8-6","name":"Coffee/Tea"},{"value":18,"id":"IAB8-9","name":"Dining Out"}],"name":"Food & Drink"},{"value":58,"id":"IAB7","tier2s":[{"value":35,"id":"IAB7-1","name":"Exercise"},{"value":31,"id":"IAB7-32","name":"Nutrition"},{"value":27,"id":"IAB7-37","name":"Psychology/Psychiatry"}],"name":"Health & Fitness"},{"value":53,"id":"IAB1","tier2s":[{"value":100,"id":"IAB1-4","name":"Humor"},{"value":52,"id":"IAB1-6","name":"Music"},{"value":28,"id":"IAB1-2","name":"Celebrity Fan/Gossip"},{"value":25,"id":"IAB1-7","name":"Television"},{"value":21,"id":"IAB1-5","name":"Movies"},{"value":15,"id":"IAB1-3","name":"Fine Art"},{"value":11,"id":"IAB1-1","name":"Books & Literature"}],"name":"Arts & Entertainment"},{"value":46,"id":"IAB15","tier2s":[{"value":39,"id":"IAB15-3","name":"Chemistry"},{"value":25,"id":"IAB15-6","name":"Physics"},{"value":21,"id":"IAB15-9","name":"Botany"},{"value":12,"id":"IAB15-8","name":"Geography"}],"name":"Science"},{"value":7,"id":"IAB19","tier2s":[{"value":46,"id":"IAB19-24","name":"Net for Beginners"},{"value":18,"id":"IAB19-6","name":"Cell Phones"},{"value":16,"id":"IAB19-8","name":"Computer Networking"},{"value":14,"id":"IAB19-15","name":"Email"},{"value":13,"id":"IAB19-26","name":"Palmtops/PDAs"},{"value":12,"id":"IAB19-18","name":"Internet Technology"}],"name":"Technology & Computing"},{"value":0,"id":"IAB17","tier2s":[{"value":57,"id":"IAB17-22","name":"NASCAR Racing"},{"value":13,"id":"IAB17-12","name":"Football"},{"value":11,"id":"IAB17-26","name":"Pro Basketball"},{"value":8,"id":"IAB17-31","name":"Sailing"},{"value":5,"id":"IAB17-42","name":"Walking"},{"value":4,"id":"IAB17-2","name":"Baseball"},{"value":1,"id":"IAB17-40","name":"Tennis"}],"name":"Sports"}],"campaignId":2698,"campaignName":"MCDs NW Portland- 2 for 4 McPick","max":3.990215563369515,"catNames":["Law, Gov't & Politics","Home & Garden","Style & Fashion","Hobbies & Interests","Business","Food & Drink","Health & Fitness","Arts & Entertainment","Science","Technology & Computing","Sports"],"mint1":0.851789957622039,"min":0.312779267202859,"vals":[100,90,76,68,64,63,58,53,46,7,0],"maxt1":1.714998773477245},{"catLabels":["IAB11","IAB10","IAB7","IAB1","IAB18","IAB9","IAB8","IAB19","IAB15","IAB3","IAB17"],"tier1s":[{"value":100,"id":"IAB11","tier2s":[{"value":36,"id":"IAB11-2","name":"Legal Issues"},{"value":23,"id":"IAB11-4","name":"Politics"}],"name":"Law, Gov't & Politics"},{"value":56,"id":"IAB10","tier2s":[{"value":28,"id":"IAB10-7","name":"Interior Decorating"},{"value":26,"id":"IAB10-1","name":"Appliances"},{"value":11,"id":"IAB10-4","name":"Gardening"}],"name":"Home & Garden"},{"value":50,"id":"IAB7","tier2s":[{"value":55,"id":"IAB7-1","name":"Exercise"},{"value":25,"id":"IAB7-37","name":"Psychology/Psychiatry"},{"value":17,"id":"IAB7-32","name":"Nutrition"}],"name":"Health & Fitness"},{"value":44,"id":"IAB1","tier2s":[{"value":100,"id":"IAB1-4","name":"Humor"},{"value":29,"id":"IAB1-6","name":"Music"},{"value":25,"id":"IAB1-3","name":"Fine Art"},{"value":17,"id":"IAB1-7","name":"Television"},{"value":16,"id":"IAB1-5","name":"Movies"},{"value":6,"id":"IAB1-2","name":"Celebrity Fan/Gossip"}],"name":"Arts & Entertainment"},{"value":43,"id":"IAB18","tier2s":[{"value":26,"id":"IAB18-5","name":"Clothing"},{"value":15,"id":"IAB18-3","name":"Fashion"},{"value":2,"id":"IAB18-1","name":"Beauty"}],"name":"Style & Fashion"},{"value":42,"id":"IAB9","tier2s":[{"value":44,"id":"IAB9-16","name":"Guitar"},{"value":28,"id":"IAB9-2","name":"Arts & Crafts"},{"value":22,"id":"IAB9-21","name":"Needlework"},{"value":21,"id":"IAB9-26","name":"Sci-Fi & Fantasy"},{"value":19,"id":"IAB9-30","name":"Video & Computer Games"},{"value":16,"id":"IAB9-5","name":"Board Games/Puzzles"},{"value":16,"id":"IAB9-22","name":"Painting"},{"value":13,"id":"IAB9-31","name":"Woodworking"},{"value":12,"id":"IAB9-11","name":"Comic Books"},{"value":11,"id":"IAB9-23","name":"Photography"}],"name":"Hobbies & Interests"},{"value":36,"id":"IAB8","tier2s":[{"value":27,"id":"IAB8-13","name":"Italian Cuisine"},{"value":23,"id":"IAB8-9","name":"Dining Out"},{"value":23,"id":"IAB8-8","name":"Desserts & Baking"},{"value":21,"id":"IAB8-12","name":"Health/Lowfat Cooking"},{"value":21,"id":"IAB8-15","name":"Mexican Cuisine"},{"value":20,"id":"IAB8-1","name":"American Cuisine"},{"value":16,"id":"IAB8-4","name":"Chinese Cuisine"},{"value":16,"id":"IAB8-17","name":"Vegetarian"},{"value":13,"id":"IAB8-5","name":"Cocktails/Beer"},{"value":11,"id":"IAB8-16","name":"Vegan"},{"value":10,"id":"IAB8-18","name":"Wine"},{"value":0,"id":"IAB8-2","name":"Barbecues & Grilling"}],"name":"Food & Drink"},{"value":34,"id":"IAB19","tier2s":[{"value":25,"id":"IAB19-18","name":"Internet Technology"},{"value":0,"id":"IAB19-8","name":"Computer Networking"}],"name":"Technology & Computing"},{"value":28,"id":"IAB15","tier2s":[{"value":20,"id":"IAB15-6","name":"Physics"},{"value":15,"id":"IAB15-3","name":"Chemistry"},{"value":1,"id":"IAB15-8","name":"Geography"}],"name":"Science"},{"value":25,"id":"IAB3","tier2s":[{"value":32,"id":"IAB3-9","name":"Human Resources"},{"value":26,"id":"IAB3-2","name":"Agriculture"},{"value":19,"id":"IAB3-11","name":"Marketing"},{"value":14,"id":"IAB3-5","name":"Construction"},{"value":7,"id":"IAB3-1","name":"Advertising"},{"value":5,"id":"IAB3-7","name":"Government"}],"name":"Business"},{"value":0,"id":"IAB17","tier2s":[{"value":23,"id":"IAB17-12","name":"Football"}],"name":"Sports"}],"campaignId":2699,"campaignName":"McDs NW Seattle Sriracha SCR w/Free Med Fry and Drink","max":3.117587258556421,"catNames":["Law, Gov't & Politics","Home & Garden","Health & Fitness","Arts & Entertainment","Style & Fashion","Hobbies & Interests","Food & Drink","Technology & Computing","Science","Business","Sports"],"mint1":0.893681091845160,"min":0.578703703703703,"vals":[100,56,50,44,43,42,36,34,28,25,0],"maxt1":1.400119881023738}]
        }
    },
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className = 'gg-theme-blue bg--white';
    },
    _toggleModal: function() {
        let _this = this,
            current = _this.state.showModal,
            opposite = !current;

        _this.setState({showModal: opposite});
    },
    render: function() {
        let reportType = "Advertising";
        let sectionsInReport = [
            {name: "First Section"},
            {name: "Second Section"},
            {name: "Third Section"},
            {name: "Fourth Section"},
            {name: "Fifth Section"}
        ];

        return (
            <div>
                {/* Report title section, needs [client name], [report subtitle], & [report type] */}
                <section className="-p-v-6 -p-h-3 bg--trans-dark-1">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 gds-layout__hidden-md-up -text-center -m-b-4">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--color.svg" alt="GumGum Visual Intelligence" />
                            </div>
                            <div className="gds-layout__column--md-8 -text-center--sm">
                                <p className="-block text--gg-gold text--uppercase">[{reportType}] audit for</p>
                                <h1 className="gds-text--header-lg gds-text--bold -block text--white">[Report Client Name] goes here</h1>
                                <h4 className="gds-text--header-sm gds-text--bold -block text--white">[Report Subtitle] goes here</h4>
                            </div>
                            <div className="gds-layout__column--md-4 gds-layout__hidden-sm-down -text-right">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--color.svg" alt="GumGum Visual Intelligence" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About this report section, needs [description] */}
                <section className="-p-v-6 -p-h-3 bg--white">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center--sm -m-b-3">
                                <h3 className="gds-text--header-sm gds-text--bold -m-b-3 text--uppercase">About this report</h3>
                                <p className="-m-b-3">[Description] goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem. In molestie felis at massa posuere fermentum. Maecenas quam leo, dapibus at massa vitae, ornare venenatis lacus. Vivamus massa mi, aliquet vel pharetra at, pellentesque ut lacus. Phasellus convallis, tellus a dignissim vehicula, ligula sapien fermentum massa, sit amet consequat justo odio vitae mauris. Curabitur pretium varius varius.</p>
                                <p>Explain how the 1-99 scores are calculated here.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loop through sections in report and render them */}
                {this.state.json.map(function(section, i) {
                    let themeIndex = i + 1;

                    return (
                        <ReportSection key={i} themeId={i} themeClassName={`color-${themeIndex}`} section={section} />
                    )
                })}

                {/* Footer logo section, doesn't need any data */}
                <section className="-p-a-4 bg--color-1">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <img className="footer-logo" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--white.svg" alt="GumGum Visual Intelligence" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal for saving report and generating link */}
                <GdsModal display={this.state.showModal} toggleModal={this._toggleModal} />

                {/* Corner-content */}
                <GdsCornerContent toggleModal={this._toggleModal} />
            </div>
        );
    }
});

module.exports = Review;
