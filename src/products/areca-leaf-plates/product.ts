import type { Product } from '../types'
// PLACEHOLDER photographs — swap these files for real product shots.
import image01 from './areca-leaf-plates-01.jpg'
import image02 from './areca-leaf-plates-02.jpg'

const arecaLeafPlates: Product = {
  productId: 'areca-leaf-plates',
  productName: 'Areca Leaf Disposable Plates',
  productCategory: 'Disposable Products',
  productDescription:
    'Heat-pressed areca palm leaf plates — no coating, no adhesive, composting in eight weeks.',
  productSpecification:
    'Single-material fallen areca palm leaf, heat-pressed at 180 °C. Round, 25 cm diameter, 4-compartment option available. Microwave and oven safe to 200 °C. Holds liquid for 4+ hours. Cartons of 100.',
  productPrice: 28,
  productDetails:
    'Nothing is felled to make these plates. Areca palms shed their fronds naturally; the leaves are gathered, washed in water alone, sun-dried, then pressed into shape with heat and pressure. No binder, wax, plastic film or bleach is involved at any stage, which is what lets the plate compost in roughly eight weeks and what makes it safe against hot and oily food. Each plate carries its own grain and shade, so a carton will not look uniform. Sold by the carton of 100 with custom sizes available at volume, and we can supply the compostability certification catering and events buyers usually need.',
  productImages: [image01, image02],
  productSizes: ['20 cm', '25 cm', '30 cm'],
  productWeights: ['Carton of 100 — 3.2 kg'],
}

export default arecaLeafPlates
