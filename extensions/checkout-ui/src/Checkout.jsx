import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useCartLines,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const cartLines = useCartLines();
  const quantity = cartLines.reduce((acc, line) => acc + line.quantity, 0);

  return (
    <Banner title="Number of items in cart">
      {quantity === 1
        ? translate("total_product", { quantity: quantity })
        : translate("total_products", { quantity: quantity })}
    </Banner>
  );
}
