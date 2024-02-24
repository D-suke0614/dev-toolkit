// ページのURLをコピーする
const copyUrl = () => {
  const input = document.createElement('input')
  input.value = location.href
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

// 使い方
/**
 * buttonのonclickなどでこの関数を呼び出すだけ
 */
