import type { Product } from '../types'
// PLACEHOLDER photographs — swap these files for real product shots.
import image01 from './bamboo-cane-furniture-01.jpg'
import image02 from './bamboo-cane-furniture-02.jpg'

const bambooCaneFurnitureSet: Product = {
  productId: 'bamboo-cane-5-piece-furniture',
  productName: 'Bamboo Cane 5 Piece Furniture Set',
  productCategory: 'Bamboo Products',
  productDescription:
    'A handmade bamboo five piece furniture set containing two single chairs, one big sofa and a center table.',
  productSpecification:
    'Seasoned assam five piece bamboo furniture set. The chairs have a dimension of 5m X 3m X 3m. The center table has a dimension of 6m X 6m X 3m. The sofa has a dimension of 10m X 3m X 4m.',
  productPrice: 74,
  productDetails:
    'A handmade bamboo five piece furniture set containing two single chairs, one big sofa and a center table. The entire set comes in multiple colors and can be customized to include sofa seats etc.',
  productImages: [image01, image02],
  productColors: ['Natural', 'Smoked brown'],
  productWeights: ['2.4 kg'],
}

export default bambooCaneFurnitureSet
