// 指定した要素が生成されるまで待ち、取得できたらその要素を返す
function waitForElement(targetSelector) {
  const targetElement = document.querySelector(targetSelector)
  if (targetElement) {
      return Promise.resolve(targetElement)
  }
  return new Promise((resolve) => {
      const observer = new MutationObserver((mutations) => {
          const updatedElement = document.querySelector(targetSelector)
          if (updatedElement) {
              observer.disconnect()
              resolve(updatedElement)
          }
      })
      observer.observe(document.documentElement, {
          childList: true,
          subtree: true
      })
  })
}

// ほしい要素を指定（クラス名）
const targetElement = ''
waitForElement(targetElement).then((element) => {
  console.log('create and fetched element', element)
})
