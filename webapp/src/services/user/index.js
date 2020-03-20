export const USER_ID = '@payhold-User'

export const saveUserId = id =>{
	localStorage.setItem(USER_ID, id)
}
export const getUserId = () => localStorage.getItem(USER_ID)
export const removeUserId = () => localStorage.removeItem(USER_ID)
