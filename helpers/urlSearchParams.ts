export const urlSearchParams = (obj:any) => {
    return Object.entries(obj).map(([key,value]) => value).join('/');
}