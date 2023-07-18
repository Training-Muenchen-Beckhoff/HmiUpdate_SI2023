// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.44/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 7/16/2023 3:42:33 PM
 * Copyright (C) 2023
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let HmiUpdateSi2023Classic;
        (function (HmiUpdateSi2023Classic) {
            class CardClassic extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set in the class definition, so they have the value 'undefined'.
                - During compilation, the Framework sets the value that is specified in the HTML or in the theme (possibly 'null') via normal setters.
                - Because of the "changed detection" in the setter, the value is only processed once during compilation.
                - Attention: If we have a Server Binding on an Attribute, the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);

                    /** internal values*/
                    this.__name = undefined;
                    this.__value = undefined;
                }
                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_HmiUpdateSi2023Classic_CardClassic-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }

                    /** element selector */
                    this.__elementName = this.__elementTemplateRoot.find('.tchmi-control-name').first();
                    this.__elementValue = this.__elementTemplateRoot.find('.tchmi-control-value').first();

                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialization after the attribute setters have been called. 
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                __detach() {
                    super.__detach();

                    /**
                     * Disable everything that is not needed while the control is not part of the active DOM.
                     * For example, there is usually no need to listen for events!
                     */
                }
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if the framework destroys the control instance!
                 */
                destroy() {
                    /**
                     * Ignore while __keepAlive is set to true.
                     */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                     * Free resources like child controls etc.
                     */
                }
                /**
                 * 
                 * */                
                getName() {
                    return this.__name;
                }
                /**
                 * 
                 * @param {any} valueNew
                 */
                setName(valueNew) {
                    var convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    var convertedValue = valueNew;

                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('Name');
                    }

                    if (tchmi_equal(convertedValue, this.__name)) {
                        return;
                    }

                    this.__name = convertedValue;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Name' });

                    this.__processName();
                }
                /**
                 * 
                 * */
                __processName() {
                    let name = this.__name;

                    if (name === null) {
                        return;
                    }
                    this.__elementName[0].innerText = name;
                }
                /**
                 * 
                 * */
                getValue() {
                    return this.__Value;
                }
                /**
                 * 
                 * @param {any} valueNew
                 */
                setValue(valueNew) {
                    var convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    var convertedValue = valueNew;

                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('Value');
                    }

                    if (tchmi_equal(convertedValue, this.__value)) {
                        return;
                    }

                    this.__value = convertedValue;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Value' });

                    this.__processValue();
                }
                /**
                 * 
                 * */
                __processValue() {
                    let value = this.__value;

                    if (value === null) {
                        return;
                    }
                    this.__elementValue[0].innerText = value;
                }
            }
            HmiUpdateSi2023Classic.CardClassic = CardClassic;
        })(HmiUpdateSi2023Classic = Controls.HmiUpdateSi2023Classic || (Controls.HmiUpdateSi2023Classic = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));

/**
 * Register Control
 */
TcHmi.Controls.registerEx('CardClassic', 'TcHmi.Controls.HmiUpdateSi2023Classic', TcHmi.Controls.HmiUpdateSi2023Classic.CardClassic);
