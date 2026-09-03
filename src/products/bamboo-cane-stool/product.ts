import type { Product } from '../types'
// PLACEHOLDER photographs — swap these files for real product shots.
import image01 from './bamboo-cane-stool-01.jpg'
import image02 from './bamboo-cane-stool-02.jpg'

const bambooCaneStool: Product = {
  productId: 'bamboo-cane-stool',
  productName: 'Bamboo and Cane Mora Stool',
  productCategory: 'Bamboo Products',
  productDescription:
    'A hand-woven mora stool in seasoned bamboo and cane, the traditional low seat of an Assamese home.',
  productSpecification:
    'Seasoned Assam bamboo frame with hand-woven cane top. 40 cm high, 35 cm seat diameter. Natural wax finish, no synthetic lacquer. Load rated to 110 kg.',
  productPrice: 74,
  productDetails:
    'The mora is made by wrapping split cane around a bamboo ring frame, a joint held entirely by tension rather than glue or nails. Each stool is the work of a single artisan over roughly two days, which is why the weave pattern varies slightly between pieces. The bamboo is cut on a three-year cycle and cured for six weeks before use, so it will not split as it dries in a heated room. Supplied flat-packed in pairs for container loading, or assembled for domestic orders.',
  productImages: [image01, image02],
  productColors: ['Natural', 'Smoked brown'],
  productWeights: ['2.4 kg'],
}

export default bambooCaneStool
