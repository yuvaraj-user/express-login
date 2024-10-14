const dashboard = {};
dashboard.getindex = async function (req, res) {
    res.render('../views/index');
}

module.exports = dashboard;