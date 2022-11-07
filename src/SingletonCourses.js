var SingletonCourses = (function () {
    var instance;

    function createInstance() {
        var object = new Object();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
export default SingletonCourses