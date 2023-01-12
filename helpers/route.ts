const wrapRoute = (route: string, key?: string): {get: (val?: Record<string, string>) => string} => {
    const format = (val?: Record<string, string>) =>
     (key) ? route.replaceAll(key, val?.[key] || '') : route;

    return {get: format}
}

export const routes = {
    users: wrapRoute(`/users/id`, 'id')
}


export const hashTagUrl = (name:string) => {
    return `/questions?page=1&orderFieldName=createdAt&orderValue=DESC&onlyAnswered=false&search=&hashTags=${encodeURIComponent(name)};`
}
