const Product = require('');
const Category = require('');
const Tag = require('');
const ProductTag = require('');

Product.belongsto(Category,{
    foreignkey: 'category_id',
});

Category.hasMany(product, {
    foreignkey: 'category_id',
});

product.belongsToMany(Tag, {
    through:ProductTag,
    foreignkey:'Product_id',
});

Tag.belongsToMany(product, {
    through: ProductTag,
    foreignkey:'tag_id',
});

module.experts= {
    Product,
    Category,
    Tag,
    ProductTag,
};