import createHistory from "history/createBrowserHistory"

let history = createHistory()
const unlisten = history.listen((location, action) => {
    console.log(location)
})
// 停止监听
// unlisten()
export default history