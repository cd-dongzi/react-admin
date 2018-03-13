import {allRoutes} from 'router/config'

/*
    当前路径的路由信息
 */
export const filterRoutes = pathname => {
    let pathSnippets = pathname.split('/').filter(path => path)
    let paths = pathSnippets.map((path, index) => `/${pathSnippets.slice(0, index + 1).join('/')}`)
    let filter = (arr, index) => {
        if (index < paths.length) {
            let p = paths[index]
            index ++
            let route = arr.find(route => route.path === p)
            return route ? [route].concat(route.children ? filter(route.children, index) : []) : []
        }
        return []
    }
    return [allRoutes.find( route => route.path === '/')].concat(filter(allRoutes, 0))
}

/*
 判断对象是否相等
 */
export const diff_obj = (obj1,obj2) => {
    let o1 = obj1 instanceof Object
    let o2 = obj2 instanceof Object
    if(!o1 || !o2){/*  判断不是对象  */
        return obj1 === obj2
    }

    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false

    for(let attr in obj1){
        let t1 = obj1[attr] instanceof Object
        let t2 = obj2[attr] instanceof Object
        if(t1 && t2){
            return diff_obj(obj1[attr],obj2[attr])
        }else if(obj1[attr] !== obj2[attr]){
            return false
        }
    }
    return true
}


