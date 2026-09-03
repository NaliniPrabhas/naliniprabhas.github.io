import type { Product } from '../types'
// PLACEHOLDER photographs — swap these files for real product shots.
import image01 from './bhut-jolokia-chilli-paste-01.jpg'
import image02 from './bhut-jolokia-chilli-paste-02.jpg'

const bhutJolokiaChilliPaste: Product = {
  productId: 'bhut-jolokia-chilli-paste',
  productName: 'Bhut Jolokia Chilli Paste',
  productCategory: 'Bhut Jolokia',
  productDescription:
    'Slow-cooked ghost pepper paste with mustard oil, garlic and rock salt — heat with a fruit note behind it.',
  productSpecification:
    'Ingredients: Bhut Jolokia (62%), cold-pressed mustard oil, garlic, ginger, rock salt. No preservatives or added colour. 1,000,000+ SHU. 200 g glass jar. 18 months unopened; refrigerate after opening.',
  productPrice: 12,
  productDetails:
    'Bhut Jolokia grows in the Brahmaputra floodplain, where the humidity and soil give it a distinctly fruity aroma under the heat — the reason it is used for flavour in the region and not only for punishment. Peppers are picked ripe, deseeded by hand, then cooked slowly in mustard oil so the capsaicin infuses the oil rather than sitting raw on the palate. The result is a paste you can cook with by the quarter-teaspoon. Available in bulk food-grade pails for private-label and food-service buyers; FSSAI licensed, with lab certificates issued per batch.',
  productImages: [image01, image02],
  productWeights: ['200 g', '500 g', '5 kg pail'],
}

export default bhutJolokiaChilliPaste
