const PAGE_NAME_TXT = "Add a new product";
const LABEL_NAME = "Name";
const LABEL_SERIAL_NUMBER = "Serial number";
const PLACEHOLDER_SERIAL_NUMBER = "e.g. 123456789";
const LABEL_MANUFACTURER = "Manufacturer";
const LABEL_QUANTITY = "Quantity";
const LABEL_EXPIRY_DATE = "Expiry date";
const LABEL_ACTIVITY_STATE = "Active";
const INPUT_WIDTH = "20rem";

sap.ui.jsview("inventory.view.AddProduct", {
    getControllerName: function () {
        return "inventory.controller.AddProduct";
    },

    createContent: function (oController) {
        return this.createPage(
            this.createForm(
                this.createInput("{/name}", INPUT_WIDTH, true),
                this.createInput(
                    "{/serialNumber}",
                    INPUT_WIDTH,
                    true,
                    PLACEHOLDER_SERIAL_NUMBER
                ),
                this.createInput("{/mahName}", INPUT_WIDTH, true),
                this.createInput("{/quantity}", INPUT_WIDTH, true),
                this.createDatePicker(
                    "{/expiryDate}",
                    INPUT_WIDTH,
                    "yyyy-MM-dd",
                    true,
                    LABEL_EXPIRY_DATE
                ),
                this.createSwitch("{/isActive}", LABEL_ACTIVITY_STATE)
            ),
            new sap.m.Button({
                text: "Add Product",
                press: [oController.onAddProduct, oController],
            })
        );
    },

    createPage: function (oForm, oAddButton) {
        return new sap.m.Page({
            title: PAGE_NAME_TXT,
            titleAlignment: sap.m.TitleAlignment.Center,
            content: [
                new sap.m.FlexBox({
                    alignItems: "Center",
                    justifyContent: "Start",
                    height: "100%",
                    width: "100%",
                    direction: "Column",
                    items: [oForm, oAddButton],
                }),
            ],
        });
    },

    createForm: function (
        oInputName,
        oInputSerialNumber,
        oInputMahName,
        oInputQuantity,
        oInputExpiryDate,
        oInputIsActive
    ) {
        return new sap.ui.layout.form.SimpleForm({
            content: [
                new sap.m.Label({ text: LABEL_NAME }),
                oInputName,
                new sap.m.Label({ text: LABEL_SERIAL_NUMBER }),
                oInputSerialNumber,
                new sap.m.Label({ text: LABEL_MANUFACTURER }),
                oInputMahName,
                new sap.m.Label({ text: LABEL_QUANTITY }),
                oInputQuantity,
                new sap.m.Label({ text: LABEL_EXPIRY_DATE }),
                oInputExpiryDate,
                new sap.m.Label({ text: LABEL_ACTIVITY_STATE }),
                oInputIsActive,
            ],
        });
    },

    createInput: function (oValue, sWidth, bRequired, oPlaceholder) {
        return new sap.m.Input({
            value: oValue,
            width: sWidth,
            required: bRequired,
            placeholder: oPlaceholder,
        });
    },

    createDatePicker: function (sValue, sWidth, sFormat, bRequired) {
        return new sap.m.DatePicker({
            value: sValue,
            width: sWidth,
            required: bRequired,
            displayFormat: sFormat,
        });
    },

    createSwitch: function (sValue) {
        return new sap.m.Switch({
            state: sValue,
            // THE EMOJI CODE DREAM ?!
            customTextOn: "✔️",
            customTextOff: "❌",
        });
    },
});