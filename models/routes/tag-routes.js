const ProductTag = require("../ProductTag");

const router =
const {}

router.get('/', (req, res) => {
    Tag.findAll({
        include:  [ { model:Product, through:ProductTag } ]
    })
    .then((tags) => res.json(tags))
    .catch((err) => res.json(err));
});

router.get('id/:id', (req, res) => {
    Tag.fondOne({
        where: {id: req.params.id},
        include: [ {model:Product, through:ProductTag } ]
    })
    .then((tag) => res.json(tag))
    .catch((err) => res.json(err));
} 
)