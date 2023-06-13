import Product from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";
import ApiFeatures from "../utils/apiFeatures.js";

// Create Product -- Admin
export const createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Products
export const getAllProducts = catchAsyncError(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productCount,
  });
});

// Get Product Details
export const getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product -- Admin
export const updateProduct = catchAsyncError(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});

// Create New Review or Update Review
export const createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);

  if (!product) return next(new ErrorHandler("Product not found", 404));

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  
  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id) {
        review.rating = rating;
        review.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let totalRating = 0;
  product.ratings = product.reviews.forEach((review) => {
    totalRating += review.rating;
  });

  product.ratings = totalRating / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});
