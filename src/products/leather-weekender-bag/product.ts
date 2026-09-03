import type { Product } from '../types'
// PLACEHOLDER photographs — swap these files for real product shots.
import image01 from './leather-weekender-bag-01.jpg'
import image02 from './leather-weekender-bag-02.jpg'

const leatherWeekenderBag: Product = {
  productId: 'leather-weekender-bag',
  productName: 'Full-Grain Leather Weekender Bag',
  productCategory: 'Leather Products',
  productDescription:
    'A vegetable-tanned full-grain holdall, cut and stitched by hand, sized for two days of travel.',
  productSpecification:
    'Vegetable-tanned full-grain buffalo hide, 1.8–2.0 mm. Solid brass hardware, waxed linen saddle stitch. 48 × 26 × 24 cm, 30 litre capacity. Cotton canvas lining with two internal pockets.',
  productPrice: 268,
  productDetails:
    'The hide is tanned with bark extracts rather than chromium salts, so the leather darkens and softens with handling instead of cracking. Panels are cut from a single hide per bag to keep the grain consistent, then saddle-stitched by hand — a stitch that will not unravel along its length if a thread is cut. Brass fittings are solid rather than plated, so wear brightens them rather than exposing base metal underneath. Expect visible grain variation, healed scars and insect marks; these are characteristics of a genuine full-grain hide, not defects.',
  productImages: [image01, image02],
  productColors: ['Tan', 'Dark walnut', 'Black'],
  productSizes: ['30 L', '42 L'],
  productWeights: ['1.6 kg'],
}

export default leatherWeekenderBag
