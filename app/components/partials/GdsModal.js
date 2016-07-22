import React from 'react'

var GdsModal = React.createClass({
    render: function() {
        let shouldShowModal = this.props.display,
            modalClass = shouldShowModal ? "gds-modal__overlay gds-modal--shown" : "gds-modal__overlay",
            clientName = window.clientName || "Client Name",
            textareaStyle = {height: "200px"};

        return (
            <div className={modalClass} data-element="modal-example">
                <div className="gds-modal gds-layout__column--md-12">
                    <div className="gds-modal__header">
                        <h2 className="gds-modal__title gds-text__header--sm">Generate Shareable Link</h2>
                        <button className="gds-modal__close-button" onClick={this.props.toggleModal}></button>
                    </div>
                    <div className="gds-modal__body">
                        <div className="gds-form-group -m-b-3" gg-form-group>
                            <label className="gds-form-group__label">Shareable Link</label>
                            <input className="gds-form-group__text-input" type="text" defaultValue="http://bit.ly/2ad1Ole" />
                        </div>
                        <div className="gds-form-group -m-b-3" gg-form-group>
                            <label className="gds-form-group__label">Description</label>
                            <textarea style={textareaStyle} className="gds-form-group__text-area-input" defaultValue={`Dear ${clientName}, Here is the report you asked for: http://bit.ly/2ad1Ole Thank you, -GumGum`}></textarea>
                        </div>
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
