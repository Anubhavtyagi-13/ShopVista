import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/500x500?text=' + encodeURIComponent(product.name)
            }}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <span className="text-primary-600 font-bold text-xl">
              ${product.price.toFixed(2)}
            </span>
            {product.rating && (
              <div className="ml-auto flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating}
                </span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {product.category}
          </p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

