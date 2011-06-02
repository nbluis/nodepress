module.exports.createDefaultModelRoutes = function (webapp, controller, rootURL) {
    webapp.get(rootURL + '/new', controller.new);
    webapp.get(rootURL + '/:id', controller.show);
    webapp.get(rootURL + '/:id/edit', controller.edit);
    webapp.get(rootURL + '/:id/destroy', controller.destroy);
    webapp.post(rootURL + '/', controller.create);
    webapp.put(rootURL + '/:id', controller.update);
}