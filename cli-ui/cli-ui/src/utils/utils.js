Array.prototype.delete = function(dx) { 
    if(isNaN(dx)||dx>this.length){return false;} 
    this.splice(dx,1); 
} 

export default {
    // 筛选功能
    createFilter(queryString, type) {
        return restaurant => {
            return (
            restaurant[type].toLowerCase().indexOf(queryString.toLowerCase()) ===0);
        };
    }
}
