import { createAction } from 'redux-actions'

//侧边栏开关
export const changeCollapsed = createAction('CHANGE_COLLAPSED')
//侧边栏打开的位置
export const setOpenKeys = createAction('SET_OPENKEYS') 

//面包屑
export const addBreadCrumbs = createAction('ADD_BREADCRUMBS')

//tabviews
export const addTabView = createAction('ADD_TAB_VIEWS')
export const delTabView = createAction('DEL_TAB_VIEWS')
export const getTabView = createAction('GET_TAB_VIEWS')



