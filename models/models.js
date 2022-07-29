const sequelize = require("../configs/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define("products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Category = sequelize.define("categories", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Brand = sequelize.define("brands", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Rating = sequelize.define("reviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  review: { type: DataTypes.STRING, allowNull: false },
  rate: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const ProductInfo = sequelize.define("products_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
});

const Location = sequelize.define("locations", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  country: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  destrict: { type: DataTypes.STRING, allowNull: false },
  street: { type: DataTypes.STRING, allowNull: false },
  indexPost: { type: DataTypes.INTEGER, allowNull: false },
});

const CategoryBrand = sequelize.define("category_brands", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Sale = sequelize.define("sales", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  discount: { type: DataTypes.INTEGER, allowNull: false },
  image: { typr: DataTypes.STRING, allowNull: false },
  expiresDate: { type: DataTypes.DATE, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasOne(ProductInfo, { as: "info" });
ProductInfo.belongsTo(Product);

Basket.hasOne(Location, { as: "location" });
Location.belongsTo(Basket);

Category.belongsToMany(Brand, { through: CategoryBrand });
Brand.belongsToMany(Category, { through: CategoryBrand });

Sale.hasOne(Product);
Product.belongsTo(Sale);

module.exports = {
  User,
  Product,
  ProductInfo,
  Basket,
  BasketProduct,
  Category,
  Brand,
  Rating,
  Location,
  CategoryBrand,
};
