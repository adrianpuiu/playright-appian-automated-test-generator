import type { Selector } from '../types';

export const SELECTOR_LIBRARY: Selector[] = [
    {
        name: "baseUrl",
        selector: "https://example.app.com",
        description: "The base URL for the application under test.",
        isParameterized: false,
    },
    {
        name: "loginPageUrl",
        selector: "/login",
        description: "The path to the login page.",
        isParameterized: false,
    },
    {
        name: "xpathParent",
        selector: "..",
        description: "parent",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteMenuLink",
        selector: "//a[starts-with(@class, 'appian-menu-item') and contains(normalize-space(),{})]",
        description: "menulink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSitePageLink",
        selector: "//li[contains(normalize-space(), {})]/descendant::a",
        description: "sitepagelink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSiteLogoutLink",
        selector: "//li[contains(normalize-space(), {})]/descendant::a",
        description: "sitelogoutlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSiteUserProfileLink",
        selector: "//li[contains(normalize-space(), {})]/descendant::a",
        description: "siteuserprofilelink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteLoginAgreeButton",
        selector: "//form[@id = 'notification']/descendant::input[contains(@class, 'btn')]",
        description: "loginagreebutton",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteLoginSubmitButton",
        selector: "//form[@id = 'loginForm']/descendant::input[contains(@class, 'btn')]",
        description: "loginsubmitbutton",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteLogoutLink",
        selector: "//a[contains(text(),'Sign Out')]",
        description: "logoutlink",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSearchField",
        selector: "//div[contains(@class, 'appian-tempo-search')]/descendant::input",
        description: "searchfield",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteFeedEntry",
        selector: "//div[contains(@class, 'appian-feed-entry')] | //table",
        description: "feedentry",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteError",
        selector: "//h1[contains(text(), 'Application Error')] | //div[contains(@class, 'gwt-PopupPanel') and contains(@class, 'error')] ",
        description: "error",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteWorking",
        selector: "//div[@class = 'appian-indicator-message']",
        description: "working",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteNewsItem",
        selector: "//div[starts-with(@class, 'appian-feed-entry-message') and contains(normalize-space(), {})]",
        description: "newsitem",
        isParameterized: true
    },
    {
        name: "xpathConcatNewsItemMoreInfoLink",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(text(), 'More Info') or contains(text(), 'Hide Info')]",
        description: "concatnewsitemmoreinfolink",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsItemMoreInfoLabel",
        selector: "/following-sibling::table/descendant::td[contains(normalize-space(), {})]",
        description: "concatnewsitemmoreinfolabel",
        isParameterized: true
    },
    {
        name: "xpathConcatNewsItemMoreInfoValue",
        selector: "/following-sibling::table/descendant::td[contains(normalize-space(), {})]",
        description: "concatnewsitemmoreinfovalue",
        isParameterized: true
    },
    {
        name: "xpathConcatNewsItemRecordTag",
        selector: "/parent::div/descendant::a[contains(normalize-space(), {})]",
        description: "concatnewsitemrecordtag",
        isParameterized: true
    },
    {
        name: "xpathConcatNewsItemComment",
        selector: "/parent::div/descendant::div[starts-with(@class, 'appian-feed-entry-message') and contains(normalize-space(), {})]",
        description: "concatnewsitemcomment",
        isParameterized: true
    },
    {
        name: "xpathConcatNewsItemDeleteLink",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(text(),'Delete')]",
        description: "concatnewsitemdeletelink",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDeleteLink",
        selector: "//a[contains(text(), 'Delete')]",
        description: "deletelink",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteTaskLink",
        selector: "//a[contains(@class, 'appian-feed-entry-author') and contains(normalize-space(), {})]",
        description: "tasklink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTaskDeadline",
        selector: "//a[contains(@class, 'appian-feed-entry-author') and contains(normalize-space(),{})]/parent::span/following-sibling::div[contains(@class, 'metadata')]/descendant::span[contains(@title, 'deadline')]/span[text() = {}]",
        description: "taskdeadline",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTaskReportLink",
        selector: "//a[span[contains(normalize-space(), {})]]",
        description: "taskreportlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSocialTaskItem",
        selector: "//div[starts-with(@class, 'appian-feed-entry') and contains(normalize-space(), {})]",
        description: "socialtaskitem",
        isParameterized: true
    },
    {
        name: "xpathConcatSocialTaskItemComment",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(text(),'Comment')]",
        description: "concatsocialtaskitemcomment",
        isParameterized: false
    },
    {
        name: "xpathConcatSocialTaskItemClose",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(text(),'Close')]",
        description: "concatsocialtaskitemclose",
        isParameterized: false
    },
    {
        name: "xpathConcatSocialTaskItemDelete",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(text(),'Delete')]",
        description: "concatsocialtaskitemdelete",
        isParameterized: false
    },
    {
        name: "xpathConcatSocialTaskItemCloseCommentBox",
        selector: "/following-sibling::div/descendant::textarea[contains(@placeholder, 'Type comments here (optional)')]",
        description: "concatsocialtaskitemclosecommentbox",
        isParameterized: false
    },
    {
        name: "xpathConcatSocialTaskItemCloseCommentButton",
        selector: "/following-sibling::div/descendant::button[contains(text(), 'Close')]",
        description: "concatsocialtaskitemclosecommentbutton",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordTypeLink",
        selector: "//a[contains(@href, '/tempo/records/type') and contains(@href, '/view/all') and contains(normalize-space(),{})]",
        description: "recordtypelink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordTypeUserFilterDropdown",
        selector: "//a[contains(@href, '/tempo/records/type') and contains(@href, '/view/all') and contains(normalize-space(),{})]",
        description: "recordtypeuserfilterdropdown",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordTypeUserFilterLabel",
        selector: "//ol[@class='facetgroup']/descendant::a[contains(normalize-space(),{})]",
        description: "recordtypeuserfilterlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordTypeUserFilterValue",
        selector: "//ol[@class='facetgroup']/descendant::a[contains(normalize-space(),{})]",
        description: "recordtypeuserfiltervalue",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordTypeUserFilterClear",
        selector: "//ol[@class='facetgroup']/descendant::a[contains(normalize-space(),{})]",
        description: "recordtypeuserfilterclear",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordLink",
        selector: "//a[contains(@href, '/tempo/records/type') and contains(@href, '/item/') and contains(normalize-space(),{})]",
        description: "recordlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordIndexLink",
        selector: "(//a[contains(@href, '/tempo/records/type') and contains(@href, '/item/')])[{}]",
        description: "recordindexlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordViewLink",
        selector: "//a[contains(@href, '/tempo/records/type') and contains(@href, '/item/')]/span[contains(normalize-space(),{})]",
        description: "recordviewlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordRelatedActionLink",
        selector: "//a[(starts-with(@class, 'aui-ActionLink') or starts-with(@class, 'gwt-Anchor')) and contains(normalize-space(),{})]",
        description: "recordrelatedactionlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteReportLink",
        selector: "//a[contains(@class, 'appian-feed-entry-author') and contains(normalize-space(),{})]",
        description: "reportlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteActionLink",
        selector: "//a[starts-with(@class, 'aui-ActionLink') and contains(normalize-space(),{})]",
        description: "actionlink",
        isParameterized: true
    },
    {
        name: "xpathConcatActionStar",
        selector: "/following-sibling::img[contains(@class, 'aui-Action-Star')]",
        description: "concatactionstar",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteActionsAppFilterLink",
        selector: "//ol[@class='facetgroup']/descendant::span[contains(normalize-space(),{})]",
        description: "actionsappfilterlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteFormTitle",
        selector: "//h2",
        description: "formtitle",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteFormInstructions",
        selector: "//h2/following-sibling::p",
        description: "forminstructions",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteFieldLayoutLabel",
        selector: "//*[(self::label or self::span) and starts-with(normalize-space(),{})]/parent::*/following-sibling::div/descendant::div[contains(@class, 'aui_FieldLayout_InputContainer')]",
        description: "fieldlayoutlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteFieldLayoutIndex",
        selector: "(//div[contains(@class, 'aui_FieldLayout_InputContainer')])[{}]",
        description: "fieldlayoutindex",
        isParameterized: true
    },
    {
        name: "xpathConcatAncestorFieldLayout",
        selector: "/ancestor::div[contains(@class, 'aui_FieldLayout_InputContainer')][position()=1]",
        description: "concatancestorfieldlayout",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteButton",
        selector: "//button[contains(normalize-space(),{}) and not(contains(@class, 'button-disabled'))]",
        description: "button",
        isParameterized: true
    },
    {
        name: "xpathRelativeButton",
        selector: ".//button",
        description: "button",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteAcceptButton",
        selector: "//button[contains(normalize-space(),{}) and not(contains(@class, 'button-disabled'))]",
        description: "acceptbutton",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTextFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input",
        description: "textfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTextFieldIndex",
        selector: "(//input[contains(@class, 'aui-TextInput')])[{}]",
        description: "textfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeTextFieldInput",
        selector: ".//input[contains(@class, 'aui-TextInput')]",
        description: "textfieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteImageFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::img",
        description: "imagefieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteImageFieldIndex",
        selector: "(//img[contains(@class, 'SafeImage')])[{}]",
        description: "imagefieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeImageFieldInput",
        selector: ".//img[contains(@class, 'SafeImage')]",
        description: "imagefieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteIntegerFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::span/following-sibling::div/div/input",
        description: "integerfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathRelativeIntegerFieldInput",
        selector: ".//input[contains(@class, 'aui-TextInput')]",
        description: "integerfieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteParagraphFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::textarea",
        description: "paragraphfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteParagraphFieldIndex",
        selector: "(//textarea[contains(@class, 'aui-TextAreaInput')])[{}]",
        description: "paragraphfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeParagraphFieldInput",
        selector: ".//textarea[contains(@class, 'aui-TextAreaInput')]",
        description: "paragraphfieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteCheckboxFieldLabel",
        selector: "//span[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input[type='checkbox']",
        description: "checkboxfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteCheckboxFieldIndex",
        selector: "(//input[@type='checkbox'])[{}]",
        description: "checkboxfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeCheckboxFieldChoiceLabel",
        selector: ".//label[contains(normalize-space(), {})]/preceding-sibling::input",
        description: "checkboxfieldchoicelabel",
        isParameterized: true
    },
    {
        name: "xpathRelativeCheckboxFieldChoiceIndex",
        selector: "(.//input[@type='checkbox'])[{}]",
        description: "checkboxfieldchoiceindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeCheckboxFieldInput",
        selector: ".//input[contains(@type, 'checkbox')]",
        description: "checkboxfieldinput",
        isParameterized: false
    },
    {
        name: "xpathRelativeCheckboxFieldInputSpan",
        selector: ".//span[input[contains(@type, 'checkbox')]]",
        description: "checkboxfieldinputspan",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteCheckboxFieldOption",
        selector: "//label[contains(normalize-space(), {})]/preceding-sibling::input[@type='checkbox']",
        description: "checkboxfieldoption",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRadioFieldLabel",
        selector: "//span[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input",
        description: "radiofieldlabel",
        isParameterized: true
    },
    {
        name: "xpathRelativeRadioFieldChoiceLabel",
        selector: ".//label[contains(normalize-space(), {})]/preceding-sibling::input",
        description: "radiofieldchoicelabel",
        isParameterized: true
    },
    {
        name: "xpathRelativeRadioFieldChoiceIndex",
        selector: "(.//input[@type='radio'])[{}]",
        description: "radiofieldchoiceindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeRadioButtonGroup",
        selector: ".//div[contains(@class, 'RadioButtonGroup')]",
        description: "radiobuttongroup",
        isParameterized: false
    },
    {
        name: "xpathRelativeRadioFieldInputSpan",
        selector: ".//span[input[@type='radio']]",
        description: "radiofieldinputspan",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRadioFieldOption",
        selector: "//label[contains(normalize-space(), {})]/preceding-sibling::input[@type='radio']",
        description: "radiofieldoption",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteDropdownFieldIndex",
        selector: "//span[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::div/select",
        description: "dropdownfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeDropdownFieldInput",
        selector: ".//select",
        description: "dropdownfieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDateFieldInput",
        selector: "//label[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input[contains(@class, 'aui-DateInput-TextBox')]",
        description: "datefieldinput",
        isParameterized: true
    },
    {
        name: "xpathRelativeDateFieldPlaceholder",
        selector: ".//input[contains(@class, 'aui-DateInput-Placeholder')]",
        description: "datefieldplaceholder",
        isParameterized: false
    },
    {
        name: "xpathRelativeDateFieldInput",
        selector: ".//input[contains(@class, 'aui-DateInput-TextBox')]",
        description: "datefieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDatetimeFieldDateInput",
        selector: "//span[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input[contains(@class, 'aui-DateInput-TextBox')]",
        description: "datetimefielddateinput",
        isParameterized: true
    },
    {
        name: "xpathRelativeDatetimeFieldDatePlaceholder",
        selector: ".//input[contains(@class, 'aui-DateInput-Placeholder')]",
        description: "datetimefielddateplaceholder",
        isParameterized: false
    },
    {
        name: "xpathRelativeDatetimeFieldDateInput",
        selector: ".//input[contains(@class, 'aui-DateInput-TextBox')]",
        description: "datetimefielddateinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDatetimeFieldTimeInput",
        selector: "//span[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input[contains(@class, 'aui-TimeInput-TextBox')]",
        description: "datetimefieldtimeinput",
        isParameterized: true
    },
    {
        name: "xpathRelativeDatetimeFieldTimePlaceholder",
        selector: ".//input[contains(@class, 'aui-TimeInput-Placeholder')]",
        description: "datetimefieldtimeplaceholder",
        isParameterized: false
    },
    {
        name: "xpathRelativeDatetimeFieldTimeInput",
        selector: ".//input[contains(@class, 'aui-TimeInput-TextBox')]",
        description: "datetimefieldtimeinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteFileUploadFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::span/following-sibling::div/descendant::input",
        description: "fileuploadfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteFileUploadFieldIndex",
        selector: "(//input[contains(@class, 'gwt-FileUpload')])[{}]",
        description: "fileuploadfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeFileUploadFieldInput",
        selector: ".//input[contains(@class, 'gwt-FileUpload')]",
        description: "fileuploadfieldinput",
        isParameterized: false
    },
    {
        name: "xpathRelativeFileUploadFieldFile",
        selector: ".//span[contains(@class, 'filename')]",
        description: "fileuploadfieldfile",
        isParameterized: false
    },
    {
        name: "xpathRelativeFileUploadFieldRemoveLink",
        selector: ".//a[starts-with(text(), 'Remove')]",
        description: "fileuploadfieldremovelink",
        isParameterized: false
    },
    {
        name: "xpathRelativeFileUploadFieldWaiting",
        selector: ".//div[contains(@class, 'prgbar-msg')]",
        description: "fileuploadfieldwaiting",
        isParameterized: false
    },
    {
        name: "xpathAbsolutePickerLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::span",
        description: "pickerlabel",
        isParameterized: true
    },
    {
        name: "xpathRelativePickerInput",
        selector: ".//input[contains(@class, 'gwt-SuggestBox')]",
        description: "pickerinput",
        isParameterized: false
    },
    {
        name: "xpathAbsolutePickerSuggestion",
        selector: "//div[contains(@class, 'SuggestBoxPopup')]/descendant::p[contains(normalize-space(),{})] | //div[contains(@class, 'SuggestBoxPopup')]/descendant::h2[contains(normalize-space(),{})]",
        description: "pickersuggestion",
        isParameterized: true
    },
    {
        name: "xpathRelativePickerSelection",
        selector: ".//a[@title]",
        description: "pickerselection",
        isParameterized: false
    },
    {
        name: "xpathRelativePickerSpecificSelection",
        selector: "/descendant::a[contains(normalize-space(),{})]",
        description: "pickerspecificselection",
        isParameterized: true
    },
    {
        name: "xpathRelativePickerSelectionRemoveLink",
        selector: ".//a/following-sibling::a",
        description: "pickerselectionremovelink",
        isParameterized: false
    },
    {
        name: "xpathRelativePickerSpecificSelectionRemoveLink",
        selector: ".//a[contains(normalize-space(),{})]/following-sibling::a",
        description: "pickerspecificselectionremovelink",
        isParameterized: true
    },
    {
        name: "xpathRelativePickerSuggestBox",
        selector: "/descendant::input[contains(@class, 'SuggestBox')]",
        description: "pickersuggestbox",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteMilestoneFieldLabel",
        selector: "//span[contains(normalize-space(),{})]/parent::div/following-sibling::div/descendant::div[contains(text(), 'Step:')]",
        description: "milestonefieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteMilestoneFieldIndex",
        selector: "(//div[contains(text(), 'Step:')]/ancestor::ul)[{}]",
        description: "milestonefieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeMilestoneStepGeneral",
        selector: ".//descendant::div[contains(text(), 'Step:')]",
        description: "milestonestepgeneral",
        isParameterized: false
    },
    {
        name: "xpathRelativeMilestoneStepSelected",
        selector: ".//descendant::div[contains(@class, 'accessibilityhidden') and starts-with(text(), 'Current Step:')]/following-sibling::*[1]",
        description: "milestonestepselected",
        isParameterized: false
    },
    {
        name: "xpathRelativeMilestoneStep",
        selector: ".//descendant::*[starts-with(normalize-space(),{})]",
        description: "milestonestep",
        isParameterized: true
    },
    {
        name: "xpathRelativeMilestoneStepIndex",
        selector: "(.//descendant::div[contains(@class, 'accessibilityhidden') and contains(text(), 'Step:')])[{}]/following-sibling::div/descendant::a",
        description: "milestonestepindex",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteLink",
        selector: "//a[contains(normalize-space(),{})] | //a//*[contains(normalize-space(),{})]/..",
        description: "link",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteLinkFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::div/following-sibling::div/descendant::div/a",
        description: "linkfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteLinkFieldIndex",
        selector: "(//div/a",
        description: "linkfieldindex",
        isParameterized: false
    },
    {
        name: "xpathRelativeLinkFieldLink",
        selector: ".//div/a",
        description: "linkfieldlink",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteGridByIndex",
        selector: "((//div[contains(@class, 'DataGrid-Table')]/descendant::table)[{}])/ancestor::div[contains(@class, 'aui_FieldLayout_InputContainer')][position()=1]",
        description: "gridbyindex",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteGridByLabel",
        selector: "//span[contains(normalize-space(),{})]/parent::div/following-sibling::div/descendant::table/ancestor::div[contains(@class, 'aui_FieldLayout_InputContainer')][position()=1]",
        description: "gridbylabel",
        isParameterized: true
    },
    {
        name: "xpathRelativeColumnLabelCount",
        selector: "./descendant::thead/descendant::th[descendant::*[normalize-space()={}]}/preceding-sibling::th",
        description: "columnlabelcount",
        isParameterized: true
    },
    {
        name: "xpathRelativeGridCell",
        selector: ".//tbody/tr[{}]/*[(self::td or self::th)][{}]",
        description: "gridcell",
        isParameterized: true
    },
    {
        name: "xpathRelativeGridField",
        selector: ".//div[contains(@class, 'DataGrid-Table')]",
        description: "gridfield",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridCheckbox",
        selector: ".//input[@type='checkbox']",
        description: "gridcheckbox",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridAddRowLink",
        selector: ".//tfoot//a",
        description: "gridaddrowlink",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridHeaderRow",
        selector: ".//thead/descendant::tr",
        description: "gridheaderrow",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridRow",
        selector: ".//tbody/descendant::tr",
        description: "gridrow",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridColumn",
        selector: "./descendant::*[(self::td or self::th)]",
        description: "gridcolumn",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridCellLink",
        selector: ".//img|.//a",
        description: "gridcelllink",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridFirstPageLink",
        selector: ".//img[contains(@aria-label, 'First page')]",
        description: "gridfirstpagelink",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridPreviousPageLink",
        selector: ".//img[contains(@aria-label, 'Previous page')]",
        description: "gridpreviouspagelink",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridNextPageLink",
        selector: ".//img[contains(@aria-label, 'Next page')]",
        description: "gridnextpagelink",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridLastPageLink",
        selector: ".//img[contains(@aria-label, 'Last page')]",
        description: "gridlastpagelink",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridColumnLink",
        selector: ".//thead//a[contains(normalize-space(), {})]",
        description: "gridcolumnlink",
        isParameterized: true
    },
    {
        name: "xpathRelativeGridSelectAllColumn",
        selector: ".//thead//input[@type='checkbox']",
        description: "gridselectallcolumn",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridPagingLabel",
        selector: ".//div[contains(@class, 'gwt-HTML')]",
        description: "gridpaginglabel",
        isParameterized: false
    },
    {
        name: "xpathConditionSectionContains",
        selector: ".//div[contains(@class, 'gwt-HTML')]",
        description: "conditionsectioncontains",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSectionFieldLayout",
        selector: "//h3[contains(normalize-space(),{})]/parent::div/following-sibling::div/descendant::*[starts-with(normalize-space(),{})]/parent::*/following-sibling::div/descendant::div[contains(@class, 'aui_FieldLayout_InputContainer')]",
        description: "sectionfieldlayout",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSectionFieldLayoutIndex",
        selector: "//h3[contains(normalize-space(),{})]/parent::div/following-sibling::div/descendant::div[contains(@class, 'aui_FieldLayout_InputContainer')][{}]",
        description: "sectionfieldlayoutindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeSectionValidationMessageSpecificValue",
        selector: "/descendant::p[contains(@class, 'validationMessage') and contains(normalize-space(), {})]",
        description: "sectionvalidationmessagespecificvalue",
        isParameterized: true
    },
    {
        name: "xpathRelativeSectionValidationMessage",
        selector: "./descendant::p[contains(@class, 'validationMessage')]",
        description: "sectionvalidationmessage",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSectionLayout",
        selector: "//h3[contains(normalize-space(),{})]/ancestor::div[contains(@class, 'aui-Section')]",
        description: "sectionlayout",
        isParameterized: true
    },
    {
        name: "xpathRelativeSectionToggle",
        selector: ".//a[contains(@title, 'Collapse') or contains(@title, 'Expand')]",
        description: "sectiontoggle",
        isParameterized: false
    },
    {
        name: "xpathRelativeFieldLayout",
        selector: ".//div[contains(@class, 'aui_FieldLayout_InputContainer')]",
        description: "fieldlayout",
        isParameterized: false
    },
    {
        name: "xpathRelativeReadOnlyField",
        selector: ".//p[contains(@class, 'readonly')] | div[ancestor::div[contains(@class, 'DataGrid-Container')]]",
        description: "readonlyfield",
        isParameterized: false
    },
    {
        name: "xpathRelativeFieldValidationMessageSpecificValue",
        selector: "/ancestor::div[contains(@class, 'aui_FieldLayout')][position()=1]/descendant::p[contains(@class, 'component_error') and contains(normalize-space(), {})]",
        description: "fieldvalidationmessagespecificvalue",
        isParameterized: true
    },
    {
        name: "xpathRelativeFieldValidationMessage",
        selector: "./ancestor::div[contains(@class, 'aui_FieldLayout')][position()=1]/descendant::p[contains(@class, 'component_error')]",
        description: "fieldvalidationmessage",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteChartLabel",
        selector: "//span[contains(normalize-space(),{})]",
        description: "chartlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSaveChanges",
        selector: "//a[contains(@class,'appian-form-close') and contains(text(), 'Save Changes')]",
        description: "savechanges",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteFormSavedConfirmation",
        selector: "//div[@id='inlineConfirmMessage' and contains(text(), 'Form saved successfully')]",
        description: "formsavedconfirmation",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordGridColumnSortLink",
        selector: "//div[contains(@class, 'DataGrid-Table')]/descendant::table/thead//a[normalize-space()={}]",
        description: "recordgridcolumnsortlink",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteRecordGridNavigationFirst",
        selector: "//div[contains(@class, 'DataGrid-Table')]/descendant::table/tfoot//a[@title='First']",
        description: "recordgridnavigationfirst",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordGridNavigationPrevious",
        selector: "//div[contains(@class, 'DataGrid-Table')]/descendant::table/tfoot//a[text()='Previous']",
        description: "recordgridnavigationprevious",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordGridNavigationNext",
        selector: "//div[contains(@class, 'DataGrid-Table')]/descendant::table/tfoot//a[text()='Next']",
        description: "recordgridnavigationnext",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordGridNavigationLast",
        selector: "//div[contains(@class, 'DataGrid-Table')]/descendant::table/tfoot//a[@title='Last']",
        description: "recordgridnavigationlast",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteLoginBox",
        selector: "//div[@class='login_box_inner']",
        description: "loginbox",
        isParameterized: false
    },
    {
        name: "xpathRelativeDropdownFieldInputHidden",
        selector: ".",
        description: "dropdownfieldinputhidden",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteFieldLayoutPlaceholder",
        selector: "//*[starts-with(normalize-space(),{})]/ancestor::div[contains(@class, 'FieldLayout---field_layout')][position()=1]",
        description: "fieldlayoutplaceholder",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteFieldLayoutInstructions",
        selector: "//div[contains(@class, FieldLayout---field_instructions) and starts-with(normalize-space(),{})]/ancestor::div[contains(@class, 'FieldLayout---field_layout')][position()=1]",
        description: "fieldlayoutinstructions",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteFieldLayoutTooltip",
        selector: "//*[local-name()='svg']/child::*[local-name()='desc' and starts-with(normalize-space(),{})]/ancestor::div[contains(@class, 'FieldLayout---field_layout')]",
        description: "fieldlayouttooltip",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteBarcodeFieldLabel",
        selector: "//label[contains(normalize-space(),{})]/parent::div/following-sibling::div/descendant::input",
        description: "barcodefieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteBarcodeFieldIndex",
        selector: "(//input[contains(@class, 'BarcodeWidget---text')])[{}]",
        description: "barcodefieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeBarcodeFieldInput",
        selector: ".//input[@type='text' and contains(@class,'BarcodeWidget---text')]",
        description: "barcodefieldinput",
        isParameterized: false
    },
    {
        name: "xpathDropdownFieldMultiple",
        selector: "MultipleDropdownWidget",
        description: "dropdownfieldmultiple",
        isParameterized: false
    },
    {
        name: "xpathDropdownOptionSelected",
        selector: "aria-selected",
        description: "dropdownoptionselected",
        isParameterized: false
    },
    {
        name: "xpathDropdownOptionChecked",
        selector: "aria-checked",
        description: "dropdownoptionchecked",
        isParameterized: false
    },
    {
        name: "xpathDropdownOptionActive",
        selector: "MenuWidgetItem---active",
        description: "dropdownoptionactive",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDropdownOptionList",
        selector: "//div[contains(@class,'TetherComponent---sailcontents') and contains(@class,'DropdownWidget---tether_dropdown')]//ul",
        description: "dropdownoptionlist",
        isParameterized: false
    },
    {
        name: "xpathAbsolutePickerSuggestionContains",
        selector: "//div[contains(@class,'TetherComponent---sailcontents') and contains(@class,'PickerWidget---picker_suggestions')]//p[not(p) and not(contains(text(),'Searching'))][descendant-or-self::*[contains(normalize-space(),{})]]",
        description: "pickersuggestioncontains",
        isParameterized: true
    },
    {
        name: "xpathRowSelected",
        selector: "aria-selected",
        description: "rowselected",
        isParameterized: false
    },
    {
        name: "xpathRowSelection",
        selector: "---selectable",
        description: "rowselection",
        isParameterized: false
    },
    {
        name: "xpathRelativeGridCheckboxClick",
        selector: ".//div[contains(@class,'CheckboxGroup---choice_group')]",
        description: "gridcheckboxclick",
        isParameterized: false
    },
    {
        name: "xpathRelativeFieldLayoutLabel",
        selector: ".//*[(self::span or self::label) and contains(@class, 'FieldLayout---field_label')]",
        description: "fieldlayoutlabel",
        isParameterized: false
    },
    {
        name: "xpathClickToPost",
        selector: "//div[contains(@class, 'social_box_container')]//input[not(contains(@class, 'gwt-SuggestBox'))]",
        description: "clicktopost",
        isParameterized: false
    },
    {
        name: "xpathTogglePostParticipants",
        selector: ".//a[contains(@aria-label, 'Add participants')]/*[1]",
        description: "togglepostparticipants",
        isParameterized: false
    },
    {
        name: "xpathAddPostParticipants",
        selector: "//input[contains(@placeholder, 'Add participants to notify')]",
        description: "addpostparticipants",
        isParameterized: false
    },
    {
        name: "xpathClickPostMessageBox",
        selector: ".//textarea[contains(@placeholder,'Type post here')]",
        description: "clickpostmessagebox",
        isParameterized: false
    },
    {
        name: "xpathClickPostSubmit",
        selector: ".//button[text()='Post']",
        description: "clickpostsubmit",
        isParameterized: false
    },
    {
        name: "xpathClickToKudos",
        selector: ".//a[text()='Kudos']",
        description: "clicktokudos",
        isParameterized: false
    },
    {
        name: "xpathClickToAddKudosRecipient",
        selector: "//input[contains(@placeholder,'Select kudos recipient')]",
        description: "clicktoaddkudosrecipient",
        isParameterized: false
    },
    {
        name: "xpathSocialBoxContainer",
        selector: "//*[@class='gwt-SuggestBoxPopup social_box_container']",
        description: "socialboxcontainer",
        isParameterized: false
    },
    {
        name: "xpathClickKudosMessageBox",
        selector: ".//textarea[contains(@placeholder,'Type kudos here')]",
        description: "clickkudosmessagebox",
        isParameterized: false
    },
    {
        name: "xpathClickKudosSubmit",
        selector: ".//button[text()='Give Kudos']",
        description: "clickkudossubmit",
        isParameterized: false
    },
    {
        name: "xpathClickToMessage",
        selector: ".//a[text()='Message']",
        description: "clicktomessage",
        isParameterized: false
    },
    {
        name: "xpathClickToAddMessageRecipients",
        selector: ".//input[contains(@placeholder,'Add recipients')]",
        description: "clicktoaddmessagerecipients",
        isParameterized: false
    },
    {
        name: "xpathClickToLockMessage",
        selector: "//button[contains(@aria-label, 'Participants may be added')]",
        description: "clicktolockmessage",
        isParameterized: false
    },
    {
        name: "xpathClickMessageBox",
        selector: ".//textarea[contains(@placeholder,'Type message here')]",
        description: "clickmessagebox",
        isParameterized: false
    },
    {
        name: "xpathClickMessageSubmit",
        selector: ".//button[text()='Send Message']",
        description: "clickmessagesubmit",
        isParameterized: false
    },
    {
        name: "xpathClickToTask",
        selector: ".//a[text()='Task']",
        description: "clicktotask",
        isParameterized: false
    },
    {
        name: "xpathClickToAddTaskRecipient",
        selector: "//input[contains(@placeholder,'Select task assignee')]",
        description: "clicktoaddtaskrecipient",
        isParameterized: false
    },
    {
        name: "xpathClickTaskMessageBox",
        selector: ".//textarea[contains(@placeholder,'Type task description here')]",
        description: "clicktaskmessagebox",
        isParameterized: false
    },
    {
        name: "xpathClickTaskSubmit",
        selector: ".//button[text()='Send Task']",
        description: "clicktasksubmit",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsItemStar",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::img[contains(@alt, 'Starred') or contains(@alt, 'Unstarred')]",
        description: "concatnewsitemstar",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsAddComment",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(text(), 'Comment')]",
        description: "concatnewsaddcomment",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsAddCommentBox",
        selector: "/following-sibling::div/descendant::textarea[contains(@title, 'Type comment here')]",
        description: "concatnewsaddcommentbox",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsSubmitCommentButton",
        selector: "/following-sibling::div/descendant::button[contains(text(), 'Comment')]",
        description: "concatnewssubmitcommentbutton",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteNewsFilterLink",
        selector: "//span[contains(normalize-space(),{})]",
        description: "newsfilterlink",
        isParameterized: true
    },
    {
        name: "xpathConcatNewsItemPostedAtLink",
        selector: "/following-sibling::div[starts-with(@class, 'appian-feed-entry-metadata')]/descendant::a[contains(@class, 'appian-relative-time-format-anchor')]",
        description: "concatnewsitempostedatlink",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsPostedByCircle",
        selector: "/../../preceding-sibling::div/descendant::span[contains(@class, 'appian-user-photo') and not(contains(@class, 'container'))]",
        description: "concatnewspostedbycircle",
        isParameterized: false
    },
    {
        name: "xpathConcatNewsPostedByLink",
        selector: "/preceding-sibling::div/descendant::span/a[contains(@class, 'appian-feed-entry-author')]",
        description: "concatnewspostedbylink",
        isParameterized: false
    },
    {
        name: "xpathTaskSorting",
        selector: "//img[contains(@alt, 'Sort Order')]/..",
        description: "tasksorting",
        isParameterized: false
    },
    {
        name: "xpathUserProfileHoverCardUserName",
        selector: "//div[@class='popupContent']/descendant::p[contains(normalize-space(), {})]",
        description: "userprofilehovercardusername",
        isParameterized: true
    },
    {
        name: "xpathTaskNewest",
        selector: "//a[@class='gwt-Anchor' and text()='Newest']",
        description: "tasknewest",
        isParameterized: false
    },
    {
        name: "xpathTaskOldest",
        selector: "//a[@class='gwt-Anchor' and text()='Oldest']",
        description: "taskoldest",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteProgressBar",
        selector: "//div[@id='appian-nprogress']",
        description: "progressbar",
        isParameterized: false
    },
    {
        name: "xpathSitesDiscoverabilityMenu",
        selector: "//div[@class='SiteHeaderLayout---minimize SiteHeaderLayout---contextWidget']",
        description: "sitesdiscoverabilitymenu",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSiteProfileMenuLink",
        selector: ".//button[text()='Profile'][1]",
        description: "siteprofilemenulink",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSiteSettingsMenuLink",
        selector: ".//button[text()='Settings'][1]",
        description: "sitesettingsmenulink",
        isParameterized: false
    },
    {
        name: "xpathRelativeSiteNameMenuLink",
        selector: "//span[@class='MenuItem---primary_text' and contains(normalize-space(),{})]",
        description: "sitenamemenulink",
        isParameterized: true
    },
    {
        name: "xpathAuthenticationPage",
        selector: "//a[@class='elements---global_a' and text()='Appian']",
        description: "authenticationpage",
        isParameterized: false
    },
    {
        name: "xpathPageContainsText",
        selector: "//*[text()[contains(normalize-space(), %s)]]",
        description: "pagecontainstext",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteVideo",
        selector: "//video[contains(normalize-space(),{})]",
        description: "video",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteWebContent",
        selector: "//iframe[contains(normalize-space(),{})]/parent::div[contains(@class, 'WebContentWidget---webcontent')] | //a[contains(normalize-space(),{})]",
        description: "webcontent",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteIconLinkField",
        selector: "(//a[descendant::*[contains(@class, 'IconWidget---svg')]])",
        description: "iconlinkfield",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteIconLinkFieldAltText",
        selector: "(//a[descendant::*[contains(@class, 'IconWidget---svg')] and descendant::*[contains(local-name(), 'desc') and contains(normalize-space(),{})]])",
        description: "iconlinkfieldalttext",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteButtonTooltip",
        selector: "//button[.//descendant::span[contains(@class, 'accessibilityhidden') and starts-with(normalize-space(), {})]]",
        description: "buttontooltip",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteMenuWidgetItemText",
        selector: "//li[@class='MenuWidgetItem---default_direction' and .//descendant::span[contains(@class, 'MenuItem---primary_text') and starts-with(normalize-space(), {})]]",
        description: "menuwidgetitemtext",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteMenuWidgetItem",
        selector: "//li[@class='MenuWidgetItem---default_direction']",
        description: "menuwidgetitem",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteCard",
        selector: "//span[contains(normalize-space(),{})]/parent::div[contains(@class,'CardLayout')]",
        description: "card",
        isParameterized: true
    },
    {
        name: "xpathConcatParentFieldLayout",
        selector: "/parent::div/parent::div",
        description: "concatparentfieldlayout",
        isParameterized: false
    },
    {
        name: "xpathRelativeEncryptedTextFieldInput",
        selector: ".//input[@type='text' and contains(@class,'EncryptedTextWidget---text')]",
        description: "encryptedtextfieldinput",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteBox",
        selector: "//div[(contains(@class, 'BoxLayout---box_label') or contains(@class, 'BoxLayout---box_heading'))and contains(normalize-space(),{})]/ancestor::div[contains(concat(' ', @class, ' '), ' BoxLayout---box ')]",
        description: "box",
        isParameterized: true
    },
    {
        name: "xpathRelativeBoxHeader",
        selector: ".//div[contains(@class, 'BoxLayout---box_heading_wrapper')]",
        description: "boxheader",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSearchClearX",
        selector: "//label[contains(@class,'FieldLayout---field_label') and contains(text(),'Search')]/ancestor::div[contains(@class,'FieldLayout---field_layout')]//div[contains(@class,'FieldLayout---input_below')]//i",
        description: "searchclearx",
        isParameterized: false
    },
    {
        name: "xpathRelativeMaskedBarcodeFieldInput",
        selector: ".//input[@type='password' and contains(@class,'BarcodeWidget---text')]",
        description: "maskedbarcodefieldinput",
        isParameterized: false
    },
    {
        name: "xpathRelativeMilestoneStepVerticalGeneral",
        selector: ".//ol[@class='MilestoneWidget---milestone MilestoneWidget---vertical']/li",
        description: "milestonestepverticalgeneral",
        isParameterized: false
    },
    {
        name: "xpathRelativeMilestoneStepVerticalSelected",
        selector: ".//ol[@class='MilestoneWidget---milestone MilestoneWidget---vertical']/li[@class='MilestoneWidget---current']",
        description: "milestonestepverticalselected",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteShowResultsLabelEntry",
        selector: ".//p[contains(@class, 'ParagraphText---richtext_paragraph ParagraphText---default_direction ParagraphText---align_start ParagraphText---inMessageLayout ParagraphText---info elements---global_p')]",
        description: "showresultslabelentry",
        isParameterized: false
    },
    {
        name: "xpathAbsolutePickerSuggestionBox",
        selector: "//ul[contains(@class,'MenuWidget---inPickerWidget')]",
        description: "pickersuggestionbox",
        isParameterized: false
    },
    {
        name: "xpathRelativeGaugeField",
        selector: ".//div[@class='GaugeWidget---gauge_container GaugeWidget---medium GaugeWidget---accent']",
        description: "gaugefield",
        isParameterized: false
    },
    {
        name: "xpathRelativeGaugeFieldPercentage",
        selector: ".//div[@class='GaugeWidget---gauge_container GaugeWidget---medium GaugeWidget---accent']/child::node()[1]/*[2]",
        description: "gaugefieldpercentage",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteWorkingIndicator",
        selector: "//div[@id='appian-working-indicator-hidden']",
        description: "workingindicator",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDocumentImageLink",
        selector: "//a[(contains(@class, 'DocumentImage---image_link')) or (contains(@class, 'DocumentImage---image') and @href)]",
        description: "documentimagelink",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteDocumentImageLinkAltText",
        selector: "//a[((contains(@class, 'DocumentImage---image_link')) or (contains(@class, 'DocumentImage---image') and @href)) and (descendant::img[contains(normalize-space(),{})] or descendant::span[contains(normalize-space(),{})])]",
        description: "documentimagelinkalttext",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteColumnChartIndex",
        selector: "((//span[normalize-space()={}])[{}]/parent::*[contains(@class, 'FieldLayout')]/following-sibling::*/descendant::*[name()='rect' and contains(@class, 'highcharts-point') and parent::*[name()='g' and contains(@class, 'highcharts-column-series') and not(contains(@class, 'highcharts-legend-item'))]])[{}]",
        description: "columnchartindex",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteBarChartIndex",
        selector: "((//span[normalize-space()={}])[{}]/parent::*[contains(@class, 'FieldLayout')]/following-sibling::*/descendant::*[name()='rect' and contains(@class, 'highcharts-point') and parent::*[name()='g' and contains(@class, 'highcharts-bar-series') and not(contains(@class, 'highcharts-legend-item'))]])[{}]",
        description: "barchartindex",
        isParameterized: true
    },
    {
        name: "xpathAbsolutePieChartIndex",
        selector: "((//span[normalize-space()={}])[{}]/parent::*[contains(@class, 'FieldLayout')]/following-sibling::*/descendant::*[name()='path' and contains(@class, 'highcharts-point') and parent::*[name()='g' and contains(@class, 'highcharts-pie-series')]])[{}]",
        description: "piechartindex",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteLineChartIndex",
        selector: "((//span[normalize-space()={}])[{}]/parent::*[contains(@class, 'FieldLayout')]/following-sibling::*/descendant::*[name()='path' and contains(@class, 'highcharts-point') and parent::*[name()='g' and contains(@class, 'highcharts-line-series') and not(contains(@class, 'highcharts-legend-item'))]])[{}]",
        description: "linechartindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeConfirmationDialogHeader",
        selector: ".//div[contains(@aria-labelledby, 'ConfirmationBoxRichTextDisplayFieldheader')]/*[1][contains(normalize-space(),{})]",
        description: "confirmationdialogheader",
        isParameterized: true
    },
    {
        name: "xpathRelativeConfirmationDialogMessage",
        selector: ".//div[contains(@aria-labelledby, 'ConfirmationBoxRichTextDisplayFieldbody')]/*[1][contains(normalize-space(),{})]",
        description: "confirmationdialogmessage",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTagFieldLabel",
        selector: "//div[contains(@class, 'FieldLayout---field_layout') and descendant::span[contains(@class, 'FieldLayout---field_label') and contains(normalize-space(), {})] and descendant::div[contains(@class,'TagGroup---tag_container')]]",
        description: "tagfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTagFieldIndex",
        selector: "(//div[contains(@class, 'FieldLayout---field_layout') and descendant::span[contains(@class, 'FieldLayout---field_label')] and descendant::div[contains(@class,'TagGroup---tag_container')]])[{}]",
        description: "tagfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeTagGroup",
        selector: ".//div[contains(@class,'TagGroup---tag_container')]",
        description: "taggroup",
        isParameterized: false
    },
    {
        name: "xpathRelativeTagItem",
        selector: ".//div[contains(@class,'TagItem---tag')]",
        description: "tagitem",
        isParameterized: false
    },
    {
        name: "xpathRelativeTagItemLabel",
        selector: ".//div[contains(@class,'TagItem---tag') and descendant::span[contains(normalize-space(), {})]]",
        description: "tagitemlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTagItemLabel",
        selector: "//div[contains(@class,'TagItem---tag') and descendant::span[contains(normalize-space(), {})]]",
        description: "tagitemlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteTagItemIndex",
        selector: "(//div[contains(@class,'TagItem---tag')])[{}]",
        description: "tagitemindex",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteDropdownSearchBoxField",
        selector: "//div[contains(@class, 'DropdownWidget---search_box_wrapper')]",
        description: "dropdownsearchboxfield",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteStampFieldLabel",
        selector: "//span[contains(@class, 'FieldLayout---field_label') and contains(normalize-space(),{})]/parent::*/following-sibling::*/div/div[contains(@class, 'StampWidget---stamp')]",
        description: "stampfieldlabel",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteStampFieldIndex",
        selector: "(//div[contains(@class, 'StampWidget---stamp_wrapper')]/div[contains(@class, 'StampWidget---stamp')])[{}]",
        description: "stampfieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeStampFieldText",
        selector: ".//descendant::span[contains(normalize-space(),{})]",
        description: "stampfieldtext",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSignatureField",
        selector: "//div[contains(@class, 'FieldLayout---field_layout') and descendant::span[contains(@class, 'FieldLayout---field_label') and contains(normalize-space(), {})] and descendant::div[contains(@class,'SignatureWidget---container')]]",
        description: "signaturefield",
        isParameterized: true
    },
    {
        name: "xpathAbsoluteSignatureFieldIndex",
        selector: "(//div[contains(@class, 'FieldLayout---field_layout') and descendant::span[contains(@class, 'FieldLayout---field_label')] and descendant::div[contains(@class,'SignatureWidget---container')]])[{}]",
        description: "signaturefieldindex",
        isParameterized: true
    },
    {
        name: "xpathRelativeSignatureButton",
        selector: ".//button[contains(@class, 'Button---inSignatureWidget')]",
        description: "signaturebutton",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSignatureCanvas",
        selector: "//canvas[contains(@class, 'SignatureWidget---canvas')]",
        description: "signaturecanvas",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteSignatureDoneButton",
        selector: "//div[contains(@class, 'SignatureWidget---popup')]/descendant::button[2]",
        description: "signaturedonebutton",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordActionFieldIndexButton",
        selector: "(//div[contains(@class, 'RecordActionWidget---menu_layout_wrapper')])[{}]//button",
        description: "recordactionfieldindexbutton",
        isParameterized: true
    },
    {
        name: "xpathHiddenRecordActionList",
        selector: "//ul[contains(@class,'MenuWidget---inRecordActionWidget')]",
        description: "hiddenrecordactionlist",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteCardChoice",
        selector: "//div[contains(@class,'CardLayout') and descendant::span[contains(normalize-space(),{})] | descendant::strong[contains(normalize-space(),{})] and ancestor::div[contains(@class, 'FieldLayout') and descendant::span[contains(normalize-space(),{})]]]",
        description: "cardchoice",
        isParameterized: true
    },
    {
        name: "xpathCardChoiceSelected",
        selector: "CardLayout---selected_card",
        description: "cardchoiceselected",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteCardChoiceField",
        selector: "//div[contains(@class, 'FieldLayout---field_layout') and descendant::div[contains(@class, 'CardGroup---card_group')] and descendant::span[contains(normalize-space(),'card choice')]]",
        description: "cardchoicefield",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordTypeDateRange",
        selector: "//div[contains(@class, 'DateRangeWidget---date_range_outer_box')]",
        description: "recordtypedaterange",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordTypeDateRangeStartDate",
        selector: "//input[contains(@class, 'DateRangeInputPicker---date_range_input') and ancestor::div[@data-testid='DateRangeWidget-startDateContainer']]",
        description: "recordtypedaterangestartdate",
        isParameterized: false
    },
    {
        name: "xpathAbsoluteRecordTypeDateRangeEndDate",
        selector: "//input[contains(@class, 'DateRangeInputPicker---date_range_input') and ancestor::div[@data-testid='DateRangeWidget-endDateContainer']]",
        description: "recordtypedaterangeenddate",
        isParameterized: false
    },
    {
        name: "xpathGeneralText",
        selector: "//div/descendant::*[text()[contains(normalize-space(),{})]]",
        description: "generaltext",
        isParameterized: true
    },
    {
        name: "xpathRelativeSiteGroup",
        selector: "//button[@data-testid = 'VirtualNavigationMenuTab-pulldownButton' and descendant::span[text()[contains(normalize-space(),{})]]]",
        description: "sitegroup",
        isParameterized: true
    },
    {
        name: "xpathRelativeSitePageInGroup",
        selector: "//li[contains(normalize-space(), {}) and ancestor::section[@data-testid = 'VirtualNavigationMenuTab-popupMenuContents']]/descendant::a",
        description: "sitepageingroup",
        isParameterized: true
    },
    {
        name: "xpathRelativeChartDownload",
        selector: "//span[contains(normalize-space(),{})]/ancestor::div[contains(@class, 'FieldLayout---field_layout')]/descendant::button[@title = 'Download PNG Image']",
        description: "chartdownload",
        isParameterized: true
    },
    {
        name: "xpathSideBarCollapseButton",
        selector: "//button[@data-testid = 'VirtualNavigationHeaderSideBarLayout-collapse-button']",
        description: "sidebarcollapsebutton",
        isParameterized: false
    }
];
