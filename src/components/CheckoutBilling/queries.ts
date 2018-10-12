import gql from "graphql-tag";

export const UPDATE_CHECKOUT_BILLING_ADDRESS = gql`
  mutation updateCheckoutShippingAddress(
    $checkoutId: ID!
    $shippingAddress: AddressInput!
  ) {
    checkoutShippingAddressUpdate(
      checkoutId: $checkoutId
      shippingAddress: $shippingAddress
    ) {
      errors {
        field
        message
      }
    }
  }
`;