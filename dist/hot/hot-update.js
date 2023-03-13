self["webpackHotUpdatekore_web_sdk"]("esm",{

/***/ "./src/templatemanager/templates/searchGridViewTemplate/searchGridViewTemplate.ts":
/*!****************************************************************************************!*\
  !*** ./src/templatemanager/templates/searchGridViewTemplate/searchGridViewTemplate.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _searchGridViewTemplate_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchGridViewTemplate.scss */ "./src/templatemanager/templates/searchGridViewTemplate/searchGridViewTemplate.scss");


var SearchGridViewTemplate = /** @class */ (function () {
    function SearchGridViewTemplate() {
    }
    SearchGridViewTemplate.prototype.renderMessage = function (msgData) {
        var _a, _b, _c;
        var me = this;
        var $ = me.hostInstance.$;
        me.helpersObj = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"];
        if ((msgData === null || msgData === void 0 ? void 0 : msgData.message[0]) && msgData.message[0].component && ((_a = msgData.message[0].component) === null || _a === void 0 ? void 0 : _a.payload) && ((_c = (_b = msgData.message[0].component) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.template_type) == 'searchGridTemplate') {
            if (!msgData.message[0].component.payload.helpers) {
                msgData.message[0].component.payload['helpers'] = me.helpersObj;
            }
            me.messageGridHtml = $(SearchGridViewTemplate.prototype.getTemplateString(msgData === null || msgData === void 0 ? void 0 : msgData.message[0].component.payload.template_type)).tmpl(msgData === null || msgData === void 0 ? void 0 : msgData.message[0].component.payload);
            SearchGridViewTemplate.prototype.bindEvents(me, me.messageGridHtml);
            return me.messageGridHtml;
        }
    };
    SearchGridViewTemplate.prototype.bindEvents = function (me, messageHtml) {
        var hostWindowInstance = me.hostInstance;
        var $ = me.hostInstance.$;
        $(messageHtml)
            .off("click", ".show-more-list")
            .on("click", ".show-more-list", function (e) {
            var showMoreData = {
                groupName: $(e.currentTarget).attr("groupName"),
                templateName: $(e.currentTarget).attr("templateName"),
                pageNumber: Number($(e.currentTarget).attr("pageNumber")) + 1,
                fieldName: $(e.currentTarget).attr("fieldName"),
            };
            hostWindowInstance.showMoreClick(showMoreData).then(function (result) {
                var listHTML = $(SearchGridViewTemplate.prototype.getTemplateString(result === null || result === void 0 ? void 0 : result.message[0].component.payload.template_type)).tmpl(result === null || result === void 0 ? void 0 : result.message[0].component.payload);
                $(listHTML).find(".show-more-list").remove();
                $(".full-search-data-container [templateName=" +
                    showMoreData.templateName +
                    "]").before($(listHTML).find(".search-list-template-grid-img-title").children());
                SearchGridViewTemplate.prototype.bindEvents(me, listHTML);
            });
            $(e.currentTarget).attr("pageNumber", Number($(e.currentTarget).attr("pageNumber")) + 1);
        });
        $(messageHtml)
            .off("click", ".search-task")
            .on("click", ".search-task", function (event) {
            event.stopPropagation();
            var ele = $(event.target).closest(".search-task");
            hostWindowInstance.botActionTrigger(event);
        });
        $('.parent-grid-template').off("click", ".click-to-navigate-url").on("click", ".click-to-navigate-url", function (e) {
            hostWindowInstance === null || hostWindowInstance === void 0 ? void 0 : hostWindowInstance.clickNavigateToUrl(e);
        });
        $('.parent-grid-template').off("click", ".click-log-metrics").on("click", ".click-log-metrics", function (e) {
            hostWindowInstance === null || hostWindowInstance === void 0 ? void 0 : hostWindowInstance.captureClickAnalytics(e, $(e.currentTarget).closest(".click-log-metrics").attr("contentType"), "click", $(e.currentTarget).closest(".click-log-metrics").attr("contentId"), $(e.currentTarget).closest(".click-log-metrics").attr("id"), $(e.currentTarget).closest(".click-log-metrics").attr("data-title") || $(e.currentTarget).attr("title"));
        });
        SearchGridViewTemplate.prototype.tooltipBindEvent(me);
    };
    SearchGridViewTemplate.prototype.getTemplateString = function (type) {
        var searchGridTemplate = '<script type="text/x-jqury-tmpl">\
        {{if isButtonTemplate == false}}\
        <div>\
            {{if renderTitle}}\
            <div class="title-list-heading">${titleName}</div>\
            {{/if}}\
            {{if gridLayoutType==="img_common"}}\
            <div class="search-list-template-grid-img-title parent-grid-template">\
            {{each(key, data) structuredData.slice(0, 5)}}\
            {{if isClickable == true}}\
            <div class=" grid-item-col {{if textAlignment==" center"}}text-center{{/if}}  click-to-navigate-url click-log-metrics" data-title="${data.heading}" contentId="${data.contentId}" contentType="${data.sys_content_type}" id="${key}" href="${data.url}" target="_blank">\
            {{else}}\
            <div class="grid-item-col {{if textAlignment==" center"}}text-center{{/if}} click-log-metrics" contentId="${data.contentId}" data-title="${data.heading}" contentType="${data.sys_content_type}" id="${key}">\
            {{/if}}\
                <div class="content-info-grid">\
                {{if data.heading.length}}\
                <div class="heading-title">\
                {{if data.img.length}}\
                <div class="img_block">\
                <img src="${data.img}" />\
                </div>\
                {{/if}}\
                    <span class="{{if data.img.length}}two-line-title-heading{{else}}title-heading {{/if}}">{{html helpers.convertMDtoHTML(data.heading)}}</span>\
                </div>\
                {{/if}}\
                {{if data.description}}\
                <div class="desc_text_info sa-sdk-title {{if listType==" classic"}}clamp-text{{/if}}" data-title="${data.description}">{{html helpers.convertMDtoHTML(data.description)}}</div>\
                {{/if}}\
                </div>\
            </div>\
            {{/each}}\
                <div class="show-more-data {{if doc_count==0 || doc_count<6 || isLiveSearch || isSearch}}display-none{{/if}} show-more-list" groupName="${groupName}" templateName="${templateName}" pageNumber="${pageNumber}" fieldName="${fieldName}">\
                    <div class="searchassist-show-more-button">Show more\
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4zNjQzNyA1LjE0OTQ5QzUuMTc0OTcgNS4zMzgzNyA0Ljg3NDgxIDUuMzQ5NDggNC42NzIzOSA1LjE4MjgyTDQuNjM1NjMgNS4xNDk0OUwwLjE1MDkyNyAwLjg3NzI2NUMtMC4wNTAzMDkxIDAuNjc2NTc5IC0wLjA1MDMwOTEgMC4zNTEyMDIgMC4xNTA5MjcgMC4xNTA1MTVDMC4zNDAzMjYgLTAuMDM4MzY2NCAwLjY0MDQ4IC0wLjA0OTQ3NzMgMC44NDI5MDkgMC4xMTcxODNMMC44Nzk2NjggMC4xNTA1MTVMNSA0LjA1OTI4TDkuMTIwMzMgMC4xNTA1MTVDOS4zMDk3MyAtMC4wMzgzNjY0IDkuNjA5ODggLTAuMDQ5NDc3MyA5LjgxMjMxIDAuMTE3MTgzTDkuODQ5MDcgMC4xNTA1MTVDMTAuMDM4NSAwLjMzOTM5NyAxMC4wNDk2IDAuNjM4NzMxIDkuODgyNSAwLjg0MDYwN0w5Ljg0OTA3IDAuODc3MjY1TDUuMzY0MzcgNS4xNDk0OVoiIGZpbGw9IiM1RjYzNjgiLz4KPC9zdmc+Cg==">\
                    </div>\
                </div>\
            </div>\
        {{/if}}\
        {{if gridLayoutType==="img_large"}}\
        <div class="search-list-template-grid-img parent-grid-template">\
        {{each(key, data) structuredData.slice(0, 5)}}\
        {{if isClickable == true}}\
        <div class="parent-grid-template grid-item-col  click-to-navigate-url click-log-metrics" data-title="${data.heading}" contentId="${data.contentId}" contentType="${data.sys_content_type}" id="${key}" href="${data.url}" target="_blank">\
        {{else}}\
        <div class="grid-item-col click-log-metrics" data-title="${data.heading}" contentId="${data.contentId}" contentType="${data.sys_content_type}" id="${key}">\
        {{/if}}\
                <div class="content-info-grid">\
                    <div class="img-block-data">\
                    <img src="${data.img}" />\
                    </div>\
                </div>\
            </div>\
            {{/each}}\
            <div class="show-more-data {{if doc_count==0 || doc_count<6 || isLiveSearch || isSearch}}display-none{{/if}} show-more-list" groupName="${groupName}" templateName="${templateName}" pageNumber="${pageNumber}" fieldName="${fieldName}">\
                <div class="searchassist-show-more-button">Show more\
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4zNjQzNyA1LjE0OTQ5QzUuMTc0OTcgNS4zMzgzNyA0Ljg3NDgxIDUuMzQ5NDggNC42NzIzOSA1LjE4MjgyTDQuNjM1NjMgNS4xNDk0OUwwLjE1MDkyNyAwLjg3NzI2NUMtMC4wNTAzMDkxIDAuNjc2NTc5IC0wLjA1MDMwOTEgMC4zNTEyMDIgMC4xNTA5MjcgMC4xNTA1MTVDMC4zNDAzMjYgLTAuMDM4MzY2NCAwLjY0MDQ4IC0wLjA0OTQ3NzMgMC44NDI5MDkgMC4xMTcxODNMMC44Nzk2NjggMC4xNTA1MTVMNSA0LjA1OTI4TDkuMTIwMzMgMC4xNTA1MTVDOS4zMDk3MyAtMC4wMzgzNjY0IDkuNjA5ODggLTAuMDQ5NDc3MyA5LjgxMjMxIDAuMTE3MTgzTDkuODQ5MDcgMC4xNTA1MTVDMTAuMDM4NSAwLjMzOTM5NyAxMC4wNDk2IDAuNjM4NzMxIDkuODgyNSAwLjg0MDYwN0w5Ljg0OTA3IDAuODc3MjY1TDUuMzY0MzcgNS4xNDk0OVoiIGZpbGw9IiM1RjYzNjgiLz4KPC9zdmc+Cg==">\
                </div>\
        </div>\
        </div>\
        {{/if}}\
        {{if gridLayoutType==="img_left"}}\
        <div class="search-list-template-grid-title-img-desc parent-grid-template">\
        {{each(key, data) structuredData.slice(0, 5)}}\
        {{if isClickable == true}}\
        <div class=" parent-grid-templategrid-item-col  click-to-navigate-url click-log-metrics" data-title="${data.heading}" contentId="${data.contentId}" contentType="${data.sys_content_type}" id="${key}" href="${data.url}" target="_blank">\
        {{else}}\
        <div class="grid-item-col click-log-metrics" contentId="${data.contentId}" data-title="${data.heading}" contentType="${data.sys_content_type}" id="${key}">\
        {{/if}}\
            <div class="content-info-grid">\
                <div class="heading-title text_overflow sa-sdk-title" data-title="${data.heading}">{{html helpers.convertMDtoHTML(data.heading)}}</div>\
                {{each(key, res) [0,1,2]}}\
                <div class="img-with-desc">\
                    <div class="img_info">\
                        <img src="${data.img}" />\
                    </div>\
                    <div class="desc-text clamp-text sa-sdk-title" data-title="${data.description}">{{html helpers.convertMDtoHTML(data.description)}}</div>\
                </div>\
                {{/each}}\
            </div>\
        </div>\
        {{/each}}\
        <div class="show-more-data {{if doc_count==0 || doc_count<6 || isLiveSearch || isSearch}}display-none{{/if}} show-more-list" groupName="${groupName}" templateName="${templateName}" pageNumber="${pageNumber}" fieldName="${fieldName}">\
        <div class="searchassist-show-more-button">Show more\
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4zNjQzNyA1LjE0OTQ5QzUuMTc0OTcgNS4zMzgzNyA0Ljg3NDgxIDUuMzQ5NDggNC42NzIzOSA1LjE4MjgyTDQuNjM1NjMgNS4xNDk0OUwwLjE1MDkyNyAwLjg3NzI2NUMtMC4wNTAzMDkxIDAuNjc2NTc5IC0wLjA1MDMwOTEgMC4zNTEyMDIgMC4xNTA5MjcgMC4xNTA1MTVDMC4zNDAzMjYgLTAuMDM4MzY2NCAwLjY0MDQ4IC0wLjA0OTQ3NzMgMC44NDI5MDkgMC4xMTcxODNMMC44Nzk2NjggMC4xNTA1MTVMNSA0LjA1OTI4TDkuMTIwMzMgMC4xNTA1MTVDOS4zMDk3MyAtMC4wMzgzNjY0IDkuNjA5ODggLTAuMDQ5NDc3MyA5LjgxMjMxIDAuMTE3MTgzTDkuODQ5MDcgMC4xNTA1MTVDMTAuMDM4NSAwLjMzOTM5NyAxMC4wNDk2IDAuNjM4NzMxIDkuODgyNSAwLjg0MDYwN0w5Ljg0OTA3IDAuODc3MjY1TDUuMzY0MzcgNS4xNDk0OVoiIGZpbGw9IiM1RjYzNjgiLz4KPC9zdmc+Cg==">\
        </div>\
        </div>\
        </div>\
        {{/if}}\
        {{if gridLayoutType==="img_top"}}\
        <div class="search-list-template-grid-title-img-card parent-grid-template">\
        {{each(key, data) structuredData.slice(0, 5)}}\
        {{if isClickable == true}}\
        <div class=" grid-item-col  click-to-navigate-url click-log-metrics" data-title="${data.heading}" contentId="${data.contentId}" contentType="${data.sys_content_type}" id="${key}" href="${data.url}" target="_blank">\
        {{else}}\
        <div class="grid-item-col click-log-metrics" data-title="${data.heading}" contentId="${data.contentId}" contentType="${data.sys_content_type}" id="${key}">\
        {{/if}}\
            <div class="content-info-grid">\
                <div class="main-img-block">\
                    <img src="${data.img}" height="10"/>\
                </div>\
                {{if data.heading.length}}\
                <div class="heading-title text_overflow sa-sdk-title" data-title="${data.heading}">{{html helpers.convertMDtoHTML(data.heading)}}</div>\
                {{/if}}\
                {{if data.description.length}}\
                <div class="desc-text clamp-text sa-sdk-title" data-title="${data.description}">{{html helpers.convertMDtoHTML(data.description)}}</div>\
                {{/if}}\
                <div class="price-tag display-none">$156</div>\
            </div>\
        </div>\
        {{/each}}\
        <div class="show-more-data {{if doc_count==0 || doc_count<6 || isLiveSearch || isSearch}}display-none{{/if}} show-more-list" groupName="${groupName}" templateName="${templateName}" pageNumber="${pageNumber}" fieldName="${fieldName}">\
            <div class="searchassist-show-more-button">Show more\
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4zNjQzNyA1LjE0OTQ5QzUuMTc0OTcgNS4zMzgzNyA0Ljg3NDgxIDUuMzQ5NDggNC42NzIzOSA1LjE4MjgyTDQuNjM1NjMgNS4xNDk0OUwwLjE1MDkyNyAwLjg3NzI2NUMtMC4wNTAzMDkxIDAuNjc2NTc5IC0wLjA1MDMwOTEgMC4zNTEyMDIgMC4xNTA5MjcgMC4xNTA1MTVDMC4zNDAzMjYgLTAuMDM4MzY2NCAwLjY0MDQ4IC0wLjA0OTQ3NzMgMC44NDI5MDkgMC4xMTcxODNMMC44Nzk2NjggMC4xNTA1MTVMNSA0LjA1OTI4TDkuMTIwMzMgMC4xNTA1MTVDOS4zMDk3MyAtMC4wMzgzNjY0IDkuNjA5ODggLTAuMDQ5NDc3MyA5LjgxMjMxIDAuMTE3MTgzTDkuODQ5MDcgMC4xNTA1MTVDMTAuMDM4NSAwLjMzOTM5NyAxMC4wNDk2IDAuNjM4NzMxIDkuODgyNSAwLjg0MDYwN0w5Ljg0OTA3IDAuODc3MjY1TDUuMzY0MzcgNS4xNDk0OVoiIGZpbGw9IiM1RjYzNjgiLz4KPC9zdmc+Cg==">\
            </div>\:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4zNjQzNyA1LjE0OTQ5QzUuMTc0OTcgNS4zMzgzNyA0Ljg3NDgxIDUuMzQ5NDggNC42NzIzOSA1LjE4MjgyTDQuNjM1NjMgNS4xNDk0OUwwLjE1MDkyNyAwLjg3NzI2NUMtMC4wNTAzMDkxIDAuNjc2NTc5IC0wLjA1MDMwOTEgMC4zNTEyMDIgMC4xNTA5MjcgMC4xNTA1MTVDMC4zNDAzMjYgLTAuMDM4MzY2NCAwLjY0MDQ4IC0wLjA0OTQ3NzMgMC44NDI5MDkgMC4xMTcxODNMMC44Nzk2NjggMC4xNTA1MTVMNSA0LjA1OTI4TDkuMTIwMzMgMC4xNTA1MTVDOS4zMDk3MyAtMC4wMzgzNjY0IDkuNjA5ODggLTAuMDQ5NDc3MyA5LjgxMjMxIDAuMTE3MTgzTDkuODQ5MDcgMC4xNTA1MTVDMTAuMDM4NSAwLjMzOTM5NyAxMC4wNDk2IDAuNjM4NzMxIDkuODgyNSAwLjg0MDYwN0w5Ljg0OTA3IDAuODc3MjY1TDUuMzY0MzcgNS4xNDk0OVoiIGZpbGw9IiM1RjYzNjgiLz4KPC9zdmc+Cg==">\
        </div>\
    </div>\
        {{/if}}\
        </div>\
    {{/if}}\
    {{if isButtonTemplate}}\
    {{if structuredData && structuredData.length > 0 }}\
    {{if devMode == true && viewType == "Customize" && selectedFacet == appearanceType}}\
      <div class="bot-actions-customize-info ">\
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgBpVNNSsNQEH4zabXLuFXEHsGCqLjQ9gTqCWJP0AsUk0j26tJdegLrCczKnyL0CDbgAbKzhvjGmZBIfIQScODxHt/8fzNPqRXSOfS6clbZgAm09sZ9tCxHkToDULZgRCphyykC+MsXb1G1x78ZfRfRumfDGBF6X68+yJG3YET0uLZ/6dZWIM5E+gIABmaWaksShE+Yzq783wClwnRmvK91ZqezYFoNojXNtf4+z96CKG9BE3F2mpiZAWgXsWVXMbHhlm5znoSzHGXCELFnlvz57N+oegm59DnfQyjKfxeyTCsmzJOb+/VM3fqBS2C1u6j+KSg9yZw7R8FOU6diuZLl0zguKqAHnaVD1VjAIaXyyeQBmMCQRzgy15bxhRwzu+yLbGUeqqLwmEyn4SJNSmKtUpl9RFF7e7DBymtr68Tmd8xYUjri5vGIuQq53bvqVKAui9aaDeC05jPJskWqqTT5zj8FOrqqP5/xLgAAAABJRU5ErkJggg==" alt="actions-info">\
        <span class="info-text">Bot Actions cannot be customized</span>\
      </div>\
    {{/if}}\
    {{if selectedFacet !== appearanceType && selectedFacet == "all results"}}\
        <div class="heading-and-show-all" appearanceType="task">\
            <div class="text-heading-main">ACTIONS</div>\
            <div class="show-al-text show-all-blue display-none">Show all Actions</div>\
        </div>\
    {{/if}}\
    {{if selectedFacet == appearanceType || selectedFacet == "all results"}}\
        <div class="new-grid-search-data">\
            {{each(key, task) structuredData}}\
                <div class="title-box-data">\
                    <div id="${key}" class="search-task search-grid-item text-truncate " title="${task.name}" contentId="${task.taskId}" contentType="${task.contentType}" childBotId="${task.childBotId}" childBotName="${task.childBotName}" payload="${task.payload}" seqLogId="${task.seqLogId}">\
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJ1BMVEUAAAAAVaoEbq4DbK8GbK4Gbq8Gba0Fba8Fba4Fbq4Eba4Fba7////SVqJwAAAAC3RSTlMAA0hJVYKDqKmq4875bAAAAAABYktHRAyBs1FjAAAAP0lEQVQI12NgwACMJi5A4CzAwLobDBIYOCaAxDknMLCvnAkEsyYwcECkkBicMDV4GGwQxQEMjCogK5wEMC0HALyTIMofpWLWAAAAAElFTkSuQmCC" class="credit-card display-none">\
                        <div class="name-title">${task.titleText}</div>\
                        {{if task.childBotName !=="" && task.childBotName !== undefined}}\
                            <div class="child-bot">${task.childBotName}</div>\
                        {{/if}}\
                    </div>\
                </div>\
            {{/each}}\
        </div>\
    {{/if}}\
  {{/if}}\
    {{/if}}\
        </script>';
        if (type === 'searchGridTemplate') {
            return searchGridTemplate;
        }
    };
    SearchGridViewTemplate.prototype.tooltipBindEvent = function (me) {
        var $ = me.hostInstance.$;
        $('.sa-sdk-title').off('mouseover').on('mouseover', function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            $(e.currentTarget).before('<div class="sdk-tooltip-container">' + $(e.currentTarget).attr('data-title') + '<span class="sa-tooltip-arrow"></span></div>');
            $(e.currentTarget).parent().find('.sdk-tooltip-container').css('top', ($(e.currentTarget).position().top - ($(e.currentTarget).parent().find('.sdk-tooltip-container').height() + 25)) + 'px');
        });
        $('.sa-sdk-title').off('mouseout').on('mouseout', function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            $(e.currentTarget).parent().find('.sdk-tooltip-container').remove();
        });
    };
    return SearchGridViewTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchGridViewTemplate);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("802e920df8f59a8ee488")
/******/ })();
/******/ 
/******/ }
)
//# sourceMappingURL=hot-update.js.map