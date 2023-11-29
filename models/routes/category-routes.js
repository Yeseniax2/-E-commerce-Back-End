const Category = require("../Category");



Router.get('/',(req,res) => {
    Category.findAll({
        include: [ Product ]
    })
    .then((categories)) => res.json(Categories))
    .catch((err) => { res.json(err) });

    router.get('/:id', (req, res) =>{

        Category.findOne({
            where:{ id: req.paramas.id },
            include: [ Product ]
        })
        .then((category) => res.json(category))
        .catch((err) => { res.json(err) });
      }); 
      router.put('/:id', (req, res) => {
        Category.update(req.body, { where: { id: req.params.id } })
        .then((category) => res.json(category))
        .catch((err) => { res.json(err) });
    });
    router.delete('/:id', (req, res) => {
        Category.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ message: 'Category deleted' }))
      });

      module.exports = router;
