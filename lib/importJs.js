/**
 * [importJs 引入测试js文件]
 * @param  {number} order            [题号]
 * @param  {string} testFunctionName [测试函数名]
 * @return {}                  []
 */
var importJs = function(order, testFunctionName) {
	var fileRef = document.createElement('script');
	fileRef.setAttribute('id', 'problem');
	fileRef.setAttribute('type', 'text/javascript');
	fileRef.setAttribute('src', order + '.' + testFunctionName + '/' + testFunctionName + '.js');
	document.getElementsByTagName('head')[0].appendChild(fileRef);
};
/**
 * [excute 验证case]
 * @param  {function} testFunction [测试函数]
 * @param  {[]} testCase     [测试case]
 * @param  {boolean} printInput   [是否打印输入]
 * @param  {number} badIndex     [不正确的结果的索引]
 * @return {}              [无返回结果，输出log]
 */
var excute = function(testFunction, testCase, printInput, badIndex) {
	var i,
		len = testCase.length,
		logStr = '',
		startTime,
		endTime,
		result;
	if(typeof badIndex !== 'undefined') {
		startTime = Date.now();
		result = testFunction.apply(this, testCase[badIndex]);
		endTime = Date.now();
		logStr += printInput ? (testCase[badIndex] + ' : ' + result) : result;
		logStr += '  // ' + (endTime - startTime);
		console.log('Case' + badIndex + '~  ' + logStr);
	} else {
		for(i = 0; i < len; i++) {
			startTime = Date.now();
			result = testFunction.apply(this, testCase[i]);
			endTime = Date.now();
			logStr += printInput ? (testCase[i] + ' : ' + result) : result;
			logStr += '  // ' + (endTime - startTime);
			console.log('Case' + i + '~  ' + logStr);
			logStr = '';
		}
	}
};
/**
 * [excute 测试入口，传参与上文一致]
 */
var test = function(order, testFunctionName, testCase, printInput, badIndex) {
	importJs(order, testFunctionName);
	document.getElementById('problem').onload = function() {
		eval('excute(' + testFunctionName + ', testCase, printInput, badIndex)');
	};
};