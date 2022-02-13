"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8056],{

/***/ 62177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(67154));var _react=_interopRequireDefault(__webpack_require__(67294));var _Trash=_interopRequireDefault(__webpack_require__(18568));var _IconButton=__webpack_require__(30741);var _Box=__webpack_require__(5493);var _helperPlugin=__webpack_require__(68547);var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var DeleteButton=function DeleteButton(_ref){var tokenName=_ref.tokenName,onClickDelete=_ref.onClickDelete;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;return/*#__PURE__*/_react["default"].createElement(_Box.Box,(0,_extends2["default"])({paddingLeft:1},_helperPlugin.stopPropagation),/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:function onClick(){trackUsage('willDeleteToken');onClickDelete();},label:formatMessage({id:'app.component.table.delete',defaultMessage:'Delete {target}'},{target:"".concat(tokenName)}),noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null)}));};DeleteButton.propTypes={tokenName:_propTypes["default"].string.isRequired,onClickDelete:_propTypes["default"].func.isRequired};var _default=DeleteButton;exports["default"]=_default;

/***/ }),

/***/ 60014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _Pencil=_interopRequireDefault(__webpack_require__(19352));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Link=__webpack_require__(85104);var _reactRouterDom=__webpack_require__(39711);var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var LinkUpdate=/*#__PURE__*/(0,_styledComponents["default"])(_Link.Link).withConfig({displayName:"UpdateButton__LinkUpdate",componentId:"sc-13tqcqf-0"})(["svg{path{fill:",";}}&:hover{svg{path{fill:",";}}}"],function(_ref){var theme=_ref.theme;return theme.colors.neutral500;},function(_ref2){var theme=_ref2.theme;return theme.colors.neutral800;});var UpdateButton=function UpdateButton(_ref3){var tokenName=_ref3.tokenName,tokenId=_ref3.tokenId;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useHistory=(0,_reactRouterDom.useHistory)(),pathname=_useHistory.location.pathname;return/*#__PURE__*/_react["default"].createElement(LinkUpdate,{to:"".concat(pathname,"/").concat(tokenId),title:formatMessage({id:'app.component.table.edit',defaultMessage:'Edit {target}'},{target:"".concat(tokenName)})},/*#__PURE__*/_react["default"].createElement(_Pencil["default"],null));};UpdateButton.propTypes={tokenName:_propTypes["default"].string.isRequired,tokenId:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired};var _default=UpdateButton;exports["default"]=_default;

/***/ }),

/***/ 63384:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(67154));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireDefault(__webpack_require__(67294));var _Typography=__webpack_require__(49425);var _Table=__webpack_require__(41798);var _Flex=__webpack_require__(67826);var _helperPlugin=__webpack_require__(68547);var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactRouterDom=__webpack_require__(39711);var _DeleteButton=_interopRequireDefault(__webpack_require__(62177));var _UpdateButton=_interopRequireDefault(__webpack_require__(60014));var TableRows=function TableRows(_ref){var canDelete=_ref.canDelete,canUpdate=_ref.canUpdate,_onClickDelete=_ref.onClickDelete,withBulkActions=_ref.withBulkActions,rows=_ref.rows;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useQueryParams=(0,_helperPlugin.useQueryParams)(),_useQueryParams2=(0,_slicedToArray2["default"])(_useQueryParams,1),query=_useQueryParams2[0].query;var _query$sort$split=query.sort.split(':'),_query$sort$split2=(0,_slicedToArray2["default"])(_query$sort$split,2),sortOrder=_query$sort$split2[1];var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push,pathname=_useHistory.location.pathname;var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var apiTokens=rows.sort(function(a,b){var comparaison=a.name.localeCompare(b.name);return sortOrder==='DESC'?-comparaison:comparaison;});return/*#__PURE__*/_react["default"].createElement(_Table.Tbody,null,apiTokens.map(function(apiToken){return/*#__PURE__*/_react["default"].createElement(_Table.Tr,(0,_extends2["default"])({key:apiToken.id},(0,_helperPlugin.onRowClick)({fn:function fn(){trackUsage('willEditTokenFromList');push("".concat(pathname,"/").concat(apiToken.id));},condition:canUpdate})),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800",fontWeight:"bold"},apiToken.name)),/*#__PURE__*/_react["default"].createElement(_Table.Td,{maxWidth:(0,_helperPlugin.pxToRem)(250)},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800",ellipsis:true},apiToken.description)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800"},formatMessage({id:"Settings.apiTokens.types.".concat(apiToken.type),defaultMessage:'Type unknown'}))),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800"},/*#__PURE__*/_react["default"].createElement(_helperPlugin.RelativeTime,{timestamp:new Date(apiToken.createdAt)}))),withBulkActions&&/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{justifyContent:"end"},canUpdate&&/*#__PURE__*/_react["default"].createElement(_UpdateButton["default"],{tokenName:apiToken.name,tokenId:apiToken.id}),canDelete&&/*#__PURE__*/_react["default"].createElement(_DeleteButton["default"],{tokenName:apiToken.name,onClickDelete:function onClickDelete(){return _onClickDelete(apiToken.id);}}))));}));};TableRows.defaultProps={canDelete:false,canUpdate:false,onClickDelete:function onClickDelete(){},rows:[],withBulkActions:false};TableRows.propTypes={canDelete:_propTypes["default"].bool,canUpdate:_propTypes["default"].bool,onClickDelete:_propTypes["default"].func,rows:_propTypes["default"].array,withBulkActions:_propTypes["default"].bool};var _default=TableRows;exports["default"]=_default;

/***/ }),

