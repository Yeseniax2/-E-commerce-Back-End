



router.get('/', (req, res) => {
    ProductTag.findAll({
    include: [Category, Tag]
    })
    .then((products) => res.json(products))
    .catch((err) => { res.json(err) });

});

router.get('/:id', (req, res) => {
     Product.findOne({
        where: { id: req.params.id },
        include: [Category, Tag]
  })
     .then((product) => res.json(product))
     .catch((err) => { res.json(err) })
     });

     Product.create(req.body)
    .then((product) => { 
        if (req.body.tagIds.length) {
            const productTagIdArr = req.body.tagIds.map((tag_id) => {
              return {
                product_id: product.id,
                tag_id,
              };
            });
            res.status(200).json(product);
        })

