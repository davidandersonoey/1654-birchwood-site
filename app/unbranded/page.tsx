"use client";

import Home from "../page";

/**
 * /unbranded — MLS-compliant variant of the home page for 1654 Birchwood Drive.
 *
 * Per the Toronto Real Estate Board's rules on virtual-tour URLs, listings
 * linked from the MLS public feed must not display the listing agent's
 * name, brokerage, contact information, or any brokerage logos. The user-
 * facing copy / property tour / gallery / floor plans / neighbourhood
 * content is otherwise identical to the branded site at "/".
 *
 * The same `Home` component renders for both routes — internally it uses
 * `usePathname()` to detect /unbranded and strips the agent identification
 * blocks (closing-CTA agent card, footer "Listing Agents" column, HK logo).
 */
export default function UnbrandedPage() {
  return <Home />;
}
