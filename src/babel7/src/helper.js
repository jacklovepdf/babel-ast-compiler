export const arrFrom = (arr) => {
    return Array.from(arr, function(item){
        return item * item;
    });
}