import React from 'react'

var GdsModal = React.createClass({
    render: function() {
        let shouldShowModal = this.props.display,
            modalClass = shouldShowModal ? "gds-modal__overlay gds-modal--shown" : "gds-modal__overlay";

        return (
            <div className={modalClass} data-element="modal-example">
                <div className="gds-modal gds-layout__column--md-12">
                    <div className="gds-modal__header">
                        <h2 className="gds-modal__title gds-text__header--sm">Modal title goes here...</h2>
                        <button className="gds-modal__close-button" onClick={this.props.toggleModal}></button>
                    </div>
                    <div className="gds-modal__body">
                        <p className="-m-b-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet, ipsum nec porta pulvinar, mi quam pharetra orci, nec euismod purus risus vitae neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris nisi libero, malesuada vel lobortis sed, congue vel mauris. Duis rhoncus accumsan nibh, eu tempor velit posuere ac. Donec sed consequat ligula, vitae maximus ligula. Donec quam justo, pellentesque quis orci vel, imperdiet feugiat mauris. Nulla posuere pulvinar mollis. Nullam condimentum, turpis ut blandit consequat, magna nisi lobortis turpis, a finibus nulla libero ac sapien.</p>
                        <p className="-m-b-1">Aliquam elementum urna sit amet tortor pellentesque, sed lacinia arcu placerat. Donec volutpat congue ipsum, sit amet ornare turpis mattis a. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras consequat condimentum elementum. Nullam condimentum velit et venenatis aliquet. Proin eget magna ac libero pretium maximus. Duis sit amet bibendum eros. Morbi sodales, erat ut fermentum pharetra, nulla nibh molestie quam, non ornare ex turpis mollis odio. Suspendisse id lobortis lacus. Pellentesque ac ex at dui volutpat efficitur.</p>
                    </div>
                    <div className="gds-modal__footer -text-right">
                        <button onClick={this.props.toggleModal} className="gds-button gds-button--default gds-button--block-sm -m-b-3-sm -m-r-3">Cancel</button><button className="gds-button gds-button--primary gds-button--block-sm">Save Changes</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = GdsModal;