/***/ 65954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(78862);var _Main=__webpack_require__(62031);var _Button=__webpack_require__(19408);var _LinkButton=__webpack_require__(60985);var _Plus=_interopRequireDefault(__webpack_require__(80768));var _reactQuery=__webpack_require__(23724);var _reactRouterDom=__webpack_require__(39711);var _qs=_interopRequireDefault(__webpack_require__(36232));var _utils=__webpack_require__(53777);var _permissions=_interopRequireDefault(__webpack_require__(13240));var _tableHeaders=_interopRequireDefault(__webpack_require__(9070));var _DynamicTable=_interopRequireDefault(__webpack_require__(63384));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ApiTokenListView=function ApiTokenListView(){(0,_helperPlugin.useFocusWhenNavigate)();var queryClient=(0,_reactQuery.useQueryClient)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,_helperPlugin.useNotification)();var _useRBAC=(0,_helperPlugin.useRBAC)(_permissions["default"].settings['api-tokens']),_useRBAC$allowedActio=_useRBAC.allowedActions,canCreate=_useRBAC$allowedActio.canCreate,canDelete=_useRBAC$allowedActio.canDelete,canUpdate=_useRBAC$allowedActio.canUpdate,canRead=_useRBAC$allowedActio.canRead;var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;(0,_react.useEffect)(function(){push({search:_qs["default"].stringify({sort:'name:ASC'},{encode:false})});},[push]);var _useQuery=(0,_reactQuery.useQuery)(['api-tokens'],/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:trackUsage('willAccessTokenList');_context.next=3;return _utils.axiosInstance.get("/admin/api-tokens");case 3:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data.data;trackUsage('didAccessTokenList',{number:data.length});return _context.abrupt("return",data);case 7:case"end":return _context.stop();}}},_callee);})),{enabled:canRead,onError:function onError(){toggleNotification({type:'warning',message:{id:'notification.error',defaultMessage:'An error occured'}});}}),apiTokens=_useQuery.data,status=_useQuery.status,isFetching=_useQuery.isFetching;var isLoading=canRead&&(status!=='success'&&status!=='error'||status==='success'&&isFetching);var deleteMutation=(0,_reactQuery.useMutation)(/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id){return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _utils.axiosInstance["delete"]("/admin/api-tokens/".concat(id));case 2:case"end":return _context2.stop();}}},_callee2);}));return function(_x){return _ref2.apply(this,arguments);};}(),{onSuccess:function(){var _onSuccess=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(){return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return queryClient.invalidateQueries(['api-tokens']);case 2:trackUsage('didDeleteToken');case 3:case"end":return _context3.stop();}}},_callee3);}));function onSuccess(){return _onSuccess.apply(this,arguments);}return onSuccess;}(),onError:function onError(err){var _err$response,_err$response$data;if(err!==null&&err!==void 0&&(_err$response=err.response)!==null&&_err$response!==void 0&&(_err$response$data=_err$response.data)!==null&&_err$response$data!==void 0&&_err$response$data.data){toggleNotification({type:'warning',message:err.response.data.data});}else{toggleNotification({type:'warning',message:{id:'notification.error',defaultMessage:'An error occured'}});}}});var shouldDisplayDynamicTable=canRead&&apiTokens;var shouldDisplayNoContent=canRead&&!apiTokens&&!canCreate;var shouldDisplayNoContentWithCreationButton=canRead&&!apiTokens&&canCreate;return/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":isLoading},/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"API Tokens"}),/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:formatMessage({id:'Settings.apiTokens.title',defaultMessage:'API Tokens'}),subtitle:formatMessage({id:'Settings.apiTokens.description',defaultMessage:'List of generated tokens to consume the API'}),primaryAction:canCreate?/*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton,{"data-testid":"create-api-token-button",startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null),size:"L",onClick:function onClick(){return trackUsage('willAddTokenFromList');},to:"/settings/api-tokens/create"},formatMessage({id:'Settings.apiTokens.create',defaultMessage:'Add Entry'})):undefined}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,!canRead&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoPermissions,null),shouldDisplayDynamicTable&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.DynamicTable,{headers:_tableHeaders["default"],contentType:"api-tokens",rows:apiTokens,withBulkActions:canDelete||canUpdate,isLoading:isLoading,onConfirmDelete:function onConfirmDelete(id){return deleteMutation.mutateAsync(id);}},/*#__PURE__*/_react["default"].createElement(_DynamicTable["default"],{canDelete:canDelete,canUpdate:canUpdate,rows:apiTokens,withBulkActions:canDelete||canUpdate})),shouldDisplayNoContentWithCreationButton&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoContent,{content:{id:'Settings.apiTokens.addFirstToken',defaultMessage:'Add your first API Token'},action:/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:'Settings.apiTokens.addNewToken',defaultMessage:'Add new API Token'}))}),shouldDisplayNoContent&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoContent,{content:{id:'Settings.apiTokens.emptyStateLayout',defaultMessage:'You don’t have any content yet...'}})));};var _default=ApiTokenListView;exports["default"]=_default;

/***/ }),

/***/ 9070:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var tableHeaders=[{name:'name',key:'name',metadatas:{label:'Name',sortable:true}},{name:'description',key:'description',metadatas:{label:'Description',sortable:false}},{name:'type',key:'type',metadatas:{label:'Token type',sortable:false}},{name:'createdAt',key:'createdAt',metadatas:{label:'Created at',sortable:false}}];var _default=tableHeaders;exports["default"]=_default;

/***/ }),

/***/ 76796:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _permissions=_interopRequireDefault(__webpack_require__(13240));var _ListView=_interopRequireDefault(__webpack_require__(65954));var ProtectedApiTokenListView=function ProtectedApiTokenListView(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].settings['api-tokens'].main},/*#__PURE__*/_react["default"].createElement(_ListView["default"],null));};var _default=ProtectedApiTokenListView;exports["default"]=_default;

/***/ })

}]);