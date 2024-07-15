function setRem() {
  const defalutWidth = 1920 // 默认宽度
  const defalueScale = 1 // 默认比例关系
  let defalutFontSize = 192 // 默认字体大小
 
  const getWidth = window.innerWidth // 获取屏幕的宽度
  let currentScale = getWidth / defalutWidth // 计算当前的屏幕大小和默认宽度之间的比例 
  // 防止缩放太小
  if (getWidth < 1440) {
    currentScale = 1440/defalutWidth
  }
  // 计算的宽度比例关系 再 * 默认的字体大小,获取计算的字体大小
  const currentFontSize = (currentScale / defalueScale) * defalutFontSize
  document.documentElement.style.fontSize = currentFontSize + 'px'
}

setRem()
window.onresize = function () {
  setRem()
}