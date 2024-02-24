// 指定した要素が生成されるまで待ち、取得できたらその要素を返す
function waitForElement(targetSelector, timeout) {
    const targetElement = document.querySelector(targetSelector)
    if (targetElement) {
        return Promise.resolve(targetElement)
    }
    return new Promise((resolve, reject) => {
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
        });

        // タイムアウト用のPromise
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                observer.disconnect();
                reject(new Error("Timeout waiting for element"));
            }, timeout);
        });

        // タイムアウトと元の処理の両方のPromiseで最初に解決されたものを返す
        Promise.race([timeoutPromise, new Promise(resolve => observer)]).then(() => {
            observer.disconnect();
        });
    });
}

// 使用例
// ほしい要素を指定（クラス名とか）
const targetElement = ''
waitForElement(targetElement, 5000)
    .then(element => {
        console.log("Element found:", element);
    })
    .catch(error => {
        console.error("Error:", error);
    });
